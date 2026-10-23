/**
 * SynapseCS Language-Specific Implementation: C - arrays-strings
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['c'] = window.DSA_LANG_CODE['c'] || {};
  window.DSA_LANG_CODE['c']['arrays-strings'] = [
  {
    "id": "arr-basics-create",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <stdlib.h>",
        "code": "#include <stdlib.h>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "void printAddresses(int* arr, int n) {",
        "code": "void printAddresses(int* arr, int n) {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    for (int i = 0; i < n; i++) {",
        "code": "    for (int i = 0; i < n; i++) {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "        printf(\"Index %d: Address %p, Value %d\\n\", i, (void*)&arr[i], arr[i]);",
        "code": "        printf(\"Index %d: Address %p, Value %d\\n\", i, (void*)&arr[i], arr[i]);",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "int main() {",
        "code": "int main() {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "    int arr[4] = {10, 20, 30, 40};",
        "code": "    int arr[4] = {10, 20, 30, 40};",
        "tag": "init",
        "lineNum": 11
      },
      {
        "text": "    printAddresses(arr, 4);",
        "code": "    printAddresses(arr, 4);",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    return 0;",
        "code": "    return 0;",
        "tag": "return",
        "lineNum": 13
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 14
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid printAddresses(int* arr, int n) {\n    for (int i = 0; i < n; i++) {\n        printf(\"Index %d: Address %p, Value %d\\n\", i, (void*)&arr[i], arr[i]);\n    }\n}\n\nint main() {\n    int arr[4] = {10, 20, 30, 40};\n    printAddresses(arr, 4);\n    return 0;\n}",
    "explanations": {
      "def": "Define function printAddresses taking integer pointer and array length.",
      "init": "Stack-allocate fixed array int arr[4] = {10, 20, 30, 40}.",
      "exec": "Format and print memory address (%p) and value (%d) of each contiguous array element.",
      "return": "Return 0 indicating successful program execution.",
      "comment": "Standard I/O header inclusions."
    },
    "notes": "In C, arrays are contiguous blocks of memory where arr[i] evaluates to *(arr + i), with each element offset by sizeof(int) (usually 4 bytes)."
  },
  {
    "id": "arr-rotate",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "void reverse(int* nums, int l, int r) {",
        "code": "void reverse(int* nums, int l, int r) {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    while (l < r) {",
        "code": "    while (l < r) {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "        int temp = nums[l];",
        "code": "        int temp = nums[l];",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "        nums[l] = nums[r];",
        "code": "        nums[l] = nums[r];",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "        nums[r] = temp;",
        "code": "        nums[r] = temp;",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "        l++;",
        "code": "        l++;",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        r--;",
        "code": "        r--;",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "void rotate(int* nums, int numsSize, int k) {",
        "code": "void rotate(int* nums, int numsSize, int k) {",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "    k %= numsSize;",
        "code": "    k %= numsSize;",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    reverse(nums, 0, numsSize - 1);",
        "code": "    reverse(nums, 0, numsSize - 1);",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    reverse(nums, 0, k - 1);",
        "code": "    reverse(nums, 0, k - 1);",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "    reverse(nums, k, numsSize - 1);",
        "code": "    reverse(nums, k, numsSize - 1);",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 18
      }
    ],
    "rawCode": "#include <stdio.h>\n\nvoid reverse(int* nums, int l, int r) {\n    while (l < r) {\n        int temp = nums[l];\n        nums[l] = nums[r];\n        nums[r] = temp;\n        l++;\n        r--;\n    }\n}\n\nvoid rotate(int* nums, int numsSize, int k) {\n    k %= numsSize;\n    reverse(nums, 0, numsSize - 1);\n    reverse(nums, 0, k - 1);\n    reverse(nums, k, numsSize - 1);\n}",
    "explanations": {
      "def": "Define rotate and helper reverse functions.",
      "exec": "Calculate k %= numsSize and swap elements using temporary variable temp.",
      "init": "Store nums[l] into temporary variable for swap.",
      "comment": "Standard C prototypes."
    },
    "notes": "Three-reversal algorithm rotates an array in-place with O(N) time and O(1) auxiliary space without extra buffer allocation."
  },
  {
    "id": "two-sum-ii-sorted",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <stdlib.h>",
        "code": "#include <stdlib.h>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "int* twoSum(int* numbers, int numbersSize, int target, int* returnSize) {",
        "code": "int* twoSum(int* numbers, int numbersSize, int target, int* returnSize) {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    int left = 0;",
        "code": "    int left = 0;",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "    int right = numbersSize - 1;",
        "code": "    int right = numbersSize - 1;",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "    int* res = (int*)malloc(2 * sizeof(int));",
        "code": "    int* res = (int*)malloc(2 * sizeof(int));",
        "tag": "alloc",
        "lineNum": 7
      },
      {
        "text": "    *returnSize = 2;",
        "code": "    *returnSize = 2;",
        "tag": "comment",
        "lineNum": 8
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    while (left < right) {",
        "code": "    while (left < right) {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "        int sum = numbers[left] + numbers[right];",
        "code": "        int sum = numbers[left] + numbers[right];",
        "tag": "init",
        "lineNum": 11
      },
      {
        "text": "        if (sum == target) {",
        "code": "        if (sum == target) {",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "            res[0] = left + 1;",
        "code": "            res[0] = left + 1;",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "            res[1] = right + 1;",
        "code": "            res[1] = right + 1;",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "            return res;",
        "code": "            return res;",
        "tag": "return",
        "lineNum": 15
      },
      {
        "text": "        } else if (sum < target) {",
        "code": "        } else if (sum < target) {",
        "tag": "def",
        "lineNum": 16
      },
      {
        "text": "            left++;",
        "code": "            left++;",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "        } else {",
        "code": "        } else {",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "            right--;",
        "code": "            right--;",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "    *returnSize = 0;",
        "code": "    *returnSize = 0;",
        "tag": "comment",
        "lineNum": 22
      },
      {
        "text": "    return NULL;",
        "code": "    return NULL;",
        "tag": "return",
        "lineNum": 23
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 24
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nint* twoSum(int* numbers, int numbersSize, int target, int* returnSize) {\n    int left = 0;\n    int right = numbersSize - 1;\n    int* res = (int*)malloc(2 * sizeof(int));\n    *returnSize = 2;\n\n    while (left < right) {\n        int sum = numbers[left] + numbers[right];\n        if (sum == target) {\n            res[0] = left + 1;\n            res[1] = right + 1;\n            return res;\n        } else if (sum < target) {\n            left++;\n        } else {\n            right--;\n        }\n    }\n    *returnSize = 0;\n    return NULL;\n}",
    "explanations": {
      "def": "Define twoSum function taking sorted array pointer and target sum.",
      "init": "Initialize two pointers: left at 0 and right at numbersSize - 1.",
      "alloc": "Allocate dynamic memory buffer of size 2 * sizeof(int) using malloc().",
      "return": "Return allocated heap array containing 1-based answer indices.",
      "comment": "Headers and parameter descriptions.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Caller must free() the returned pointer res; Two Sum II uses sorted monotonicity to achieve O(N) time and O(1) space."
  },
  {
    "id": "container-with-most-water",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "int maxArea(int* height, int heightSize) {",
        "code": "int maxArea(int* height, int heightSize) {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    int left = 0, right = heightSize - 1;",
        "code": "    int left = 0, right = heightSize - 1;",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "    int maxWater = 0;",
        "code": "    int maxWater = 0;",
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
        "text": "    while (left < right) {",
        "code": "    while (left < right) {",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "        int h = height[left] < height[right] ? height[left] : height[right];",
        "code": "        int h = height[left] < height[right] ? height[left] : height[right];",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "        int width = right - left;",
        "code": "        int width = right - left;",
        "tag": "init",
        "lineNum": 9
      },
      {
        "text": "        int area = h * width;",
        "code": "        int area = h * width;",
        "tag": "init",
        "lineNum": 10
      },
      {
        "text": "        if (area > maxWater) maxWater = area;",
        "code": "        if (area > maxWater) maxWater = area;",
        "tag": "branch",
        "lineNum": 11
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "        if (height[left] < height[right]) {",
        "code": "        if (height[left] < height[right]) {",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "            left++;",
        "code": "            left++;",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "        } else {",
        "code": "        } else {",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "            right--;",
        "code": "            right--;",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "    return maxWater;",
        "code": "    return maxWater;",
        "tag": "return",
        "lineNum": 19
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 20
      }
    ],
    "rawCode": "#include <stdio.h>\n\nint maxArea(int* height, int heightSize) {\n    int left = 0, right = heightSize - 1;\n    int maxWater = 0;\n\n    while (left < right) {\n        int h = height[left] < height[right] ? height[left] : height[right];\n        int width = right - left;\n        int area = h * width;\n        if (area > maxWater) maxWater = area;\n\n        if (height[left] < height[right]) {\n            left++;\n        } else {\n            right--;\n        }\n    }\n    return maxWater;\n}",
    "explanations": {
      "def": "Define maxArea calculating maximum water capacity between boundary lines.",
      "init": "Initialize left index to 0, right index to heightSize - 1, and maxWater to 0.",
      "exec": "Compute minimum line height h and current container area = h * width.",
      "branch": "Update maxWater if area is greater; advance pointer pointing to the shorter vertical line.",
      "return": "Return maximum water volume accumulated.",
      "comment": "Standard C function definition."
    },
    "notes": "Moving the pointer with the smaller height is mathematically optimal because the shorter line is the limiting factor for all narrower widths."
  },
  {
    "id": "longest-substring-no-repeat",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <string.h>",
        "code": "#include <string.h>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "int lengthOfLongestSubstring(char* s) {",
        "code": "int lengthOfLongestSubstring(char* s) {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    int lastSeen[256];",
        "code": "    int lastSeen[256];",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "    for (int i = 0; i < 256; i++) lastSeen[i] = -1;",
        "code": "    for (int i = 0; i < 256; i++) lastSeen[i] = -1;",
        "tag": "loop",
        "lineNum": 6
      },
      {
        "text": "    int maxLen = 0, left = 0;",
        "code": "    int maxLen = 0, left = 0;",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "    int n = strlen(s);",
        "code": "    int n = strlen(s);",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    for (int right = 0; right < n; right++) {",
        "code": "    for (int right = 0; right < n; right++) {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "        unsigned char c = (unsigned char)s[right];",
        "code": "        unsigned char c = (unsigned char)s[right];",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "        if (lastSeen[c] >= left) {",
        "code": "        if (lastSeen[c] >= left) {",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "            left = lastSeen[c] + 1;",
        "code": "            left = lastSeen[c] + 1;",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "        lastSeen[c] = right;",
        "code": "        lastSeen[c] = right;",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "        int currentLen = right - left + 1;",
        "code": "        int currentLen = right - left + 1;",
        "tag": "init",
        "lineNum": 16
      },
      {
        "text": "        if (currentLen > maxLen) maxLen = currentLen;",
        "code": "        if (currentLen > maxLen) maxLen = currentLen;",
        "tag": "branch",
        "lineNum": 17
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "    return maxLen;",
        "code": "    return maxLen;",
        "tag": "return",
        "lineNum": 19
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 20
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <string.h>\n\nint lengthOfLongestSubstring(char* s) {\n    int lastSeen[256];\n    for (int i = 0; i < 256; i++) lastSeen[i] = -1;\n    int maxLen = 0, left = 0;\n    int n = strlen(s);\n\n    for (int right = 0; right < n; right++) {\n        unsigned char c = (unsigned char)s[right];\n        if (lastSeen[c] >= left) {\n            left = lastSeen[c] + 1;\n        }\n        lastSeen[c] = right;\n        int currentLen = right - left + 1;\n        if (currentLen > maxLen) maxLen = currentLen;\n    }\n    return maxLen;\n}",
    "explanations": {
      "def": "Define lengthOfLongestSubstring using direct ASCII frequency lookup table.",
      "init": "Initialize lastSeen array of size 256 to -1, maxLen to 0, and left to 0.",
      "loop": "Iterate right pointer over string length using for loop.",
      "branch": "If character was seen at or after left index, advance left boundary.",
      "exec": "Calculate currentLen = right - left + 1 and update maxLen.",
      "return": "Return maximum substring length found.",
      "comment": "Include string.h for strlen()."
    },
    "notes": "Using a fixed-size 256 integer array acts as a direct-address hash table with O(1) lookups and zero dynamic heap allocation."
  },
  {
    "id": "trapping-rain-water",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "int trap(int* height, int heightSize) {",
        "code": "int trap(int* height, int heightSize) {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    if (heightSize <= 2) return 0;",
        "code": "    if (heightSize <= 2) return 0;",
        "tag": "branch",
        "lineNum": 4
      },
      {
        "text": "    int left = 0, right = heightSize - 1;",
        "code": "    int left = 0, right = heightSize - 1;",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "    int leftMax = 0, rightMax = 0, totalWater = 0;",
        "code": "    int leftMax = 0, rightMax = 0, totalWater = 0;",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    while (left < right) {",
        "code": "    while (left < right) {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "        if (height[left] < height[right]) {",
        "code": "        if (height[left] < height[right]) {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "            if (height[left] >= leftMax) leftMax = height[left];",
        "code": "            if (height[left] >= leftMax) leftMax = height[left];",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "            else totalWater += leftMax - height[left];",
        "code": "            else totalWater += leftMax - height[left];",
        "tag": "branch",
        "lineNum": 11
      },
      {
        "text": "            left++;",
        "code": "            left++;",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "        } else {",
        "code": "        } else {",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "            if (height[right] >= rightMax) rightMax = height[right];",
        "code": "            if (height[right] >= rightMax) rightMax = height[right];",
        "tag": "branch",
        "lineNum": 14
      },
      {
        "text": "            else totalWater += rightMax - height[right];",
        "code": "            else totalWater += rightMax - height[right];",
        "tag": "branch",
        "lineNum": 15
      },
      {
        "text": "            right--;",
        "code": "            right--;",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "    return totalWater;",
        "code": "    return totalWater;",
        "tag": "return",
        "lineNum": 19
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 20
      }
    ],
    "rawCode": "#include <stdio.h>\n\nint trap(int* height, int heightSize) {\n    if (heightSize <= 2) return 0;\n    int left = 0, right = heightSize - 1;\n    int leftMax = 0, rightMax = 0, totalWater = 0;\n\n    while (left < right) {\n        if (height[left] < height[right]) {\n            if (height[left] >= leftMax) leftMax = height[left];\n            else totalWater += leftMax - height[left];\n            left++;\n        } else {\n            if (height[right] >= rightMax) rightMax = height[right];\n            else totalWater += rightMax - height[right];\n            right--;\n        }\n    }\n    return totalWater;\n}",
    "explanations": {
      "def": "Define trap calculating trapped rainwater using two converging pointers.",
      "branch": "Check if heightSize <= 2, and compare height[left] against height[right].",
      "init": "Initialize left, right, leftMax, rightMax, and totalWater accumulators.",
      "return": "Return total trapped water volume.",
      "comment": "Standard C function prototype.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Two-pointer approach computes trapped water in O(N) time and O(1) auxiliary space without creating prefix/suffix maximum arrays."
  },
  {
    "id": "maximum-subarray-kadane",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "int maxSubArray(int* nums, int numsSize) {",
        "code": "int maxSubArray(int* nums, int numsSize) {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    int currentSum = nums[0];",
        "code": "    int currentSum = nums[0];",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "    int maxSum = nums[0];",
        "code": "    int maxSum = nums[0];",
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
        "text": "    for (int i = 1; i < numsSize; i++) {",
        "code": "    for (int i = 1; i < numsSize; i++) {",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "        if (currentSum + nums[i] > nums[i]) {",
        "code": "        if (currentSum + nums[i] > nums[i]) {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "            currentSum += nums[i];",
        "code": "            currentSum += nums[i];",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        } else {",
        "code": "        } else {",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "            currentSum = nums[i];",
        "code": "            currentSum = nums[i];",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "        if (currentSum > maxSum) {",
        "code": "        if (currentSum > maxSum) {",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "            maxSum = currentSum;",
        "code": "            maxSum = currentSum;",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "    return maxSum;",
        "code": "    return maxSum;",
        "tag": "return",
        "lineNum": 17
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 18
      }
    ],
    "rawCode": "#include <stdio.h>\n\nint maxSubArray(int* nums, int numsSize) {\n    int currentSum = nums[0];\n    int maxSum = nums[0];\n\n    for (int i = 1; i < numsSize; i++) {\n        if (currentSum + nums[i] > nums[i]) {\n            currentSum += nums[i];\n        } else {\n            currentSum = nums[i];\n        }\n        if (currentSum > maxSum) {\n            maxSum = currentSum;\n        }\n    }\n    return maxSum;\n}",
    "explanations": {
      "def": "Define maxSubArray using Kadane algorithm.",
      "init": "Initialize currentSum and maxSum to the first element nums[0].",
      "return": "Return overall maximum contiguous subarray sum.",
      "comment": "Standard C declaration.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Kadane algorithm runs in linear O(N) time and O(1) space by discarding negative cumulative sums at each step."
  },
  {
    "id": "product-except-self",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <stdlib.h>",
        "code": "#include <stdlib.h>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "int* productExceptSelf(int* nums, int numsSize, int* returnSize) {",
        "code": "int* productExceptSelf(int* nums, int numsSize, int* returnSize) {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    int* res = (int*)malloc(numsSize * sizeof(int));",
        "code": "    int* res = (int*)malloc(numsSize * sizeof(int));",
        "tag": "alloc",
        "lineNum": 5
      },
      {
        "text": "    *returnSize = numsSize;",
        "code": "    *returnSize = numsSize;",
        "tag": "comment",
        "lineNum": 6
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    int prefix = 1;",
        "code": "    int prefix = 1;",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "    for (int i = 0; i < numsSize; i++) {",
        "code": "    for (int i = 0; i < numsSize; i++) {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "        res[i] = prefix;",
        "code": "        res[i] = prefix;",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        prefix *= nums[i];",
        "code": "        prefix *= nums[i];",
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
        "text": "    int suffix = 1;",
        "code": "    int suffix = 1;",
        "tag": "init",
        "lineNum": 14
      },
      {
        "text": "    for (int i = numsSize - 1; i >= 0; i--) {",
        "code": "    for (int i = numsSize - 1; i >= 0; i--) {",
        "tag": "def",
        "lineNum": 15
      },
      {
        "text": "        res[i] *= suffix;",
        "code": "        res[i] *= suffix;",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "        suffix *= nums[i];",
        "code": "        suffix *= nums[i];",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "    return res;",
        "code": "    return res;",
        "tag": "return",
        "lineNum": 19
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 20
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nint* productExceptSelf(int* nums, int numsSize, int* returnSize) {\n    int* res = (int*)malloc(numsSize * sizeof(int));\n    *returnSize = numsSize;\n\n    int prefix = 1;\n    for (int i = 0; i < numsSize; i++) {\n        res[i] = prefix;\n        prefix *= nums[i];\n    }\n\n    int suffix = 1;\n    for (int i = numsSize - 1; i >= 0; i--) {\n        res[i] *= suffix;\n        suffix *= nums[i];\n    }\n    return res;\n}",
    "explanations": {
      "def": "Define productExceptSelf calculating prefix and suffix cumulative products.",
      "alloc": "Allocate output buffer of size numsSize * sizeof(int) using malloc().",
      "init": "Initialize prefix and suffix accumulators to 1.",
      "return": "Return output array pointer containing final products.",
      "comment": "Standard library memory allocations.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Using the output array to store prefix products enables O(N) execution with O(1) auxiliary space (excluding the returned array)."
  },
  {
    "id": "merge-intervals",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <stdlib.h>",
        "code": "#include <stdlib.h>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "int compareIntervals(const void* a, const void* b) {",
        "code": "int compareIntervals(const void* a, const void* b) {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    int* intA = *(int**)a;",
        "code": "    int* intA = *(int**)a;",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    int* intB = *(int**)b;",
        "code": "    int* intB = *(int**)b;",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    return intA[0] - intB[0];",
        "code": "    return intA[0] - intB[0];",
        "tag": "return",
        "lineNum": 7
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "int** merge(int** intervals, int intervalsSize, int* intervalsColSize, int* returnSize, int** returnColumnSizes) {",
        "code": "int** merge(int** intervals, int intervalsSize, int* intervalsColSize, int* returnSize, int** returnColumnSizes) {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "    if (intervalsSize <= 0) {",
        "code": "    if (intervalsSize <= 0) {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "        *returnSize = 0;",
        "code": "        *returnSize = 0;",
        "tag": "comment",
        "lineNum": 12
      },
      {
        "text": "        return NULL;",
        "code": "        return NULL;",
        "tag": "return",
        "lineNum": 13
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    qsort(intervals, intervalsSize, sizeof(int*), compareIntervals);",
        "code": "    qsort(intervals, intervalsSize, sizeof(int*), compareIntervals);",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "    int** res = (int**)malloc(intervalsSize * sizeof(int*));",
        "code": "    int** res = (int**)malloc(intervalsSize * sizeof(int*));",
        "tag": "alloc",
        "lineNum": 17
      },
      {
        "text": "    *returnColumnSizes = (int*)malloc(intervalsSize * sizeof(int));",
        "code": "    *returnColumnSizes = (int*)malloc(intervalsSize * sizeof(int));",
        "tag": "comment",
        "lineNum": 18
      },
      {
        "text": "    int count = 0;",
        "code": "    int count = 0;",
        "tag": "init",
        "lineNum": 19
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "    res[count] = (int*)malloc(2 * sizeof(int));",
        "code": "    res[count] = (int*)malloc(2 * sizeof(int));",
        "tag": "alloc",
        "lineNum": 21
      },
      {
        "text": "    res[count][0] = intervals[0][0];",
        "code": "    res[count][0] = intervals[0][0];",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "    res[count][1] = intervals[0][1];",
        "code": "    res[count][1] = intervals[0][1];",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "    (*returnColumnSizes)[count] = 2;",
        "code": "    (*returnColumnSizes)[count] = 2;",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "    count++;",
        "code": "    count++;",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "    for (int i = 1; i < intervalsSize; i++) {",
        "code": "    for (int i = 1; i < intervalsSize; i++) {",
        "tag": "def",
        "lineNum": 27
      },
      {
        "text": "        if (intervals[i][0] <= res[count - 1][1]) {",
        "code": "        if (intervals[i][0] <= res[count - 1][1]) {",
        "tag": "def",
        "lineNum": 28
      },
      {
        "text": "            if (intervals[i][1] > res[count - 1][1]) {",
        "code": "            if (intervals[i][1] > res[count - 1][1]) {",
        "tag": "def",
        "lineNum": 29
      },
      {
        "text": "                res[count - 1][1] = intervals[i][1];",
        "code": "                res[count - 1][1] = intervals[i][1];",
        "tag": "exec",
        "lineNum": 30
      },
      {
        "text": "            }",
        "code": "            }",
        "tag": "exec",
        "lineNum": 31
      },
      {
        "text": "        } else {",
        "code": "        } else {",
        "tag": "exec",
        "lineNum": 32
      },
      {
        "text": "            res[count] = (int*)malloc(2 * sizeof(int));",
        "code": "            res[count] = (int*)malloc(2 * sizeof(int));",
        "tag": "alloc",
        "lineNum": 33
      },
      {
        "text": "            res[count][0] = intervals[i][0];",
        "code": "            res[count][0] = intervals[i][0];",
        "tag": "exec",
        "lineNum": 34
      },
      {
        "text": "            res[count][1] = intervals[i][1];",
        "code": "            res[count][1] = intervals[i][1];",
        "tag": "exec",
        "lineNum": 35
      },
      {
        "text": "            (*returnColumnSizes)[count] = 2;",
        "code": "            (*returnColumnSizes)[count] = 2;",
        "tag": "exec",
        "lineNum": 36
      },
      {
        "text": "            count++;",
        "code": "            count++;",
        "tag": "exec",
        "lineNum": 37
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 38
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 39
      },
      {
        "text": "    *returnSize = count;",
        "code": "    *returnSize = count;",
        "tag": "comment",
        "lineNum": 40
      },
      {
        "text": "    return res;",
        "code": "    return res;",
        "tag": "return",
        "lineNum": 41
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 42
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nint compareIntervals(const void* a, const void* b) {\n    int* intA = *(int**)a;\n    int* intB = *(int**)b;\n    return intA[0] - intB[0];\n}\n\nint** merge(int** intervals, int intervalsSize, int* intervalsColSize, int* returnSize, int** returnColumnSizes) {\n    if (intervalsSize <= 0) {\n        *returnSize = 0;\n        return NULL;\n    }\n    qsort(intervals, intervalsSize, sizeof(int*), compareIntervals);\n\n    int** res = (int**)malloc(intervalsSize * sizeof(int*));\n    *returnColumnSizes = (int*)malloc(intervalsSize * sizeof(int));\n    int count = 0;\n\n    res[count] = (int*)malloc(2 * sizeof(int));\n    res[count][0] = intervals[0][0];\n    res[count][1] = intervals[0][1];\n    (*returnColumnSizes)[count] = 2;\n    count++;\n\n    for (int i = 1; i < intervalsSize; i++) {\n        if (intervals[i][0] <= res[count - 1][1]) {\n            if (intervals[i][1] > res[count - 1][1]) {\n                res[count - 1][1] = intervals[i][1];\n            }\n        } else {\n            res[count] = (int*)malloc(2 * sizeof(int));\n            res[count][0] = intervals[i][0];\n            res[count][1] = intervals[i][1];\n            (*returnColumnSizes)[count] = 2;\n            count++;\n        }\n    }\n    *returnSize = count;\n    return res;\n}",
    "explanations": {
      "def": "Define merge function and comparator callback for qsort().",
      "alloc": "Allocate dynamic 2D result buffer and returnColumnSizes array via malloc().",
      "init": "Copy first interval into res[0] and set column size to 2.",
      "return": "Return 2D interval array and update returnSize.",
      "comment": "qsort comparison and 2D pointer handling.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "In C, sorting 2D arrays requires passing a comparator to qsort() and casting double pointers (const void* a) to int**."
  }
];
})(typeof window !== 'undefined' ? window : global);
