/**
 * SynapseCS Language-Neutral Question Catalog: Arrays & Strings
 */
(function(window) {
  'use strict';
  window.DSA_QUESTIONS = window.DSA_QUESTIONS || {};
  window.DSA_QUESTIONS['arrays-strings'] = {
    id: 'arrays-strings',
    title: 'Arrays & Strings',
    icon: 'ph:code',
    description: "Contiguous memory layouts, two pointers, sliding window technique, prefix sums, and Kadane's algorithm.",
    subtopics: [{"id":"arrays-basics","title":"Basics & Memory Layout","questions":[{"id":"arr-basics-create","title":"Array Memory Layout & Contiguous Allocation","difficulty":"Basic","leetcode":null,"description":"Demonstrate how arrays are stored contiguously in memory. Compute the physical memory address of any index i given base address 0x1000 and element size (4 bytes).","constraints":"Array of 32-bit integers; address(i) = base + (i * 4).","examples":[{"input":"arr = [10, 20, 30, 40], base = 0x1000","output":"['0x1000: 10', '0x1004: 20', '0x1008: 30', '0x100C: 40']","why":"Each 32-bit integer occupies 4 bytes sequentially in memory."}],"approaches":[{"name":"Pointer Offset Formula","idea":"Array indexing arr[i] is syntactic sugar for *(base + i * sizeof(type)). This provides guaranteed O(1) random access.","timeComplexity":"O(N) to traverse, O(1) to access any element","spaceComplexity":"O(1)","code":{"python":"def get_memory_addresses(arr, base=0x1000):\n    return [f\"0x{base + i * 4:04X}: {val}\" for i, val in enumerate(arr)]\n\n# Test\nprint(get_memory_addresses([10, 20, 30, 40]))","java":"import java.util.*;\n\npublic class Solution {\n    public static List<String> getAddresses(int[] arr, int base) {\n        List<String> res = new ArrayList<>();\n        for (int i = 0; i < arr.length; i++) {\n            res.add(String.format(\"0x%04X: %d\", base + (i * 4), arr[i]));\n        }\n        return res;\n    }\n}","cpp":"#include <vector>\n#include <string>\n#include <cstdio>\nusing namespace std;\n\nvector<string> getAddresses(const vector<int>& arr, int base = 0x1000) {\n    vector<string> res;\n    char buf[32];\n    for (size_t i = 0; i < arr.size(); i++) {\n        snprintf(buf, sizeof(buf), \"0x%04X: %d\", (unsigned int)(base + i * 4), arr[i]);\n        res.push_back(buf);\n    }\n    return res;\n}","javascript":"function getMemoryAddresses(arr, base = 0x1000) {\n  return arr.map((val, i) => `0x${(base + i * 4).toString(16).toUpperCase().padStart(4, '0')}: ${val}`);\n}\n\nconsole.log(JSON.stringify(getMemoryAddresses([10, 20, 30, 40])));"},"lineExplanations":[{"lines":[1,2],"text":"Iterate through elements and compute hex address offset: base + (i * 4)."}],"animationSteps":[{"codeLine":2,"description":"Index 0: Base 0x1000 holds value 10.","state":{"type":"array","array":["0x1000: 10","0x1004: 20","0x1008: 30","0x100C: 40"]},"highlights":[0],"pointers":{"BASE":0}},{"codeLine":2,"description":"Index 1: Base + 4 bytes = 0x1004 holds value 20.","state":{"type":"array","array":["0x1000: 10","0x1004: 20","0x1008: 30","0x100C: 40"]},"highlights":[1],"pointers":{"i=1":1}}]}],"commonMistakes":"Confusing byte-addressed indexing with element-index math (e.g. forgetting to multiply index by sizeof(type)).","relatedQuestionIds":["arr-insert-delete","arr-reverse"]},{"id":"arr-rotate","title":"Rotate Array by K Steps","difficulty":"Medium","leetcode":{"number":189,"url":"https://leetcode.com/problems/rotate-array/"},"description":"Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.","constraints":"1 <= nums.length <= 10^5; -2^31 <= nums[i] <= 2^31 - 1; 0 <= k <= 10^5.","examples":[{"input":"nums = [1, 2, 3, 4, 5, 6, 7], k = 3","output":"[5, 6, 7, 1, 2, 3, 4]","why":"Rotate 1 step: [7, 1, 2, 3, 4, 5, 6]. 2 steps: [6, 7, 1, 2, 3, 4, 5]. 3 steps: [5, 6, 7, 1, 2, 3, 4]."}],"approaches":[{"name":"Three-Reversal Algorithm","idea":"1. Reverse the entire array. 2. Reverse first k elements. 3. Reverse remaining n - k elements. Works in O(1) auxiliary space!","timeComplexity":"O(N)","spaceComplexity":"O(1)","code":{"python":"def rotate(nums, k):\n    k %= len(nums)\n    \n    def reverse(l, r):\n        while l < r:\n            nums[l], nums[r] = nums[r], nums[l]\n            l += 1\n            r -= 1\n            \n    # Step 1: reverse entire array\n    reverse(0, len(nums) - 1)\n    # Step 2: reverse first k elements\n    reverse(0, k - 1)\n    # Step 3: reverse remaining elements\n    reverse(k, len(nums) - 1)\n    return nums\n\n# Test\nprint(rotate([1, 2, 3, 4, 5, 6, 7], 3))","java":"class Solution {\n    public void rotate(int[] nums, int k) {\n        k %= nums.length;\n        reverse(nums, 0, nums.length - 1);\n        reverse(nums, 0, k - 1);\n        reverse(nums, k, nums.length - 1);\n    }\n    private void reverse(int[] nums, int l, int r) {\n        while (l < r) {\n            int t = nums[l]; nums[l++] = nums[r]; nums[r--] = t;\n        }\n    }\n}","cpp":"#include <vector>\n#include <algorithm>\nusing namespace std;\n\nvoid rotate(vector<int>& nums, int k) {\n    k %= nums.size();\n    reverse(nums.begin(), nums.end());\n    reverse(nums.begin(), nums.begin() + k);\n    reverse(nums.begin() + k, nums.end());\n}","javascript":"function rotate(nums, k) {\n  k %= nums.length;\n  function reverse(l, r) {\n    while (l < r) {\n      const temp = nums[l];\n      nums[l] = nums[r];\n      nums[r] = temp;\n      l++;\n      r--;\n    }\n  }\n  reverse(0, nums.length - 1);\n  reverse(0, k - 1);\n  reverse(k, nums.length - 1);\n  return nums;\n}\n\nconsole.log(JSON.stringify(rotate([1, 2, 3, 4, 5, 6, 7], 3)));"},"lineExplanations":[{"lines":[2,2],"text":"Normalize k with modulo: k %= n so k is within array bounds."},{"lines":[4,8],"text":"Helper function reversing elements between index l and r in-place."},{"lines":[11,15],"text":"The magic 3-reversal sequence: reverse all, reverse first k, reverse the rest."}],"animationSteps":[{"codeLine":11,"description":"Initial array: [1, 2, 3, 4, 5, 6, 7].","state":{"type":"array","array":[1,2,3,4,5,6,7]},"highlights":[],"pointers":{}},{"codeLine":11,"description":"Reverse all: [7, 6, 5, 4, 3, 2, 1].","state":{"type":"array","array":[7,6,5,4,3,2,1]},"highlights":[0,6],"pointers":{"REVERSED_ALL":0}},{"codeLine":13,"description":"Reverse first k=3 [7, 6, 5] -> [5, 6, 7]. Array is [5, 6, 7, 4, 3, 2, 1].","state":{"type":"array","array":[5,6,7,4,3,2,1]},"highlights":[0,1,2],"pointers":{"k":2}},{"codeLine":15,"description":"Reverse rest [4, 3, 2, 1] -> [1, 2, 3, 4]. Final rotated array: [5, 6, 7, 1, 2, 3, 4]!","state":{"type":"array","array":[5,6,7,1,2,3,4]},"highlights":[3,4,5,6],"pointers":{"DONE":0}}]}],"commonMistakes":"Creating a new array of size N instead of using in-place reversals, failing the O(1) auxiliary space constraint.","relatedQuestionIds":["arr-reverse","arr-basics-create"]}]},{"id":"two-pointers-window","title":"Two Pointers & Sliding Window","questions":[{"id":"two-sum-ii-sorted","title":"Two Sum II - Input Array Is Sorted","difficulty":"Medium","leetcode":{"number":167,"url":"https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/"},"description":"Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.","constraints":"2 <= numbers.length <= 3 * 10^4; -1000 <= numbers[i] <= 1000; numbers is sorted.","examples":[{"input":"numbers = [2, 7, 11, 15], target = 9","output":"[1, 2]","why":"The sum of 2 and 7 is 9. Since it is 1-indexed, index1 = 1, index2 = 2."}],"approaches":[{"name":"Two Pointers (Left and Right)","idea":"Place left pointer at start and right pointer at end. If sum < target, advance left to increase sum. If sum > target, decrement right to decrease sum.","timeComplexity":"O(N)","spaceComplexity":"O(1)","code":{"python":"def twoSumSorted(numbers, target):\n    l, r = 0, len(numbers) - 1\n    while l < r:\n        s = numbers[l] + numbers[r]\n        if s == target:\n            return [l + 1, r + 1]  # 1-indexed\n        elif s < target:\n            l += 1\n        else:\n            r -= 1\n    return []\n\n# Test\nprint(twoSumSorted([2, 7, 11, 15], 9))","java":"class Solution {\n    public int[] twoSum(int[] numbers, int target) {\n        int l = 0, r = numbers.length - 1;\n        while (l < r) {\n            int sum = numbers[l] + numbers[r];\n            if (sum == target) return new int[]{l + 1, r + 1};\n            if (sum < target) l++;\n            else r--;\n        }\n        return new int[]{};\n    }\n}","cpp":"#include <vector>\nusing namespace std;\n\nvector<int> twoSum(vector<int>& numbers, int target) {\n    int l = 0, r = numbers.size() - 1;\n    while (l < r) {\n        int sum = numbers[l] + numbers[r];\n        if (sum == target) return {l + 1, r + 1};\n        if (sum < target) l++;\n        else r--;\n    }\n    return {};\n}","javascript":"function twoSumSorted(numbers, target) {\n  let l = 0, r = numbers.length - 1;\n  while (l < r) {\n    const sum = numbers[l] + numbers[r];\n    if (sum === target) return [l + 1, r + 1];\n    if (sum < target) l++;\n    else r--;\n  }\n  return [];\n}\n\nconsole.log(JSON.stringify(twoSumSorted([2, 7, 11, 15], 9)));"},"lineExplanations":[{"lines":[2,2],"text":"Initialize left pointer at 0 and right pointer at the last index."},{"lines":[4,6],"text":"If sum equals target, return 1-based indices [l + 1, r + 1]."},{"lines":[7,10],"text":"If sum is smaller, increase left; if sum is larger, decrease right."}],"animationSteps":[{"codeLine":2,"description":"l=0 (2), r=3 (15). Sum = 17 > 9. Decrement right pointer.","state":{"type":"array","array":[2,7,11,15]},"highlights":[0,3],"pointers":{"L":0,"R":3}},{"codeLine":4,"description":"l=0 (2), r=2 (11). Sum = 13 > 9. Decrement right pointer.","state":{"type":"array","array":[2,7,11,15]},"highlights":[0,2],"pointers":{"L":0,"R":2}},{"codeLine":5,"description":"l=0 (2), r=1 (7). Sum = 9 == target! Match found: [1, 2] (1-indexed).","state":{"type":"array","array":[2,7,11,15]},"highlights":[0,1],"pointers":{"L":0,"R":1}}]}],"commonMistakes":"Returning 0-indexed indices instead of 1-indexed as requested by the problem.","relatedQuestionIds":["three-sum","container-with-most-water"]},{"id":"container-with-most-water","title":"Container With Most Water","difficulty":"Medium","leetcode":{"number":11,"url":"https://leetcode.com/problems/container-with-most-water/"},"description":"Given n non-negative integers representing vertical lines, find two lines that together with the x-axis form a container containing the most water.","constraints":"n >= 2; height[i] >= 0.","examples":[{"input":"height = [1,8,6,2,5,4,8,3,7]","output":"49","why":"Between index 1 (height 8) and index 8 (height 7): width = 7, min_height = 7, area = 7 * 7 = 49."}],"approaches":[{"name":"Greedy Two Pointers","idea":"Start with maximum width (pointers at both ends). The water volume is limited by the shorter line: area = min(h[l], h[r]) * (r - l). Always move the shorter line inward.","timeComplexity":"O(N)","spaceComplexity":"O(1)","code":{"python":"def maxArea(height):\n    l, r = 0, len(height) - 1\n    max_water = 0\n    while l < r:\n        h = min(height[l], height[r])\n        max_water = max(max_water, h * (r - l))\n        if height[l] < height[r]:\n            l += 1\n        else:\n            r -= 1\n    return max_water\n\n# Test\nprint(maxArea([1,8,6,2,5,4,8,3,7]))","java":"class Solution {\n    public int maxArea(int[] height) {\n        int l = 0, r = height.length - 1, max = 0;\n        while (l < r) {\n            int h = Math.min(height[l], height[r]);\n            max = Math.max(max, h * (r - l));\n            if (height[l] < height[r]) l++;\n            else r--;\n        }\n        return max;\n    }\n}","cpp":"#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint maxArea(vector<int>& height) {\n    int l = 0, r = height.size() - 1, maxWater = 0;\n    while (l < r) {\n        int h = min(height[l], height[r]);\n        maxWater = max(maxWater, h * (r - l));\n        if (height[l] < height[r]) l++;\n        else r--;\n    }\n    return maxWater;\n}","javascript":"function maxArea(height) {\n  let l = 0, r = height.length - 1, maxWater = 0;\n  while (l < r) {\n    const h = Math.min(height[l], height[r]);\n    maxWater = Math.max(maxWater, h * (r - l));\n    if (height[l] < height[r]) l++;\n    else r--;\n  }\n  return maxWater;\n}\n\nconsole.log(maxArea([1,8,6,2,5,4,8,3,7]));"},"lineExplanations":[{"lines":[2,3],"text":"Initialize two pointers at ends and max_water = 0."},{"lines":[5,6],"text":"Calculate area constrained by shorter line: min(height[l], height[r]) * width."},{"lines":[7,10],"text":"Move pointer of the shorter line inward, because keeping the shorter line can never yield a larger area with reduced width."}],"animationSteps":[{"codeLine":2,"description":"l=0 (h=1), r=8 (h=7). Area = min(1, 7) * 8 = 8. Move left because 1 < 7.","state":{"type":"array","array":[1,8,6,2,5,4,8,3,7]},"highlights":[0,8],"pointers":{"L":0,"R":8}},{"codeLine":5,"description":"l=1 (h=8), r=8 (h=7). Area = min(8, 7) * 7 = 49! New max = 49.","state":{"type":"array","array":[1,8,6,2,5,4,8,3,7]},"highlights":[1,8],"pointers":{"L":1,"R":8}}]}],"commonMistakes":"Moving the taller line inward instead of the shorter line, which cannot possibly increase the area.","relatedQuestionIds":["two-sum-ii-sorted","trapping-rain-water"]},{"id":"longest-substring-no-repeat","title":"Longest Substring Without Repeating Characters","difficulty":"Medium","leetcode":{"number":3,"url":"https://leetcode.com/problems/longest-substring-without-repeating-characters/"},"description":"Given a string s, find the length of the longest substring without repeating characters.","constraints":"0 <= s.length <= 5 * 10^4.","examples":[{"input":"s = 'abcabcbb'","output":"3","why":"The answer is 'abc', with length 3."}],"approaches":[{"name":"Sliding Window with Index Map","idea":"Expand right pointer r. Store the last seen index of each character. When character s[r] was seen at index >= l, jump left pointer l to last_seen + 1.","timeComplexity":"O(N)","spaceComplexity":"O(min(N, M)) where M is character set size","code":{"python":"def lengthOfLongestSubstring(s: str) -> int:\n    last_seen = {}\n    l = 0\n    max_len = 0\n    for r, ch in enumerate(s):\n        if ch in last_seen and last_seen[ch] >= l:\n            l = last_seen[ch] + 1\n        last_seen[ch] = r\n        max_len = max(max_len, r - l + 1)\n    return max_len\n\n# Test\nprint(lengthOfLongestSubstring(\"abcabcbb\"))","java":"import java.util.*;\n\nclass Solution {\n    public int lengthOfLongestSubstring(String s) {\n        Map<Character, Integer> lastSeen = new HashMap<>();\n        int l = 0, maxLen = 0;\n        for (int r = 0; r < s.length(); r++) {\n            char ch = s.charAt(r);\n            if (lastSeen.containsKey(ch) && lastSeen.get(ch) >= l) {\n                l = lastSeen.get(ch) + 1;\n            }\n            lastSeen.put(ch, r);\n            maxLen = Math.max(maxLen, r - l + 1);\n        }\n        return maxLen;\n    }\n}","cpp":"#include <string>\n#include <unordered_map>\n#include <algorithm>\nusing namespace std;\n\nint lengthOfLongestSubstring(string s) {\n    unordered_map<char, int> lastSeen;\n    int l = 0, maxLen = 0;\n    for (int r = 0; r < (int)s.size(); r++) {\n        if (lastSeen.count(s[r]) && lastSeen[s[r]] >= l) {\n            l = lastSeen[s[r]] + 1;\n        }\n        lastSeen[s[r]] = r;\n        maxLen = max(maxLen, r - l + 1);\n    }\n    return maxLen;\n}","javascript":"function lengthOfLongestSubstring(s) {\n  const lastSeen = new Map();\n  let l = 0, maxLen = 0;\n  for (let r = 0; r < s.length; r++) {\n    const ch = s[r];\n    if (lastSeen.has(ch) && lastSeen.get(ch) >= l) {\n      l = lastSeen.get(ch) + 1;\n    }\n    lastSeen.set(ch, r);\n    maxLen = Math.max(maxLen, r - l + 1);\n  }\n  return maxLen;\n}\n\nconsole.log(lengthOfLongestSubstring(\"abcabcbb\"));"},"lineExplanations":[{"lines":[2,4],"text":"Initialize hash map to track last seen index of characters and left pointer l = 0."},{"lines":[6,7],"text":"If incoming character has been seen within current window (index >= l), jump l to index + 1."},{"lines":[8,9],"text":"Record current index and update max_len with window size (r - l + 1)."}],"animationSteps":[{"codeLine":5,"description":"r=0 ('a'): Window ['a'], len=1.","state":{"type":"array","array":["a","b","c","a","b","c","b","b"]},"highlights":[0],"pointers":{"L":0,"R":0}},{"codeLine":5,"description":"r=2 ('c'): Window ['a', 'b', 'c'], len=3.","state":{"type":"array","array":["a","b","c","a","b","c","b","b"]},"highlights":[0,1,2],"pointers":{"L":0,"R":2}},{"codeLine":7,"description":"r=3 ('a'): 'a' repeats! Jump l from 0 to 1. New window ['b', 'c', 'a'], len=3.","state":{"type":"array","array":["a","b","c","a","b","c","b","b"]},"highlights":[1,2,3],"pointers":{"L":1,"R":3}}]}],"commonMistakes":"Jumping l backward if a duplicate character was seen prior to the current window; always ensure last_seen[ch] >= l.","relatedQuestionIds":["container-with-most-water","minimum-window-substring"]},{"id":"trapping-rain-water","title":"Trapping Rain Water","difficulty":"Hard","leetcode":{"number":42,"url":"https://leetcode.com/problems/trapping-rain-water/"},"description":"Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.","constraints":"n >= 1; 0 <= height[i] <= 10^5.","examples":[{"input":"height = [0,1,0,2,1,0,1,3,2,1,2,1]","output":"6","why":"6 units of rain water are trapped between bars."}],"approaches":[{"name":"Two Pointers with LeftMax and RightMax","idea":"Water at position i is min(left_max, right_max) - height[i]. Use two pointers: if left_max < right_max, water is bounded by left_max so process left and increment l. Otherwise process right.","timeComplexity":"O(N)","spaceComplexity":"O(1)","code":{"python":"def trap(height):\n    if not height: return 0\n    l, r = 0, len(height) - 1\n    left_max, right_max = height[l], height[r]\n    water = 0\n    while l < r:\n        if left_max < right_max:\n            l += 1\n            left_max = max(left_max, height[l])\n            water += left_max - height[l]\n        else:\n            r -= 1\n            right_max = max(right_max, height[r])\n            water += right_max - height[r]\n    return water\n\n# Test\nprint(trap([0,1,0,2,1,0,1,3,2,1,2,1]))","java":"class Solution {\n    public int trap(int[] height) {\n        if (height == null || height.length == 0) return 0;\n        int l = 0, r = height.length - 1, water = 0;\n        int leftMax = height[l], rightMax = height[r];\n        while (l < r) {\n            if (leftMax < rightMax) {\n                l++;\n                leftMax = Math.max(leftMax, height[l]);\n                water += leftMax - height[l];\n            } else {\n                r--;\n                rightMax = Math.max(rightMax, height[r]);\n                water += rightMax - height[r];\n            }\n        }\n        return water;\n    }\n}","cpp":"#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint trap(vector<int>& height) {\n    if (height.empty()) return 0;\n    int l = 0, r = height.size() - 1, water = 0;\n    int leftMax = height[l], rightMax = height[r];\n    while (l < r) {\n        if (leftMax < rightMax) {\n            l++;\n            leftMax = max(leftMax, height[l]);\n            water += leftMax - height[l];\n        } else {\n            r--;\n            rightMax = max(rightMax, height[r]);\n            water += rightMax - height[r];\n        }\n    }\n    return water;\n}","javascript":"function trap(height) {\n  if (!height.length) return 0;\n  let l = 0, r = height.length - 1, water = 0;\n  let leftMax = height[l], rightMax = height[r];\n  while (l < r) {\n    if (leftMax < rightMax) {\n      l++;\n      leftMax = Math.max(leftMax, height[l]);\n      water += leftMax - height[l];\n    } else {\n      r--;\n      rightMax = Math.max(rightMax, height[r]);\n      water += rightMax - height[r];\n    }\n  }\n  return water;\n}\n\nconsole.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));"},"lineExplanations":[{"lines":[3,4],"text":"Initialize two pointers at ends and track left_max and right_max."},{"lines":[7,10],"text":"When left_max < right_max, water level is bottlenecked by left_max: accumulate water and advance left."},{"lines":[12,15],"text":"Otherwise water level is bottlenecked by right_max: accumulate water and decrement right."}],"animationSteps":[{"codeLine":3,"description":"Init: l=0, r=11. left_max=0, right_max=1.","state":{"type":"array","array":[0,1,0,2,1,0,1,3,2,1,2,1]},"highlights":[0,11],"pointers":{"L":0,"R":11}},{"codeLine":8,"description":"l=2 (height 0): left_max=1, right_max=1. Water trapped = 1 - 0 = 1 unit.","state":{"type":"array","array":[0,1,0,2,1,0,1,3,2,1,2,1]},"highlights":[2],"pointers":{"TRAP=1":2}}]}],"commonMistakes":"Computing arrays for left_max and right_max taking O(N) auxiliary space instead of O(1) two pointers.","relatedQuestionIds":["container-with-most-water","two-sum-ii-sorted"]}]},{"id":"arrays-prefix-kadane","title":"Prefix Sums & Kadane's Algorithm","questions":[{"id":"maximum-subarray-kadane","title":"Maximum Subarray (Kadane's Algorithm)","difficulty":"Medium","leetcode":{"number":53,"url":"https://leetcode.com/problems/maximum-subarray/"},"description":"Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.","constraints":"1 <= nums.length <= 10^5; -10^4 <= nums[i] <= 10^4.","examples":[{"input":"nums = [-2,1,-3,4,-1,2,1,-5,4]","output":"6","why":"The contiguous subarray [4,-1,2,1] has the largest sum = 6."}],"approaches":[{"name":"Kadane's Dynamic Programming Algorithm","idea":"At each index i, we decide either to add nums[i] to the current running subarray sum, or reset and start a fresh subarray at nums[i]: curr_sum = max(nums[i], curr_sum + nums[i]).","timeComplexity":"O(N)","spaceComplexity":"O(1)","code":{"python":"def maxSubArray(nums):\n    max_sum = nums[0]\n    curr_sum = nums[0]\n    for x in nums[1:]:\n        curr_sum = max(x, curr_sum + x)\n        max_sum = max(max_sum, curr_sum)\n    return max_sum\n\n# Test\nprint(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))","java":"class Solution {\n    public int maxSubArray(int[] nums) {\n        int maxSum = nums[0], currSum = nums[0];\n        for (int i = 1; i < nums.length; i++) {\n            currSum = Math.max(nums[i], currSum + nums[i]);\n            maxSum = Math.max(maxSum, currSum);\n        }\n        return maxSum;\n    }\n}","cpp":"#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint maxSubArray(vector<int>& nums) {\n    int maxSum = nums[0], currSum = nums[0];\n    for (size_t i = 1; i < nums.size(); i++) {\n        currSum = max(nums[i], currSum + nums[i]);\n        maxSum = max(maxSum, currSum);\n    }\n    return maxSum;\n}","javascript":"function maxSubArray(nums) {\n  let maxSum = nums[0], currSum = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    currSum = Math.max(nums[i], currSum + nums[i]);\n    maxSum = Math.max(maxSum, currSum);\n  }\n  return maxSum;\n}\n\nconsole.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));"},"lineExplanations":[{"lines":[2,3],"text":"Initialize max_sum and curr_sum to first element."},{"lines":[4,5],"text":"Dynamic Choice: Extend existing subarray (curr_sum + x) or start a new subarray from x."},{"lines":[6,6],"text":"Update global max_sum if curr_sum exceeds it."}],"animationSteps":[{"codeLine":2,"description":"Init: curr_sum = -2, max_sum = -2.","state":{"type":"array","array":[-2,1,-3,4,-1,2,1,-5,4]},"highlights":[0],"pointers":{"i":0}},{"codeLine":5,"description":"i=1 (1): max(1, -2+1) = 1. Reset running subarray! max_sum = 1.","state":{"type":"array","array":[-2,1,-3,4,-1,2,1,-5,4]},"highlights":[1],"pointers":{"RESET":1}},{"codeLine":5,"description":"Subarray [4, -1, 2, 1] accumulates sum = 6! Global max = 6.","state":{"type":"array","array":[-2,1,-3,4,-1,2,1,-5,4]},"highlights":[3,4,5,6],"pointers":{"MAX=6":6}}]}],"commonMistakes":"Initializing max_sum to 0 instead of nums[0], which fails when all array elements are negative.","relatedQuestionIds":["product-except-self","subarray-sum-equals-k"]},{"id":"product-except-self","title":"Product of Array Except Self","difficulty":"Medium","leetcode":{"number":238,"url":"https://leetcode.com/problems/product-of-array-except-self/"},"description":"Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. Must run in O(N) time without using the division operation.","constraints":"2 <= nums.length <= 10^5; -30 <= nums[i] <= 30.","examples":[{"input":"nums = [1, 2, 3, 4]","output":"[24, 12, 8, 6]","why":"24 = 2*3*4, 12 = 1*3*4, 8 = 1*2*4, 6 = 1*2*3."}],"approaches":[{"name":"Prefix and Suffix Products in O(1) Extra Space","idea":"Answer[i] = (Product of all elements to the left) * (Product of all elements to the right). Compute prefix products directly in the output array in pass 1, then multiply suffix products on the fly in pass 2.","timeComplexity":"O(N)","spaceComplexity":"O(1) auxiliary (output array does not count as extra space)","code":{"python":"def productExceptSelf(nums):\n    n = len(nums)\n    res = [1] * n\n    \n    # Prefix pass: res[i] contains product of elements to left of i\n    prefix = 1\n    for i in range(n):\n        res[i] = prefix\n        prefix *= nums[i]\n        \n    # Suffix pass: multiply by product of elements to right of i\n    suffix = 1\n    for i in range(n - 1, -1, -1):\n        res[i] *= suffix\n        suffix *= nums[i]\n        \n    return res\n\n# Test\nprint(productExceptSelf([1, 2, 3, 4]))","java":"class Solution {\n    public int[] productExceptSelf(int[] nums) {\n        int n = nums.length;\n        int[] res = new int[n];\n        int prefix = 1;\n        for (int i = 0; i < n; i++) {\n            res[i] = prefix;\n            prefix *= nums[i];\n        }\n        int suffix = 1;\n        for (int i = n - 1; i >= 0; i--) {\n            res[i] *= suffix;\n            suffix *= nums[i];\n        }\n        return res;\n    }\n}","cpp":"#include <vector>\nusing namespace std;\n\nvector<int> productExceptSelf(vector<int>& nums) {\n    int n = nums.size();\n    vector<int> res(n, 1);\n    int prefix = 1;\n    for (int i = 0; i < n; i++) {\n        res[i] = prefix;\n        prefix *= nums[i];\n    }\n    int suffix = 1;\n    for (int i = n - 1; i >= 0; i--) {\n        res[i] *= suffix;\n        suffix *= nums[i];\n    }\n    return res;\n}","javascript":"function productExceptSelf(nums) {\n  const n = nums.length;\n  const res = new Array(n).fill(1);\n  let prefix = 1;\n  for (let i = 0; i < n; i++) {\n    res[i] = prefix;\n    prefix *= nums[i];\n  }\n  let suffix = 1;\n  for (let i = n - 1; i >= 0; i--) {\n    res[i] *= suffix;\n    suffix *= nums[i];\n  }\n  return res;\n}\n\nconsole.log(JSON.stringify(productExceptSelf([1, 2, 3, 4])));"},"lineExplanations":[{"lines":[5,9],"text":"First pass: store cumulative product of all elements to the left of index i."},{"lines":[11,15],"text":"Second pass (backwards): multiply res[i] by cumulative suffix product of elements to the right."}],"animationSteps":[{"codeLine":6,"description":"Pass 1 (Prefix): res = [1, 1, 2, 6].","state":{"type":"array","array":[1,1,2,6]},"highlights":[0,1,2,3],"pointers":{"PREFIX":3}},{"codeLine":12,"description":"Pass 2 (Suffix): Suffix traverses backwards. Final res = [24, 12, 8, 6].","state":{"type":"array","array":[24,12,8,6]},"highlights":[0,1,2,3],"pointers":{"FINAL":0}}]}],"commonMistakes":"Dividing the total product by nums[i], which fails if array contains zero (ZeroDivisionError) or multiple zeros.","relatedQuestionIds":["maximum-subarray-kadane","merge-intervals"]},{"id":"merge-intervals","title":"Merge Intervals","difficulty":"Medium","leetcode":{"number":56,"url":"https://leetcode.com/problems/merge-intervals/"},"description":"Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.","constraints":"1 <= intervals.length <= 10^4; intervals[i].length == 2; 0 <= start_i <= end_i <= 10^4.","examples":[{"input":"intervals = [[1,3],[2,6],[8,10],[15,18]]","output":"[[1,6],[8,10],[15,18]]","why":"Intervals [1,3] and [2,6] overlap into [1,6]."}],"approaches":[{"name":"Sort by Start Time and Merge","idea":"Sort intervals by start time. Iterate through sorted list: if current interval overlaps with the last merged interval (curr.start <= last.end), merge them by setting last.end = max(last.end, curr.end). Otherwise append.","timeComplexity":"O(N log N) due to sorting","spaceComplexity":"O(N) for output","code":{"python":"def merge(intervals):\n    intervals.sort(key=lambda x: x[0])\n    merged = [intervals[0]]\n    for start, end in intervals[1:]:\n        last_end = merged[-1][1]\n        if start <= last_end:\n            merged[-1][1] = max(last_end, end)\n        else:\n            merged.append([start, end])\n    return merged\n\n# Test\nprint(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))","java":"import java.util.*;\n\nclass Solution {\n    public int[][] merge(int[][] intervals) {\n        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));\n        List<int[]> res = new ArrayList<>();\n        res.add(intervals[0]);\n        for (int i = 1; i < intervals.length; i++) {\n            int[] last = res.get(res.size() - 1);\n            if (intervals[i][0] <= last[1]) {\n                last[1] = Math.max(last[1], intervals[i][1]);\n            } else {\n                res.add(intervals[i]);\n            }\n        }\n        return res.toArray(new int[res.size()][]);\n    }\n}","cpp":"#include <vector>\n#include <algorithm>\nusing namespace std;\n\nvector<vector<int>> merge(vector<vector<int>>& intervals) {\n    sort(intervals.begin(), intervals.end());\n    vector<vector<int>> merged = {intervals[0]};\n    for (size_t i = 1; i < intervals.size(); i++) {\n        if (intervals[i][0] <= merged.back()[1]) {\n            merged.back()[1] = max(merged.back()[1], intervals[i][1]);\n        } else {\n            merged.push_back(intervals[i]);\n        }\n    }\n    return merged;\n}","javascript":"function merge(intervals) {\n  intervals.sort((a, b) => a[0] - b[0]);\n  const merged = [intervals[0]];\n  for (let i = 1; i < intervals.length; i++) {\n    const last = merged[merged.length - 1];\n    if (intervals[i][0] <= last[1]) {\n      last[1] = Math.max(last[1], intervals[i][1]);\n    } else {\n      merged.push(intervals[i]);\n    }\n  }\n  return merged;\n}\n\nconsole.log(JSON.stringify(merge([[1, 3], [2, 6], [8, 10], [15, 18]])));"},"lineExplanations":[{"lines":[2,2],"text":"Sort all intervals by their starting times so potential overlaps are adjacent."},{"lines":[5,7],"text":"If start <= last_end, overlap detected: extend last_end to max(last_end, end)."},{"lines":[8,9],"text":"No overlap: append interval as a new disjoint interval."}],"animationSteps":[{"codeLine":2,"description":"Sorted intervals: [[1,3], [2,6], [8,10], [15,18]]. Merged = [[1,3]].","state":{"type":"array","array":["[1,3]","[2,6]","[8,10]","[15,18]"]},"highlights":[0],"pointers":{"MERGED":0}},{"codeLine":6,"description":"[2,6] overlaps [1,3] because 2 <= 3. Merge: [1, max(3, 6)] -> [1,6].","state":{"type":"array","array":["[1,6]","[8,10]","[15,18]"]},"highlights":[0],"pointers":{"EXTENDED":0}},{"codeLine":9,"description":"[8,10] starts at 8 > 6: disjoint. Append [8,10].","state":{"type":"array","array":["[1,6]","[8,10]","[15,18]"]},"highlights":[1],"pointers":{"APPEND":1}}]}],"commonMistakes":"Forgetting that intervals might not be sorted initially by start time.","relatedQuestionIds":["maximum-subarray-kadane","arr-rotate"]}]}],
    questions: [
  {
    "id": "arr-basics-create",
    "title": "Array Memory Layout & Contiguous Allocation",
    "difficulty": "Basic",
    "leetcode": null,
    "description": "Demonstrate how arrays are stored contiguously in memory. Compute the physical memory address of any index i given base address 0x1000 and element size (4 bytes).",
    "constraints": "Array of 32-bit integers; address(i) = base + (i * 4).",
    "examples": [
      {
        "input": "arr = [10, 20, 30, 40], base = 0x1000",
        "output": "['0x1000: 10', '0x1004: 20', '0x1008: 30', '0x100C: 40']",
        "why": "Each 32-bit integer occupies 4 bytes sequentially in memory."
      }
    ],
    "approach": {
      "name": "Pointer Offset Formula",
      "idea": "Array indexing arr[i] is syntactic sugar for *(base + i * sizeof(type)). This provides guaranteed O(1) random access.",
      "timeComplexity": "O(N) to traverse, O(1) to access any element",
      "spaceComplexity": "O(1)"
    },
    "commonMistakes": "Confusing byte-addressed indexing with element-index math (e.g. forgetting to multiply index by sizeof(type)).",
    "relatedQuestionIds": [
      "arr-insert-delete",
      "arr-reverse"
    ],
    "tracer": "arr-basics-create",
    "sampleInput": "arr = [10, 20, 30, 40], base = 0x1000"
  },
  {
    "id": "arr-rotate",
    "title": "Rotate Array by K Steps",
    "difficulty": "Medium",
    "leetcode": {
      "number": 189,
      "url": "https://leetcode.com/problems/rotate-array/"
    },
    "description": "Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.",
    "constraints": "1 <= nums.length <= 10^5; -2^31 <= nums[i] <= 2^31 - 1; 0 <= k <= 10^5.",
    "examples": [
      {
        "input": "nums = [1, 2, 3, 4, 5, 6, 7], k = 3",
        "output": "[5, 6, 7, 1, 2, 3, 4]",
        "why": "Rotate 1 step: [7, 1, 2, 3, 4, 5, 6]. 2 steps: [6, 7, 1, 2, 3, 4, 5]. 3 steps: [5, 6, 7, 1, 2, 3, 4]."
      }
    ],
    "approach": {
      "name": "Three-Reversal Algorithm",
      "idea": "1. Reverse the entire array. 2. Reverse first k elements. 3. Reverse remaining n - k elements. Works in O(1) auxiliary space!",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "commonMistakes": "Creating a new array of size N instead of using in-place reversals, failing the O(1) auxiliary space constraint.",
    "relatedQuestionIds": [
      "arr-reverse",
      "arr-basics-create"
    ],
    "tracer": "arr-rotate",
    "sampleInput": "nums = [1, 2, 3, 4, 5, 6, 7], k = 3"
  },
  {
    "id": "two-sum-ii-sorted",
    "title": "Two Sum II - Input Array Is Sorted",
    "difficulty": "Medium",
    "leetcode": {
      "number": 167,
      "url": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/"
    },
    "description": "Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.",
    "constraints": "2 <= numbers.length <= 3 * 10^4; -1000 <= numbers[i] <= 1000; numbers is sorted.",
    "examples": [
      {
        "input": "numbers = [2, 7, 11, 15], target = 9",
        "output": "[1, 2]",
        "why": "The sum of 2 and 7 is 9. Since it is 1-indexed, index1 = 1, index2 = 2."
      }
    ],
    "approach": {
      "name": "Two Pointers (Left and Right)",
      "idea": "Place left pointer at start and right pointer at end. If sum < target, advance left to increase sum. If sum > target, decrement right to decrease sum.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "commonMistakes": "Returning 0-indexed indices instead of 1-indexed as requested by the problem.",
    "relatedQuestionIds": [
      "three-sum",
      "container-with-most-water"
    ],
    "tracer": "two-sum-ii-sorted",
    "sampleInput": "numbers = [2, 7, 11, 15], target = 9"
  },
  {
    "id": "container-with-most-water",
    "title": "Container With Most Water",
    "difficulty": "Medium",
    "leetcode": {
      "number": 11,
      "url": "https://leetcode.com/problems/container-with-most-water/"
    },
    "description": "Given n non-negative integers representing vertical lines, find two lines that together with the x-axis form a container containing the most water.",
    "constraints": "n >= 2; height[i] >= 0.",
    "examples": [
      {
        "input": "height = [1,8,6,2,5,4,8,3,7]",
        "output": "49",
        "why": "Between index 1 (height 8) and index 8 (height 7): width = 7, min_height = 7, area = 7 * 7 = 49."
      }
    ],
    "approach": {
      "name": "Greedy Two Pointers",
      "idea": "Start with maximum width (pointers at both ends). The water volume is limited by the shorter line: area = min(h[l], h[r]) * (r - l). Always move the shorter line inward.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "commonMistakes": "Moving the taller line inward instead of the shorter line, which cannot possibly increase the area.",
    "relatedQuestionIds": [
      "two-sum-ii-sorted",
      "trapping-rain-water"
    ],
    "tracer": "container-with-most-water",
    "sampleInput": "height = [1,8,6,2,5,4,8,3,7]"
  },
  {
    "id": "longest-substring-no-repeat",
    "title": "Longest Substring Without Repeating Characters",
    "difficulty": "Medium",
    "leetcode": {
      "number": 3,
      "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
    },
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "constraints": "0 <= s.length <= 5 * 10^4.",
    "examples": [
      {
        "input": "s = 'abcabcbb'",
        "output": "3",
        "why": "The answer is 'abc', with length 3."
      }
    ],
    "approach": {
      "name": "Sliding Window with Index Map",
      "idea": "Expand right pointer r. Store the last seen index of each character. When character s[r] was seen at index >= l, jump left pointer l to last_seen + 1.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(min(N, M)) where M is character set size"
    },
    "commonMistakes": "Jumping l backward if a duplicate character was seen prior to the current window; always ensure last_seen[ch] >= l.",
    "relatedQuestionIds": [
      "container-with-most-water",
      "minimum-window-substring"
    ],
    "tracer": "longest-substring-no-repeat",
    "sampleInput": "s = 'abcabcbb'"
  },
  {
    "id": "trapping-rain-water",
    "title": "Trapping Rain Water",
    "difficulty": "Hard",
    "leetcode": {
      "number": 42,
      "url": "https://leetcode.com/problems/trapping-rain-water/"
    },
    "description": "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    "constraints": "n >= 1; 0 <= height[i] <= 10^5.",
    "examples": [
      {
        "input": "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        "output": "6",
        "why": "6 units of rain water are trapped between bars."
      }
    ],
    "approach": {
      "name": "Two Pointers with LeftMax and RightMax",
      "idea": "Water at position i is min(left_max, right_max) - height[i]. Use two pointers: if left_max < right_max, water is bounded by left_max so process left and increment l. Otherwise process right.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "commonMistakes": "Computing arrays for left_max and right_max taking O(N) auxiliary space instead of O(1) two pointers.",
    "relatedQuestionIds": [
      "container-with-most-water",
      "two-sum-ii-sorted"
    ],
    "tracer": "trapping-rain-water",
    "sampleInput": "height = [0,1,0,2,1,0,1,3,2,1,2,1]"
  },
  {
    "id": "maximum-subarray-kadane",
    "title": "Maximum Subarray (Kadane's Algorithm)",
    "difficulty": "Medium",
    "leetcode": {
      "number": 53,
      "url": "https://leetcode.com/problems/maximum-subarray/"
    },
    "description": "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    "constraints": "1 <= nums.length <= 10^5; -10^4 <= nums[i] <= 10^4.",
    "examples": [
      {
        "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        "output": "6",
        "why": "The contiguous subarray [4,-1,2,1] has the largest sum = 6."
      }
    ],
    "approach": {
      "name": "Kadane's Dynamic Programming Algorithm",
      "idea": "At each index i, we decide either to add nums[i] to the current running subarray sum, or reset and start a fresh subarray at nums[i]: curr_sum = max(nums[i], curr_sum + nums[i]).",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "commonMistakes": "Initializing max_sum to 0 instead of nums[0], which fails when all array elements are negative.",
    "relatedQuestionIds": [
      "product-except-self",
      "subarray-sum-equals-k"
    ],
    "tracer": "maximum-subarray-kadane",
    "sampleInput": "nums = [-2,1,-3,4,-1,2,1,-5,4]"
  },
  {
    "id": "product-except-self",
    "title": "Product of Array Except Self",
    "difficulty": "Medium",
    "leetcode": {
      "number": 238,
      "url": "https://leetcode.com/problems/product-of-array-except-self/"
    },
    "description": "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. Must run in O(N) time without using the division operation.",
    "constraints": "2 <= nums.length <= 10^5; -30 <= nums[i] <= 30.",
    "examples": [
      {
        "input": "nums = [1, 2, 3, 4]",
        "output": "[24, 12, 8, 6]",
        "why": "24 = 2*3*4, 12 = 1*3*4, 8 = 1*2*4, 6 = 1*2*3."
      }
    ],
    "approach": {
      "name": "Prefix and Suffix Products in O(1) Extra Space",
      "idea": "Answer[i] = (Product of all elements to the left) * (Product of all elements to the right). Compute prefix products directly in the output array in pass 1, then multiply suffix products on the fly in pass 2.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1) auxiliary (output array does not count as extra space)"
    },
    "commonMistakes": "Dividing the total product by nums[i], which fails if array contains zero (ZeroDivisionError) or multiple zeros.",
    "relatedQuestionIds": [
      "maximum-subarray-kadane",
      "merge-intervals"
    ],
    "tracer": "product-except-self",
    "sampleInput": "nums = [1, 2, 3, 4]"
  },
  {
    "id": "merge-intervals",
    "title": "Merge Intervals",
    "difficulty": "Medium",
    "leetcode": {
      "number": 56,
      "url": "https://leetcode.com/problems/merge-intervals/"
    },
    "description": "Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
    "constraints": "1 <= intervals.length <= 10^4; intervals[i].length == 2; 0 <= start_i <= end_i <= 10^4.",
    "examples": [
      {
        "input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        "output": "[[1,6],[8,10],[15,18]]",
        "why": "Intervals [1,3] and [2,6] overlap into [1,6]."
      }
    ],
    "approach": {
      "name": "Sort by Start Time and Merge",
      "idea": "Sort intervals by start time. Iterate through sorted list: if current interval overlaps with the last merged interval (curr.start <= last.end), merge them by setting last.end = max(last.end, curr.end). Otherwise append.",
      "timeComplexity": "O(N log N) due to sorting",
      "spaceComplexity": "O(N) for output"
    },
    "commonMistakes": "Forgetting that intervals might not be sorted initially by start time.",
    "relatedQuestionIds": [
      "maximum-subarray-kadane",
      "arr-rotate"
    ],
    "tracer": "merge-intervals",
    "sampleInput": "intervals = [[1,3],[2,6],[8,10],[15,18]]"
  }
]
  };
})(typeof window !== 'undefined' ? window : global);
