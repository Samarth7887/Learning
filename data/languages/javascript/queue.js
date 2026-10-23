/**
 * SynapseCS Language-Specific Implementation: JAVASCRIPT - Queue & Deque
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['javascript'] = window.DSA_LANG_CODE['javascript'] || {};
  window.DSA_LANG_CODE['javascript']['queue'] = [
  {
    "id": "queue-array-impl",
    "code": [
      {
        "text": "class ArrayQueue {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  constructor() {",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    this.items = [];",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    this.frontIdx = 0;",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "  enqueue(val) { this.items.push(val); }",
        "tag": "mutate",
        "lineNum": 6
      },
      {
        "text": "  dequeue() {",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    if (this.isEmpty()) return null;",
        "tag": "branch",
        "lineNum": 8
      },
      {
        "text": "    return this.items[this.frontIdx++];",
        "tag": "return",
        "lineNum": 9
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "  front() {",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    return this.isEmpty() ? null : this.items[this.frontIdx];",
        "tag": "return",
        "lineNum": 12
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "  isEmpty() { return this.frontIdx >= this.items.length; }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "  toList() { return this.items.slice(this.frontIdx); }",
        "tag": "exec",
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
        "text": "const q = new ArrayQueue();",
        "tag": "init",
        "lineNum": 18
      },
      {
        "text": "q.enqueue(10);",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "q.enqueue(20);",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "q.enqueue(30);",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "q.dequeue();",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "console.log(JSON.stringify(q.toList()));",
        "tag": "exec",
        "lineNum": 23
      }
    ],
    "rawCode": "class ArrayQueue {\n  constructor() {\n    this.items = [];\n    this.frontIdx = 0;\n  }\n  enqueue(val) { this.items.push(val); }\n  dequeue() {\n    if (this.isEmpty()) return null;\n    return this.items[this.frontIdx++];\n  }\n  front() {\n    return this.isEmpty() ? null : this.items[this.frontIdx];\n  }\n  isEmpty() { return this.frontIdx >= this.items.length; }\n  toList() { return this.items.slice(this.frontIdx); }\n}\n\nconst q = new ArrayQueue();\nq.enqueue(10);\nq.enqueue(20);\nq.enqueue(30);\nq.dequeue();\nconsole.log(JSON.stringify(q.toList()));",
    "explanations": {
      "step_1": "Initialize an empty list for storage and front_idx = 0 to track the head.",
      "step_2": "Enqueue simply appends to the end of the array in O(1) time.",
      "step_3": "Dequeue returns the element at front_idx and increments front_idx by 1, avoiding slow O(N) array shifts.",
      "step_4": "Front returns the current item at front_idx if the queue is not empty.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "queue-linkedlist-impl",
    "code": [
      {
        "text": "class Node {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  constructor(val) { this.val = val; this.next = null; }",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "class LinkedQueue {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "  constructor() { this.head = null; this.tail = null; }",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "  enqueue(val) {",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    const node = new Node(val);",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "    if (!this.tail) this.head = this.tail = node;",
        "tag": "branch",
        "lineNum": 8
      },
      {
        "text": "    else { this.tail.next = node; this.tail = node; }",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "  dequeue() {",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    if (!this.head) return null;",
        "tag": "branch",
        "lineNum": 12
      },
      {
        "text": "    const v = this.head.val;",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    this.head = this.head.next;",
        "tag": "pointer",
        "lineNum": 14
      },
      {
        "text": "    if (!this.head) this.tail = null;",
        "tag": "branch",
        "lineNum": 15
      },
      {
        "text": "    return v;",
        "tag": "return",
        "lineNum": 16
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "  toList() {",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "    const res = [];",
        "tag": "init",
        "lineNum": 19
      },
      {
        "text": "    let curr = this.head;",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "    while (curr) { res.push(curr.val); curr = curr.next; }",
        "tag": "loop",
        "lineNum": 21
      },
      {
        "text": "    return res;",
        "tag": "return",
        "lineNum": 22
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "const q = new LinkedQueue();",
        "tag": "init",
        "lineNum": 26
      },
      {
        "text": "q.enqueue(5);",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "q.enqueue(15);",
        "tag": "exec",
        "lineNum": 28
      },
      {
        "text": "q.enqueue(25);",
        "tag": "exec",
        "lineNum": 29
      },
      {
        "text": "q.dequeue();",
        "tag": "exec",
        "lineNum": 30
      },
      {
        "text": "console.log(JSON.stringify(q.toList()));",
        "tag": "exec",
        "lineNum": 31
      }
    ],
    "rawCode": "class Node {\n  constructor(val) { this.val = val; this.next = null; }\n}\nclass LinkedQueue {\n  constructor() { this.head = null; this.tail = null; }\n  enqueue(val) {\n    const node = new Node(val);\n    if (!this.tail) this.head = this.tail = node;\n    else { this.tail.next = node; this.tail = node; }\n  }\n  dequeue() {\n    if (!this.head) return null;\n    const v = this.head.val;\n    this.head = this.head.next;\n    if (!this.head) this.tail = null;\n    return v;\n  }\n  toList() {\n    const res = [];\n    let curr = this.head;\n    while (curr) { res.push(curr.val); curr = curr.next; }\n    return res;\n  }\n}\n\nconst q = new LinkedQueue();\nq.enqueue(5);\nq.enqueue(15);\nq.enqueue(25);\nq.dequeue();\nconsole.log(JSON.stringify(q.toList()));",
    "explanations": {
      "step_1": "Standard Node object holding val and pointer to next node.",
      "step_2": "Initialize queue with head = None and tail = None.",
      "step_3": "Enqueue: link new node to tail.next and advance tail. If queue was empty, head and tail both become the new node.",
      "step_4": "Dequeue: advance head to head.next. If head becomes None, clear tail to prevent dangling references.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "queue-circular-array",
    "code": [
      {
        "text": "class MyCircularQueue {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  constructor(k) {",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    this.k = k;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    this.queue = new Array(k);",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "    this.head = 0;",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "    this.count = 0;",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "  enQueue(val) {",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    if (this.isFull()) return false;",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "    const tail = (this.head + this.count) % this.k;",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    this.queue[tail] = val;",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    this.count++;",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    return true;",
        "tag": "return",
        "lineNum": 13
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "  deQueue() {",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    if (this.isEmpty()) return false;",
        "tag": "branch",
        "lineNum": 16
      },
      {
        "text": "    this.head = (this.head + 1) % this.k;",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "    this.count--;",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "    return true;",
        "tag": "return",
        "lineNum": 19
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "  Front() { return this.isEmpty() ? -1 : this.queue[this.head]; }",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "  Rear() {",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "    if (this.isEmpty()) return -1;",
        "tag": "branch",
        "lineNum": 23
      },
      {
        "text": "    return this.queue[(this.head + this.count - 1) % this.k];",
        "tag": "return",
        "lineNum": 24
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "  isEmpty() { return this.count === 0; }",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "  isFull() { return this.count === this.k; }",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 28
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 29
      },
      {
        "text": "const cq = new MyCircularQueue(3);",
        "tag": "init",
        "lineNum": 30
      },
      {
        "text": "cq.enQueue(1);",
        "tag": "exec",
        "lineNum": 31
      },
      {
        "text": "cq.enQueue(2);",
        "tag": "exec",
        "lineNum": 32
      },
      {
        "text": "cq.enQueue(3);",
        "tag": "exec",
        "lineNum": 33
      },
      {
        "text": "cq.deQueue();",
        "tag": "exec",
        "lineNum": 34
      },
      {
        "text": "cq.enQueue(4);",
        "tag": "exec",
        "lineNum": 35
      },
      {
        "text": "console.log(cq.Rear());",
        "tag": "exec",
        "lineNum": 36
      }
    ],
    "rawCode": "class MyCircularQueue {\n  constructor(k) {\n    this.k = k;\n    this.queue = new Array(k);\n    this.head = 0;\n    this.count = 0;\n  }\n  enQueue(val) {\n    if (this.isFull()) return false;\n    const tail = (this.head + this.count) % this.k;\n    this.queue[tail] = val;\n    this.count++;\n    return true;\n  }\n  deQueue() {\n    if (this.isEmpty()) return false;\n    this.head = (this.head + 1) % this.k;\n    this.count--;\n    return true;\n  }\n  Front() { return this.isEmpty() ? -1 : this.queue[this.head]; }\n  Rear() {\n    if (this.isEmpty()) return -1;\n    return this.queue[(this.head + this.count - 1) % this.k];\n  }\n  isEmpty() { return this.count === 0; }\n  isFull() { return this.count === this.k; }\n}\n\nconst cq = new MyCircularQueue(3);\ncq.enQueue(1);\ncq.enQueue(2);\ncq.enQueue(3);\ncq.deQueue();\ncq.enQueue(4);\nconsole.log(cq.Rear());",
    "explanations": {
      "step_1": "Allocate fixed buffer of size k with head = 0 and counter count = 0.",
      "step_2": "Calculate tail index as (head + count) % k to wrap back to 0 when reaching end.",
      "step_3": "Dequeue increments head circularly: (head + 1) % k.",
      "step_4": "Rear element is located at (head + count - 1) % k.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "queue-circular-deque",
    "code": [
      {
        "text": "class MyCircularDeque {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  constructor(k) {",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    this.k = k;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    this.data = new Array(k);",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "    this.front = 0;",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "    this.count = 0;",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "  insertFront(v) {",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    if (this.isFull()) return false;",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "    this.front = (this.front - 1 + this.k) % this.k;",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    this.data[this.front] = v;",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    this.count++;",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    return true;",
        "tag": "return",
        "lineNum": 13
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "  insertLast(v) {",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    if (this.isFull()) return false;",
        "tag": "branch",
        "lineNum": 16
      },
      {
        "text": "    this.data[(this.front + this.count) % this.k] = v;",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "    this.count++;",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "    return true;",
        "tag": "return",
        "lineNum": 19
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "  deleteFront() {",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "    if (this.isEmpty()) return false;",
        "tag": "branch",
        "lineNum": 22
      },
      {
        "text": "    this.front = (this.front + 1) % this.k;",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "    this.count--;",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "    return true;",
        "tag": "return",
        "lineNum": 25
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "  deleteLast() {",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "    if (this.isEmpty()) return false;",
        "tag": "branch",
        "lineNum": 28
      },
      {
        "text": "    this.count--;",
        "tag": "exec",
        "lineNum": 29
      },
      {
        "text": "    return true;",
        "tag": "return",
        "lineNum": 30
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 31
      },
      {
        "text": "  getFront() { return this.isEmpty() ? -1 : this.data[this.front]; }",
        "tag": "exec",
        "lineNum": 32
      },
      {
        "text": "  getRear() {",
        "tag": "exec",
        "lineNum": 33
      },
      {
        "text": "    if (this.isEmpty()) return -1;",
        "tag": "branch",
        "lineNum": 34
      },
      {
        "text": "    return this.data[(this.front + this.count - 1) % this.k];",
        "tag": "return",
        "lineNum": 35
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 36
      },
      {
        "text": "  isEmpty() { return this.count === 0; }",
        "tag": "exec",
        "lineNum": 37
      },
      {
        "text": "  isFull() { return this.count === this.k; }",
        "tag": "exec",
        "lineNum": 38
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 39
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 40
      },
      {
        "text": "const cd = new MyCircularDeque(3);",
        "tag": "init",
        "lineNum": 41
      },
      {
        "text": "cd.insertLast(1);",
        "tag": "exec",
        "lineNum": 42
      },
      {
        "text": "cd.insertLast(2);",
        "tag": "exec",
        "lineNum": 43
      },
      {
        "text": "cd.insertFront(3);",
        "tag": "exec",
        "lineNum": 44
      },
      {
        "text": "console.log(JSON.stringify([cd.getFront(), cd.getRear()]));",
        "tag": "exec",
        "lineNum": 45
      }
    ],
    "rawCode": "class MyCircularDeque {\n  constructor(k) {\n    this.k = k;\n    this.data = new Array(k);\n    this.front = 0;\n    this.count = 0;\n  }\n  insertFront(v) {\n    if (this.isFull()) return false;\n    this.front = (this.front - 1 + this.k) % this.k;\n    this.data[this.front] = v;\n    this.count++;\n    return true;\n  }\n  insertLast(v) {\n    if (this.isFull()) return false;\n    this.data[(this.front + this.count) % this.k] = v;\n    this.count++;\n    return true;\n  }\n  deleteFront() {\n    if (this.isEmpty()) return false;\n    this.front = (this.front + 1) % this.k;\n    this.count--;\n    return true;\n  }\n  deleteLast() {\n    if (this.isEmpty()) return false;\n    this.count--;\n    return true;\n  }\n  getFront() { return this.isEmpty() ? -1 : this.data[this.front]; }\n  getRear() {\n    if (this.isEmpty()) return -1;\n    return this.data[(this.front + this.count - 1) % this.k];\n  }\n  isEmpty() { return this.count === 0; }\n  isFull() { return this.count === this.k; }\n}\n\nconst cd = new MyCircularDeque(3);\ncd.insertLast(1);\ncd.insertLast(2);\ncd.insertFront(3);\nconsole.log(JSON.stringify([cd.getFront(), cd.getRear()]));",
    "explanations": {
      "step_1": "insertFront steps backwards circularly: (front - 1 + k) % k and places value at the new front.",
      "step_2": "insertLast calculates the next tail slot as (front + count) % k.",
      "step_3": "deleteFront moves front forward circularly: (front + 1) % k.",
      "step_4": "deleteLast simply decrements count without moving front.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "stack-using-queues",
    "code": [
      {
        "text": "class MyStack {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  constructor() { this.q = []; }",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "  push(x) {",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    this.q.push(x);",
        "tag": "mutate",
        "lineNum": 4
      },
      {
        "text": "    for (let i = 0; i < this.q.length - 1; i++) {",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "      this.q.push(this.q.shift());",
        "tag": "mutate",
        "lineNum": 6
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "  pop() { return this.q.shift(); }",
        "tag": "mutate",
        "lineNum": 9
      },
      {
        "text": "  top() { return this.q[0]; }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "  empty() { return this.q.length === 0; }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "const s = new MyStack();",
        "tag": "init",
        "lineNum": 14
      },
      {
        "text": "s.push(1);",
        "tag": "mutate",
        "lineNum": 15
      },
      {
        "text": "s.push(2);",
        "tag": "mutate",
        "lineNum": 16
      },
      {
        "text": "console.log(JSON.stringify([s.top(), s.pop(), s.empty()]));",
        "tag": "mutate",
        "lineNum": 17
      }
    ],
    "rawCode": "class MyStack {\n  constructor() { this.q = []; }\n  push(x) {\n    this.q.push(x);\n    for (let i = 0; i < this.q.length - 1; i++) {\n      this.q.push(this.q.shift());\n    }\n  }\n  pop() { return this.q.shift(); }\n  top() { return this.q[0]; }\n  empty() { return this.q.length === 0; }\n}\n\nconst s = new MyStack();\ns.push(1);\ns.push(2);\nconsole.log(JSON.stringify([s.top(), s.pop(), s.empty()]));",
    "explanations": {
      "step_1": "Push new element to queue, then rotate (size - 1) elements by popping from front and appending to rear.",
      "step_2": "Pop simply dequeues from the front of the queue in O(1) time.",
      "step_3": "Top inspects the front element.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "sliding-window-max",
    "code": [
      {
        "text": "function maxSlidingWindow(nums, k) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  const q = []; // deque of indices",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "  const res = [];",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "  for (let i = 0; i < nums.length; i++) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "    if (q.length && q[0] < i - k + 1) q.shift();",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "    while (q.length && nums[q[q.length - 1]] < nums[i]) q.pop();",
        "tag": "loop",
        "lineNum": 6
      },
      {
        "text": "    q.push(i);",
        "tag": "mutate",
        "lineNum": 7
      },
      {
        "text": "    if (i >= k - 1) res.push(nums[q[0]]);",
        "tag": "branch",
        "lineNum": 8
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "  return res;",
        "tag": "return",
        "lineNum": 10
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "console.log(JSON.stringify(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)));",
        "tag": "exec",
        "lineNum": 13
      }
    ],
    "rawCode": "function maxSlidingWindow(nums, k) {\n  const q = []; // deque of indices\n  const res = [];\n  for (let i = 0; i < nums.length; i++) {\n    if (q.length && q[0] < i - k + 1) q.shift();\n    while (q.length && nums[q[q.length - 1]] < nums[i]) q.pop();\n    q.push(i);\n    if (i >= k - 1) res.push(nums[q[0]]);\n  }\n  return res;\n}\n\nconsole.log(JSON.stringify(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)));",
    "explanations": {
      "step_1": "If front index is older than i - k + 1, it has slipped out of the window; remove it.",
      "step_2": "While current number is greater than numbers at rear of deque, pop them. They can never be maximums again.",
      "step_3": "Append current index. Once window size >= k, record nums[q[0]] as window max.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "first-unique-char",
    "code": [
      {
        "text": "function firstUniqChar(s) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  const counts = {};",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "  for (const ch of s) counts[ch] = (counts[ch] || 0) + 1;",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "  for (let i = 0; i < s.length; i++) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "    if (counts[s[i]] === 1) return i;",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "  return -1;",
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
        "text": "console.log(firstUniqChar(\"leetcode\"));",
        "tag": "exec",
        "lineNum": 10
      }
    ],
    "rawCode": "function firstUniqChar(s) {\n  const counts = {};\n  for (const ch of s) counts[ch] = (counts[ch] || 0) + 1;\n  for (let i = 0; i < s.length; i++) {\n    if (counts[s[i]] === 1) return i;\n  }\n  return -1;\n}\n\nconsole.log(firstUniqChar(\"leetcode\"));",
    "explanations": {
      "step_1": "Build frequency hash map counting occurrences of each character.",
      "step_2": "Traverse the string from left to right; return index of first character with frequency 1.",
      "step_3": "If no unique character is found, return -1.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "recent-counter",
    "code": [
      {
        "text": "class RecentCounter {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  constructor() { this.q = []; }",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "  ping(t) {",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    this.q.push(t);",
        "tag": "mutate",
        "lineNum": 4
      },
      {
        "text": "    while (this.q[0] < t - 3000) this.q.shift();",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "    return this.q.length;",
        "tag": "return",
        "lineNum": 6
      },
      {
        "text": "  }",
        "tag": "exec",
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
        "text": "const rc = new RecentCounter();",
        "tag": "init",
        "lineNum": 10
      },
      {
        "text": "console.log(JSON.stringify([rc.ping(1), rc.ping(100), rc.ping(3001), rc.ping(3002)]));",
        "tag": "exec",
        "lineNum": 11
      }
    ],
    "rawCode": "class RecentCounter {\n  constructor() { this.q = []; }\n  ping(t) {\n    this.q.push(t);\n    while (this.q[0] < t - 3000) this.q.shift();\n    return this.q.length;\n  }\n}\n\nconst rc = new RecentCounter();\nconsole.log(JSON.stringify([rc.ping(1), rc.ping(100), rc.ping(3001), rc.ping(3002)]));",
    "explanations": {
      "step_1": "Enqueue incoming request timestamp t into the queue.",
      "step_2": "Evict older calls that fall before the sliding 3000ms window (t - 3000).",
      "step_3": "Return current queue length representing active calls in the window.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "rotting-oranges",
    "code": [
      {
        "text": "function orangesRotting(grid) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  const rows = grid.length, cols = grid[0].length;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "  const q = [];",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "  let fresh = 0;",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "  for (let r = 0; r < rows; r++) {",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "    for (let c = 0; c < cols; c++) {",
        "tag": "loop",
        "lineNum": 6
      },
      {
        "text": "      if (grid[r][c] === 2) q.push([r, c]);",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "      else if (grid[r][c] === 1) fresh++;",
        "tag": "branch",
        "lineNum": 8
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "  if (fresh === 0) return 0;",
        "tag": "branch",
        "lineNum": 11
      },
      {
        "text": "  let minutes = 0;",
        "tag": "init",
        "lineNum": 12
      },
      {
        "text": "  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "  while (q.length && fresh > 0) {",
        "tag": "loop",
        "lineNum": 14
      },
      {
        "text": "    minutes++;",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    const sz = q.length;",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "    for (let i = 0; i < sz; i++) {",
        "tag": "loop",
        "lineNum": 17
      },
      {
        "text": "      const [r, c] = q.shift();",
        "tag": "mutate",
        "lineNum": 18
      },
      {
        "text": "      for (const [dr, dc] of dirs) {",
        "tag": "loop",
        "lineNum": 19
      },
      {
        "text": "        const nr = r + dr, nc = c + dc;",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {",
        "tag": "branch",
        "lineNum": 21
      },
      {
        "text": "          grid[nr][nc] = 2;",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "          fresh--;",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "          q.push([nr, nc]);",
        "tag": "mutate",
        "lineNum": 24
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "      }",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 28
      },
      {
        "text": "  return fresh === 0 ? minutes : -1;",
        "tag": "return",
        "lineNum": 29
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 30
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 31
      },
      {
        "text": "console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]));",
        "tag": "exec",
        "lineNum": 32
      }
    ],
    "rawCode": "function orangesRotting(grid) {\n  const rows = grid.length, cols = grid[0].length;\n  const q = [];\n  let fresh = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (grid[r][c] === 2) q.push([r, c]);\n      else if (grid[r][c] === 1) fresh++;\n    }\n  }\n  if (fresh === 0) return 0;\n  let minutes = 0;\n  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];\n  while (q.length && fresh > 0) {\n    minutes++;\n    const sz = q.length;\n    for (let i = 0; i < sz; i++) {\n      const [r, c] = q.shift();\n      for (const [dr, dc] of dirs) {\n        const nr = r + dr, nc = c + dc;\n        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {\n          grid[nr][nc] = 2;\n          fresh--;\n          q.push([nr, nc]);\n        }\n      }\n    }\n  }\n  return fresh === 0 ? minutes : -1;\n}\n\nconsole.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]));",
    "explanations": {
      "step_1": "Scan grid: enqueue all rotten oranges (multi-source seeds) and count fresh ones.",
      "step_2": "Process BFS layer by layer: each while iteration corresponds to 1 minute of rotting propagation.",
      "step_3": "Infect adjacent fresh neighbors (4 directions), mark them rotten (2), decrement fresh count, and enqueue.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  }
];
})(typeof window !== 'undefined' ? window : global);
