/**
 * SynapseCS Language-Specific Implementation: RUST - hashing
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['rust'] = window.DSA_LANG_CODE['rust'] || {};
  window.DSA_LANG_CODE['rust']['hashing'] = [
  {
    "id": "hash-map-chaining",
    "code": [
      {
        "text": "pub struct MyHashMap {",
        "code": "pub struct MyHashMap {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    buckets: Vec<Vec<(i32, i32)>>,",
        "code": "    buckets: Vec<Vec<(i32, i32)>>,",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    size: usize,",
        "code": "    size: usize,",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "impl MyHashMap {",
        "code": "impl MyHashMap {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "    pub fn new() -> Self {",
        "code": "    pub fn new() -> Self {",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "        MyHashMap {",
        "code": "        MyHashMap {",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "            buckets: vec![Vec::new(); 1000],",
        "code": "            buckets: vec![Vec::new(); 1000],",
        "tag": "alloc",
        "lineNum": 9
      },
      {
        "text": "            size: 1000,",
        "code": "            size: 1000,",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    pub fn put(&mut self, key: i32, value: i32) {",
        "code": "    pub fn put(&mut self, key: i32, value: i32) {",
        "tag": "def",
        "lineNum": 14
      },
      {
        "text": "        let idx = (key as usize) % self.size;",
        "code": "        let idx = (key as usize) % self.size;",
        "tag": "init",
        "lineNum": 15
      },
      {
        "text": "        for pair in &mut self.buckets[idx] {",
        "code": "        for pair in &mut self.buckets[idx] {",
        "tag": "loop",
        "lineNum": 16
      },
      {
        "text": "            if pair.0 == key {",
        "code": "            if pair.0 == key {",
        "tag": "branch",
        "lineNum": 17
      },
      {
        "text": "                pair.1 = value;",
        "code": "                pair.1 = value;",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "                return;",
        "code": "                return;",
        "tag": "return",
        "lineNum": 19
      },
      {
        "text": "            }",
        "code": "            }",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "        self.buckets[idx].push((key, value));",
        "code": "        self.buckets[idx].push((key, value));",
        "tag": "mutate",
        "lineNum": 22
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "    pub fn get(&self, key: i32) -> i32 {",
        "code": "    pub fn get(&self, key: i32) -> i32 {",
        "tag": "def",
        "lineNum": 25
      },
      {
        "text": "        let idx = (key as usize) % self.size;",
        "code": "        let idx = (key as usize) % self.size;",
        "tag": "init",
        "lineNum": 26
      },
      {
        "text": "        for pair in &self.buckets[idx] {",
        "code": "        for pair in &self.buckets[idx] {",
        "tag": "loop",
        "lineNum": 27
      },
      {
        "text": "            if pair.0 == key {",
        "code": "            if pair.0 == key {",
        "tag": "branch",
        "lineNum": 28
      },
      {
        "text": "                return pair.1;",
        "code": "                return pair.1;",
        "tag": "return",
        "lineNum": 29
      },
      {
        "text": "            }",
        "code": "            }",
        "tag": "exec",
        "lineNum": 30
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 31
      },
      {
        "text": "        -1",
        "code": "        -1",
        "tag": "exec",
        "lineNum": 32
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 33
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 34
      }
    ],
    "rawCode": "pub struct MyHashMap {\n    buckets: Vec<Vec<(i32, i32)>>,\n    size: usize,\n}\n\nimpl MyHashMap {\n    pub fn new() -> Self {\n        MyHashMap {\n            buckets: vec![Vec::new(); 1000],\n            size: 1000,\n        }\n    }\n\n    pub fn put(&mut self, key: i32, value: i32) {\n        let idx = (key as usize) % self.size;\n        for pair in &mut self.buckets[idx] {\n            if pair.0 == key {\n                pair.1 = value;\n                return;\n            }\n        }\n        self.buckets[idx].push((key, value));\n    }\n\n    pub fn get(&self, key: i32) -> i32 {\n        let idx = (key as usize) % self.size;\n        for pair in &self.buckets[idx] {\n            if pair.0 == key {\n                return pair.1;\n            }\n        }\n        -1\n    }\n}",
    "explanations": {
      "def": "Define MyHashMap struct with 2D vector buckets and methods.",
      "alloc": "Allocate buckets using vec![Vec::new(); 1000].",
      "init": "Compute hash bucket index (key as usize) % self.size.",
      "loop": "Iterate over mutable reference &mut self.buckets[idx].",
      "branch": "If pair.0 == key, update value and return.",
      "mutate": "Push new (key, value) tuple to bucket vector.",
      "return": "Return found value or -1 if not found.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Vec<Vec<(i32, i32)>> implements separate chaining where each bucket is an independently allocated vector."
  },
  {
    "id": "hash-set-impl",
    "code": [
      {
        "text": "use std::collections::HashSet;",
        "code": "use std::collections::HashSet;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "pub struct MyHashSet {",
        "code": "pub struct MyHashSet {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    set: HashSet<i32>,",
        "code": "    set: HashSet<i32>,",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "impl MyHashSet {",
        "code": "impl MyHashSet {",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "    pub fn new() -> Self {",
        "code": "    pub fn new() -> Self {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "        MyHashSet { set: HashSet::new() }",
        "code": "        MyHashSet { set: HashSet::new() }",
        "tag": "alloc",
        "lineNum": 9
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    pub fn add(&mut self, key: i32) {",
        "code": "    pub fn add(&mut self, key: i32) {",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "        self.set.insert(key);",
        "code": "        self.set.insert(key);",
        "tag": "mutate",
        "lineNum": 13
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    pub fn remove(&mut self, key: i32) {",
        "code": "    pub fn remove(&mut self, key: i32) {",
        "tag": "def",
        "lineNum": 16
      },
      {
        "text": "        self.set.remove(&key);",
        "code": "        self.set.remove(&key);",
        "tag": "mutate",
        "lineNum": 17
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "    pub fn contains(&self, key: i32) -> bool {",
        "code": "    pub fn contains(&self, key: i32) -> bool {",
        "tag": "def",
        "lineNum": 20
      },
      {
        "text": "        self.set.contains(&key)",
        "code": "        self.set.contains(&key)",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 23
      }
    ],
    "rawCode": "use std::collections::HashSet;\n\npub struct MyHashSet {\n    set: HashSet<i32>,\n}\n\nimpl MyHashSet {\n    pub fn new() -> Self {\n        MyHashSet { set: HashSet::new() }\n    }\n\n    pub fn add(&mut self, key: i32) {\n        self.set.insert(key);\n    }\n\n    pub fn remove(&mut self, key: i32) {\n        self.set.remove(&key);\n    }\n\n    pub fn contains(&self, key: i32) -> bool {\n        self.set.contains(&key)\n    }\n}",
    "explanations": {
      "def": "Define MyHashSet struct wrapping standard HashSet<i32>.",
      "mutate": "Insert or remove key from inner hash set.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "alloc": "Executes [alloc] operation in this algorithm step."
    },
    "notes": "Rust HashSet uses Google SwissTable algorithm (via hashbrown) for high performance and low collision overhead."
  },
  {
    "id": "two-sum",
    "code": [
      {
        "text": "use std::collections::HashMap;",
        "code": "use std::collections::HashMap;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "pub fn two_sum(nums: &[i32], target: i32) -> Vec<i32> {",
        "code": "pub fn two_sum(nums: &[i32], target: i32) -> Vec<i32> {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    let mut seen = HashMap::new();",
        "code": "    let mut seen = HashMap::new();",
        "tag": "alloc",
        "lineNum": 4
      },
      {
        "text": "    for (i, &num) in nums.iter().enumerate() {",
        "code": "    for (i, &num) in nums.iter().enumerate() {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "        let complement = target - num;",
        "code": "        let complement = target - num;",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "        if let Some(&prev_idx) = seen.get(&complement) {",
        "code": "        if let Some(&prev_idx) = seen.get(&complement) {",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "            return vec![prev_idx as i32, i as i32];",
        "code": "            return vec![prev_idx as i32, i as i32];",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        seen.insert(num, i);",
        "code": "        seen.insert(num, i);",
        "tag": "mutate",
        "lineNum": 10
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    vec![]",
        "code": "    vec![]",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 13
      }
    ],
    "rawCode": "use std::collections::HashMap;\n\npub fn two_sum(nums: &[i32], target: i32) -> Vec<i32> {\n    let mut seen = HashMap::new();\n    for (i, &num) in nums.iter().enumerate() {\n        let complement = target - num;\n        if let Some(&prev_idx) = seen.get(&complement) {\n            return vec![prev_idx as i32, i as i32];\n        }\n        seen.insert(num, i);\n    }\n    vec![]\n}",
    "explanations": {
      "def": "Define two_sum function borrowing &[i32] slice.",
      "init": "Instantiate HashMap::new() to track seen numbers.",
      "mutate": "Insert current number into seen map.",
      "return": "Return vec![prev_idx, i].",
      "exec": "Executes [exec] operation in this algorithm step.",
      "alloc": "Executes [alloc] operation in this algorithm step."
    },
    "notes": "Pattern matching on Option<&usize> avoids sentinel values and guarantees type safety at compile time."
  },
  {
    "id": "group-anagrams",
    "code": [
      {
        "text": "use std::collections::HashMap;",
        "code": "use std::collections::HashMap;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {",
        "code": "pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    let mut map: HashMap<String, Vec<String>> = HashMap::new();",
        "code": "    let mut map: HashMap<String, Vec<String>> = HashMap::new();",
        "tag": "alloc",
        "lineNum": 4
      },
      {
        "text": "    for s in strs {",
        "code": "    for s in strs {",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "        let mut chars: Vec<char> = s.chars().collect();",
        "code": "        let mut chars: Vec<char> = s.chars().collect();",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "        chars.sort_unstable();",
        "code": "        chars.sort_unstable();",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "        let key: String = chars.into_iter().collect();",
        "code": "        let key: String = chars.into_iter().collect();",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "        map.entry(key).or_default().push(s);",
        "code": "        map.entry(key).or_default().push(s);",
        "tag": "mutate",
        "lineNum": 9
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    map.into_values().collect()",
        "code": "    map.into_values().collect()",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 12
      }
    ],
    "rawCode": "use std::collections::HashMap;\n\npub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {\n    let mut map: HashMap<String, Vec<String>> = HashMap::new();\n    for s in strs {\n        let mut chars: Vec<char> = s.chars().collect();\n        chars.sort_unstable();\n        let key: String = chars.into_iter().collect();\n        map.entry(key).or_default().push(s);\n    }\n    map.into_values().collect()\n}",
    "explanations": {
      "def": "Define group_anagrams accepting owned vector of strings.",
      "init": "Instantiate HashMap and collect characters into Vec<char>.",
      "exec": "Sort characters with sort_unstable() to form canonical key.",
      "mutate": "Use entry API .or_default().push(s) to append string to group.",
      "alloc": "Executes [alloc] operation in this algorithm step.",
      "loop": "Executes [loop] operation in this algorithm step."
    },
    "notes": "Entry API map.entry(key).or_default() avoids redundant lookups by returning a mutable reference to the bucket vector in a single lookup."
  },
  {
    "id": "valid-anagram",
    "code": [
      {
        "text": "pub fn is_anagram(s: &str, t: &str) -> bool {",
        "code": "pub fn is_anagram(s: &str, t: &str) -> bool {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    if s.len() != t.len() {",
        "code": "    if s.len() != t.len() {",
        "tag": "def",
        "lineNum": 2
      },
      {
        "text": "        return false;",
        "code": "        return false;",
        "tag": "return",
        "lineNum": 3
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    let mut counts = [0i32; 26];",
        "code": "    let mut counts = [0i32; 26];",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "    for (b1, b2) in s.bytes().zip(t.bytes()) {",
        "code": "    for (b1, b2) in s.bytes().zip(t.bytes()) {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "        counts[(b1 - b'a') as usize] += 1;",
        "code": "        counts[(b1 - b'a') as usize] += 1;",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "        counts[(b2 - b'a') as usize] -= 1;",
        "code": "        counts[(b2 - b'a') as usize] -= 1;",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    counts.iter().all(|&c| c == 0)",
        "code": "    counts.iter().all(|&c| c == 0)",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 11
      }
    ],
    "rawCode": "pub fn is_anagram(s: &str, t: &str) -> bool {\n    if s.len() != t.len() {\n        return false;\n    }\n    let mut counts = [0i32; 26];\n    for (b1, b2) in s.bytes().zip(t.bytes()) {\n        counts[(b1 - b'a') as usize] += 1;\n        counts[(b2 - b'a') as usize] -= 1;\n    }\n    counts.iter().all(|&c| c == 0)\n}",
    "explanations": {
      "def": "Define is_anagram borrowing string slices &str.",
      "init": "Initialize stack array [0i32; 26].",
      "return": "Check if all counters are zero via .iter().all(|&c| c == 0).",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "s.bytes().zip(t.bytes()) iterates both strings in lockstep without memory allocations."
  },
  {
    "id": "longest-consecutive-sequence",
    "code": [
      {
        "text": "use std::collections::HashSet;",
        "code": "use std::collections::HashSet;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "pub fn longest_consecutive(nums: &[i32]) -> i32 {",
        "code": "pub fn longest_consecutive(nums: &[i32]) -> i32 {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    let set: HashSet<i32> = nums.iter().cloned().collect();",
        "code": "    let set: HashSet<i32> = nums.iter().cloned().collect();",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "    let mut longest = 0;",
        "code": "    let mut longest = 0;",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    for &num in &set {",
        "code": "    for &num in &set {",
        "tag": "loop",
        "lineNum": 7
      },
      {
        "text": "        if !set.contains(&(num - 1)) {",
        "code": "        if !set.contains(&(num - 1)) {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "            let mut curr = num;",
        "code": "            let mut curr = num;",
        "tag": "init",
        "lineNum": 9
      },
      {
        "text": "            let mut streak = 1;",
        "code": "            let mut streak = 1;",
        "tag": "init",
        "lineNum": 10
      },
      {
        "text": "            while set.contains(&(curr + 1)) {",
        "code": "            while set.contains(&(curr + 1)) {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "                curr += 1;",
        "code": "                curr += 1;",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "                streak += 1;",
        "code": "                streak += 1;",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "            }",
        "code": "            }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "            longest = std::cmp::max(longest, streak);",
        "code": "            longest = std::cmp::max(longest, streak);",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "    longest",
        "code": "    longest",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 19
      }
    ],
    "rawCode": "use std::collections::HashSet;\n\npub fn longest_consecutive(nums: &[i32]) -> i32 {\n    let set: HashSet<i32> = nums.iter().cloned().collect();\n    let mut longest = 0;\n\n    for &num in &set {\n        if !set.contains(&(num - 1)) {\n            let mut curr = num;\n            let mut streak = 1;\n            while set.contains(&(curr + 1)) {\n                curr += 1;\n                streak += 1;\n            }\n            longest = std::cmp::max(longest, streak);\n        }\n    }\n    longest\n}",
    "explanations": {
      "def": "Define longest_consecutive taking &[i32].",
      "init": "Collect slice into HashSet and initialize longest to 0.",
      "loop": "Iterate through set and loop while set.contains(&(curr + 1)).",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Checking sequence starts ensures every number is visited at most twice, providing O(N) execution."
  },
  {
    "id": "subarray-sum-equals-k",
    "code": [
      {
        "text": "use std::collections::HashMap;",
        "code": "use std::collections::HashMap;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "pub fn subarray_sum(nums: &[i32], k: i32) -> i32 {",
        "code": "pub fn subarray_sum(nums: &[i32], k: i32) -> i32 {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    let mut prefix_counts = HashMap::new();",
        "code": "    let mut prefix_counts = HashMap::new();",
        "tag": "alloc",
        "lineNum": 4
      },
      {
        "text": "    prefix_counts.insert(0, 1);",
        "code": "    prefix_counts.insert(0, 1);",
        "tag": "mutate",
        "lineNum": 5
      },
      {
        "text": "    let mut current_sum = 0;",
        "code": "    let mut current_sum = 0;",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "    let mut count = 0;",
        "code": "    let mut count = 0;",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    for &num in nums {",
        "code": "    for &num in nums {",
        "tag": "loop",
        "lineNum": 9
      },
      {
        "text": "        current_sum += num;",
        "code": "        current_sum += num;",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        if let Some(&freq) = prefix_counts.get(&(current_sum - k)) {",
        "code": "        if let Some(&freq) = prefix_counts.get(&(current_sum - k)) {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "            count += freq;",
        "code": "            count += freq;",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        *prefix_counts.entry(current_sum).or_insert(0) += 1;",
        "code": "        *prefix_counts.entry(current_sum).or_insert(0) += 1;",
        "tag": "comment",
        "lineNum": 14
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    count",
        "code": "    count",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 17
      }
    ],
    "rawCode": "use std::collections::HashMap;\n\npub fn subarray_sum(nums: &[i32], k: i32) -> i32 {\n    let mut prefix_counts = HashMap::new();\n    prefix_counts.insert(0, 1);\n    let mut current_sum = 0;\n    let mut count = 0;\n\n    for &num in nums {\n        current_sum += num;\n        if let Some(&freq) = prefix_counts.get(&(current_sum - k)) {\n            count += freq;\n        }\n        *prefix_counts.entry(current_sum).or_insert(0) += 1;\n    }\n    count\n}",
    "explanations": {
      "def": "Define subarray_sum using prefix sum hash map.",
      "init": "Insert base prefix (0, 1) into HashMap.",
      "loop": "Iterate through numbers in slice.",
      "mutate": "Increment current_sum, count, and entry frequency.",
      "comment": "Import HashMap.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "alloc": "Executes [alloc] operation in this algorithm step."
    },
    "notes": "*prefix_counts.entry(current_sum).or_insert(0) += 1 atomically inserts or increments count in-place."
  },
  {
    "id": "contains-duplicate-ii",
    "code": [
      {
        "text": "use std::collections::HashMap;",
        "code": "use std::collections::HashMap;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "pub fn contains_nearby_duplicate(nums: &[i32], k: usize) -> bool {",
        "code": "pub fn contains_nearby_duplicate(nums: &[i32], k: usize) -> bool {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    let mut window = HashMap::new();",
        "code": "    let mut window = HashMap::new();",
        "tag": "alloc",
        "lineNum": 4
      },
      {
        "text": "    for (i, &num) in nums.iter().enumerate() {",
        "code": "    for (i, &num) in nums.iter().enumerate() {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "        if let Some(&prev_idx) = window.get(&num) {",
        "code": "        if let Some(&prev_idx) = window.get(&num) {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "            if i - prev_idx <= k {",
        "code": "            if i - prev_idx <= k {",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "                return true;",
        "code": "                return true;",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "            }",
        "code": "            }",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        window.insert(num, i);",
        "code": "        window.insert(num, i);",
        "tag": "mutate",
        "lineNum": 11
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    false",
        "code": "    false",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 14
      }
    ],
    "rawCode": "use std::collections::HashMap;\n\npub fn contains_nearby_duplicate(nums: &[i32], k: usize) -> bool {\n    let mut window = HashMap::new();\n    for (i, &num) in nums.iter().enumerate() {\n        if let Some(&prev_idx) = window.get(&num) {\n            if i - prev_idx <= k {\n                return true;\n            }\n        }\n        window.insert(num, i);\n    }\n    false\n}",
    "explanations": {
      "def": "Define contains_nearby_duplicate taking slice and distance k.",
      "branch": "Check if previous index exists and i - prev_idx <= k.",
      "mutate": "Insert or update element index in window map.",
      "return": "Return false if no nearby duplicate satisfies the distance requirement.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "alloc": "Executes [alloc] operation in this algorithm step."
    },
    "notes": "Maintains index positions to detect duplicates within distance k in O(N) time and O(min(N, k)) space."
  },
  {
    "id": "insert-delete-getrandom",
    "code": [
      {
        "text": "use std::collections::HashMap;",
        "code": "use std::collections::HashMap;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "pub struct RandomizedSet {",
        "code": "pub struct RandomizedSet {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    nums: Vec<i32>,",
        "code": "    nums: Vec<i32>,",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    indices: HashMap<i32, usize>,",
        "code": "    indices: HashMap<i32, usize>,",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "impl RandomizedSet {",
        "code": "impl RandomizedSet {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "    pub fn new() -> Self {",
        "code": "    pub fn new() -> Self {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "        RandomizedSet {",
        "code": "        RandomizedSet {",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "            nums: Vec::new(),",
        "code": "            nums: Vec::new(),",
        "tag": "alloc",
        "lineNum": 11
      },
      {
        "text": "            indices: HashMap::new(),",
        "code": "            indices: HashMap::new(),",
        "tag": "alloc",
        "lineNum": 12
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    pub fn insert(&mut self, val: i32) -> bool {",
        "code": "    pub fn insert(&mut self, val: i32) -> bool {",
        "tag": "def",
        "lineNum": 16
      },
      {
        "text": "        if self.indices.contains_key(&val) {",
        "code": "        if self.indices.contains_key(&val) {",
        "tag": "def",
        "lineNum": 17
      },
      {
        "text": "            return false;",
        "code": "            return false;",
        "tag": "return",
        "lineNum": 18
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "        self.indices.insert(val, self.nums.len());",
        "code": "        self.indices.insert(val, self.nums.len());",
        "tag": "mutate",
        "lineNum": 20
      },
      {
        "text": "        self.nums.push(val);",
        "code": "        self.nums.push(val);",
        "tag": "mutate",
        "lineNum": 21
      },
      {
        "text": "        true",
        "code": "        true",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 24
      }
    ],
    "rawCode": "use std::collections::HashMap;\n\npub struct RandomizedSet {\n    nums: Vec<i32>,\n    indices: HashMap<i32, usize>,\n}\n\nimpl RandomizedSet {\n    pub fn new() -> Self {\n        RandomizedSet {\n            nums: Vec::new(),\n            indices: HashMap::new(),\n        }\n    }\n\n    pub fn insert(&mut self, val: i32) -> bool {\n        if self.indices.contains_key(&val) {\n            return false;\n        }\n        self.indices.insert(val, self.nums.len());\n        self.nums.push(val);\n        true\n    }\n}",
    "explanations": {
      "def": "Define RandomizedSet struct with Vec<i32> and HashMap<i32, usize>.",
      "mutate": "Record value index in map and push value onto vector.",
      "return": "Return true upon successful insertion.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "alloc": "Executes [alloc] operation in this algorithm step."
    },
    "notes": "Vec enables O(1) random element indexing, while HashMap maps values to their vector indices for O(1) operations."
  }
];
})(typeof window !== 'undefined' ? window : global);
