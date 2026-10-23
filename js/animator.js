/**
 * SynapseCS - Universal Data-Driven DSA Animation Engine
 * Validates state contracts, renders all 12 visualizer data structures,
 * supports custom inputs, and controls playback with deep-cloned snapshots.
 */

(function(window) {
  'use strict';

  const KNOWN_RENDERERS = new Set([
    'array', 'linked-list', 'doubly-linked-list', 'stack', 'queue',
    'tree', 'graph', 'hash-table', 'grid', 'dp-table', 'heap', 'trie'
  ]);

  class DSAAnimator {
    constructor(options = {}) {
      this.canvasEl = options.canvasEl || document.getElementById('anim-stage-viewport');
      this.descEl = options.descEl || document.getElementById('anim-step-description');
      this.scrubberEl = options.scrubberEl || document.getElementById('anim-scrubber');
      this.counterEl = options.counterEl || document.getElementById('anim-step-counter');
      this.playBtn = options.playBtn || document.getElementById('anim-btn-play');
      this.speedInput = options.speedInput || document.getElementById('anim-speed');
      this.codeHighlightCallback = options.onHighlightTag || options.onHighlightLine || null;

      this.currentQuestion = null;
      this.steps = [];
      this.currentIndex = 0;
      this.isPlaying = false;
      this.speedMultiplier = 1.0;
      this.baseDelay = 1200; // ms per step at 1x
      this.timer = null;

      this.initControls();
    }

    initControls() {
      if (this.scrubberEl) {
        this.scrubberEl.addEventListener('input', (e) => {
          this.pause();
          this.goToStep(parseInt(e.target.value, 10));
        });
      }
      if (this.speedInput) {
        this.speedInput.addEventListener('change', (e) => {
          this.setSpeed(parseFloat(e.target.value));
        });
      }
    }

    /**
     * Load steps for a question, running its reference tracer if dynamic
     */
    load(stepsOrQuestion, initialIndex = 0) {
      this.pause();

      if (stepsOrQuestion && (stepsOrQuestion.tracer || stepsOrQuestion.approaches)) {
        this.currentQuestion = stepsOrQuestion;
        const tracerName = stepsOrQuestion.tracer || stepsOrQuestion.id;
        if (window.Tracers && typeof window.Tracers[tracerName] === 'function') {
          try {
            this.steps = window.Tracers[tracerName](stepsOrQuestion.sampleInput);
          } catch (e) {
            console.error('Tracer execution error:', e);
            this.steps = this.extractFallbackSteps(stepsOrQuestion);
          }
        } else {
          this.steps = this.extractFallbackSteps(stepsOrQuestion);
        }
      } else if (Array.isArray(stepsOrQuestion)) {
        this.steps = stepsOrQuestion;
      } else {
        this.steps = [];
      }

      if (!this.steps || this.steps.length === 0) {
        this.steps = [{
          tag: 'init',
          codeLine: 1,
          description: "Ready. Click Play or Step to begin visualization.",
          state: { type: 'array', array: [] },
          highlights: [],
          pointers: {}
        }];
      }

      this.currentIndex = Math.max(0, Math.min(initialIndex, this.steps.length - 1));
      if (this.scrubberEl) {
        this.scrubberEl.min = 0;
        this.scrubberEl.max = this.steps.length - 1;
        this.scrubberEl.value = this.currentIndex;
      }
      this.render();
    }

    extractFallbackSteps(q) {
      if (q && q.approaches && q.approaches[0] && Array.isArray(q.approaches[0].animationSteps)) {
        return q.approaches[0].animationSteps;
      }
      return [];
    }

    /**
     * Re-run animation using custom user input with bounds validation
     */
    runCustomInput(rawInput) {
      if (!this.currentQuestion) return { success: false, error: 'No active question loaded.' };
      const tracerName = this.currentQuestion.tracer || this.currentQuestion.id;
      if (!window.Tracers || typeof window.Tracers[tracerName] !== 'function') {
        return { success: false, error: `No dynamic tracer registered for ${tracerName}` };
      }

      let parsedInput;
      try {
        parsedInput = typeof rawInput === 'string' ? JSON.parse(rawInput) : rawInput;
      } catch (e) {
        // Fallback for simple comma-separated numbers: "1, 2, 3"
        if (typeof rawInput === 'string' && rawInput.includes(',')) {
          parsedInput = rawInput.split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));
        } else {
          return { success: false, error: 'Invalid input format. Provide valid JSON or comma-separated numbers.' };
        }
      }

      // Safety size limits
      if (Array.isArray(parsedInput) && parsedInput.length > 25) {
        return { success: false, error: 'Input array exceeds maximum visualizer limit (25 elements).' };
      }

      try {
        const newSteps = window.Tracers[tracerName](parsedInput);
        if (!newSteps || newSteps.length === 0) {
          return { success: false, error: 'Tracer produced zero steps for this input.' };
        }
        this.steps = newSteps;
        this.currentIndex = 0;
        if (this.scrubberEl) {
          this.scrubberEl.min = 0;
          this.scrubberEl.max = this.steps.length - 1;
          this.scrubberEl.value = 0;
        }
        this.render();
        return { success: true, count: newSteps.length };
      } catch (err) {
        return { success: false, error: `Algorithm execution failed: ${err.message}` };
      }
    }

    play() {
      if (this.isPlaying) return;
      if (this.currentIndex >= this.steps.length - 1) {
        this.currentIndex = 0;
      }
      this.isPlaying = true;
      this.updatePlayButton();
      this.tick();
    }

    pause() {
      this.isPlaying = false;
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.updatePlayButton();
    }

    togglePlay() {
      if (this.isPlaying) this.pause();
      else this.play();
    }

    updatePlayButton() {
      if (!this.playBtn) return;
      if (this.isPlaying) {
        this.playBtn.innerHTML = '<span>⏸ Pause</span>';
        this.playBtn.classList.add('bg-[#ffe17c]', 'text-[#171e19]');
      } else {
        this.playBtn.innerHTML = '<span>▶ Play</span>';
        this.playBtn.classList.remove('bg-[#ffe17c]');
      }
    }

    stepForward() {
      this.pause();
      if (this.currentIndex < this.steps.length - 1) {
        this.currentIndex++;
        this.render();
      }
    }

    stepBack() {
      this.pause();
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.render();
      }
    }

    reset() {
      this.pause();
      this.currentIndex = 0;
      this.render();
    }

    goToStep(idx) {
      if (idx >= 0 && idx < this.steps.length) {
        this.currentIndex = idx;
        this.render();
      }
    }

    setSpeed(mult) {
      this.speedMultiplier = Math.max(0.2, Math.min(5.0, parseFloat(mult) || 1.0));
    }

    tick() {
      if (!this.isPlaying) return;
      if (this.currentIndex < this.steps.length - 1) {
        this.currentIndex++;
        this.render();
        const delay = Math.max(200, this.baseDelay / this.speedMultiplier);
        this.timer = setTimeout(() => this.tick(), delay);
      } else {
        this.pause();
      }
    }

    /**
     * Validate visualizer state against /js/renderers/CONTRACTS.md
     */
    validateState(step) {
      if (!step || typeof step !== 'object') return { valid: false, error: 'Step object is missing or null' };
      if (!step.state || typeof step.state !== 'object') return { valid: false, error: 'step.state must be a valid object' };

      const rType = step.state.type;
      if (!rType) return { valid: false, error: 'state.type is missing from animation step' };
      if (!KNOWN_RENDERERS.has(rType)) return { valid: false, error: `Unknown renderer type "${rType}"` };

      const ptrs = step.pointers || {};
      if (rType === 'array' && Array.isArray(step.state.array)) {
        for (const [p, val] of Object.entries(ptrs)) {
          if (typeof val === 'number' && (val < 0 || val >= step.state.array.length)) {
            return { valid: false, error: `Pointer "${p}" index ${val} out of bounds [0..${step.state.array.length - 1}]` };
          }
        }
      } else if ((rType === 'linked-list' || rType === 'doubly-linked-list') && Array.isArray(step.state.nodes)) {
        for (const [p, val] of Object.entries(ptrs)) {
          if (typeof val === 'number' && (val < 0 || val >= step.state.nodes.length)) {
            return { valid: false, error: `Pointer "${p}" index ${val} out of node bounds [0..${step.state.nodes.length - 1}]` };
          }
        }
      } else if (rType === 'stack' && Array.isArray(step.state.stack)) {
        for (const [p, val] of Object.entries(ptrs)) {
          if (typeof val === 'number' && (val < 0 || val >= step.state.stack.length)) {
            return { valid: false, error: `Pointer "${p}" index ${val} out of stack bounds [0..${step.state.stack.length - 1}]` };
          }
        }
      } else if (rType === 'queue' && Array.isArray(step.state.queue)) {
        for (const [p, val] of Object.entries(ptrs)) {
          if (typeof val === 'number' && (val < 0 || val >= step.state.queue.length)) {
            return { valid: false, error: `Pointer "${p}" index ${val} out of queue bounds [0..${step.state.queue.length - 1}]` };
          }
        }
      }

      return { valid: true };
    }

    render() {
      if (!this.steps || this.steps.length === 0) return;
      const step = this.steps[this.currentIndex];

      // Update Scrubber & Counter
      if (this.scrubberEl) this.scrubberEl.value = this.currentIndex;
      if (this.counterEl) {
        this.counterEl.textContent = `Step ${this.currentIndex + 1} / ${this.steps.length}`;
      }

      // Update Description
      if (this.descEl) {
        this.descEl.innerHTML = `<span class="bg-[#ffe17c] text-[#171e19] px-2 py-0.5 rounded border border-black font-mono font-bold mr-2 text-xs">Step ${this.currentIndex + 1}</span><span class="font-sans font-medium text-sm text-[#171e19]">${step.description || ''}</span>`;
      }

      // Notify Code Viewer Callback (by tag or line)
      if (typeof this.codeHighlightCallback === 'function') {
        this.codeHighlightCallback(step.tag || step.codeLine, step);
      }

      // Render Visual Canvas
      if (this.canvasEl) {
        this.canvasEl.innerHTML = '';

        // Validate Contract
        const validation = this.validateState(step);
        if (!validation.valid) {
          this.renderError(validation.error, step);
          return;
        }

        const state = step.state || {};
        const type = state.type;
        const highlights = step.highlights || [];
        const pointers = step.pointers || {};

        switch (type) {
          case 'linked-list':
          case 'doubly-linked-list':
            this.renderLinkedList(state, highlights, pointers, type === 'doubly-linked-list');
            break;
          case 'stack':
            this.renderStack(state, highlights, pointers);
            break;
          case 'queue':
            this.renderQueue(state, highlights, pointers);
            break;
          case 'tree':
            this.renderTree(state, highlights, pointers);
            break;
          case 'hash-table':
            this.renderHashTable(state, highlights, pointers);
            break;
          case 'array':
            this.renderArray(state, highlights, pointers);
            break;
          case 'graph':
            this.renderGraph(state, highlights, pointers);
            break;
          case 'grid':
            this.renderGrid(state, highlights, pointers);
            break;
          case 'dp-table':
            this.renderDPTable(state, highlights, pointers);
            break;
          case 'heap':
            this.renderHeap(state, highlights, pointers);
            break;
          case 'trie':
            this.renderTrie(state, highlights, pointers);
            break;
          default:
            this.renderGeneric(state, step);
        }
      }
    }

    /**
     * Render On-Screen Error Callout (Neo-Brutalist design)
     */
    renderError(errorMessage, step) {
      const errBox = document.createElement('div');
      errBox.className = 'w-full p-6 bg-rose-50 border-2 border-black rounded-xl hard-shadow-md text-[#171e19] space-y-4';
      errBox.innerHTML = `
        <div class="flex items-center gap-3">
          <span class="px-2.5 py-1 bg-[#ff5f56] text-white border border-black font-bold text-xs uppercase rounded">
            Contract Violation
          </span>
          <span class="font-bold text-sm text-rose-800">${errorMessage}</span>
        </div>
        <p class="text-xs text-zinc-700">
          The algorithm step emitted an invalid state structure violating <code>/js/renderers/CONTRACTS.md</code>.
        </p>
        <div class="bg-black text-[#ffe17c] p-3 rounded-lg font-mono text-[11px] overflow-x-auto border border-black">
          <pre>${JSON.stringify(step, null, 2)}</pre>
        </div>
      `;
      this.canvasEl.appendChild(errBox);
    }

    /* -----------------------------------------------------------------------
     * 1 & 2. LINKED LIST & DOUBLY LINKED LIST RENDERER
     * ----------------------------------------------------------------------- */
    renderLinkedList(state, highlights, pointers, isDoubly = false) {
      const container = document.createElement('div');
      container.className = 'w-full flex items-center justify-start sm:justify-center flex-wrap gap-y-12 gap-x-2 py-8 px-4 overflow-x-auto min-h-[220px]';

      const nodes = Array.isArray(state.nodes) ? state.nodes : [];
      if (nodes.length === 0) {
        container.innerHTML = '<div class="text-xs font-mono font-bold text-zinc-500 py-10 bg-white border-2 border-black px-6 rounded-lg hard-shadow-sm">Empty Linked List (HEAD = NULL)</div>';
        this.canvasEl.appendChild(container);
        return;
      }

      nodes.forEach((node, idx) => {
        const isLast = idx === nodes.length - 1;
        const hexAddr = node.addr || `0x10${(idx * 32).toString(16).padStart(2, '0').toUpperCase()}`;
        const nextAddr = node.nextAddr || (isLast ? (state.cycleToIndex !== undefined ? `0x10${(state.cycleToIndex * 32).toString(16).padStart(2, '0').toUpperCase()}` : 'NULL') : `0x10${((idx + 1) * 32).toString(16).padStart(2, '0').toUpperCase()}`);

        const isHighlighted = highlights.includes(idx) || highlights.includes(node.val);

        const nodeWrapper = document.createElement('div');
        nodeWrapper.className = 'relative flex items-center';

        const activePtrs = [];
        for (const [pName, pTarget] of Object.entries(pointers)) {
          if (pTarget === idx || pTarget === node.val || pTarget === hexAddr) {
            activePtrs.push(pName);
          }
        }

        if (activePtrs.length > 0) {
          const ptrBadge = document.createElement('div');
          ptrBadge.className = 'absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#ffe17c] text-[#171e19] border border-black rounded text-[10px] font-black uppercase shadow';
          ptrBadge.textContent = activePtrs.join(', ');
          nodeWrapper.appendChild(ptrBadge);
        }

        const nodeBox = document.createElement('div');
        nodeBox.className = `border-2 border-black rounded-lg flex overflow-hidden hard-shadow-sm transition-all ${
          isHighlighted ? 'ring-4 ring-[#ffe17c] bg-[#b7c6c2]' : 'bg-white'
        }`;
        nodeBox.innerHTML = `
          <div class="p-2 sm:p-3 border-r-2 border-black flex flex-col items-center min-w-[54px]">
            <span class="text-[9px] font-mono text-zinc-500">${hexAddr}</span>
            <span class="font-mono font-black text-sm">${node.val}</span>
          </div>
          <div class="p-2 bg-zinc-50 flex flex-col justify-center text-[10px] font-mono">
            ${isDoubly ? `<span class="text-[8px] text-zinc-400">PREV</span>` : ''}
            <span class="text-[8px] text-zinc-500">NEXT</span>
            <span class="font-bold text-[10px] ${nextAddr === 'NULL' ? 'text-zinc-400' : 'text-emerald-700'}">${nextAddr}</span>
          </div>
        `;
        nodeWrapper.appendChild(nodeBox);
        container.appendChild(nodeWrapper);

        if (!isLast) {
          const arrowSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          arrowSvg.setAttribute('width', '32');
          arrowSvg.setAttribute('height', '24');
          arrowSvg.setAttribute('viewBox', '0 0 32 24');
          arrowSvg.setAttribute('class', 'overflow-visible flex-shrink-0');
          arrowSvg.innerHTML = `
            <line x1="2" y1="12" x2="24" y2="12" stroke="#171e19" stroke-width="2.5" />
            <polygon points="22,7 30,12 22,17" fill="#171e19" />
            ${isDoubly ? '<polygon points="8,7 0,12 8,17" fill="#171e19" />' : ''}
          `;
          container.appendChild(arrowSvg);
        } else if (state.cycleToIndex !== undefined) {
          const cycleBadge = document.createElement('div');
          cycleBadge.className = 'px-2 py-1 bg-[#ffe17c] border border-black text-[10px] font-mono font-bold text-[#171e19] ml-2 rounded';
          cycleBadge.innerHTML = `⟲ Cycle to Node[${state.cycleToIndex}]`;
          container.appendChild(cycleBadge);
        }
      });

      this.canvasEl.appendChild(container);
    }

    /* -----------------------------------------------------------------------
     * 3. STACK RENDERER
     * ----------------------------------------------------------------------- */
    renderStack(state, highlights, pointers) {
      const container = document.createElement('div');
      container.className = 'w-full flex flex-col items-center justify-center py-6 px-4';

      const items = Array.isArray(state.stack) ? state.stack : [];
      const col = document.createElement('div');
      col.className = 'w-48 border-2 border-black border-t-0 bg-zinc-50 rounded-b-xl flex flex-col-reverse p-2 min-h-[160px] hard-shadow-sm';

      if (items.length === 0) {
        col.innerHTML = '<div class="text-[11px] font-mono text-zinc-500 my-auto text-center font-bold">Empty Stack (TOP = -1)</div>';
      } else {
        items.forEach((val, idx) => {
          const isTop = idx === items.length - 1;
          const isHighlighted = highlights.includes(idx) || highlights.includes(val);

          const cell = document.createElement('div');
          cell.className = `p-2.5 my-1 border-2 border-black rounded-lg font-mono font-bold text-xs flex items-center justify-between transition-all ${
            isHighlighted ? 'bg-[#ffe17c] text-[#171e19]' : isTop ? 'bg-[#b7c6c2] text-[#171e19]' : 'bg-white text-[#171e19]'
          }`;
          cell.innerHTML = `
            <span>${val}</span>
            <span class="text-[10px] text-zinc-500">[${idx}] ${isTop ? '• TOP' : ''}</span>
          `;
          col.appendChild(cell);
        });
      }

      container.appendChild(col);
      this.canvasEl.appendChild(container);
    }

    /* -----------------------------------------------------------------------
     * 4. QUEUE RENDERER
     * ----------------------------------------------------------------------- */
    renderQueue(state, highlights, pointers) {
      const container = document.createElement('div');
      container.className = 'w-full flex flex-col items-center justify-center py-8 px-4';

      const items = Array.isArray(state.queue) ? state.queue : [];
      const queueWrap = document.createElement('div');
      queueWrap.className = 'flex items-center gap-3 overflow-x-auto p-4 bg-white border-2 border-black rounded-xl hard-shadow-md max-w-full';

      const inIndicator = document.createElement('div');
      inIndicator.className = 'flex flex-col items-center text-[10px] font-mono font-bold pr-2 border-r-2 border-black';
      inIndicator.innerHTML = '<span class="text-emerald-700">IN →</span><span>(REAR)</span>';
      queueWrap.appendChild(inIndicator);

      if (items.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'text-xs font-mono font-bold text-zinc-500 px-8 py-4';
        empty.textContent = 'Queue is Empty (size = 0)';
        queueWrap.appendChild(empty);
      } else {
        items.forEach((val, idx) => {
          const isHighlighted = highlights.includes(idx) || highlights.includes(val);
          const itemWrap = document.createElement('div');
          itemWrap.className = 'relative flex flex-col items-center';

          const activePtrs = [];
          if (idx === 0) activePtrs.push('FRONT');
          if (idx === items.length - 1) activePtrs.push('REAR');
          for (const [pName, pVal] of Object.entries(pointers)) {
            if (pVal === idx || pVal === val) activePtrs.push(pName);
          }
          const uniquePtrs = [...new Set(activePtrs)];

          if (uniquePtrs.length > 0) {
            const pill = document.createElement('div');
            pill.className = 'absolute -top-7 px-2 py-0.5 bg-[#ffe17c] text-[#171e19] border border-black rounded text-[9px] font-black uppercase whitespace-nowrap';
            pill.textContent = uniquePtrs.join(', ');
            itemWrap.appendChild(pill);
          }

          const box = document.createElement('div');
          box.className = `w-14 h-14 rounded-lg flex flex-col items-center justify-center font-mono text-xs font-black border-2 border-black hard-shadow-sm transition-all ${
            isHighlighted ? 'bg-[#ffe17c] text-[#171e19]' : 'bg-white text-[#171e19]'
          }`;
          box.innerHTML = `<span>${val}</span><span class="text-[9px] text-zinc-500">[${idx}]</span>`;
          itemWrap.appendChild(box);
          queueWrap.appendChild(itemWrap);
        });
      }

      const outIndicator = document.createElement('div');
      outIndicator.className = 'flex flex-col items-center text-[10px] font-mono font-bold pl-2 border-l-2 border-black';
      outIndicator.innerHTML = '<span class="text-rose-700">OUT →</span><span>(FRONT)</span>';
      queueWrap.appendChild(outIndicator);

      container.appendChild(queueWrap);
      this.canvasEl.appendChild(container);
    }

    /* -----------------------------------------------------------------------
     * 5. ARRAY RENDERER
     * ----------------------------------------------------------------------- */
    renderArray(state, highlights, pointers) {
      const container = document.createElement('div');
      container.className = 'w-full flex flex-col items-center justify-center py-8 px-4';

      const arr = Array.isArray(state.array) ? state.array : [];
      const cellsContainer = document.createElement('div');
      cellsContainer.className = 'flex items-center justify-center flex-wrap gap-2.5';

      arr.forEach((val, idx) => {
        const isHighlighted = highlights.includes(idx);
        const cellWrap = document.createElement('div');
        cellWrap.className = 'relative flex flex-col items-center';

        const activePtrs = [];
        for (const [pName, pIdx] of Object.entries(pointers)) {
          if (pIdx === idx) activePtrs.push(pName);
        }
        if (activePtrs.length > 0) {
          const pill = document.createElement('div');
          pill.className = 'absolute -top-7 px-2 py-0.5 bg-[#ffe17c] text-[#171e19] border border-black rounded text-[9px] font-black uppercase whitespace-nowrap shadow';
          pill.textContent = activePtrs.join(', ');
          cellWrap.appendChild(pill);
        }

        const box = document.createElement('div');
        box.className = `w-12 h-12 rounded-lg flex items-center justify-center font-mono text-sm font-black border-2 border-black hard-shadow-sm transition-all ${
          isHighlighted ? 'bg-[#ffe17c] text-[#171e19]' : 'bg-white text-[#171e19]'
        }`;
        box.textContent = val;
        cellWrap.appendChild(box);

        const idxLbl = document.createElement('span');
        idxLbl.className = 'text-[10px] font-mono text-zinc-500 mt-1';
        idxLbl.textContent = `[${idx}]`;
        cellWrap.appendChild(idxLbl);

        cellsContainer.appendChild(cellWrap);
      });

      container.appendChild(cellsContainer);
      this.canvasEl.appendChild(container);
    }

    /* -----------------------------------------------------------------------
     * 6. TREE RENDERER
     * ----------------------------------------------------------------------- */
    renderTree(state, highlights, pointers) {
      const container = document.createElement('div');
      container.className = 'w-full flex flex-col items-center justify-center py-6 px-4 overflow-x-auto';

      const tree = state.tree || [];
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '480');
      svg.setAttribute('height', '240');
      svg.setAttribute('viewBox', '0 0 480 240');
      svg.setAttribute('class', 'overflow-visible');

      const coords = [
        { x: 240, y: 36 },
        { x: 130, y: 100 }, { x: 350, y: 100 },
        { x: 75,  y: 175 }, { x: 185, y: 175 }, { x: 295, y: 175 }, { x: 405, y: 175 }
      ];

      const branches = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6]];

      branches.forEach(([p, c]) => {
        if (tree[p] !== null && tree[p] !== undefined && tree[c] !== null && tree[c] !== undefined) {
          const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          line.setAttribute('x1', coords[p].x);
          line.setAttribute('y1', coords[p].y);
          line.setAttribute('x2', coords[c].x);
          line.setAttribute('y2', coords[c].y);
          line.setAttribute('stroke', '#171e19');
          line.setAttribute('stroke-width', '2.5');
          svg.appendChild(line);
        }
      });

      tree.forEach((val, idx) => {
        if (val === null || val === undefined || idx >= coords.length) return;
        const pt = coords[idx];
        const isHighlighted = highlights.includes(idx) || highlights.includes(val);

        const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');

        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', pt.x);
        circle.setAttribute('cy', pt.y);
        circle.setAttribute('r', '18');
        circle.setAttribute('fill', isHighlighted ? '#ffe17c' : '#ffffff');
        circle.setAttribute('stroke', '#171e19');
        circle.setAttribute('stroke-width', '2.5');
        group.appendChild(circle);

        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', pt.x);
        text.setAttribute('y', pt.y + 4);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('fill', '#171e19');
        text.setAttribute('font-family', 'monospace');
        text.setAttribute('font-size', '12');
        text.setAttribute('font-weight', 'bold');
        text.textContent = val;
        group.appendChild(text);

        for (const [pName, pVal] of Object.entries(pointers)) {
          if (pVal === idx || pVal === val) {
            const ptrText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            ptrText.setAttribute('x', pt.x);
            ptrText.setAttribute('y', pt.y - 24);
            ptrText.setAttribute('text-anchor', 'middle');
            ptrText.setAttribute('fill', '#171e19');
            ptrText.setAttribute('font-family', 'monospace');
            ptrText.setAttribute('font-size', '10');
            ptrText.setAttribute('font-weight', '900');
            ptrText.textContent = pName.toUpperCase();
            group.appendChild(ptrText);
          }
        }

        svg.appendChild(group);
      });

      container.appendChild(svg);
      this.canvasEl.appendChild(container);
    }

    /* -----------------------------------------------------------------------
     * 7. HASH TABLE RENDERER
     * ----------------------------------------------------------------------- */
    renderHashTable(state, highlights, pointers) {
      const container = document.createElement('div');
      container.className = 'w-full flex flex-col items-center justify-center py-6 px-4';

      const buckets = state.buckets || [];
      const tableWrap = document.createElement('div');
      tableWrap.className = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl';

      buckets.forEach((bucket, bIdx) => {
        const isHighlighted = highlights.includes(bIdx);
        const bucketBox = document.createElement('div');
        bucketBox.className = `border-2 border-black rounded-lg p-3 flex flex-col hard-shadow-sm ${
          isHighlighted ? 'bg-[#ffe17c]' : 'bg-white'
        }`;
        const items = Array.isArray(bucket) ? bucket : (bucket.entries || []);
        bucketBox.innerHTML = `
          <div class="flex items-center justify-between border-b-2 border-black pb-2 mb-2 font-mono">
            <span class="text-xs font-black">Bucket [${bIdx}]</span>
            <span class="text-[10px] text-zinc-500 font-bold">${items.length} items</span>
          </div>
          <div class="flex flex-col gap-1.5 flex-1 min-h-[40px]">
            ${items.map(entry => `
              <div class="flex items-center justify-between text-xs font-mono px-2 py-1 rounded bg-zinc-50 border border-black">
                <span class="font-bold text-[#171e19]">${entry.key}</span>
                <span class="text-emerald-700 font-bold">→ ${entry.val}</span>
              </div>
            `).join('') || '<span class="text-[10px] text-zinc-400 italic py-2">Empty</span>'}
          </div>
        `;
        tableWrap.appendChild(bucketBox);
      });

      container.appendChild(tableWrap);
      this.canvasEl.appendChild(container);
    }

    /* -----------------------------------------------------------------------
     * 8. GRAPH RENDERER
     * ----------------------------------------------------------------------- */
    renderGraph(state, highlights, pointers) {
      const container = document.createElement('div');
      container.className = 'w-full flex flex-col items-center justify-center py-6 px-4';
      const nodes = state.nodes || [];
      const edges = state.edges || [];

      const box = document.createElement('div');
      box.className = 'p-6 bg-white border-2 border-black rounded-xl hard-shadow-md text-xs font-mono space-y-2';
      box.innerHTML = `
        <div class="font-bold uppercase tracking-wider text-zinc-500">Graph Adjacency View</div>
        <div>Nodes: <strong>${nodes.map(n => n.id || n).join(', ')}</strong></div>
        <div>Edges: ${edges.map(e => `${e.from} → ${e.to}`).join(', ')}</div>
      `;
      container.appendChild(box);
      this.canvasEl.appendChild(container);
    }

    /* -----------------------------------------------------------------------
     * 9. GRID RENDERER
     * ----------------------------------------------------------------------- */
    renderGrid(state, highlights, pointers) {
      const container = document.createElement('div');
      container.className = 'w-full flex flex-col items-center justify-center py-6 px-4';
      const grid = state.grid || [[]];

      const gridTable = document.createElement('div');
      gridTable.className = 'inline-grid gap-1 p-3 bg-white border-2 border-black rounded-xl hard-shadow-md';
      gridTable.style.gridTemplateColumns = `repeat(${grid[0].length || 1}, minmax(0, 1fr))`;

      grid.forEach((row, r) => {
        row.forEach((val, c) => {
          const cell = document.createElement('div');
          cell.className = 'w-10 h-10 border border-black rounded flex items-center justify-center font-mono font-bold text-xs bg-zinc-50';
          cell.textContent = val;
          gridTable.appendChild(cell);
        });
      });

      container.appendChild(gridTable);
      this.canvasEl.appendChild(container);
    }

    /* -----------------------------------------------------------------------
     * 10. DP TABLE RENDERER
     * ----------------------------------------------------------------------- */
    renderDPTable(state, highlights, pointers) {
      const container = document.createElement('div');
      container.className = 'w-full flex flex-col items-center justify-center py-6 px-4 overflow-x-auto';
      const table = state.table || [[]];

      const html = `
        <table class="border-2 border-black bg-white rounded-lg hard-shadow-sm font-mono text-xs">
          ${table.map((row, r) => `
            <tr>
              ${row.map(val => `<td class="border border-black p-2.5 text-center font-bold">${val}</td>`).join('')}
            </tr>
          `).join('')}
        </table>
      `;
      container.innerHTML = html;
      this.canvasEl.appendChild(container);
    }

    /* -----------------------------------------------------------------------
     * 11. HEAP RENDERER
     * ----------------------------------------------------------------------- */
    renderHeap(state, highlights, pointers) {
      return this.renderArray({ type: 'array', array: state.heap || [] }, highlights, pointers);
    }

    /* -----------------------------------------------------------------------
     * 12. TRIE RENDERER
     * ----------------------------------------------------------------------- */
    renderTrie(state, highlights, pointers) {
      const container = document.createElement('div');
      container.className = 'w-full flex flex-col items-center justify-center py-6 px-4';
      const box = document.createElement('div');
      box.className = 'p-6 bg-white border-2 border-black rounded-xl hard-shadow-md text-xs font-mono';
      box.innerHTML = `<div class="font-bold mb-2">Trie Root Snapshot:</div><pre class="bg-zinc-50 p-3 rounded border border-black">${JSON.stringify(state.root || {}, null, 2)}</pre>`;
      container.appendChild(box);
      this.canvasEl.appendChild(container);
    }

    renderGeneric(state, step) {
      const box = document.createElement('div');
      box.className = 'p-6 font-mono text-xs text-[#171e19] w-full overflow-x-auto bg-white border-2 border-black rounded-xl hard-shadow-md';
      box.innerHTML = `<pre>${JSON.stringify(state, null, 2)}</pre>`;
      this.canvasEl.appendChild(box);
    }
  }

  window.DSAAnimator = DSAAnimator;
})(typeof window !== 'undefined' ? window : global);
