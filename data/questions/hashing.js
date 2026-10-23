/**
 * SynapseCS Language-Neutral Question Catalog: Hashing & Hash Tables
 */
(function(window) {
  'use strict';
  window.DSA_QUESTIONS = window.DSA_QUESTIONS || {};
  window.DSA_QUESTIONS['hashing'] = {
    id: 'hashing',
    title: 'Hashing & Hash Tables',
    icon: 'ph:code',
    description: "Hash maps, hash sets, hash functions, collision resolution (chaining vs open addressing), and constant-time lookups.",
    subtopics: [{"id":"hashing-basics","title":"Basics & Implementations","questions":[{"id":"hash-map-chaining","title":"Design Hash Map (Separate Chaining)","difficulty":"Easy","leetcode":{"number":706,"url":"https://leetcode.com/problems/design-hashmap/"},"description":"Design a HashMap without using any built-in hash table libraries. Implement put(key, value), get(key), and remove(key) using separate chaining with linked lists to resolve collisions.","constraints":"0 <= key, value <= 10^6; at most 10^4 calls will be made.","examples":[{"input":"put(1, 1), put(2, 2), get(1), get(3), put(2, 1), get(2), remove(2), get(2)","output":"[1, -1, 1, -1]","why":"Key 1 returns 1, key 3 is absent (-1), key 2 is updated to 1, then removed (-1)."}],"approaches":[{"name":"Bucket Array with Chaining","idea":"Allocate an array of prime size (e.g. 1009 buckets). Hash function maps key to key % size. Collisions in each bucket are resolved via linked list or key-value list.","timeComplexity":"O(1) average, O(N) worst-case","spaceComplexity":"O(N + K) where K is number of buckets","code":{"python":"class MyHashMap:\n    def __init__(self):\n        self.size = 1009\n        self.buckets = [[] for _ in range(self.size)]\n\n    def _hash(self, key):\n        return key % self.size\n\n    def put(self, key: int, value: int) -> None:\n        idx = self._hash(key)\n        for i, (k, v) in enumerate(self.buckets[idx]):\n            if k == key:\n                self.buckets[idx][i] = (key, value)\n                return\n        self.buckets[idx].append((key, value))\n\n    def get(self, key: int) -> int:\n        idx = self._hash(key)\n        for k, v in self.buckets[idx]:\n            if k == key:\n                return v\n        return -1\n\n    def remove(self, key: int) -> None:\n        idx = self._hash(key)\n        for i, (k, v) in enumerate(self.buckets[idx]):\n            if k == key:\n                del self.buckets[idx][i]\n                return\n\n# Test\nhm = MyHashMap()\nhm.put(1, 1)\nhm.put(2, 2)\nv1 = hm.get(1)\nv2 = hm.get(3)\nhm.put(2, 1)\nv3 = hm.get(2)\nhm.remove(2)\nv4 = hm.get(2)\nprint([v1, v2, v3, v4])","java":"import java.util.*;\n\nclass MyHashMap {\n    static class Node { int k, v; Node(int k, int v) { this.k = k; this.v = v; } }\n    private final int SIZE = 1009;\n    private List<Node>[] buckets = new LinkedList[SIZE];\n\n    public MyHashMap() {\n        for (int i = 0; i < SIZE; i++) buckets[i] = new LinkedList<>();\n    }\n    public void put(int key, int value) {\n        int idx = key % SIZE;\n        for (Node n : buckets[idx]) {\n            if (n.k == key) { n.v = value; return; }\n        }\n        buckets[idx].add(new Node(key, value));\n    }\n    public int get(int key) {\n        int idx = key % SIZE;\n        for (Node n : buckets[idx]) {\n            if (n.k == key) return n.v;\n        }\n        return -1;\n    }\n    public void remove(int key) {\n        int idx = key % SIZE;\n        buckets[idx].removeIf(n -> n.k == key);\n    }\n}","cpp":"#include <vector>\n#include <list>\nusing namespace std;\n\nclass MyHashMap {\n    static const int SIZE = 1009;\n    list<pair<int,int>> buckets[SIZE];\npublic:\n    void put(int key, int value) {\n        int idx = key % SIZE;\n        for (auto& p : buckets[idx]) {\n            if (p.first == key) { p.second = value; return; }\n        }\n        buckets[idx].push_back({key, value});\n    }\n    int get(int key) {\n        int idx = key % SIZE;\n        for (auto& p : buckets[idx]) {\n            if (p.first == key) return p.second;\n        }\n        return -1;\n    }\n    void remove(int key) {\n        int idx = key % SIZE;\n        for (auto it = buckets[idx].begin(); it != buckets[idx].end(); ++it) {\n            if (it->first == key) { buckets[idx].erase(it); return; }\n        }\n    }\n};","javascript":"class MyHashMap {\n  constructor() {\n    this.size = 1009;\n    this.buckets = Array.from({ length: this.size }, () => []);\n  }\n  _hash(key) { return key % this.size; }\n  put(key, value) {\n    const idx = this._hash(key);\n    for (let i = 0; i < this.buckets[idx].length; i++) {\n      if (this.buckets[idx][i][0] === key) {\n        this.buckets[idx][i][1] = value;\n        return;\n      }\n    }\n    this.buckets[idx].push([key, value]);\n  }\n  get(key) {\n    const idx = this._hash(key);\n    for (const [k, v] of this.buckets[idx]) {\n      if (k === key) return v;\n    }\n    return -1;\n  }\n  remove(key) {\n    const idx = this._hash(key);\n    const b = this.buckets[idx];\n    for (let i = 0; i < b.length; i++) {\n      if (b[i][0] === key) {\n        b.splice(i, 1);\n        return;\n      }\n    }\n  }\n}\n\nconst hm = new MyHashMap();\nhm.put(1, 1);\nhm.put(2, 2);\nconst r1 = hm.get(1);\nconst r2 = hm.get(3);\nhm.put(2, 1);\nconst r3 = hm.get(2);\nhm.remove(2);\nconst r4 = hm.get(2);\nconsole.log(JSON.stringify([r1, r2, r3, r4]));"},"lineExplanations":[{"lines":[2,4],"text":"Initialize 1009 bucket arrays to spread hashes evenly using prime modulo."},{"lines":[6,7],"text":"Hash function computes array index: key % size."},{"lines":[9,16],"text":"Put checks if key already exists to update value; otherwise chains new key-value pair to bucket."},{"lines":[18,24],"text":"Get hashes key and traverses bucket chain to find matching key."}],"animationSteps":[{"codeLine":9,"description":"put(1, 1): Hash(1) = 1. Insert [1: 1] into Bucket 1.","state":{"type":"hash-table","buckets":[{"entries":[]},{"entries":[{"key":1,"val":1}]},{"entries":[]},{"entries":[]}]},"highlights":[1],"pointers":{}},{"codeLine":9,"description":"put(2, 2): Hash(2) = 2. Insert [2: 2] into Bucket 2.","state":{"type":"hash-table","buckets":[{"entries":[]},{"entries":[{"key":1,"val":1}]},{"entries":[{"key":2,"val":2}]},{"entries":[]}]},"highlights":[2],"pointers":{}},{"codeLine":18,"description":"get(1): Hash(1) = 1. Bucket 1 has key 1 -> returns 1.","state":{"type":"hash-table","buckets":[{"entries":[]},{"entries":[{"key":1,"val":1}]},{"entries":[{"key":2,"val":2}]},{"entries":[]}]},"highlights":[1],"pointers":{"FOUND":1}},{"codeLine":26,"description":"remove(2): Delete key 2 from Bucket 2.","state":{"type":"hash-table","buckets":[{"entries":[]},{"entries":[{"key":1,"val":1}]},{"entries":[]},{"entries":[]}]},"highlights":[2],"pointers":{}}]}],"commonMistakes":"Using a fixed non-prime size like 1000 which causes severe clustering if input keys share common factors (like multiples of 10).","relatedQuestionIds":["hash-set-impl","two-sum"]},{"id":"hash-set-impl","title":"Design Hash Set","difficulty":"Easy","leetcode":{"number":705,"url":"https://leetcode.com/problems/design-hashset/"},"description":"Design a HashSet without using built-in hash set libraries. Implement add(key), contains(key), and remove(key).","constraints":"0 <= key <= 10^6; at most 10^4 calls.","examples":[{"input":"add(1), add(2), contains(1), contains(3), add(2), contains(2), remove(2), contains(2)","output":"[true, false, true, false]","why":"1 exists, 3 does not, 2 was added then removed."}],"approaches":[{"name":"Chaining Hash Set","idea":"Maintain buckets with prime modulus. Add checks for uniqueness before inserting.","timeComplexity":"O(1) average","spaceComplexity":"O(N)","code":{"python":"class MyHashSet:\n    def __init__(self):\n        self.size = 1009\n        self.buckets = [[] for _ in range(self.size)]\n\n    def _hash(self, key):\n        return key % self.size\n\n    def add(self, key: int) -> None:\n        idx = self._hash(key)\n        if key not in self.buckets[idx]:\n            self.buckets[idx].append(key)\n\n    def remove(self, key: int) -> None:\n        idx = self._hash(key)\n        if key in self.buckets[idx]:\n            self.buckets[idx].remove(key)\n\n    def contains(self, key: int) -> bool:\n        idx = self._hash(key)\n        return key in self.buckets[idx]\n\n# Test\nhs = MyHashSet()\nhs.add(1)\nhs.add(2)\nc1 = hs.contains(1)\nc2 = hs.contains(3)\nc3 = hs.contains(2)\nhs.remove(2)\nc4 = hs.contains(2)\nprint([c1, c2, c3, c4])","java":"import java.util.*;\n\nclass MyHashSet {\n    private final int SIZE = 1009;\n    private List<Integer>[] buckets = new LinkedList[SIZE];\n\n    public MyHashSet() {\n        for (int i = 0; i < SIZE; i++) buckets[i] = new LinkedList<>();\n    }\n    public void add(int key) {\n        int idx = key % SIZE;\n        if (!buckets[idx].contains(key)) buckets[idx].add(key);\n    }\n    public void remove(int key) {\n        int idx = key % SIZE;\n        buckets[idx].remove((Integer)key);\n    }\n    public boolean contains(int key) {\n        return buckets[key % SIZE].contains(key);\n    }\n}","cpp":"#include <vector>\n#include <list>\n#include <algorithm>\nusing namespace std;\n\nclass MyHashSet {\n    static const int SIZE = 1009;\n    list<int> buckets[SIZE];\npublic:\n    void add(int key) {\n        int idx = key % SIZE;\n        if (find(buckets[idx].begin(), buckets[idx].end(), key) == buckets[idx].end()) {\n            buckets[idx].push_back(key);\n        }\n    }\n    void remove(int key) {\n        int idx = key % SIZE;\n        buckets[idx].remove(key);\n    }\n    bool contains(int key) {\n        int idx = key % SIZE;\n        return find(buckets[idx].begin(), buckets[idx].end(), key) != buckets[idx].end();\n    }\n};","javascript":"class MyHashSet {\n  constructor() {\n    this.size = 1009;\n    this.buckets = Array.from({ length: this.size }, () => []);\n  }\n  _hash(key) { return key % this.size; }\n  add(key) {\n    const idx = this._hash(key);\n    if (!this.buckets[idx].includes(key)) this.buckets[idx].push(key);\n  }\n  remove(key) {\n    const idx = this._hash(key);\n    const p = this.buckets[idx].indexOf(key);\n    if (p !== -1) this.buckets[idx].splice(p, 1);\n  }\n  contains(key) {\n    return this.buckets[this._hash(key)].includes(key);\n  }\n}\n\nconst hs = new MyHashSet();\nhs.add(1);\nhs.add(2);\nconsole.log(JSON.stringify([hs.contains(1), hs.contains(3), hs.contains(2), (hs.remove(2), hs.contains(2))]));"},"lineExplanations":[{"lines":[9,12],"text":"Add checks if key is already present in bucket to guarantee set uniqueness."},{"lines":[14,17],"text":"Remove deletes key from bucket if present."},{"lines":[19,21],"text":"Contains hashes key and performs linear search on small bucket list."}],"animationSteps":[{"codeLine":9,"description":"add(1): Hash(1) = 1. Bucket 1 = [1].","state":{"type":"hash-table","buckets":[{"entries":[]},{"entries":[{"key":1,"val":"PRESENT"}]}]},"highlights":[1],"pointers":{}},{"codeLine":19,"description":"contains(1): Key 1 found in Bucket 1 -> returns true.","state":{"type":"hash-table","buckets":[{"entries":[]},{"entries":[{"key":1,"val":"PRESENT"}]}]},"highlights":[1],"pointers":{"FOUND":1}}]}],"commonMistakes":"Allowing duplicate keys to be added, violating set semantics.","relatedQuestionIds":["hash-map-chaining","contains-duplicate-ii"]}]},{"id":"hashing-classics","title":"Classic Hashing Problems","questions":[{"id":"two-sum","title":"Two Sum","difficulty":"Easy","leetcode":{"number":1,"url":"https://leetcode.com/problems/two-sum/"},"description":"Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. Each input has exactly one solution.","constraints":"2 <= nums.length <= 10^4; -10^9 <= nums[i] <= 10^9.","examples":[{"input":"nums = [2,7,11,15], target = 9","output":"[0, 1]","why":"nums[0] + nums[1] == 2 + 7 == 9. We return [0, 1]."}],"approaches":[{"name":"One-Pass Hash Map (Complement Lookup)","idea":"For each number x at index i, compute complement = target - x. If complement is already in hash map, we found our pair! Otherwise record x -> i in map.","timeComplexity":"O(N)","spaceComplexity":"O(N)","code":{"python":"def twoSum(nums, target):\n    seen = {}  # val -> index\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []\n\n# Test\nprint(twoSum([2, 7, 11, 15], 9))","java":"import java.util.*;\n\nclass Solution {\n    public int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> seen = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int comp = target - nums[i];\n            if (seen.containsKey(comp)) return new int[]{seen.get(comp), i};\n            seen.put(nums[i], i);\n        }\n        return new int[]{};\n    }\n}","cpp":"#include <vector>\n#include <unordered_map>\nusing namespace std;\n\nvector<int> twoSum(vector<int>& nums, int target) {\n    unordered_map<int, int> seen;\n    for (int i = 0; i < (int)nums.size(); i++) {\n        int comp = target - nums[i];\n        if (seen.count(comp)) return {seen[comp], i};\n        seen[nums[i]] = i;\n    }\n    return {};\n}","javascript":"function twoSum(nums, target) {\n  const seen = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const comp = target - nums[i];\n    if (seen.has(comp)) return [seen.get(comp), i];\n    seen.set(nums[i], i);\n  }\n  return [];\n}\n\nconsole.log(JSON.stringify(twoSum([2, 7, 11, 15], 9)));"},"lineExplanations":[{"lines":[2,2],"text":"Initialize hash map to store previously seen numbers and their indices."},{"lines":[3,4],"text":"Calculate complement needed to reach target: target - num."},{"lines":[5,6],"text":"If complement exists in map, return stored index and current index i."},{"lines":[7,7],"text":"Otherwise store current number and index in hash map for future lookups."}],"animationSteps":[{"codeLine":3,"description":"i=0: num=2. Complement = 9 - 2 = 7. Seen is empty. Store {2: 0}.","state":{"type":"array","array":[2,7,11,15]},"highlights":[0],"pointers":{"i":0}},{"codeLine":5,"description":"i=1: num=7. Complement = 9 - 7 = 2. 2 is in Seen at index 0! Match found: [0, 1].","state":{"type":"array","array":[2,7,11,15]},"highlights":[0,1],"pointers":{"seen[2]":0,"i":1}}]}],"commonMistakes":"Populating the entire map first before searching, which can accidentally match a number with itself if target == 2 * num.","relatedQuestionIds":["subarray-sum-equals-k","group-anagrams"]},{"id":"group-anagrams","title":"Group Anagrams","difficulty":"Medium","leetcode":{"number":49,"url":"https://leetcode.com/problems/group-anagrams/"},"description":"Given an array of strings strs, group the anagrams together. You can return the answer in any order.","constraints":"1 <= strs.length <= 10^4; 0 <= strs[i].length <= 100.","examples":[{"input":"strs = ['eat','tea','tan','ate','nat','bat']","output":"[['bat'], ['tan', 'nat'], ['eat', 'tea', 'ate']]","why":"'eat', 'tea', and 'ate' share the exact same sorted letters 'aet'."}],"approaches":[{"name":"Categorize by Sorted String Key","idea":"Two strings are anagrams if and only if their sorted strings are identical. Use the sorted string as a hash map key.","timeComplexity":"O(N * K log K) where K is max string length","spaceComplexity":"O(N * K)","code":{"python":"from collections import defaultdict\n\ndef groupAnagrams(strs):\n    groups = defaultdict(list)\n    for s in strs:\n        key = \"\".join(sorted(s))\n        groups[key].append(s)\n    return sorted(list(groups.values()), key=len)\n\n# Test\nprint(groupAnagrams([\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]))","java":"import java.util.*;\n\nclass Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        Map<String, List<String>> map = new HashMap<>();\n        for (String s : strs) {\n            char[] chars = s.toCharArray();\n            Arrays.sort(chars);\n            String key = new String(chars);\n            map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);\n        }\n        return new ArrayList<>(map.values());\n    }\n}","cpp":"#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\nusing namespace std;\n\nvector<vector<string>> groupAnagrams(vector<string>& strs) {\n    unordered_map<string, vector<string>> map;\n    for (string& s : strs) {\n        string key = s;\n        sort(key.begin(), key.end());\n        map[key].push_back(s);\n    }\n    vector<vector<string>> res;\n    for (auto& pair : map) res.push_back(pair.second);\n    return res;\n}","javascript":"function groupAnagrams(strs) {\n  const map = {};\n  for (const s of strs) {\n    const key = s.split('').sort().join('');\n    if (!map[key]) map[key] = [];\n    map[key].push(s);\n  }\n  return Object.values(map).sort((a, b) => a.length - b.length);\n}\n\nconsole.log(JSON.stringify(groupAnagrams([\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"])));"},"lineExplanations":[{"lines":[4,4],"text":"Create hash map mapping canonical sorted key to list of anagrams."},{"lines":[5,7],"text":"Sort characters of each word to produce canonical signature (e.g. 'ate' -> 'aet')."},{"lines":[8,8],"text":"Return all grouped anagram arrays from the hash map."}],"animationSteps":[{"codeLine":6,"description":"'eat' -> sorted key 'aet'. Map: {'aet': ['eat']}.","state":{"type":"hash-table","buckets":[{"entries":[{"key":"aet","val":"['eat']"}]}]},"highlights":[0],"pointers":{}},{"codeLine":6,"description":"'tea' -> sorted key 'aet'. Matches existing key! Map: {'aet': ['eat', 'tea']}.","state":{"type":"hash-table","buckets":[{"entries":[{"key":"aet","val":"['eat', 'tea']"}]}]},"highlights":[0],"pointers":{}},{"codeLine":6,"description":"'tan' -> sorted key 'ant'. New key! Map: {'aet': [...], 'ant': ['tan']}.","state":{"type":"hash-table","buckets":[{"entries":[{"key":"aet","val":"['eat', 'tea']"}]},{"entries":[{"key":"ant","val":"['tan']"}]}]},"highlights":[1],"pointers":{}}]}],"commonMistakes":"Using sum of ASCII character values as the hash key, which produces false positive collisions (e.g. 'ac' and 'bb' share the same ASCII sum).","relatedQuestionIds":["valid-anagram","two-sum"]},{"id":"valid-anagram","title":"Valid Anagram","difficulty":"Easy","leetcode":{"number":242,"url":"https://leetcode.com/problems/valid-anagram/"},"description":"Given two strings s and t, return true if t is an anagram of s, and false otherwise.","constraints":"1 <= s.length, t.length <= 5 * 10^4; s and t consist of lowercase English letters.","examples":[{"input":"s = 'anagram', t = 'nagaram'","output":"true","why":"Both strings contain 3 'a's, 1 'n', 1 'g', 1 'r', and 1 'm'."}],"approaches":[{"name":"Frequency Counting Array","idea":"If lengths differ, return false. Maintain a 26-element array: increment count for characters in s, decrement for t. If all counts are zero, return true.","timeComplexity":"O(N)","spaceComplexity":"O(1) - alphabet size 26","code":{"python":"def isAnagram(s: str, t: str) -> bool:\n    if len(s) != len(t):\n        return False\n    counts = [0] * 26\n    for c1, c2 in zip(s, t):\n        counts[ord(c1) - ord('a')] += 1\n        counts[ord(c2) - ord('a')] -= 1\n    return all(c == 0 for c in counts)\n\n# Test\nprint(isAnagram(\"anagram\", \"nagaram\"))","java":"class Solution {\n    public boolean isAnagram(String s, String t) {\n        if (s.length() != t.length()) return false;\n        int[] counts = new int[26];\n        for (int i = 0; i < s.length(); i++) {\n            counts[s.charAt(i) - 'a']++;\n            counts[t.charAt(i) - 'a']--;\n        }\n        for (int c : counts) if (c != 0) return false;\n        return true;\n    }\n}","cpp":"#include <string>\n#include <vector>\nusing namespace std;\n\nbool isAnagram(string s, string t) {\n    if (s.size() != t.size()) return false;\n    vector<int> counts(26, 0);\n    for (int i = 0; i < (int)s.size(); i++) {\n        counts[s[i] - 'a']++;\n        counts[t[i] - 'a']--;\n    }\n    for (int c : counts) if (c != 0) return false;\n    return true;\n}","javascript":"function isAnagram(s, t) {\n  if (s.length !== t.length) return false;\n  const counts = new Array(26).fill(0);\n  for (let i = 0; i < s.length; i++) {\n    counts[s.charCodeAt(i) - 97]++;\n    counts[t.charCodeAt(i) - 97]--;\n  }\n  return counts.every(c => c === 0);\n}\n\nconsole.log(isAnagram(\"anagram\", \"nagaram\"));"},"lineExplanations":[{"lines":[2,3],"text":"Early exit: strings with different lengths cannot be anagrams."},{"lines":[4,7],"text":"Increment bucket for characters in s and decrement for characters in t."},{"lines":[8,8],"text":"Verify every bucket returned to exactly 0."}],"animationSteps":[{"codeLine":2,"description":"Check length: len('anagram') == len('nagaram') == 7. Match!","state":{"type":"array","array":["a","n","a","g","r","a","m"]},"highlights":[],"pointers":{}},{"codeLine":5,"description":"Process frequencies: All counts balance out to 0. Valid anagram!","state":{"type":"array","array":[0,0,0,0,0,0,0]},"highlights":[0,1,2,3,4,5,6],"pointers":{"BALANCED":0}}]}],"commonMistakes":"Sorting strings in O(N log N) time when linear O(N) frequency counting is faster and cleaner.","relatedQuestionIds":["group-anagrams","first-unique-char"]},{"id":"longest-consecutive-sequence","title":"Longest Consecutive Sequence","difficulty":"Medium","leetcode":{"number":128,"url":"https://leetcode.com/problems/longest-consecutive-sequence/"},"description":"Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence in O(N) runtime.","constraints":"0 <= nums.length <= 10^5; -10^9 <= nums[i] <= 10^9.","examples":[{"input":"nums = [100, 4, 200, 1, 3, 2]","output":"4","why":"The longest consecutive elements sequence is [1, 2, 3, 4]. Its length is 4."}],"approaches":[{"name":"Hash Set Intelligent Start-of-Streak Search","idea":"Place all numbers in a HashSet for O(1) lookups. A number x is the start of a sequence ONLY if (x - 1) is NOT in the set. Only count streaks starting from these sequence roots.","timeComplexity":"O(N) - each element is visited at most twice","spaceComplexity":"O(N)","code":{"python":"def longestConsecutive(nums):\n    num_set = set(nums)\n    longest = 0\n    \n    for num in num_set:\n        # Check if num is the start of a streak\n        if num - 1 not in num_set:\n            curr = num\n            streak = 1\n            while curr + 1 in num_set:\n                curr += 1\n                streak += 1\n            longest = max(longest, streak)\n            \n    return longest\n\n# Test\nprint(longestConsecutive([100, 4, 200, 1, 3, 2]))","java":"import java.util.*;\n\nclass Solution {\n    public int longestConsecutive(int[] nums) {\n        Set<Integer> set = new HashSet<>();\n        for (int n : nums) set.add(n);\n        int longest = 0;\n        for (int n : set) {\n            if (!set.contains(n - 1)) {\n                int curr = n, streak = 1;\n                while (set.contains(curr + 1)) { curr++; streak++; }\n                longest = Math.max(longest, streak);\n            }\n        }\n        return longest;\n    }\n}","cpp":"#include <vector>\n#include <unordered_set>\n#include <algorithm>\nusing namespace std;\n\nint longestConsecutive(vector<int>& nums) {\n    unordered_set<int> set(nums.begin(), nums.end());\n    int longest = 0;\n    for (int n : set) {\n        if (!set.count(n - 1)) {\n            int curr = n, streak = 1;\n            while (set.count(curr + 1)) { curr++; streak++; }\n            longest = max(longest, streak);\n        }\n    }\n    return longest;\n}","javascript":"function longestConsecutive(nums) {\n  const set = new Set(nums);\n  let longest = 0;\n  for (const n of set) {\n    if (!set.has(n - 1)) {\n      let curr = n, streak = 1;\n      while (set.has(curr + 1)) {\n        curr++;\n        streak++;\n      }\n      longest = Math.max(longest, streak);\n    }\n  }\n  return longest;\n}\n\nconsole.log(longestConsecutive([100, 4, 200, 1, 3, 2]));"},"lineExplanations":[{"lines":[2,2],"text":"Convert array to hash set for O(1) membership checks."},{"lines":[6,7],"text":"Crucial optimization: only attempt sequence expansion if num - 1 is absent, ensuring we only start from sequence heads."},{"lines":[8,12],"text":"Count consecutive numbers in set until gap is reached; update global longest."}],"animationSteps":[{"codeLine":2,"description":"Set = {100, 4, 200, 1, 3, 2}.","state":{"type":"array","array":[100,4,200,1,3,2]},"highlights":[],"pointers":{}},{"codeLine":7,"description":"Check 1: (1 - 1 = 0) NOT in set. Start streak! 1 -> 2 -> 3 -> 4. Streak = 4.","state":{"type":"array","array":[1,2,3,4]},"highlights":[0,1,2,3],"pointers":{"START":0,"END":3}},{"codeLine":7,"description":"Check 100: (99 not in set). Streak: 100 (len 1). Max remains 4.","state":{"type":"array","array":[1,2,3,4]},"highlights":[],"pointers":{"MAX=4":0}}]}],"commonMistakes":"Starting a while loop for every number without checking if num - 1 exists, resulting in worst-case O(N^2) time.","relatedQuestionIds":["two-sum","subarray-sum-equals-k"]},{"id":"subarray-sum-equals-k","title":"Subarray Sum Equals K","difficulty":"Medium","leetcode":{"number":560,"url":"https://leetcode.com/problems/subarray-sum-equals-k/"},"description":"Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.","constraints":"1 <= nums.length <= 2 * 10^4; -1000 <= nums[i] <= 1000; -10^7 <= k <= 10^7.","examples":[{"input":"nums = [1, 1, 1], k = 2","output":"2","why":"Subarrays [1, 1] at indices [0..1] and [1..2] both sum to 2."}],"approaches":[{"name":"Prefix Sum with Frequency Map","idea":"Sum(i..j) = PrefixSum(j) - PrefixSum(i-1). We want PrefixSum(j) - PrefixSum(i-1) = k, which means PrefixSum(i-1) = PrefixSum(j) - k. Store prefix sum counts in a hash map.","timeComplexity":"O(N)","spaceComplexity":"O(N)","code":{"python":"def subarraySum(nums, k):\n    prefix_counts = {0: 1}  # base case: sum 0 occurs once before starting\n    curr_sum = 0\n    count = 0\n    \n    for num in nums:\n        curr_sum += num\n        needed = curr_sum - k\n        if needed in prefix_counts:\n            count += prefix_counts[needed]\n        prefix_counts[curr_sum] = prefix_counts.get(curr_sum, 0) + 1\n        \n    return count\n\n# Test\nprint(subarraySum([1, 1, 1], 2))","java":"import java.util.*;\n\nclass Solution {\n    public int subarraySum(int[] nums, int k) {\n        Map<Integer, Integer> map = new HashMap<>();\n        map.put(0, 1);\n        int sum = 0, count = 0;\n        for (int n : nums) {\n            sum += n;\n            count += map.getOrDefault(sum - k, 0);\n            map.put(sum, map.getOrDefault(sum, 0) + 1);\n        }\n        return count;\n    }\n}","cpp":"#include <vector>\n#include <unordered_map>\nusing namespace std;\n\nint subarraySum(vector<int>& nums, int k) {\n    unordered_map<int, int> map;\n    map[0] = 1;\n    int sum = 0, count = 0;\n    for (int n : nums) {\n        sum += n;\n        if (map.count(sum - k)) count += map[sum - k];\n        map[sum]++;\n    }\n    return count;\n}","javascript":"function subarraySum(nums, k) {\n  const map = new Map([[0, 1]]);\n  let sum = 0, count = 0;\n  for (const n of nums) {\n    sum += n;\n    if (map.has(sum - k)) count += map.get(sum - k);\n    map.set(sum, (map.get(sum) || 0) + 1);\n  }\n  return count;\n}\n\nconsole.log(subarraySum([1, 1, 1], 2));"},"lineExplanations":[{"lines":[2,2],"text":"Base case {0: 1}: handles subarrays starting from index 0 where curr_sum equals k exactly."},{"lines":[7,8],"text":"Accumulate current running prefix sum and calculate required previous prefix sum: curr_sum - k."},{"lines":[9,11],"text":"Add occurrences of needed prefix sum to count, then record curr_sum in map."}],"animationSteps":[{"codeLine":2,"description":"Init: PrefixCounts = {0: 1}, count = 0.","state":{"type":"array","array":[1,1,1]},"highlights":[],"pointers":{}},{"codeLine":7,"description":"i=0: sum=1. needed = 1 - 2 = -1 (not found). Record {1: 1}.","state":{"type":"array","array":[1,1,1]},"highlights":[0],"pointers":{"i":0}},{"codeLine":7,"description":"i=1: sum=2. needed = 2 - 2 = 0. Found in map! count += 1 (count=1).","state":{"type":"array","array":[1,1,1]},"highlights":[0,1],"pointers":{"MATCH 1":1}},{"codeLine":7,"description":"i=2: sum=3. needed = 3 - 2 = 1. Found {1: 1}! count += 1 (count=2).","state":{"type":"array","array":[1,1,1]},"highlights":[1,2],"pointers":{"MATCH 2":2}}]}],"commonMistakes":"Trying to use two-pointer sliding window, which fails because the array contains negative numbers where expanding the window can decrease the sum.","relatedQuestionIds":["two-sum","longest-consecutive-sequence"]},{"id":"contains-duplicate-ii","title":"Contains Duplicate II (Sliding Window Hash Set)","difficulty":"Easy","leetcode":{"number":219,"url":"https://leetcode.com/problems/contains-duplicate-ii/"},"description":"Given an integer array nums and an integer k, return true if there are two distinct indices i and j such that nums[i] == nums[j] and abs(i - j) <= k.","constraints":"1 <= nums.length <= 10^5; 0 <= k <= 10^5.","examples":[{"input":"nums = [1, 2, 3, 1], k = 3","output":"true","why":"nums[0] == nums[3] == 1, and abs(0 - 3) = 3 <= k."}],"approaches":[{"name":"Sliding Window Set","idea":"Maintain a hash set of at most k elements. If current number is already in set, return true. Otherwise add it. If set size exceeds k, remove oldest element.","timeComplexity":"O(N)","spaceComplexity":"O(min(N, k))","code":{"python":"def containsNearbyDuplicate(nums, k):\n    seen = set()\n    for i, num in enumerate(nums):\n        if num in seen:\n            return True\n        seen.add(num)\n        if len(seen) > k:\n            seen.remove(nums[i - k])\n    return False\n\n# Test\nprint(containsNearbyDuplicate([1, 2, 3, 1], 3))","java":"import java.util.*;\n\nclass Solution {\n    public boolean containsNearbyDuplicate(int[] nums, int k) {\n        Set<Integer> set = new HashSet<>();\n        for (int i = 0; i < nums.length; i++) {\n            if (set.contains(nums[i])) return true;\n            set.add(nums[i]);\n            if (set.size() > k) set.remove(nums[i - k]);\n        }\n        return false;\n    }\n}","cpp":"#include <vector>\n#include <unordered_set>\nusing namespace std;\n\nbool containsNearbyDuplicate(vector<int>& nums, int k) {\n    unordered_set<int> set;\n    for (int i = 0; i < (int)nums.size(); i++) {\n        if (set.count(nums[i])) return true;\n        set.insert(nums[i]);\n        if ((int)set.size() > k) set.erase(nums[i - k]);\n    }\n    return false;\n}","javascript":"function containsNearbyDuplicate(nums, k) {\n  const set = new Set();\n  for (let i = 0; i < nums.length; i++) {\n    if (set.has(nums[i])) return true;\n    set.add(nums[i]);\n    if (set.size > k) set.delete(nums[i - k]);\n  }\n  return false;\n}\n\nconsole.log(containsNearbyDuplicate([1, 2, 3, 1], 3));"},"lineExplanations":[{"lines":[2,2],"text":"Maintain a hash set holding elements in the active window of size k."},{"lines":[4,5],"text":"If current element is already in the window set, nearby duplicate exists; return true."},{"lines":[6,8],"text":"Add current element. If window exceeds k, evict the element that slid out: nums[i - k]."}],"animationSteps":[{"codeLine":6,"description":"i=0: Add 1 to set. Set = {1}.","state":{"type":"array","array":[1,2,3,1]},"highlights":[0],"pointers":{"i":0}},{"codeLine":6,"description":"i=1: Add 2. Set = {1, 2}.","state":{"type":"array","array":[1,2,3,1]},"highlights":[1],"pointers":{"i":1}},{"codeLine":6,"description":"i=2: Add 3. Set = {1, 2, 3}.","state":{"type":"array","array":[1,2,3,1]},"highlights":[2],"pointers":{"i":2}},{"codeLine":4,"description":"i=3: 1 is in Set! abs(3 - 0) = 3 <= 3. Return true!","state":{"type":"array","array":[1,2,3,1]},"highlights":[0,3],"pointers":{"DUP":3}}]}],"commonMistakes":"Allowing set size to grow unboundedly instead of evicting nums[i - k], causing unnecessary space consumption.","relatedQuestionIds":["two-sum","hash-set-impl"]},{"id":"insert-delete-getrandom","title":"Insert Delete GetRandom O(1)","difficulty":"Medium","leetcode":{"number":380,"url":"https://leetcode.com/problems/insert-delete-getrandom-o1/"},"description":"Implement the RandomizedSet class supporting insert(val), remove(val), and getRandom() each in average O(1) time.","constraints":"-2^31 <= val <= 2^31 - 1; at most 2 * 10^5 calls.","examples":[{"input":"insert(1), remove(2), insert(2), getRandom(), remove(1), insert(2), getRandom()","output":"[true, false, true]","why":"Random numbers are chosen with uniform probability from current elements."}],"approaches":[{"name":"Dynamic Array + Hash Map Index Lookup","idea":"An array allows O(1) getRandom by index, but O(N) arbitrary deletion. A hash map allows O(1) lookup. To delete in O(1): swap the target element with the last element in the array, pop the last element, and update the moved element's index in the map.","timeComplexity":"O(1) average for all methods","spaceComplexity":"O(N)","code":{"python":"import random\n\nclass RandomizedSet:\n    def __init__(self):\n        self.nums = []\n        self.val_to_idx = {}\n\n    def insert(self, val: int) -> bool:\n        if val in self.val_to_idx:\n            return False\n        self.val_to_idx[val] = len(self.nums)\n        self.nums.append(val)\n        return True\n\n    def remove(self, val: int) -> bool:\n        if val not in self.val_to_idx:\n            return False\n        idx = self.val_to_idx[val]\n        last_val = self.nums[-1]\n        \n        # Swap with last element\n        self.nums[idx] = last_val\n        self.val_to_idx[last_val] = idx\n        \n        # Pop last\n        self.nums.pop()\n        del self.val_to_idx[val]\n        return True\n\n    def getRandom(self) -> int:\n        return random.choice(self.nums)\n\n# Test\nrs = RandomizedSet()\nprint([rs.insert(1), rs.remove(2), rs.insert(2)])","java":"import java.util.*;\n\nclass RandomizedSet {\n    private List<Integer> nums = new ArrayList<>();\n    private Map<Integer, Integer> map = new HashMap<>();\n    private Random rand = new Random();\n\n    public boolean insert(int val) {\n        if (map.containsKey(val)) return false;\n        map.put(val, nums.size());\n        nums.add(val);\n        return true;\n    }\n    public boolean remove(int val) {\n        if (!map.containsKey(val)) return false;\n        int idx = map.get(val);\n        int last = nums.get(nums.size() - 1);\n        nums.set(idx, last);\n        map.put(last, idx);\n        nums.remove(nums.size() - 1);\n        map.remove(val);\n        return true;\n    }\n    public int getRandom() {\n        return nums.get(rand.nextInt(nums.size()));\n    }\n}","cpp":"#include <vector>\n#include <unordered_map>\n#include <cstdlib>\nusing namespace std;\n\nclass RandomizedSet {\n    vector<int> nums;\n    unordered_map<int, int> map;\npublic:\n    bool insert(int val) {\n        if (map.count(val)) return false;\n        map[val] = nums.size();\n        nums.push_back(val);\n        return true;\n    }\n    bool remove(int val) {\n        if (!map.count(val)) return false;\n        int idx = map[val];\n        int last = nums.back();\n        nums[idx] = last;\n        map[last] = idx;\n        nums.pop_back();\n        map.erase(val);\n        return true;\n    }\n    int getRandom() {\n        return nums[rand() % nums.size()];\n    }\n};","javascript":"class RandomizedSet {\n  constructor() {\n    this.nums = [];\n    this.map = new Map();\n  }\n  insert(val) {\n    if (this.map.has(val)) return false;\n    this.map.set(val, this.nums.length);\n    this.nums.push(val);\n    return true;\n  }\n  remove(val) {\n    if (!this.map.has(val)) return false;\n    const idx = this.map.get(val);\n    const last = this.nums[this.nums.length - 1];\n    this.nums[idx] = last;\n    this.map.set(last, idx);\n    this.nums.pop();\n    this.map.delete(val);\n    return true;\n  }\n  getRandom() {\n    return this.nums[Math.floor(Math.random() * this.nums.length)];\n  }\n}\n\nconst rs = new RandomizedSet();\nconsole.log(JSON.stringify([rs.insert(1), rs.remove(2), rs.insert(2)]));"},"lineExplanations":[{"lines":[8,12],"text":"Insert: map records val -> index in array; array appends val in O(1)."},{"lines":[14,25],"text":"O(1) Deletion trick: swap target with last element, update moved element's map index, then pop array tail in O(1)."},{"lines":[27,28],"text":"getRandom: generate random index in [0..len-1] and return array element in O(1)."}],"animationSteps":[{"codeLine":8,"description":"insert(1): Array = [1], Map = {1: 0}.","state":{"type":"array","array":[1]},"highlights":[0],"pointers":{}},{"codeLine":8,"description":"insert(2): Array = [1, 2], Map = {1: 0, 2: 1}.","state":{"type":"array","array":[1,2]},"highlights":[1],"pointers":{}},{"codeLine":18,"description":"remove(1): Swap 1 with last element (2). Array = [2], Map = {2: 0}. Pop 1.","state":{"type":"array","array":[2]},"highlights":[0],"pointers":{"LAST_SWAPPED":0}}]}],"commonMistakes":"Trying to remove directly from the middle of the array with array.remove(val), which takes O(N) time.","relatedQuestionIds":["two-sum","hash-map-chaining"]}]}],
    questions: [
  {
    "id": "hash-map-chaining",
    "title": "Design Hash Map (Separate Chaining)",
    "difficulty": "Easy",
    "leetcode": {
      "number": 706,
      "url": "https://leetcode.com/problems/design-hashmap/"
    },
    "description": "Design a HashMap without using any built-in hash table libraries. Implement put(key, value), get(key), and remove(key) using separate chaining with linked lists to resolve collisions.",
    "constraints": "0 <= key, value <= 10^6; at most 10^4 calls will be made.",
    "examples": [
      {
        "input": "put(1, 1), put(2, 2), get(1), get(3), put(2, 1), get(2), remove(2), get(2)",
        "output": "[1, -1, 1, -1]",
        "why": "Key 1 returns 1, key 3 is absent (-1), key 2 is updated to 1, then removed (-1)."
      }
    ],
    "approach": {
      "name": "Bucket Array with Chaining",
      "idea": "Allocate an array of prime size (e.g. 1009 buckets). Hash function maps key to key % size. Collisions in each bucket are resolved via linked list or key-value list.",
      "timeComplexity": "O(1) average, O(N) worst-case",
      "spaceComplexity": "O(N + K) where K is number of buckets"
    },
    "commonMistakes": "Using a fixed non-prime size like 1000 which causes severe clustering if input keys share common factors (like multiples of 10).",
    "relatedQuestionIds": [
      "hash-set-impl",
      "two-sum"
    ],
    "tracer": "hash-map-chaining",
    "sampleInput": "put(1, 1), put(2, 2), get(1), get(3), put(2, 1), get(2), remove(2), get(2)"
  },
  {
    "id": "hash-set-impl",
    "title": "Design Hash Set",
    "difficulty": "Easy",
    "leetcode": {
      "number": 705,
      "url": "https://leetcode.com/problems/design-hashset/"
    },
    "description": "Design a HashSet without using built-in hash set libraries. Implement add(key), contains(key), and remove(key).",
    "constraints": "0 <= key <= 10^6; at most 10^4 calls.",
    "examples": [
      {
        "input": "add(1), add(2), contains(1), contains(3), add(2), contains(2), remove(2), contains(2)",
        "output": "[true, false, true, false]",
        "why": "1 exists, 3 does not, 2 was added then removed."
      }
    ],
    "approach": {
      "name": "Chaining Hash Set",
      "idea": "Maintain buckets with prime modulus. Add checks for uniqueness before inserting.",
      "timeComplexity": "O(1) average",
      "spaceComplexity": "O(N)"
    },
    "commonMistakes": "Allowing duplicate keys to be added, violating set semantics.",
    "relatedQuestionIds": [
      "hash-map-chaining",
      "contains-duplicate-ii"
    ],
    "tracer": "hash-set-impl",
    "sampleInput": "add(1), add(2), contains(1), contains(3), add(2), contains(2), remove(2), contains(2)"
  },
  {
    "id": "two-sum",
    "title": "Two Sum",
    "difficulty": "Easy",
    "leetcode": {
      "number": 1,
      "url": "https://leetcode.com/problems/two-sum/"
    },
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. Each input has exactly one solution.",
    "constraints": "2 <= nums.length <= 10^4; -10^9 <= nums[i] <= 10^9.",
    "examples": [
      {
        "input": "nums = [2,7,11,15], target = 9",
        "output": "[0, 1]",
        "why": "nums[0] + nums[1] == 2 + 7 == 9. We return [0, 1]."
      }
    ],
    "approach": {
      "name": "One-Pass Hash Map (Complement Lookup)",
      "idea": "For each number x at index i, compute complement = target - x. If complement is already in hash map, we found our pair! Otherwise record x -> i in map.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "commonMistakes": "Populating the entire map first before searching, which can accidentally match a number with itself if target == 2 * num.",
    "relatedQuestionIds": [
      "subarray-sum-equals-k",
      "group-anagrams"
    ],
    "tracer": "two-sum",
    "sampleInput": "nums = [2,7,11,15], target = 9"
  },
  {
    "id": "group-anagrams",
    "title": "Group Anagrams",
    "difficulty": "Medium",
    "leetcode": {
      "number": 49,
      "url": "https://leetcode.com/problems/group-anagrams/"
    },
    "description": "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
    "constraints": "1 <= strs.length <= 10^4; 0 <= strs[i].length <= 100.",
    "examples": [
      {
        "input": "strs = ['eat','tea','tan','ate','nat','bat']",
        "output": "[['bat'], ['tan', 'nat'], ['eat', 'tea', 'ate']]",
        "why": "'eat', 'tea', and 'ate' share the exact same sorted letters 'aet'."
      }
    ],
    "approach": {
      "name": "Categorize by Sorted String Key",
      "idea": "Two strings are anagrams if and only if their sorted strings are identical. Use the sorted string as a hash map key.",
      "timeComplexity": "O(N * K log K) where K is max string length",
      "spaceComplexity": "O(N * K)"
    },
    "commonMistakes": "Using sum of ASCII character values as the hash key, which produces false positive collisions (e.g. 'ac' and 'bb' share the same ASCII sum).",
    "relatedQuestionIds": [
      "valid-anagram",
      "two-sum"
    ],
    "tracer": "group-anagrams",
    "sampleInput": "strs = ['eat','tea','tan','ate','nat','bat']"
  },
  {
    "id": "valid-anagram",
    "title": "Valid Anagram",
    "difficulty": "Easy",
    "leetcode": {
      "number": 242,
      "url": "https://leetcode.com/problems/valid-anagram/"
    },
    "description": "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
    "constraints": "1 <= s.length, t.length <= 5 * 10^4; s and t consist of lowercase English letters.",
    "examples": [
      {
        "input": "s = 'anagram', t = 'nagaram'",
        "output": "true",
        "why": "Both strings contain 3 'a's, 1 'n', 1 'g', 1 'r', and 1 'm'."
      }
    ],
    "approach": {
      "name": "Frequency Counting Array",
      "idea": "If lengths differ, return false. Maintain a 26-element array: increment count for characters in s, decrement for t. If all counts are zero, return true.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1) - alphabet size 26"
    },
    "commonMistakes": "Sorting strings in O(N log N) time when linear O(N) frequency counting is faster and cleaner.",
    "relatedQuestionIds": [
      "group-anagrams",
      "first-unique-char"
    ],
    "tracer": "valid-anagram",
    "sampleInput": "s = 'anagram', t = 'nagaram'"
  },
  {
    "id": "longest-consecutive-sequence",
    "title": "Longest Consecutive Sequence",
    "difficulty": "Medium",
    "leetcode": {
      "number": 128,
      "url": "https://leetcode.com/problems/longest-consecutive-sequence/"
    },
    "description": "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence in O(N) runtime.",
    "constraints": "0 <= nums.length <= 10^5; -10^9 <= nums[i] <= 10^9.",
    "examples": [
      {
        "input": "nums = [100, 4, 200, 1, 3, 2]",
        "output": "4",
        "why": "The longest consecutive elements sequence is [1, 2, 3, 4]. Its length is 4."
      }
    ],
    "approach": {
      "name": "Hash Set Intelligent Start-of-Streak Search",
      "idea": "Place all numbers in a HashSet for O(1) lookups. A number x is the start of a sequence ONLY if (x - 1) is NOT in the set. Only count streaks starting from these sequence roots.",
      "timeComplexity": "O(N) - each element is visited at most twice",
      "spaceComplexity": "O(N)"
    },
    "commonMistakes": "Starting a while loop for every number without checking if num - 1 exists, resulting in worst-case O(N^2) time.",
    "relatedQuestionIds": [
      "two-sum",
      "subarray-sum-equals-k"
    ],
    "tracer": "longest-consecutive-sequence",
    "sampleInput": "nums = [100, 4, 200, 1, 3, 2]"
  },
  {
    "id": "subarray-sum-equals-k",
    "title": "Subarray Sum Equals K",
    "difficulty": "Medium",
    "leetcode": {
      "number": 560,
      "url": "https://leetcode.com/problems/subarray-sum-equals-k/"
    },
    "description": "Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.",
    "constraints": "1 <= nums.length <= 2 * 10^4; -1000 <= nums[i] <= 1000; -10^7 <= k <= 10^7.",
    "examples": [
      {
        "input": "nums = [1, 1, 1], k = 2",
        "output": "2",
        "why": "Subarrays [1, 1] at indices [0..1] and [1..2] both sum to 2."
      }
    ],
    "approach": {
      "name": "Prefix Sum with Frequency Map",
      "idea": "Sum(i..j) = PrefixSum(j) - PrefixSum(i-1). We want PrefixSum(j) - PrefixSum(i-1) = k, which means PrefixSum(i-1) = PrefixSum(j) - k. Store prefix sum counts in a hash map.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "commonMistakes": "Trying to use two-pointer sliding window, which fails because the array contains negative numbers where expanding the window can decrease the sum.",
    "relatedQuestionIds": [
      "two-sum",
      "longest-consecutive-sequence"
    ],
    "tracer": "subarray-sum-equals-k",
    "sampleInput": "nums = [1, 1, 1], k = 2"
  },
  {
    "id": "contains-duplicate-ii",
    "title": "Contains Duplicate II (Sliding Window Hash Set)",
    "difficulty": "Easy",
    "leetcode": {
      "number": 219,
      "url": "https://leetcode.com/problems/contains-duplicate-ii/"
    },
    "description": "Given an integer array nums and an integer k, return true if there are two distinct indices i and j such that nums[i] == nums[j] and abs(i - j) <= k.",
    "constraints": "1 <= nums.length <= 10^5; 0 <= k <= 10^5.",
    "examples": [
      {
        "input": "nums = [1, 2, 3, 1], k = 3",
        "output": "true",
        "why": "nums[0] == nums[3] == 1, and abs(0 - 3) = 3 <= k."
      }
    ],
    "approach": {
      "name": "Sliding Window Set",
      "idea": "Maintain a hash set of at most k elements. If current number is already in set, return true. Otherwise add it. If set size exceeds k, remove oldest element.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(min(N, k))"
    },
    "commonMistakes": "Allowing set size to grow unboundedly instead of evicting nums[i - k], causing unnecessary space consumption.",
    "relatedQuestionIds": [
      "two-sum",
      "hash-set-impl"
    ],
    "tracer": "contains-duplicate-ii",
    "sampleInput": "nums = [1, 2, 3, 1], k = 3"
  },
  {
    "id": "insert-delete-getrandom",
    "title": "Insert Delete GetRandom O(1)",
    "difficulty": "Medium",
    "leetcode": {
      "number": 380,
      "url": "https://leetcode.com/problems/insert-delete-getrandom-o1/"
    },
    "description": "Implement the RandomizedSet class supporting insert(val), remove(val), and getRandom() each in average O(1) time.",
    "constraints": "-2^31 <= val <= 2^31 - 1; at most 2 * 10^5 calls.",
    "examples": [
      {
        "input": "insert(1), remove(2), insert(2), getRandom(), remove(1), insert(2), getRandom()",
        "output": "[true, false, true]",
        "why": "Random numbers are chosen with uniform probability from current elements."
      }
    ],
    "approach": {
      "name": "Dynamic Array + Hash Map Index Lookup",
      "idea": "An array allows O(1) getRandom by index, but O(N) arbitrary deletion. A hash map allows O(1) lookup. To delete in O(1): swap the target element with the last element in the array, pop the last element, and update the moved element's index in the map.",
      "timeComplexity": "O(1) average for all methods",
      "spaceComplexity": "O(N)"
    },
    "commonMistakes": "Trying to remove directly from the middle of the array with array.remove(val), which takes O(N) time.",
    "relatedQuestionIds": [
      "two-sum",
      "hash-map-chaining"
    ],
    "tracer": "insert-delete-getrandom",
    "sampleInput": "insert(1), remove(2), insert(2), getRandom(), remove(1), insert(2), getRandom()"
  }
]
  };
})(typeof window !== 'undefined' ? window : global);
