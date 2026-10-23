/**
 * SynapseCS Language-Specific Implementation: RUST - arrays-strings
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['rust'] = window.DSA_LANG_CODE['rust'] || {};
  window.DSA_LANG_CODE['rust']['arrays-strings'] = [
  {
    "id": "arr-basics-create",
    "code": [
      {
        "text": "fn print_addresses(arr: &[i32]) {",
        "code": "fn print_addresses(arr: &[i32]) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    for (i, val) in arr.iter().enumerate() {",
        "code": "    for (i, val) in arr.iter().enumerate() {",
        "tag": "def",
        "lineNum": 2
      },
      {
        "text": "        println!(\"Index {}: Address {:p}, Value {}\", i, val, val);",
        "code": "        println!(\"Index {}: Address {:p}, Value {}\", i, val, val);",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "}",
        "code": "}",
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
        "text": "fn main() {",
        "code": "fn main() {",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "    let nums = [10, 20, 30, 40];",
        "code": "    let nums = [10, 20, 30, 40];",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "    print_addresses(&nums);",
        "code": "    print_addresses(&nums);",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 10
      }
    ],
    "rawCode": "fn print_addresses(arr: &[i32]) {\n    for (i, val) in arr.iter().enumerate() {\n        println!(\"Index {}: Address {:p}, Value {}\", i, val, val);\n    }\n}\n\nfn main() {\n    let nums = [10, 20, 30, 40];\n    print_addresses(&nums);\n}",
    "explanations": {
      "def": "Define print_addresses function borrowing an array slice &[i32].",
      "init": "Stack-allocate fixed array let nums = [10, 20, 30, 40].",
      "exec": "Print index, pointer address via {:p}, and element value via {}."
    },
    "notes": "In Rust, &[i32] is a fat pointer containing a pointer to the first element and a length; borrowing ensures zero-cost boundary safety without copying."
  },
  {
    "id": "arr-rotate",
    "code": [
      {
        "text": "pub fn rotate(nums: &mut Vec<i32>, k: usize) {",
        "code": "pub fn rotate(nums: &mut Vec<i32>, k: usize) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    let n = nums.len();",
        "code": "    let n = nums.len();",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    if n == 0 { return; }",
        "code": "    if n == 0 { return; }",
        "tag": "branch",
        "lineNum": 3
      },
      {
        "text": "    let k = k % n;",
        "code": "    let k = k % n;",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "    nums.reverse();",
        "code": "    nums.reverse();",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    nums[0..k].reverse();",
        "code": "    nums[0..k].reverse();",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    nums[k..n].reverse();",
        "code": "    nums[k..n].reverse();",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 8
      }
    ],
    "rawCode": "pub fn rotate(nums: &mut Vec<i32>, k: usize) {\n    let n = nums.len();\n    if n == 0 { return; }\n    let k = k % n;\n    nums.reverse();\n    nums[0..k].reverse();\n    nums[k..n].reverse();\n}",
    "explanations": {
      "def": "Define rotate function borrowing a mutable vector reference &mut Vec<i32>.",
      "branch": "Guard clause: return immediately if vector length is 0.",
      "init": "Calculate k = k % n.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Rust standard library slice::reverse performs in-place element swaps with SIMD auto-vectorization when possible."
  },
  {
    "id": "two-sum-ii-sorted",
    "code": [
      {
        "text": "pub fn two_sum(numbers: &[i32], target: i32) -> Vec<i32> {",
        "code": "pub fn two_sum(numbers: &[i32], target: i32) -> Vec<i32> {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    let mut left = 0;",
        "code": "    let mut left = 0;",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    let mut right = numbers.len() - 1;",
        "code": "    let mut right = numbers.len() - 1;",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    while left < right {",
        "code": "    while left < right {",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "        let sum = numbers[left] + numbers[right];",
        "code": "        let sum = numbers[left] + numbers[right];",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "        if sum == target {",
        "code": "        if sum == target {",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "            return vec![(left + 1) as i32, (right + 1) as i32];",
        "code": "            return vec![(left + 1) as i32, (right + 1) as i32];",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "        } else if sum < target {",
        "code": "        } else if sum < target {",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "            left += 1;",
        "code": "            left += 1;",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        } else {",
        "code": "        } else {",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "            right -= 1;",
        "code": "            right -= 1;",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    vec![]",
        "code": "    vec![]",
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
    "rawCode": "pub fn two_sum(numbers: &[i32], target: i32) -> Vec<i32> {\n    let mut left = 0;\n    let mut right = numbers.len() - 1;\n\n    while left < right {\n        let sum = numbers[left] + numbers[right];\n        if sum == target {\n            return vec![(left + 1) as i32, (right + 1) as i32];\n        } else if sum < target {\n            left += 1;\n        } else {\n            right -= 1;\n        }\n    }\n    vec![]\n}",
    "explanations": {
      "def": "Define two_sum function accepting borrowed slice &[i32] and target i32.",
      "init": "Initialize mutable indices left = 0 and right = numbers.len() - 1.",
      "loop": "Iterate while left < right.",
      "branch": "Compare sum to target and branch accordingly.",
      "return": "Return vec! macro creating 1-based index vector.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Borrowing &[i32] prevents unnecessary memory cloning, and vec! macro allocates only the 2-element result vector."
  },
  {
    "id": "container-with-most-water",
    "code": [
      {
        "text": "pub fn max_area(height: &[i32]) -> i32 {",
        "code": "pub fn max_area(height: &[i32]) -> i32 {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    let mut left = 0;",
        "code": "    let mut left = 0;",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    let mut right = height.len() - 1;",
        "code": "    let mut right = height.len() - 1;",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    let mut max_water = 0;",
        "code": "    let mut max_water = 0;",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    while left < right {",
        "code": "    while left < right {",
        "tag": "loop",
        "lineNum": 6
      },
      {
        "text": "        let w = (right - left) as i32;",
        "code": "        let w = (right - left) as i32;",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "        let h = std::cmp::min(height[left], height[right]);",
        "code": "        let h = std::cmp::min(height[left], height[right]);",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "        let area = h * w;",
        "code": "        let area = h * w;",
        "tag": "init",
        "lineNum": 9
      },
      {
        "text": "        if area > max_water {",
        "code": "        if area > max_water {",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "            max_water = area;",
        "code": "            max_water = area;",
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
        "text": "        if height[left] < height[right] {",
        "code": "        if height[left] < height[right] {",
        "tag": "branch",
        "lineNum": 13
      },
      {
        "text": "            left += 1;",
        "code": "            left += 1;",
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
        "text": "            right -= 1;",
        "code": "            right -= 1;",
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
        "text": "    max_water",
        "code": "    max_water",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 20
      }
    ],
    "rawCode": "pub fn max_area(height: &[i32]) -> i32 {\n    let mut left = 0;\n    let mut right = height.len() - 1;\n    let mut max_water = 0;\n\n    while left < right {\n        let w = (right - left) as i32;\n        let h = std::cmp::min(height[left], height[right]);\n        let area = h * w;\n        if area > max_water {\n            max_water = area;\n        }\n        if height[left] < height[right] {\n            left += 1;\n        } else {\n            right -= 1;\n        }\n    }\n    max_water\n}",
    "explanations": {
      "def": "Define max_area calculating maximum volume between container lines.",
      "init": "Initialize mutable pointer indices left and right alongside max_water.",
      "loop": "While left < right, evaluate container area.",
      "exec": "Compute width w and minimum wall height h via std::cmp::min.",
      "branch": "Update max_water and move the pointer pointing to the shorter vertical wall."
    },
    "notes": "In Rust, casting usize index differences to i32 requires explicit (right - left) as i32 to maintain type safety."
  },
  {
    "id": "longest-substring-no-repeat",
    "code": [
      {
        "text": "use std::collections::HashMap;",
        "code": "use std::collections::HashMap;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "pub fn length_of_longest_substring(s: &str) -> i32 {",
        "code": "pub fn length_of_longest_substring(s: &str) -> i32 {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    let mut last_seen = HashMap::new();",
        "code": "    let mut last_seen = HashMap::new();",
        "tag": "alloc",
        "lineNum": 4
      },
      {
        "text": "    let mut max_len = 0;",
        "code": "    let mut max_len = 0;",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "    let mut left = 0;",
        "code": "    let mut left = 0;",
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
        "text": "    for (right, ch) in s.char_indices() {",
        "code": "    for (right, ch) in s.char_indices() {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "        if let Some(&prev_idx) = last_seen.get(&ch) {",
        "code": "        if let Some(&prev_idx) = last_seen.get(&ch) {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "            if prev_idx >= left {",
        "code": "            if prev_idx >= left {",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "                left = prev_idx + 1;",
        "code": "                left = prev_idx + 1;",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "            }",
        "code": "            }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        last_seen.insert(ch, right);",
        "code": "        last_seen.insert(ch, right);",
        "tag": "mutate",
        "lineNum": 14
      },
      {
        "text": "        let current_len = right - left + 1;",
        "code": "        let current_len = right - left + 1;",
        "tag": "init",
        "lineNum": 15
      },
      {
        "text": "        if current_len > max_len {",
        "code": "        if current_len > max_len {",
        "tag": "branch",
        "lineNum": 16
      },
      {
        "text": "            max_len = current_len;",
        "code": "            max_len = current_len;",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "    max_len as i32",
        "code": "    max_len as i32",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 21
      }
    ],
    "rawCode": "use std::collections::HashMap;\n\npub fn length_of_longest_substring(s: &str) -> i32 {\n    let mut last_seen = HashMap::new();\n    let mut max_len = 0;\n    let mut left = 0;\n\n    for (right, ch) in s.char_indices() {\n        if let Some(&prev_idx) = last_seen.get(&ch) {\n            if prev_idx >= left {\n                left = prev_idx + 1;\n            }\n        }\n        last_seen.insert(ch, right);\n        let current_len = right - left + 1;\n        if current_len > max_len {\n            max_len = current_len;\n        }\n    }\n    max_len as i32\n}",
    "explanations": {
      "def": "Define length_of_longest_substring accepting string slice &str.",
      "init": "Instantiate HashMap::new() to track character byte positions.",
      "branch": "Pattern match on HashMap lookup with if let Some(&prev_idx) = last_seen.get(&ch).",
      "mutate": "Insert or update character index via last_seen.insert(ch, right).",
      "exec": "Executes [exec] operation in this algorithm step.",
      "alloc": "Executes [alloc] operation in this algorithm step."
    },
    "notes": "s.char_indices() correctly handles multi-byte UTF-8 Unicode characters, returning exact byte offsets."
  },
  {
    "id": "trapping-rain-water",
    "code": [
      {
        "text": "pub fn trap(height: &[i32]) -> i32 {",
        "code": "pub fn trap(height: &[i32]) -> i32 {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    if height.len() <= 2 { return 0; }",
        "code": "    if height.len() <= 2 { return 0; }",
        "tag": "branch",
        "lineNum": 2
      },
      {
        "text": "    let mut left = 0;",
        "code": "    let mut left = 0;",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    let mut right = height.len() - 1;",
        "code": "    let mut right = height.len() - 1;",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "    let mut left_max = 0;",
        "code": "    let mut left_max = 0;",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "    let mut right_max = 0;",
        "code": "    let mut right_max = 0;",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "    let mut total_water = 0;",
        "code": "    let mut total_water = 0;",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    while left < right {",
        "code": "    while left < right {",
        "tag": "loop",
        "lineNum": 9
      },
      {
        "text": "        if height[left] < height[right] {",
        "code": "        if height[left] < height[right] {",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "            if height[left] >= left_max {",
        "code": "            if height[left] >= left_max {",
        "tag": "branch",
        "lineNum": 11
      },
      {
        "text": "                left_max = height[left];",
        "code": "                left_max = height[left];",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "            } else {",
        "code": "            } else {",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "                total_water += left_max - height[left];",
        "code": "                total_water += left_max - height[left];",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "            }",
        "code": "            }",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "            left += 1;",
        "code": "            left += 1;",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "        } else {",
        "code": "        } else {",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "            if height[right] >= right_max {",
        "code": "            if height[right] >= right_max {",
        "tag": "branch",
        "lineNum": 18
      },
      {
        "text": "                right_max = height[right];",
        "code": "                right_max = height[right];",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "            } else {",
        "code": "            } else {",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "                total_water += right_max - height[right];",
        "code": "                total_water += right_max - height[right];",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "            }",
        "code": "            }",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "            right -= 1;",
        "code": "            right -= 1;",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "    total_water",
        "code": "    total_water",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 27
      }
    ],
    "rawCode": "pub fn trap(height: &[i32]) -> i32 {\n    if height.len() <= 2 { return 0; }\n    let mut left = 0;\n    let mut right = height.len() - 1;\n    let mut left_max = 0;\n    let mut right_max = 0;\n    let mut total_water = 0;\n\n    while left < right {\n        if height[left] < height[right] {\n            if height[left] >= left_max {\n                left_max = height[left];\n            } else {\n                total_water += left_max - height[left];\n            }\n            left += 1;\n        } else {\n            if height[right] >= right_max {\n                right_max = height[right];\n            } else {\n                total_water += right_max - height[right];\n            }\n            right -= 1;\n        }\n    }\n    total_water\n}",
    "explanations": {
      "def": "Define trap computing total trapped rainwater units.",
      "branch": "Early exit guard clause if height.len() <= 2, and compare boundary heights.",
      "init": "Initialize mutable boundary indices and maximum wall trackers.",
      "loop": "Loop while left < right.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Two-pointer approach runs in linear O(N) time with O(1) space, avoiding any vector allocations."
  },
  {
    "id": "maximum-subarray-kadane",
    "code": [
      {
        "text": "pub fn max_sub_array(nums: &[i32]) -> i32 {",
        "code": "pub fn max_sub_array(nums: &[i32]) -> i32 {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    let mut current_sum = nums[0];",
        "code": "    let mut current_sum = nums[0];",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    let mut max_sum = nums[0];",
        "code": "    let mut max_sum = nums[0];",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    for &num in &nums[1..] {",
        "code": "    for &num in &nums[1..] {",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "        current_sum = std::cmp::max(num, current_sum + num);",
        "code": "        current_sum = std::cmp::max(num, current_sum + num);",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "        max_sum = std::cmp::max(max_sum, current_sum);",
        "code": "        max_sum = std::cmp::max(max_sum, current_sum);",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    max_sum",
        "code": "    max_sum",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 10
      }
    ],
    "rawCode": "pub fn max_sub_array(nums: &[i32]) -> i32 {\n    let mut current_sum = nums[0];\n    let mut max_sum = nums[0];\n\n    for &num in &nums[1..] {\n        current_sum = std::cmp::max(num, current_sum + num);\n        max_sum = std::cmp::max(max_sum, current_sum);\n    }\n    max_sum\n}",
    "explanations": {
      "def": "Define max_sub_array implementing Kadane algorithm.",
      "init": "Initialize current_sum and max_sum to first element nums[0].",
      "loop": "Iterate over slice &nums[1..] destructuring reference via for &num in ...",
      "exec": "Evaluate max of current element and running sum using std::cmp::max."
    },
    "notes": "Using slice sub-referencing &nums[1..] incurs zero allocations and compiler elides bounds checks in the loop."
  },
  {
    "id": "product-except-self",
    "code": [
      {
        "text": "pub fn product_except_self(nums: &[i32]) -> Vec<i32> {",
        "code": "pub fn product_except_self(nums: &[i32]) -> Vec<i32> {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    let n = nums.len();",
        "code": "    let n = nums.len();",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    let mut res = vec![1; n];",
        "code": "    let mut res = vec![1; n];",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    let mut prefix = 1;",
        "code": "    let mut prefix = 1;",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "    for i in 0..n {",
        "code": "    for i in 0..n {",
        "tag": "loop",
        "lineNum": 6
      },
      {
        "text": "        res[i] = prefix;",
        "code": "        res[i] = prefix;",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "        prefix *= nums[i];",
        "code": "        prefix *= nums[i];",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    }",
        "code": "    }",
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
        "text": "    let mut suffix = 1;",
        "code": "    let mut suffix = 1;",
        "tag": "init",
        "lineNum": 11
      },
      {
        "text": "    for i in (0..n).rev() {",
        "code": "    for i in (0..n).rev() {",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "        res[i] *= suffix;",
        "code": "        res[i] *= suffix;",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        suffix *= nums[i];",
        "code": "        suffix *= nums[i];",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    res",
        "code": "    res",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 17
      }
    ],
    "rawCode": "pub fn product_except_self(nums: &[i32]) -> Vec<i32> {\n    let n = nums.len();\n    let mut res = vec![1; n];\n\n    let mut prefix = 1;\n    for i in 0..n {\n        res[i] = prefix;\n        prefix *= nums[i];\n    }\n\n    let mut suffix = 1;\n    for i in (0..n).rev() {\n        res[i] *= suffix;\n        suffix *= nums[i];\n    }\n    res\n}",
    "explanations": {
      "def": "Define product_except_self returning Vec<i32>.",
      "init": "Initialize prefix and suffix tracking variables to 1.",
      "loop": "Iterate forward over 0..n, then backward over (0..n).rev().",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "(0..n).rev() provides an efficient reverse iterator without allocating intermediate data."
  },
  {
    "id": "merge-intervals",
    "code": [
      {
        "text": "pub fn merge(mut intervals: Vec<Vec<i32>>) -> Vec<Vec<i32>> {",
        "code": "pub fn merge(mut intervals: Vec<Vec<i32>>) -> Vec<Vec<i32>> {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    if intervals.len() <= 1 {",
        "code": "    if intervals.len() <= 1 {",
        "tag": "def",
        "lineNum": 2
      },
      {
        "text": "        return intervals;",
        "code": "        return intervals;",
        "tag": "return",
        "lineNum": 3
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    intervals.sort_by_key(|v| v[0]);",
        "code": "    intervals.sort_by_key(|v| v[0]);",
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
        "text": "    let mut res: Vec<Vec<i32>> = Vec::new();",
        "code": "    let mut res: Vec<Vec<i32>> = Vec::new();",
        "tag": "alloc",
        "lineNum": 7
      },
      {
        "text": "    res.push(intervals[0].clone());",
        "code": "    res.push(intervals[0].clone());",
        "tag": "mutate",
        "lineNum": 8
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    for interval in intervals.into_iter().skip(1) {",
        "code": "    for interval in intervals.into_iter().skip(1) {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "        let last = res.last_mut().unwrap();",
        "code": "        let last = res.last_mut().unwrap();",
        "tag": "init",
        "lineNum": 11
      },
      {
        "text": "        if interval[0] <= last[1] {",
        "code": "        if interval[0] <= last[1] {",
        "tag": "branch",
        "lineNum": 12
      },
      {
        "text": "            last[1] = std::cmp::max(last[1], interval[1]);",
        "code": "            last[1] = std::cmp::max(last[1], interval[1]);",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        } else {",
        "code": "        } else {",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "            res.push(interval);",
        "code": "            res.push(interval);",
        "tag": "mutate",
        "lineNum": 15
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "    res",
        "code": "    res",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 19
      }
    ],
    "rawCode": "pub fn merge(mut intervals: Vec<Vec<i32>>) -> Vec<Vec<i32>> {\n    if intervals.len() <= 1 {\n        return intervals;\n    }\n    intervals.sort_by_key(|v| v[0]);\n\n    let mut res: Vec<Vec<i32>> = Vec::new();\n    res.push(intervals[0].clone());\n\n    for interval in intervals.into_iter().skip(1) {\n        let last = res.last_mut().unwrap();\n        if interval[0] <= last[1] {\n            last[1] = std::cmp::max(last[1], interval[1]);\n        } else {\n            res.push(interval);\n        }\n    }\n    res\n}",
    "explanations": {
      "def": "Define merge taking ownership of mutable vector intervals.",
      "branch": "Check if intervals.len() <= 1, and check if interval starts before last interval ends.",
      "exec": "Sort intervals by starting coordinate using .sort_by_key(|v| v[0]).",
      "init": "Instantiate empty results vector res and push first interval.",
      "mutate": "Update last interval end coordinate or push non-overlapping interval.",
      "return": "Return merged intervals vector.",
      "alloc": "Executes [alloc] operation in this algorithm step."
    },
    "notes": "intervals.sort_by_key is a non-allocating introsort; using .last_mut() borrows the last element mutably without removing it."
  }
];
})(typeof window !== 'undefined' ? window : global);
