/**
 * SynapseCS - Linked List Algorithmic Tracers
 * Reference implementations with deep-cloned execution steps.
 */

(function(window) {
  'use strict';

  const Tracers = window.Tracers = window.Tracers || {};
  const Tracer = window.Tracer;

  function hexAddr(idx) {
    return '0x10' + (idx * 32).toString(16).padStart(2, '0').toUpperCase();
  }

  function makeNodes(vals) {
    return vals.map((v, i) => ({
      val: v,
      addr: hexAddr(i),
      next: i < vals.length - 1 ? i + 1 : null
    }));
  }

  // 1. ll-create
  Tracers['ll-create'] = function(input) {
    const vals = Array.isArray(input) && input.length ? input.slice(0, 5) : [10, 20, 30];
    const t = new Tracer('linked-list');

    let nodes = [];
    t.step({
      tag: 'init',
      description: 'Initialize empty linked list with head pointer set to NULL.',
      state: { type: 'linked-list', nodes: [] },
      pointers: {}
    });

    vals.forEach((v, i) => {
      nodes.push({ val: v, addr: hexAddr(i), next: null });
      t.step({
        tag: 'alloc',
        description: `Allocate node ${i + 1} with value ${v} at heap address ${hexAddr(i)}.`,
        state: { type: 'linked-list', nodes: makeNodes(vals.slice(0, i + 1)) },
        pointers: { [i === 0 ? 'head' : 'curr']: i },
        highlights: [i]
      });
    });

    t.step({
      tag: 'wire',
      description: 'Wire all next pointers to link consecutive nodes in memory. List creation complete.',
      state: { type: 'linked-list', nodes: makeNodes(vals) },
      pointers: { head: 0 },
      highlights: vals.map((_, i) => i)
    });

    return t.getSteps();
  };

  // 2. ll-insert-head
  Tracers['ll-insert-head'] = function(input) {
    const list = (input && input.list) || [20, 30];
    const val = (input && input.val !== undefined) ? input.val : 5;
    const t = new Tracer('linked-list');

    const initialNodes = makeNodes(list);
    t.step({
      tag: 'init',
      description: `Initial list with head pointing to node holding ${list[0]}.`,
      state: { type: 'linked-list', nodes: initialNodes },
      pointers: { head: 0 },
      highlights: [0]
    });

    const combined = [val, ...list];
    t.step({
      tag: 'alloc',
      description: `Allocate new node with value ${val} at heap address ${hexAddr(0)}.`,
      state: { type: 'linked-list', nodes: makeNodes(combined) },
      pointers: { newNode: 0, head: 1 },
      highlights: [0]
    });

    t.step({
      tag: 'link',
      description: `Point newNode.next to former head (${hexAddr(1)}).`,
      state: { type: 'linked-list', nodes: makeNodes(combined) },
      pointers: { newNode: 0, head: 1 },
      highlights: [0, 1]
    });

    t.step({
      tag: 'reanchor',
      description: `Re-anchor head to newNode. Insertion at head completed in O(1) time.`,
      state: { type: 'linked-list', nodes: makeNodes(combined) },
      pointers: { head: 0 },
      highlights: [0]
    });

    return t.getSteps();
  };

  // 3. ll-insert-tail
  Tracers['ll-insert-tail'] = function(input) {
    const list = (input && input.list) || [10, 20];
    const val = (input && input.val !== undefined) ? input.val : 30;
    const t = new Tracer('linked-list');

    t.step({
      tag: 'init',
      description: `Traverse to the tail node of the list starting from head.`,
      state: { type: 'linked-list', nodes: makeNodes(list) },
      pointers: { curr: list.length - 1 },
      highlights: [list.length - 1]
    });

    const combined = [...list, val];
    t.step({
      tag: 'alloc',
      description: `Allocate new node with value ${val} at heap address ${hexAddr(combined.length - 1)}.`,
      state: { type: 'linked-list', nodes: makeNodes(combined) },
      pointers: { curr: list.length - 1, newNode: combined.length - 1 },
      highlights: [combined.length - 1]
    });

    t.step({
      tag: 'link',
      description: `Wire tail.next = newNode. Tail insertion completed in O(N) or O(1) with tail pointer.`,
      state: { type: 'linked-list', nodes: makeNodes(combined) },
      pointers: { head: 0, tail: combined.length - 1 },
      highlights: [list.length - 1, combined.length - 1]
    });

    return t.getSteps();
  };

  // 4. ll-insert-kth
  Tracers['ll-insert-kth'] = function(input) {
    const list = (input && input.list) || [10, 30];
    const k = (input && input.k !== undefined) ? input.k : 1;
    const val = (input && input.val !== undefined) ? input.val : 20;
    const t = new Tracer('linked-list');

    t.step({
      tag: 'traverse',
      description: `Traverse to index ${k - 1} to find the node immediately preceding index ${k}.`,
      state: { type: 'linked-list', nodes: makeNodes(list) },
      pointers: { curr: Math.max(0, k - 1) },
      highlights: [Math.max(0, k - 1)]
    });

    const combined = [...list.slice(0, k), val, ...list.slice(k)];
    t.step({
      tag: 'alloc',
      description: `Allocate new node holding ${val} and set its next pointer to curr.next.`,
      state: { type: 'linked-list', nodes: makeNodes(combined) },
      pointers: { curr: Math.max(0, k - 1), newNode: k },
      highlights: [k]
    });

    t.step({
      tag: 'link',
      description: `Re-link curr.next = newNode. Insertion at position ${k} completed.`,
      state: { type: 'linked-list', nodes: makeNodes(combined) },
      pointers: { curr: Math.max(0, k - 1), newNode: k },
      highlights: [Math.max(0, k - 1), k]
    });

    return t.getSteps();
  };

  // 5. ll-delete-head
  Tracers['ll-delete-head'] = function(input) {
    const list = (input && input.list) || [10, 20, 30];
    const t = new Tracer('linked-list');

    t.step({
      tag: 'save',
      description: `Identify head node (value ${list[0]}) and record reference to head.next.`,
      state: { type: 'linked-list', nodes: makeNodes(list) },
      pointers: { head: 0, nextHead: 1 },
      highlights: [0]
    });

    const remaining = list.slice(1);
    t.step({
      tag: 'advance',
      description: `Re-anchor head = head.next and reclaim old head memory. Head deletion complete.`,
      state: { type: 'linked-list', nodes: makeNodes(remaining) },
      pointers: { head: 0 },
      highlights: [0]
    });

    return t.getSteps();
  };

  // 6. ll-delete-tail
  Tracers['ll-delete-tail'] = function(input) {
    const list = (input && input.list) || [10, 20, 30];
    const t = new Tracer('linked-list');

    t.step({
      tag: 'traverse',
      description: `Traverse to second-to-last node (value ${list[list.length - 2]}).`,
      state: { type: 'linked-list', nodes: makeNodes(list) },
      pointers: { curr: list.length - 2, tail: list.length - 1 },
      highlights: [list.length - 2]
    });

    const remaining = list.slice(0, -1);
    t.step({
      tag: 'sever',
      description: `Set curr.next = NULL and deallocate old tail. Tail deletion complete.`,
      state: { type: 'linked-list', nodes: makeNodes(remaining) },
      pointers: { head: 0, tail: remaining.length - 1 },
      highlights: [remaining.length - 1]
    });

    return t.getSteps();
  };

  // 7. ll-delete-val
  Tracers['ll-delete-val'] = function(input) {
    const list = (input && input.list) || [10, 20, 30, 40];
    const target = (input && input.val !== undefined) ? input.val : 30;
    const t = new Tracer('linked-list');

    const targetIdx = list.indexOf(target);
    const prevIdx = Math.max(0, targetIdx - 1);

    t.step({
      tag: 'find',
      description: `Traverse list and locate node with value ${target} at index ${targetIdx}.`,
      state: { type: 'linked-list', nodes: makeNodes(list) },
      pointers: { prev: prevIdx, curr: targetIdx },
      highlights: [targetIdx]
    });

    const remaining = list.filter(x => x !== target);
    t.step({
      tag: 'bypass',
      description: `Bypass node: prev.next = curr.next. Target node is unlinked.`,
      state: { type: 'linked-list', nodes: makeNodes(remaining) },
      pointers: { prev: prevIdx },
      highlights: [prevIdx]
    });

    return t.getSteps();
  };

  // 8. ll-search
  Tracers['ll-search'] = function(input) {
    const list = (input && input.list) || [10, 20, 30, 40];
    const target = (input && input.val !== undefined) ? input.val : 30;
    const t = new Tracer('linked-list');

    for (let i = 0; i < list.length; i++) {
      const match = list[i] === target;
      t.step({
        tag: match ? 'found' : 'compare',
        description: `Examine node index ${i} (value ${list[i]}). ${match ? 'Target ' + target + ' FOUND!' : 'Not target, moving forward.'}`,
        state: { type: 'linked-list', nodes: makeNodes(list) },
        pointers: { curr: i },
        highlights: [i]
      });
      if (match) break;
    }

    return t.getSteps();
  };

  // 9. ll-traverse
  Tracers['ll-traverse'] = function(input) {
    const list = Array.isArray(input) && input.length ? input.slice(0, 5) : [10, 20, 30];
    const t = new Tracer('linked-list');

    list.forEach((v, i) => {
      t.step({
        tag: 'visit',
        description: `Visiting node ${i + 1}/${list.length} with value ${v} at address ${hexAddr(i)}.`,
        state: { type: 'linked-list', nodes: makeNodes(list) },
        pointers: { curr: i },
        highlights: [i]
      });
    });

    t.step({
      tag: 'end',
      description: `curr reaches NULL. Traversal complete in O(N) time.`,
      state: { type: 'linked-list', nodes: makeNodes(list) },
      pointers: {},
      highlights: []
    });

    return t.getSteps();
  };

  // 10. ll-update
  Tracers['ll-update'] = function(input) {
    const list = (input && input.list) || [10, 20, 30];
    const k = (input && input.k !== undefined) ? input.k : 1;
    const newVal = (input && input.val !== undefined) ? input.val : 99;
    const t = new Tracer('linked-list');

    t.step({
      tag: 'locate',
      description: `Traverse to node at index ${k} (current value ${list[k]}).`,
      state: { type: 'linked-list', nodes: makeNodes(list) },
      pointers: { curr: k },
      highlights: [k]
    });

    const updated = [...list];
    updated[k] = newVal;

    t.step({
      tag: 'assign',
      description: `Update curr.val = ${newVal}. In-place mutation completed in O(k) time.`,
      state: { type: 'linked-list', nodes: makeNodes(updated) },
      pointers: { curr: k },
      highlights: [k]
    });

    return t.getSteps();
  };

  // 11. ll-size
  Tracers['ll-size'] = function(input) {
    const list = Array.isArray(input) && input.length ? input.slice(0, 5) : [10, 20, 30];
    const t = new Tracer('linked-list');

    list.forEach((v, i) => {
      t.step({
        tag: 'count',
        description: `Count incremented to ${i + 1} at node holding ${v}.`,
        state: { type: 'linked-list', nodes: makeNodes(list) },
        pointers: { curr: i },
        highlights: Array.from({ length: i + 1 }, (_, idx) => idx)
      });
    });

    t.step({
      tag: 'return',
      description: `Reached list end. Total node count is ${list.length}.`,
      state: { type: 'linked-list', nodes: makeNodes(list) },
      pointers: { head: 0 },
      highlights: list.map((_, i) => i)
    });

    return t.getSteps();
  };

  // 12. ll-reverse
  Tracers['ll-reverse'] = function(input) {
    const vals = Array.isArray(input) && input.length ? input.slice(0, 5) : [1, 2, 3, 4, 5];
    const t = new Tracer('linked-list');

    t.step({
      tag: 'init',
      description: 'Initialize prev = NULL, curr = head. Ready to reverse links.',
      state: { type: 'linked-list', nodes: makeNodes(vals) },
      pointers: { curr: 0 },
      highlights: [0]
    });

    for (let i = 0; i < vals.length; i++) {
      t.step({
        tag: 'flip',
        description: `Flip node ${i}'s pointer backwards to prev (${i === 0 ? 'NULL' : hexAddr(i - 1)}).`,
        state: { type: 'linked-list', nodes: makeNodes(vals) },
        pointers: { prev: i > 0 ? i - 1 : 0, curr: i },
        highlights: [i]
      });

      t.step({
        tag: 'advance',
        description: `Advance prev to node ${i} and curr forward to next node.`,
        state: { type: 'linked-list', nodes: makeNodes(vals) },
        pointers: { prev: i, ...(i < vals.length - 1 ? { curr: i + 1 } : {}) },
        highlights: [i]
      });
    }

    const reversedVals = [...vals].reverse();
    t.step({
      tag: 'return',
      description: `Reversal complete. Return prev as new head of list: [${reversedVals.join(', ')}].`,
      state: { type: 'linked-list', nodes: makeNodes(reversedVals) },
      pointers: { head: 0 },
      highlights: [0]
    });

    return t.getSteps();
  };

  // 13. ll-middle
  Tracers['ll-middle'] = function(input) {
    const vals = Array.isArray(input) && input.length ? input.slice(0, 6) : [1, 2, 3, 4, 5];
    const t = new Tracer('linked-list');

    let slow = 0, fast = 0;
    t.step({
      tag: 'init',
      description: 'Initialize slow and fast pointers at head (index 0).',
      state: { type: 'linked-list', nodes: makeNodes(vals) },
      pointers: { slow: 0, fast: 0 },
      highlights: [0]
    });

    while (fast < vals.length - 1 && fast + 2 <= vals.length) {
      slow += 1;
      fast += 2;
      const validFast = Math.min(fast, vals.length - 1);
      t.step({
        tag: 'step',
        description: `Advance slow by 1 step (to index ${slow}) and fast by 2 steps (to index ${validFast}).`,
        state: { type: 'linked-list', nodes: makeNodes(vals) },
        pointers: { slow: slow, fast: validFast },
        highlights: [slow, validFast]
      });
    }

    t.step({
      tag: 'return',
      description: `Fast reached list boundary. Slow points to middle node (value ${vals[slow]}).`,
      state: { type: 'linked-list', nodes: makeNodes(vals) },
      pointers: { slow: slow },
      highlights: [slow]
    });

    return t.getSteps();
  };

  // 14. ll-cycle
  Tracers['ll-cycle'] = function(input) {
    const vals = Array.isArray(input) && input.length ? input.slice(0, 5) : [3, 2, 0, -4];
    const t = new Tracer('linked-list');

    t.step({
      tag: 'init',
      description: 'Floyd\'s Cycle Finding: initialize slow = head and fast = head.',
      state: { type: 'linked-list', nodes: makeNodes(vals), cycleToIndex: 1 },
      pointers: { slow: 0, fast: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'step1',
      description: 'Slow advances 1 node (to index 1), fast advances 2 nodes (to index 2).',
      state: { type: 'linked-list', nodes: makeNodes(vals), cycleToIndex: 1 },
      pointers: { slow: 1, fast: 2 },
      highlights: [1, 2]
    });

    t.step({
      tag: 'step2',
      description: 'Slow advances to index 2; fast loops around cycle to index 1.',
      state: { type: 'linked-list', nodes: makeNodes(vals), cycleToIndex: 1 },
      pointers: { slow: 2, fast: 1 },
      highlights: [1, 2]
    });

    t.step({
      tag: 'intersect',
      description: 'Slow meets fast at index 1! Cycle detected in O(N) time and O(1) space.',
      state: { type: 'linked-list', nodes: makeNodes(vals), cycleToIndex: 1 },
      pointers: { match: 1 },
      highlights: [1]
    });

    return t.getSteps();
  };

  // 15. ll-merge
  Tracers['ll-merge'] = function(input) {
    const l1 = (input && input.l1) || [1, 2, 4];
    const l2 = (input && input.l2) || [1, 3, 4];
    const t = new Tracer('linked-list');

    t.step({
      tag: 'init',
      description: 'Initialize dummy head node to build merged sorted list.',
      state: { type: 'linked-list', nodes: makeNodes([0]) },
      pointers: { dummy: 0 },
      highlights: [0]
    });

    const merged = [...l1, ...l2].sort((a, b) => a - b);
    t.step({
      tag: 'splice',
      description: `Compare head nodes and splice smaller node. Merging [${l1.join(',')}] and [${l2.join(',')}].`,
      state: { type: 'linked-list', nodes: makeNodes(merged.slice(0, 3)) },
      pointers: { curr: 2 },
      highlights: [0, 1, 2]
    });

    t.step({
      tag: 'finish',
      description: `All nodes spliced in sorted order: [${merged.join(', ')}]. Return dummy.next.`,
      state: { type: 'linked-list', nodes: makeNodes(merged) },
      pointers: { head: 0 },
      highlights: merged.map((_, i) => i)
    });

    return t.getSteps();
  };

  // 16. ll-remove-nth-end
  Tracers['ll-remove-nth-end'] = function(input) {
    const list = (input && input.list) || [1, 2, 3, 4, 5];
    const n = (input && input.n !== undefined) ? input.n : 2;
    const t = new Tracer('linked-list');

    t.step({
      tag: 'offset',
      description: `Advance fast pointer ${n} steps ahead of slow pointer to maintain gap of ${n}.`,
      state: { type: 'linked-list', nodes: makeNodes(list) },
      pointers: { slow: 0, fast: Math.min(n, list.length - 1) },
      highlights: [0, Math.min(n, list.length - 1)]
    });

    const targetIdx = list.length - n;
    t.step({
      tag: 'slide',
      description: `Slide slow and fast together until fast reaches the end. Slow.next is target index ${targetIdx}.`,
      state: { type: 'linked-list', nodes: makeNodes(list) },
      pointers: { slow: Math.max(0, targetIdx - 1), fast: list.length - 1 },
      highlights: [targetIdx]
    });

    const remaining = list.filter((_, idx) => idx !== targetIdx);
    t.step({
      tag: 'unlink',
      description: `Bypass target node: slow.next = slow.next.next. Removed ${n}-th node from end.`,
      state: { type: 'linked-list', nodes: makeNodes(remaining) },
      pointers: { head: 0 },
      highlights: [Math.max(0, targetIdx - 1)]
    });

    return t.getSteps();
  };

  // 17. ll-palindrome
  Tracers['ll-palindrome'] = function(input) {
    const list = Array.isArray(input) && input.length ? input.slice(0, 5) : [1, 2, 2, 1];
    const t = new Tracer('linked-list');

    t.step({
      tag: 'find_mid',
      description: 'Use fast and slow pointers to locate list midpoint.',
      state: { type: 'linked-list', nodes: makeNodes(list) },
      pointers: { slow: Math.floor(list.length / 2), fast: list.length - 1 },
      highlights: [Math.floor(list.length / 2)]
    });

    t.step({
      tag: 'reverse_half',
      description: 'Reverse second half of the list in-place.',
      state: { type: 'linked-list', nodes: makeNodes(list) },
      pointers: { p1: 0, p2: list.length - 1 },
      highlights: [0, list.length - 1]
    });

    t.step({
      tag: 'compare',
      description: 'Compare nodes from first half and reversed second half. All match! Palindrome verified.',
      state: { type: 'linked-list', nodes: makeNodes(list) },
      pointers: { match: 0 },
      highlights: list.map((_, i) => i)
    });

    return t.getSteps();
  };

  // 18. ll-lru-cache
  Tracers['ll-lru-cache'] = function() {
    const t = new Tracer('doubly-linked-list');

    t.step({
      tag: 'init',
      description: 'Initialize LRU Cache with capacity 2 and sentinel head and tail nodes.',
      state: {
        type: 'doubly-linked-list',
        nodes: [
          { val: 'HEAD', addr: '0x1000', prev: null, next: 1 },
          { val: 'TAIL', addr: '0x1020', prev: 0, next: null }
        ]
      },
      pointers: { head: 0, tail: 1 },
      highlights: [0, 1]
    });

    t.step({
      tag: 'put1',
      description: 'put(1, 1): Insert key 1 right after HEAD as most recently used (MRU).',
      state: {
        type: 'doubly-linked-list',
        nodes: [
          { val: 'HEAD', addr: '0x1000' },
          { val: 'K:1,V:1', addr: '0x1040' },
          { val: 'TAIL', addr: '0x1020' }
        ]
      },
      pointers: { mru: 1 },
      highlights: [1]
    });

    t.step({
      tag: 'put2',
      description: 'put(2, 2): Insert key 2 at MRU position. Capacity reached (2/2).',
      state: {
        type: 'doubly-linked-list',
        nodes: [
          { val: 'HEAD', addr: '0x1000' },
          { val: 'K:2,V:2', addr: '0x1060' },
          { val: 'K:1,V:1', addr: '0x1040' },
          { val: 'TAIL', addr: '0x1020' }
        ]
      },
      pointers: { mru: 1, lru: 2 },
      highlights: [1]
    });

    t.step({
      tag: 'evict',
      description: 'put(3, 3): Cache full. Evict LRU node (key 1 before TAIL) and insert key 3 at MRU in O(1).',
      state: {
        type: 'doubly-linked-list',
        nodes: [
          { val: 'HEAD', addr: '0x1000' },
          { val: 'K:3,V:3', addr: '0x1080' },
          { val: 'K:2,V:2', addr: '0x1060' },
          { val: 'TAIL', addr: '0x1020' }
        ]
      },
      pointers: { mru: 1, lru: 2 },
      highlights: [1]
    });

    return t.getSteps();
  };

})(typeof window !== 'undefined' ? window : global);
