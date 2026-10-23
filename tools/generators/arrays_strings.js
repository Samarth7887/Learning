const { buildQuestionItem } = require('./helper');

function getArraysStringsQuestions() {
  return {
    c: [
      buildQuestionItem({
        id: 'arr-basics-create',
        code: `#include <stdio.h>
#include <stdlib.h>

void printAddresses(int* arr, int n) {
    for (int i = 0; i < n; i++) {
        printf("Index %d: Address %p, Value %d\\n", i, (void*)&arr[i], arr[i]);
    }
}

int main() {
    int arr[4] = {10, 20, 30, 40};
    printAddresses(arr, 4);
    return 0;
}`,
        explanations: {
          def: 'Define function printAddresses taking integer pointer and array length.',
          init: 'Stack-allocate fixed array int arr[4] = {10, 20, 30, 40}.',
          loop: 'Iterate from index 0 to n-1 using standard for loop.',
          exec: 'Format and print memory address (%p) and value (%d) of each contiguous array element.',
          return: 'Return 0 indicating successful program execution.',
          comment: 'Standard I/O header inclusions.'
        },
        notes: 'In C, arrays are contiguous blocks of memory where arr[i] evaluates to *(arr + i), with each element offset by sizeof(int) (usually 4 bytes).'
      }),

      buildQuestionItem({
        id: 'arr-rotate',
        code: `#include <stdio.h>

void reverse(int* nums, int l, int r) {
    while (l < r) {
        int temp = nums[l];
        nums[l] = nums[r];
        nums[r] = temp;
        l++;
        r--;
    }
}

void rotate(int* nums, int numsSize, int k) {
    k %= numsSize;
    reverse(nums, 0, numsSize - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, numsSize - 1);
}`,
        explanations: {
          def: 'Define rotate and helper reverse functions.',
          exec: 'Calculate k %= numsSize and swap elements using temporary variable temp.',
          loop: 'Loop while left pointer is less than right pointer.',
          init: 'Store nums[l] into temporary variable for swap.',
          mutate: 'Increment l and decrement r towards center.',
          return: 'Return from function after in-place reversal.',
          comment: 'Standard C prototypes.'
        },
        notes: 'Three-reversal algorithm rotates an array in-place with O(N) time and O(1) auxiliary space without extra buffer allocation.'
      }),

      buildQuestionItem({
        id: 'two-sum-ii-sorted',
        code: `#include <stdio.h>
#include <stdlib.h>

int* twoSum(int* numbers, int numbersSize, int target, int* returnSize) {
    int left = 0;
    int right = numbersSize - 1;
    int* res = (int*)malloc(2 * sizeof(int));
    *returnSize = 2;

    while (left < right) {
        int sum = numbers[left] + numbers[right];
        if (sum == target) {
            res[0] = left + 1;
            res[1] = right + 1;
            return res;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    *returnSize = 0;
    return NULL;
}`,
        explanations: {
          def: 'Define twoSum function taking sorted array pointer and target sum.',
          init: 'Initialize two pointers: left at 0 and right at numbersSize - 1.',
          alloc: 'Allocate dynamic memory buffer of size 2 * sizeof(int) using malloc().',
          loop: 'Iterate while left pointer is strictly less than right pointer.',
          branch: 'Compare current sum to target: adjust pointers or record 1-based indices.',
          mutate: 'Increment left pointer or decrement right pointer.',
          return: 'Return allocated heap array containing 1-based answer indices.',
          comment: 'Headers and parameter descriptions.'
        },
        notes: 'Caller must free() the returned pointer res; Two Sum II uses sorted monotonicity to achieve O(N) time and O(1) space.'
      }),

      buildQuestionItem({
        id: 'container-with-most-water',
        code: `#include <stdio.h>

int maxArea(int* height, int heightSize) {
    int left = 0, right = heightSize - 1;
    int maxWater = 0;

    while (left < right) {
        int h = height[left] < height[right] ? height[left] : height[right];
        int width = right - left;
        int area = h * width;
        if (area > maxWater) maxWater = area;

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxWater;
}`,
        explanations: {
          def: 'Define maxArea calculating maximum water capacity between boundary lines.',
          init: 'Initialize left index to 0, right index to heightSize - 1, and maxWater to 0.',
          loop: 'While left < right, evaluate container area.',
          exec: 'Compute minimum line height h and current container area = h * width.',
          branch: 'Update maxWater if area is greater; advance pointer pointing to the shorter vertical line.',
          mutate: 'Increment left index or decrement right index.',
          return: 'Return maximum water volume accumulated.',
          comment: 'Standard C function definition.'
        },
        notes: 'Moving the pointer with the smaller height is mathematically optimal because the shorter line is the limiting factor for all narrower widths.'
      }),

      buildQuestionItem({
        id: 'longest-substring-no-repeat',
        code: `#include <stdio.h>
#include <string.h>

int lengthOfLongestSubstring(char* s) {
    int lastSeen[256];
    for (int i = 0; i < 256; i++) lastSeen[i] = -1;
    int maxLen = 0, left = 0;
    int n = strlen(s);

    for (int right = 0; right < n; right++) {
        unsigned char c = (unsigned char)s[right];
        if (lastSeen[c] >= left) {
            left = lastSeen[c] + 1;
        }
        lastSeen[c] = right;
        int currentLen = right - left + 1;
        if (currentLen > maxLen) maxLen = currentLen;
    }
    return maxLen;
}`,
        explanations: {
          def: 'Define lengthOfLongestSubstring using direct ASCII frequency lookup table.',
          init: 'Initialize lastSeen array of size 256 to -1, maxLen to 0, and left to 0.',
          loop: 'Iterate right pointer over string length using for loop.',
          branch: 'If character was seen at or after left index, advance left boundary.',
          exec: 'Calculate currentLen = right - left + 1 and update maxLen.',
          mutate: 'Update lastSeen[c] to current right index.',
          return: 'Return maximum substring length found.',
          comment: 'Include string.h for strlen().'
        },
        notes: 'Using a fixed-size 256 integer array acts as a direct-address hash table with O(1) lookups and zero dynamic heap allocation.'
      }),

      buildQuestionItem({
        id: 'trapping-rain-water',
        code: `#include <stdio.h>

int trap(int* height, int heightSize) {
    if (heightSize <= 2) return 0;
    int left = 0, right = heightSize - 1;
    int leftMax = 0, rightMax = 0, totalWater = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) leftMax = height[left];
            else totalWater += leftMax - height[left];
            left++;
        } else {
            if (height[right] >= rightMax) rightMax = height[right];
            else totalWater += rightMax - height[right];
            right--;
        }
    }
    return totalWater;
}`,
        explanations: {
          def: 'Define trap calculating trapped rainwater using two converging pointers.',
          branch: 'Check if heightSize <= 2, and compare height[left] against height[right].',
          init: 'Initialize left, right, leftMax, rightMax, and totalWater accumulators.',
          loop: 'While left < right, evaluate water trapped at the current boundary.',
          mutate: 'Update boundary maximums or add trapped volume and advance respective pointer.',
          return: 'Return total trapped water volume.',
          comment: 'Standard C function prototype.'
        },
        notes: 'Two-pointer approach computes trapped water in O(N) time and O(1) auxiliary space without creating prefix/suffix maximum arrays.'
      }),

      buildQuestionItem({
        id: 'maximum-subarray-kadane',
        code: `#include <stdio.h>

int maxSubArray(int* nums, int numsSize) {
    int currentSum = nums[0];
    int maxSum = nums[0];

    for (int i = 1; i < numsSize; i++) {
        if (currentSum + nums[i] > nums[i]) {
            currentSum += nums[i];
        } else {
            currentSum = nums[i];
        }
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }
    return maxSum;
}`,
        explanations: {
          def: 'Define maxSubArray using Kadane algorithm.',
          init: 'Initialize currentSum and maxSum to the first element nums[0].',
          loop: 'Iterate through array from index 1 to numsSize - 1.',
          branch: 'Decide whether to extend previous subarray or start fresh from nums[i].',
          mutate: 'Update currentSum and update maxSum if currentSum exceeds it.',
          return: 'Return overall maximum contiguous subarray sum.',
          comment: 'Standard C declaration.'
        },
        notes: 'Kadane algorithm runs in linear O(N) time and O(1) space by discarding negative cumulative sums at each step.'
      }),

      buildQuestionItem({
        id: 'product-except-self',
        code: `#include <stdio.h>
#include <stdlib.h>

int* productExceptSelf(int* nums, int numsSize, int* returnSize) {
    int* res = (int*)malloc(numsSize * sizeof(int));
    *returnSize = numsSize;

    int prefix = 1;
    for (int i = 0; i < numsSize; i++) {
        res[i] = prefix;
        prefix *= nums[i];
    }

    int suffix = 1;
    for (int i = numsSize - 1; i >= 0; i--) {
        res[i] *= suffix;
        suffix *= nums[i];
    }
    return res;
}`,
        explanations: {
          def: 'Define productExceptSelf calculating prefix and suffix cumulative products.',
          alloc: 'Allocate output buffer of size numsSize * sizeof(int) using malloc().',
          init: 'Initialize prefix and suffix accumulators to 1.',
          loop: 'Run forward pass for prefix products and reverse pass for suffix products.',
          mutate: 'Multiply res[i] by suffix and update suffix accumulator.',
          return: 'Return output array pointer containing final products.',
          comment: 'Standard library memory allocations.'
        },
        notes: 'Using the output array to store prefix products enables O(N) execution with O(1) auxiliary space (excluding the returned array).'
      }),

      buildQuestionItem({
        id: 'merge-intervals',
        code: `#include <stdio.h>
#include <stdlib.h>

int compareIntervals(const void* a, const void* b) {
    int* intA = *(int**)a;
    int* intB = *(int**)b;
    return intA[0] - intB[0];
}

int** merge(int** intervals, int intervalsSize, int* intervalsColSize, int* returnSize, int** returnColumnSizes) {
    if (intervalsSize <= 0) {
        *returnSize = 0;
        return NULL;
    }
    qsort(intervals, intervalsSize, sizeof(int*), compareIntervals);

    int** res = (int**)malloc(intervalsSize * sizeof(int*));
    *returnColumnSizes = (int*)malloc(intervalsSize * sizeof(int));
    int count = 0;

    res[count] = (int*)malloc(2 * sizeof(int));
    res[count][0] = intervals[0][0];
    res[count][1] = intervals[0][1];
    (*returnColumnSizes)[count] = 2;
    count++;

    for (int i = 1; i < intervalsSize; i++) {
        if (intervals[i][0] <= res[count - 1][1]) {
            if (intervals[i][1] > res[count - 1][1]) {
                res[count - 1][1] = intervals[i][1];
            }
        } else {
            res[count] = (int*)malloc(2 * sizeof(int));
            res[count][0] = intervals[i][0];
            res[count][1] = intervals[i][1];
            (*returnColumnSizes)[count] = 2;
            count++;
        }
    }
    *returnSize = count;
    return res;
}`,
        explanations: {
          def: 'Define merge function and comparator callback for qsort().',
          branch: 'Check if intervals overlap (intervals[i][0] <= res[count-1][1]).',
          alloc: 'Allocate dynamic 2D result buffer and returnColumnSizes array via malloc().',
          init: 'Copy first interval into res[0] and set column size to 2.',
          loop: 'Iterate through sorted intervals from index 1 to intervalsSize - 1.',
          mutate: 'Extend current interval end or append new non-overlapping interval.',
          return: 'Return 2D interval array and update returnSize.',
          comment: 'qsort comparison and 2D pointer handling.'
        },
        notes: 'In C, sorting 2D arrays requires passing a comparator to qsort() and casting double pointers (const void* a) to int**.'
      })
    ],

    go: [
      buildQuestionItem({
        id: 'arr-basics-create',
        code: `package main

import "fmt"

func printAddresses(arr []int) {
	for i := range arr {
		fmt.Printf("Index %d: Address %p, Value %d\\n", i, &arr[i], arr[i])
	}
}

func main() {
	nums := []int{10, 20, 30, 40}
	printAddresses(nums)
}`,
        explanations: {
          def: 'Define printAddresses function accepting an integer slice []int.',
          init: 'Instantiate slice literal nums := []int{10, 20, 30, 40}.',
          loop: 'Iterate across slice using for i := range arr.',
          exec: 'Print index, pointer address via %p, and element value via %d.',
          return: 'Exit main function.',
          comment: 'Package header and fmt import.'
        },
        notes: 'A Go slice is a 3-word header containing a pointer to an underlying array, a length, and a capacity; elements are stored contiguously in memory.'
      }),

      buildQuestionItem({
        id: 'arr-rotate',
        code: `package main

func rotate(nums []int, k int) {
	n := len(nums)
	k %= n
	reverse := func(l, r int) {
		for l < r {
			nums[l], nums[r] = nums[r], nums[l]
			l++
			r--
		}
	}
	reverse(0, n-1)
	reverse(0, k-1)
	reverse(k, n-1)
}`,
        explanations: {
          def: 'Define rotate function and inner reverse helper closure.',
          init: 'Store slice length in n and compute k %= n.',
          loop: 'Loop while left index is strictly less than right index.',
          pointer: 'Swap elements simultaneously using Go tuple assignment nums[l], nums[r] = nums[r], nums[l].',
          mutate: 'Increment left index and decrement right index towards the middle.',
          return: 'Return after performing three in-place reversals.',
          comment: 'Go package declaration.'
        },
        notes: 'Passing a slice into a function passes the slice header by value, but the backing array is shared, allowing in-place mutations.'
      }),

      buildQuestionItem({
        id: 'two-sum-ii-sorted',
        code: `package main

func twoSum(numbers []int, target int) []int {
	left, right := 0, len(numbers)-1
	for left < right {
		sum := numbers[left] + numbers[right]
		if sum == target {
			return []int{left + 1, right + 1}
		} else if sum < target {
			left++
		} else {
			right--
		}
	}
	return []int{}
}`,
        explanations: {
          def: 'Define twoSum accepting sorted slice numbers and target integer.',
          init: 'Initialize two pointers: left := 0 and right := len(numbers) - 1.',
          loop: 'Iterate while left < right.',
          branch: 'Check sum against target: return 1-based indices, or move pointers.',
          mutate: 'Increment left to increase sum, or decrement right to decrease sum.',
          return: 'Return slice []int{left + 1, right + 1}.',
          comment: 'Package main header.'
        },
        notes: 'Two-pointer approach leverages array ordering to eliminate redundant checks in O(N) time and O(1) auxiliary space.'
      }),

      buildQuestionItem({
        id: 'container-with-most-water',
        code: `package main

func maxArea(height []int) int {
	left, right := 0, len(height)-1
	maxWater := 0

	for left < right {
		w := right - left
		h := height[left]
		if height[right] < h {
			h = height[right]
		}
		area := h * w
		if area > maxWater {
			maxWater = area
		}
		if height[left] < height[right] {
			left++
		} else {
			right--
		}
	}
	return maxWater
}`,
        explanations: {
          def: 'Define maxArea calculating maximum water boundary area.',
          init: 'Initialize two pointers left := 0 and right := len(height) - 1, and maxWater := 0.',
          loop: 'Loop while left < right.',
          exec: 'Compute width w and minimum height h between boundaries.',
          branch: 'Update maxWater and advance the pointer pointing to the shorter vertical line.',
          mutate: 'Increment left or decrement right.',
          return: 'Return maximum accumulated water capacity.',
          comment: 'Go package declaration.'
        },
        notes: 'Advancing the pointer with smaller height is optimal because widening the container cannot compensate for a shorter wall.'
      }),

      buildQuestionItem({
        id: 'longest-substring-no-repeat',
        code: `package main

func lengthOfLongestSubstring(s string) int {
	lastSeen := make(map[rune]int)
	maxLen, left := 0, 0

	for right, ch := range s {
		if prevIdx, exists := lastSeen[ch]; exists && prevIdx >= left {
			left = prevIdx + 1
		}
		lastSeen[ch] = right
		currentLen := right - left + 1
		if currentLen > maxLen {
			maxLen = currentLen
		}
	}
	return maxLen
}`,
        explanations: {
          def: 'Define lengthOfLongestSubstring taking string s and returning int.',
          alloc: 'Allocate hash map using make(map[rune]int) to store last seen character indices.',
          init: 'Initialize maxLen := 0 and sliding window left := 0.',
          loop: 'Iterate through string runes and indices with for right, ch := range s.',
          branch: 'If rune exists in map and index >= left, slide left boundary forward.',
          mutate: 'Record lastSeen[ch] = right and update maxLen.',
          return: 'Return maxLen.',
          comment: 'Go package declaration.'
        },
        notes: 'Iterating over a Go string with range decodes UTF-8 runes into 32-bit Unicode code points automatically.'
      }),

      buildQuestionItem({
        id: 'trapping-rain-water',
        code: `package main

func trap(height []int) int {
	if len(height) <= 2 {
		return 0
	}
	left, right := 0, len(height)-1
	leftMax, rightMax := 0, 0
	totalWater := 0

	for left < right {
		if height[left] < height[right] {
			if height[left] >= leftMax {
				leftMax = height[left]
			} else {
				totalWater += leftMax - height[left]
			}
			left++
		} else {
			if height[right] >= rightMax {
				rightMax = height[right]
			} else {
				totalWater += rightMax - height[right]
			}
			right--
		}
	}
	return totalWater
}`,
        explanations: {
          def: 'Define trap computing total trapped rainwater.',
          branch: 'Guard clause for len(height) <= 2 and compare height[left] to height[right].',
          init: 'Initialize left and right indices alongside leftMax and rightMax accumulators.',
          loop: 'Iterate while left < right.',
          mutate: 'Update maximum walls or add trapped delta to totalWater and advance pointers.',
          return: 'Return total trapped water units.',
          comment: 'Go package declaration.'
        },
        notes: 'Two-pointer technique eliminates the need for dynamic array allocations, executing in O(N) time with O(1) auxiliary memory.'
      }),

      buildQuestionItem({
        id: 'maximum-subarray-kadane',
        code: `package main

func maxSubArray(nums []int) int {
	currentSum := nums[0]
	maxSum := nums[0]

	for i := 1; i < len(nums); i++ {
		if currentSum+nums[i] > nums[i] {
			currentSum += nums[i]
		} else {
			currentSum = nums[i]
		}
		if currentSum > maxSum {
			maxSum = currentSum
		}
	}
	return maxSum
}`,
        explanations: {
          def: 'Define maxSubArray using Kadane algorithm.',
          init: 'Initialize currentSum and maxSum to nums[0].',
          loop: 'Iterate from index 1 to len(nums) - 1.',
          branch: 'Decide whether to extend running subarray or start a new subarray.',
          mutate: 'Update currentSum and check if currentSum > maxSum.',
          return: 'Return maximum contiguous subarray sum found.',
          comment: 'Go package main.'
        },
        notes: 'Kadane algorithm provides optimal O(N) performance by resetting the accumulated sum whenever it drops below the current element.'
      }),

      buildQuestionItem({
        id: 'product-except-self',
        code: `package main

func productExceptSelf(nums []int) []int {
	n := len(nums)
	res := make([]int, n)

	prefix := 1
	for i := 0; i < n; i++ {
		res[i] = prefix
		prefix *= nums[i]
	}

	suffix := 1
	for i := n - 1; i >= 0; i-- {
		res[i] *= suffix
		suffix *= nums[i]
	}
	return res
}`,
        explanations: {
          def: 'Define productExceptSelf returning []int.',
          alloc: 'Allocate slice res of size n using make([]int, n).',
          init: 'Initialize prefix and suffix accumulators to 1.',
          loop: 'Forward loop to populate prefix products, backward loop to multiply suffix products.',
          mutate: 'Multiply res[i] by suffix and update suffix accumulator.',
          return: 'Return completed product slice.',
          comment: 'Go package declaration.'
        },
        notes: 'make([]int, n) allocates a zero-initialized contiguous slice on the heap with O(N) memory overhead.'
      }),

      buildQuestionItem({
        id: 'merge-intervals',
        code: `package main

import "sort"

func merge(intervals [][]int) [][]int {
	if len(intervals) <= 1 {
		return intervals
	}
	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})

	res := [][]int{intervals[0]}
	for i := 1; i < len(intervals); i++ {
		last := res[len(res)-1]
		if intervals[i][0] <= last[1] {
			if intervals[i][1] > last[1] {
				last[1] = intervals[i][1]
			}
		} else {
			res = append(res, intervals[i])
		}
	}
	return res
}`,
        explanations: {
          def: 'Define merge function accepting 2D slice intervals.',
          branch: 'Check if len(intervals) <= 1, and check if current start <= previous end.',
          exec: 'Sort intervals by start coordinate using sort.Slice().',
          init: 'Initialize result slice with first interval intervals[0].',
          loop: 'Iterate across remaining intervals from index 1.',
          mutate: 'Extend last interval end or append new interval via append().',
          return: 'Return merged interval slice.',
          comment: 'Import sort package for in-place sorting.'
        },
        notes: 'sort.Slice() sorts slice elements in-place using introsort with O(N log N) time complexity.'
      })
    ],

    rust: [
      buildQuestionItem({
        id: 'arr-basics-create',
        code: `fn print_addresses(arr: &[i32]) {
    for (i, val) in arr.iter().enumerate() {
        println!("Index {}: Address {:p}, Value {}", i, val, val);
    }
}

fn main() {
    let nums = [10, 20, 30, 40];
    print_addresses(&nums);
}`,
        explanations: {
          def: 'Define print_addresses function borrowing an array slice &[i32].',
          init: 'Stack-allocate fixed array let nums = [10, 20, 30, 40].',
          loop: 'Iterate over elements and indices using .iter().enumerate().',
          exec: 'Print index, pointer address via {:p}, and element value via {}.',
          return: 'Exit main function.',
          comment: 'Rust function declaration.'
        },
        notes: 'In Rust, &[i32] is a fat pointer containing a pointer to the first element and a length; borrowing ensures zero-cost boundary safety without copying.'
      }),

      buildQuestionItem({
        id: 'arr-rotate',
        code: `pub fn rotate(nums: &mut Vec<i32>, k: usize) {
    let n = nums.len();
    if n == 0 { return; }
    let k = k % n;
    nums.reverse();
    nums[0..k].reverse();
    nums[k..n].reverse();
}`,
        explanations: {
          def: 'Define rotate function borrowing a mutable vector reference &mut Vec<i32>.',
          branch: 'Guard clause: return immediately if vector length is 0.',
          init: 'Calculate k = k % n.',
          mutate: 'Perform in-place reversals on entire vector and sub-slices using .reverse().',
          return: 'Return from function.',
          comment: 'Standard Rust function prototype.'
        },
        notes: 'Rust standard library slice::reverse performs in-place element swaps with SIMD auto-vectorization when possible.'
      }),

      buildQuestionItem({
        id: 'two-sum-ii-sorted',
        code: `pub fn two_sum(numbers: &[i32], target: i32) -> Vec<i32> {
    let mut left = 0;
    let mut right = numbers.len() - 1;

    while left < right {
        let sum = numbers[left] + numbers[right];
        if sum == target {
            return vec![(left + 1) as i32, (right + 1) as i32];
        } else if sum < target {
            left += 1;
        } else {
            right -= 1;
        }
    }
    vec![]
}`,
        explanations: {
          def: 'Define two_sum function accepting borrowed slice &[i32] and target i32.',
          init: 'Initialize mutable indices left = 0 and right = numbers.len() - 1.',
          loop: 'Iterate while left < right.',
          branch: 'Compare sum to target and branch accordingly.',
          mutate: 'Increment left index or decrement right index.',
          return: 'Return vec! macro creating 1-based index vector.',
          comment: 'Rust function signature.'
        },
        notes: 'Borrowing &[i32] prevents unnecessary memory cloning, and vec! macro allocates only the 2-element result vector.'
      }),

      buildQuestionItem({
        id: 'container-with-most-water',
        code: `pub fn max_area(height: &[i32]) -> i32 {
    let mut left = 0;
    let mut right = height.len() - 1;
    let mut max_water = 0;

    while left < right {
        let w = (right - left) as i32;
        let h = std::cmp::min(height[left], height[right]);
        let area = h * w;
        if area > max_water {
            max_water = area;
        }
        if height[left] < height[right] {
            left += 1;
        } else {
            right -= 1;
        }
    }
    max_water
}`,
        explanations: {
          def: 'Define max_area calculating maximum volume between container lines.',
          init: 'Initialize mutable pointer indices left and right alongside max_water.',
          loop: 'While left < right, evaluate container area.',
          exec: 'Compute width w and minimum wall height h via std::cmp::min.',
          branch: 'Update max_water and move the pointer pointing to the shorter vertical wall.',
          mutate: 'Increment left or decrement right.',
          return: 'Implicitly return max_water without return keyword.',
          comment: 'Standard Rust function prototype.'
        },
        notes: 'In Rust, casting usize index differences to i32 requires explicit (right - left) as i32 to maintain type safety.'
      }),

      buildQuestionItem({
        id: 'longest-substring-no-repeat',
        code: `use std::collections::HashMap;

pub fn length_of_longest_substring(s: &str) -> i32 {
    let mut last_seen = HashMap::new();
    let mut max_len = 0;
    let mut left = 0;

    for (right, ch) in s.char_indices() {
        if let Some(&prev_idx) = last_seen.get(&ch) {
            if prev_idx >= left {
                left = prev_idx + 1;
            }
        }
        last_seen.insert(ch, right);
        let current_len = right - left + 1;
        if current_len > max_len {
            max_len = current_len;
        }
    }
    max_len as i32
}`,
        explanations: {
          def: 'Define length_of_longest_substring accepting string slice &str.',
          init: 'Instantiate HashMap::new() to track character byte positions.',
          loop: 'Iterate over UTF-8 characters and byte offsets using s.char_indices().',
          branch: 'Pattern match on HashMap lookup with if let Some(&prev_idx) = last_seen.get(&ch).',
          mutate: 'Insert or update character index via last_seen.insert(ch, right).',
          return: 'Return max_len cast to i32.',
          comment: 'Import HashMap from std::collections.'
        },
        notes: 's.char_indices() correctly handles multi-byte UTF-8 Unicode characters, returning exact byte offsets.'
      }),

      buildQuestionItem({
        id: 'trapping-rain-water',
        code: `pub fn trap(height: &[i32]) -> i32 {
    if height.len() <= 2 { return 0; }
    let mut left = 0;
    let mut right = height.len() - 1;
    let mut left_max = 0;
    let mut right_max = 0;
    let mut total_water = 0;

    while left < right {
        if height[left] < height[right] {
            if height[left] >= left_max {
                left_max = height[left];
            } else {
                total_water += left_max - height[left];
            }
            left += 1;
        } else {
            if height[right] >= right_max {
                right_max = height[right];
            } else {
                total_water += right_max - height[right];
            }
            right -= 1;
        }
    }
    total_water
}`,
        explanations: {
          def: 'Define trap computing total trapped rainwater units.',
          branch: 'Early exit guard clause if height.len() <= 2, and compare boundary heights.',
          init: 'Initialize mutable boundary indices and maximum wall trackers.',
          loop: 'Loop while left < right.',
          mutate: 'Update maximum walls or add trapped volume to total_water and adjust indices.',
          return: 'Return accumulated total_water.',
          comment: 'Rust function declaration.'
        },
        notes: 'Two-pointer approach runs in linear O(N) time with O(1) space, avoiding any vector allocations.'
      }),

      buildQuestionItem({
        id: 'maximum-subarray-kadane',
        code: `pub fn max_sub_array(nums: &[i32]) -> i32 {
    let mut current_sum = nums[0];
    let mut max_sum = nums[0];

    for &num in &nums[1..] {
        current_sum = std::cmp::max(num, current_sum + num);
        max_sum = std::cmp::max(max_sum, current_sum);
    }
    max_sum
}`,
        explanations: {
          def: 'Define max_sub_array implementing Kadane algorithm.',
          init: 'Initialize current_sum and max_sum to first element nums[0].',
          loop: 'Iterate over slice &nums[1..] destructuring reference via for &num in ...',
          exec: 'Evaluate max of current element and running sum using std::cmp::max.',
          mutate: 'Update current_sum and max_sum.',
          return: 'Return max_sum.',
          comment: 'Standard Rust function prototype.'
        },
        notes: 'Using slice sub-referencing &nums[1..] incurs zero allocations and compiler elides bounds checks in the loop.'
      }),

      buildQuestionItem({
        id: 'product-except-self',
        code: `pub fn product_except_self(nums: &[i32]) -> Vec<i32> {
    let n = nums.len();
    let mut res = vec![1; n];

    let mut prefix = 1;
    for i in 0..n {
        res[i] = prefix;
        prefix *= nums[i];
    }

    let mut suffix = 1;
    for i in (0..n).rev() {
        res[i] *= suffix;
        suffix *= nums[i];
    }
    res
}`,
        explanations: {
          def: 'Define product_except_self returning Vec<i32>.',
          alloc: 'Allocate result vector with macro vec![1; n].',
          init: 'Initialize prefix and suffix tracking variables to 1.',
          loop: 'Iterate forward over 0..n, then backward over (0..n).rev().',
          mutate: 'Multiply res[i] by suffix and update suffix accumulator.',
          return: 'Return result vector res.',
          comment: 'Rust function prototype.'
        },
        notes: '(0..n).rev() provides an efficient reverse iterator without allocating intermediate data.'
      }),

      buildQuestionItem({
        id: 'merge-intervals',
        code: `pub fn merge(mut intervals: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
    if intervals.len() <= 1 {
        return intervals;
    }
    intervals.sort_by_key(|v| v[0]);

    let mut res: Vec<Vec<i32>> = Vec::new();
    res.push(intervals[0].clone());

    for interval in intervals.into_iter().skip(1) {
        let last = res.last_mut().unwrap();
        if interval[0] <= last[1] {
            last[1] = std::cmp::max(last[1], interval[1]);
        } else {
            res.push(interval);
        }
    }
    res
}`,
        explanations: {
          def: 'Define merge taking ownership of mutable vector intervals.',
          branch: 'Check if intervals.len() <= 1, and check if interval starts before last interval ends.',
          exec: 'Sort intervals by starting coordinate using .sort_by_key(|v| v[0]).',
          init: 'Instantiate empty results vector res and push first interval.',
          loop: 'Iterate over remaining intervals via into_iter().skip(1).',
          mutate: 'Update last interval end coordinate or push non-overlapping interval.',
          return: 'Return merged intervals vector.',
          comment: 'Standard Rust function prototype.'
        },
        notes: 'intervals.sort_by_key is a non-allocating introsort; using .last_mut() borrows the last element mutably without removing it.'
      })
    ]
  };
}

module.exports = {
  getArraysStringsQuestions
};
