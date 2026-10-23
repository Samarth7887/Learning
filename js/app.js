/**
 * SynapseCS - Main Application Controller (Neo-Brutalist Edition)
 * Handles view routing (Home, Topics, Progress), sidebar accordion hierarchy,
 * search, filtering, progress persistence, code line explanation, and animation sync.
 */

(function(window) {
  'use strict';

  class SynapseApp {
    constructor() {
      this.topics = window.DSA_TOPICS || {};
      this.currentView = 'home'; // 'home' | 'topics' | 'progress'
      this.currentTopicId = 'linked-list';
      this.currentQuestionId = null;
      this.currentApproachIdx = 0;
      this.currentLang = 'python';
      this.explainAllMode = false;
      this.filterDifficulty = 'all';
      this.filterStatus = 'all';
      this.searchQuery = '';
      
      // Hero Mini Reversal State
      this.heroMiniStep = 0;

      // Normalize topics: support both flat questions array and subtopic.questions arrays
      for (const tKey in this.topics) {
        const topic = this.topics[tKey];
        if (!topic.questions) topic.questions = [];
        if (topic.subtopics) {
          topic.subtopics.forEach(sub => {
            if (Array.isArray(sub.questions)) {
              sub.questions.forEach(q => {
                if (!q.subtopicId) q.subtopicId = sub.id;
                if (!topic.questions.some(existing => existing.id === q.id)) {
                  topic.questions.push(q);
                }
              });
            }
          });
        }
      }

      this.expandedTopics = new Set(Object.keys(this.topics));
      this.expandedSubtopics = new Set();
      for (const tKey in this.topics) {
        (this.topics[tKey].subtopics || []).forEach(s => this.expandedSubtopics.add(s.id));
      }
      
      this.progress = this.loadProgress();
      this.animator = null;

      this.init();
    }

    init() {
      this.renderNavbar();
      this.renderFooter();
      this.initAnimator();
      this.bindSearchAndFilters();
      this.bindKeyboardShortcuts();
      
      // Set initial view
      this.switchView('home');

      // Auto-select first question for when topics view opens
      const firstTopic = this.topics[this.currentTopicId] || Object.values(this.topics)[0];
      if (firstTopic && firstTopic.questions && firstTopic.questions.length > 0) {
        this.selectQuestion(firstTopic.questions[0].id);
      }
    }

    /* -----------------------------------------------------------------------
     * VIEW ROUTING & NAVBAR / FOOTER
     * ----------------------------------------------------------------------- */
    switchView(viewName) {
      this.currentView = viewName;
      this.renderNavbar();

      const homeView = document.getElementById('view-home');
      const topicsView = document.getElementById('view-topics');
      const progressView = document.getElementById('view-progress');

      if (homeView) homeView.classList.toggle('hidden', viewName !== 'home');
      if (topicsView) topicsView.classList.toggle('hidden', viewName !== 'topics');
      if (progressView) progressView.classList.toggle('hidden', viewName !== 'progress');

      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (viewName === 'home') {
        this.renderHome();
      } else if (viewName === 'topics') {
        this.renderSidebar();
        this.updateProgressSummary();
        if (this.currentQuestionId) {
          this.loadQuestion(this.currentQuestionId);
        }
      } else if (viewName === 'progress') {
        this.renderDedicatedProgress();
      }
    }

    renderNavbar() {
      const container = document.getElementById('app-navbar-container');
      if (container && window.SynapseComponents) {
        container.innerHTML = window.SynapseComponents.Navbar({ activeView: this.currentView });
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
      if (drawer) {
        drawer.classList.toggle('hidden');
      }
    }

    /* -----------------------------------------------------------------------
     * HOME PAGE SECTIONS
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
          desc: "Step 0: Head points to 0x1000 (10). Links forward: 10 -> 20 -> 30 -> NULL",
          nodes: [
            { val: 10, addr: "0x1000", next: "0x1020", ptr: "HEAD" },
            { val: 20, addr: "0x1020", next: "0x1040", ptr: "" },
            { val: 30, addr: "0x1040", next: "NULL", ptr: "" }
          ]
        },
        {
          desc: "Step 1: Rewire Node 10. 10.next = NULL. Prev = 10, Curr moves to 20.",
          nodes: [
            { val: 10, addr: "0x1000", next: "NULL", ptr: "PREV" },
            { val: 20, addr: "0x1020", next: "0x1040", ptr: "CURR" },
            { val: 30, addr: "0x1040", next: "NULL", ptr: "" }
          ]
        },
        {
          desc: "Step 2: Rewire Node 20. 20.next = 10 (0x1000). Prev = 20, Curr moves to 30.",
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
      if (stepBtn) {
        stepBtn.onclick = () => {
          this.heroMiniStep = (this.heroMiniStep + 1) % steps.length;
          this.renderHeroMiniDemo();
        };
      }

      const resetBtn = document.getElementById('hero-mini-reset-btn');
      if (resetBtn) {
        resetBtn.onclick = () => {
          this.heroMiniStep = 0;
          this.renderHeroMiniDemo();
        };
      }
    }

    renderHomeTopicsGrid() {
      const grid = document.getElementById('home-topics-grid');
      if (!grid || !window.SynapseComponents) return;

      const topicIcons = {
        'linked-list': '🔗',
        'stack': '🥞',
        'queue': '🚶',
        'hashing': '🗝️',
        'arrays-strings': '📦',
        'trees': '🌳'
      };

      grid.innerHTML = Object.keys(this.topics).map(tKey => {
        const topic = this.topics[tKey];
        const qCount = (topic.questions || []).length;
        const doneCount = (topic.questions || []).filter(q => this.isCompleted(q.id)).length;
        const icon = topicIcons[tKey] || '💡';

        return window.SynapseComponents.TopicCard({
          id: topic.id,
          title: topic.title,
          icon: icon,
          description: topic.description || 'Core algorithmic patterns and memory layout fundamentals.',
          questionCount: qCount,
          completedCount: doneCount,
          onClick: `window.SynapseApp.selectTopic('${topic.id}')`
        });
      }).join('');
    }

    renderHowItWorks() {
      if (!window.SynapseComponents) return;
      
      const s1 = document.getElementById('how-step-1');
      const s2 = document.getElementById('how-step-2');
      const s3 = document.getElementById('how-step-3');

      if (s1) {
        s1.innerHTML = window.SynapseComponents.HowItWorksStep({
          stepNumber: '01',
          title: 'Learn The Physical Model',
          description: 'Understand exactly how memory nodes, 64-bit addresses, and contiguous arrays sit in physical RAM before jumping to code.',
          borderColor: 'sage'
        });
      }

      if (s2) {
        s2.innerHTML = window.SynapseComponents.HowItWorksStep({
          stepNumber: '02',
          title: 'Watch It Move Step-by-Step',
          description: 'Play and scrub through step-by-step animations with synchronized line highlighting and beginner-friendly plain-English descriptions.',
          borderColor: 'yellow'
        });
      }

      if (s3) {
        s3.innerHTML = window.SynapseComponents.HowItWorksStep({
          stepNumber: '03',
          title: 'Test Across 4 Languages',
          description: 'Compare idiomatic Python, JavaScript, Java, and C++ code side-by-side with 100% verified executable solutions.',
          borderColor: 'white'
        });
      }
    }

    renderDifficultyCards() {
      if (!window.SynapseComponents) return;

      const dBasic = document.getElementById('diff-card-basic');
      const dMed = document.getElementById('diff-card-medium');
      const dHard = document.getElementById('diff-card-hard');

      if (dBasic) {
        dBasic.innerHTML = window.SynapseComponents.DifficultyCard({
          level: 'BASIC & EASY',
          title: 'Fundamental Blocks',
          subtitle: 'Pointers, Arrays, Loops, Queue & Stacks',
          icon: '🌱',
          variant: 'sage',
          onClick: "window.SynapseApp.filterByDifficulty('basic')"
        });
      }

      if (dMed) {
        dMed.innerHTML = window.SynapseComponents.DifficultyCard({
          level: 'MEDIUM',
          title: 'Algorithmic Patterns',
          subtitle: 'Two Pointers, Sliding Window, Monotonic Stack & BST',
          icon: '⚡',
          variant: 'yellow',
          onClick: "window.SynapseApp.filterByDifficulty('medium')"
        });
      }

      if (dHard) {
        dHard.innerHTML = window.SynapseComponents.DifficultyCard({
          level: 'HARD',
          title: 'Mastery Challenges',
          subtitle: 'Trapping Rain Water, Sliding Window Max, Complex Heaps',
          icon: '🔥',
          variant: 'dark',
          onClick: "window.SynapseApp.filterByDifficulty('hard')"
        });
      }
    }

    renderHomeProgress() {
      const container = document.getElementById('home-progress-container');
      if (container && window.SynapseComponents) {
        let totalQ = 0;
        let topicsDone = 0;
        for (const tKey in this.topics) {
          const qs = this.topics[tKey].questions || [];
          totalQ += qs.length;
          if (qs.length > 0 && qs.every(q => this.isCompleted(q.id))) {
            topicsDone++;
          }
        }
        container.innerHTML = window.SynapseComponents.ProgressCard({
          totalSolved: this.progress.size,
          totalQuestions: totalQ,
          streak: this.progress.size > 0 ? 1 : 0,
          topicsCompleted: topicsDone
        });
      }
    }

    renderDedicatedProgress() {
      const mount = document.getElementById('dedicated-progress-mount');
      if (mount && window.SynapseComponents) {
        let totalQ = 0;
        let topicsDone = 0;
        for (const tKey in this.topics) {
          const qs = this.topics[tKey].questions || [];
          totalQ += qs.length;
          if (qs.length > 0 && qs.every(q => this.isCompleted(q.id))) {
            topicsDone++;
          }
        }
        mount.innerHTML = `
          ${window.SynapseComponents.ProgressCard({
            totalSolved: this.progress.size,
            totalQuestions: totalQ,
            streak: this.progress.size > 0 ? 1 : 0,
            topicsCompleted: topicsDone
          })}
          <div class="mt-8 p-6 bg-white border-2 border-black rounded-xl hard-shadow">
            <h3 class="font-bold text-lg text-[#171e19] mb-4">Topic Breakdown</h3>
            <div class="space-y-4">
              ${Object.keys(this.topics).map(tKey => {
                const topic = this.topics[tKey];
                const qs = topic.questions || [];
                const solved = qs.filter(q => this.isCompleted(q.id)).length;
                const pct = qs.length > 0 ? Math.round((solved / qs.length) * 100) : 0;
                return `
                  <div class="space-y-1">
                    <div class="flex items-center justify-between text-xs font-mono">
                      <span class="font-bold text-[#171e19]">${topic.title}</span>
                      <span class="text-zinc-600">${solved} / ${qs.length} (${pct}%)</span>
                    </div>
                    <div class="w-full h-2 bg-zinc-200 border border-black rounded-full overflow-hidden">
                      <div class="h-full bg-[#ffe17c]" style="width: ${pct}%"></div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;
      }
    }

    renderHomeCTA() {
      const container = document.getElementById('home-cta-container');
      if (container && window.SynapseComponents) {
        container.innerHTML = window.SynapseComponents.FinalCTA({
          onStartLearning: "window.SynapseApp.switchView('topics')"
        });
      }
    }

    filterByDifficulty(diff) {
      this.filterDifficulty = diff;
      const select = document.getElementById('filter-difficulty-select');
      if (select) select.value = diff;
      this.switchView('topics');
    }

    selectTopic(tKey) {
      this.currentTopicId = tKey;
      this.expandedTopics.add(tKey);
      const topic = this.topics[tKey];
      if (topic && topic.questions && topic.questions.length > 0) {
        this.selectQuestion(topic.questions[0].id);
      }
      this.switchView('topics');
    }

    /* -----------------------------------------------------------------------
     * PROGRESS TRACKER (Local Storage)
     * ----------------------------------------------------------------------- */
    loadProgress() {
      try {
        const saved = localStorage.getItem('synapse_dsa_progress');
        return saved ? new Set(JSON.parse(saved)) : new Set();
      } catch (e) {
        return new Set();
      }
    }

    saveProgress() {
      try {
        localStorage.setItem('synapse_dsa_progress', JSON.stringify(Array.from(this.progress)));
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
      for (const tKey in this.topics) {
        totalQuestions += (this.topics[tKey].questions || []).length;
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
     * ANIMATOR INITIALIZATION
     * ----------------------------------------------------------------------- */
    initAnimator() {
      if (typeof window.DSAAnimator !== 'function') return;

      this.animator = new window.DSAAnimator({
        canvasEl: document.getElementById('anim-stage-viewport'),
        descEl: document.getElementById('anim-step-description'),
        scrubberEl: document.getElementById('anim-scrubber'),
        counterEl: document.getElementById('anim-step-counter'),
        playBtn: document.getElementById('anim-btn-play'),
        onHighlightLine: (lineNum) => this.highlightCodeLine(lineNum)
      });

      // Bind Playback Controls
      const playBtn = document.getElementById('anim-btn-play');
      if (playBtn) playBtn.onclick = () => this.animator && this.animator.togglePlay();

      const prevBtn = document.getElementById('anim-btn-prev');
      if (prevBtn) prevBtn.onclick = () => this.animator && this.animator.stepBack();

      const nextBtn = document.getElementById('anim-btn-next');
      if (nextBtn) nextBtn.onclick = () => this.animator && this.animator.stepForward();

      const resetBtn = document.getElementById('anim-btn-reset');
      if (resetBtn) resetBtn.onclick = () => this.animator && this.animator.reset();

      const speedSelect = document.getElementById('anim-speed-select');
      if (speedSelect) speedSelect.onchange = (e) => this.animator && this.animator.setSpeed(e.target.value);

      const customInputBtn = document.getElementById('anim-custom-run-btn');
      if (customInputBtn) {
        customInputBtn.onclick = () => this.runCustomInput();
      }
    }

    runCustomInput() {
      const inputEl = document.getElementById('anim-custom-input');
      if (!inputEl) return;
      const val = inputEl.value.trim();
      if (!val) return;

      try {
        let parsed = JSON.parse(val);
        if (!Array.isArray(parsed)) parsed = [parsed];
        
        // Dynamically build synthetic steps for the custom input
        const customSteps = [
          {
            codeLine: 1,
            description: `Loaded custom user input: [${parsed.join(', ')}]`,
            state: { type: 'array', array: parsed },
            highlights: [],
            pointers: { 'HEAD': 0 }
          },
          {
            codeLine: 3,
            description: `Processing element 0: ${parsed[0]}`,
            state: { type: 'array', array: parsed },
            highlights: [0],
            pointers: { 'CURRENT': 0 }
          }
        ];

        if (this.animator) {
          this.animator.loadSteps(customSteps);
        }
      } catch (err) {
        alert('Please enter valid JSON (e.g. [10, 20, 30] or "hello")');
      }
    }

    /* -----------------------------------------------------------------------
     * SIDEBAR ACCORDION & FILTER RENDERING
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

      for (const topicKey in this.topics) {
        const topic = this.topics[topicKey];
        const isTopicExpanded = this.expandedTopics.has(topic.id);
        
        // Filter questions belonging to this topic
        const allQuestions = topic.questions || [];
        const filteredQuestions = allQuestions.filter(q => {
          // Difficulty filter
          if (this.filterDifficulty !== 'all' && q.difficulty.toLowerCase() !== this.filterDifficulty.toLowerCase()) {
            return false;
          }
          // Status filter
          const completed = this.isCompleted(q.id);
          if (this.filterStatus === 'completed' && !completed) return false;
          if (this.filterStatus === 'pending' && completed) return false;
          // Search query
          if (this.searchQuery) {
            const matchTitle = q.title.toLowerCase().includes(this.searchQuery);
            const matchDesc = (q.description || '').toLowerCase().includes(this.searchQuery);
            if (!matchTitle && !matchDesc) return false;
          }
          return true;
        });

        // Compute topic progress
        const solvedInTopic = allQuestions.filter(q => this.isCompleted(q.id)).length;

        // Topic Wrapper
        const topicWrapper = document.createElement('div');
        topicWrapper.className = 'border-2 border-black rounded-lg overflow-hidden bg-white hard-shadow-sm';

        // Topic Header
        const topicHeader = document.createElement('div');
        topicHeader.className = `p-3 bg-white flex items-center justify-between cursor-pointer select-none font-mono text-xs font-bold border-b border-black ${this.currentTopicId === topic.id ? 'bg-[#ffe17c]' : 'hover:bg-zinc-50'}`;
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
          <div class="flex items-center space-x-2 flex-shrink-0">
            <span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border border-black ${solvedInTopic === allQuestions.length && allQuestions.length > 0 ? 'bg-[#b7c6c2] text-[#171e19]' : 'bg-[#ffe17c] text-[#171e19]'}">
              ${solvedInTopic}/${allQuestions.length}
            </span>
          </div>
        `;
        topicWrapper.appendChild(topicHeader);

        // Topic Content (Subtopics & Questions)
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

            // Subtopic Header Dropdown
            const subHeader = document.createElement('div');
            subHeader.className = 'p-2 rounded border border-black/30 bg-white flex items-center justify-between cursor-pointer hover:border-black text-[11px] font-mono font-semibold';
            subHeader.onclick = () => {
              if (this.expandedSubtopics.has(sub.id)) {
                this.expandedSubtopics.delete(sub.id);
              } else {
                this.expandedSubtopics.add(sub.id);
              }
              this.renderSidebar();
            };
            subHeader.innerHTML = `
              <div class="flex items-center space-x-1.5">
                <span class="text-[10px] transition-transform ${isSubExpanded ? 'rotate-90' : ''}">▸</span>
                <span>${sub.title}</span>
              </div>
              <span class="text-[10px] font-mono text-zinc-500">${subQuestions.length}</span>
            `;
            subWrap.appendChild(subHeader);

            // Questions List
            if (isSubExpanded) {
              const qList = document.createElement('div');
              qList.className = 'space-y-1 pt-1 pl-2';

              if (subQuestions.length === 0) {
                qList.innerHTML = '<div class="text-[11px] text-zinc-500 py-1 italic font-mono">No matching questions</div>';
              } else {
                subQuestions.forEach(q => {
                  const isCur = this.currentQuestionId === q.id;
                  const isDone = this.isCompleted(q.id);

                  let diffBadgeClass = 'badge-basic';
                  if (q.difficulty.toLowerCase() === 'medium') diffBadgeClass = 'badge-medium';
                  else if (q.difficulty.toLowerCase() === 'hard') diffBadgeClass = 'badge-hard';

                  const qRow = document.createElement('div');
                  qRow.className = `p-2 rounded border-2 border-black flex items-center justify-between gap-2 cursor-pointer transition-all ${isCur ? 'bg-[#ffe17c] hard-shadow-sm font-bold' : 'bg-white hover:bg-zinc-100'}`;
                  qRow.onclick = () => this.selectQuestion(q.id);

                  qRow.innerHTML = `
                    <div class="flex items-center space-x-2 overflow-hidden flex-1">
                      <input 
                        type="checkbox" 
                        class="w-3.5 h-3.5 rounded border border-black cursor-pointer accent-black" 
                        ${isDone ? 'checked' : ''} 
                        onclick="window.SynapseApp.toggleCompleted('${q.id}', event)"
                      />
                      <span class="text-xs truncate ${isDone ? 'line-through text-zinc-500' : 'text-[#171e19]'}">${q.title}</span>
                    </div>
                    <div class="flex items-center space-x-1 flex-shrink-0">
                      ${q.leetcode ? `
                        <span class="text-[9px] font-mono px-1 py-0.2 rounded border border-black bg-white font-bold">
                          #${q.leetcode.number}
                        </span>
                      ` : ''}
                      <span class="text-[9px] px-1.5 py-0.2 rounded ${diffBadgeClass}">
                        ${q.difficulty[0]}
                      </span>
                    </div>
                  `;
                  qList.appendChild(qRow);
                });
              }
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
     * QUESTION SELECTION & CONTENT RENDERING
     * ----------------------------------------------------------------------- */
    findQuestion(qid) {
      for (const tKey in this.topics) {
        const found = (this.topics[tKey].questions || []).find(q => q.id === qid);
        if (found) return { question: found, topic: this.topics[tKey] };
      }
      return null;
    }

    selectQuestion(qid) {
      this.currentQuestionId = qid;
      this.currentApproachIdx = 0;
      this.renderSidebar();
      this.loadQuestion(qid);
    }

    loadQuestion(qid) {
      const match = this.findQuestion(qid);
      if (!match) return;
      const { question, topic } = match;

      // Update Header Badges
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

      // Update Completion Checkbox
      this.updateQuestionCompletedButton();

      // Description & Constraints
      const descEl = document.getElementById('q-description');
      if (descEl) descEl.textContent = question.description;

      const constrEl = document.getElementById('q-constraints');
      if (constrEl) constrEl.textContent = question.constraints || 'Standard competitive programming bounds apply.';

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

      // Common Mistakes
      const cmEl = document.getElementById('q-common-mistakes');
      if (cmEl) {
        cmEl.textContent = question.commonMistakes || 'Pay strict attention to boundary conditions, off-by-one pointer index bounds, and null terminator checks.';
      }

      // Load Approaches Tabs
      this.renderApproachTabs(question);

      // Render Selected Approach Code & Animation
      this.renderCurrentApproach();
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

    /* -----------------------------------------------------------------------
     * APPROACH & ROSETTA STONE CODE RENDERING
     * ----------------------------------------------------------------------- */
    renderApproachTabs(question) {
      const container = document.getElementById('approach-tabs');
      if (!container) return;
      container.innerHTML = '';

      (question.approaches || []).forEach((appr, idx) => {
        const btn = document.createElement('button');
        const isSel = idx === this.currentApproachIdx;
        btn.className = `px-3 py-1 text-xs font-mono font-bold rounded border ${
          isSel ? 'bg-[#ffe17c] text-[#171e19] border-black hard-shadow-sm' : 'bg-zinc-900 text-zinc-300 border-zinc-700 hover:text-white'
        }`;
        btn.textContent = appr.name;
        btn.onclick = () => {
          this.currentApproachIdx = idx;
          this.renderApproachTabs(question);
          this.renderCurrentApproach();
        };
        container.appendChild(btn);
      });
    }

    selectLanguage(lang) {
      this.currentLang = lang;
      ['python', 'javascript', 'java', 'cpp'].forEach(l => {
        const btn = document.getElementById(`lang-btn-${l}`);
        if (btn) {
          if (l === lang) {
            btn.className = 'px-2.5 py-1 text-[11px] font-mono font-bold rounded border border-black bg-[#ffe17c] text-[#171e19]';
          } else {
            btn.className = 'px-2.5 py-1 text-[11px] font-mono font-bold rounded border border-zinc-700 bg-zinc-900 text-zinc-400';
          }
        }
      });
      this.renderCurrentApproach();
    }

    renderCurrentApproach() {
      const match = this.findQuestion(this.currentQuestionId);
      if (!match) return;
      const question = match.question;
      const approach = (question.approaches || [])[this.currentApproachIdx] || {};

      // Complexities
      const timeEl = document.getElementById('q-complexity-time');
      const spaceEl = document.getElementById('q-complexity-space');
      if (timeEl) timeEl.textContent = approach.timeComplexity || 'O(N)';
      if (spaceEl) spaceEl.textContent = approach.spaceComplexity || 'O(1)';

      // Code Display
      const codeContainer = document.getElementById('code-lines-display');
      if (!codeContainer) return;
      codeContainer.innerHTML = '';

      const codeString = (approach.code && approach.code[this.currentLang]) || '// Code coming soon';
      const lines = codeString.split('\n');

      lines.forEach((lineText, idx) => {
        const lineNum = idx + 1;
        const lineRow = document.createElement('div');
        lineRow.className = 'flex items-stretch hover:bg-zinc-800/80 px-2 py-0.5 rounded cursor-pointer transition-colors';
        lineRow.id = `code-line-row-${lineNum}`;
        lineRow.onclick = () => this.inspectLineExplanation(lineNum, approach);

        lineRow.innerHTML = `
          <span class="w-8 flex-shrink-0 text-right pr-3 select-none text-zinc-500 font-mono text-[11px]">${lineNum}</span>
          <span class="flex-1 font-mono text-[12px] whitespace-pre">${this.escapeHtml(lineText)}</span>
        `;
        codeContainer.appendChild(lineRow);
      });

      // Bind Explain All Lines Toggle
      const explainBtn = document.getElementById('explain-all-lines-btn');
      if (explainBtn) {
        explainBtn.onclick = () => this.showBeginnerExplainAll(approach);
      }

      // Auto-load Animation Steps
      if (this.animator && approach.animationSteps) {
        this.animator.loadSteps(approach.animationSteps);
      }
    }

    inspectLineExplanation(lineNum, approach) {
      const lineBadge = document.getElementById('active-line-badge');
      const textEl = document.getElementById('active-line-explanation');
      if (lineBadge) lineBadge.textContent = `Line ${lineNum}`;

      // Highlight in code panel
      this.highlightCodeLine(lineNum);

      // Match explanation range
      const explanations = approach.lineExplanations || [];
      const match = explanations.find(e => lineNum >= e.lines[0] && lineNum <= e.lines[1]);

      if (textEl) {
        if (match) {
          textEl.innerHTML = `<span class="text-[#ffe17c] font-bold font-mono mr-1">[Lines ${match.lines[0]}-${match.lines[1]}]:</span> ${match.text}`;
        } else {
          textEl.textContent = `Executes statement on line ${lineNum} as part of the ${approach.name} algorithm flow.`;
        }
      }
    }

    highlightCodeLine(lineNum) {
      document.querySelectorAll('[id^="code-line-row-"]').forEach(el => {
        el.classList.remove('code-line-active');
      });
      const target = document.getElementById(`code-line-row-${lineNum}`);
      if (target) {
        target.classList.add('code-line-active');
      }
    }

    showBeginnerExplainAll(approach) {
      const textEl = document.getElementById('active-line-explanation');
      if (!textEl) return;

      const explanations = approach.lineExplanations || [];
      if (explanations.length === 0) {
        textEl.textContent = "Every line in this solution executes in sequence to process inputs and maintain invariants.";
        return;
      }

      textEl.innerHTML = `
        <div class="space-y-3 max-h-[300px] overflow-y-auto pr-1 sidebar-scroll">
          <div class="font-bold text-xs uppercase text-[#ffe17c] border-b border-zinc-700 pb-1">
            Beginner Walkthrough (${approach.name})
          </div>
          ${explanations.map(e => `
            <div class="p-2.5 rounded bg-zinc-900 border border-zinc-700 text-xs font-sans">
              <span class="font-mono text-[#ffe17c] font-bold block mb-1">Lines ${e.lines[0]} - ${e.lines[1]}</span>
              <p class="text-zinc-300 leading-relaxed font-sans">${e.text}</p>
            </div>
          `).join('')}
        </div>
      `;
    }

    /* -----------------------------------------------------------------------
     * KEYBOARD SHORTCUTS & UTILITIES
     * ----------------------------------------------------------------------- */
    bindKeyboardShortcuts() {
      document.addEventListener('keydown', (e) => {
        // Only trigger if not typing in input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
          return;
        }

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
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }
  }

  // Attach global instance
  window.SynapseApp = new SynapseApp();

})(window);
