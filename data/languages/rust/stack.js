/**
 * SynapseCS Language-Specific Implementation: RUST - stack
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['rust'] = window.DSA_LANG_CODE['rust'] || {};
  window.DSA_LANG_CODE['rust']['stack'] = [
  {
    "id": "stack-array-impl",
    "code": [
      {
        "text": "pub struct Stack {",
        "code": "pub struct Stack {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    data: Vec<i32>,",
        "code": "    data: Vec<i32>,",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "impl Stack {",
        "code": "impl Stack {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "    pub fn new() -> Self {",
        "code": "    pub fn new() -> Self {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "        Stack { data: Vec::new() }",
        "code": "        Stack { data: Vec::new() }",
        "tag": "alloc",
        "lineNum": 7
      },
      {
        "text": "    }",
        "code": "    }",
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
        "text": "    pub fn push(&mut self, val: i32) {",
        "code": "    pub fn push(&mut self, val: i32) {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "        self.data.push(val);",
        "code": "        self.data.push(val);",
        "tag": "mutate",
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
        "text": "    pub fn pop(&mut self) -> Option<i32> {",
        "code": "    pub fn pop(&mut self) -> Option<i32> {",
        "tag": "def",
        "lineNum": 14
      },
      {
        "text": "        self.data.pop()",
        "code": "        self.data.pop()",
        "tag": "mutate",
        "lineNum": 15
      },
      {
        "text": "    }",
        "code": "    }",
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
    "rawCode": "pub struct Stack {\n    data: Vec<i32>,\n}\n\nimpl Stack {\n    pub fn new() -> Self {\n        Stack { data: Vec::new() }\n    }\n\n    pub fn push(&mut self, val: i32) {\n        self.data.push(val);\n    }\n\n    pub fn pop(&mut self) -> Option<i32> {\n        self.data.pop()\n    }\n}",
    "explanations": {
      "def": "Define Stack struct and methods new, push, pop.",
      "mutate": "Call self.data.push(val) and self.data.pop().",
      "exec": "Executes [exec] operation in this algorithm step.",
      "alloc": "Executes [alloc] operation in this algorithm step."
    },
    "notes": "Vec::push and Vec::pop execute in O(1) amortized time, making Vec the standard idiomatic stack in Rust."
  },
  {
    "id": "stack-ll-impl",
    "code": [
      {
        "text": "pub struct Node {",
        "code": "pub struct Node {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    val: i32,",
        "code": "    val: i32,",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    next: Option<Box<Node>>,",
        "code": "    next: Option<Box<Node>>,",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "pub struct LinkedStack {",
        "code": "pub struct LinkedStack {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "    top: Option<Box<Node>>,",
        "code": "    top: Option<Box<Node>>,",
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
        "text": "impl LinkedStack {",
        "code": "impl LinkedStack {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "    pub fn new() -> Self {",
        "code": "    pub fn new() -> Self {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "        LinkedStack { top: None }",
        "code": "        LinkedStack { top: None }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    pub fn push(&mut self, val: i32) {",
        "code": "    pub fn push(&mut self, val: i32) {",
        "tag": "def",
        "lineNum": 15
      },
      {
        "text": "        let new_node = Box::new(Node {",
        "code": "        let new_node = Box::new(Node {",
        "tag": "def",
        "lineNum": 16
      },
      {
        "text": "            val,",
        "code": "            val,",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "            next: self.top.take(),",
        "code": "            next: self.top.take(),",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "        });",
        "code": "        });",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "        self.top = Some(new_node);",
        "code": "        self.top = Some(new_node);",
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
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "    pub fn pop(&mut self) -> Option<i32> {",
        "code": "    pub fn pop(&mut self) -> Option<i32> {",
        "tag": "def",
        "lineNum": 23
      },
      {
        "text": "        self.top.take().map(|node| {",
        "code": "        self.top.take().map(|node| {",
        "tag": "def",
        "lineNum": 24
      },
      {
        "text": "            self.top = node.next;",
        "code": "            self.top = node.next;",
        "tag": "pointer",
        "lineNum": 25
      },
      {
        "text": "            node.val",
        "code": "            node.val",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "        })",
        "code": "        })",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 28
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 29
      }
    ],
    "rawCode": "pub struct Node {\n    val: i32,\n    next: Option<Box<Node>>,\n}\n\npub struct LinkedStack {\n    top: Option<Box<Node>>,\n}\n\nimpl LinkedStack {\n    pub fn new() -> Self {\n        LinkedStack { top: None }\n    }\n\n    pub fn push(&mut self, val: i32) {\n        let new_node = Box::new(Node {\n            val,\n            next: self.top.take(),\n        });\n        self.top = Some(new_node);\n    }\n\n    pub fn pop(&mut self) -> Option<i32> {\n        self.top.take().map(|node| {\n            self.top = node.next;\n            node.val\n        })\n    }\n}",
    "explanations": {
      "def": "Define Node and LinkedStack structs.",
      "pointer": "Use self.top.take() to detach previous top node.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "self.top.take() extracts the node ownership without violating the borrow checker."
  },
  {
    "id": "stack-valid-parens",
    "code": [
      {
        "text": "pub fn is_valid(s: &str) -> bool {",
        "code": "pub fn is_valid(s: &str) -> bool {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    let mut stack = Vec::new();",
        "code": "    let mut stack = Vec::new();",
        "tag": "alloc",
        "lineNum": 2
      },
      {
        "text": "    for ch in s.chars() {",
        "code": "    for ch in s.chars() {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "        match ch {",
        "code": "        match ch {",
        "tag": "branch",
        "lineNum": 4
      },
      {
        "text": "            '(' => stack.push(')'),",
        "code": "            '(' => stack.push(')'),",
        "tag": "mutate",
        "lineNum": 5
      },
      {
        "text": "            '{' => stack.push('}'),",
        "code": "            '{' => stack.push('}'),",
        "tag": "mutate",
        "lineNum": 6
      },
      {
        "text": "            '[' => stack.push(']'),",
        "code": "            '[' => stack.push(']'),",
        "tag": "mutate",
        "lineNum": 7
      },
      {
        "text": "            ')' | '}' | ']' => {",
        "code": "            ')' | '}' | ']' => {",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "                if stack.pop() != Some(ch) {",
        "code": "                if stack.pop() != Some(ch) {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "                    return false;",
        "code": "                    return false;",
        "tag": "return",
        "lineNum": 10
      },
      {
        "text": "                }",
        "code": "                }",
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
        "text": "            _ => {}",
        "code": "            _ => {}",
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
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    stack.is_empty()",
        "code": "    stack.is_empty()",
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
    "rawCode": "pub fn is_valid(s: &str) -> bool {\n    let mut stack = Vec::new();\n    for ch in s.chars() {\n        match ch {\n            '(' => stack.push(')'),\n            '{' => stack.push('}'),\n            '[' => stack.push(']'),\n            ')' | '}' | ']' => {\n                if stack.pop() != Some(ch) {\n                    return false;\n                }\n            }\n            _ => {}\n        }\n    }\n    stack.is_empty()\n}",
    "explanations": {
      "def": "Define is_valid borrowing string slice &str.",
      "branch": "Pattern match on character pushing expected closing bracket or validating match.",
      "mutate": "Push expected closing bracket or pop from stack.",
      "return": "Check if stack is empty via stack.is_empty().",
      "alloc": "Executes [alloc] operation in this algorithm step.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Pushing the expected closing bracket simplifies matching into a single comparison: stack.pop() != Some(ch)."
  },
  {
    "id": "stack-min",
    "code": [
      {
        "text": "pub struct MinStack {",
        "code": "pub struct MinStack {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    stack: Vec<i32>,",
        "code": "    stack: Vec<i32>,",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    min_stack: Vec<i32>,",
        "code": "    min_stack: Vec<i32>,",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "impl MinStack {",
        "code": "impl MinStack {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "    pub fn new() -> Self {",
        "code": "    pub fn new() -> Self {",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "        MinStack {",
        "code": "        MinStack {",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "            stack: Vec::new(),",
        "code": "            stack: Vec::new(),",
        "tag": "alloc",
        "lineNum": 9
      },
      {
        "text": "            min_stack: Vec::new(),",
        "code": "            min_stack: Vec::new(),",
        "tag": "alloc",
        "lineNum": 10
      },
      {
        "text": "        }",
        "code": "        }",
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
        "text": "    pub fn push(&mut self, val: i32) {",
        "code": "    pub fn push(&mut self, val: i32) {",
        "tag": "def",
        "lineNum": 14
      },
      {
        "text": "        self.stack.push(val);",
        "code": "        self.stack.push(val);",
        "tag": "mutate",
        "lineNum": 15
      },
      {
        "text": "        let min = match self.min_stack.last() {",
        "code": "        let min = match self.min_stack.last() {",
        "tag": "def",
        "lineNum": 16
      },
      {
        "text": "            Some(&curr_min) => std::cmp::min(curr_min, val),",
        "code": "            Some(&curr_min) => std::cmp::min(curr_min, val),",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "            None => val,",
        "code": "            None => val,",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "        };",
        "code": "        };",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "        self.min_stack.push(min);",
        "code": "        self.min_stack.push(min);",
        "tag": "mutate",
        "lineNum": 20
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "    pub fn get_min(&self) -> i32 {",
        "code": "    pub fn get_min(&self) -> i32 {",
        "tag": "def",
        "lineNum": 23
      },
      {
        "text": "        *self.min_stack.last().unwrap()",
        "code": "        *self.min_stack.last().unwrap()",
        "tag": "comment",
        "lineNum": 24
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 26
      }
    ],
    "rawCode": "pub struct MinStack {\n    stack: Vec<i32>,\n    min_stack: Vec<i32>,\n}\n\nimpl MinStack {\n    pub fn new() -> Self {\n        MinStack {\n            stack: Vec::new(),\n            min_stack: Vec::new(),\n        }\n    }\n\n    pub fn push(&mut self, val: i32) {\n        self.stack.push(val);\n        let min = match self.min_stack.last() {\n            Some(&curr_min) => std::cmp::min(curr_min, val),\n            None => val,\n        };\n        self.min_stack.push(min);\n    }\n\n    pub fn get_min(&self) -> i32 {\n        *self.min_stack.last().unwrap()\n    }\n}",
    "explanations": {
      "def": "Define MinStack struct and push/get_min methods.",
      "mutate": "Push value and running minimum to respective vectors.",
      "comment": "Min stack in Rust.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "alloc": "Executes [alloc] operation in this algorithm step."
    },
    "notes": "Parallel min_stack tracks minimum at each depth, enabling O(1) get_min() without scanning."
  },
  {
    "id": "stack-next-greater",
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
        "text": "pub fn next_greater_element(nums1: &[i32], nums2: &[i32]) -> Vec<i32> {",
        "code": "pub fn next_greater_element(nums1: &[i32], nums2: &[i32]) -> Vec<i32> {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    let mut map = HashMap::new();",
        "code": "    let mut map = HashMap::new();",
        "tag": "alloc",
        "lineNum": 4
      },
      {
        "text": "    let mut stack = Vec::new();",
        "code": "    let mut stack = Vec::new();",
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
        "text": "    for &num in nums2 {",
        "code": "    for &num in nums2 {",
        "tag": "loop",
        "lineNum": 7
      },
      {
        "text": "        while let Some(&top) = stack.last() {",
        "code": "        while let Some(&top) = stack.last() {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "            if top < num {",
        "code": "            if top < num {",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "                map.insert(stack.pop().unwrap(), num);",
        "code": "                map.insert(stack.pop().unwrap(), num);",
        "tag": "mutate",
        "lineNum": 10
      },
      {
        "text": "            } else {",
        "code": "            } else {",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "                break;",
        "code": "                break;",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "            }",
        "code": "            }",
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
        "text": "        stack.push(num);",
        "code": "        stack.push(num);",
        "tag": "mutate",
        "lineNum": 15
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "    nums1.iter().map(|num| *map.get(num).unwrap_or(&-1)).collect()",
        "code": "    nums1.iter().map(|num| *map.get(num).unwrap_or(&-1)).collect()",
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
    "rawCode": "use std::collections::HashMap;\n\npub fn next_greater_element(nums1: &[i32], nums2: &[i32]) -> Vec<i32> {\n    let mut map = HashMap::new();\n    let mut stack = Vec::new();\n\n    for &num in nums2 {\n        while let Some(&top) = stack.last() {\n            if top < num {\n                map.insert(stack.pop().unwrap(), num);\n            } else {\n                break;\n            }\n        }\n        stack.push(num);\n    }\n\n    nums1.iter().map(|num| *map.get(num).unwrap_or(&-1)).collect()\n}",
    "explanations": {
      "def": "Define next_greater_element function.",
      "loop": "Iterate over nums2 while maintaining monotonic stack.",
      "branch": "Compare top of stack against current number.",
      "mutate": "Pop smaller numbers and record mapping in HashMap.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "alloc": "Executes [alloc] operation in this algorithm step."
    },
    "notes": "Iterators and .unwrap_or(&-1) provide concise, idiomatic translation from map to result vector."
  },
  {
    "id": "stack-daily-temperatures",
    "code": [
      {
        "text": "pub fn daily_temperatures(temperatures: &[i32]) -> Vec<i32> {",
        "code": "pub fn daily_temperatures(temperatures: &[i32]) -> Vec<i32> {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    let mut res = vec![0; temperatures.len()];",
        "code": "    let mut res = vec![0; temperatures.len()];",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    let mut stack: Vec<usize> = Vec::new();",
        "code": "    let mut stack: Vec<usize> = Vec::new();",
        "tag": "alloc",
        "lineNum": 3
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    for (i, &temp) in temperatures.iter().enumerate() {",
        "code": "    for (i, &temp) in temperatures.iter().enumerate() {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "        while let Some(&prev_idx) = stack.last() {",
        "code": "        while let Some(&prev_idx) = stack.last() {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "            if temperatures[prev_idx] < temp {",
        "code": "            if temperatures[prev_idx] < temp {",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "                stack.pop();",
        "code": "                stack.pop();",
        "tag": "mutate",
        "lineNum": 8
      },
      {
        "text": "                res[prev_idx] = (i - prev_idx) as i32;",
        "code": "                res[prev_idx] = (i - prev_idx) as i32;",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "            } else {",
        "code": "            } else {",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "                break;",
        "code": "                break;",
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
        "text": "        stack.push(i);",
        "code": "        stack.push(i);",
        "tag": "mutate",
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
    "rawCode": "pub fn daily_temperatures(temperatures: &[i32]) -> Vec<i32> {\n    let mut res = vec![0; temperatures.len()];\n    let mut stack: Vec<usize> = Vec::new();\n\n    for (i, &temp) in temperatures.iter().enumerate() {\n        while let Some(&prev_idx) = stack.last() {\n            if temperatures[prev_idx] < temp {\n                stack.pop();\n                res[prev_idx] = (i - prev_idx) as i32;\n            } else {\n                break;\n            }\n        }\n        stack.push(i);\n    }\n    res\n}",
    "explanations": {
      "def": "Define daily_temperatures taking &[i32].",
      "alloc": "Allocate zero-initialized result vector vec![0; len].",
      "mutate": "Calculate delta (i - prev_idx) as i32 and push index.",
      "init": "Executes [init] operation in this algorithm step.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "branch": "Executes [branch] operation in this algorithm step."
    },
    "notes": "Stack stores usize indices; elements enter and leave stack at most once, yielding O(N) time."
  },
  {
    "id": "stack-eval-rpn",
    "code": [
      {
        "text": "pub fn eval_rpn(tokens: &[String]) -> i32 {",
        "code": "pub fn eval_rpn(tokens: &[String]) -> i32 {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    let mut stack = Vec::new();",
        "code": "    let mut stack = Vec::new();",
        "tag": "alloc",
        "lineNum": 2
      },
      {
        "text": "    for token in tokens {",
        "code": "    for token in tokens {",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "        match token.as_str() {",
        "code": "        match token.as_str() {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "            \"+\" => {",
        "code": "            \"+\" => {",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "                let (b, a) = (stack.pop().unwrap(), stack.pop().unwrap());",
        "code": "                let (b, a) = (stack.pop().unwrap(), stack.pop().unwrap());",
        "tag": "mutate",
        "lineNum": 6
      },
      {
        "text": "                stack.push(a + b);",
        "code": "                stack.push(a + b);",
        "tag": "mutate",
        "lineNum": 7
      },
      {
        "text": "            }",
        "code": "            }",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "            \"-\" => {",
        "code": "            \"-\" => {",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "                let (b, a) = (stack.pop().unwrap(), stack.pop().unwrap());",
        "code": "                let (b, a) = (stack.pop().unwrap(), stack.pop().unwrap());",
        "tag": "mutate",
        "lineNum": 10
      },
      {
        "text": "                stack.push(a - b);",
        "code": "                stack.push(a - b);",
        "tag": "mutate",
        "lineNum": 11
      },
      {
        "text": "            }",
        "code": "            }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "            \"*\" => {",
        "code": "            \"*\" => {",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "                let (b, a) = (stack.pop().unwrap(), stack.pop().unwrap());",
        "code": "                let (b, a) = (stack.pop().unwrap(), stack.pop().unwrap());",
        "tag": "mutate",
        "lineNum": 14
      },
      {
        "text": "                stack.push(a * b);",
        "code": "                stack.push(a * b);",
        "tag": "mutate",
        "lineNum": 15
      },
      {
        "text": "            }",
        "code": "            }",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "            \"/\" => {",
        "code": "            \"/\" => {",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "                let (b, a) = (stack.pop().unwrap(), stack.pop().unwrap());",
        "code": "                let (b, a) = (stack.pop().unwrap(), stack.pop().unwrap());",
        "tag": "mutate",
        "lineNum": 18
      },
      {
        "text": "                stack.push(a / b);",
        "code": "                stack.push(a / b);",
        "tag": "mutate",
        "lineNum": 19
      },
      {
        "text": "            }",
        "code": "            }",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "            num => stack.push(num.parse::<i32>().unwrap()),",
        "code": "            num => stack.push(num.parse::<i32>().unwrap()),",
        "tag": "mutate",
        "lineNum": 21
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "    stack[0]",
        "code": "    stack[0]",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 25
      }
    ],
    "rawCode": "pub fn eval_rpn(tokens: &[String]) -> i32 {\n    let mut stack = Vec::new();\n    for token in tokens {\n        match token.as_str() {\n            \"+\" => {\n                let (b, a) = (stack.pop().unwrap(), stack.pop().unwrap());\n                stack.push(a + b);\n            }\n            \"-\" => {\n                let (b, a) = (stack.pop().unwrap(), stack.pop().unwrap());\n                stack.push(a - b);\n            }\n            \"*\" => {\n                let (b, a) = (stack.pop().unwrap(), stack.pop().unwrap());\n                stack.push(a * b);\n            }\n            \"/\" => {\n                let (b, a) = (stack.pop().unwrap(), stack.pop().unwrap());\n                stack.push(a / b);\n            }\n            num => stack.push(num.parse::<i32>().unwrap()),\n        }\n    }\n    stack[0]\n}",
    "explanations": {
      "def": "Define eval_rpn taking slice of strings.",
      "loop": "Iterate over tokens.",
      "mutate": "Pop operands, evaluate arithmetic, and push result.",
      "alloc": "Executes [alloc] operation in this algorithm step.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "match token.as_str() provides clean pattern matching, and num.parse::<i32>() parses string digits."
  },
  {
    "id": "stack-queue-using-stacks",
    "code": [
      {
        "text": "pub struct MyQueue {",
        "code": "pub struct MyQueue {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    in_stack: Vec<i32>,",
        "code": "    in_stack: Vec<i32>,",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    out_stack: Vec<i32>,",
        "code": "    out_stack: Vec<i32>,",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "impl MyQueue {",
        "code": "impl MyQueue {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "    pub fn new() -> Self {",
        "code": "    pub fn new() -> Self {",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "        MyQueue {",
        "code": "        MyQueue {",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "            in_stack: Vec::new(),",
        "code": "            in_stack: Vec::new(),",
        "tag": "alloc",
        "lineNum": 9
      },
      {
        "text": "            out_stack: Vec::new(),",
        "code": "            out_stack: Vec::new(),",
        "tag": "alloc",
        "lineNum": 10
      },
      {
        "text": "        }",
        "code": "        }",
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
        "text": "    pub fn push(&mut self, x: i32) {",
        "code": "    pub fn push(&mut self, x: i32) {",
        "tag": "def",
        "lineNum": 14
      },
      {
        "text": "        self.in_stack.push(x);",
        "code": "        self.in_stack.push(x);",
        "tag": "mutate",
        "lineNum": 15
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "    pub fn pop(&mut self) -> i32 {",
        "code": "    pub fn pop(&mut self) -> i32 {",
        "tag": "def",
        "lineNum": 18
      },
      {
        "text": "        if self.out_stack.is_empty() {",
        "code": "        if self.out_stack.is_empty() {",
        "tag": "def",
        "lineNum": 19
      },
      {
        "text": "            while let Some(val) = self.in_stack.pop() {",
        "code": "            while let Some(val) = self.in_stack.pop() {",
        "tag": "def",
        "lineNum": 20
      },
      {
        "text": "                self.out_stack.push(val);",
        "code": "                self.out_stack.push(val);",
        "tag": "mutate",
        "lineNum": 21
      },
      {
        "text": "            }",
        "code": "            }",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "        self.out_stack.pop().unwrap()",
        "code": "        self.out_stack.pop().unwrap()",
        "tag": "mutate",
        "lineNum": 24
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 26
      }
    ],
    "rawCode": "pub struct MyQueue {\n    in_stack: Vec<i32>,\n    out_stack: Vec<i32>,\n}\n\nimpl MyQueue {\n    pub fn new() -> Self {\n        MyQueue {\n            in_stack: Vec::new(),\n            out_stack: Vec::new(),\n        }\n    }\n\n    pub fn push(&mut self, x: i32) {\n        self.in_stack.push(x);\n    }\n\n    pub fn pop(&mut self) -> i32 {\n        if self.out_stack.is_empty() {\n            while let Some(val) = self.in_stack.pop() {\n                self.out_stack.push(val);\n            }\n        }\n        self.out_stack.pop().unwrap()\n    }\n}",
    "explanations": {
      "def": "Define MyQueue using two vectors.",
      "mutate": "Push to in_stack or pop from out_stack.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "alloc": "Executes [alloc] operation in this algorithm step."
    },
    "notes": "Amortized cost per operation is O(1) since each element moves between stacks at most once."
  },
  {
    "id": "stack-simplify-path",
    "code": [
      {
        "text": "pub fn simplify_path(path: &str) -> String {",
        "code": "pub fn simplify_path(path: &str) -> String {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    let mut stack = Vec::new();",
        "code": "    let mut stack = Vec::new();",
        "tag": "alloc",
        "lineNum": 2
      },
      {
        "text": "    for part in path.split('/') {",
        "code": "    for part in path.split('/') {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "        match part {",
        "code": "        match part {",
        "tag": "branch",
        "lineNum": 4
      },
      {
        "text": "            \"\" | \".\" => {}",
        "code": "            \"\" | \".\" => {}",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "            \"..\" => { stack.pop(); }",
        "code": "            \"..\" => { stack.pop(); }",
        "tag": "mutate",
        "lineNum": 6
      },
      {
        "text": "            dir => stack.push(dir),",
        "code": "            dir => stack.push(dir),",
        "tag": "mutate",
        "lineNum": 7
      },
      {
        "text": "        }",
        "code": "        }",
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
        "text": "    format!(\"/{}\", stack.join(\"/\"))",
        "code": "    format!(\"/{}\", stack.join(\"/\"))",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 11
      }
    ],
    "rawCode": "pub fn simplify_path(path: &str) -> String {\n    let mut stack = Vec::new();\n    for part in path.split('/') {\n        match part {\n            \"\" | \".\" => {}\n            \"..\" => { stack.pop(); }\n            dir => stack.push(dir),\n        }\n    }\n    format!(\"/{}\", stack.join(\"/\"))\n}",
    "explanations": {
      "def": "Define simplify_path taking &str and returning String.",
      "branch": "Pattern match: ignore empty/\".\", pop on \"..\", push directory.",
      "mutate": "Pop from stack or push directory.",
      "alloc": "Executes [alloc] operation in this algorithm step.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "path.split('/') avoids allocating intermediate strings, and stack.join(\"/\") formats the result."
  },
  {
    "id": "stack-histogram",
    "code": [
      {
        "text": "pub fn largest_rectangle_area(heights: &[i32]) -> i32 {",
        "code": "pub fn largest_rectangle_area(heights: &[i32]) -> i32 {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    let mut stack: Vec<usize> = Vec::new();",
        "code": "    let mut stack: Vec<usize> = Vec::new();",
        "tag": "alloc",
        "lineNum": 2
      },
      {
        "text": "    let mut max_area = 0;",
        "code": "    let mut max_area = 0;",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    let n = heights.len();",
        "code": "    let n = heights.len();",
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
        "text": "    for i in 0..=n {",
        "code": "    for i in 0..=n {",
        "tag": "loop",
        "lineNum": 6
      },
      {
        "text": "        let h = if i == n { 0 } else { heights[i] };",
        "code": "        let h = if i == n { 0 } else { heights[i] };",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "        while let Some(&top_idx) = stack.last() {",
        "code": "        while let Some(&top_idx) = stack.last() {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "            if heights[top_idx] > h {",
        "code": "            if heights[top_idx] > h {",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "                stack.pop();",
        "code": "                stack.pop();",
        "tag": "mutate",
        "lineNum": 10
      },
      {
        "text": "                let height = heights[top_idx];",
        "code": "                let height = heights[top_idx];",
        "tag": "init",
        "lineNum": 11
      },
      {
        "text": "                let width = match stack.last() {",
        "code": "                let width = match stack.last() {",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "                    Some(&prev) => (i - prev - 1) as i32,",
        "code": "                    Some(&prev) => (i - prev - 1) as i32,",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "                    None => i as i32,",
        "code": "                    None => i as i32,",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "                };",
        "code": "                };",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "                max_area = std::cmp::max(max_area, height * width);",
        "code": "                max_area = std::cmp::max(max_area, height * width);",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "            } else {",
        "code": "            } else {",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "                break;",
        "code": "                break;",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "            }",
        "code": "            }",
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
        "text": "        stack.push(i);",
        "code": "        stack.push(i);",
        "tag": "mutate",
        "lineNum": 21
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "    max_area",
        "code": "    max_area",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 24
      }
    ],
    "rawCode": "pub fn largest_rectangle_area(heights: &[i32]) -> i32 {\n    let mut stack: Vec<usize> = Vec::new();\n    let mut max_area = 0;\n    let n = heights.len();\n\n    for i in 0..=n {\n        let h = if i == n { 0 } else { heights[i] };\n        while let Some(&top_idx) = stack.last() {\n            if heights[top_idx] > h {\n                stack.pop();\n                let height = heights[top_idx];\n                let width = match stack.last() {\n                    Some(&prev) => (i - prev - 1) as i32,\n                    None => i as i32,\n                };\n                max_area = std::cmp::max(max_area, height * width);\n            } else {\n                break;\n            }\n        }\n        stack.push(i);\n    }\n    max_area\n}",
    "explanations": {
      "def": "Define largest_rectangle_area using monotonic stack.",
      "init": "Instantiate stack vector and initialize max_area = 0.",
      "loop": "Iterate over 0..=n using sentinel 0 height at end.",
      "mutate": "Pop bar, compute area = height * width, update max_area.",
      "alloc": "Executes [alloc] operation in this algorithm step.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "branch": "Executes [branch] operation in this algorithm step."
    },
    "notes": "Monotonic increasing stack evaluates largest rectangle in single O(N) pass."
  }
];
})(typeof window !== 'undefined' ? window : global);
