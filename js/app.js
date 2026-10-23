/**
 * SynapseCS - Main Application Controller
 * Handles routing, sidebar accordion hierarchy, search, filtering,
 * progress persistence, code line explanation, and animation sync.
 */

(function(window) {
  'use strict';

  class SynapseApp {
    constructor() {
      this.topics = window.DSA_TOPICS || {};
      this.currentTopicId = 'linked-list';
      this.currentQuestionId = null;
      this.currentApproachIdx = 0;
      this.currentLang = 'python';
      this.explainAllMode = false;
      this.filterDifficulty = 'all';
      this.filterStatus = 'all';
      this.searchQuery = '';
      
      this.expandedTopics = new Set(['linked-list', 'stack']);
      this.expandedSubtopics = new Set(['ll-basics', 'll-traversal', 'll-mutation', 'll-advanced', 'stack-basics', 'stack-matching', 'stack-monotonic']);
      
      this.progress = this.loadProgress();
      this.animator = null;

      this.init();
    }

    init() {
      this.initAnimator();
      this.bindSearchAndFilters();
      this.bindThemeSwitchers();
      this.bindKeyboardShortcuts();
      this.renderSidebar();
      
      // Auto-select first question
      const firstTopic = this.topics[this.currentTopicId];
      if (firstTopic && firstTopic.questions && firstTopic.questions.length > 0) {
        this.selectQuestion(firstTopic.questions[0].id);
      }
      this.updateProgressSummary();
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
          <div class="flex items-center justify-between text-xs font-mono mb-1 text-zinc-400">
            <span>Solved: <strong class="text-white">${completedCount}/${totalQuestions}</strong></span>
            <span class="text-emerald-400 font-bold">${pct}%</span>
          </div>
          <div class="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <div class="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 transition-all duration-300" style="width: ${pct}%"></div>
          </div>
        `;
      }
    }

    /* -----------------------------------------------------------------------
     * ANIMATOR INITIALIZATION
     * ----------------------------------------------------------------------- */
    initAnimator() {
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
      if (playBtn) playBtn.onclick = () => this.animator.togglePlay();

      const prevBtn = document.getElementById('anim-btn-prev');
      if (prevBtn) prevBtn.onclick = () => this.animator.stepBack();

      const nextBtn = document.getElementById('anim-btn-next');
      if (nextBtn) nextBtn.onclick = () => this.animator.stepForward();

      const resetBtn = document.getElementById('anim-btn-reset');
      if (resetBtn) resetBtn.onclick = () => this.animator.reset();

      const speedSelect = document.getElementById('anim-speed-select');
      if (speedSelect) speedSelect.onchange = (e) => this.animator.setSpeed(e.target.value);

      const customInputBtn = document.getElementById('anim-custom-run-btn');
      if (customInputBtn) {
        customInputBtn.onclick = () => this.runCustomInput();
      }
    }

    runCustomInput() {
      const inputEl = document.getElementById('anim-custom-input');
      if (!inputEl) return;
      const raw = inputEl.value.trim();
      if (!raw) return;

      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          const q = this.getCurrentQuestion();
          if (q && q.approaches && q.approaches[this.currentApproachIdx]) {
            // Generate on-the-fly step chain for array or linked-list
            const customSteps = parsed.map((item, i) => ({
              codeLine: 1,
              description: `Inspecting custom element [${i}] = ${item}`,
              state: {
                type: q.id.startsWith('ll-') ? 'linked-list' : 'stack',
                nodes: parsed.slice(0, i + 1).map((v, idx) => ({ val: v, addr: `0x${(1000 + idx * 32).toString(16).toUpperCase()}` })),
                stack: parsed.slice(0, i + 1),
                action: `Step ${i + 1}`
              },
              highlights: [i],
              pointers: { curr: i }
            }));
            this.animator.load(customSteps);
            this.animator.play();
          }
        }
      } catch (e) {
        alert("Invalid JSON array format. Example input: [10, 20, 30]");
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
        const topicProgressPct = allQuestions.length > 0 ? Math.round((solvedInTopic / allQuestions.length) * 100) : 0;

        // Topic Wrapper
        const topicWrapper = document.createElement('div');
        topicWrapper.className = 'mb-3 border border-zinc-800/80 rounded-xl overflow-hidden surface-panel';

        // Topic Header
        const topicHeader = document.createElement('div');
        topicHeader.className = `topic-accordion-header ${this.currentTopicId === topic.id ? 'active' : ''}`;
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
          <div class="flex items-center space-x-2.5 overflow-hidden">
            <span class="text-xs transition-transform duration-200 ${isTopicExpanded ? 'rotate-90' : ''}">▸</span>
            <span class="font-bold text-xs truncate">${topic.title}</span>
          </div>
          <div class="flex items-center space-x-2 flex-shrink-0">
            <span class="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full ${solvedInTopic === allQuestions.length && allQuestions.length > 0 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-zinc-800 text-zinc-400'}">
              ${solvedInTopic}/${allQuestions.length}
            </span>
          </div>
        `;
        topicWrapper.appendChild(topicHeader);

        // Topic Content (Subtopics & Questions)
        if (isTopicExpanded) {
          const topicBody = document.createElement('div');
          topicBody.className = 'p-2 space-y-2 border-t border-zinc-800/60 surface-sub/40';

          const subtopics = topic.subtopics || [{ id: 'all', title: 'Questions' }];
          subtopics.forEach(sub => {
            const subQuestions = filteredQuestions.filter(q => q.subtopicId === sub.id || sub.id === 'all');
            if (subQuestions.length === 0 && this.searchQuery) return;

            const isSubExpanded = this.expandedSubtopics.has(sub.id);
            const subWrap = document.createElement('div');
            subWrap.className = 'space-y-1';

            // Subtopic Header Dropdown
            const subHeader = document.createElement('div');
            subHeader.className = 'subtopic-header';
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
              qList.className = 'subtopic-item space-y-1 pt-1';

              if (subQuestions.length === 0) {
                qList.innerHTML = '<div class="text-[11px] text-zinc-500 py-1 italic">No matching questions</div>';
              } else {
                subQuestions.forEach(q => {
                  const isCur = this.currentQuestionId === q.id;
                  const isDone = this.isCompleted(q.id);

                  const qRow = document.createElement('div');
                  qRow.className = `question-row ${isCur ? 'active' : ''}`;
                  qRow.onclick = () => this.selectQuestion(q.id);

                  const diffClass = `badge-${q.difficulty.toLowerCase()}`;

                  qRow.innerHTML = `
                    <input type="checkbox" class="progress-checkbox" ${isDone ? 'checked' : ''} onclick="event.stopPropagation(); window.app.toggleCompleted('${q.id}', event)" title="Mark as completed" />
                    <span class="truncate flex-1 ${isDone ? 'line-through text-zinc-500' : ''}">${q.title}</span>
                    <span class="badge-diff ${diffClass}">${q.difficulty}</span>
                    ${q.leetcode ? `<a href="${q.leetcode.url}" target="_blank" onclick="event.stopPropagation()" class="badge-leetcode" title="Open LeetCode ${q.leetcode.number}">#${q.leetcode.number}</a>` : ''}
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
     * QUESTION SELECTION & VIEW RENDERING
     * ----------------------------------------------------------------------- */
    getCurrentQuestion() {
      const topic = this.topics[this.currentTopicId];
      if (!topic || !topic.questions) return null;
      return topic.questions.find(q => q.id === this.currentQuestionId) || topic.questions[0];
    }

    selectQuestion(qid) {
      this.currentQuestionId = qid;
      this.currentApproachIdx = 0;
      this.renderSidebar();
      this.renderQuestionView();
    }

    renderQuestionView() {
      const q = this.getCurrentQuestion();
      if (!q) return;

      const topic = this.topics[this.currentTopicId];
      
      // Update Breadcrumbs & Header
      const bcTopic = document.getElementById('bc-topic');
      if (bcTopic) bcTopic.textContent = topic ? topic.title : 'Data Structures';
      
      const qTitle = document.getElementById('q-title');
      if (qTitle) qTitle.textContent = q.title;

      const diffBadge = document.getElementById('q-diff-badge');
      if (diffBadge) {
        diffBadge.className = `badge-diff badge-${q.difficulty.toLowerCase()}`;
        diffBadge.textContent = q.difficulty;
      }

      const lcLink = document.getElementById('q-leetcode-link');
      if (lcLink) {
        if (q.leetcode) {
          lcLink.style.display = 'inline-flex';
          lcLink.href = q.leetcode.url;
          lcLink.innerHTML = `<span>LeetCode #${q.leetcode.number}</span> <span class="text-xs">&nearr;</span>`;
        } else {
          lcLink.style.display = 'none';
        }
      }

      this.updateQuestionCompletedButton();

      // Description & Constraints
      const descEl = document.getElementById('q-description');
      if (descEl) descEl.textContent = q.description;

      const constrEl = document.getElementById('q-constraints');
      if (constrEl) constrEl.textContent = q.constraints || 'Standard memory and time bounds apply.';

      // Examples
      const exContainer = document.getElementById('q-examples');
      if (exContainer) {
        exContainer.innerHTML = '';
        (q.examples || []).forEach((ex, idx) => {
          const exBox = document.createElement('div');
          exBox.className = 'surface-sub p-3.5 rounded-lg border font-mono text-xs space-y-1.5';
          exBox.innerHTML = `
            <div class="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Example ${idx + 1}</div>
            <div><span class="text-zinc-500">Input:</span> <span class="text-white">${ex.input}</span></div>
            <div><span class="text-zinc-500">Output:</span> <span class="text-emerald-400 font-semibold">${ex.output}</span></div>
            ${ex.why ? `<div class="text-[11px] text-zinc-400 pt-1 border-t border-zinc-800/80"><span class="text-zinc-500">Explanation:</span> ${ex.why}</div>` : ''}
          `;
          exContainer.appendChild(exBox);
        });
      }

      // Pitfalls / Mistakes
      const pitfallEl = document.getElementById('q-common-mistakes');
      if (pitfallEl) {
        pitfallEl.textContent = q.commonMistakes || 'Pay strict attention to boundary conditions and null pointer dereferences.';
      }

      // Approach Tabs
      this.renderApproachTabs(q);

      // Render Code, Complexity, and Animation
      this.renderCurrentApproach();
    }

    updateQuestionCompletedButton() {
      const btn = document.getElementById('q-toggle-completed-btn');
      if (!btn) return;
      const isDone = this.isCompleted(this.currentQuestionId);
      if (isDone) {
        btn.innerHTML = '<span>✓ Completed</span>';
        btn.className = 'btn-mech bg-emerald-500/20 text-emerald-400 border-emerald-500/40 text-xs font-semibold';
      } else {
        btn.innerHTML = '<span>Mark as Completed</span>';
        btn.className = 'btn-mech text-xs font-semibold text-zinc-300';
      }
      btn.onclick = () => this.toggleCompleted(this.currentQuestionId);
    }

    renderApproachTabs(q) {
      const tabContainer = document.getElementById('approach-tabs');
      if (!tabContainer) return;
      tabContainer.innerHTML = '';

      (q.approaches || []).forEach((app, idx) => {
        const btn = document.createElement('button');
        const isActive = idx === this.currentApproachIdx;
        btn.className = `px-3.5 py-1.5 text-xs font-mono rounded-lg border transition-all ${isActive ? 'bg-indigo-500/20 border-indigo-500 text-indigo-300 font-bold' : 'surface-sub border-zinc-800 text-zinc-400 hover:text-white'}`;
        btn.textContent = app.name;
        btn.onclick = () => {
          this.currentApproachIdx = idx;
          this.renderApproachTabs(q);
          this.renderCurrentApproach();
        };
        tabContainer.appendChild(btn);
      });
    }

    renderCurrentApproach() {
      const q = this.getCurrentQuestion();
      if (!q || !q.approaches || !q.approaches[this.currentApproachIdx]) return;
      const app = q.approaches[this.currentApproachIdx];

      // Intuition / Idea
      const ideaEl = document.getElementById('approach-idea');
      if (ideaEl) ideaEl.textContent = app.idea;

      // Complexity
      const timeEl = document.getElementById('complexity-time');
      if (timeEl) timeEl.textContent = app.timeComplexity;

      const spaceEl = document.getElementById('complexity-space');
      if (spaceEl) spaceEl.textContent = app.spaceComplexity;

      // Language Buttons
      ['python', 'java', 'cpp', 'javascript'].forEach(lang => {
        const btn = document.getElementById(`lang-btn-${lang}`);
        if (btn) {
          if (lang === this.currentLang) {
            btn.className = 'px-3 py-1.5 text-xs font-mono font-bold border-b-2 border-indigo-500 text-indigo-400 transition-all';
          } else {
            btn.className = 'px-3 py-1.5 text-xs font-mono text-zinc-400 hover:text-white border-b-2 border-transparent transition-all';
          }
          btn.onclick = () => {
            this.currentLang = lang;
            this.renderCurrentApproach();
          };
        }
      });

      // Render Synchronized Code Box
      this.renderCodeLines(app);

      // Load Animation Steps into Universal Animator
      if (this.animator) {
        this.animator.load(app.animationSteps || []);
      }
    }

    renderCodeLines(app) {
      const codeContainer = document.getElementById('code-lines-display');
      if (!codeContainer) return;
      codeContainer.innerHTML = '';

      const rawCode = (app.code && app.code[this.currentLang]) || '// Code solution arriving shortly';
      const lines = rawCode.split('\n');

      lines.forEach((lineText, idx) => {
        const lineNum = idx + 1;
        const row = document.createElement('div');
        row.id = `code-line-${lineNum}`;
        row.className = 'code-line-row';
        row.onclick = () => this.showLineExplanation(lineNum, app);

        row.innerHTML = `
          <div class="code-line-num font-mono">${lineNum}</div>
          <div class="code-line-content font-mono">${this.escapeHtml(lineText)}</div>
        `;
        codeContainer.appendChild(row);
      });

      // Render Beginner Mode Explanation List if toggled
      this.renderAllLinesGuide(app);
    }

    highlightCodeLine(lineNum) {
      document.querySelectorAll('.code-line-row').forEach(row => row.classList.remove('active-executing'));
      const target = document.getElementById(`code-line-${lineNum}`);
      if (target) {
        target.classList.add('active-executing');
        target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    showLineExplanation(lineNum, app) {
      this.highlightCodeLine(lineNum);
      const explBox = document.getElementById('line-explanation-box');
      if (!explBox) return;

      const matchingExpl = (app.lineExplanations || []).find(e => {
        const [start, end] = e.lines;
        return lineNum >= start && lineNum <= end;
      });

      if (matchingExpl) {
        explBox.innerHTML = `
          <div class="text-[10px] font-mono text-cyan-400 font-bold uppercase mb-1">Plain-English Line Explanation &bull; Line ${lineNum}</div>
          <p class="text-zinc-200 text-xs">${matchingExpl.text}</p>
        `;
      } else {
        explBox.innerHTML = `
          <div class="text-[10px] font-mono text-zinc-400 font-bold uppercase mb-1">Line ${lineNum}</div>
          <p class="text-zinc-400 text-xs">Standard syntax execution step.</p>
        `;
      }
    }

    toggleExplainAllMode() {
      this.explainAllMode = !this.explainAllMode;
      const btn = document.getElementById('toggle-explain-all-btn');
      if (btn) {
        btn.textContent = this.explainAllMode ? 'Hide Line-by-Line Guide' : 'Explain All Lines (Beginner Mode)';
      }
      const q = this.getCurrentQuestion();
      if (q && q.approaches && q.approaches[this.currentApproachIdx]) {
        this.renderAllLinesGuide(q.approaches[this.currentApproachIdx]);
      }
    }

    renderAllLinesGuide(app) {
      const guideContainer = document.getElementById('all-lines-guide');
      if (!guideContainer) return;
      if (!this.explainAllMode) {
        guideContainer.style.display = 'none';
        return;
      }
      guideContainer.style.display = 'block';
      guideContainer.innerHTML = `
        <div class="p-4 rounded-xl surface-sub border space-y-3 font-mono text-xs">
          <div class="font-bold text-sm text-indigo-400 flex items-center space-x-2">
            <span>📖</span>
            <span>Beginner Guide: Every Line Explained in Simple Words</span>
          </div>
          <div class="space-y-2 divide-y divide-zinc-800/80 text-xs">
            ${(app.lineExplanations || []).map(e => `
              <div class="pt-2">
                <span class="px-2 py-0.5 rounded bg-zinc-800 text-cyan-300 font-bold text-[10px]">Lines ${e.lines[0]}-${e.lines[1]}</span>
                <p class="mt-1 text-zinc-300 font-sans leading-relaxed text-xs">${e.text}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    bindThemeSwitchers() {
      const themes = { 'theme-btn-dark': '', 'theme-btn-light': 'theme-light', 'theme-btn-matrix': 'theme-matrix' };
      for (const btnId in themes) {
        const btn = document.getElementById(btnId);
        if (btn) {
          btn.onclick = () => {
            document.documentElement.className = themes[btnId];
          };
        }
      }
    }

    bindKeyboardShortcuts() {
      window.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        if (e.code === 'Space') {
          e.preventDefault();
          if (this.animator) this.animator.togglePlay();
        } else if (e.code === 'ArrowRight') {
          if (this.animator) this.animator.stepForward();
        } else if (e.code === 'ArrowLeft') {
          if (this.animator) this.animator.stepBack();
        } else if (e.code === 'KeyR') {
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

  window.addEventListener('DOMContentLoaded', () => {
    window.app = new SynapseApp();
  });
})(window);
