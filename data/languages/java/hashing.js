/**
 * SynapseCS Language-Specific Implementation: JAVA - Hashing & Hash Tables
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['java'] = window.DSA_LANG_CODE['java'] || {};
  window.DSA_LANG_CODE['java']['hashing'] = [
  {
    "id": "hash-map-chaining",
    "code": [
      {
        "text": "import java.util.*;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "class MyHashMap {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    static class Node { int k, v; Node(int k, int v) { this.k = k; this.v = v; } }",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    private final int SIZE = 1009;",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    private List<Node>[] buckets = new LinkedList[SIZE];",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    public MyHashMap() {",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        for (int i = 0; i < SIZE; i++) buckets[i] = new LinkedList<>();",
        "tag": "loop",
        "lineNum": 9
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    public void put(int key, int value) {",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "        int idx = key % SIZE;",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "        for (Node n : buckets[idx]) {",
        "tag": "loop",
        "lineNum": 13
      },
      {
        "text": "            if (n.k == key) { n.v = value; return; }",
        "tag": "branch",
        "lineNum": 14
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "        buckets[idx].add(new Node(key, value));",
        "tag": "init",
        "lineNum": 16
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "    public int get(int key) {",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "        int idx = key % SIZE;",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "        for (Node n : buckets[idx]) {",
        "tag": "loop",
        "lineNum": 20
      },
      {
        "text": "            if (n.k == key) return n.v;",
        "tag": "branch",
        "lineNum": 21
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "        return -1;",
        "tag": "return",
        "lineNum": 23
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "    public void remove(int key) {",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "        int idx = key % SIZE;",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "        buckets[idx].removeIf(n -> n.k == key);",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 28
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 29
      }
    ],
    "rawCode": "import java.util.*;\n\nclass MyHashMap {\n    static class Node { int k, v; Node(int k, int v) { this.k = k; this.v = v; } }\n    private final int SIZE = 1009;\n    private List<Node>[] buckets = new LinkedList[SIZE];\n\n    public MyHashMap() {\n        for (int i = 0; i < SIZE; i++) buckets[i] = new LinkedList<>();\n    }\n    public void put(int key, int value) {\n        int idx = key % SIZE;\n        for (Node n : buckets[idx]) {\n            if (n.k == key) { n.v = value; return; }\n        }\n        buckets[idx].add(new Node(key, value));\n    }\n    public int get(int key) {\n        int idx = key % SIZE;\n        for (Node n : buckets[idx]) {\n            if (n.k == key) return n.v;\n        }\n        return -1;\n    }\n    public void remove(int key) {\n        int idx = key % SIZE;\n        buckets[idx].removeIf(n -> n.k == key);\n    }\n}",
    "explanations": {
      "step_1": "Initialize 1009 bucket arrays to spread hashes evenly using prime modulo.",
      "step_2": "Hash function computes array index: key % size.",
      "step_3": "Put checks if key already exists to update value; otherwise chains new key-value pair to bucket.",
      "step_4": "Get hashes key and traverses bucket chain to find matching key.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "hash-set-impl",
    "code": [
      {
        "text": "import java.util.*;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "class MyHashSet {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    private final int SIZE = 1009;",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    private List<Integer>[] buckets = new LinkedList[SIZE];",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    public MyHashSet() {",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "        for (int i = 0; i < SIZE; i++) buckets[i] = new LinkedList<>();",
        "tag": "loop",
        "lineNum": 8
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    public void add(int key) {",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        int idx = key % SIZE;",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "        if (!buckets[idx].contains(key)) buckets[idx].add(key);",
        "tag": "branch",
        "lineNum": 12
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    public void remove(int key) {",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "        int idx = key % SIZE;",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "        buckets[idx].remove((Integer)key);",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "    public boolean contains(int key) {",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "        return buckets[key % SIZE].contains(key);",
        "tag": "return",
        "lineNum": 19
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 21
      }
    ],
    "rawCode": "import java.util.*;\n\nclass MyHashSet {\n    private final int SIZE = 1009;\n    private List<Integer>[] buckets = new LinkedList[SIZE];\n\n    public MyHashSet() {\n        for (int i = 0; i < SIZE; i++) buckets[i] = new LinkedList<>();\n    }\n    public void add(int key) {\n        int idx = key % SIZE;\n        if (!buckets[idx].contains(key)) buckets[idx].add(key);\n    }\n    public void remove(int key) {\n        int idx = key % SIZE;\n        buckets[idx].remove((Integer)key);\n    }\n    public boolean contains(int key) {\n        return buckets[key % SIZE].contains(key);\n    }\n}",
    "explanations": {
      "step_1": "Add checks if key is already present in bucket to guarantee set uniqueness.",
      "step_2": "Remove deletes key from bucket if present.",
      "step_3": "Contains hashes key and performs linear search on small bucket list.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "two-sum",
    "code": [
      {
        "text": "import java.util.*;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "class Solution {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    public int[] twoSum(int[] nums, int target) {",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "        Map<Integer, Integer> seen = new HashMap<>();",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "        for (int i = 0; i < nums.length; i++) {",
        "tag": "loop",
        "lineNum": 6
      },
      {
        "text": "            int comp = target - nums[i];",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "            if (seen.containsKey(comp)) return new int[]{seen.get(comp), i};",
        "tag": "branch",
        "lineNum": 8
      },
      {
        "text": "            seen.put(nums[i], i);",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        return new int[]{};",
        "tag": "return",
        "lineNum": 11
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 13
      }
    ],
    "rawCode": "import java.util.*;\n\nclass Solution {\n    public int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> seen = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int comp = target - nums[i];\n            if (seen.containsKey(comp)) return new int[]{seen.get(comp), i};\n            seen.put(nums[i], i);\n        }\n        return new int[]{};\n    }\n}",
    "explanations": {
      "step_1": "Initialize hash map to store previously seen numbers and their indices.",
      "step_2": "Calculate complement needed to reach target: target - num.",
      "step_3": "If complement exists in map, return stored index and current index i.",
      "step_4": "Otherwise store current number and index in hash map for future lookups.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "group-anagrams",
    "code": [
      {
        "text": "import java.util.*;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "class Solution {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    public List<List<String>> groupAnagrams(String[] strs) {",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "        Map<String, List<String>> map = new HashMap<>();",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "        for (String s : strs) {",
        "tag": "loop",
        "lineNum": 6
      },
      {
        "text": "            char[] chars = s.toCharArray();",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "            Arrays.sort(chars);",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "            String key = new String(chars);",
        "tag": "init",
        "lineNum": 9
      },
      {
        "text": "            map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);",
        "tag": "init",
        "lineNum": 10
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "        return new ArrayList<>(map.values());",
        "tag": "return",
        "lineNum": 12
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 14
      }
    ],
    "rawCode": "import java.util.*;\n\nclass Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        Map<String, List<String>> map = new HashMap<>();\n        for (String s : strs) {\n            char[] chars = s.toCharArray();\n            Arrays.sort(chars);\n            String key = new String(chars);\n            map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);\n        }\n        return new ArrayList<>(map.values());\n    }\n}",
    "explanations": {
      "step_1": "Create hash map mapping canonical sorted key to list of anagrams.",
      "step_2": "Sort characters of each word to produce canonical signature (e.g. 'ate' -> 'aet').",
      "step_3": "Return all grouped anagram arrays from the hash map.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "valid-anagram",
    "code": [
      {
        "text": "class Solution {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    public boolean isAnagram(String s, String t) {",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "        if (s.length() != t.length()) return false;",
        "tag": "branch",
        "lineNum": 3
      },
      {
        "text": "        int[] counts = new int[26];",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "        for (int i = 0; i < s.length(); i++) {",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "            counts[s.charAt(i) - 'a']++;",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "            counts[t.charAt(i) - 'a']--;",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        for (int c : counts) if (c != 0) return false;",
        "tag": "loop",
        "lineNum": 9
      },
      {
        "text": "        return true;",
        "tag": "return",
        "lineNum": 10
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 12
      }
    ],
    "rawCode": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        if (s.length() != t.length()) return false;\n        int[] counts = new int[26];\n        for (int i = 0; i < s.length(); i++) {\n            counts[s.charAt(i) - 'a']++;\n            counts[t.charAt(i) - 'a']--;\n        }\n        for (int c : counts) if (c != 0) return false;\n        return true;\n    }\n}",
    "explanations": {
      "step_1": "Early exit: strings with different lengths cannot be anagrams.",
      "step_2": "Increment bucket for characters in s and decrement for characters in t.",
      "step_3": "Verify every bucket returned to exactly 0.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "longest-consecutive-sequence",
    "code": [
      {
        "text": "import java.util.*;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "class Solution {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    public int longestConsecutive(int[] nums) {",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "        Set<Integer> set = new HashSet<>();",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "        for (int n : nums) set.add(n);",
        "tag": "loop",
        "lineNum": 6
      },
      {
        "text": "        int longest = 0;",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "        for (int n : set) {",
        "tag": "loop",
        "lineNum": 8
      },
      {
        "text": "            if (!set.contains(n - 1)) {",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "                int curr = n, streak = 1;",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "                while (set.contains(curr + 1)) { curr++; streak++; }",
        "tag": "loop",
        "lineNum": 11
      },
      {
        "text": "                longest = Math.max(longest, streak);",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "            }",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "        return longest;",
        "tag": "return",
        "lineNum": 15
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 17
      }
    ],
    "rawCode": "import java.util.*;\n\nclass Solution {\n    public int longestConsecutive(int[] nums) {\n        Set<Integer> set = new HashSet<>();\n        for (int n : nums) set.add(n);\n        int longest = 0;\n        for (int n : set) {\n            if (!set.contains(n - 1)) {\n                int curr = n, streak = 1;\n                while (set.contains(curr + 1)) { curr++; streak++; }\n                longest = Math.max(longest, streak);\n            }\n        }\n        return longest;\n    }\n}",
    "explanations": {
      "step_1": "Convert array to hash set for O(1) membership checks.",
      "step_2": "Crucial optimization: only attempt sequence expansion if num - 1 is absent, ensuring we only start from sequence heads.",
      "step_3": "Count consecutive numbers in set until gap is reached; update global longest.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "subarray-sum-equals-k",
    "code": [
      {
        "text": "import java.util.*;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "class Solution {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    public int subarraySum(int[] nums, int k) {",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "        Map<Integer, Integer> map = new HashMap<>();",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "        map.put(0, 1);",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "        int sum = 0, count = 0;",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "        for (int n : nums) {",
        "tag": "loop",
        "lineNum": 8
      },
      {
        "text": "            sum += n;",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "            count += map.getOrDefault(sum - k, 0);",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "            map.put(sum, map.getOrDefault(sum, 0) + 1);",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "        return count;",
        "tag": "return",
        "lineNum": 13
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 15
      }
    ],
    "rawCode": "import java.util.*;\n\nclass Solution {\n    public int subarraySum(int[] nums, int k) {\n        Map<Integer, Integer> map = new HashMap<>();\n        map.put(0, 1);\n        int sum = 0, count = 0;\n        for (int n : nums) {\n            sum += n;\n            count += map.getOrDefault(sum - k, 0);\n            map.put(sum, map.getOrDefault(sum, 0) + 1);\n        }\n        return count;\n    }\n}",
    "explanations": {
      "step_1": "Base case {0: 1}: handles subarrays starting from index 0 where curr_sum equals k exactly.",
      "step_2": "Accumulate current running prefix sum and calculate required previous prefix sum: curr_sum - k.",
      "step_3": "Add occurrences of needed prefix sum to count, then record curr_sum in map.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "contains-duplicate-ii",
    "code": [
      {
        "text": "import java.util.*;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "class Solution {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    public boolean containsNearbyDuplicate(int[] nums, int k) {",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "        Set<Integer> set = new HashSet<>();",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "        for (int i = 0; i < nums.length; i++) {",
        "tag": "loop",
        "lineNum": 6
      },
      {
        "text": "            if (set.contains(nums[i])) return true;",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "            set.add(nums[i]);",
        "tag": "mutate",
        "lineNum": 8
      },
      {
        "text": "            if (set.size() > k) set.remove(nums[i - k]);",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        return false;",
        "tag": "return",
        "lineNum": 11
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 13
      }
    ],
    "rawCode": "import java.util.*;\n\nclass Solution {\n    public boolean containsNearbyDuplicate(int[] nums, int k) {\n        Set<Integer> set = new HashSet<>();\n        for (int i = 0; i < nums.length; i++) {\n            if (set.contains(nums[i])) return true;\n            set.add(nums[i]);\n            if (set.size() > k) set.remove(nums[i - k]);\n        }\n        return false;\n    }\n}",
    "explanations": {
      "step_1": "Maintain a hash set holding elements in the active window of size k.",
      "step_2": "If current element is already in the window set, nearby duplicate exists; return true.",
      "step_3": "Add current element. If window exceeds k, evict the element that slid out: nums[i - k].",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "insert-delete-getrandom",
    "code": [
      {
        "text": "import java.util.*;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "class RandomizedSet {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    private List<Integer> nums = new ArrayList<>();",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "    private Map<Integer, Integer> map = new HashMap<>();",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "    private Random rand = new Random();",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    public boolean insert(int val) {",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        if (map.containsKey(val)) return false;",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "        map.put(val, nums.size());",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        nums.add(val);",
        "tag": "mutate",
        "lineNum": 11
      },
      {
        "text": "        return true;",
        "tag": "return",
        "lineNum": 12
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    public boolean remove(int val) {",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "        if (!map.containsKey(val)) return false;",
        "tag": "branch",
        "lineNum": 15
      },
      {
        "text": "        int idx = map.get(val);",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "        int last = nums.get(nums.size() - 1);",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "        nums.set(idx, last);",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "        map.put(last, idx);",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "        nums.remove(nums.size() - 1);",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "        map.remove(val);",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "        return true;",
        "tag": "return",
        "lineNum": 22
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "    public int getRandom() {",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "        return nums.get(rand.nextInt(nums.size()));",
        "tag": "return",
        "lineNum": 25
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 27
      }
    ],
    "rawCode": "import java.util.*;\n\nclass RandomizedSet {\n    private List<Integer> nums = new ArrayList<>();\n    private Map<Integer, Integer> map = new HashMap<>();\n    private Random rand = new Random();\n\n    public boolean insert(int val) {\n        if (map.containsKey(val)) return false;\n        map.put(val, nums.size());\n        nums.add(val);\n        return true;\n    }\n    public boolean remove(int val) {\n        if (!map.containsKey(val)) return false;\n        int idx = map.get(val);\n        int last = nums.get(nums.size() - 1);\n        nums.set(idx, last);\n        map.put(last, idx);\n        nums.remove(nums.size() - 1);\n        map.remove(val);\n        return true;\n    }\n    public int getRandom() {\n        return nums.get(rand.nextInt(nums.size()));\n    }\n}",
    "explanations": {
      "step_1": "Insert: map records val -> index in array; array appends val in O(1).",
      "step_2": "O(1) Deletion trick: swap target with last element, update moved element's map index, then pop array tail in O(1).",
      "step_3": "getRandom: generate random index in [0..len-1] and return array element in O(1).",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  }
];
})(typeof window !== 'undefined' ? window : global);
