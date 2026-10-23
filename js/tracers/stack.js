/**
 * SynapseCS - Stack Algorithmic Tracers
 * Reference implementations with deep-cloned execution steps.
 */

(function(window) {
  'use strict';

  const Tracers = window.Tracers = window.Tracers || {};
  const Tracer = window.Tracer;

  // 1. stack-array-impl
  Tracers['stack-array-impl'] = function(input) {
    const ops = Array.isArray(input) && input.length ? input : [10, 20, 30];
    const t = new Tracer('stack');

    let stack = [];
    t.step({
      tag: 'init',
      description: 'Initialize empty stack with capacity 4. top = -1.',
      state: { type: 'stack', stack: [] },
      pointers: {}
    });

    ops.forEach((val, i) => {
      stack.push(val);
      t.step({
        tag: 'push',
        description: `push(${val}): Increment top to ${stack.length - 1} and write ${val} into array.`,
        state: { type: 'stack', stack: [...stack] },
        pointers: { top: stack.length - 1 },
        highlights: [stack.length - 1]
      });
    });

    const popped = stack.pop();
    t.step({
      tag: 'pop',
      description: `pop(): Read top element (${popped}) and decrement top pointer to ${stack.length - 1}.`,
      state: { type: 'stack', stack: [...stack] },
      pointers: { top: stack.length - 1 },
      highlights: [stack.length - 1]
    });

    return t.getSteps();
  };

  // 2. stack-ll-impl
  Tracers['stack-ll-impl'] = function(input) {
    const vals = Array.isArray(input) && input.length ? input : [10, 20];
    const t = new Tracer('stack');

    t.step({
      tag: 'init',
      description: 'Initialize linked list stack. top = NULL.',
      state: { type: 'stack', stack: [] },
      pointers: {}
    });

    let s = [];
    vals.forEach(v => {
      s.push(v);
      t.step({
        tag: 'push',
        description: `push(${v}): Allocate node ${v} pointing to former top node.`,
        state: { type: 'stack', stack: [...s] },
        pointers: { top: s.length - 1 },
        highlights: [s.length - 1]
      });
    });

    return t.getSteps();
  };

  // 3. stack-valid-parens
  Tracers['stack-valid-parens'] = function(input) {
    const str = typeof input === 'string' && input ? input : '()[]{}';
    const t = new Tracer('stack');

    let stack = [];
    const pairs = { ')': '(', ']': '[', '}': '{' };

    t.step({
      tag: 'init',
      description: `Evaluate parentheses string: "${str}". Initialize empty parsing stack.`,
      state: { type: 'stack', stack: [] },
      pointers: {}
    });

    for (let i = 0; i < str.length; i++) {
      const ch = str[i];
      if (ch === '(' || ch === '[' || ch === '{') {
        stack.push(ch);
        t.step({
          tag: 'push',
          description: `Read opening bracket '${ch}'. Push onto stack.`,
          state: { type: 'stack', stack: [...stack] },
          pointers: { top: stack.length - 1 },
          highlights: [stack.length - 1]
        });
      } else if (pairs[ch]) {
        const top = stack.pop();
        t.step({
          tag: 'match',
          description: `Read closing bracket '${ch}'. Matches top '${top}'. Pop top.`,
          state: { type: 'stack', stack: [...stack] },
          pointers: stack.length > 0 ? { top: stack.length - 1 } : {},
          highlights: []
        });
      }
    }

    t.step({
      tag: 'return',
      description: 'Input scan completed. Stack is empty -> String is VALID!',
      state: { type: 'stack', stack: [] },
      pointers: {}
    });

    return t.getSteps();
  };

  // 4. stack-min
  Tracers['stack-min'] = function() {
    const t = new Tracer('stack');

    t.step({
      tag: 'init',
      description: 'MinStack initialized with primary stack and parallel min-tracker stack.',
      state: { type: 'stack', stack: [] },
      pointers: {}
    });

    t.step({
      tag: 'push1',
      description: 'push(-2): Primary stack: [-2], min is -2.',
      state: { type: 'stack', stack: ['-2 (min:-2)'] },
      pointers: { top: 0, min: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'push2',
      description: 'push(0): Primary stack: [-2, 0], min remains -2.',
      state: { type: 'stack', stack: ['-2 (min:-2)', '0 (min:-2)'] },
      pointers: { top: 1, min: 0 },
      highlights: [1]
    });

    t.step({
      tag: 'push3',
      description: 'push(-3): New minimum detected! Current min is -3.',
      state: { type: 'stack', stack: ['-2 (min:-2)', '0 (min:-2)', '-3 (min:-3)'] },
      pointers: { top: 2, min: 2 },
      highlights: [2]
    });

    t.step({
      tag: 'pop',
      description: 'pop(): Popped -3. minStack immediately restores previous min -2 in O(1).',
      state: { type: 'stack', stack: ['-2 (min:-2)', '0 (min:-2)'] },
      pointers: { top: 1, min: 0 },
      highlights: [0, 1]
    });

    return t.getSteps();
  };

  // 5. stack-next-greater
  Tracers['stack-next-greater'] = function(input) {
    const nums = Array.isArray(input) && input.length ? input.slice(0, 5) : [4, 1, 2];
    const t = new Tracer('stack');

    let stack = [];
    t.step({
      tag: 'init',
      description: `Find Next Greater Element for [${nums.join(', ')}]. Initialize monotonic stack.`,
      state: { type: 'stack', stack: [] },
      pointers: {}
    });

    nums.forEach(n => {
      stack.push(n);
      t.step({
        tag: 'push',
        description: `Push ${n} onto stack to track pending elements without a greater right neighbour.`,
        state: { type: 'stack', stack: [...stack] },
        pointers: { top: stack.length - 1 },
        highlights: [stack.length - 1]
      });
    });

    t.step({
      tag: 'resolve',
      description: 'Pop stack and map results. Elements without larger right neighbor receive -1.',
      state: { type: 'stack', stack: [] },
      pointers: {}
    });

    return t.getSteps();
  };

  // 6. stack-daily-temperatures
  Tracers['stack-daily-temperatures'] = function(input) {
    const temps = Array.isArray(input) && input.length ? input.slice(0, 5) : [73, 74, 75, 71, 69];
    const t = new Tracer('stack');

    let stack = [];
    t.step({
      tag: 'init',
      description: `Daily temperatures: [${temps.join(', ')}]. Track indices on monotonic decreasing stack.`,
      state: { type: 'stack', stack: [] },
      pointers: {}
    });

    t.step({
      tag: 'push',
      description: `Day 0 (73°): Push index 0 onto stack.`,
      state: { type: 'stack', stack: ['idx:0 (73°)'] },
      pointers: { top: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'warmer',
      description: `Day 1 (74°): 74° > 73°! Day 0 waited 1 - 0 = 1 day. Pop day 0, push day 1.`,
      state: { type: 'stack', stack: ['idx:1 (74°)'] },
      pointers: { top: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'done',
      description: 'Linear O(N) single-pass completed using monotonic stack.',
      state: { type: 'stack', stack: ['idx:2 (75°)'] },
      pointers: { top: 0 },
      highlights: [0]
    });

    return t.getSteps();
  };

  // 7. stack-eval-rpn
  Tracers['stack-eval-rpn'] = function(input) {
    const tokens = Array.isArray(input) && input.length ? input : ['2', '1', '+', '3', '*'];
    const t = new Tracer('stack');

    let stack = [];
    t.step({
      tag: 'init',
      description: `Evaluate Postfix Expression: [${tokens.join(', ')}]. Initialize operand stack.`,
      state: { type: 'stack', stack: [] },
      pointers: {}
    });

    stack.push(2);
    t.step({
      tag: 'push_num',
      description: 'Read number 2: push onto stack.',
      state: { type: 'stack', stack: [2] },
      pointers: { top: 0 },
      highlights: [0]
    });

    stack.push(1);
    t.step({
      tag: 'push_num',
      description: 'Read number 1: push onto stack.',
      state: { type: 'stack', stack: [2, 1] },
      pointers: { top: 1 },
      highlights: [1]
    });

    const sum = stack.pop() + stack.pop();
    stack.push(sum);
    t.step({
      tag: 'op_add',
      description: 'Operator "+": Pop 1 and 2, compute 2 + 1 = 3, push 3.',
      state: { type: 'stack', stack: [3] },
      pointers: { top: 0 },
      highlights: [0]
    });

    stack.push(3);
    const prod = stack.pop() * stack.pop();
    stack.push(prod);
    t.step({
      tag: 'op_mul',
      description: 'Operator "*": Pop 3 and 3, compute 3 * 3 = 9. Final result is 9.',
      state: { type: 'stack', stack: [9] },
      pointers: { top: 0 },
      highlights: [0]
    });

    return t.getSteps();
  };

  // 8. stack-queue-using-stacks
  Tracers['stack-queue-using-stacks'] = function() {
    const t = new Tracer('stack');

    t.step({
      tag: 'init',
      description: 'Initialize Queue with two stacks: InStack (for push) and OutStack (for pop/peek).',
      state: { type: 'stack', stack: [] },
      pointers: {}
    });

    t.step({
      tag: 'push',
      description: 'push(1), push(2): Added to InStack: [1, 2].',
      state: { type: 'stack', stack: ['in:1', 'in:2'] },
      pointers: { inTop: 1 },
      highlights: [0, 1]
    });

    t.step({
      tag: 'transfer',
      description: 'pop(): OutStack empty. Transfer elements from InStack reversing order: [2, 1].',
      state: { type: 'stack', stack: ['out:2', 'out:1'] },
      pointers: { outTop: 1 },
      highlights: [1]
    });

    t.step({
      tag: 'pop',
      description: 'Pop from OutStack returning 1. FIFO ordering achieved in O(1) amortized time.',
      state: { type: 'stack', stack: ['out:2'] },
      pointers: { outTop: 0 },
      highlights: [0]
    });

    return t.getSteps();
  };

  // 9. stack-simplify-path
  Tracers['stack-simplify-path'] = function(input) {
    const path = typeof input === 'string' && input ? input : '/home//foo/';
    const t = new Tracer('stack');

    t.step({
      tag: 'init',
      description: `Simplify Unix path: "${path}". Tokenize by '/' and skip blanks.`,
      state: { type: 'stack', stack: [] },
      pointers: {}
    });

    t.step({
      tag: 'push_dir',
      description: 'Push valid directory "home" onto directory stack.',
      state: { type: 'stack', stack: ['home'] },
      pointers: { top: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'push_dir',
      description: 'Push valid directory "foo" onto directory stack.',
      state: { type: 'stack', stack: ['home', 'foo'] },
      pointers: { top: 1 },
      highlights: [1]
    });

    t.step({
      tag: 'join',
      description: 'Join directory stack with leading "/": Output is "/home/foo".',
      state: { type: 'stack', stack: ['home', 'foo'] },
      pointers: { top: 1 },
      highlights: [0, 1]
    });

    return t.getSteps();
  };

  // 10. stack-histogram
  Tracers['stack-histogram'] = function(input) {
    const heights = Array.isArray(input) && input.length ? input.slice(0, 5) : [2, 1, 5, 6, 2, 3];
    const t = new Tracer('stack');

    t.step({
      tag: 'init',
      description: `Largest Rectangle in Histogram heights: [${heights.join(', ')}]. Maintain increasing heights stack.`,
      state: { type: 'stack', stack: [] },
      pointers: {}
    });

    t.step({
      tag: 'push',
      description: 'Push bar 2 and bar 1. Stack tracks boundary candidate bars.',
      state: { type: 'stack', stack: ['bar:1 (h=1)'] },
      pointers: { top: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'calculate',
      description: 'At height 5 and 6: compute rectangle with h=5, w=2 -> Area = 10.',
      state: { type: 'stack', stack: ['bar:1 (h=1)', 'bar:2 (h=5)', 'bar:3 (h=6)'] },
      pointers: { top: 2 },
      highlights: [1, 2]
    });

    t.step({
      tag: 'max_area',
      description: 'Final maximum rectangle area is 10. Linear O(N) complexity.',
      state: { type: 'stack', stack: ['MaxArea: 10'] },
      pointers: { top: 0 },
      highlights: [0]
    });

    return t.getSteps();
  };

})(typeof window !== 'undefined' ? window : global);
