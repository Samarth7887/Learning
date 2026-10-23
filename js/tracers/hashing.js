/**
 * SynapseCS - Hashing & Hash Tables Algorithmic Tracers
 * Reference implementations with deep-cloned execution steps.
 */

(function(window) {
  'use strict';

  const Tracers = window.Tracers = window.Tracers || {};
  const Tracer = window.Tracer;

  // 1. hash-map-chaining
  Tracers['hash-map-chaining'] = function() {
    const t = new Tracer('hash-table');

    t.step({
      tag: 'init',
      description: 'Initialize Hash Map with 4 buckets. All buckets empty.',
      state: { type: 'hash-table', buckets: [[], [], [], []] },
      pointers: {}
    });

    t.step({
      tag: 'put1',
      description: 'put("cat", 1): hash("cat") % 4 = 1. Insert into bucket 1.',
      state: { type: 'hash-table', buckets: [[], [{ key: 'cat', val: 1 }], [], []] },
      pointers: { targetBucket: 1 },
      highlights: [1]
    });

    t.step({
      tag: 'put2',
      description: 'put("dog", 2): hash("dog") % 4 = 1. Collision! Append to bucket 1 chain.',
      state: { type: 'hash-table', buckets: [[], [{ key: 'cat', val: 1 }, { key: 'dog', val: 2 }], [], []] },
      pointers: { targetBucket: 1 },
      highlights: [1]
    });

    t.step({
      tag: 'get',
      description: 'get("dog"): Traverse bucket 1 chain, find "dog", return value 2 in O(1) average time.',
      state: { type: 'hash-table', buckets: [[], [{ key: 'cat', val: 1 }, { key: 'dog', val: 2 }], [], []] },
      pointers: { targetBucket: 1 },
      highlights: [1]
    });

    return t.getSteps();
  };

  // 2. hash-set-impl
  Tracers['hash-set-impl'] = function() {
    const t = new Tracer('hash-table');

    t.step({
      tag: 'add',
      description: 'add(1), add(2): Keys hashed into distinct bucket slots.',
      state: { type: 'hash-table', buckets: [[{ key: 1, val: true }], [{ key: 2, val: true }], [], []] },
      pointers: { bucket0: 0, bucket1: 1 },
      highlights: [0, 1]
    });

    t.step({
      tag: 'contains',
      description: 'contains(2): Bucket 1 contains key 2. Return true in O(1).',
      state: { type: 'hash-table', buckets: [[{ key: 1, val: true }], [{ key: 2, val: true }], [], []] },
      pointers: { check: 1 },
      highlights: [1]
    });

    return t.getSteps();
  };

  // 3. two-sum
  Tracers['two-sum'] = function(input) {
    const nums = Array.isArray(input) && input.length ? input.slice(0, 5) : [2, 7, 11, 15];
    const target = 9;
    const t = new Tracer('hash-table');

    t.step({
      tag: 'check1',
      description: `Index 0 (val 2): complement = 9 - 2 = 7. Not in map. Insert { 2: 0 }.`,
      state: { type: 'hash-table', buckets: [[{ key: 2, val: 0 }], [], [], []] },
      pointers: { map: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'found',
      description: `Index 1 (val 7): complement = 9 - 7 = 2 found in map at index 0! Return [0, 1].`,
      state: { type: 'hash-table', buckets: [[{ key: 2, val: 0 }], [{ key: 7, val: 1 }], [], []] },
      pointers: { match: 0, current: 1 },
      highlights: [0, 1]
    });

    return t.getSteps();
  };

  // 4. group-anagrams
  Tracers['group-anagrams'] = function() {
    const t = new Tracer('hash-table');

    t.step({
      tag: 'init',
      description: 'Hash table maps sorted character signatures to lists of anagram words.',
      state: { type: 'hash-table', buckets: [[], [], [], []] },
      pointers: {}
    });

    t.step({
      tag: 'group1',
      description: 'Words "eat", "tea", "ate" share sorted signature "aet". Grouped together.',
      state: { type: 'hash-table', buckets: [[{ key: '"aet"', val: '["eat", "tea", "ate"]' }], [], [], []] },
      pointers: { bucket: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'group2',
      description: 'Words "tan", "nat" share signature "ant"; "bat" has signature "abt". O(N * K log K).',
      state: {
        type: 'hash-table',
        buckets: [
          [{ key: '"aet"', val: '["eat", "tea", "ate"]' }],
          [{ key: '"ant"', val: '["tan", "nat"]' }],
          [{ key: '"abt"', val: '["bat"]' }],
          []
        ]
      },
      pointers: { resultCount: 2 },
      highlights: [0, 1, 2]
    });

    return t.getSteps();
  };

  // 5. valid-anagram
  Tracers['valid-anagram'] = function() {
    const t = new Tracer('hash-table');

    t.step({
      tag: 'count',
      description: 'Count char frequencies of "anagram". Table tracks { a: 3, n: 1, g: 1, r: 1, m: 1 }.',
      state: { type: 'hash-table', buckets: [[{ key: 'a', val: 3 }, { key: 'n', val: 1 }], [{ key: 'g', val: 1 }, { key: 'r', val: 1 }], [{ key: 'm', val: 1 }], []] },
      pointers: { active: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'decrement',
      description: 'Scan "nagaram", decrementing counts. All bucket counts reach 0. Anagram confirmed!',
      state: { type: 'hash-table', buckets: [[{ key: 'a', val: 0 }], [{ key: 'n', val: 0 }], [{ key: 'g', val: 0 }], []] },
      pointers: { balance: 0 },
      highlights: [0, 1, 2]
    });

    return t.getSteps();
  };

  // 6. longest-consecutive-sequence
  Tracers['longest-consecutive-sequence'] = function() {
    const t = new Tracer('hash-table');

    t.step({
      tag: 'build_set',
      description: 'Insert [100, 4, 200, 1, 3, 2] into hash set for O(1) containment lookups.',
      state: { type: 'hash-table', buckets: [[{ key: 100, val: 1 }], [{ key: 4, val: 1 }], [{ key: 1, val: 1 }, { key: 2, val: 1 }, { key: 3, val: 1 }], []] },
      pointers: { set: 2 },
      highlights: [2]
    });

    t.step({
      tag: 'streak',
      description: '1 has no left neighbor (0 not in set), so 1 is a sequence start. Streak: 1 -> 2 -> 3 -> 4.',
      state: { type: 'hash-table', buckets: [[{ key: 100, val: 1 }], [{ key: 4, val: 1 }], [{ key: 1, val: 1 }, { key: 2, val: 1 }, { key: 3, val: 1 }], []] },
      pointers: { start: 2 },
      highlights: [1, 2]
    });

    t.step({
      tag: 'result',
      description: 'Longest consecutive sequence length is 4. Total runtime O(N).',
      state: { type: 'hash-table', buckets: [[{ key: 'MaxStreak', val: 4 }], [], [], []] },
      pointers: { max: 0 },
      highlights: [0]
    });

    return t.getSteps();
  };

  // 7. subarray-sum-equals-k
  Tracers['subarray-sum-equals-k'] = function() {
    const t = new Tracer('hash-table');

    t.step({
      tag: 'init',
      description: 'Prefix sum hash map initialized with { 0: 1 } to handle subarrays starting at index 0.',
      state: { type: 'hash-table', buckets: [[{ key: 'prefix:0', val: 1 }], [], [], []] },
      pointers: { base: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'step1',
      description: 'Process index 0 (val 1): prefix_sum = 1. Look for 1 - 2 = -1 (not found). Map: { 0: 1, 1: 1 }.',
      state: { type: 'hash-table', buckets: [[{ key: 'prefix:0', val: 1 }, { key: 'prefix:1', val: 1 }], [], [], []] },
      pointers: { curr: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'step2',
      description: 'Process index 1 (val 1): prefix_sum = 2. Look for 2 - 2 = 0 found in map! Count = 1.',
      state: { type: 'hash-table', buckets: [[{ key: 'prefix:0', val: 1 }, { key: 'prefix:1', val: 1 }], [{ key: 'prefix:2', val: 1 }], [], []] },
      pointers: { match: 0 },
      highlights: [0, 1]
    });

    t.step({
      tag: 'step3',
      description: 'Process index 2 (val 1): prefix_sum = 3. Look for 3 - 2 = 1 found in map! Count = 2 total.',
      state: { type: 'hash-table', buckets: [[{ key: 'Count', val: 2 }], [], [], []] },
      pointers: { totalCount: 0 },
      highlights: [0]
    });

    return t.getSteps();
  };

  // 8. contains-duplicate-ii
  Tracers['contains-duplicate-ii'] = function() {
    const t = new Tracer('hash-table');

    t.step({
      tag: 'init',
      description: 'Sliding window hash set of size k = 3. Tracks elements within distance k.',
      state: { type: 'hash-table', buckets: [[], [], [], []] },
      pointers: {}
    });

    t.step({
      tag: 'insert',
      description: 'Add nums[0]=1, nums[1]=2, nums[2]=3 into sliding set.',
      state: { type: 'hash-table', buckets: [[{ key: 1, val: true }], [{ key: 2, val: true }], [{ key: 3, val: true }], []] },
      pointers: { window: 2 },
      highlights: [0, 1, 2]
    });

    t.step({
      tag: 'duplicate',
      description: 'nums[3]=1 already exists in active window [0..2]! Condition met: abs(i - j) <= k.',
      state: { type: 'hash-table', buckets: [[{ key: 1, val: 'DUPLICATE' }], [{ key: 2, val: true }], [{ key: 3, val: true }], []] },
      pointers: { match: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'return',
      description: 'Return true in O(N) time with O(k) sliding space.',
      state: { type: 'hash-table', buckets: [[{ key: 'Result', val: true }], [], [], []] },
      pointers: { result: 0 },
      highlights: [0]
    });

    return t.getSteps();
  };

  // 9. insert-delete-getrandom
  Tracers['insert-delete-getrandom'] = function() {
    const t = new Tracer('hash-table');

    t.step({
      tag: 'insert',
      description: 'insert(10): Append 10 to array, record index in hash map: { 10: 0 } in O(1).',
      state: { type: 'hash-table', buckets: [[{ key: 'val:10', val: 'idx:0' }], [], [], []] },
      pointers: { map: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'remove',
      description: 'remove(10): Swap 10 with last element in array, update map, pop array in O(1).',
      state: { type: 'hash-table', buckets: [[], [], [], []] },
      pointers: {},
      highlights: []
    });

    t.step({
      tag: 'getRandom',
      description: 'getRandom(): Pick random index 0..len-1 from array in O(1) guaranteed equal probability.',
      state: { type: 'hash-table', buckets: [[{ key: 'Random', val: 'O(1)' }], [], [], []] },
      pointers: { random: 0 },
      highlights: [0]
    });

    return t.getSteps();
  };

})(typeof window !== 'undefined' ? window : global);
