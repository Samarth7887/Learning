/**
 * SynapseCS Language-Specific Implementation: PYTHON - Arrays & Strings
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['python'] = window.DSA_LANG_CODE['python'] || {};
  window.DSA_LANG_CODE['python']['arrays-strings'] = [
  {
    "id": "arr-basics-create",
    "code": [
      {
        "text": "def get_memory_addresses(arr, base=0x1000):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    return [f\"0x{base + i * 4:04X}: {val}\" for i, val in enumerate(arr)]",
        "tag": "return",
        "lineNum": 2
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 4
      },
      {
        "text": "print(get_memory_addresses([10, 20, 30, 40]))",
        "tag": "exec",
        "lineNum": 5
      }
    ],
    "rawCode": "def get_memory_addresses(arr, base=0x1000):\n    return [f\"0x{base + i * 4:04X}: {val}\" for i, val in enumerate(arr)]\n\n# Test\nprint(get_memory_addresses([10, 20, 30, 40]))",
    "explanations": {
      "step_1": "Iterate through elements and compute hex address offset: base + (i * 4).",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "arr-rotate",
    "code": [
      {
        "text": "def rotate(nums, k):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    k %= len(nums)",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    ",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    def reverse(l, r):",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "        while l < r:",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "            nums[l], nums[r] = nums[r], nums[l]",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "            l += 1",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "            r -= 1",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "            ",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    # Step 1: reverse entire array",
        "tag": "comment",
        "lineNum": 10
      },
      {
        "text": "    reverse(0, len(nums) - 1)",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    # Step 2: reverse first k elements",
        "tag": "comment",
        "lineNum": 12
      },
      {
        "text": "    reverse(0, k - 1)",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    # Step 3: reverse remaining elements",
        "tag": "comment",
        "lineNum": 14
      },
      {
        "text": "    reverse(k, len(nums) - 1)",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    return nums",
        "tag": "return",
        "lineNum": 16
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 18
      },
      {
        "text": "print(rotate([1, 2, 3, 4, 5, 6, 7], 3))",
        "tag": "exec",
        "lineNum": 19
      }
    ],
    "rawCode": "def rotate(nums, k):\n    k %= len(nums)\n    \n    def reverse(l, r):\n        while l < r:\n            nums[l], nums[r] = nums[r], nums[l]\n            l += 1\n            r -= 1\n            \n    # Step 1: reverse entire array\n    reverse(0, len(nums) - 1)\n    # Step 2: reverse first k elements\n    reverse(0, k - 1)\n    # Step 3: reverse remaining elements\n    reverse(k, len(nums) - 1)\n    return nums\n\n# Test\nprint(rotate([1, 2, 3, 4, 5, 6, 7], 3))",
    "explanations": {
      "step_1": "Normalize k with modulo: k %= n so k is within array bounds.",
      "step_2": "Helper function reversing elements between index l and r in-place.",
      "step_3": "The magic 3-reversal sequence: reverse all, reverse first k, reverse the rest.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "two-sum-ii-sorted",
    "code": [
      {
        "text": "def twoSumSorted(numbers, target):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    l, r = 0, len(numbers) - 1",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    while l < r:",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "        s = numbers[l] + numbers[r]",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "        if s == target:",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "            return [l + 1, r + 1]  # 1-indexed",
        "tag": "return",
        "lineNum": 6
      },
      {
        "text": "        elif s < target:",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "            l += 1",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        else:",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "            r -= 1",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    return []",
        "tag": "return",
        "lineNum": 11
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 13
      },
      {
        "text": "print(twoSumSorted([2, 7, 11, 15], 9))",
        "tag": "exec",
        "lineNum": 14
      }
    ],
    "rawCode": "def twoSumSorted(numbers, target):\n    l, r = 0, len(numbers) - 1\n    while l < r:\n        s = numbers[l] + numbers[r]\n        if s == target:\n            return [l + 1, r + 1]  # 1-indexed\n        elif s < target:\n            l += 1\n        else:\n            r -= 1\n    return []\n\n# Test\nprint(twoSumSorted([2, 7, 11, 15], 9))",
    "explanations": {
      "step_1": "Initialize left pointer at 0 and right pointer at the last index.",
      "step_2": "If sum equals target, return 1-based indices [l + 1, r + 1].",
      "step_3": "If sum is smaller, increase left; if sum is larger, decrease right.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "container-with-most-water",
    "code": [
      {
        "text": "def maxArea(height):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    l, r = 0, len(height) - 1",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    max_water = 0",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    while l < r:",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        h = min(height[l], height[r])",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "        max_water = max(max_water, h * (r - l))",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "        if height[l] < height[r]:",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "            l += 1",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        else:",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "            r -= 1",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    return max_water",
        "tag": "return",
        "lineNum": 11
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 13
      },
      {
        "text": "print(maxArea([1,8,6,2,5,4,8,3,7]))",
        "tag": "exec",
        "lineNum": 14
      }
    ],
    "rawCode": "def maxArea(height):\n    l, r = 0, len(height) - 1\n    max_water = 0\n    while l < r:\n        h = min(height[l], height[r])\n        max_water = max(max_water, h * (r - l))\n        if height[l] < height[r]:\n            l += 1\n        else:\n            r -= 1\n    return max_water\n\n# Test\nprint(maxArea([1,8,6,2,5,4,8,3,7]))",
    "explanations": {
      "step_1": "Initialize two pointers at ends and max_water = 0.",
      "step_2": "Calculate area constrained by shorter line: min(height[l], height[r]) * width.",
      "step_3": "Move pointer of the shorter line inward, because keeping the shorter line can never yield a larger area with reduced width.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "longest-substring-no-repeat",
    "code": [
      {
        "text": "def lengthOfLongestSubstring(s: str) -> int:",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    last_seen = {}",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    l = 0",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    max_len = 0",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "    for r, ch in enumerate(s):",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "        if ch in last_seen and last_seen[ch] >= l:",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "            l = last_seen[ch] + 1",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "        last_seen[ch] = r",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        max_len = max(max_len, r - l + 1)",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    return max_len",
        "tag": "return",
        "lineNum": 10
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 12
      },
      {
        "text": "print(lengthOfLongestSubstring(\"abcabcbb\"))",
        "tag": "exec",
        "lineNum": 13
      }
    ],
    "rawCode": "def lengthOfLongestSubstring(s: str) -> int:\n    last_seen = {}\n    l = 0\n    max_len = 0\n    for r, ch in enumerate(s):\n        if ch in last_seen and last_seen[ch] >= l:\n            l = last_seen[ch] + 1\n        last_seen[ch] = r\n        max_len = max(max_len, r - l + 1)\n    return max_len\n\n# Test\nprint(lengthOfLongestSubstring(\"abcabcbb\"))",
    "explanations": {
      "step_1": "Initialize hash map to track last seen index of characters and left pointer l = 0.",
      "step_2": "If incoming character has been seen within current window (index >= l), jump l to index + 1.",
      "step_3": "Record current index and update max_len with window size (r - l + 1).",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "trapping-rain-water",
    "code": [
      {
        "text": "def trap(height):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    if not height: return 0",
        "tag": "branch",
        "lineNum": 2
      },
      {
        "text": "    l, r = 0, len(height) - 1",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    left_max, right_max = height[l], height[r]",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    water = 0",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "    while l < r:",
        "tag": "loop",
        "lineNum": 6
      },
      {
        "text": "        if left_max < right_max:",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "            l += 1",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "            left_max = max(left_max, height[l])",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "            water += left_max - height[l]",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        else:",
        "tag": "branch",
        "lineNum": 11
      },
      {
        "text": "            r -= 1",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "            right_max = max(right_max, height[r])",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "            water += right_max - height[r]",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    return water",
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
        "text": "print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))",
        "tag": "exec",
        "lineNum": 18
      }
    ],
    "rawCode": "def trap(height):\n    if not height: return 0\n    l, r = 0, len(height) - 1\n    left_max, right_max = height[l], height[r]\n    water = 0\n    while l < r:\n        if left_max < right_max:\n            l += 1\n            left_max = max(left_max, height[l])\n            water += left_max - height[l]\n        else:\n            r -= 1\n            right_max = max(right_max, height[r])\n            water += right_max - height[r]\n    return water\n\n# Test\nprint(trap([0,1,0,2,1,0,1,3,2,1,2,1]))",
    "explanations": {
      "step_1": "Initialize two pointers at ends and track left_max and right_max.",
      "step_2": "When left_max < right_max, water level is bottlenecked by left_max: accumulate water and advance left.",
      "step_3": "Otherwise water level is bottlenecked by right_max: accumulate water and decrement right.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "maximum-subarray-kadane",
    "code": [
      {
        "text": "def maxSubArray(nums):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    max_sum = nums[0]",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    curr_sum = nums[0]",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    for x in nums[1:]:",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        curr_sum = max(x, curr_sum + x)",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "        max_sum = max(max_sum, curr_sum)",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    return max_sum",
        "tag": "return",
        "lineNum": 7
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 9
      },
      {
        "text": "print(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))",
        "tag": "exec",
        "lineNum": 10
      }
    ],
    "rawCode": "def maxSubArray(nums):\n    max_sum = nums[0]\n    curr_sum = nums[0]\n    for x in nums[1:]:\n        curr_sum = max(x, curr_sum + x)\n        max_sum = max(max_sum, curr_sum)\n    return max_sum\n\n# Test\nprint(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))",
    "explanations": {
      "step_1": "Initialize max_sum and curr_sum to first element.",
      "step_2": "Dynamic Choice: Extend existing subarray (curr_sum + x) or start a new subarray from x.",
      "step_3": "Update global max_sum if curr_sum exceeds it.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "product-except-self",
    "code": [
      {
        "text": "def productExceptSelf(nums):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    n = len(nums)",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    res = [1] * n",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    ",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    # Prefix pass: res[i] contains product of elements to left of i",
        "tag": "comment",
        "lineNum": 5
      },
      {
        "text": "    prefix = 1",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    for i in range(n):",
        "tag": "loop",
        "lineNum": 7
      },
      {
        "text": "        res[i] = prefix",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        prefix *= nums[i]",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        ",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    # Suffix pass: multiply by product of elements to right of i",
        "tag": "comment",
        "lineNum": 11
      },
      {
        "text": "    suffix = 1",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    for i in range(n - 1, -1, -1):",
        "tag": "loop",
        "lineNum": 13
      },
      {
        "text": "        res[i] *= suffix",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "        suffix *= nums[i]",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "        ",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "    return res",
        "tag": "return",
        "lineNum": 17
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 19
      },
      {
        "text": "print(productExceptSelf([1, 2, 3, 4]))",
        "tag": "exec",
        "lineNum": 20
      }
    ],
    "rawCode": "def productExceptSelf(nums):\n    n = len(nums)\n    res = [1] * n\n    \n    # Prefix pass: res[i] contains product of elements to left of i\n    prefix = 1\n    for i in range(n):\n        res[i] = prefix\n        prefix *= nums[i]\n        \n    # Suffix pass: multiply by product of elements to right of i\n    suffix = 1\n    for i in range(n - 1, -1, -1):\n        res[i] *= suffix\n        suffix *= nums[i]\n        \n    return res\n\n# Test\nprint(productExceptSelf([1, 2, 3, 4]))",
    "explanations": {
      "step_1": "First pass: store cumulative product of all elements to the left of index i.",
      "step_2": "Second pass (backwards): multiply res[i] by cumulative suffix product of elements to the right.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "merge-intervals",
    "code": [
      {
        "text": "def merge(intervals):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    intervals.sort(key=lambda x: x[0])",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    merged = [intervals[0]]",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    for start, end in intervals[1:]:",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        last_end = merged[-1][1]",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "        if start <= last_end:",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "            merged[-1][1] = max(last_end, end)",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "        else:",
        "tag": "branch",
        "lineNum": 8
      },
      {
        "text": "            merged.append([start, end])",
        "tag": "mutate",
        "lineNum": 9
      },
      {
        "text": "    return merged",
        "tag": "return",
        "lineNum": 10
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 12
      },
      {
        "text": "print(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))",
        "tag": "exec",
        "lineNum": 13
      }
    ],
    "rawCode": "def merge(intervals):\n    intervals.sort(key=lambda x: x[0])\n    merged = [intervals[0]]\n    for start, end in intervals[1:]:\n        last_end = merged[-1][1]\n        if start <= last_end:\n            merged[-1][1] = max(last_end, end)\n        else:\n            merged.append([start, end])\n    return merged\n\n# Test\nprint(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))",
    "explanations": {
      "step_1": "Sort all intervals by their starting times so potential overlaps are adjacent.",
      "step_2": "If start <= last_end, overlap detected: extend last_end to max(last_end, end).",
      "step_3": "No overlap: append interval as a new disjoint interval.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  }
];
})(typeof window !== 'undefined' ? window : global);
