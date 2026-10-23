/**
 * SynapseCS - Universal Data-Driven DSA Animation Engine
 * Renders algorithmic step traces (memory pointers, stacks, arrays, etc.)
 * with zero per-question animation boilerplate.
 */

(function(window) {
  'use strict';

  class DSAAnimator {
    constructor(options = {}) {
      this.canvasEl = options.canvasEl || document.getElementById('anim-stage-viewport');
      this.descEl = options.descEl || document.getElementById('anim-step-description');
      this.scrubberEl = options.scrubberEl || document.getElementById('anim-scrubber');
      this.counterEl = options.counterEl || document.getElementById('anim-step-counter');
      this.playBtn = options.playBtn || document.getElementById('anim-btn-play');
      this.codeHighlightCallback = options.onHighlightLine || null;

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
    }

    load(steps, initialIndex = 0) {
      this.pause();
      this.steps = Array.isArray(steps) && steps.length > 0 ? steps : [{
        codeLine: 1,
        description: "Ready. Click Play or Step to begin visualization.",
        state: { type: 'empty' },
        highlights: [],
        pointers: {}
      }];
      
      this.currentIndex = Math.max(0, Math.min(initialIndex, this.steps.length - 1));
      if (this.scrubberEl) {
        this.scrubberEl.min = 0;
        this.scrubberEl.max = this.steps.length - 1;
        this.scrubberEl.value = this.currentIndex;
      }
      this.render();
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
      if (this.isPlaying) {
        this.pause();
      } else {
        this.play();
      }
    }

    updatePlayButton() {
      if (!this.playBtn) return;
      if (this.isPlaying) {
        this.playBtn.innerHTML = '<span>⏸ Pause</span>';
        this.playBtn.classList.add('bg-amber-500/20', 'text-amber-400');
      } else {
        this.playBtn.innerHTML = '<span>▶ Play</span>';
        this.playBtn.classList.remove('bg-amber-500/20', 'text-amber-400');
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
      this.speedMultiplier = parseFloat(mult) || 1.0;
    }

    tick() {
      if (!this.isPlaying) return;
      if (this.currentIndex < this.steps.length - 1) {
        this.currentIndex++;
        this.render();
        const delay = Math.max(250, this.baseDelay / this.speedMultiplier);
        this.timer = setTimeout(() => this.tick(), delay);
      } else {
        this.pause();
      }
    }

    render() {
      if (!this.steps || this.steps.length === 0) return;
      const step = this.steps[this.currentIndex];

      // Update Scrubber & Counter
      if (this.scrubberEl) this.scrubberEl.value = this.currentIndex;
      if (this.counterEl) {
        this.counterEl.textContent = `Step ${this.currentIndex + 1} / ${this.steps.length}`;
      }

      // Update Plain English Description
      if (this.descEl) {
        this.descEl.innerHTML = `<span class="text-indigo-400 font-semibold font-mono mr-2">[Step ${this.currentIndex + 1}]</span>${step.description || ''}`;
      }

      // Synchronize Code Line Highlighting
      if (typeof this.codeHighlightCallback === 'function' && step.codeLine) {
        this.codeHighlightCallback(step.codeLine);
      }

      // Render Visual Canvas
      if (this.canvasEl) {
        this.canvasEl.innerHTML = '';
        const state = step.state || {};
        const type = state.type || 'array';

        if (type === 'linked-list') {
          this.renderLinkedList(state, step.highlights || [], step.pointers || {});
        } else if (type === 'stack') {
          this.renderStack(state, step.highlights || [], step.pointers || {});
        } else if (type === 'array') {
          this.renderArray(state, step.highlights || [], step.pointers || {});
        } else {
          this.renderGeneric(state, step);
        }
      }
    }

    /* -----------------------------------------------------------------------
     * LINKED LIST RENDERER (64-Bit Memory Addresses, SVG Arrows, Pointer Badges)
     * ----------------------------------------------------------------------- */
    renderLinkedList(state, highlights, pointers) {
      const container = document.createElement('div');
      container.className = 'w-full flex items-center justify-start sm:justify-center flex-wrap gap-y-12 gap-x-2 py-8 px-4 overflow-x-auto min-h-[220px]';

      const nodes = Array.isArray(state.nodes) ? state.nodes : [];
      if (nodes.length === 0) {
        container.innerHTML = '<div class="text-xs font-mono text-zinc-500 py-10">Empty Linked List (HEAD = NULL)</div>';
        this.canvasEl.appendChild(container);
        return;
      }

      nodes.forEach((node, idx) => {
        const isLast = idx === nodes.length - 1;
        const hexAddr = node.addr || `0x10${(idx * 32).toString(16).padStart(2, '0').toUpperCase()}`;
        const nextAddr = node.nextAddr || (isLast ? (state.cycleToIndex !== undefined ? `0x10${(state.cycleToIndex * 32).toString(16).padStart(2, '0').toUpperCase()}` : 'NULL') : `0x10${((idx + 1) * 32).toString(16).padStart(2, '0').toUpperCase()}`);

        const isHighlighted = highlights.includes(idx) || highlights.includes(node.val);

        // Node Container Wrapper for pointer badges
        const nodeWrapper = document.createElement('div');
        nodeWrapper.className = 'relative flex items-center';

        // Collect pointers matching this node
        const activePtrs = [];
        for (const [pName, pTarget] of Object.entries(pointers)) {
          if (pTarget === idx || pTarget === node.val || pTarget === hexAddr) {
            activePtrs.push(pName);
          }
        }

        // Pointer Badges Floating Above Node
        if (activePtrs.length > 0) {
          const ptrBadge = document.createElement('div');
          ptrBadge.className = 'pointer-pill';
          ptrBadge.textContent = activePtrs.join(', ');
          nodeWrapper.appendChild(ptrBadge);
        }

        // Physical Node Box
        const nodeBox = document.createElement('div');
        nodeBox.className = `ll-node-box ${isHighlighted ? 'highlight-active' : ''}`;
        nodeBox.innerHTML = `
          <div class="ll-node-val">
            <span class="ll-node-addr font-mono">${hexAddr}</span>
            <span class="ll-node-data font-mono">${node.val}</span>
          </div>
          <div class="ll-node-next">
            <span class="text-[8px] text-zinc-500 uppercase font-mono">NEXT</span>
            <span class="font-mono font-bold text-[10px]" style="color: ${nextAddr === 'NULL' ? 'var(--text-muted)' : 'var(--accent-mint)'};">${nextAddr}</span>
          </div>
        `;
        nodeWrapper.appendChild(nodeBox);
        container.appendChild(nodeWrapper);

        // Render Connecting SVG Arrow or Cycle Loop
        if (!isLast) {
          const arrowSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          arrowSvg.setAttribute('width', '32');
          arrowSvg.setAttribute('height', '24');
          arrowSvg.setAttribute('viewBox', '0 0 32 24');
          arrowSvg.className = 'overflow-visible flex-shrink-0';
          arrowSvg.innerHTML = `
            <line x1="2" y1="12" x2="24" y2="12" stroke="var(--accent-main)" stroke-width="2" class="link-arrow-animated" />
            <polygon points="22,7 30,12 22,17" fill="var(--accent-main)" />
          `;
          container.appendChild(arrowSvg);
        } else if (state.cycleToIndex !== undefined) {
          // Cycle Arrow Indicator
          const cycleBadge = document.createElement('div');
          cycleBadge.className = 'px-2 py-1 rounded bg-amber-500/20 border border-amber-500/40 text-[10px] font-mono text-amber-300 ml-2 animate-pulse flex items-center gap-1';
          cycleBadge.innerHTML = `<span>⟲</span> Cycle back to Node[${state.cycleToIndex}]`;
          container.appendChild(cycleBadge);
        }
      });

      this.canvasEl.appendChild(container);
    }

    /* -----------------------------------------------------------------------
     * STACK RENDERER (Vertical column, push/pop states, TOP pointer)
     * ----------------------------------------------------------------------- */
    renderStack(state, highlights, pointers) {
      const container = document.createElement('div');
      container.className = 'w-full flex flex-col items-center justify-center py-6 px-4';

      const items = Array.isArray(state.stack) ? state.stack : [];
      const col = document.createElement('div');
      col.className = 'stack-column';

      if (items.length === 0) {
        col.innerHTML = '<div class="text-[11px] font-mono text-zinc-500 my-auto text-center">Empty Stack<br>(TOP = -1)</div>';
      } else {
        items.forEach((val, idx) => {
          const isTop = idx === items.length - 1;
          const isHighlighted = highlights.includes(idx) || highlights.includes(val);

          const cell = document.createElement('div');
          cell.className = `stack-cell ${isTop ? 'top-element' : ''} ${isHighlighted ? 'highlight-active' : ''}`;
          cell.innerHTML = `
            <span class="text-xs">${val}</span>
            <span class="absolute left-2 top-2 text-[9px] text-zinc-500">[${idx}]</span>
            ${isTop ? '<span class="absolute right-2 top-2 text-[9px] font-mono text-indigo-400 font-bold">TOP &bull;</span>' : ''}
          `;
          col.appendChild(cell);
        });
      }

      container.appendChild(col);

      // Stack Telemetry Bar
      const telemetry = document.createElement('div');
      telemetry.className = 'mt-4 flex items-center gap-4 text-xs font-mono text-zinc-400 surface-sub px-4 py-2 rounded-lg border';
      telemetry.innerHTML = `
        <span>Size: <strong class="text-white">${items.length}</strong></span>
        <span>Top Value: <strong class="${items.length > 0 ? 'text-indigo-400' : 'text-zinc-500'}">${items.length > 0 ? items[items.length - 1] : 'null'}</strong></span>
        <span>Action: <strong class="text-emerald-400">${state.action || 'Idle'}</strong></span>
      `;
      container.appendChild(telemetry);

      this.canvasEl.appendChild(container);
    }

    /* -----------------------------------------------------------------------
     * ARRAY / BARS RENDERER (Contiguous cells, indices, pointers)
     * ----------------------------------------------------------------------- */
    renderArray(state, highlights, pointers) {
      const container = document.createElement('div');
      container.className = 'w-full flex flex-col items-center justify-center py-8 px-4';

      const arr = Array.isArray(state.array) ? state.array : [];
      const cellsContainer = document.createElement('div');
      cellsContainer.className = 'flex items-center justify-center flex-wrap gap-2';

      arr.forEach((val, idx) => {
        const isHighlighted = highlights.includes(idx);
        const cellWrap = document.createElement('div');
        cellWrap.className = 'relative flex flex-col items-center';

        // Pointer Badges Above
        const activePtrs = [];
        for (const [pName, pIdx] of Object.entries(pointers)) {
          if (pIdx === idx) activePtrs.push(pName);
        }
        if (activePtrs.length > 0) {
          const pill = document.createElement('div');
          pill.className = 'pointer-pill';
          pill.textContent = activePtrs.join(', ');
          cellWrap.appendChild(pill);
        }

        const box = document.createElement('div');
        box.className = `array-cell-box font-mono ${isHighlighted ? 'highlight' : ''}`;
        box.textContent = val;
        cellWrap.appendChild(box);

        const idxLbl = document.createElement('span');
        idxLbl.className = 'array-cell-idx font-mono';
        idxLbl.textContent = `[${idx}]`;
        cellWrap.appendChild(idxLbl);

        cellsContainer.appendChild(cellWrap);
      });

      container.appendChild(cellsContainer);
      this.canvasEl.appendChild(container);
    }

    renderGeneric(state, step) {
      const box = document.createElement('div');
      box.className = 'p-6 font-mono text-xs text-zinc-300 w-full overflow-x-auto';
      box.innerHTML = `<pre class="bg-black/40 p-4 rounded-lg border border-zinc-800">${JSON.stringify(state, null, 2)}</pre>`;
      this.canvasEl.appendChild(box);
    }
  }

  window.DSAAnimator = DSAAnimator;
})(window);
