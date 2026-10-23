/**
 * SynapseCS - Queue & Deque Algorithmic Tracers
 * Reference implementations with deep-cloned execution steps.
 */

(function(window) {
  'use strict';

  const Tracers = window.Tracers = window.Tracers || {};
  const Tracer = window.Tracer;

  // 1. queue-array-impl
  Tracers['queue-array-impl'] = function(input) {
    const vals = Array.isArray(input) && input.length ? input : [10, 20, 30];
    const t = new Tracer('queue');

    let q = [];
    t.step({
      tag: 'init',
      description: 'Initialize empty Queue with array buffer. front = 0, rear = -1.',
      state: { type: 'queue', queue: [] },
      pointers: {}
    });

    vals.forEach(v => {
      q.push(v);
      t.step({
        tag: 'enqueue',
        description: `enqueue(${v}): Place ${v} at rear position (${q.length - 1}).`,
        state: { type: 'queue', queue: [...q] },
        pointers: { front: 0, rear: q.length - 1 },
        highlights: [q.length - 1]
      });
    });

    const dequeued = q.shift();
    t.step({
      tag: 'dequeue',
      description: `dequeue(): Read front item (${dequeued}) and advance front pointer. Remaining: [${q.join(', ')}].`,
      state: { type: 'queue', queue: [...q] },
      pointers: q.length > 0 ? { front: 0, rear: q.length - 1 } : {},
      highlights: [0]
    });

    return t.getSteps();
  };

  // 2. queue-linkedlist-impl
  Tracers['queue-linkedlist-impl'] = function(input) {
    const vals = Array.isArray(input) && input.length ? input : [10, 20];
    const t = new Tracer('queue');

    t.step({
      tag: 'init',
      description: 'Initialize linked list queue. head = NULL, tail = NULL.',
      state: { type: 'queue', queue: [] },
      pointers: {}
    });

    let q = [];
    vals.forEach((v, i) => {
      q.push(v);
      t.step({
        tag: 'enqueue',
        description: `enqueue(${v}): Allocate node at tail. Both head and tail updated.`,
        state: { type: 'queue', queue: [...q] },
        pointers: { front: 0, rear: q.length - 1 },
        highlights: [q.length - 1]
      });
    });

    q.shift();
    t.step({
      tag: 'dequeue',
      description: 'dequeue(): Advance head to head.next in O(1) time.',
      state: { type: 'queue', queue: [...q] },
      pointers: { front: 0, rear: 0 },
      highlights: [0]
    });

    return t.getSteps();
  };

  // 3. queue-circular-array
  Tracers['queue-circular-array'] = function() {
    const t = new Tracer('queue');

    t.step({
      tag: 'init',
      description: 'Circular Queue initialized with fixed capacity 3. front = 0, rear = 0.',
      state: { type: 'queue', queue: [null, null, null] },
      pointers: { front: 0, rear: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'enq1',
      description: 'enqueue(10): rear = (0 + 1) % 3 = 1.',
      state: { type: 'queue', queue: [10, null, null] },
      pointers: { front: 0, rear: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'enq2',
      description: 'enqueue(20): rear = (1 + 1) % 3 = 2.',
      state: { type: 'queue', queue: [10, 20, null] },
      pointers: { front: 0, rear: 1 },
      highlights: [1]
    });

    t.step({
      tag: 'deq',
      description: 'dequeue(): front = (0 + 1) % 3 = 1. Slot 0 is freed for circular wrap.',
      state: { type: 'queue', queue: [null, 20, null] },
      pointers: { front: 1, rear: 1 },
      highlights: [1]
    });

    t.step({
      tag: 'wrap',
      description: 'enqueue(30): Wraps circularly without reallocation. O(1) space reuse.',
      state: { type: 'queue', queue: [null, 20, 30] },
      pointers: { front: 1, rear: 2 },
      highlights: [2]
    });

    return t.getSteps();
  };

  // 4. queue-circular-deque
  Tracers['queue-circular-deque'] = function() {
    const t = new Tracer('queue');

    t.step({
      tag: 'init',
      description: 'Circular Deque initialized. Allows push/pop at both front and rear.',
      state: { type: 'queue', queue: [null, null, null, null] },
      pointers: { front: 0, rear: 0 }
    });

    t.step({
      tag: 'insertLast',
      description: 'insertLast(1): Placed at rear.',
      state: { type: 'queue', queue: [1, null, null, null] },
      pointers: { front: 0, rear: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'insertFront',
      description: 'insertFront(2): Wrapped front backwards: (0 - 1 + 4) % 4 = 3.',
      state: { type: 'queue', queue: [1, null, null, 2] },
      pointers: { front: 3, rear: 0 },
      highlights: [3]
    });

    return t.getSteps();
  };

  // 5. stack-using-queues
  Tracers['stack-using-queues'] = function() {
    const t = new Tracer('queue');

    t.step({
      tag: 'init',
      description: 'Implement Stack LIFO using single Queue FIFO with circular rotation.',
      state: { type: 'queue', queue: [] },
      pointers: {}
    });

    t.step({
      tag: 'push1',
      description: 'push(1): Enqueue 1 into queue. [1].',
      state: { type: 'queue', queue: [1] },
      pointers: { top: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'push2',
      description: 'push(2): Enqueue 2 and rotate previous elements so 2 is at the front: [2, 1].',
      state: { type: 'queue', queue: [2, 1] },
      pointers: { top: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'pop',
      description: 'pop(): Front element 2 dequeued in O(1). Stack behavior achieved.',
      state: { type: 'queue', queue: [1] },
      pointers: { top: 0 },
      highlights: [0]
    });

    return t.getSteps();
  };

  // 6. sliding-window-max
  Tracers['sliding-window-max'] = function(input) {
    const nums = Array.isArray(input) && input.length ? input.slice(0, 6) : [1, 3, -1, -3, 5, 3];
    const k = 3;
    const t = new Tracer('queue');

    t.step({
      tag: 'init',
      description: `Sliding Window Maximum for [${nums.join(', ')}], k = ${k}. Monotonic decreasing deque.`,
      state: { type: 'queue', queue: [] },
      pointers: {}
    });

    t.step({
      tag: 'step1',
      description: 'Process first window [1, 3, -1]. Deque retains indices [1, 2] (values 3, -1). Max is 3.',
      state: { type: 'queue', queue: ['3 (idx:1)', '-1 (idx:2)'] },
      pointers: { max: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'step2',
      description: 'Window slides to [3, -1, -3]. Max is 3.',
      state: { type: 'queue', queue: ['3 (idx:1)', '-1 (idx:2)', '-3 (idx:3)'] },
      pointers: { max: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'step3',
      description: 'Window slides to [-1, -3, 5]. 5 dominates previous elements. Max is 5.',
      state: { type: 'queue', queue: ['5 (idx:4)'] },
      pointers: { max: 0 },
      highlights: [0]
    });

    return t.getSteps();
  };

  // 7. first-unique-char
  Tracers['first-unique-char'] = function(input) {
    const s = typeof input === 'string' && input ? input : 'leetcode';
    const t = new Tracer('queue');

    t.step({
      tag: 'init',
      description: `Find first unique char in "${s}". Track candidates in FIFO queue with frequency table.`,
      state: { type: 'queue', queue: [] },
      pointers: {}
    });

    t.step({
      tag: 'result',
      description: `Character 'l' at index 0 has frequency 1. Queue front is 'l'. Return index 0.`,
      state: { type: 'queue', queue: ['l (idx:0)', 'e (idx:1)', 't (idx:3)'] },
      pointers: { firstUnique: 0 },
      highlights: [0]
    });

    return t.getSteps();
  };

  // 8. rotting-oranges
  Tracers['rotting-oranges'] = function() {
    const t = new Tracer('queue');

    t.step({
      tag: 'init',
      description: 'Multi-source BFS: Enqueue all initially rotten oranges [[0, 0]]. Minute = 0.',
      state: { type: 'queue', queue: ['Rotten(0,0)'] },
      pointers: { front: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'min1',
      description: 'Minute 1: Rot spreads to adjacent fresh oranges at (0,1) and (1,0). Enqueued.',
      state: { type: 'queue', queue: ['Rotten(0,1)', 'Rotten(1,0)'] },
      pointers: { front: 0, rear: 1 },
      highlights: [0, 1]
    });

    t.step({
      tag: 'min2',
      description: 'Minute 2: Rot spreads to (1,1). All oranges rotten in 4 minutes total.',
      state: { type: 'queue', queue: ['Rotten(1,1)'] },
      pointers: { front: 0 },
      highlights: [0]
    });

    return t.getSteps();
  };

  // 9. recent-counter (FIX FOR AUDIT ISSUE: pointer indices must be within [0..queue.length-1])
  Tracers['recent-counter'] = function(input) {
    const pings = Array.isArray(input) && input.length ? input : [1, 100, 3001, 3002];
    const t = new Tracer('queue');

    let q = [];

    t.step({
      tag: 'init',
      description: 'RecentCounter initialized. Maintains sliding 3000ms timestamp window [t-3000, t].',
      state: { type: 'queue', queue: [] },
      pointers: {}
    });

    pings.forEach((timestamp, idx) => {
      q.push(timestamp);
      // Evict timestamps older than timestamp - 3000
      while (q.length > 0 && q[0] < timestamp - 3000) {
        q.shift();
      }

      t.step({
        tag: 'ping',
        description: `ping(${timestamp}): Window is [${Math.max(0, timestamp - 3000)}, ${timestamp}]. Active calls: ${q.length}.`,
        state: { type: 'queue', queue: [...q] },
        pointers: {
          front: 0,
          current: q.length - 1
        },
        highlights: [q.length - 1]
      });
    });

    return t.getSteps();
  };

})(typeof window !== 'undefined' ? window : global);
