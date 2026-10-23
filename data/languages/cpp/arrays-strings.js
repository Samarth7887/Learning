/**
 * SynapseCS Language-Specific Implementation: CPP - arrays-strings
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['cpp'] = window.DSA_LANG_CODE['cpp'] || {};
  window.DSA_LANG_CODE['cpp']['arrays-strings'] = [
  {
    "id": "arr-basics-create",
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
        "text": "#include <cstdio>",
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
        "text": "vector<string> getAddresses(const vector<int>& arr, int base = 0x1000) {",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "    vector<string> res;",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    char buf[32];",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    for (size_t i = 0; i < arr.size(); i++) {",
        "tag": "loop",
        "lineNum": 9
      },
      {
        "text": "        snprintf(buf, sizeof(buf), \"0x%04X: %d\", (unsigned int)(base + i * 4), arr[i]);",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        res.push_back(buf);",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    return res;",
        "tag": "return",
        "lineNum": 13
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 14
      }
    ],
    "rawCode": "#include <vector>\n#include <string>\n#include <cstdio>\nusing namespace std;\n\nvector<string> getAddresses(const vector<int>& arr, int base = 0x1000) {\n    vector<string> res;\n    char buf[32];\n    for (size_t i = 0; i < arr.size(); i++) {\n        snprintf(buf, sizeof(buf), \"0x%04X: %d\", (unsigned int)(base + i * 4), arr[i]);\n        res.push_back(buf);\n    }\n    return res;\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "comment": "Executes tagged statement [comment] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "arr-rotate",
    "code": [
      {
        "text": "#include <vector>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <algorithm>",
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
        "text": "void rotate(vector<int>& nums, int k) {",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    k %= nums.size();",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    reverse(nums.begin(), nums.end());",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    reverse(nums.begin(), nums.begin() + k);",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    reverse(nums.begin() + k, nums.end());",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 10
      }
    ],
    "rawCode": "#include <vector>\n#include <algorithm>\nusing namespace std;\n\nvoid rotate(vector<int>& nums, int k) {\n    k %= nums.size();\n    reverse(nums.begin(), nums.end());\n    reverse(nums.begin(), nums.begin() + k);\n    reverse(nums.begin() + k, nums.end());\n}",
    "explanations": {
      "comment": "Executes tagged statement [comment] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "two-sum-ii-sorted",
    "code": [
      {
        "text": "#include <vector>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "using namespace std;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "vector<int> twoSum(vector<int>& numbers, int target) {",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    int l = 0, r = numbers.size() - 1;",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "    while (l < r) {",
        "tag": "loop",
        "lineNum": 6
      },
      {
        "text": "        int sum = numbers[l] + numbers[r];",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "        if (sum == target) return {l + 1, r + 1};",
        "tag": "branch",
        "lineNum": 8
      },
      {
        "text": "        if (sum < target) l++;",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "        else r--;",
        "tag": "branch",
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
    "rawCode": "#include <vector>\nusing namespace std;\n\nvector<int> twoSum(vector<int>& numbers, int target) {\n    int l = 0, r = numbers.size() - 1;\n    while (l < r) {\n        int sum = numbers[l] + numbers[r];\n        if (sum == target) return {l + 1, r + 1};\n        if (sum < target) l++;\n        else r--;\n    }\n    return {};\n}",
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
    "id": "container-with-most-water",
    "code": [
      {
        "text": "#include <vector>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <algorithm>",
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
        "text": "int maxArea(vector<int>& height) {",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    int l = 0, r = height.size() - 1, maxWater = 0;",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "    while (l < r) {",
        "tag": "loop",
        "lineNum": 7
      },
      {
        "text": "        int h = min(height[l], height[r]);",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        maxWater = max(maxWater, h * (r - l));",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        if (height[l] < height[r]) l++;",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "        else r--;",
        "tag": "branch",
        "lineNum": 11
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    return maxWater;",
        "tag": "return",
        "lineNum": 13
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 14
      }
    ],
    "rawCode": "#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint maxArea(vector<int>& height) {\n    int l = 0, r = height.size() - 1, maxWater = 0;\n    while (l < r) {\n        int h = min(height[l], height[r]);\n        maxWater = max(maxWater, h * (r - l));\n        if (height[l] < height[r]) l++;\n        else r--;\n    }\n    return maxWater;\n}",
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
    "id": "longest-substring-no-repeat",
    "code": [
      {
        "text": "#include <string>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <unordered_map>",
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
        "text": "int lengthOfLongestSubstring(string s) {",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    unordered_map<char, int> lastSeen;",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    int l = 0, maxLen = 0;",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "    for (int r = 0; r < (int)s.size(); r++) {",
        "tag": "loop",
        "lineNum": 9
      },
      {
        "text": "        if (lastSeen.count(s[r]) && lastSeen[s[r]] >= l) {",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "            l = lastSeen[s[r]] + 1;",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "        lastSeen[s[r]] = r;",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        maxLen = max(maxLen, r - l + 1);",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    return maxLen;",
        "tag": "return",
        "lineNum": 16
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 17
      }
    ],
    "rawCode": "#include <string>\n#include <unordered_map>\n#include <algorithm>\nusing namespace std;\n\nint lengthOfLongestSubstring(string s) {\n    unordered_map<char, int> lastSeen;\n    int l = 0, maxLen = 0;\n    for (int r = 0; r < (int)s.size(); r++) {\n        if (lastSeen.count(s[r]) && lastSeen[s[r]] >= l) {\n            l = lastSeen[s[r]] + 1;\n        }\n        lastSeen[s[r]] = r;\n        maxLen = max(maxLen, r - l + 1);\n    }\n    return maxLen;\n}",
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
    "id": "trapping-rain-water",
    "code": [
      {
        "text": "#include <vector>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <algorithm>",
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
        "text": "int trap(vector<int>& height) {",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    if (height.empty()) return 0;",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "    int l = 0, r = height.size() - 1, water = 0;",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "    int leftMax = height[l], rightMax = height[r];",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    while (l < r) {",
        "tag": "loop",
        "lineNum": 9
      },
      {
        "text": "        if (leftMax < rightMax) {",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "            l++;",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "            leftMax = max(leftMax, height[l]);",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "            water += leftMax - height[l];",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        } else {",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "            r--;",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "            rightMax = max(rightMax, height[r]);",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "            water += rightMax - height[r];",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "    return water;",
        "tag": "return",
        "lineNum": 20
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 21
      }
    ],
    "rawCode": "#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint trap(vector<int>& height) {\n    if (height.empty()) return 0;\n    int l = 0, r = height.size() - 1, water = 0;\n    int leftMax = height[l], rightMax = height[r];\n    while (l < r) {\n        if (leftMax < rightMax) {\n            l++;\n            leftMax = max(leftMax, height[l]);\n            water += leftMax - height[l];\n        } else {\n            r--;\n            rightMax = max(rightMax, height[r]);\n            water += rightMax - height[r];\n        }\n    }\n    return water;\n}",
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
    "id": "maximum-subarray-kadane",
    "code": [
      {
        "text": "#include <vector>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <algorithm>",
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
        "text": "int maxSubArray(vector<int>& nums) {",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    int maxSum = nums[0], currSum = nums[0];",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    for (size_t i = 1; i < nums.size(); i++) {",
        "tag": "loop",
        "lineNum": 7
      },
      {
        "text": "        currSum = max(nums[i], currSum + nums[i]);",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        maxSum = max(maxSum, currSum);",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    return maxSum;",
        "tag": "return",
        "lineNum": 11
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 12
      }
    ],
    "rawCode": "#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint maxSubArray(vector<int>& nums) {\n    int maxSum = nums[0], currSum = nums[0];\n    for (size_t i = 1; i < nums.size(); i++) {\n        currSum = max(nums[i], currSum + nums[i]);\n        maxSum = max(maxSum, currSum);\n    }\n    return maxSum;\n}",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "comment": "Executes tagged statement [comment] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "product-except-self",
    "code": [
      {
        "text": "#include <vector>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "using namespace std;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "vector<int> productExceptSelf(vector<int>& nums) {",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    int n = nums.size();",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    vector<int> res(n, 1);",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    int prefix = 1;",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    for (int i = 0; i < n; i++) {",
        "tag": "loop",
        "lineNum": 8
      },
      {
        "text": "        res[i] = prefix;",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        prefix *= nums[i];",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    int suffix = 1;",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    for (int i = n - 1; i >= 0; i--) {",
        "tag": "loop",
        "lineNum": 13
      },
      {
        "text": "        res[i] *= suffix;",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "        suffix *= nums[i];",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "    return res;",
        "tag": "return",
        "lineNum": 17
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 18
      }
    ],
    "rawCode": "#include <vector>\nusing namespace std;\n\nvector<int> productExceptSelf(vector<int>& nums) {\n    int n = nums.size();\n    vector<int> res(n, 1);\n    int prefix = 1;\n    for (int i = 0; i < n; i++) {\n        res[i] = prefix;\n        prefix *= nums[i];\n    }\n    int suffix = 1;\n    for (int i = n - 1; i >= 0; i--) {\n        res[i] *= suffix;\n        suffix *= nums[i];\n    }\n    return res;\n}",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "comment": "Executes tagged statement [comment] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "merge-intervals",
    "code": [
      {
        "text": "#include <vector>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <algorithm>",
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
        "text": "vector<vector<int>> merge(vector<vector<int>>& intervals) {",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    sort(intervals.begin(), intervals.end());",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    vector<vector<int>> merged = {intervals[0]};",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    for (size_t i = 1; i < intervals.size(); i++) {",
        "tag": "loop",
        "lineNum": 8
      },
      {
        "text": "        if (intervals[i][0] <= merged.back()[1]) {",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "            merged.back()[1] = max(merged.back()[1], intervals[i][1]);",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        } else {",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "            merged.push_back(intervals[i]);",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    return merged;",
        "tag": "return",
        "lineNum": 15
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 16
      }
    ],
    "rawCode": "#include <vector>\n#include <algorithm>\nusing namespace std;\n\nvector<vector<int>> merge(vector<vector<int>>& intervals) {\n    sort(intervals.begin(), intervals.end());\n    vector<vector<int>> merged = {intervals[0]};\n    for (size_t i = 1; i < intervals.size(); i++) {\n        if (intervals[i][0] <= merged.back()[1]) {\n            merged.back()[1] = max(merged.back()[1], intervals[i][1]);\n        } else {\n            merged.push_back(intervals[i]);\n        }\n    }\n    return merged;\n}",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "comment": "Executes tagged statement [comment] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  }
];
})(typeof window !== 'undefined' ? window : global);
