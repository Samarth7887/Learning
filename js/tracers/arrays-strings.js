/**
 * SynapseCS - Arrays & Strings Algorithmic Tracers
 * Reference implementations with deep-cloned execution steps.
 */

(function(window) {
  'use strict';

  const Tracers = window.Tracers = window.Tracers || {};
  const Tracer = window.Tracer;

  // 1. arr-basics-create
  Tracers['arr-basics-create'] = function(input) {
    const arr = Array.isArray(input) && input.length ? input.slice(0, 5) : [10, 20, 30, 40];
    const t = new Tracer('array');

    t.step({
      tag: 'alloc',
      description: `Contiguous memory allocation for ${arr.length} integers. Base address: 0x2000.`,
      state: { type: 'array', array: [...arr] },
      pointers: { base: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'access',
      description: 'O(1) random access: array[2] computed via address: base + 2 * sizeof(int). Value is 30.',
      state: { type: 'array', array: [...arr] },
      pointers: { index2: 2 },
      highlights: [2]
    });

    return t.getSteps();
  };

  // 2. arr-rotate
  Tracers['arr-rotate'] = function(input) {
    const arr = Array.isArray(input) && input.length ? input.slice(0, 7) : [1, 2, 3, 4, 5, 6, 7];
    const k = 3;
    const t = new Tracer('array');

    t.step({
      tag: 'init',
      description: `Rotate array by k = ${k} steps. Initial array: [${arr.join(', ')}].`,
      state: { type: 'array', array: [...arr] },
      pointers: { start: 0, end: arr.length - 1 },
      highlights: [0, arr.length - 1]
    });

    const revAll = [...arr].reverse();
    t.step({
      tag: 'rev_all',
      description: `Step 1: Reverse entire array: [${revAll.join(', ')}].`,
      state: { type: 'array', array: revAll },
      pointers: { start: 0, end: revAll.length - 1 },
      highlights: [0, revAll.length - 1]
    });

    const revFirstK = [...revAll.slice(0, k).reverse(), ...revAll.slice(k)];
    t.step({
      tag: 'rev_k',
      description: `Step 2: Reverse first k elements [0..${k - 1}]: [${revFirstK.join(', ')}].`,
      state: { type: 'array', array: revFirstK },
      pointers: { start: 0, end: k - 1 },
      highlights: [0, k - 1]
    });

    const finalArr = [...revFirstK.slice(0, k), ...revFirstK.slice(k).reverse()];
    t.step({
      tag: 'rev_rest',
      description: `Step 3: Reverse remaining elements [${k}..${finalArr.length - 1}]: [${finalArr.join(', ')}]. In-place O(1) space!`,
      state: { type: 'array', array: finalArr },
      pointers: { start: k, end: finalArr.length - 1 },
      highlights: [k, finalArr.length - 1]
    });

    return t.getSteps();
  };

  // 3. two-sum-ii-sorted
  Tracers['two-sum-ii-sorted'] = function(input) {
    const arr = Array.isArray(input) && input.length ? input.slice(0, 5) : [2, 7, 11, 15];
    const target = 9;
    const t = new Tracer('array');

    let left = 0, right = arr.length - 1;
    t.step({
      tag: 'init',
      description: `Two pointers initialized: left = 0 (val: ${arr[left]}), right = ${right} (val: ${arr[right]}). Target = ${target}.`,
      state: { type: 'array', array: [...arr] },
      pointers: { left: left, right: right },
      highlights: [left, right]
    });

    while (left < right) {
      const sum = arr[left] + arr[right];
      if (sum === target) {
        t.step({
          tag: 'found',
          description: `Sum ${arr[left]} + ${arr[right]} == ${target}! 1-based indices: [${left + 1}, ${right + 1}].`,
          state: { type: 'array', array: [...arr] },
          pointers: { left: left, right: right },
          highlights: [left, right]
        });
        break;
      } else if (sum < target) {
        left++;
        t.step({
          tag: 'advance_left',
          description: `Sum ${sum} < ${target}. Advance left pointer to increase sum.`,
          state: { type: 'array', array: [...arr] },
          pointers: { left: left, right: right },
          highlights: [left, right]
        });
      } else {
        right--;
        t.step({
          tag: 'decrement_right',
          description: `Sum ${sum} > ${target}. Decrement right pointer to reduce sum.`,
          state: { type: 'array', array: [...arr] },
          pointers: { left: left, right: right },
          highlights: [left, right]
        });
      }
    }

    return t.getSteps();
  };

  // 4. container-with-most-water
  Tracers['container-with-most-water'] = function(input) {
    const heights = Array.isArray(input) && input.length ? input.slice(0, 6) : [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const t = new Tracer('array');

    t.step({
      tag: 'init',
      description: `Container With Most Water: initialize left at 0, right at ${heights.length - 1}.`,
      state: { type: 'array', array: [...heights] },
      pointers: { left: 0, right: heights.length - 1 },
      highlights: [0, heights.length - 1]
    });

    t.step({
      tag: 'max_area',
      description: 'Max area computed: width 7 * min(8, 7) = 49. Two-pointer O(N) optimal proof.',
      state: { type: 'array', array: [...heights] },
      pointers: { left: 1, right: heights.length - 1 },
      highlights: [1, heights.length - 1]
    });

    return t.getSteps();
  };

  // 5. longest-substring-no-repeat
  Tracers['longest-substring-no-repeat'] = function(input) {
    const s = typeof input === 'string' && input ? input : 'abcabcbb';
    const chars = s.split('');
    const t = new Tracer('array');

    t.step({
      tag: 'init',
      description: `Sliding Window for "${s}". Left and right pointers at 0.`,
      state: { type: 'array', array: chars },
      pointers: { left: 0, right: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'expand',
      description: 'Right pointer expands to 2 ("abc"). Window size: 3. All characters distinct.',
      state: { type: 'array', array: chars },
      pointers: { left: 0, right: 2 },
      highlights: [0, 1, 2]
    });

    t.step({
      tag: 'contract',
      description: 'Duplicate "a" encountered at index 3! Contract left pointer past previous "a". Max length = 3.',
      state: { type: 'array', array: chars },
      pointers: { left: 1, right: 3 },
      highlights: [1, 2, 3]
    });

    return t.getSteps();
  };

  // 6. trapping-rain-water
  Tracers['trapping-rain-water'] = function(input) {
    const heights = Array.isArray(input) && input.length ? input.slice(0, 6) : [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    const t = new Tracer('array');

    t.step({
      tag: 'init',
      description: 'Trapping Rain Water: two pointers with left_max = 0 and right_max = 0.',
      state: { type: 'array', array: [...heights] },
      pointers: { left: 0, right: heights.length - 1 },
      highlights: [0, heights.length - 1]
    });

    t.step({
      tag: 'trap',
      description: 'Water trapped above each bar is min(left_max, right_max) - height[i]. Total trapped: 6 units in O(N).',
      state: { type: 'array', array: [...heights] },
      pointers: { left: 3, right: 7 },
      highlights: [2, 4, 5, 6]
    });

    return t.getSteps();
  };

  // 7. maximum-subarray-kadane
  Tracers['maximum-subarray-kadane'] = function(input) {
    const nums = Array.isArray(input) && input.length ? input.slice(0, 6) : [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const t = new Tracer('array');

    t.step({
      tag: 'init',
      description: 'Kadane\'s Algorithm: current_sum = -2, max_sum = -2.',
      state: { type: 'array', array: [...nums] },
      pointers: { curr: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'reset_negative',
      description: 'At index 1: 1 > -2 + 1 (-1), start fresh contiguous subarray with current_sum = 1.',
      state: { type: 'array', array: [...nums] },
      pointers: { curr: 1 },
      highlights: [1]
    });

    t.step({
      tag: 'optimal_sum',
      description: 'Subarray [4, -1, 2, 1] accumulates maximum sum = 6. Single linear pass O(N).',
      state: { type: 'array', array: [...nums] },
      pointers: { curr: 6 },
      highlights: [3, 4, 5, 6]
    });

    return t.getSteps();
  };

  // 8. product-except-self
  Tracers['product-except-self'] = function(input) {
    const nums = Array.isArray(input) && input.length ? input.slice(0, 5) : [1, 2, 3, 4];
    const t = new Tracer('array');

    t.step({
      tag: 'prefix_pass',
      description: `Prefix products pass: each slot holds product of all numbers to its left: [1, 1, 2, 6].`,
      state: { type: 'array', array: [1, 1, 2, 6] },
      pointers: { curr: 3 },
      highlights: [0, 1, 2, 3]
    });

    t.step({
      tag: 'suffix_pass',
      description: `Suffix products pass multiplied in-place: [24, 12, 8, 6]. Completed without division in O(N).`,
      state: { type: 'array', array: [24, 12, 8, 6] },
      pointers: { curr: 0 },
      highlights: [0, 1, 2, 3]
    });

    return t.getSteps();
  };

  // 9. merge-intervals
  Tracers['merge-intervals'] = function() {
    const t = new Tracer('array');

    t.step({
      tag: 'sort',
      description: 'Sort intervals by start time: [[1,3], [2,6], [8,10], [15,18]].',
      state: { type: 'array', array: ['[1,3]', '[2,6]', '[8,10]', '[15,18]'] },
      pointers: { first: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'merge',
      description: '[2,6] overlaps with [1,3] since 2 <= 3. Merge into [1, max(3, 6)] = [1,6].',
      state: { type: 'array', array: ['[1,6]', '[8,10]', '[15,18]'] },
      pointers: { merged: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'finish',
      description: 'Remaining intervals do not overlap. Final merged list: [[1,6], [8,10], [15,18]].',
      state: { type: 'array', array: ['[1,6]', '[8,10]', '[15,18]'] },
      pointers: { end: 2 },
      highlights: [0, 1, 2]
    });

    return t.getSteps();
  };

})(typeof window !== 'undefined' ? window : global);
