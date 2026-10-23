/**
 * SynapseCS Language-Specific Implementation: JAVASCRIPT - Hashing & Hash Tables
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['javascript'] = window.DSA_LANG_CODE['javascript'] || {};
  window.DSA_LANG_CODE['javascript']['hashing'] = [
  {
    "id": "hash-map-chaining",
    "code": [
      {
        "text": "class MyHashMap {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  constructor() {",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    this.size = 1009;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    this.buckets = Array.from({ length: this.size }, () => []);",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "  _hash(key) { return key % this.size; }",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "  put(key, value) {",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    const idx = this._hash(key);",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    for (let i = 0; i < this.buckets[idx].length; i++) {",
        "tag": "loop",
        "lineNum": 9
      },
      {
        "text": "      if (this.buckets[idx][i][0] === key) {",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "        this.buckets[idx][i][1] = value;",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "        return;",
        "tag": "return",
        "lineNum": 12
      },
      {
        "text": "      }",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    this.buckets[idx].push([key, value]);",
        "tag": "mutate",
        "lineNum": 15
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "  get(key) {",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "    const idx = this._hash(key);",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "    for (const [k, v] of this.buckets[idx]) {",
        "tag": "loop",
        "lineNum": 19
      },
      {
        "text": "      if (k === key) return v;",
        "tag": "branch",
        "lineNum": 20
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "    return -1;",
        "tag": "return",
        "lineNum": 22
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "  remove(key) {",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "    const idx = this._hash(key);",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "    const b = this.buckets[idx];",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "    for (let i = 0; i < b.length; i++) {",
        "tag": "loop",
        "lineNum": 27
      },
      {
        "text": "      if (b[i][0] === key) {",
        "tag": "branch",
        "lineNum": 28
      },
      {
        "text": "        b.splice(i, 1);",
        "tag": "exec",
        "lineNum": 29
      },
      {
        "text": "        return;",
        "tag": "return",
        "lineNum": 30
      },
      {
        "text": "      }",
        "tag": "exec",
        "lineNum": 31
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 32
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 33
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 34
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 35
      },
      {
        "text": "const hm = new MyHashMap();",
        "tag": "init",
        "lineNum": 36
      },
      {
        "text": "hm.put(1, 1);",
        "tag": "exec",
        "lineNum": 37
      },
      {
        "text": "hm.put(2, 2);",
        "tag": "exec",
        "lineNum": 38
      },
      {
        "text": "const r1 = hm.get(1);",
        "tag": "exec",
        "lineNum": 39
      },
      {
        "text": "const r2 = hm.get(3);",
        "tag": "exec",
        "lineNum": 40
      },
      {
        "text": "hm.put(2, 1);",
        "tag": "exec",
        "lineNum": 41
      },
      {
        "text": "const r3 = hm.get(2);",
        "tag": "exec",
        "lineNum": 42
      },
      {
        "text": "hm.remove(2);",
        "tag": "exec",
        "lineNum": 43
      },
      {
        "text": "const r4 = hm.get(2);",
        "tag": "exec",
        "lineNum": 44
      },
      {
        "text": "console.log(JSON.stringify([r1, r2, r3, r4]));",
        "tag": "exec",
        "lineNum": 45
      }
    ],
    "rawCode": "class MyHashMap {\n  constructor() {\n    this.size = 1009;\n    this.buckets = Array.from({ length: this.size }, () => []);\n  }\n  _hash(key) { return key % this.size; }\n  put(key, value) {\n    const idx = this._hash(key);\n    for (let i = 0; i < this.buckets[idx].length; i++) {\n      if (this.buckets[idx][i][0] === key) {\n        this.buckets[idx][i][1] = value;\n        return;\n      }\n    }\n    this.buckets[idx].push([key, value]);\n  }\n  get(key) {\n    const idx = this._hash(key);\n    for (const [k, v] of this.buckets[idx]) {\n      if (k === key) return v;\n    }\n    return -1;\n  }\n  remove(key) {\n    const idx = this._hash(key);\n    const b = this.buckets[idx];\n    for (let i = 0; i < b.length; i++) {\n      if (b[i][0] === key) {\n        b.splice(i, 1);\n        return;\n      }\n    }\n  }\n}\n\nconst hm = new MyHashMap();\nhm.put(1, 1);\nhm.put(2, 2);\nconst r1 = hm.get(1);\nconst r2 = hm.get(3);\nhm.put(2, 1);\nconst r3 = hm.get(2);\nhm.remove(2);\nconst r4 = hm.get(2);\nconsole.log(JSON.stringify([r1, r2, r3, r4]));",
    "explanations": {
      "step_1": "Initialize 1009 bucket arrays to spread hashes evenly using prime modulo.",
      "step_2": "Hash function computes array index: key % size.",
      "step_3": "Put checks if key already exists to update value; otherwise chains new key-value pair to bucket.",
      "step_4": "Get hashes key and traverses bucket chain to find matching key.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "hash-set-impl",
    "code": [
      {
        "text": "class MyHashSet {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  constructor() {",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    this.size = 1009;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    this.buckets = Array.from({ length: this.size }, () => []);",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "  _hash(key) { return key % this.size; }",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "  add(key) {",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    const idx = this._hash(key);",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    if (!this.buckets[idx].includes(key)) this.buckets[idx].push(key);",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "  remove(key) {",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    const idx = this._hash(key);",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    const p = this.buckets[idx].indexOf(key);",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    if (p !== -1) this.buckets[idx].splice(p, 1);",
        "tag": "branch",
        "lineNum": 14
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "  contains(key) {",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "    return this.buckets[this._hash(key)].includes(key);",
        "tag": "return",
        "lineNum": 17
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "const hs = new MyHashSet();",
        "tag": "init",
        "lineNum": 21
      },
      {
        "text": "hs.add(1);",
        "tag": "mutate",
        "lineNum": 22
      },
      {
        "text": "hs.add(2);",
        "tag": "mutate",
        "lineNum": 23
      },
      {
        "text": "console.log(JSON.stringify([hs.contains(1), hs.contains(3), hs.contains(2), (hs.remove(2), hs.contains(2))]));",
        "tag": "exec",
        "lineNum": 24
      }
    ],
    "rawCode": "class MyHashSet {\n  constructor() {\n    this.size = 1009;\n    this.buckets = Array.from({ length: this.size }, () => []);\n  }\n  _hash(key) { return key % this.size; }\n  add(key) {\n    const idx = this._hash(key);\n    if (!this.buckets[idx].includes(key)) this.buckets[idx].push(key);\n  }\n  remove(key) {\n    const idx = this._hash(key);\n    const p = this.buckets[idx].indexOf(key);\n    if (p !== -1) this.buckets[idx].splice(p, 1);\n  }\n  contains(key) {\n    return this.buckets[this._hash(key)].includes(key);\n  }\n}\n\nconst hs = new MyHashSet();\nhs.add(1);\nhs.add(2);\nconsole.log(JSON.stringify([hs.contains(1), hs.contains(3), hs.contains(2), (hs.remove(2), hs.contains(2))]));",
    "explanations": {
      "step_1": "Add checks if key is already present in bucket to guarantee set uniqueness.",
      "step_2": "Remove deletes key from bucket if present.",
      "step_3": "Contains hashes key and performs linear search on small bucket list.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "two-sum",
    "code": [
      {
        "text": "function twoSum(nums, target) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  const seen = new Map();",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "  for (let i = 0; i < nums.length; i++) {",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "    const comp = target - nums[i];",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    if (seen.has(comp)) return [seen.get(comp), i];",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "    seen.set(nums[i], i);",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "  return [];",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "console.log(JSON.stringify(twoSum([2, 7, 11, 15], 9)));",
        "tag": "exec",
        "lineNum": 11
      }
    ],
    "rawCode": "function twoSum(nums, target) {\n  const seen = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const comp = target - nums[i];\n    if (seen.has(comp)) return [seen.get(comp), i];\n    seen.set(nums[i], i);\n  }\n  return [];\n}\n\nconsole.log(JSON.stringify(twoSum([2, 7, 11, 15], 9)));",
    "explanations": {
      "step_1": "Initialize hash map to store previously seen numbers and their indices.",
      "step_2": "Calculate complement needed to reach target: target - num.",
      "step_3": "If complement exists in map, return stored index and current index i.",
      "step_4": "Otherwise store current number and index in hash map for future lookups.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "group-anagrams",
    "code": [
      {
        "text": "function groupAnagrams(strs) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  const map = {};",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "  for (const s of strs) {",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "    const key = s.split('').sort().join('');",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    if (!map[key]) map[key] = [];",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "    map[key].push(s);",
        "tag": "mutate",
        "lineNum": 6
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "  return Object.values(map).sort((a, b) => a.length - b.length);",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "console.log(JSON.stringify(groupAnagrams([\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"])));",
        "tag": "exec",
        "lineNum": 11
      }
    ],
    "rawCode": "function groupAnagrams(strs) {\n  const map = {};\n  for (const s of strs) {\n    const key = s.split('').sort().join('');\n    if (!map[key]) map[key] = [];\n    map[key].push(s);\n  }\n  return Object.values(map).sort((a, b) => a.length - b.length);\n}\n\nconsole.log(JSON.stringify(groupAnagrams([\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"])));",
    "explanations": {
      "step_1": "Create hash map mapping canonical sorted key to list of anagrams.",
      "step_2": "Sort characters of each word to produce canonical signature (e.g. 'ate' -> 'aet').",
      "step_3": "Return all grouped anagram arrays from the hash map.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "valid-anagram",
    "code": [
      {
        "text": "function isAnagram(s, t) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  if (s.length !== t.length) return false;",
        "tag": "branch",
        "lineNum": 2
      },
      {
        "text": "  const counts = new Array(26).fill(0);",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "  for (let i = 0; i < s.length; i++) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "    counts[s.charCodeAt(i) - 97]++;",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    counts[t.charCodeAt(i) - 97]--;",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "  return counts.every(c => c === 0);",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "console.log(isAnagram(\"anagram\", \"nagaram\"));",
        "tag": "exec",
        "lineNum": 11
      }
    ],
    "rawCode": "function isAnagram(s, t) {\n  if (s.length !== t.length) return false;\n  const counts = new Array(26).fill(0);\n  for (let i = 0; i < s.length; i++) {\n    counts[s.charCodeAt(i) - 97]++;\n    counts[t.charCodeAt(i) - 97]--;\n  }\n  return counts.every(c => c === 0);\n}\n\nconsole.log(isAnagram(\"anagram\", \"nagaram\"));",
    "explanations": {
      "step_1": "Early exit: strings with different lengths cannot be anagrams.",
      "step_2": "Increment bucket for characters in s and decrement for characters in t.",
      "step_3": "Verify every bucket returned to exactly 0.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "longest-consecutive-sequence",
    "code": [
      {
        "text": "function longestConsecutive(nums) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  const set = new Set(nums);",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "  let longest = 0;",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "  for (const n of set) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "    if (!set.has(n - 1)) {",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "      let curr = n, streak = 1;",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "      while (set.has(curr + 1)) {",
        "tag": "loop",
        "lineNum": 7
      },
      {
        "text": "        curr++;",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        streak++;",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "      }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "      longest = Math.max(longest, streak);",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "  return longest;",
        "tag": "return",
        "lineNum": 14
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));",
        "tag": "exec",
        "lineNum": 17
      }
    ],
    "rawCode": "function longestConsecutive(nums) {\n  const set = new Set(nums);\n  let longest = 0;\n  for (const n of set) {\n    if (!set.has(n - 1)) {\n      let curr = n, streak = 1;\n      while (set.has(curr + 1)) {\n        curr++;\n        streak++;\n      }\n      longest = Math.max(longest, streak);\n    }\n  }\n  return longest;\n}\n\nconsole.log(longestConsecutive([100, 4, 200, 1, 3, 2]));",
    "explanations": {
      "step_1": "Convert array to hash set for O(1) membership checks.",
      "step_2": "Crucial optimization: only attempt sequence expansion if num - 1 is absent, ensuring we only start from sequence heads.",
      "step_3": "Count consecutive numbers in set until gap is reached; update global longest.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "subarray-sum-equals-k",
    "code": [
      {
        "text": "function subarraySum(nums, k) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  const map = new Map([[0, 1]]);",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "  let sum = 0, count = 0;",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "  for (const n of nums) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "    sum += n;",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    if (map.has(sum - k)) count += map.get(sum - k);",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "    map.set(sum, (map.get(sum) || 0) + 1);",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "  return count;",
        "tag": "return",
        "lineNum": 9
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "console.log(subarraySum([1, 1, 1], 2));",
        "tag": "exec",
        "lineNum": 12
      }
    ],
    "rawCode": "function subarraySum(nums, k) {\n  const map = new Map([[0, 1]]);\n  let sum = 0, count = 0;\n  for (const n of nums) {\n    sum += n;\n    if (map.has(sum - k)) count += map.get(sum - k);\n    map.set(sum, (map.get(sum) || 0) + 1);\n  }\n  return count;\n}\n\nconsole.log(subarraySum([1, 1, 1], 2));",
    "explanations": {
      "step_1": "Base case {0: 1}: handles subarrays starting from index 0 where curr_sum equals k exactly.",
      "step_2": "Accumulate current running prefix sum and calculate required previous prefix sum: curr_sum - k.",
      "step_3": "Add occurrences of needed prefix sum to count, then record curr_sum in map.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "contains-duplicate-ii",
    "code": [
      {
        "text": "function containsNearbyDuplicate(nums, k) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  const set = new Set();",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "  for (let i = 0; i < nums.length; i++) {",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "    if (set.has(nums[i])) return true;",
        "tag": "branch",
        "lineNum": 4
      },
      {
        "text": "    set.add(nums[i]);",
        "tag": "mutate",
        "lineNum": 5
      },
      {
        "text": "    if (set.size > k) set.delete(nums[i - k]);",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "  return false;",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));",
        "tag": "exec",
        "lineNum": 11
      }
    ],
    "rawCode": "function containsNearbyDuplicate(nums, k) {\n  const set = new Set();\n  for (let i = 0; i < nums.length; i++) {\n    if (set.has(nums[i])) return true;\n    set.add(nums[i]);\n    if (set.size > k) set.delete(nums[i - k]);\n  }\n  return false;\n}\n\nconsole.log(containsNearbyDuplicate([1, 2, 3, 1], 3));",
    "explanations": {
      "step_1": "Maintain a hash set holding elements in the active window of size k.",
      "step_2": "If current element is already in the window set, nearby duplicate exists; return true.",
      "step_3": "Add current element. If window exceeds k, evict the element that slid out: nums[i - k].",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "insert-delete-getrandom",
    "code": [
      {
        "text": "class RandomizedSet {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  constructor() {",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    this.nums = [];",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    this.map = new Map();",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "  insert(val) {",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    if (this.map.has(val)) return false;",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "    this.map.set(val, this.nums.length);",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    this.nums.push(val);",
        "tag": "mutate",
        "lineNum": 9
      },
      {
        "text": "    return true;",
        "tag": "return",
        "lineNum": 10
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "  remove(val) {",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    if (!this.map.has(val)) return false;",
        "tag": "branch",
        "lineNum": 13
      },
      {
        "text": "    const idx = this.map.get(val);",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    const last = this.nums[this.nums.length - 1];",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    this.nums[idx] = last;",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "    this.map.set(last, idx);",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "    this.nums.pop();",
        "tag": "mutate",
        "lineNum": 18
      },
      {
        "text": "    this.map.delete(val);",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "    return true;",
        "tag": "return",
        "lineNum": 20
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "  getRandom() {",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "    return this.nums[Math.floor(Math.random() * this.nums.length)];",
        "tag": "return",
        "lineNum": 23
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "const rs = new RandomizedSet();",
        "tag": "init",
        "lineNum": 27
      },
      {
        "text": "console.log(JSON.stringify([rs.insert(1), rs.remove(2), rs.insert(2)]));",
        "tag": "exec",
        "lineNum": 28
      }
    ],
    "rawCode": "class RandomizedSet {\n  constructor() {\n    this.nums = [];\n    this.map = new Map();\n  }\n  insert(val) {\n    if (this.map.has(val)) return false;\n    this.map.set(val, this.nums.length);\n    this.nums.push(val);\n    return true;\n  }\n  remove(val) {\n    if (!this.map.has(val)) return false;\n    const idx = this.map.get(val);\n    const last = this.nums[this.nums.length - 1];\n    this.nums[idx] = last;\n    this.map.set(last, idx);\n    this.nums.pop();\n    this.map.delete(val);\n    return true;\n  }\n  getRandom() {\n    return this.nums[Math.floor(Math.random() * this.nums.length)];\n  }\n}\n\nconst rs = new RandomizedSet();\nconsole.log(JSON.stringify([rs.insert(1), rs.remove(2), rs.insert(2)]));",
    "explanations": {
      "step_1": "Insert: map records val -> index in array; array appends val in O(1).",
      "step_2": "O(1) Deletion trick: swap target with last element, update moved element's map index, then pop array tail in O(1).",
      "step_3": "getRandom: generate random index in [0..len-1] and return array element in O(1).",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  }
];
})(typeof window !== 'undefined' ? window : global);
