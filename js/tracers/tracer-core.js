/**
 * SynapseCS - Algorithmic Reference Tracer Engine
 * Records exact operational snapshots with semantic tags, pointer positions,
 * and immutable deep-cloned state directly from executable algorithms.
 */

(function(window) {
  'use strict';

  class Tracer {
    constructor(type) {
      this.type = type;
      this.steps = [];
    }

    clone(val) {
      if (val === undefined || val === null) return val;
      return JSON.parse(JSON.stringify(val));
    }

    /**
     * Record an atomic algorithmic execution step
     * @param {Object} stepParam
     * @param {string} stepParam.tag Semantic code tag (e.g., 'init', 'flip', 'advance', 'push', 'pop')
     * @param {string} stepParam.description Plain-English educational explanation of what occurred
     * @param {Object} stepParam.state Data structure visualizer state conforming to CONTRACTS.md
     * @param {Object} [stepParam.pointers] Named pointers pointing to indices, addresses, or keys
     * @param {Array} [stepParam.highlights] Indices or values highlighted in this step
     */
    step({ tag = 'exec', description = '', state = {}, pointers = {}, highlights = [] }) {
      // Ensure state has the tracer's visualizer type if omitted
      if (!state.type) {
        state.type = this.type;
      }

      this.steps.push({
        tag: tag,
        codeLine: 1, // Fallback, will be mapped to language-specific tagged lines
        description: description,
        state: this.clone(state),
        pointers: this.clone(pointers),
        highlights: Array.isArray(highlights) ? [...highlights] : []
      });
    }

    getSteps() {
      return this.steps;
    }
  }

  // Global Tracers Registry
  window.Tracers = window.Tracers || {};
  window.Tracer = Tracer;

})(typeof window !== 'undefined' ? window : global);
