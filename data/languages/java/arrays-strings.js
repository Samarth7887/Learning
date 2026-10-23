/**
 * SynapseCS Language-Specific Implementation: JAVA - Arrays & Strings
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['java'] = window.DSA_LANG_CODE['java'] || {};
  window.DSA_LANG_CODE['java']['arrays-strings'] = [
  {
    "id": "arr-basics-create",
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
        "text": "public class Solution {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    public static List<String> getAddresses(int[] arr, int base) {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "        List<String> res = new ArrayList<>();",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "        for (int i = 0; i < arr.length; i++) {",
        "tag": "loop",
        "lineNum": 6
      },
      {
        "text": "            res.add(String.format(\"0x%04X: %d\", base + (i * 4), arr[i]));",
        "tag": "mutate",
        "lineNum": 7
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        return res;",
        "tag": "return",
        "lineNum": 9
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 11
      }
    ],
    "rawCode": "import java.util.*;\n\npublic class Solution {\n    public static List<String> getAddresses(int[] arr, int base) {\n        List<String> res = new ArrayList<>();\n        for (int i = 0; i < arr.length; i++) {\n            res.add(String.format(\"0x%04X: %d\", base + (i * 4), arr[i]));\n        }\n        return res;\n    }\n}",
    "explanations": {
      "step_1": "Iterate through elements and compute hex address offset: base + (i * 4).",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "arr-rotate",
    "code": [
      {
        "text": "class Solution {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    public void rotate(int[] nums, int k) {",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "        k %= nums.length;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "        reverse(nums, 0, nums.length - 1);",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "        reverse(nums, 0, k - 1);",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "        reverse(nums, k, nums.length - 1);",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    private void reverse(int[] nums, int l, int r) {",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        while (l < r) {",
        "tag": "loop",
        "lineNum": 9
      },
      {
        "text": "            int t = nums[l]; nums[l++] = nums[r]; nums[r--] = t;",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        }",
        "tag": "exec",
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
    "rawCode": "class Solution {\n    public void rotate(int[] nums, int k) {\n        k %= nums.length;\n        reverse(nums, 0, nums.length - 1);\n        reverse(nums, 0, k - 1);\n        reverse(nums, k, nums.length - 1);\n    }\n    private void reverse(int[] nums, int l, int r) {\n        while (l < r) {\n            int t = nums[l]; nums[l++] = nums[r]; nums[r--] = t;\n        }\n    }\n}",
    "explanations": {
      "step_1": "Normalize k with modulo: k %= n so k is within array bounds.",
      "step_2": "Helper function reversing elements between index l and r in-place.",
      "step_3": "The magic 3-reversal sequence: reverse all, reverse first k, reverse the rest.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "two-sum-ii-sorted",
    "code": [
      {
        "text": "class Solution {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    public int[] twoSum(int[] numbers, int target) {",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "        int l = 0, r = numbers.length - 1;",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "        while (l < r) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "            int sum = numbers[l] + numbers[r];",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "            if (sum == target) return new int[]{l + 1, r + 1};",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "            if (sum < target) l++;",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "            else r--;",
        "tag": "branch",
        "lineNum": 8
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        return new int[]{};",
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
    "rawCode": "class Solution {\n    public int[] twoSum(int[] numbers, int target) {\n        int l = 0, r = numbers.length - 1;\n        while (l < r) {\n            int sum = numbers[l] + numbers[r];\n            if (sum == target) return new int[]{l + 1, r + 1};\n            if (sum < target) l++;\n            else r--;\n        }\n        return new int[]{};\n    }\n}",
    "explanations": {
      "step_1": "Initialize left pointer at 0 and right pointer at the last index.",
      "step_2": "If sum equals target, return 1-based indices [l + 1, r + 1].",
      "step_3": "If sum is smaller, increase left; if sum is larger, decrease right.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "container-with-most-water",
    "code": [
      {
        "text": "class Solution {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    public int maxArea(int[] height) {",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "        int l = 0, r = height.length - 1, max = 0;",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "        while (l < r) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "            int h = Math.min(height[l], height[r]);",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "            max = Math.max(max, h * (r - l));",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "            if (height[l] < height[r]) l++;",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "            else r--;",
        "tag": "branch",
        "lineNum": 8
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        return max;",
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
    "rawCode": "class Solution {\n    public int maxArea(int[] height) {\n        int l = 0, r = height.length - 1, max = 0;\n        while (l < r) {\n            int h = Math.min(height[l], height[r]);\n            max = Math.max(max, h * (r - l));\n            if (height[l] < height[r]) l++;\n            else r--;\n        }\n        return max;\n    }\n}",
    "explanations": {
      "step_1": "Initialize two pointers at ends and max_water = 0.",
      "step_2": "Calculate area constrained by shorter line: min(height[l], height[r]) * width.",
      "step_3": "Move pointer of the shorter line inward, because keeping the shorter line can never yield a larger area with reduced width.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "longest-substring-no-repeat",
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
        "text": "    public int lengthOfLongestSubstring(String s) {",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "        Map<Character, Integer> lastSeen = new HashMap<>();",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "        int l = 0, maxLen = 0;",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "        for (int r = 0; r < s.length(); r++) {",
        "tag": "loop",
        "lineNum": 7
      },
      {
        "text": "            char ch = s.charAt(r);",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "            if (lastSeen.containsKey(ch) && lastSeen.get(ch) >= l) {",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "                l = lastSeen.get(ch) + 1;",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "            }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "            lastSeen.put(ch, r);",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "            maxLen = Math.max(maxLen, r - l + 1);",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "        return maxLen;",
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
    "rawCode": "import java.util.*;\n\nclass Solution {\n    public int lengthOfLongestSubstring(String s) {\n        Map<Character, Integer> lastSeen = new HashMap<>();\n        int l = 0, maxLen = 0;\n        for (int r = 0; r < s.length(); r++) {\n            char ch = s.charAt(r);\n            if (lastSeen.containsKey(ch) && lastSeen.get(ch) >= l) {\n                l = lastSeen.get(ch) + 1;\n            }\n            lastSeen.put(ch, r);\n            maxLen = Math.max(maxLen, r - l + 1);\n        }\n        return maxLen;\n    }\n}",
    "explanations": {
      "step_1": "Initialize hash map to track last seen index of characters and left pointer l = 0.",
      "step_2": "If incoming character has been seen within current window (index >= l), jump l to index + 1.",
      "step_3": "Record current index and update max_len with window size (r - l + 1).",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "trapping-rain-water",
    "code": [
      {
        "text": "class Solution {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    public int trap(int[] height) {",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "        if (height == null || height.length == 0) return 0;",
        "tag": "branch",
        "lineNum": 3
      },
      {
        "text": "        int l = 0, r = height.length - 1, water = 0;",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "        int leftMax = height[l], rightMax = height[r];",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "        while (l < r) {",
        "tag": "loop",
        "lineNum": 6
      },
      {
        "text": "            if (leftMax < rightMax) {",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "                l++;",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "                leftMax = Math.max(leftMax, height[l]);",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "                water += leftMax - height[l];",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "            } else {",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "                r--;",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "                rightMax = Math.max(rightMax, height[r]);",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "                water += rightMax - height[r];",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "            }",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "        return water;",
        "tag": "return",
        "lineNum": 17
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 19
      }
    ],
    "rawCode": "class Solution {\n    public int trap(int[] height) {\n        if (height == null || height.length == 0) return 0;\n        int l = 0, r = height.length - 1, water = 0;\n        int leftMax = height[l], rightMax = height[r];\n        while (l < r) {\n            if (leftMax < rightMax) {\n                l++;\n                leftMax = Math.max(leftMax, height[l]);\n                water += leftMax - height[l];\n            } else {\n                r--;\n                rightMax = Math.max(rightMax, height[r]);\n                water += rightMax - height[r];\n            }\n        }\n        return water;\n    }\n}",
    "explanations": {
      "step_1": "Initialize two pointers at ends and track left_max and right_max.",
      "step_2": "When left_max < right_max, water level is bottlenecked by left_max: accumulate water and advance left.",
      "step_3": "Otherwise water level is bottlenecked by right_max: accumulate water and decrement right.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "maximum-subarray-kadane",
    "code": [
      {
        "text": "class Solution {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    public int maxSubArray(int[] nums) {",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "        int maxSum = nums[0], currSum = nums[0];",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "        for (int i = 1; i < nums.length; i++) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "            currSum = Math.max(nums[i], currSum + nums[i]);",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "            maxSum = Math.max(maxSum, currSum);",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "        return maxSum;",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 10
      }
    ],
    "rawCode": "class Solution {\n    public int maxSubArray(int[] nums) {\n        int maxSum = nums[0], currSum = nums[0];\n        for (int i = 1; i < nums.length; i++) {\n            currSum = Math.max(nums[i], currSum + nums[i]);\n            maxSum = Math.max(maxSum, currSum);\n        }\n        return maxSum;\n    }\n}",
    "explanations": {
      "step_1": "Initialize max_sum and curr_sum to first element.",
      "step_2": "Dynamic Choice: Extend existing subarray (curr_sum + x) or start a new subarray from x.",
      "step_3": "Update global max_sum if curr_sum exceeds it.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "product-except-self",
    "code": [
      {
        "text": "class Solution {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    public int[] productExceptSelf(int[] nums) {",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "        int n = nums.length;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "        int[] res = new int[n];",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "        int prefix = 1;",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "        for (int i = 0; i < n; i++) {",
        "tag": "loop",
        "lineNum": 6
      },
      {
        "text": "            res[i] = prefix;",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "            prefix *= nums[i];",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        int suffix = 1;",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        for (int i = n - 1; i >= 0; i--) {",
        "tag": "loop",
        "lineNum": 11
      },
      {
        "text": "            res[i] *= suffix;",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "            suffix *= nums[i];",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "        return res;",
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
    "rawCode": "class Solution {\n    public int[] productExceptSelf(int[] nums) {\n        int n = nums.length;\n        int[] res = new int[n];\n        int prefix = 1;\n        for (int i = 0; i < n; i++) {\n            res[i] = prefix;\n            prefix *= nums[i];\n        }\n        int suffix = 1;\n        for (int i = n - 1; i >= 0; i--) {\n            res[i] *= suffix;\n            suffix *= nums[i];\n        }\n        return res;\n    }\n}",
    "explanations": {
      "step_1": "First pass: store cumulative product of all elements to the left of index i.",
      "step_2": "Second pass (backwards): multiply res[i] by cumulative suffix product of elements to the right.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "merge-intervals",
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
        "text": "    public int[][] merge(int[][] intervals) {",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "        List<int[]> res = new ArrayList<>();",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "        res.add(intervals[0]);",
        "tag": "mutate",
        "lineNum": 7
      },
      {
        "text": "        for (int i = 1; i < intervals.length; i++) {",
        "tag": "loop",
        "lineNum": 8
      },
      {
        "text": "            int[] last = res.get(res.size() - 1);",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "            if (intervals[i][0] <= last[1]) {",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "                last[1] = Math.max(last[1], intervals[i][1]);",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "            } else {",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "                res.add(intervals[i]);",
        "tag": "mutate",
        "lineNum": 13
      },
      {
        "text": "            }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "        return res.toArray(new int[res.size()][]);",
        "tag": "return",
        "lineNum": 16
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 18
      }
    ],
    "rawCode": "import java.util.*;\n\nclass Solution {\n    public int[][] merge(int[][] intervals) {\n        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));\n        List<int[]> res = new ArrayList<>();\n        res.add(intervals[0]);\n        for (int i = 1; i < intervals.length; i++) {\n            int[] last = res.get(res.size() - 1);\n            if (intervals[i][0] <= last[1]) {\n                last[1] = Math.max(last[1], intervals[i][1]);\n            } else {\n                res.add(intervals[i]);\n            }\n        }\n        return res.toArray(new int[res.size()][]);\n    }\n}",
    "explanations": {
      "step_1": "Sort all intervals by their starting times so potential overlaps are adjacent.",
      "step_2": "If start <= last_end, overlap detected: extend last_end to max(last_end, end).",
      "step_3": "No overlap: append interval as a new disjoint interval.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  }
];
})(typeof window !== 'undefined' ? window : global);
