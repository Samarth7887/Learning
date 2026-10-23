/**
 * SynapseCS Language-Specific Implementation: JAVASCRIPT - Arrays & Strings
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['javascript'] = window.DSA_LANG_CODE['javascript'] || {};
  window.DSA_LANG_CODE['javascript']['arrays-strings'] = [
  {
    "id": "arr-basics-create",
    "code": [
      {
        "text": "function getMemoryAddresses(arr, base = 0x1000) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  return arr.map((val, i) => `0x${(base + i * 4).toString(16).toUpperCase().padStart(4, '0')}: ${val}`);",
        "tag": "return",
        "lineNum": 2
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "console.log(JSON.stringify(getMemoryAddresses([10, 20, 30, 40])));",
        "tag": "exec",
        "lineNum": 5
      }
    ],
    "rawCode": "function getMemoryAddresses(arr, base = 0x1000) {\n  return arr.map((val, i) => `0x${(base + i * 4).toString(16).toUpperCase().padStart(4, '0')}: ${val}`);\n}\n\nconsole.log(JSON.stringify(getMemoryAddresses([10, 20, 30, 40])));",
    "explanations": {
      "step_1": "Iterate through elements and compute hex address offset: base + (i * 4).",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "arr-rotate",
    "code": [
      {
        "text": "function rotate(nums, k) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  k %= nums.length;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "  function reverse(l, r) {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    while (l < r) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "      const temp = nums[l];",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "      nums[l] = nums[r];",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "      nums[r] = temp;",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "      l++;",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "      r--;",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "  reverse(0, nums.length - 1);",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "  reverse(0, k - 1);",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "  reverse(k, nums.length - 1);",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "  return nums;",
        "tag": "return",
        "lineNum": 15
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "console.log(JSON.stringify(rotate([1, 2, 3, 4, 5, 6, 7], 3)));",
        "tag": "exec",
        "lineNum": 18
      }
    ],
    "rawCode": "function rotate(nums, k) {\n  k %= nums.length;\n  function reverse(l, r) {\n    while (l < r) {\n      const temp = nums[l];\n      nums[l] = nums[r];\n      nums[r] = temp;\n      l++;\n      r--;\n    }\n  }\n  reverse(0, nums.length - 1);\n  reverse(0, k - 1);\n  reverse(k, nums.length - 1);\n  return nums;\n}\n\nconsole.log(JSON.stringify(rotate([1, 2, 3, 4, 5, 6, 7], 3)));",
    "explanations": {
      "step_1": "Normalize k with modulo: k %= n so k is within array bounds.",
      "step_2": "Helper function reversing elements between index l and r in-place.",
      "step_3": "The magic 3-reversal sequence: reverse all, reverse first k, reverse the rest.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "two-sum-ii-sorted",
    "code": [
      {
        "text": "function twoSumSorted(numbers, target) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  let l = 0, r = numbers.length - 1;",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "  while (l < r) {",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "    const sum = numbers[l] + numbers[r];",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    if (sum === target) return [l + 1, r + 1];",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "    if (sum < target) l++;",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "    else r--;",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "  return [];",
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
        "text": "console.log(JSON.stringify(twoSumSorted([2, 7, 11, 15], 9)));",
        "tag": "exec",
        "lineNum": 12
      }
    ],
    "rawCode": "function twoSumSorted(numbers, target) {\n  let l = 0, r = numbers.length - 1;\n  while (l < r) {\n    const sum = numbers[l] + numbers[r];\n    if (sum === target) return [l + 1, r + 1];\n    if (sum < target) l++;\n    else r--;\n  }\n  return [];\n}\n\nconsole.log(JSON.stringify(twoSumSorted([2, 7, 11, 15], 9)));",
    "explanations": {
      "step_1": "Initialize left pointer at 0 and right pointer at the last index.",
      "step_2": "If sum equals target, return 1-based indices [l + 1, r + 1].",
      "step_3": "If sum is smaller, increase left; if sum is larger, decrease right.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "container-with-most-water",
    "code": [
      {
        "text": "function maxArea(height) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  let l = 0, r = height.length - 1, maxWater = 0;",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "  while (l < r) {",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "    const h = Math.min(height[l], height[r]);",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    maxWater = Math.max(maxWater, h * (r - l));",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    if (height[l] < height[r]) l++;",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "    else r--;",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "  return maxWater;",
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
        "text": "console.log(maxArea([1,8,6,2,5,4,8,3,7]));",
        "tag": "exec",
        "lineNum": 12
      }
    ],
    "rawCode": "function maxArea(height) {\n  let l = 0, r = height.length - 1, maxWater = 0;\n  while (l < r) {\n    const h = Math.min(height[l], height[r]);\n    maxWater = Math.max(maxWater, h * (r - l));\n    if (height[l] < height[r]) l++;\n    else r--;\n  }\n  return maxWater;\n}\n\nconsole.log(maxArea([1,8,6,2,5,4,8,3,7]));",
    "explanations": {
      "step_1": "Initialize two pointers at ends and max_water = 0.",
      "step_2": "Calculate area constrained by shorter line: min(height[l], height[r]) * width.",
      "step_3": "Move pointer of the shorter line inward, because keeping the shorter line can never yield a larger area with reduced width.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "longest-substring-no-repeat",
    "code": [
      {
        "text": "function lengthOfLongestSubstring(s) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  const lastSeen = new Map();",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "  let l = 0, maxLen = 0;",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "  for (let r = 0; r < s.length; r++) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "    const ch = s[r];",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    if (lastSeen.has(ch) && lastSeen.get(ch) >= l) {",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "      l = lastSeen.get(ch) + 1;",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    lastSeen.set(ch, r);",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    maxLen = Math.max(maxLen, r - l + 1);",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "  return maxLen;",
        "tag": "return",
        "lineNum": 12
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "console.log(lengthOfLongestSubstring(\"abcabcbb\"));",
        "tag": "exec",
        "lineNum": 15
      }
    ],
    "rawCode": "function lengthOfLongestSubstring(s) {\n  const lastSeen = new Map();\n  let l = 0, maxLen = 0;\n  for (let r = 0; r < s.length; r++) {\n    const ch = s[r];\n    if (lastSeen.has(ch) && lastSeen.get(ch) >= l) {\n      l = lastSeen.get(ch) + 1;\n    }\n    lastSeen.set(ch, r);\n    maxLen = Math.max(maxLen, r - l + 1);\n  }\n  return maxLen;\n}\n\nconsole.log(lengthOfLongestSubstring(\"abcabcbb\"));",
    "explanations": {
      "step_1": "Initialize hash map to track last seen index of characters and left pointer l = 0.",
      "step_2": "If incoming character has been seen within current window (index >= l), jump l to index + 1.",
      "step_3": "Record current index and update max_len with window size (r - l + 1).",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "trapping-rain-water",
    "code": [
      {
        "text": "function trap(height) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  if (!height.length) return 0;",
        "tag": "branch",
        "lineNum": 2
      },
      {
        "text": "  let l = 0, r = height.length - 1, water = 0;",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "  let leftMax = height[l], rightMax = height[r];",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "  while (l < r) {",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "    if (leftMax < rightMax) {",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "      l++;",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "      leftMax = Math.max(leftMax, height[l]);",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "      water += leftMax - height[l];",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    } else {",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "      r--;",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "      rightMax = Math.max(rightMax, height[r]);",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "      water += rightMax - height[r];",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "  return water;",
        "tag": "return",
        "lineNum": 16
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));",
        "tag": "exec",
        "lineNum": 19
      }
    ],
    "rawCode": "function trap(height) {\n  if (!height.length) return 0;\n  let l = 0, r = height.length - 1, water = 0;\n  let leftMax = height[l], rightMax = height[r];\n  while (l < r) {\n    if (leftMax < rightMax) {\n      l++;\n      leftMax = Math.max(leftMax, height[l]);\n      water += leftMax - height[l];\n    } else {\n      r--;\n      rightMax = Math.max(rightMax, height[r]);\n      water += rightMax - height[r];\n    }\n  }\n  return water;\n}\n\nconsole.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));",
    "explanations": {
      "step_1": "Initialize two pointers at ends and track left_max and right_max.",
      "step_2": "When left_max < right_max, water level is bottlenecked by left_max: accumulate water and advance left.",
      "step_3": "Otherwise water level is bottlenecked by right_max: accumulate water and decrement right.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "maximum-subarray-kadane",
    "code": [
      {
        "text": "function maxSubArray(nums) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  let maxSum = nums[0], currSum = nums[0];",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "  for (let i = 1; i < nums.length; i++) {",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "    currSum = Math.max(nums[i], currSum + nums[i]);",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    maxSum = Math.max(maxSum, currSum);",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "  return maxSum;",
        "tag": "return",
        "lineNum": 7
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));",
        "tag": "exec",
        "lineNum": 10
      }
    ],
    "rawCode": "function maxSubArray(nums) {\n  let maxSum = nums[0], currSum = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    currSum = Math.max(nums[i], currSum + nums[i]);\n    maxSum = Math.max(maxSum, currSum);\n  }\n  return maxSum;\n}\n\nconsole.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));",
    "explanations": {
      "step_1": "Initialize max_sum and curr_sum to first element.",
      "step_2": "Dynamic Choice: Extend existing subarray (curr_sum + x) or start a new subarray from x.",
      "step_3": "Update global max_sum if curr_sum exceeds it.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "product-except-self",
    "code": [
      {
        "text": "function productExceptSelf(nums) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  const n = nums.length;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "  const res = new Array(n).fill(1);",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "  let prefix = 1;",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "  for (let i = 0; i < n; i++) {",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "    res[i] = prefix;",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    prefix *= nums[i];",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "  let suffix = 1;",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "  for (let i = n - 1; i >= 0; i--) {",
        "tag": "loop",
        "lineNum": 10
      },
      {
        "text": "    res[i] *= suffix;",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    suffix *= nums[i];",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "  return res;",
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
        "text": "console.log(JSON.stringify(productExceptSelf([1, 2, 3, 4])));",
        "tag": "exec",
        "lineNum": 17
      }
    ],
    "rawCode": "function productExceptSelf(nums) {\n  const n = nums.length;\n  const res = new Array(n).fill(1);\n  let prefix = 1;\n  for (let i = 0; i < n; i++) {\n    res[i] = prefix;\n    prefix *= nums[i];\n  }\n  let suffix = 1;\n  for (let i = n - 1; i >= 0; i--) {\n    res[i] *= suffix;\n    suffix *= nums[i];\n  }\n  return res;\n}\n\nconsole.log(JSON.stringify(productExceptSelf([1, 2, 3, 4])));",
    "explanations": {
      "step_1": "First pass: store cumulative product of all elements to the left of index i.",
      "step_2": "Second pass (backwards): multiply res[i] by cumulative suffix product of elements to the right.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "merge-intervals",
    "code": [
      {
        "text": "function merge(intervals) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  intervals.sort((a, b) => a[0] - b[0]);",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "  const merged = [intervals[0]];",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "  for (let i = 1; i < intervals.length; i++) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "    const last = merged[merged.length - 1];",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    if (intervals[i][0] <= last[1]) {",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "      last[1] = Math.max(last[1], intervals[i][1]);",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    } else {",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "      merged.push(intervals[i]);",
        "tag": "mutate",
        "lineNum": 9
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "  return merged;",
        "tag": "return",
        "lineNum": 12
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "console.log(JSON.stringify(merge([[1, 3], [2, 6], [8, 10], [15, 18]])));",
        "tag": "exec",
        "lineNum": 15
      }
    ],
    "rawCode": "function merge(intervals) {\n  intervals.sort((a, b) => a[0] - b[0]);\n  const merged = [intervals[0]];\n  for (let i = 1; i < intervals.length; i++) {\n    const last = merged[merged.length - 1];\n    if (intervals[i][0] <= last[1]) {\n      last[1] = Math.max(last[1], intervals[i][1]);\n    } else {\n      merged.push(intervals[i]);\n    }\n  }\n  return merged;\n}\n\nconsole.log(JSON.stringify(merge([[1, 3], [2, 6], [8, 10], [15, 18]])));",
    "explanations": {
      "step_1": "Sort all intervals by their starting times so potential overlaps are adjacent.",
      "step_2": "If start <= last_end, overlap detected: extend last_end to max(last_end, end).",
      "step_3": "No overlap: append interval as a new disjoint interval.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  }
];
})(typeof window !== 'undefined' ? window : global);
