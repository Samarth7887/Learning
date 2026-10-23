/**
 * SynapseCS - Main Application Controller (Neo-Brutalist Edition)
 * Full Hash Router, Language Separation, Dynamic Tracers, and State Contract Validation.
 */

(function(window) {
  'use strict';

  class SynapseApp {
    constructor() {
      // Load language-neutral questions or fallback to legacy topics
      this.questionsCatalog = window.DSA_QUESTIONS || {};
      this.topics = window.DSA_TOPICS || {};
      this.langMeta = window.DSA_LANG_META || {};
      this.langCode = window.DSA_LANG_CODE || {};

      this.currentView = 'home';
      this.currentLang = localStorage.getItem('synapse_selected_lang') || 'python';
      this.currentTopicId = 'linked-list';
      this.currentQuestionId = null;
      this.currentApproachIdx = 0;
      this.explainAllMode = false;
      this.filterDifficulty = 'all';
      this.filterStatus = 'all';
      this.searchQuery = '';
      this.compareLang = null; // Optional secondary language for comparison

      // Normalize topics catalog
      this.normalizeData();

      this.expandedTopics = new Set(Object.keys(this.catalog));
      this.expandedSubtopics = new Set();
      for (const tKey in this.catalog) {
        (this.catalog[tKey].subtopics || []).forEach(s => this.expandedSubtopics.add(s.id));
      }

      this.progress = this.loadProgress();
      this.animator = null;
      this.heroMiniStep = 0;

      this.init();
    }

    normalizeData() {
      // Prefer window.DSA_QUESTIONS, fallback to window.DSA_TOPICS
      const source = Object.keys(this.questionsCatalog).length > 0 ? this.questionsCatalog : this.topics;
      this.catalog = {};

      for (const tKey in source) {
        const item = source[tKey];
        const qList = [];
        if (Array.isArray(item.questions)) qList.push(...item.questions);
        if (Array.isArray(item.subtopics)) {
          for (const sub of item.subtopics) {
            if (Array.isArray(sub.questions)) {
              for (const q of sub.questions) {
                if (!qList.some(existing => existing.id === q.id)) {
                  qList.push(q);
                }
              }
            }
          }
        }

        this.catalog[tKey] = {
          id: item.id || tKey,
          title: item.title,
          icon: item.icon || 'ph:code',
          description: item.description || '',
          subtopics: item.subtopics || [{ id: 'all', title: 'All Questions' }],
          questions: qList
        };
      }
    }

    init() {
      this.renderNavbar();
      this.renderFooter();
      this.initAnimator();
      this.bindSearchAndFilters();
      this.bindCustomInputControls();
      this.bindKeyboardShortcuts();

      // Listen for URL Hash Changes
      window.addEventListener('hashchange', () => this.handleRoute());

      // Initial Route Dispatch
      this.handleRoute();
    }

    /* -----------------------------------------------------------------------
     * HASH ROUTING (Zero-build, works on file:// and localhost)
     * #/
     * #/languages
     * #/learn/:lang
     * #/learn/:lang/:topic
     * #/learn/:lang/:topic/:qid
     * #/progress
     * ----------------------------------------------------------------------- */
    handleRoute() {
      const hash = window.location.hash.trim();
      if (!hash || hash === '#' || hash === '#/') {
        this.switchView('home');
        return;
      }

      if (hash === '#/languages') {
        this.switchView('languages');
        return;
      }

      if (hash === '#/progress') {
        this.switchView('progress');
        return;
      }

      const matchLearn = hash.match(/^#\/learn\/([a-zA-Z0-9_\-]+)(?:\/([a-zA-Z0-9_\-]+))?(?:\/([a-zA-Z0-9_\-]+))?$/);
      if (matchLearn) {
        const lang = matchLearn[1].toLowerCase();
        const topicId = matchLearn[2];
        const qid = matchLearn[3];

        // Check if language is registered
        if (this.langMeta && this.langMeta[lang]) {
          if (this.currentLang !== lang) {
            this.currentLang = lang;
            localStorage.setItem('synapse_selected_lang', lang);
            this.progress = this.loadProgress();
          }

          if (topicId && this.catalog[topicId]) {
            this.currentTopicId = topicId;
            this.expandedTopics.add(topicId);
          }

          this.switchView('topics');

          if (qid) {
            this.selectQuestion(qid, false);
          } else {
            // Select first question of active topic
            const activeTopic = this.catalog[this.currentTopicId] || Object.values(this.catalog)[0];
            if (activeTopic && activeTopic.questions.length > 0) {
              this.selectQuestion(activeTopic.questions[0].id, false);
            }
          }
          return;
        }
      }

      // Route Not Found (404)
      this.switchView('not-found');
    }

    startLearning() {
      const savedLang = localStorage.getItem('synapse_selected_lang');
      if (savedLang && this.langMeta[savedLang] && this.langMeta[savedLang].available) {
        window.location.hash = `#/learn/${savedLang}`;
      } else {
        window.location.hash = '#/languages';
      }
    }

    goToLanguages() {
      window.location.hash = '#/languages';
    }

    selectLanguage(langId) {
      if (this.langMeta[langId] && !this.langMeta[langId].available) return;
      this.currentLang = langId;
      localStorage.setItem('synapse_selected_lang', langId);
      this.progress = this.loadProgress();
      window.location.hash = `#/learn/${langId}`;
    }

    switchView(viewName) {
      this.currentView = viewName;
      this.renderNavbar();

      const views = {
        'home': document.getElementById('view-home'),
        'topics': document.getElementById('view-topics'),
        'progress': document.getElementById('view-progress'),
        'languages': document.getElementById('view-languages'),
        'not-found': document.getElementById('view-not-found')
      };

      for (const vKey in views) {
        if (views[vKey]) {
          views[vKey].classList.toggle('hidden', vKey !== viewName);
        }
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (viewName === 'home') {
        this.renderHome();
      } else if (viewName === 'languages') {
        this.renderLanguagesPicker();
      } else if (viewName === 'topics') {
        this.renderLanguageBanner();
        this.renderSidebar();
        this.updateProgressSummary();
        if (this.currentQuestionId) {
          this.loadQuestion(this.currentQuestionId);
        }
      } else if (viewName === 'progress') {
        this.renderDedicatedProgress();
      } else if (viewName === 'not-found') {
        const mount = document.getElementById('not-found-mount');
        if (mount && window.SynapseComponents) {
          mount.innerHTML = window.SynapseComponents.NotFoundView();
        }
      }
    }

    renderNavbar() {
      const container = document.getElementById('app-navbar-container');
      if (container && window.SynapseComponents) {
        container.innerHTML = window.SynapseComponents.Navbar({
          activeView: this.currentView,
          currentLang: this.currentLang
        });
      }
    }

    renderFooter() {
      const container = document.getElementById('app-footer-container');
      if (container && window.SynapseComponents) {
        container.innerHTML = window.SynapseComponents.Footer();
      }
    }

    toggleMobileNav() {
      const drawer = document.getElementById('mobile-nav-drawer');
      if (drawer) drawer.classList.toggle('hidden');
    }

    /* -----------------------------------------------------------------------
     * LANGUAGE PICKER VIEW (#/languages)
     * ----------------------------------------------------------------------- */
    renderLanguagesPicker() {
      const mount = document.getElementById('languages-grid-mount');
      if (!mount || !window.SynapseComponents) return;
      mount.innerHTML = '';

      const langs = Object.values(this.langMeta || {});
      langs.forEach(lang => {
        let qCount = 0;
        if (lang.available) {
          for (const tKey in this.catalog) {
            qCount += (this.catalog[tKey].questions || []).length;
          }
        }
        const langProgress = this.loadProgress(lang.id);
        const solved = langProgress.size;

        mount.innerHTML += window.SynapseComponents.LanguageCard({
          lang: lang,
          questionCount: qCount,
          completedCount: solved
        });
      });
    }

    renderLanguageBanner() {
      const mount = document.getElementById('language-mini-lesson-mount');
      if (!mount || !window.SynapseComponents) return;
      const meta = (this.langMeta && this.langMeta[this.currentLang]) || null;
      if (meta) {
        mount.innerHTML = window.SynapseComponents.HelloWorldMiniLesson({ langMeta: meta });
      } else {
        mount.innerHTML = '';
      }
    }

    /* -----------------------------------------------------------------------
     * HOME PAGE
     * ----------------------------------------------------------------------- */
    renderHome() {
      this.renderHeroMiniDemo();
      this.renderHomeTopicsGrid();
      this.renderHowItWorks();
      this.renderDifficultyCards();
      this.renderHomeProgress();
      this.renderHomeCTA();
    }

    renderHeroMiniDemo() {
      const canvas = document.getElementById('hero-mini-canvas');
      const desc = document.getElementById('hero-mini-desc');
      if (!canvas) return;

      const steps = [
        {
          desc: "Step 0: Head points to 0x1000 (10). Chain: 10 -> 20 -> 30 -> NULL",
          nodes: [
            { val: 10, addr: "0x1000", next: "0x1020", ptr: "HEAD" },
            { val: 20, addr: "0x1020", next: "0x1040", ptr: "" },
            { val: 30, addr: "0x1040", next: "NULL", ptr: "" }
          ]
        },
        {
          desc: "Step 1: Rewire Node 10. 10.next = NULL. Prev = 10, Curr = 20.",
          nodes: [
            { val: 10, addr: "0x1000", next: "NULL", ptr: "PREV" },
            { val: 20, addr: "0x1020", next: "0x1040", ptr: "CURR" },
            { val: 30, addr: "0x1040", next: "NULL", ptr: "" }
          ]
        },
        {
          desc: "Step 2: Rewire Node 20. 20.next = 10 (0x1000). Prev = 20, Curr = 30.",
          nodes: [
            { val: 20, addr: "0x1020", next: "0x1000", ptr: "PREV" },
            { val: 10, addr: "0x1000", next: "NULL", ptr: "" },
            { val: 30, addr: "0x1040", next: "NULL", ptr: "CURR" }
          ]
        },
        {
          desc: "Step 3: Rewire Node 30. 30.next = 20 (0x1020). New HEAD = 0x1040! Reversal complete.",
          nodes: [
            { val: 30, addr: "0x1040", next: "0x1020", ptr: "HEAD" },
            { val: 20, addr: "0x1020", next: "0x1000", ptr: "" },
            { val: 10, addr: "0x1000", next: "NULL", ptr: "" }
          ]
        }
      ];

      const cur = steps[this.heroMiniStep % steps.length];
      if (desc) desc.textContent = cur.desc;

      canvas.innerHTML = cur.nodes.map((node, i) => `
        <div class="relative flex items-center">
          ${node.ptr ? `<span class="pointer-pill">${node.ptr}</span>` : ''}
          <div class="ll-node-box">
            <div class="ll-node-val">
              <span class="ll-node-addr font-mono">${node.addr}</span>
              <span class="ll-node-data font-mono">${node.val}</span>
            </div>
            <div class="ll-node-next">
              <span class="text-[8px] text-zinc-500 uppercase font-mono">NEXT</span>
              <span class="font-mono font-bold text-[10px] text-emerald-600">${node.next}</span>
            </div>
          </div>
          ${i < cur.nodes.length - 1 ? `
            <svg width="24" height="24" viewBox="0 0 24 24" class="overflow-visible mx-1 text-zinc-400">
              <line x1="2" y1="12" x2="18" y2="12" stroke="currentColor" stroke-width="2" />
              <polygon points="16,8 22,12 16,16" fill="currentColor" />
            </svg>
          ` : ''}
        </div>
      `).join('');

      const stepBtn = document.getElementById('hero-mini-step-btn');
      const resetBtn = document.getElementById('hero-mini-reset-btn');
      if (stepBtn) stepBtn.onclick = () => { this.heroMiniStep++; this.renderHeroMiniDemo(); };
      if (resetBtn) resetBtn.onclick = () => { this.heroMiniStep = 0; this.renderHeroMiniDemo(); };
    }

    renderHomeTopicsGrid() {
      const container = document.getElementById('home-topics-grid');
      if (!container || !window.SynapseComponents) return;
      container.innerHTML = '';

      for (const tKey in this.catalog) {
        const topic = this.catalog[tKey];
        const qCount = (topic.questions || []).length;
        const solved = (topic.questions || []).filter(q => this.isCompleted(q.id)).length;

        container.innerHTML += window.SynapseComponents.TopicCard({
          id: tKey,
          title: topic.title,
          icon: topic.icon === 'ph:tree-structure' ? '🌳' :
                topic.icon === 'ph:rows' ? '📚' :
                topic.icon === 'ph:clock-countdown' ? '⏳' :
                topic.icon === 'ph:grid-four' ? '#️⃣' : '🔗',
          description: topic.description,
          questionCount: qCount,
          completedCount: solved,
          onClick: `window.location.hash = '#/learn/${this.currentLang}/${tKey}'`
        });
      }
    }

    renderHowItWorks() {
      const container = document.getElementById('how-it-works-steps');
      if (!container || !window.SynapseComponents) return;
      container.innerHTML = '';

      const steps = [
        { num: '01', title: 'Pick Your Language Track', desc: 'Choose between Python, Java, C++, or JavaScript with pure native idioms and memory semantics.' },
        { num: '02', title: 'Watch Dynamic Tracers', desc: 'Step forward and back through physical pointers, heap allocations, and stack frames generated by reference tracers.' },
        { num: '03', title: 'Master Line-by-Line Tags', desc: 'Every single line is tagged and explained in plain English, synchronizing code execution with visual state.' }
      ];

      steps.forEach(s => {
        container.innerHTML += window.SynapseComponents.HowItWorksStep(s);
      });
    }

    renderDifficultyCards() {
      const container = document.getElementById('difficulty-cards-grid');
      if (!container || !window.SynapseComponents) return;
      container.innerHTML = '';

      const diffs = [
        { diff: 'Basic', title: 'Foundations & Layouts', desc: 'Master physical node definitions, 64-bit pointer arithmetic, and linear contiguous allocation.', count: 18 },
        { diff: 'Medium', title: 'Algorithmic Patterns', desc: 'Conquer two pointers, sliding windows, Floyd cycle detection, and monotonic stacks.', count: 32 },
        { diff: 'Hard', title: 'System & Optimization', desc: 'Solve LRU cache, Trapping Rain Water, Largest Histogram, and Multi-source BFS.', count: 12 }
      ];

      diffs.forEach(d => {
        container.innerHTML += window.SynapseComponents.DifficultyCard({
          diff: d.diff,
          title: d.title,
          description: d.desc,
          questionCount: d.count,
          onClick: `window.SynapseApp.filterByDifficulty('${d.diff}')`
        });
      });
    }

    renderHomeProgress() {
      const container = document.getElementById('home-progress-container');
      if (!container || !window.SynapseComponents) return;

      let totalQuestions = 0;
      for (const tKey in this.catalog) {
        totalQuestions += (this.catalog[tKey].questions || []).length;
      }
      const solved = this.progress.size;

      container.innerHTML = window.SynapseComponents.ProgressCard({
        totalQuestions,
        completedCount: solved,
        topics: Object.values(this.catalog).map(t => ({
          title: t.title,
          total: t.questions.length,
          completed: t.questions.filter(q => this.isCompleted(q.id)).length
        }))
      });
    }

    renderHomeCTA() {
      const container = document.getElementById('home-cta-container');
      if (container && window.SynapseComponents) {
        container.innerHTML = window.SynapseComponents.FinalCTA({
          onStartLearning: "window.SynapseApp.startLearning()"
        });
      }
    }

    filterByDifficulty(diff) {
      this.filterDifficulty = diff;
      const select = document.getElementById('filter-difficulty-select');
      if (select) select.value = diff;
      window.location.hash = `#/learn/${this.currentLang}`;
    }

    /* -----------------------------------------------------------------------
     * PROGRESS TRACKING PER LANGUAGE
     * ----------------------------------------------------------------------- */
    loadProgress(lang = this.currentLang) {
      try {
        const saved = localStorage.getItem(`synapse_progress_${lang}`);
        return saved ? new Set(JSON.parse(saved)) : new Set();
      } catch (e) {
        return new Set();
      }
    }

    saveProgress(lang = this.currentLang) {
      try {
        localStorage.setItem(`synapse_progress_${lang}`, JSON.stringify(Array.from(this.progress)));
      } catch (e) {}
    }

    isCompleted(qid) {
      return this.progress.has(qid);
    }

    toggleCompleted(qid, event) {
      if (event) event.stopPropagation();
      if (this.progress.has(qid)) {
        this.progress.delete(qid);
      } else {
        this.progress.add(qid);
      }
      this.saveProgress();
      this.renderSidebar();
      this.updateProgressSummary();
      this.updateQuestionCompletedButton();
    }

    updateProgressSummary() {
      let totalQuestions = 0;
      for (const tKey in this.catalog) {
        totalQuestions += (this.catalog[tKey].questions || []).length;
      }
      const completedCount = this.progress.size;
      const pct = totalQuestions > 0 ? Math.round((completedCount / totalQuestions) * 100) : 0;

      const summaryEl = document.getElementById('overall-progress-summary');
      if (summaryEl) {
        summaryEl.innerHTML = `
          <div class="flex items-center justify-between text-xs font-mono mb-1 text-zinc-700 font-bold">
            <span>Solved: <strong>${completedCount}/${totalQuestions}</strong></span>
            <span class="text-[#171e19]">${pct}%</span>
          </div>
          <div class="w-full h-2 bg-zinc-200 border border-black rounded-full overflow-hidden">
            <div class="h-full bg-[#ffe17c] border-r border-black" style="width: ${pct}%"></div>
          </div>
        `;
      }
    }

    /* -----------------------------------------------------------------------
     * ANIMATOR ENGINE INTEGRATION
     * ----------------------------------------------------------------------- */
    initAnimator() {
      if (typeof window.DSAAnimator !== 'function') return;

      this.animator = new window.DSAAnimator({
        canvasEl: document.getElementById('anim-stage-viewport'),
        descEl: document.getElementById('anim-step-description'),
        scrubberEl: document.getElementById('anim-scrubber'),
        counterEl: document.getElementById('anim-step-counter'),
        playBtn: document.getElementById('anim-btn-play'),
        speedInput: document.getElementById('anim-speed'),
        onHighlightTag: (tag, step) => this.onTracerHighlightStep(tag, step)
      });

      // Bind Playback Controls
      const pBtn = document.getElementById('anim-btn-play');
      const bBtn = document.getElementById('anim-btn-back');
      const fBtn = document.getElementById('anim-btn-step');
      const rBtn = document.getElementById('anim-btn-reset');

      if (pBtn) pBtn.onclick = () => this.animator.togglePlay();
      if (bBtn) bBtn.onclick = () => this.animator.stepBack();
      if (fBtn) fBtn.onclick = () => this.animator.stepForward();
      if (rBtn) rBtn.onclick = () => this.animator.reset();
    }

    onTracerHighlightStep(tag, step) {
      // Highlight code line matching tag
      this.highlightCodeTag(tag);

      // Update Explanation Panel
      const expEl = document.getElementById('active-line-explanation');
      const badgeEl = document.getElementById('active-line-badge');
      if (badgeEl) badgeEl.textContent = `Tag: [${tag.toUpperCase()}]`;

      const langQ = this.getLangQuestionData(this.currentQuestionId);
      if (expEl) {
        if (langQ && langQ.explanations && langQ.explanations[tag]) {
          expEl.innerHTML = `<span class="text-[#ffe17c] font-mono font-bold mr-1">[${tag.toUpperCase()}]:</span> ${langQ.explanations[tag]}`;
        } else if (step && step.description) {
          expEl.textContent = step.description;
        }
      }
    }

    bindCustomInputControls() {
      const runBtn = document.getElementById('anim-custom-run-btn');
      const inputEl = document.getElementById('anim-custom-input');

      if (runBtn && inputEl) {
        runBtn.onclick = () => {
          const val = inputEl.value.trim();
          if (!val) return;
          if (this.animator) {
            const res = this.animator.runCustomInput(val);
            if (!res.success) {
              alert(res.error);
            }
          }
        };
      }
    }

    /* -----------------------------------------------------------------------
     * SIDEBAR ACCORDION & SEARCH
     * ----------------------------------------------------------------------- */
    bindSearchAndFilters() {
      const searchInput = document.getElementById('sidebar-search-input');
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          this.searchQuery = e.target.value.toLowerCase().trim();
          this.renderSidebar();
        });
      }

      const diffFilter = document.getElementById('filter-difficulty-select');
      if (diffFilter) {
        diffFilter.addEventListener('change', (e) => {
          this.filterDifficulty = e.target.value;
          this.renderSidebar();
        });
      }

      const statusFilter = document.getElementById('filter-status-select');
      if (statusFilter) {
        statusFilter.addEventListener('change', (e) => {
          this.filterStatus = e.target.value;
          this.renderSidebar();
        });
      }
    }

    renderSidebar() {
      const sidebarContainer = document.getElementById('sidebar-topics-accordion');
      if (!sidebarContainer) return;
      sidebarContainer.innerHTML = '';

      for (const topicKey in this.catalog) {
        const topic = this.catalog[topicKey];
        const isTopicExpanded = this.expandedTopics.has(topic.id);
        const allQuestions = topic.questions || [];

        const filteredQuestions = allQuestions.filter(q => {
          if (this.filterDifficulty !== 'all' && q.difficulty.toLowerCase() !== this.filterDifficulty.toLowerCase()) return false;
          const completed = this.isCompleted(q.id);
          if (this.filterStatus === 'completed' && !completed) return false;
          if (this.filterStatus === 'pending' && completed) return false;
          if (this.searchQuery) {
            const matchTitle = q.title.toLowerCase().includes(this.searchQuery);
            const matchDesc = (q.description || '').toLowerCase().includes(this.searchQuery);
            if (!matchTitle && !matchDesc) return false;
          }
          return true;
        });

        const solvedInTopic = allQuestions.filter(q => this.isCompleted(q.id)).length;

        const topicWrapper = document.createElement('div');
        topicWrapper.className = 'border-2 border-black rounded-lg overflow-hidden bg-white hard-shadow-sm';

        const topicHeader = document.createElement('div');
        topicHeader.className = `p-3 bg-white flex items-center justify-between cursor-pointer select-none font-mono text-xs font-bold border-b border-black ${
          this.currentTopicId === topic.id ? 'bg-[#ffe17c]' : 'hover:bg-zinc-50'
        }`;
        topicHeader.onclick = () => {
          if (this.expandedTopics.has(topic.id)) {
            this.expandedTopics.delete(topic.id);
          } else {
            this.expandedTopics.add(topic.id);
          }
          this.currentTopicId = topic.id;
          this.renderSidebar();
        };

        topicHeader.innerHTML = `
          <div class="flex items-center space-x-2 overflow-hidden">
            <span class="text-xs transition-transform duration-200 ${isTopicExpanded ? 'rotate-90' : ''}">▸</span>
            <span class="truncate">${topic.title}</span>
          </div>
          <span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border border-black ${
            solvedInTopic === allQuestions.length && allQuestions.length > 0 ? 'bg-[#b7c6c2] text-[#171e19]' : 'bg-[#ffe17c] text-[#171e19]'
          }">
            ${solvedInTopic}/${allQuestions.length}
          </span>
        `;
        topicWrapper.appendChild(topicHeader);

        if (isTopicExpanded) {
          const topicBody = document.createElement('div');
          topicBody.className = 'p-2 space-y-2 bg-[#fbfbf8]';

          const subtopics = topic.subtopics || [{ id: 'all', title: 'Questions' }];
          subtopics.forEach(sub => {
            const subQuestions = filteredQuestions.filter(q => q.subtopicId === sub.id || sub.id === 'all');
            if (subQuestions.length === 0 && this.searchQuery) return;

            const isSubExpanded = this.expandedSubtopics.has(sub.id);
            const subWrap = document.createElement('div');
            subWrap.className = 'space-y-1';

            if (sub.id !== 'all' && sub.title) {
              const subHeader = document.createElement('div');
              subHeader.className = 'flex items-center justify-between text-[11px] font-mono font-bold text-zinc-600 px-2 py-1 cursor-pointer hover:text-black';
              subHeader.onclick = () => {
                if (this.expandedSubtopics.has(sub.id)) this.expandedSubtopics.delete(sub.id);
                else this.expandedSubtopics.add(sub.id);
                this.renderSidebar();
              };
              subHeader.innerHTML = `
                <span>${isSubExpanded ? '▾' : '▸'} ${sub.title}</span>
                <span class="text-[9px] text-zinc-500">${subQuestions.length}</span>
              `;
              subWrap.appendChild(subHeader);
            }

            if (isSubExpanded || sub.id === 'all') {
              const qList = document.createElement('div');
              qList.className = 'space-y-1 pl-1';

              subQuestions.forEach(q => {
                const isSelected = q.id === this.currentQuestionId;
                const isDone = this.isCompleted(q.id);
                const diffBadgeClass = q.difficulty.toLowerCase() === 'hard' ? 'badge-hard' :
                                       q.difficulty.toLowerCase() === 'medium' ? 'badge-medium' : 'badge-basic';

                const qRow = document.createElement('div');
                qRow.className = `p-2 rounded border border-black flex items-center justify-between cursor-pointer text-xs font-mono transition-all ${
                  isSelected ? 'bg-[#ffe17c] font-black hard-shadow-sm' : isDone ? 'bg-[#b7c6c2]/40 text-zinc-600' : 'bg-white hover:bg-zinc-100'
                }`;
                qRow.onclick = () => this.selectQuestion(q.id, true);

                qRow.innerHTML = `
                  <div class="flex items-center space-x-2 overflow-hidden pr-2">
                    <span class="text-xs ${isDone ? 'text-black font-bold' : 'text-zinc-400'}">${isDone ? '✓' : '○'}</span>
                    <span class="text-xs truncate ${isDone ? 'line-through text-zinc-600' : 'text-[#171e19]'}">${q.title}</span>
                  </div>
                  <div class="flex items-center space-x-1 flex-shrink-0">
                    ${q.leetcode ? `<span class="text-[9px] font-mono px-1 py-0.2 rounded border border-black bg-white font-bold">#${q.leetcode.number}</span>` : ''}
                    <span class="text-[9px] px-1.5 py-0.2 rounded ${diffBadgeClass}">${q.difficulty[0]}</span>
                  </div>
                `;
                qList.appendChild(qRow);
              });
              subWrap.appendChild(qList);
            }

            topicBody.appendChild(subWrap);
          });

          topicWrapper.appendChild(topicBody);
        }

        sidebarContainer.appendChild(topicWrapper);
      }
    }

    /* -----------------------------------------------------------------------
     * QUESTION CONTENT & LANGUAGE-SPECIFIC CODE
     * ----------------------------------------------------------------------- */
    findQuestion(qid) {
      for (const tKey in this.catalog) {
        const found = (this.catalog[tKey].questions || []).find(q => q.id === qid);
        if (found) return { question: found, topic: this.catalog[tKey] };
      }
      return null;
    }

    selectQuestion(qid, updateHash = true) {
      this.currentQuestionId = qid;
      const match = this.findQuestion(qid);
      if (match && updateHash) {
        window.location.hash = `#/learn/${this.currentLang}/${match.topic.id}/${qid}`;
      }
      this.renderSidebar();
      this.loadQuestion(qid);
    }

    getLangQuestionData(qid) {
      if (!this.langCode[this.currentLang]) return null;
      for (const tKey in this.langCode[this.currentLang]) {
        const qList = this.langCode[this.currentLang][tKey];
        if (Array.isArray(qList)) {
          const match = qList.find(q => q.id === qid);
          if (match) return match;
        }
      }
      return null;
    }

    loadQuestion(qid) {
      const match = this.findQuestion(qid);
      if (!match) return;
      const { question, topic } = match;

      // Badges
      const diffBadge = document.getElementById('q-difficulty-badge');
      if (diffBadge) {
        diffBadge.textContent = question.difficulty.toUpperCase();
        diffBadge.className = `px-2.5 py-0.5 text-xs font-mono font-bold rounded ${
          question.difficulty.toLowerCase() === 'hard' ? 'badge-hard' :
          question.difficulty.toLowerCase() === 'medium' ? 'badge-medium' : 'badge-basic'
        }`;
      }

      const lcLink = document.getElementById('q-leetcode-link');
      const lcNum = document.getElementById('q-leetcode-num');
      if (lcLink && lcNum) {
        if (question.leetcode) {
          lcLink.classList.remove('hidden');
          lcLink.href = question.leetcode.url;
          lcNum.textContent = question.leetcode.number;
        } else {
          lcLink.classList.add('hidden');
        }
      }

      const topicBadge = document.getElementById('q-topic-badge');
      if (topicBadge) topicBadge.textContent = topic.title;

      const titleEl = document.getElementById('q-title');
      if (titleEl) titleEl.textContent = question.title;

      this.updateQuestionCompletedButton();

      const descEl = document.getElementById('q-description');
      if (descEl) descEl.textContent = question.description;

      const constrEl = document.getElementById('q-constraints');
      if (constrEl) constrEl.textContent = question.constraints || 'Standard memory bounds apply.';

      // Examples
      const exContainer = document.getElementById('q-examples');
      if (exContainer) {
        exContainer.innerHTML = '';
        (question.examples || []).forEach((ex, idx) => {
          const exCard = document.createElement('div');
          exCard.className = 'p-3 rounded-lg border-2 border-black bg-[#fbfbf8] text-xs font-mono space-y-1';
          exCard.innerHTML = `
            <div class="text-[10px] text-zinc-500 font-bold uppercase">Example ${idx + 1}</div>
            <div><span class="text-zinc-600">Input:</span> <strong class="text-[#171e19]">${ex.input}</strong></div>
            <div><span class="text-zinc-600">Output:</span> <strong class="text-emerald-700">${ex.output}</strong></div>
            ${ex.why ? `<div class="text-[11px] text-zinc-600 font-sans mt-1 pt-1 border-t border-black/20 font-medium">${ex.why}</div>` : ''}
          `;
          exContainer.appendChild(exCard);
        });
      }

      const cmEl = document.getElementById('q-common-mistakes');
      if (cmEl) {
        cmEl.textContent = question.commonMistakes || 'Be mindful of null references and boundary pointer cases.';
      }

      // Render Language-Specific Code & Notes
      this.renderLanguageCodePanel(question);

      // Load Dynamic Tracer Animation
      if (this.animator) {
        this.animator.load(question);
      }
    }

    renderLanguageCodePanel(question) {
      const langQ = this.getLangQuestionData(question.id);
      const codeContainer = document.getElementById('code-lines-display');
      if (!codeContainer) return;
      codeContainer.innerHTML = '';

      // Update active language selector tab indicator
      ['python', 'javascript', 'java', 'cpp'].forEach(l => {
        const btn = document.getElementById(`lang-btn-${l}`);
        if (btn) {
          if (l === this.currentLang) {
            btn.className = 'px-2.5 py-1 text-[11px] font-mono font-bold rounded border-2 border-black bg-[#ffe17c] text-[#171e19] hard-shadow-sm';
          } else {
            btn.className = 'px-2.5 py-1 text-[11px] font-mono font-bold rounded border border-zinc-700 bg-zinc-900 text-zinc-400 hover:text-white';
          }
        }
      });

      if (!langQ || !langQ.code || langQ.code.length === 0) {
        codeContainer.innerHTML = `
          <div class="p-6 text-center text-xs font-mono text-zinc-400 space-y-2">
            <span class="px-2 py-1 bg-zinc-800 rounded text-[#ffe17c] font-bold">Coming Soon</span>
            <p>Code for ${this.currentLang.toUpperCase()} is currently in testing harness.</p>
          </div>
        `;
        return;
      }

      // Render tagged lines
      langQ.code.forEach((line, idx) => {
        const lineRow = document.createElement('div');
        lineRow.className = 'flex items-stretch hover:bg-zinc-800/80 px-2 py-0.5 rounded cursor-pointer transition-colors';
        lineRow.id = `code-line-row-${idx + 1}`;
        lineRow.setAttribute('data-tag', line.tag);
        lineRow.onclick = () => this.inspectLineTag(line.tag, line.lineNum, langQ);

        lineRow.innerHTML = `
          <span class="w-8 flex-shrink-0 text-right pr-3 select-none text-zinc-500 font-mono text-[11px]">${line.lineNum}</span>
          <span class="flex-1 font-mono text-[12px] whitespace-pre text-zinc-200">${this.escapeHtml(line.text)}</span>
          <span class="text-[9px] font-mono text-zinc-600 px-1 select-none">[${line.tag}]</span>
        `;
        codeContainer.appendChild(lineRow);
      });

      // Display language-specific notes
      const noteMount = document.getElementById('language-notes-mount');
      if (noteMount && langQ.notes) {
        noteMount.innerHTML = `
          <div class="mt-4 p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-sans text-zinc-300">
            <span class="text-[10px] font-mono font-bold uppercase text-[#ffe17c] block mb-1">
              ${this.currentLang.toUpperCase()} MEMORY &amp; IDIOMS:
            </span>
            ${langQ.notes}
          </div>
        `;
      }
    }

    inspectLineTag(tag, lineNum, langQ) {
      const lineBadge = document.getElementById('active-line-badge');
      const textEl = document.getElementById('active-line-explanation');
      if (lineBadge) lineBadge.textContent = `Line ${lineNum} [${tag.toUpperCase()}]`;

      this.highlightCodeTag(tag);

      if (textEl && langQ && langQ.explanations) {
        const text = langQ.explanations[tag] || `Executes tagged statement [${tag}] in ${this.currentLang}.`;
        textEl.innerHTML = `<span class="text-[#ffe17c] font-bold font-mono mr-1">[${tag.toUpperCase()}]:</span> ${text}`;
      }
    }

    highlightCodeTag(tag) {
      document.querySelectorAll('#code-lines-display > div').forEach(el => {
        const lineTag = el.getAttribute('data-tag');
        if (lineTag === tag) {
          el.classList.add('code-line-active');
        } else {
          el.classList.remove('code-line-active');
        }
      });
    }

    updateQuestionCompletedButton() {
      const checkbox = document.getElementById('q-complete-checkbox');
      const label = document.getElementById('q-complete-label');
      const isDone = this.isCompleted(this.currentQuestionId);
      if (checkbox) checkbox.checked = isDone;
      if (label) label.textContent = isDone ? 'Completed' : 'Mark Completed';

      const btn = document.getElementById('q-complete-toggle-btn');
      if (btn) {
        btn.onclick = () => this.toggleCompleted(this.currentQuestionId);
      }
    }

    renderDedicatedProgress() {
      const mount = document.getElementById('dedicated-progress-mount');
      if (!mount || !window.SynapseComponents) return;

      let totalQuestions = 0;
      for (const tKey in this.catalog) {
        totalQuestions += (this.catalog[tKey].questions || []).length;
      }
      const solved = this.progress.size;

      mount.innerHTML = window.SynapseComponents.ProgressCard({
        totalQuestions,
        completedCount: solved,
        topics: Object.values(this.catalog).map(t => ({
          title: t.title,
          total: t.questions.length,
          completed: t.questions.filter(q => this.isCompleted(q.id)).length
        }))
      });
    }

    bindKeyboardShortcuts() {
      window.addEventListener('keydown', (e) => {
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

        if (e.code === 'Space') {
          e.preventDefault();
          if (this.animator) this.animator.togglePlay();
        } else if (e.code === 'ArrowRight') {
          e.preventDefault();
          if (this.animator) this.animator.stepForward();
        } else if (e.code === 'ArrowLeft') {
          e.preventDefault();
          if (this.animator) this.animator.stepBack();
        } else if (e.code === 'KeyR') {
          e.preventDefault();
          if (this.animator) this.animator.reset();
        }
      });
    }

    escapeHtml(str) {
      if (!str) return '';
      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    window.SynapseApp = new SynapseApp();
  });

})(typeof window !== 'undefined' ? window : global);
