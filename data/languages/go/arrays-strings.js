/**
 * SynapseCS Language-Specific Implementation: GO - arrays-strings
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['go'] = window.DSA_LANG_CODE['go'] || {};
  window.DSA_LANG_CODE['go']['arrays-strings'] = [
  {
    "id": "arr-basics-create",
    "code": [
      {
        "text": "package main",
        "code": "package main",
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
        "text": "import \"fmt\"",
        "code": "import \"fmt\"",
        "tag": "comment",
        "lineNum": 3
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "func printAddresses(arr []int) {",
        "code": "func printAddresses(arr []int) {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "\tfor i := range arr {",
        "code": "\tfor i := range arr {",
        "tag": "loop",
        "lineNum": 6
      },
      {
        "text": "\t\tfmt.Printf(\"Index %d: Address %p, Value %d\\n\", i, &arr[i], arr[i])",
        "code": "\t\tfmt.Printf(\"Index %d: Address %p, Value %d\\n\", i, &arr[i], arr[i])",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "func main() {",
        "code": "func main() {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "\tnums := []int{10, 20, 30, 40}",
        "code": "\tnums := []int{10, 20, 30, 40}",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "\tprintAddresses(nums)",
        "code": "\tprintAddresses(nums)",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 14
      }
    ],
    "rawCode": "package main\n\nimport \"fmt\"\n\nfunc printAddresses(arr []int) {\n\tfor i := range arr {\n\t\tfmt.Printf(\"Index %d: Address %p, Value %d\\n\", i, &arr[i], arr[i])\n\t}\n}\n\nfunc main() {\n\tnums := []int{10, 20, 30, 40}\n\tprintAddresses(nums)\n}",
    "explanations": {
      "def": "Define printAddresses function accepting an integer slice []int.",
      "loop": "Iterate across slice using for i := range arr.",
      "exec": "Print index, pointer address via %p, and element value via %d.",
      "comment": "Package header and fmt import."
    },
    "notes": "A Go slice is a 3-word header containing a pointer to an underlying array, a length, and a capacity; elements are stored contiguously in memory."
  },
  {
    "id": "arr-rotate",
    "code": [
      {
        "text": "package main",
        "code": "package main",
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
        "text": "func rotate(nums []int, k int) {",
        "code": "func rotate(nums []int, k int) {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tn := len(nums)",
        "code": "\tn := len(nums)",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tk %= n",
        "code": "\tk %= n",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "\treverse := func(l, r int) {",
        "code": "\treverse := func(l, r int) {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "\t\tfor l < r {",
        "code": "\t\tfor l < r {",
        "tag": "loop",
        "lineNum": 7
      },
      {
        "text": "\t\t\tnums[l], nums[r] = nums[r], nums[l]",
        "code": "\t\t\tnums[l], nums[r] = nums[r], nums[l]",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "\t\t\tl++",
        "code": "\t\t\tl++",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "\t\t\tr--",
        "code": "\t\t\tr--",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "\treverse(0, n-1)",
        "code": "\treverse(0, n-1)",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "\treverse(0, k-1)",
        "code": "\treverse(0, k-1)",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "\treverse(k, n-1)",
        "code": "\treverse(k, n-1)",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 16
      }
    ],
    "rawCode": "package main\n\nfunc rotate(nums []int, k int) {\n\tn := len(nums)\n\tk %= n\n\treverse := func(l, r int) {\n\t\tfor l < r {\n\t\t\tnums[l], nums[r] = nums[r], nums[l]\n\t\t\tl++\n\t\t\tr--\n\t\t}\n\t}\n\treverse(0, n-1)\n\treverse(0, k-1)\n\treverse(k, n-1)\n}",
    "explanations": {
      "def": "Define rotate function and inner reverse helper closure.",
      "loop": "Loop while left index is strictly less than right index.",
      "comment": "Go package declaration.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Passing a slice into a function passes the slice header by value, but the backing array is shared, allowing in-place mutations."
  },
  {
    "id": "two-sum-ii-sorted",
    "code": [
      {
        "text": "package main",
        "code": "package main",
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
        "text": "func twoSum(numbers []int, target int) []int {",
        "code": "func twoSum(numbers []int, target int) []int {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tleft, right := 0, len(numbers)-1",
        "code": "\tleft, right := 0, len(numbers)-1",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tfor left < right {",
        "code": "\tfor left < right {",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "\t\tsum := numbers[left] + numbers[right]",
        "code": "\t\tsum := numbers[left] + numbers[right]",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "\t\tif sum == target {",
        "code": "\t\tif sum == target {",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "\t\t\treturn []int{left + 1, right + 1}",
        "code": "\t\t\treturn []int{left + 1, right + 1}",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "\t\t} else if sum < target {",
        "code": "\t\t} else if sum < target {",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "\t\t\tleft++",
        "code": "\t\t\tleft++",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "\t\t} else {",
        "code": "\t\t} else {",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "\t\t\tright--",
        "code": "\t\t\tright--",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "\treturn []int{}",
        "code": "\treturn []int{}",
        "tag": "return",
        "lineNum": 15
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 16
      }
    ],
    "rawCode": "package main\n\nfunc twoSum(numbers []int, target int) []int {\n\tleft, right := 0, len(numbers)-1\n\tfor left < right {\n\t\tsum := numbers[left] + numbers[right]\n\t\tif sum == target {\n\t\t\treturn []int{left + 1, right + 1}\n\t\t} else if sum < target {\n\t\t\tleft++\n\t\t} else {\n\t\t\tright--\n\t\t}\n\t}\n\treturn []int{}\n}",
    "explanations": {
      "def": "Define twoSum accepting sorted slice numbers and target integer.",
      "loop": "Iterate while left < right.",
      "branch": "Check sum against target: return 1-based indices, or move pointers.",
      "return": "Return slice []int{left + 1, right + 1}.",
      "comment": "Package main header.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Two-pointer approach leverages array ordering to eliminate redundant checks in O(N) time and O(1) auxiliary space."
  },
  {
    "id": "container-with-most-water",
    "code": [
      {
        "text": "package main",
        "code": "package main",
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
        "text": "func maxArea(height []int) int {",
        "code": "func maxArea(height []int) int {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tleft, right := 0, len(height)-1",
        "code": "\tleft, right := 0, len(height)-1",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tmaxWater := 0",
        "code": "\tmaxWater := 0",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "\tfor left < right {",
        "code": "\tfor left < right {",
        "tag": "loop",
        "lineNum": 7
      },
      {
        "text": "\t\tw := right - left",
        "code": "\t\tw := right - left",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "\t\th := height[left]",
        "code": "\t\th := height[left]",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "\t\tif height[right] < h {",
        "code": "\t\tif height[right] < h {",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "\t\t\th = height[right]",
        "code": "\t\t\th = height[right]",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "\t\tarea := h * w",
        "code": "\t\tarea := h * w",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "\t\tif area > maxWater {",
        "code": "\t\tif area > maxWater {",
        "tag": "branch",
        "lineNum": 14
      },
      {
        "text": "\t\t\tmaxWater = area",
        "code": "\t\t\tmaxWater = area",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "\t\tif height[left] < height[right] {",
        "code": "\t\tif height[left] < height[right] {",
        "tag": "branch",
        "lineNum": 17
      },
      {
        "text": "\t\t\tleft++",
        "code": "\t\t\tleft++",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "\t\t} else {",
        "code": "\t\t} else {",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "\t\t\tright--",
        "code": "\t\t\tright--",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "\treturn maxWater",
        "code": "\treturn maxWater",
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
    "rawCode": "package main\n\nfunc maxArea(height []int) int {\n\tleft, right := 0, len(height)-1\n\tmaxWater := 0\n\n\tfor left < right {\n\t\tw := right - left\n\t\th := height[left]\n\t\tif height[right] < h {\n\t\t\th = height[right]\n\t\t}\n\t\tarea := h * w\n\t\tif area > maxWater {\n\t\t\tmaxWater = area\n\t\t}\n\t\tif height[left] < height[right] {\n\t\t\tleft++\n\t\t} else {\n\t\t\tright--\n\t\t}\n\t}\n\treturn maxWater\n}",
    "explanations": {
      "def": "Define maxArea calculating maximum water boundary area.",
      "loop": "Loop while left < right.",
      "exec": "Compute width w and minimum height h between boundaries.",
      "branch": "Update maxWater and advance the pointer pointing to the shorter vertical line.",
      "return": "Return maximum accumulated water capacity.",
      "comment": "Go package declaration."
    },
    "notes": "Advancing the pointer with smaller height is optimal because widening the container cannot compensate for a shorter wall."
  },
  {
    "id": "longest-substring-no-repeat",
    "code": [
      {
        "text": "package main",
        "code": "package main",
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
        "text": "func lengthOfLongestSubstring(s string) int {",
        "code": "func lengthOfLongestSubstring(s string) int {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tlastSeen := make(map[rune]int)",
        "code": "\tlastSeen := make(map[rune]int)",
        "tag": "alloc",
        "lineNum": 4
      },
      {
        "text": "\tmaxLen, left := 0, 0",
        "code": "\tmaxLen, left := 0, 0",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "\tfor right, ch := range s {",
        "code": "\tfor right, ch := range s {",
        "tag": "loop",
        "lineNum": 7
      },
      {
        "text": "\t\tif prevIdx, exists := lastSeen[ch]; exists && prevIdx >= left {",
        "code": "\t\tif prevIdx, exists := lastSeen[ch]; exists && prevIdx >= left {",
        "tag": "branch",
        "lineNum": 8
      },
      {
        "text": "\t\t\tleft = prevIdx + 1",
        "code": "\t\t\tleft = prevIdx + 1",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "\t\tlastSeen[ch] = right",
        "code": "\t\tlastSeen[ch] = right",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "\t\tcurrentLen := right - left + 1",
        "code": "\t\tcurrentLen := right - left + 1",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "\t\tif currentLen > maxLen {",
        "code": "\t\tif currentLen > maxLen {",
        "tag": "branch",
        "lineNum": 13
      },
      {
        "text": "\t\t\tmaxLen = currentLen",
        "code": "\t\t\tmaxLen = currentLen",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "\treturn maxLen",
        "code": "\treturn maxLen",
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
    "rawCode": "package main\n\nfunc lengthOfLongestSubstring(s string) int {\n\tlastSeen := make(map[rune]int)\n\tmaxLen, left := 0, 0\n\n\tfor right, ch := range s {\n\t\tif prevIdx, exists := lastSeen[ch]; exists && prevIdx >= left {\n\t\t\tleft = prevIdx + 1\n\t\t}\n\t\tlastSeen[ch] = right\n\t\tcurrentLen := right - left + 1\n\t\tif currentLen > maxLen {\n\t\t\tmaxLen = currentLen\n\t\t}\n\t}\n\treturn maxLen\n}",
    "explanations": {
      "def": "Define lengthOfLongestSubstring taking string s and returning int.",
      "alloc": "Allocate hash map using make(map[rune]int) to store last seen character indices.",
      "loop": "Iterate through string runes and indices with for right, ch := range s.",
      "branch": "If rune exists in map and index >= left, slide left boundary forward.",
      "return": "Return maxLen.",
      "comment": "Go package declaration.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Iterating over a Go string with range decodes UTF-8 runes into 32-bit Unicode code points automatically."
  },
  {
    "id": "trapping-rain-water",
    "code": [
      {
        "text": "package main",
        "code": "package main",
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
        "text": "func trap(height []int) int {",
        "code": "func trap(height []int) int {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tif len(height) <= 2 {",
        "code": "\tif len(height) <= 2 {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "\t\treturn 0",
        "code": "\t\treturn 0",
        "tag": "return",
        "lineNum": 5
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "\tleft, right := 0, len(height)-1",
        "code": "\tleft, right := 0, len(height)-1",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "\tleftMax, rightMax := 0, 0",
        "code": "\tleftMax, rightMax := 0, 0",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "\ttotalWater := 0",
        "code": "\ttotalWater := 0",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "\tfor left < right {",
        "code": "\tfor left < right {",
        "tag": "loop",
        "lineNum": 11
      },
      {
        "text": "\t\tif height[left] < height[right] {",
        "code": "\t\tif height[left] < height[right] {",
        "tag": "branch",
        "lineNum": 12
      },
      {
        "text": "\t\t\tif height[left] >= leftMax {",
        "code": "\t\t\tif height[left] >= leftMax {",
        "tag": "branch",
        "lineNum": 13
      },
      {
        "text": "\t\t\t\tleftMax = height[left]",
        "code": "\t\t\t\tleftMax = height[left]",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "\t\t\t} else {",
        "code": "\t\t\t} else {",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\t\t\t\ttotalWater += leftMax - height[left]",
        "code": "\t\t\t\ttotalWater += leftMax - height[left]",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "\t\t\t}",
        "code": "\t\t\t}",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "\t\t\tleft++",
        "code": "\t\t\tleft++",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "\t\t} else {",
        "code": "\t\t} else {",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "\t\t\tif height[right] >= rightMax {",
        "code": "\t\t\tif height[right] >= rightMax {",
        "tag": "branch",
        "lineNum": 20
      },
      {
        "text": "\t\t\t\trightMax = height[right]",
        "code": "\t\t\t\trightMax = height[right]",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "\t\t\t} else {",
        "code": "\t\t\t} else {",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "\t\t\t\ttotalWater += rightMax - height[right]",
        "code": "\t\t\t\ttotalWater += rightMax - height[right]",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "\t\t\t}",
        "code": "\t\t\t}",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "\t\t\tright--",
        "code": "\t\t\tright--",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "\treturn totalWater",
        "code": "\treturn totalWater",
        "tag": "return",
        "lineNum": 28
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 29
      }
    ],
    "rawCode": "package main\n\nfunc trap(height []int) int {\n\tif len(height) <= 2 {\n\t\treturn 0\n\t}\n\tleft, right := 0, len(height)-1\n\tleftMax, rightMax := 0, 0\n\ttotalWater := 0\n\n\tfor left < right {\n\t\tif height[left] < height[right] {\n\t\t\tif height[left] >= leftMax {\n\t\t\t\tleftMax = height[left]\n\t\t\t} else {\n\t\t\t\ttotalWater += leftMax - height[left]\n\t\t\t}\n\t\t\tleft++\n\t\t} else {\n\t\t\tif height[right] >= rightMax {\n\t\t\t\trightMax = height[right]\n\t\t\t} else {\n\t\t\t\ttotalWater += rightMax - height[right]\n\t\t\t}\n\t\t\tright--\n\t\t}\n\t}\n\treturn totalWater\n}",
    "explanations": {
      "def": "Define trap computing total trapped rainwater.",
      "branch": "Guard clause for len(height) <= 2 and compare height[left] to height[right].",
      "loop": "Iterate while left < right.",
      "return": "Return total trapped water units.",
      "comment": "Go package declaration.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Two-pointer technique eliminates the need for dynamic array allocations, executing in O(N) time with O(1) auxiliary memory."
  },
  {
    "id": "maximum-subarray-kadane",
    "code": [
      {
        "text": "package main",
        "code": "package main",
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
        "text": "func maxSubArray(nums []int) int {",
        "code": "func maxSubArray(nums []int) int {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tcurrentSum := nums[0]",
        "code": "\tcurrentSum := nums[0]",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tmaxSum := nums[0]",
        "code": "\tmaxSum := nums[0]",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "\tfor i := 1; i < len(nums); i++ {",
        "code": "\tfor i := 1; i < len(nums); i++ {",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "\t\tif currentSum+nums[i] > nums[i] {",
        "code": "\t\tif currentSum+nums[i] > nums[i] {",
        "tag": "branch",
        "lineNum": 8
      },
      {
        "text": "\t\t\tcurrentSum += nums[i]",
        "code": "\t\t\tcurrentSum += nums[i]",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "\t\t} else {",
        "code": "\t\t} else {",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "\t\t\tcurrentSum = nums[i]",
        "code": "\t\t\tcurrentSum = nums[i]",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "\t\tif currentSum > maxSum {",
        "code": "\t\tif currentSum > maxSum {",
        "tag": "branch",
        "lineNum": 13
      },
      {
        "text": "\t\t\tmaxSum = currentSum",
        "code": "\t\t\tmaxSum = currentSum",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "\treturn maxSum",
        "code": "\treturn maxSum",
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
    "rawCode": "package main\n\nfunc maxSubArray(nums []int) int {\n\tcurrentSum := nums[0]\n\tmaxSum := nums[0]\n\n\tfor i := 1; i < len(nums); i++ {\n\t\tif currentSum+nums[i] > nums[i] {\n\t\t\tcurrentSum += nums[i]\n\t\t} else {\n\t\t\tcurrentSum = nums[i]\n\t\t}\n\t\tif currentSum > maxSum {\n\t\t\tmaxSum = currentSum\n\t\t}\n\t}\n\treturn maxSum\n}",
    "explanations": {
      "def": "Define maxSubArray using Kadane algorithm.",
      "branch": "Decide whether to extend running subarray or start a new subarray.",
      "return": "Return maximum contiguous subarray sum found.",
      "comment": "Go package main.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Kadane algorithm provides optimal O(N) performance by resetting the accumulated sum whenever it drops below the current element."
  },
  {
    "id": "product-except-self",
    "code": [
      {
        "text": "package main",
        "code": "package main",
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
        "text": "func productExceptSelf(nums []int) []int {",
        "code": "func productExceptSelf(nums []int) []int {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tn := len(nums)",
        "code": "\tn := len(nums)",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tres := make([]int, n)",
        "code": "\tres := make([]int, n)",
        "tag": "alloc",
        "lineNum": 5
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "\tprefix := 1",
        "code": "\tprefix := 1",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "\tfor i := 0; i < n; i++ {",
        "code": "\tfor i := 0; i < n; i++ {",
        "tag": "loop",
        "lineNum": 8
      },
      {
        "text": "\t\tres[i] = prefix",
        "code": "\t\tres[i] = prefix",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "\t\tprefix *= nums[i]",
        "code": "\t\tprefix *= nums[i]",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "\t}",
        "code": "\t}",
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
        "text": "\tsuffix := 1",
        "code": "\tsuffix := 1",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "\tfor i := n - 1; i >= 0; i-- {",
        "code": "\tfor i := n - 1; i >= 0; i-- {",
        "tag": "loop",
        "lineNum": 14
      },
      {
        "text": "\t\tres[i] *= suffix",
        "code": "\t\tres[i] *= suffix",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\t\tsuffix *= nums[i]",
        "code": "\t\tsuffix *= nums[i]",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "\treturn res",
        "code": "\treturn res",
        "tag": "return",
        "lineNum": 18
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 19
      }
    ],
    "rawCode": "package main\n\nfunc productExceptSelf(nums []int) []int {\n\tn := len(nums)\n\tres := make([]int, n)\n\n\tprefix := 1\n\tfor i := 0; i < n; i++ {\n\t\tres[i] = prefix\n\t\tprefix *= nums[i]\n\t}\n\n\tsuffix := 1\n\tfor i := n - 1; i >= 0; i-- {\n\t\tres[i] *= suffix\n\t\tsuffix *= nums[i]\n\t}\n\treturn res\n}",
    "explanations": {
      "def": "Define productExceptSelf returning []int.",
      "alloc": "Allocate slice res of size n using make([]int, n).",
      "loop": "Forward loop to populate prefix products, backward loop to multiply suffix products.",
      "return": "Return completed product slice.",
      "comment": "Go package declaration.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "make([]int, n) allocates a zero-initialized contiguous slice on the heap with O(N) memory overhead."
  },
  {
    "id": "merge-intervals",
    "code": [
      {
        "text": "package main",
        "code": "package main",
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
        "text": "import \"sort\"",
        "code": "import \"sort\"",
        "tag": "comment",
        "lineNum": 3
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "func merge(intervals [][]int) [][]int {",
        "code": "func merge(intervals [][]int) [][]int {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "\tif len(intervals) <= 1 {",
        "code": "\tif len(intervals) <= 1 {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "\t\treturn intervals",
        "code": "\t\treturn intervals",
        "tag": "return",
        "lineNum": 7
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "\tsort.Slice(intervals, func(i, j int) bool {",
        "code": "\tsort.Slice(intervals, func(i, j int) bool {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "\t\treturn intervals[i][0] < intervals[j][0]",
        "code": "\t\treturn intervals[i][0] < intervals[j][0]",
        "tag": "return",
        "lineNum": 10
      },
      {
        "text": "\t})",
        "code": "\t})",
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
        "text": "\tres := [][]int{intervals[0]}",
        "code": "\tres := [][]int{intervals[0]}",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "\tfor i := 1; i < len(intervals); i++ {",
        "code": "\tfor i := 1; i < len(intervals); i++ {",
        "tag": "def",
        "lineNum": 14
      },
      {
        "text": "\t\tlast := res[len(res)-1]",
        "code": "\t\tlast := res[len(res)-1]",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\t\tif intervals[i][0] <= last[1] {",
        "code": "\t\tif intervals[i][0] <= last[1] {",
        "tag": "branch",
        "lineNum": 16
      },
      {
        "text": "\t\t\tif intervals[i][1] > last[1] {",
        "code": "\t\t\tif intervals[i][1] > last[1] {",
        "tag": "branch",
        "lineNum": 17
      },
      {
        "text": "\t\t\t\tlast[1] = intervals[i][1]",
        "code": "\t\t\t\tlast[1] = intervals[i][1]",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "\t\t\t}",
        "code": "\t\t\t}",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "\t\t} else {",
        "code": "\t\t} else {",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "\t\t\tres = append(res, intervals[i])",
        "code": "\t\t\tres = append(res, intervals[i])",
        "tag": "mutate",
        "lineNum": 21
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "\treturn res",
        "code": "\treturn res",
        "tag": "return",
        "lineNum": 24
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 25
      }
    ],
    "rawCode": "package main\n\nimport \"sort\"\n\nfunc merge(intervals [][]int) [][]int {\n\tif len(intervals) <= 1 {\n\t\treturn intervals\n\t}\n\tsort.Slice(intervals, func(i, j int) bool {\n\t\treturn intervals[i][0] < intervals[j][0]\n\t})\n\n\tres := [][]int{intervals[0]}\n\tfor i := 1; i < len(intervals); i++ {\n\t\tlast := res[len(res)-1]\n\t\tif intervals[i][0] <= last[1] {\n\t\t\tif intervals[i][1] > last[1] {\n\t\t\t\tlast[1] = intervals[i][1]\n\t\t\t}\n\t\t} else {\n\t\t\tres = append(res, intervals[i])\n\t\t}\n\t}\n\treturn res\n}",
    "explanations": {
      "def": "Define merge function accepting 2D slice intervals.",
      "branch": "Check if len(intervals) <= 1, and check if current start <= previous end.",
      "exec": "Sort intervals by start coordinate using sort.Slice().",
      "mutate": "Extend last interval end or append new interval via append().",
      "return": "Return merged interval slice.",
      "comment": "Import sort package for in-place sorting."
    },
    "notes": "sort.Slice() sorts slice elements in-place using introsort with O(N log N) time complexity."
  }
];
})(typeof window !== 'undefined' ? window : global);
