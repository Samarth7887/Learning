/**
 * SynapseCS Language-Specific Implementation: CPP - hashing
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['cpp'] = window.DSA_LANG_CODE['cpp'] || {};
  window.DSA_LANG_CODE['cpp']['hashing'] = [
  {
    "id": "hash-map-chaining",
    "code": [
      {
        "text": "#include <vector>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <list>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "using namespace std;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "class MyHashMap {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "    static const int SIZE = 1009;",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    list<pair<int,int>> buckets[SIZE];",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "public:",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    void put(int key, int value) {",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        int idx = key % SIZE;",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        for (auto& p : buckets[idx]) {",
        "tag": "loop",
        "lineNum": 11
      },
      {
        "text": "            if (p.first == key) { p.second = value; return; }",
        "tag": "branch",
        "lineNum": 12
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        buckets[idx].push_back({key, value});",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    int get(int key) {",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "        int idx = key % SIZE;",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "        for (auto& p : buckets[idx]) {",
        "tag": "loop",
        "lineNum": 18
      },
      {
        "text": "            if (p.first == key) return p.second;",
        "tag": "branch",
        "lineNum": 19
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "        return -1;",
        "tag": "return",
        "lineNum": 21
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "    void remove(int key) {",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "        int idx = key % SIZE;",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "        for (auto it = buckets[idx].begin(); it != buckets[idx].end(); ++it) {",
        "tag": "loop",
        "lineNum": 25
      },
      {
        "text": "            if (it->first == key) { buckets[idx].erase(it); return; }",
        "tag": "branch",
        "lineNum": 26
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 28
      },
      {
        "text": "};",
        "tag": "exec",
        "lineNum": 29
      }
    ],
    "rawCode": "#include <vector>\n#include <list>\nusing namespace std;\n\nclass MyHashMap {\n    static const int SIZE = 1009;\n    list<pair<int,int>> buckets[SIZE];\npublic:\n    void put(int key, int value) {\n        int idx = key % SIZE;\n        for (auto& p : buckets[idx]) {\n            if (p.first == key) { p.second = value; return; }\n        }\n        buckets[idx].push_back({key, value});\n    }\n    int get(int key) {\n        int idx = key % SIZE;\n        for (auto& p : buckets[idx]) {\n            if (p.first == key) return p.second;\n        }\n        return -1;\n    }\n    void remove(int key) {\n        int idx = key % SIZE;\n        for (auto it = buckets[idx].begin(); it != buckets[idx].end(); ++it) {\n            if (it->first == key) { buckets[idx].erase(it); return; }\n        }\n    }\n};",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "comment": "Executes tagged statement [comment] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "def": "Executes tagged statement [def] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "hash-set-impl",
    "code": [
      {
        "text": "#include <vector>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <list>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "#include <algorithm>",
        "tag": "comment",
        "lineNum": 3
      },
      {
        "text": "using namespace std;",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "class MyHashSet {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "    static const int SIZE = 1009;",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    list<int> buckets[SIZE];",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "public:",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    void add(int key) {",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        int idx = key % SIZE;",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "        if (find(buckets[idx].begin(), buckets[idx].end(), key) == buckets[idx].end()) {",
        "tag": "branch",
        "lineNum": 12
      },
      {
        "text": "            buckets[idx].push_back(key);",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    void remove(int key) {",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "        int idx = key % SIZE;",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "        buckets[idx].remove(key);",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "    bool contains(int key) {",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "        int idx = key % SIZE;",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "        return find(buckets[idx].begin(), buckets[idx].end(), key) != buckets[idx].end();",
        "tag": "return",
        "lineNum": 22
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "};",
        "tag": "exec",
        "lineNum": 24
      }
    ],
    "rawCode": "#include <vector>\n#include <list>\n#include <algorithm>\nusing namespace std;\n\nclass MyHashSet {\n    static const int SIZE = 1009;\n    list<int> buckets[SIZE];\npublic:\n    void add(int key) {\n        int idx = key % SIZE;\n        if (find(buckets[idx].begin(), buckets[idx].end(), key) == buckets[idx].end()) {\n            buckets[idx].push_back(key);\n        }\n    }\n    void remove(int key) {\n        int idx = key % SIZE;\n        buckets[idx].remove(key);\n    }\n    bool contains(int key) {\n        int idx = key % SIZE;\n        return find(buckets[idx].begin(), buckets[idx].end(), key) != buckets[idx].end();\n    }\n};",
    "explanations": {
      "return": "Return computed solution result.",
      "comment": "Executes tagged statement [comment] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "def": "Executes tagged statement [def] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "two-sum",
    "code": [
      {
        "text": "#include <vector>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <unordered_map>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "using namespace std;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "vector<int> twoSum(vector<int>& nums, int target) {",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    unordered_map<int, int> seen;",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    for (int i = 0; i < (int)nums.size(); i++) {",
        "tag": "loop",
        "lineNum": 7
      },
      {
        "text": "        int comp = target - nums[i];",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        if (seen.count(comp)) return {seen[comp], i};",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "        seen[nums[i]] = i;",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    return {};",
        "tag": "return",
        "lineNum": 12
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 13
      }
    ],
    "rawCode": "#include <vector>\n#include <unordered_map>\nusing namespace std;\n\nvector<int> twoSum(vector<int>& nums, int target) {\n    unordered_map<int, int> seen;\n    for (int i = 0; i < (int)nums.size(); i++) {\n        int comp = target - nums[i];\n        if (seen.count(comp)) return {seen[comp], i};\n        seen[nums[i]] = i;\n    }\n    return {};\n}",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "comment": "Executes tagged statement [comment] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "group-anagrams",
    "code": [
      {
        "text": "#include <vector>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <string>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "#include <unordered_map>",
        "tag": "comment",
        "lineNum": 3
      },
      {
        "text": "#include <algorithm>",
        "tag": "comment",
        "lineNum": 4
      },
      {
        "text": "using namespace std;",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "vector<vector<string>> groupAnagrams(vector<string>& strs) {",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    unordered_map<string, vector<string>> map;",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    for (string& s : strs) {",
        "tag": "loop",
        "lineNum": 9
      },
      {
        "text": "        string key = s;",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        sort(key.begin(), key.end());",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "        map[key].push_back(s);",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    vector<vector<string>> res;",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    for (auto& pair : map) res.push_back(pair.second);",
        "tag": "loop",
        "lineNum": 15
      },
      {
        "text": "    return res;",
        "tag": "return",
        "lineNum": 16
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 17
      }
    ],
    "rawCode": "#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\nusing namespace std;\n\nvector<vector<string>> groupAnagrams(vector<string>& strs) {\n    unordered_map<string, vector<string>> map;\n    for (string& s : strs) {\n        string key = s;\n        sort(key.begin(), key.end());\n        map[key].push_back(s);\n    }\n    vector<vector<string>> res;\n    for (auto& pair : map) res.push_back(pair.second);\n    return res;\n}",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "comment": "Executes tagged statement [comment] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "valid-anagram",
    "code": [
      {
        "text": "#include <string>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <vector>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "using namespace std;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "bool isAnagram(string s, string t) {",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    if (s.size() != t.size()) return false;",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "    vector<int> counts(26, 0);",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    for (int i = 0; i < (int)s.size(); i++) {",
        "tag": "loop",
        "lineNum": 8
      },
      {
        "text": "        counts[s[i] - 'a']++;",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        counts[t[i] - 'a']--;",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    for (int c : counts) if (c != 0) return false;",
        "tag": "loop",
        "lineNum": 12
      },
      {
        "text": "    return true;",
        "tag": "return",
        "lineNum": 13
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 14
      }
    ],
    "rawCode": "#include <string>\n#include <vector>\nusing namespace std;\n\nbool isAnagram(string s, string t) {\n    if (s.size() != t.size()) return false;\n    vector<int> counts(26, 0);\n    for (int i = 0; i < (int)s.size(); i++) {\n        counts[s[i] - 'a']++;\n        counts[t[i] - 'a']--;\n    }\n    for (int c : counts) if (c != 0) return false;\n    return true;\n}",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "comment": "Executes tagged statement [comment] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "longest-consecutive-sequence",
    "code": [
      {
        "text": "#include <vector>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <unordered_set>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "#include <algorithm>",
        "tag": "comment",
        "lineNum": 3
      },
      {
        "text": "using namespace std;",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "int longestConsecutive(vector<int>& nums) {",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    unordered_set<int> set(nums.begin(), nums.end());",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    int longest = 0;",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "    for (int n : set) {",
        "tag": "loop",
        "lineNum": 9
      },
      {
        "text": "        if (!set.count(n - 1)) {",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "            int curr = n, streak = 1;",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "            while (set.count(curr + 1)) { curr++; streak++; }",
        "tag": "loop",
        "lineNum": 12
      },
      {
        "text": "            longest = max(longest, streak);",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    return longest;",
        "tag": "return",
        "lineNum": 16
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 17
      }
    ],
    "rawCode": "#include <vector>\n#include <unordered_set>\n#include <algorithm>\nusing namespace std;\n\nint longestConsecutive(vector<int>& nums) {\n    unordered_set<int> set(nums.begin(), nums.end());\n    int longest = 0;\n    for (int n : set) {\n        if (!set.count(n - 1)) {\n            int curr = n, streak = 1;\n            while (set.count(curr + 1)) { curr++; streak++; }\n            longest = max(longest, streak);\n        }\n    }\n    return longest;\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "comment": "Executes tagged statement [comment] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "subarray-sum-equals-k",
    "code": [
      {
        "text": "#include <vector>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <unordered_map>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "using namespace std;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "int subarraySum(vector<int>& nums, int k) {",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    unordered_map<int, int> map;",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    map[0] = 1;",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    int sum = 0, count = 0;",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "    for (int n : nums) {",
        "tag": "loop",
        "lineNum": 9
      },
      {
        "text": "        sum += n;",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        if (map.count(sum - k)) count += map[sum - k];",
        "tag": "branch",
        "lineNum": 11
      },
      {
        "text": "        map[sum]++;",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    return count;",
        "tag": "return",
        "lineNum": 14
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 15
      }
    ],
    "rawCode": "#include <vector>\n#include <unordered_map>\nusing namespace std;\n\nint subarraySum(vector<int>& nums, int k) {\n    unordered_map<int, int> map;\n    map[0] = 1;\n    int sum = 0, count = 0;\n    for (int n : nums) {\n        sum += n;\n        if (map.count(sum - k)) count += map[sum - k];\n        map[sum]++;\n    }\n    return count;\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "comment": "Executes tagged statement [comment] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "contains-duplicate-ii",
    "code": [
      {
        "text": "#include <vector>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <unordered_set>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "using namespace std;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "bool containsNearbyDuplicate(vector<int>& nums, int k) {",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    unordered_set<int> set;",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    for (int i = 0; i < (int)nums.size(); i++) {",
        "tag": "loop",
        "lineNum": 7
      },
      {
        "text": "        if (set.count(nums[i])) return true;",
        "tag": "branch",
        "lineNum": 8
      },
      {
        "text": "        set.insert(nums[i]);",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        if ((int)set.size() > k) set.erase(nums[i - k]);",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    return false;",
        "tag": "return",
        "lineNum": 12
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 13
      }
    ],
    "rawCode": "#include <vector>\n#include <unordered_set>\nusing namespace std;\n\nbool containsNearbyDuplicate(vector<int>& nums, int k) {\n    unordered_set<int> set;\n    for (int i = 0; i < (int)nums.size(); i++) {\n        if (set.count(nums[i])) return true;\n        set.insert(nums[i]);\n        if ((int)set.size() > k) set.erase(nums[i - k]);\n    }\n    return false;\n}",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "comment": "Executes tagged statement [comment] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "insert-delete-getrandom",
    "code": [
      {
        "text": "#include <vector>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <unordered_map>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "#include <cstdlib>",
        "tag": "comment",
        "lineNum": 3
      },
      {
        "text": "using namespace std;",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "class RandomizedSet {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "    vector<int> nums;",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    unordered_map<int, int> map;",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "public:",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    bool insert(int val) {",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        if (map.count(val)) return false;",
        "tag": "branch",
        "lineNum": 11
      },
      {
        "text": "        map[val] = nums.size();",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "        nums.push_back(val);",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        return true;",
        "tag": "return",
        "lineNum": 14
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    bool remove(int val) {",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "        if (!map.count(val)) return false;",
        "tag": "branch",
        "lineNum": 17
      },
      {
        "text": "        int idx = map[val];",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "        int last = nums.back();",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "        nums[idx] = last;",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "        map[last] = idx;",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "        nums.pop_back();",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "        map.erase(val);",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "        return true;",
        "tag": "return",
        "lineNum": 24
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "    int getRandom() {",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "        return nums[rand() % nums.size()];",
        "tag": "return",
        "lineNum": 27
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 28
      },
      {
        "text": "};",
        "tag": "exec",
        "lineNum": 29
      }
    ],
    "rawCode": "#include <vector>\n#include <unordered_map>\n#include <cstdlib>\nusing namespace std;\n\nclass RandomizedSet {\n    vector<int> nums;\n    unordered_map<int, int> map;\npublic:\n    bool insert(int val) {\n        if (map.count(val)) return false;\n        map[val] = nums.size();\n        nums.push_back(val);\n        return true;\n    }\n    bool remove(int val) {\n        if (!map.count(val)) return false;\n        int idx = map[val];\n        int last = nums.back();\n        nums[idx] = last;\n        map[last] = idx;\n        nums.pop_back();\n        map.erase(val);\n        return true;\n    }\n    int getRandom() {\n        return nums[rand() % nums.size()];\n    }\n};",
    "explanations": {
      "return": "Return computed solution result.",
      "comment": "Executes tagged statement [comment] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "def": "Executes tagged statement [def] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  }
];
})(typeof window !== 'undefined' ? window : global);
