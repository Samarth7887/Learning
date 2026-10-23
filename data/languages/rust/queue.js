/**
 * SynapseCS Language-Specific Implementation: RUST - queue
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['rust'] = window.DSA_LANG_CODE['rust'] || {};
  window.DSA_LANG_CODE['rust']['queue'] = [
  {
    "id": "queue-array-impl",
    "code": [
      {
        "text": "pub struct Queue {",
        "code": "pub struct Queue {",
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
        "text": "impl Queue {",
        "code": "impl Queue {",
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
        "text": "        Queue { data: Vec::new() }",
        "code": "        Queue { data: Vec::new() }",
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
        "text": "    pub fn enqueue(&mut self, val: i32) {",
        "code": "    pub fn enqueue(&mut self, val: i32) {",
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
        "text": "    pub fn dequeue(&mut self) -> Option<i32> {",
        "code": "    pub fn dequeue(&mut self) -> Option<i32> {",
        "tag": "def",
        "lineNum": 14
      },
      {
        "text": "        if self.data.is_empty() {",
        "code": "        if self.data.is_empty() {",
        "tag": "def",
        "lineNum": 15
      },
      {
        "text": "            None",
        "code": "            None",
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
        "text": "            Some(self.data.remove(0))",
        "code": "            Some(self.data.remove(0))",
        "tag": "mutate",
        "lineNum": 18
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "    }",
        "code": "    }",
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
    "rawCode": "pub struct Queue {\n    data: Vec<i32>,\n}\n\nimpl Queue {\n    pub fn new() -> Self {\n        Queue { data: Vec::new() }\n    }\n\n    pub fn enqueue(&mut self, val: i32) {\n        self.data.push(val);\n    }\n\n    pub fn dequeue(&mut self) -> Option<i32> {\n        if self.data.is_empty() {\n            None\n        } else {\n            Some(self.data.remove(0))\n        }\n    }\n}",
    "explanations": {
      "def": "Define Queue struct and methods.",
      "mutate": "Push element via push() and remove head element via remove(0).",
      "exec": "Executes [exec] operation in this algorithm step.",
      "alloc": "Executes [alloc] operation in this algorithm step."
    },
    "notes": "Vec::remove(0) shifts subsequent elements; using VecDeque is preferable for O(1) removals."
  },
  {
    "id": "queue-linkedlist-impl",
    "code": [
      {
        "text": "use std::collections::VecDeque;",
        "code": "use std::collections::VecDeque;",
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
        "text": "pub struct LinkedQueue {",
        "code": "pub struct LinkedQueue {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    deque: VecDeque<i32>,",
        "code": "    deque: VecDeque<i32>,",
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
        "text": "impl LinkedQueue {",
        "code": "impl LinkedQueue {",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "    pub fn new() -> Self {",
        "code": "    pub fn new() -> Self {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "        LinkedQueue { deque: VecDeque::new() }",
        "code": "        LinkedQueue { deque: VecDeque::new() }",
        "tag": "alloc",
        "lineNum": 9
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    pub fn enqueue(&mut self, val: i32) {",
        "code": "    pub fn enqueue(&mut self, val: i32) {",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "        self.deque.push_back(val);",
        "code": "        self.deque.push_back(val);",
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
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    pub fn dequeue(&mut self) -> Option<i32> {",
        "code": "    pub fn dequeue(&mut self) -> Option<i32> {",
        "tag": "def",
        "lineNum": 16
      },
      {
        "text": "        self.deque.pop_front()",
        "code": "        self.deque.pop_front()",
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
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 19
      }
    ],
    "rawCode": "use std::collections::VecDeque;\n\npub struct LinkedQueue {\n    deque: VecDeque<i32>,\n}\n\nimpl LinkedQueue {\n    pub fn new() -> Self {\n        LinkedQueue { deque: VecDeque::new() }\n    }\n\n    pub fn enqueue(&mut self, val: i32) {\n        self.deque.push_back(val);\n    }\n\n    pub fn dequeue(&mut self) -> Option<i32> {\n        self.deque.pop_front()\n    }\n}",
    "explanations": {
      "def": "Define LinkedQueue using VecDeque ring buffer.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "alloc": "Executes [alloc] operation in this algorithm step."
    },
    "notes": "VecDeque provides O(1) amortized double-ended push and pop operations."
  },
  {
    "id": "queue-circular-array",
    "code": [
      {
        "text": "pub struct MyCircularQueue {",
        "code": "pub struct MyCircularQueue {",
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
        "text": "    front: usize,",
        "code": "    front: usize,",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    rear: usize,",
        "code": "    rear: usize,",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    size: usize,",
        "code": "    size: usize,",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    capacity: usize,",
        "code": "    capacity: usize,",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "impl MyCircularQueue {",
        "code": "impl MyCircularQueue {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    pub fn new(k: i32) -> Self {",
        "code": "    pub fn new(k: i32) -> Self {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "        let cap = k as usize;",
        "code": "        let cap = k as usize;",
        "tag": "init",
        "lineNum": 11
      },
      {
        "text": "        MyCircularQueue {",
        "code": "        MyCircularQueue {",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "            data: vec![0; cap],",
        "code": "            data: vec![0; cap],",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "            front: 0,",
        "code": "            front: 0,",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "            rear: 0,",
        "code": "            rear: 0,",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "            size: 0,",
        "code": "            size: 0,",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "            capacity: cap,",
        "code": "            capacity: cap,",
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
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "    pub fn en_queue(&mut self, value: i32) -> bool {",
        "code": "    pub fn en_queue(&mut self, value: i32) -> bool {",
        "tag": "def",
        "lineNum": 21
      },
      {
        "text": "        if self.size == self.capacity {",
        "code": "        if self.size == self.capacity {",
        "tag": "branch",
        "lineNum": 22
      },
      {
        "text": "            return false;",
        "code": "            return false;",
        "tag": "return",
        "lineNum": 23
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "        self.data[self.rear] = value;",
        "code": "        self.data[self.rear] = value;",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "        self.rear = (self.rear + 1) % self.capacity;",
        "code": "        self.rear = (self.rear + 1) % self.capacity;",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "        self.size += 1;",
        "code": "        self.size += 1;",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "        true",
        "code": "        true",
        "tag": "exec",
        "lineNum": 28
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 29
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 30
      }
    ],
    "rawCode": "pub struct MyCircularQueue {\n    data: Vec<i32>,\n    front: usize,\n    rear: usize,\n    size: usize,\n    capacity: usize,\n}\n\nimpl MyCircularQueue {\n    pub fn new(k: i32) -> Self {\n        let cap = k as usize;\n        MyCircularQueue {\n            data: vec![0; cap],\n            front: 0,\n            rear: 0,\n            size: 0,\n            capacity: cap,\n        }\n    }\n\n    pub fn en_queue(&mut self, value: i32) -> bool {\n        if self.size == self.capacity {\n            return false;\n        }\n        self.data[self.rear] = value;\n        self.rear = (self.rear + 1) % self.capacity;\n        self.size += 1;\n        true\n    }\n}",
    "explanations": {
      "def": "Define MyCircularQueue struct and methods.",
      "branch": "Return false if queue is full.",
      "return": "Return true.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "init": "Executes [init] operation in this algorithm step."
    },
    "notes": "Modulo indexing enables reusing vacated positions without moving memory."
  },
  {
    "id": "queue-circular-deque",
    "code": [
      {
        "text": "pub struct MyCircularDeque {",
        "code": "pub struct MyCircularDeque {",
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
        "text": "    front: usize,",
        "code": "    front: usize,",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    rear: usize,",
        "code": "    rear: usize,",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    size: usize,",
        "code": "    size: usize,",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    capacity: usize,",
        "code": "    capacity: usize,",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "impl MyCircularDeque {",
        "code": "impl MyCircularDeque {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    pub fn new(k: i32) -> Self {",
        "code": "    pub fn new(k: i32) -> Self {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "        let cap = k as usize;",
        "code": "        let cap = k as usize;",
        "tag": "init",
        "lineNum": 11
      },
      {
        "text": "        MyCircularDeque {",
        "code": "        MyCircularDeque {",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "            data: vec![0; cap],",
        "code": "            data: vec![0; cap],",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "            front: 0,",
        "code": "            front: 0,",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "            rear: 0,",
        "code": "            rear: 0,",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "            size: 0,",
        "code": "            size: 0,",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "            capacity: cap,",
        "code": "            capacity: cap,",
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
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "    pub fn insert_front(&mut self, value: i32) -> bool {",
        "code": "    pub fn insert_front(&mut self, value: i32) -> bool {",
        "tag": "def",
        "lineNum": 21
      },
      {
        "text": "        if self.size == self.capacity {",
        "code": "        if self.size == self.capacity {",
        "tag": "branch",
        "lineNum": 22
      },
      {
        "text": "            return false;",
        "code": "            return false;",
        "tag": "return",
        "lineNum": 23
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "        self.front = (self.front + self.capacity - 1) % self.capacity;",
        "code": "        self.front = (self.front + self.capacity - 1) % self.capacity;",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "        self.data[self.front] = value;",
        "code": "        self.data[self.front] = value;",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "        self.size += 1;",
        "code": "        self.size += 1;",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "        true",
        "code": "        true",
        "tag": "exec",
        "lineNum": 28
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 29
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 30
      }
    ],
    "rawCode": "pub struct MyCircularDeque {\n    data: Vec<i32>,\n    front: usize,\n    rear: usize,\n    size: usize,\n    capacity: usize,\n}\n\nimpl MyCircularDeque {\n    pub fn new(k: i32) -> Self {\n        let cap = k as usize;\n        MyCircularDeque {\n            data: vec![0; cap],\n            front: 0,\n            rear: 0,\n            size: 0,\n            capacity: cap,\n        }\n    }\n\n    pub fn insert_front(&mut self, value: i32) -> bool {\n        if self.size == self.capacity {\n            return false;\n        }\n        self.front = (self.front + self.capacity - 1) % self.capacity;\n        self.data[self.front] = value;\n        self.size += 1;\n        true\n    }\n}",
    "explanations": {
      "def": "Define MyCircularDeque struct and insert_front method.",
      "branch": "Guard against full capacity.",
      "return": "Return true.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "init": "Executes [init] operation in this algorithm step."
    },
    "notes": "Adding capacity prevents underflow when wrapping unsigned usize backwards."
  },
  {
    "id": "stack-using-queues",
    "code": [
      {
        "text": "use std::collections::VecDeque;",
        "code": "use std::collections::VecDeque;",
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
        "text": "pub struct MyStack {",
        "code": "pub struct MyStack {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    q: VecDeque<i32>,",
        "code": "    q: VecDeque<i32>,",
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
        "text": "impl MyStack {",
        "code": "impl MyStack {",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "    pub fn new() -> Self {",
        "code": "    pub fn new() -> Self {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "        MyStack { q: VecDeque::new() }",
        "code": "        MyStack { q: VecDeque::new() }",
        "tag": "alloc",
        "lineNum": 9
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    pub fn push(&mut self, x: i32) {",
        "code": "    pub fn push(&mut self, x: i32) {",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "        self.q.push_back(x);",
        "code": "        self.q.push_back(x);",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        for _ in 0..self.q.len() - 1 {",
        "code": "        for _ in 0..self.q.len() - 1 {",
        "tag": "def",
        "lineNum": 14
      },
      {
        "text": "            let val = self.q.pop_front().unwrap();",
        "code": "            let val = self.q.pop_front().unwrap();",
        "tag": "init",
        "lineNum": 15
      },
      {
        "text": "            self.q.push_back(val);",
        "code": "            self.q.push_back(val);",
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
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "    pub fn pop(&mut self) -> i32 {",
        "code": "    pub fn pop(&mut self) -> i32 {",
        "tag": "def",
        "lineNum": 20
      },
      {
        "text": "        self.q.pop_front().unwrap()",
        "code": "        self.q.pop_front().unwrap()",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 23
      }
    ],
    "rawCode": "use std::collections::VecDeque;\n\npub struct MyStack {\n    q: VecDeque<i32>,\n}\n\nimpl MyStack {\n    pub fn new() -> Self {\n        MyStack { q: VecDeque::new() }\n    }\n\n    pub fn push(&mut self, x: i32) {\n        self.q.push_back(x);\n        for _ in 0..self.q.len() - 1 {\n            let val = self.q.pop_front().unwrap();\n            self.q.push_back(val);\n        }\n    }\n\n    pub fn pop(&mut self) -> i32 {\n        self.q.pop_front().unwrap()\n    }\n}",
    "explanations": {
      "def": "Define MyStack using VecDeque.",
      "init": "Instantiate VecDeque::new().",
      "exec": "Executes [exec] operation in this algorithm step.",
      "alloc": "Executes [alloc] operation in this algorithm step."
    },
    "notes": "Rotating elements after insertion places the newly added element at the front of the queue."
  },
  {
    "id": "sliding-window-max",
    "code": [
      {
        "text": "use std::collections::VecDeque;",
        "code": "use std::collections::VecDeque;",
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
        "text": "pub fn max_sliding_window(nums: &[i32], k: usize) -> Vec<i32> {",
        "code": "pub fn max_sliding_window(nums: &[i32], k: usize) -> Vec<i32> {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    if nums.is_empty() || k == 0 {",
        "code": "    if nums.is_empty() || k == 0 {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "        return vec![];",
        "code": "        return vec![];",
        "tag": "return",
        "lineNum": 5
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    let mut deque: VecDeque<usize> = VecDeque::new();",
        "code": "    let mut deque: VecDeque<usize> = VecDeque::new();",
        "tag": "alloc",
        "lineNum": 7
      },
      {
        "text": "    let mut res = Vec::with_capacity(nums.len() - k + 1);",
        "code": "    let mut res = Vec::with_capacity(nums.len() - k + 1);",
        "tag": "alloc",
        "lineNum": 8
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    for (i, &num) in nums.iter().enumerate() {",
        "code": "    for (i, &num) in nums.iter().enumerate() {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "        while let Some(&front_idx) = deque.front() {",
        "code": "        while let Some(&front_idx) = deque.front() {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "            if front_idx + k <= i {",
        "code": "            if front_idx + k <= i {",
        "tag": "branch",
        "lineNum": 12
      },
      {
        "text": "                deque.pop_front();",
        "code": "                deque.pop_front();",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "            } else {",
        "code": "            } else {",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "                break;",
        "code": "                break;",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "            }",
        "code": "            }",
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
        "text": "        while let Some(&back_idx) = deque.back() {",
        "code": "        while let Some(&back_idx) = deque.back() {",
        "tag": "def",
        "lineNum": 18
      },
      {
        "text": "            if nums[back_idx] < num {",
        "code": "            if nums[back_idx] < num {",
        "tag": "branch",
        "lineNum": 19
      },
      {
        "text": "                deque.pop_back();",
        "code": "                deque.pop_back();",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "            } else {",
        "code": "            } else {",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "                break;",
        "code": "                break;",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "            }",
        "code": "            }",
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
        "text": "        deque.push_back(i);",
        "code": "        deque.push_back(i);",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "        if i >= k - 1 {",
        "code": "        if i >= k - 1 {",
        "tag": "branch",
        "lineNum": 26
      },
      {
        "text": "            res.push(nums[*deque.front().unwrap()]);",
        "code": "            res.push(nums[*deque.front().unwrap()]);",
        "tag": "mutate",
        "lineNum": 27
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 28
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 29
      },
      {
        "text": "    res",
        "code": "    res",
        "tag": "exec",
        "lineNum": 30
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 31
      }
    ],
    "rawCode": "use std::collections::VecDeque;\n\npub fn max_sliding_window(nums: &[i32], k: usize) -> Vec<i32> {\n    if nums.is_empty() || k == 0 {\n        return vec![];\n    }\n    let mut deque: VecDeque<usize> = VecDeque::new();\n    let mut res = Vec::with_capacity(nums.len() - k + 1);\n\n    for (i, &num) in nums.iter().enumerate() {\n        while let Some(&front_idx) = deque.front() {\n            if front_idx + k <= i {\n                deque.pop_front();\n            } else {\n                break;\n            }\n        }\n        while let Some(&back_idx) = deque.back() {\n            if nums[back_idx] < num {\n                deque.pop_back();\n            } else {\n                break;\n            }\n        }\n        deque.push_back(i);\n        if i >= k - 1 {\n            res.push(nums[*deque.front().unwrap()]);\n        }\n    }\n    res\n}",
    "explanations": {
      "def": "Define max_sliding_window using monotonic deque.",
      "branch": "Evict indices outside window: front_idx + k <= i.",
      "mutate": "Pop smaller elements from back and push current index.",
      "return": "Return result vector.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "alloc": "Executes [alloc] operation in this algorithm step."
    },
    "notes": "Monotonic deque guarantees each index is pushed and popped at most once, running in O(N) linear time."
  },
  {
    "id": "first-unique-char",
    "code": [
      {
        "text": "pub fn first_uniq_char(s: &str) -> i32 {",
        "code": "pub fn first_uniq_char(s: &str) -> i32 {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    let mut counts = [0i32; 26];",
        "code": "    let mut counts = [0i32; 26];",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    for b in s.bytes() {",
        "code": "    for b in s.bytes() {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "        counts[(b - b'a') as usize] += 1;",
        "code": "        counts[(b - b'a') as usize] += 1;",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    for (i, b) in s.bytes().enumerate() {",
        "code": "    for (i, b) in s.bytes().enumerate() {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "        if counts[(b - b'a') as usize] == 1 {",
        "code": "        if counts[(b - b'a') as usize] == 1 {",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "            return i as i32;",
        "code": "            return i as i32;",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "        }",
        "code": "        }",
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
        "text": "    -1",
        "code": "    -1",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 12
      }
    ],
    "rawCode": "pub fn first_uniq_char(s: &str) -> i32 {\n    let mut counts = [0i32; 26];\n    for b in s.bytes() {\n        counts[(b - b'a') as usize] += 1;\n    }\n    for (i, b) in s.bytes().enumerate() {\n        if counts[(b - b'a') as usize] == 1 {\n            return i as i32;\n        }\n    }\n    -1\n}",
    "explanations": {
      "def": "Define first_uniq_char accepting string slice &str.",
      "init": "Stack-allocate fixed array [0i32; 26].",
      "return": "Return index cast to i32 or -1.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "s.bytes() avoids UTF-8 validation overhead when processing ASCII alphanumeric strings."
  },
  {
    "id": "recent-counter",
    "code": [
      {
        "text": "use std::collections::VecDeque;",
        "code": "use std::collections::VecDeque;",
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
        "text": "pub struct RecentCounter {",
        "code": "pub struct RecentCounter {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    calls: VecDeque<i32>,",
        "code": "    calls: VecDeque<i32>,",
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
        "text": "impl RecentCounter {",
        "code": "impl RecentCounter {",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "    pub fn new() -> Self {",
        "code": "    pub fn new() -> Self {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "        RecentCounter { calls: VecDeque::new() }",
        "code": "        RecentCounter { calls: VecDeque::new() }",
        "tag": "alloc",
        "lineNum": 9
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    pub fn ping(&mut self, t: i32) -> i32 {",
        "code": "    pub fn ping(&mut self, t: i32) -> i32 {",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "        self.calls.push_back(t);",
        "code": "        self.calls.push_back(t);",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        while let Some(&front) = self.calls.front() {",
        "code": "        while let Some(&front) = self.calls.front() {",
        "tag": "def",
        "lineNum": 14
      },
      {
        "text": "            if front < t - 3000 {",
        "code": "            if front < t - 3000 {",
        "tag": "branch",
        "lineNum": 15
      },
      {
        "text": "                self.calls.pop_front();",
        "code": "                self.calls.pop_front();",
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
        "text": "        self.calls.len() as i32",
        "code": "        self.calls.len() as i32",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 23
      }
    ],
    "rawCode": "use std::collections::VecDeque;\n\npub struct RecentCounter {\n    calls: VecDeque<i32>,\n}\n\nimpl RecentCounter {\n    pub fn new() -> Self {\n        RecentCounter { calls: VecDeque::new() }\n    }\n\n    pub fn ping(&mut self, t: i32) -> i32 {\n        self.calls.push_back(t);\n        while let Some(&front) = self.calls.front() {\n            if front < t - 3000 {\n                self.calls.pop_front();\n            } else {\n                break;\n            }\n        }\n        self.calls.len() as i32\n    }\n}",
    "explanations": {
      "def": "Define RecentCounter struct with VecDeque.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "alloc": "Executes [alloc] operation in this algorithm step.",
      "branch": "Executes [branch] operation in this algorithm step."
    },
    "notes": "VecDeque provides O(1) push_back and pop_front operations to maintain the sliding time window."
  },
  {
    "id": "rotting-oranges",
    "code": [
      {
        "text": "use std::collections::VecDeque;",
        "code": "use std::collections::VecDeque;",
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
        "text": "pub fn oranges_rotting(mut grid: Vec<Vec<i32>>) -> i32 {",
        "code": "pub fn oranges_rotting(mut grid: Vec<Vec<i32>>) -> i32 {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    let rows = grid.len();",
        "code": "    let rows = grid.len();",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "    let cols = grid[0].len();",
        "code": "    let cols = grid[0].len();",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "    let mut queue = VecDeque::new();",
        "code": "    let mut queue = VecDeque::new();",
        "tag": "alloc",
        "lineNum": 6
      },
      {
        "text": "    let mut fresh = 0;",
        "code": "    let mut fresh = 0;",
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
        "text": "    for r in 0..rows {",
        "code": "    for r in 0..rows {",
        "tag": "loop",
        "lineNum": 9
      },
      {
        "text": "        for c in 0..cols {",
        "code": "        for c in 0..cols {",
        "tag": "loop",
        "lineNum": 10
      },
      {
        "text": "            if grid[r][c] == 2 {",
        "code": "            if grid[r][c] == 2 {",
        "tag": "branch",
        "lineNum": 11
      },
      {
        "text": "                queue.push_back((r, c));",
        "code": "                queue.push_back((r, c));",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "            } else if grid[r][c] == 1 {",
        "code": "            } else if grid[r][c] == 1 {",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "                fresh += 1;",
        "code": "                fresh += 1;",
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
        "text": "    if fresh == 0 { return 0; }",
        "code": "    if fresh == 0 { return 0; }",
        "tag": "branch",
        "lineNum": 18
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "    let mut minutes = 0;",
        "code": "    let mut minutes = 0;",
        "tag": "init",
        "lineNum": 20
      },
      {
        "text": "    let dirs = [(-1, 0), (1, 0), (0, -1), (0, 1)];",
        "code": "    let dirs = [(-1, 0), (1, 0), (0, -1), (0, 1)];",
        "tag": "init",
        "lineNum": 21
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "    while !queue.is_empty() && fresh > 0 {",
        "code": "    while !queue.is_empty() && fresh > 0 {",
        "tag": "def",
        "lineNum": 23
      },
      {
        "text": "        let level_size = queue.len();",
        "code": "        let level_size = queue.len();",
        "tag": "init",
        "lineNum": 24
      },
      {
        "text": "        for _ in 0..level_size {",
        "code": "        for _ in 0..level_size {",
        "tag": "loop",
        "lineNum": 25
      },
      {
        "text": "            let (r, c) = queue.pop_front().unwrap();",
        "code": "            let (r, c) = queue.pop_front().unwrap();",
        "tag": "init",
        "lineNum": 26
      },
      {
        "text": "            for (dr, dc) in dirs {",
        "code": "            for (dr, dc) in dirs {",
        "tag": "def",
        "lineNum": 27
      },
      {
        "text": "                let nr = r as i32 + dr;",
        "code": "                let nr = r as i32 + dr;",
        "tag": "init",
        "lineNum": 28
      },
      {
        "text": "                let nc = c as i32 + dc;",
        "code": "                let nc = c as i32 + dc;",
        "tag": "init",
        "lineNum": 29
      },
      {
        "text": "                if nr >= 0 && nr < rows as i32 && nc >= 0 && nc < cols as i32 {",
        "code": "                if nr >= 0 && nr < rows as i32 && nc >= 0 && nc < cols as i32 {",
        "tag": "branch",
        "lineNum": 30
      },
      {
        "text": "                    let ur = nr as usize;",
        "code": "                    let ur = nr as usize;",
        "tag": "init",
        "lineNum": 31
      },
      {
        "text": "                    let uc = nc as usize;",
        "code": "                    let uc = nc as usize;",
        "tag": "init",
        "lineNum": 32
      },
      {
        "text": "                    if grid[ur][uc] == 1 {",
        "code": "                    if grid[ur][uc] == 1 {",
        "tag": "branch",
        "lineNum": 33
      },
      {
        "text": "                        grid[ur][uc] = 2;",
        "code": "                        grid[ur][uc] = 2;",
        "tag": "exec",
        "lineNum": 34
      },
      {
        "text": "                        fresh -= 1;",
        "code": "                        fresh -= 1;",
        "tag": "exec",
        "lineNum": 35
      },
      {
        "text": "                        queue.push_back((ur, uc));",
        "code": "                        queue.push_back((ur, uc));",
        "tag": "exec",
        "lineNum": 36
      },
      {
        "text": "                    }",
        "code": "                    }",
        "tag": "exec",
        "lineNum": 37
      },
      {
        "text": "                }",
        "code": "                }",
        "tag": "exec",
        "lineNum": 38
      },
      {
        "text": "            }",
        "code": "            }",
        "tag": "exec",
        "lineNum": 39
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 40
      },
      {
        "text": "        minutes += 1;",
        "code": "        minutes += 1;",
        "tag": "exec",
        "lineNum": 41
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 42
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 43
      },
      {
        "text": "    if fresh == 0 { minutes } else { -1 }",
        "code": "    if fresh == 0 { minutes } else { -1 }",
        "tag": "branch",
        "lineNum": 44
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 45
      }
    ],
    "rawCode": "use std::collections::VecDeque;\n\npub fn oranges_rotting(mut grid: Vec<Vec<i32>>) -> i32 {\n    let rows = grid.len();\n    let cols = grid[0].len();\n    let mut queue = VecDeque::new();\n    let mut fresh = 0;\n\n    for r in 0..rows {\n        for c in 0..cols {\n            if grid[r][c] == 2 {\n                queue.push_back((r, c));\n            } else if grid[r][c] == 1 {\n                fresh += 1;\n            }\n        }\n    }\n    if fresh == 0 { return 0; }\n\n    let mut minutes = 0;\n    let dirs = [(-1, 0), (1, 0), (0, -1), (0, 1)];\n\n    while !queue.is_empty() && fresh > 0 {\n        let level_size = queue.len();\n        for _ in 0..level_size {\n            let (r, c) = queue.pop_front().unwrap();\n            for (dr, dc) in dirs {\n                let nr = r as i32 + dr;\n                let nc = c as i32 + dc;\n                if nr >= 0 && nr < rows as i32 && nc >= 0 && nc < cols as i32 {\n                    let ur = nr as usize;\n                    let uc = nc as usize;\n                    if grid[ur][uc] == 1 {\n                        grid[ur][uc] = 2;\n                        fresh -= 1;\n                        queue.push_back((ur, uc));\n                    }\n                }\n            }\n        }\n        minutes += 1;\n    }\n\n    if fresh == 0 { minutes } else { -1 }\n}",
    "explanations": {
      "def": "Define oranges_rotting implementing multi-source BFS.",
      "init": "Initialize VecDeque and count fresh oranges.",
      "loop": "Grid scan and BFS level-by-level queue traversal.",
      "branch": "Check coordinate bounds and verify orange is fresh.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "alloc": "Executes [alloc] operation in this algorithm step."
    },
    "notes": "VecDeque processes BFS queue levels with O(1) amortized queue operations."
  }
];
})(typeof window !== 'undefined' ? window : global);
