/**
 * SynapseCS Language-Specific Implementation: PYTHON - Hashing & Hash Tables
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['python'] = window.DSA_LANG_CODE['python'] || {};
  window.DSA_LANG_CODE['python']['hashing'] = [
  {
    "id": "hash-map-chaining",
    "code": [
      {
        "text": "class MyHashMap:",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    def __init__(self):",
        "tag": "def",
        "lineNum": 2
      },
      {
        "text": "        self.size = 1009",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "        self.buckets = [[] for _ in range(self.size)]",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    def _hash(self, key):",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "        return key % self.size",
        "tag": "return",
        "lineNum": 7
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    def put(self, key: int, value: int) -> None:",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "        idx = self._hash(key)",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        for i, (k, v) in enumerate(self.buckets[idx]):",
        "tag": "loop",
        "lineNum": 11
      },
      {
        "text": "            if k == key:",
        "tag": "branch",
        "lineNum": 12
      },
      {
        "text": "                self.buckets[idx][i] = (key, value)",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "                return",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "        self.buckets[idx].append((key, value))",
        "tag": "mutate",
        "lineNum": 15
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "    def get(self, key: int) -> int:",
        "tag": "def",
        "lineNum": 17
      },
      {
        "text": "        idx = self._hash(key)",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "        for k, v in self.buckets[idx]:",
        "tag": "loop",
        "lineNum": 19
      },
      {
        "text": "            if k == key:",
        "tag": "branch",
        "lineNum": 20
      },
      {
        "text": "                return v",
        "tag": "return",
        "lineNum": 21
      },
      {
        "text": "        return -1",
        "tag": "return",
        "lineNum": 22
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "    def remove(self, key: int) -> None:",
        "tag": "def",
        "lineNum": 24
      },
      {
        "text": "        idx = self._hash(key)",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "        for i, (k, v) in enumerate(self.buckets[idx]):",
        "tag": "loop",
        "lineNum": 26
      },
      {
        "text": "            if k == key:",
        "tag": "branch",
        "lineNum": 27
      },
      {
        "text": "                del self.buckets[idx][i]",
        "tag": "exec",
        "lineNum": 28
      },
      {
        "text": "                return",
        "tag": "exec",
        "lineNum": 29
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 30
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 31
      },
      {
        "text": "hm = MyHashMap()",
        "tag": "exec",
        "lineNum": 32
      },
      {
        "text": "hm.put(1, 1)",
        "tag": "exec",
        "lineNum": 33
      },
      {
        "text": "hm.put(2, 2)",
        "tag": "exec",
        "lineNum": 34
      },
      {
        "text": "v1 = hm.get(1)",
        "tag": "exec",
        "lineNum": 35
      },
      {
        "text": "v2 = hm.get(3)",
        "tag": "exec",
        "lineNum": 36
      },
      {
        "text": "hm.put(2, 1)",
        "tag": "exec",
        "lineNum": 37
      },
      {
        "text": "v3 = hm.get(2)",
        "tag": "exec",
        "lineNum": 38
      },
      {
        "text": "hm.remove(2)",
        "tag": "exec",
        "lineNum": 39
      },
      {
        "text": "v4 = hm.get(2)",
        "tag": "exec",
        "lineNum": 40
      },
      {
        "text": "print([v1, v2, v3, v4])",
        "tag": "exec",
        "lineNum": 41
      }
    ],
    "rawCode": "class MyHashMap:\n    def __init__(self):\n        self.size = 1009\n        self.buckets = [[] for _ in range(self.size)]\n\n    def _hash(self, key):\n        return key % self.size\n\n    def put(self, key: int, value: int) -> None:\n        idx = self._hash(key)\n        for i, (k, v) in enumerate(self.buckets[idx]):\n            if k == key:\n                self.buckets[idx][i] = (key, value)\n                return\n        self.buckets[idx].append((key, value))\n\n    def get(self, key: int) -> int:\n        idx = self._hash(key)\n        for k, v in self.buckets[idx]:\n            if k == key:\n                return v\n        return -1\n\n    def remove(self, key: int) -> None:\n        idx = self._hash(key)\n        for i, (k, v) in enumerate(self.buckets[idx]):\n            if k == key:\n                del self.buckets[idx][i]\n                return\n\n# Test\nhm = MyHashMap()\nhm.put(1, 1)\nhm.put(2, 2)\nv1 = hm.get(1)\nv2 = hm.get(3)\nhm.put(2, 1)\nv3 = hm.get(2)\nhm.remove(2)\nv4 = hm.get(2)\nprint([v1, v2, v3, v4])",
    "explanations": {
      "step_1": "Initialize 1009 bucket arrays to spread hashes evenly using prime modulo.",
      "step_2": "Hash function computes array index: key % size.",
      "step_3": "Put checks if key already exists to update value; otherwise chains new key-value pair to bucket.",
      "step_4": "Get hashes key and traverses bucket chain to find matching key.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "hash-set-impl",
    "code": [
      {
        "text": "class MyHashSet:",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    def __init__(self):",
        "tag": "def",
        "lineNum": 2
      },
      {
        "text": "        self.size = 1009",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "        self.buckets = [[] for _ in range(self.size)]",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    def _hash(self, key):",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "        return key % self.size",
        "tag": "return",
        "lineNum": 7
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    def add(self, key: int) -> None:",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "        idx = self._hash(key)",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        if key not in self.buckets[idx]:",
        "tag": "branch",
        "lineNum": 11
      },
      {
        "text": "            self.buckets[idx].append(key)",
        "tag": "mutate",
        "lineNum": 12
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    def remove(self, key: int) -> None:",
        "tag": "def",
        "lineNum": 14
      },
      {
        "text": "        idx = self._hash(key)",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "        if key in self.buckets[idx]:",
        "tag": "branch",
        "lineNum": 16
      },
      {
        "text": "            self.buckets[idx].remove(key)",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "    def contains(self, key: int) -> bool:",
        "tag": "def",
        "lineNum": 19
      },
      {
        "text": "        idx = self._hash(key)",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "        return key in self.buckets[idx]",
        "tag": "return",
        "lineNum": 21
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 23
      },
      {
        "text": "hs = MyHashSet()",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "hs.add(1)",
        "tag": "mutate",
        "lineNum": 25
      },
      {
        "text": "hs.add(2)",
        "tag": "mutate",
        "lineNum": 26
      },
      {
        "text": "c1 = hs.contains(1)",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "c2 = hs.contains(3)",
        "tag": "exec",
        "lineNum": 28
      },
      {
        "text": "c3 = hs.contains(2)",
        "tag": "exec",
        "lineNum": 29
      },
      {
        "text": "hs.remove(2)",
        "tag": "exec",
        "lineNum": 30
      },
      {
        "text": "c4 = hs.contains(2)",
        "tag": "exec",
        "lineNum": 31
      },
      {
        "text": "print([c1, c2, c3, c4])",
        "tag": "exec",
        "lineNum": 32
      }
    ],
    "rawCode": "class MyHashSet:\n    def __init__(self):\n        self.size = 1009\n        self.buckets = [[] for _ in range(self.size)]\n\n    def _hash(self, key):\n        return key % self.size\n\n    def add(self, key: int) -> None:\n        idx = self._hash(key)\n        if key not in self.buckets[idx]:\n            self.buckets[idx].append(key)\n\n    def remove(self, key: int) -> None:\n        idx = self._hash(key)\n        if key in self.buckets[idx]:\n            self.buckets[idx].remove(key)\n\n    def contains(self, key: int) -> bool:\n        idx = self._hash(key)\n        return key in self.buckets[idx]\n\n# Test\nhs = MyHashSet()\nhs.add(1)\nhs.add(2)\nc1 = hs.contains(1)\nc2 = hs.contains(3)\nc3 = hs.contains(2)\nhs.remove(2)\nc4 = hs.contains(2)\nprint([c1, c2, c3, c4])",
    "explanations": {
      "step_1": "Add checks if key is already present in bucket to guarantee set uniqueness.",
      "step_2": "Remove deletes key from bucket if present.",
      "step_3": "Contains hashes key and performs linear search on small bucket list.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "two-sum",
    "code": [
      {
        "text": "def twoSum(nums, target):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    seen = {}  # val -> index",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    for i, num in enumerate(nums):",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "        complement = target - num",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "        if complement in seen:",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "            return [seen[complement], i]",
        "tag": "return",
        "lineNum": 6
      },
      {
        "text": "        seen[num] = i",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    return []",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 10
      },
      {
        "text": "print(twoSum([2, 7, 11, 15], 9))",
        "tag": "exec",
        "lineNum": 11
      }
    ],
    "rawCode": "def twoSum(nums, target):\n    seen = {}  # val -> index\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []\n\n# Test\nprint(twoSum([2, 7, 11, 15], 9))",
    "explanations": {
      "step_1": "Initialize hash map to store previously seen numbers and their indices.",
      "step_2": "Calculate complement needed to reach target: target - num.",
      "step_3": "If complement exists in map, return stored index and current index i.",
      "step_4": "Otherwise store current number and index in hash map for future lookups.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "group-anagrams",
    "code": [
      {
        "text": "from collections import defaultdict",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "def groupAnagrams(strs):",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    groups = defaultdict(list)",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    for s in strs:",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "        key = \"\".join(sorted(s))",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "        groups[key].append(s)",
        "tag": "mutate",
        "lineNum": 7
      },
      {
        "text": "    return sorted(list(groups.values()), key=len)",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 10
      },
      {
        "text": "print(groupAnagrams([\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]))",
        "tag": "exec",
        "lineNum": 11
      }
    ],
    "rawCode": "from collections import defaultdict\n\ndef groupAnagrams(strs):\n    groups = defaultdict(list)\n    for s in strs:\n        key = \"\".join(sorted(s))\n        groups[key].append(s)\n    return sorted(list(groups.values()), key=len)\n\n# Test\nprint(groupAnagrams([\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]))",
    "explanations": {
      "step_1": "Create hash map mapping canonical sorted key to list of anagrams.",
      "step_2": "Sort characters of each word to produce canonical signature (e.g. 'ate' -> 'aet').",
      "step_3": "Return all grouped anagram arrays from the hash map.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "valid-anagram",
    "code": [
      {
        "text": "def isAnagram(s: str, t: str) -> bool:",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    if len(s) != len(t):",
        "tag": "branch",
        "lineNum": 2
      },
      {
        "text": "        return False",
        "tag": "return",
        "lineNum": 3
      },
      {
        "text": "    counts = [0] * 26",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    for c1, c2 in zip(s, t):",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "        counts[ord(c1) - ord('a')] += 1",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "        counts[ord(c2) - ord('a')] -= 1",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    return all(c == 0 for c in counts)",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 10
      },
      {
        "text": "print(isAnagram(\"anagram\", \"nagaram\"))",
        "tag": "exec",
        "lineNum": 11
      }
    ],
    "rawCode": "def isAnagram(s: str, t: str) -> bool:\n    if len(s) != len(t):\n        return False\n    counts = [0] * 26\n    for c1, c2 in zip(s, t):\n        counts[ord(c1) - ord('a')] += 1\n        counts[ord(c2) - ord('a')] -= 1\n    return all(c == 0 for c in counts)\n\n# Test\nprint(isAnagram(\"anagram\", \"nagaram\"))",
    "explanations": {
      "step_1": "Early exit: strings with different lengths cannot be anagrams.",
      "step_2": "Increment bucket for characters in s and decrement for characters in t.",
      "step_3": "Verify every bucket returned to exactly 0.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "longest-consecutive-sequence",
    "code": [
      {
        "text": "def longestConsecutive(nums):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    num_set = set(nums)",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    longest = 0",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    ",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    for num in num_set:",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "        # Check if num is the start of a streak",
        "tag": "comment",
        "lineNum": 6
      },
      {
        "text": "        if num - 1 not in num_set:",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "            curr = num",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "            streak = 1",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "            while curr + 1 in num_set:",
        "tag": "loop",
        "lineNum": 10
      },
      {
        "text": "                curr += 1",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "                streak += 1",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "            longest = max(longest, streak)",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "            ",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    return longest",
        "tag": "return",
        "lineNum": 15
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 17
      },
      {
        "text": "print(longestConsecutive([100, 4, 200, 1, 3, 2]))",
        "tag": "exec",
        "lineNum": 18
      }
    ],
    "rawCode": "def longestConsecutive(nums):\n    num_set = set(nums)\n    longest = 0\n    \n    for num in num_set:\n        # Check if num is the start of a streak\n        if num - 1 not in num_set:\n            curr = num\n            streak = 1\n            while curr + 1 in num_set:\n                curr += 1\n                streak += 1\n            longest = max(longest, streak)\n            \n    return longest\n\n# Test\nprint(longestConsecutive([100, 4, 200, 1, 3, 2]))",
    "explanations": {
      "step_1": "Convert array to hash set for O(1) membership checks.",
      "step_2": "Crucial optimization: only attempt sequence expansion if num - 1 is absent, ensuring we only start from sequence heads.",
      "step_3": "Count consecutive numbers in set until gap is reached; update global longest.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "subarray-sum-equals-k",
    "code": [
      {
        "text": "def subarraySum(nums, k):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    prefix_counts = {0: 1}  # base case: sum 0 occurs once before starting",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    curr_sum = 0",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    count = 0",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "    ",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    for num in nums:",
        "tag": "loop",
        "lineNum": 6
      },
      {
        "text": "        curr_sum += num",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "        needed = curr_sum - k",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        if needed in prefix_counts:",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "            count += prefix_counts[needed]",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        prefix_counts[curr_sum] = prefix_counts.get(curr_sum, 0) + 1",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "        ",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    return count",
        "tag": "return",
        "lineNum": 13
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 15
      },
      {
        "text": "print(subarraySum([1, 1, 1], 2))",
        "tag": "exec",
        "lineNum": 16
      }
    ],
    "rawCode": "def subarraySum(nums, k):\n    prefix_counts = {0: 1}  # base case: sum 0 occurs once before starting\n    curr_sum = 0\n    count = 0\n    \n    for num in nums:\n        curr_sum += num\n        needed = curr_sum - k\n        if needed in prefix_counts:\n            count += prefix_counts[needed]\n        prefix_counts[curr_sum] = prefix_counts.get(curr_sum, 0) + 1\n        \n    return count\n\n# Test\nprint(subarraySum([1, 1, 1], 2))",
    "explanations": {
      "step_1": "Base case {0: 1}: handles subarrays starting from index 0 where curr_sum equals k exactly.",
      "step_2": "Accumulate current running prefix sum and calculate required previous prefix sum: curr_sum - k.",
      "step_3": "Add occurrences of needed prefix sum to count, then record curr_sum in map.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "contains-duplicate-ii",
    "code": [
      {
        "text": "def containsNearbyDuplicate(nums, k):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    seen = set()",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    for i, num in enumerate(nums):",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "        if num in seen:",
        "tag": "branch",
        "lineNum": 4
      },
      {
        "text": "            return True",
        "tag": "return",
        "lineNum": 5
      },
      {
        "text": "        seen.add(num)",
        "tag": "mutate",
        "lineNum": 6
      },
      {
        "text": "        if len(seen) > k:",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "            seen.remove(nums[i - k])",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    return False",
        "tag": "return",
        "lineNum": 9
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 11
      },
      {
        "text": "print(containsNearbyDuplicate([1, 2, 3, 1], 3))",
        "tag": "exec",
        "lineNum": 12
      }
    ],
    "rawCode": "def containsNearbyDuplicate(nums, k):\n    seen = set()\n    for i, num in enumerate(nums):\n        if num in seen:\n            return True\n        seen.add(num)\n        if len(seen) > k:\n            seen.remove(nums[i - k])\n    return False\n\n# Test\nprint(containsNearbyDuplicate([1, 2, 3, 1], 3))",
    "explanations": {
      "step_1": "Maintain a hash set holding elements in the active window of size k.",
      "step_2": "If current element is already in the window set, nearby duplicate exists; return true.",
      "step_3": "Add current element. If window exceeds k, evict the element that slid out: nums[i - k].",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "insert-delete-getrandom",
    "code": [
      {
        "text": "import random",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "class RandomizedSet:",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    def __init__(self):",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "        self.nums = []",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "        self.val_to_idx = {}",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    def insert(self, val: int) -> bool:",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "        if val in self.val_to_idx:",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "            return False",
        "tag": "return",
        "lineNum": 10
      },
      {
        "text": "        self.val_to_idx[val] = len(self.nums)",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "        self.nums.append(val)",
        "tag": "mutate",
        "lineNum": 12
      },
      {
        "text": "        return True",
        "tag": "return",
        "lineNum": 13
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    def remove(self, val: int) -> bool:",
        "tag": "def",
        "lineNum": 15
      },
      {
        "text": "        if val not in self.val_to_idx:",
        "tag": "branch",
        "lineNum": 16
      },
      {
        "text": "            return False",
        "tag": "return",
        "lineNum": 17
      },
      {
        "text": "        idx = self.val_to_idx[val]",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "        last_val = self.nums[-1]",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "        ",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "        # Swap with last element",
        "tag": "comment",
        "lineNum": 21
      },
      {
        "text": "        self.nums[idx] = last_val",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "        self.val_to_idx[last_val] = idx",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "        ",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "        # Pop last",
        "tag": "comment",
        "lineNum": 25
      },
      {
        "text": "        self.nums.pop()",
        "tag": "mutate",
        "lineNum": 26
      },
      {
        "text": "        del self.val_to_idx[val]",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "        return True",
        "tag": "return",
        "lineNum": 28
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 29
      },
      {
        "text": "    def getRandom(self) -> int:",
        "tag": "def",
        "lineNum": 30
      },
      {
        "text": "        return random.choice(self.nums)",
        "tag": "return",
        "lineNum": 31
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 32
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 33
      },
      {
        "text": "rs = RandomizedSet()",
        "tag": "exec",
        "lineNum": 34
      },
      {
        "text": "print([rs.insert(1), rs.remove(2), rs.insert(2)])",
        "tag": "exec",
        "lineNum": 35
      }
    ],
    "rawCode": "import random\n\nclass RandomizedSet:\n    def __init__(self):\n        self.nums = []\n        self.val_to_idx = {}\n\n    def insert(self, val: int) -> bool:\n        if val in self.val_to_idx:\n            return False\n        self.val_to_idx[val] = len(self.nums)\n        self.nums.append(val)\n        return True\n\n    def remove(self, val: int) -> bool:\n        if val not in self.val_to_idx:\n            return False\n        idx = self.val_to_idx[val]\n        last_val = self.nums[-1]\n        \n        # Swap with last element\n        self.nums[idx] = last_val\n        self.val_to_idx[last_val] = idx\n        \n        # Pop last\n        self.nums.pop()\n        del self.val_to_idx[val]\n        return True\n\n    def getRandom(self) -> int:\n        return random.choice(self.nums)\n\n# Test\nrs = RandomizedSet()\nprint([rs.insert(1), rs.remove(2), rs.insert(2)])",
    "explanations": {
      "step_1": "Insert: map records val -> index in array; array appends val in O(1).",
      "step_2": "O(1) Deletion trick: swap target with last element, update moved element's map index, then pop array tail in O(1).",
      "step_3": "getRandom: generate random index in [0..len-1] and return array element in O(1).",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  }
];
})(typeof window !== 'undefined' ? window : global);
