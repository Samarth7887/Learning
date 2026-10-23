/**
 * SynapseCS Language-Specific Implementation: PYTHON - Queue & Deque
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['python'] = window.DSA_LANG_CODE['python'] || {};
  window.DSA_LANG_CODE['python']['queue'] = [
  {
    "id": "queue-array-impl",
    "code": [
      {
        "text": "class ArrayQueue:",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    def __init__(self):",
        "tag": "def",
        "lineNum": 2
      },
      {
        "text": "        self.items = []",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "        self.front_idx = 0",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    def enqueue(self, val):",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "        self.items.append(val)",
        "tag": "mutate",
        "lineNum": 7
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    def dequeue(self):",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "        if self.is_empty():",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "            return None",
        "tag": "return",
        "lineNum": 11
      },
      {
        "text": "        val = self.items[self.front_idx]",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "        self.front_idx += 1",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        return val",
        "tag": "return",
        "lineNum": 14
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    def front(self):",
        "tag": "def",
        "lineNum": 16
      },
      {
        "text": "        return None if self.is_empty() else self.items[self.front_idx]",
        "tag": "return",
        "lineNum": 17
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "    def is_empty(self):",
        "tag": "def",
        "lineNum": 19
      },
      {
        "text": "        return self.front_idx >= len(self.items)",
        "tag": "return",
        "lineNum": 20
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "    def to_list(self):",
        "tag": "def",
        "lineNum": 22
      },
      {
        "text": "        return self.items[self.front_idx:]",
        "tag": "return",
        "lineNum": 23
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 25
      },
      {
        "text": "q = ArrayQueue()",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "q.enqueue(10)",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "q.enqueue(20)",
        "tag": "exec",
        "lineNum": 28
      },
      {
        "text": "q.enqueue(30)",
        "tag": "exec",
        "lineNum": 29
      },
      {
        "text": "q.dequeue()",
        "tag": "exec",
        "lineNum": 30
      },
      {
        "text": "print(q.to_list())",
        "tag": "exec",
        "lineNum": 31
      }
    ],
    "rawCode": "class ArrayQueue:\n    def __init__(self):\n        self.items = []\n        self.front_idx = 0\n\n    def enqueue(self, val):\n        self.items.append(val)\n\n    def dequeue(self):\n        if self.is_empty():\n            return None\n        val = self.items[self.front_idx]\n        self.front_idx += 1\n        return val\n\n    def front(self):\n        return None if self.is_empty() else self.items[self.front_idx]\n\n    def is_empty(self):\n        return self.front_idx >= len(self.items)\n\n    def to_list(self):\n        return self.items[self.front_idx:]\n\n# Test\nq = ArrayQueue()\nq.enqueue(10)\nq.enqueue(20)\nq.enqueue(30)\nq.dequeue()\nprint(q.to_list())",
    "explanations": {
      "step_1": "Initialize an empty list for storage and front_idx = 0 to track the head.",
      "step_2": "Enqueue simply appends to the end of the array in O(1) time.",
      "step_3": "Dequeue returns the element at front_idx and increments front_idx by 1, avoiding slow O(N) array shifts.",
      "step_4": "Front returns the current item at front_idx if the queue is not empty.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "queue-linkedlist-impl",
    "code": [
      {
        "text": "class Node:",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    def __init__(self, val):",
        "tag": "def",
        "lineNum": 2
      },
      {
        "text": "        self.val = val",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "        self.next = None",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "class LinkedQueue:",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "    def __init__(self):",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "        self.head = None",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "        self.tail = None",
        "tag": "init",
        "lineNum": 9
      },
      {
        "text": "        self.count = 0",
        "tag": "init",
        "lineNum": 10
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    def enqueue(self, val):",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "        new_node = Node(val)",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        if not self.tail:",
        "tag": "branch",
        "lineNum": 14
      },
      {
        "text": "            self.head = self.tail = new_node",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "        else:",
        "tag": "branch",
        "lineNum": 16
      },
      {
        "text": "            self.tail.next = new_node",
        "tag": "pointer",
        "lineNum": 17
      },
      {
        "text": "            self.tail = new_node",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "        self.count += 1",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "    def dequeue(self):",
        "tag": "def",
        "lineNum": 21
      },
      {
        "text": "        if not self.head:",
        "tag": "branch",
        "lineNum": 22
      },
      {
        "text": "            return None",
        "tag": "return",
        "lineNum": 23
      },
      {
        "text": "        val = self.head.val",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "        self.head = self.head.next",
        "tag": "pointer",
        "lineNum": 25
      },
      {
        "text": "        if not self.head:",
        "tag": "branch",
        "lineNum": 26
      },
      {
        "text": "            self.tail = None",
        "tag": "init",
        "lineNum": 27
      },
      {
        "text": "        self.count -= 1",
        "tag": "exec",
        "lineNum": 28
      },
      {
        "text": "        return val",
        "tag": "return",
        "lineNum": 29
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 30
      },
      {
        "text": "    def to_list(self):",
        "tag": "def",
        "lineNum": 31
      },
      {
        "text": "        res, curr = [], self.head",
        "tag": "init",
        "lineNum": 32
      },
      {
        "text": "        while curr:",
        "tag": "loop",
        "lineNum": 33
      },
      {
        "text": "            res.append(curr.val)",
        "tag": "mutate",
        "lineNum": 34
      },
      {
        "text": "            curr = curr.next",
        "tag": "pointer",
        "lineNum": 35
      },
      {
        "text": "        return res",
        "tag": "return",
        "lineNum": 36
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 37
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 38
      },
      {
        "text": "q = LinkedQueue()",
        "tag": "exec",
        "lineNum": 39
      },
      {
        "text": "q.enqueue(5)",
        "tag": "exec",
        "lineNum": 40
      },
      {
        "text": "q.enqueue(15)",
        "tag": "exec",
        "lineNum": 41
      },
      {
        "text": "q.enqueue(25)",
        "tag": "exec",
        "lineNum": 42
      },
      {
        "text": "q.dequeue()",
        "tag": "exec",
        "lineNum": 43
      },
      {
        "text": "print(q.to_list())",
        "tag": "exec",
        "lineNum": 44
      }
    ],
    "rawCode": "class Node:\n    def __init__(self, val):\n        self.val = val\n        self.next = None\n\nclass LinkedQueue:\n    def __init__(self):\n        self.head = None\n        self.tail = None\n        self.count = 0\n\n    def enqueue(self, val):\n        new_node = Node(val)\n        if not self.tail:\n            self.head = self.tail = new_node\n        else:\n            self.tail.next = new_node\n            self.tail = new_node\n        self.count += 1\n\n    def dequeue(self):\n        if not self.head:\n            return None\n        val = self.head.val\n        self.head = self.head.next\n        if not self.head:\n            self.tail = None\n        self.count -= 1\n        return val\n\n    def to_list(self):\n        res, curr = [], self.head\n        while curr:\n            res.append(curr.val)\n            curr = curr.next\n        return res\n\n# Test\nq = LinkedQueue()\nq.enqueue(5)\nq.enqueue(15)\nq.enqueue(25)\nq.dequeue()\nprint(q.to_list())",
    "explanations": {
      "step_1": "Standard Node object holding val and pointer to next node.",
      "step_2": "Initialize queue with head = None and tail = None.",
      "step_3": "Enqueue: link new node to tail.next and advance tail. If queue was empty, head and tail both become the new node.",
      "step_4": "Dequeue: advance head to head.next. If head becomes None, clear tail to prevent dangling references.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "queue-circular-array",
    "code": [
      {
        "text": "class MyCircularQueue:",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    def __init__(self, k: int):",
        "tag": "def",
        "lineNum": 2
      },
      {
        "text": "        self.k = k",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "        self.queue = [0] * k",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "        self.head = 0",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "        self.count = 0",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    def enQueue(self, value: int) -> bool:",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "        if self.isFull():",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "            return False",
        "tag": "return",
        "lineNum": 10
      },
      {
        "text": "        tail = (self.head + self.count) % self.k",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "        self.queue[tail] = value",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "        self.count += 1",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        return True",
        "tag": "return",
        "lineNum": 14
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    def deQueue(self) -> bool:",
        "tag": "def",
        "lineNum": 16
      },
      {
        "text": "        if self.isEmpty():",
        "tag": "branch",
        "lineNum": 17
      },
      {
        "text": "            return False",
        "tag": "return",
        "lineNum": 18
      },
      {
        "text": "        self.head = (self.head + 1) % self.k",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "        self.count -= 1",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "        return True",
        "tag": "return",
        "lineNum": 21
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "    def Front(self) -> int:",
        "tag": "def",
        "lineNum": 23
      },
      {
        "text": "        return -1 if self.isEmpty() else self.queue[self.head]",
        "tag": "return",
        "lineNum": 24
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "    def Rear(self) -> int:",
        "tag": "def",
        "lineNum": 26
      },
      {
        "text": "        if self.isEmpty():",
        "tag": "branch",
        "lineNum": 27
      },
      {
        "text": "            return -1",
        "tag": "return",
        "lineNum": 28
      },
      {
        "text": "        tail = (self.head + self.count - 1) % self.k",
        "tag": "exec",
        "lineNum": 29
      },
      {
        "text": "        return self.queue[tail]",
        "tag": "return",
        "lineNum": 30
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 31
      },
      {
        "text": "    def isEmpty(self) -> bool:",
        "tag": "def",
        "lineNum": 32
      },
      {
        "text": "        return self.count == 0",
        "tag": "return",
        "lineNum": 33
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 34
      },
      {
        "text": "    def isFull(self) -> bool:",
        "tag": "def",
        "lineNum": 35
      },
      {
        "text": "        return self.count == self.k",
        "tag": "return",
        "lineNum": 36
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 37
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 38
      },
      {
        "text": "cq = MyCircularQueue(3)",
        "tag": "exec",
        "lineNum": 39
      },
      {
        "text": "cq.enQueue(1)",
        "tag": "exec",
        "lineNum": 40
      },
      {
        "text": "cq.enQueue(2)",
        "tag": "exec",
        "lineNum": 41
      },
      {
        "text": "cq.enQueue(3)",
        "tag": "exec",
        "lineNum": 42
      },
      {
        "text": "cq.deQueue()",
        "tag": "exec",
        "lineNum": 43
      },
      {
        "text": "cq.enQueue(4)",
        "tag": "exec",
        "lineNum": 44
      },
      {
        "text": "print(cq.Rear())",
        "tag": "exec",
        "lineNum": 45
      }
    ],
    "rawCode": "class MyCircularQueue:\n    def __init__(self, k: int):\n        self.k = k\n        self.queue = [0] * k\n        self.head = 0\n        self.count = 0\n\n    def enQueue(self, value: int) -> bool:\n        if self.isFull():\n            return False\n        tail = (self.head + self.count) % self.k\n        self.queue[tail] = value\n        self.count += 1\n        return True\n\n    def deQueue(self) -> bool:\n        if self.isEmpty():\n            return False\n        self.head = (self.head + 1) % self.k\n        self.count -= 1\n        return True\n\n    def Front(self) -> int:\n        return -1 if self.isEmpty() else self.queue[self.head]\n\n    def Rear(self) -> int:\n        if self.isEmpty():\n            return -1\n        tail = (self.head + self.count - 1) % self.k\n        return self.queue[tail]\n\n    def isEmpty(self) -> bool:\n        return self.count == 0\n\n    def isFull(self) -> bool:\n        return self.count == self.k\n\n# Test\ncq = MyCircularQueue(3)\ncq.enQueue(1)\ncq.enQueue(2)\ncq.enQueue(3)\ncq.deQueue()\ncq.enQueue(4)\nprint(cq.Rear())",
    "explanations": {
      "step_1": "Allocate fixed buffer of size k with head = 0 and counter count = 0.",
      "step_2": "Calculate tail index as (head + count) % k to wrap back to 0 when reaching end.",
      "step_3": "Dequeue increments head circularly: (head + 1) % k.",
      "step_4": "Rear element is located at (head + count - 1) % k.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "queue-circular-deque",
    "code": [
      {
        "text": "class MyCircularDeque:",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    def __init__(self, k: int):",
        "tag": "def",
        "lineNum": 2
      },
      {
        "text": "        self.k = k",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "        self.data = [0] * k",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "        self.front = 0",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "        self.count = 0",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    def insertFront(self, value: int) -> bool:",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "        if self.isFull(): return False",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "        self.front = (self.front - 1 + self.k) % self.k",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        self.data[self.front] = value",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "        self.count += 1",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "        return True",
        "tag": "return",
        "lineNum": 13
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    def insertLast(self, value: int) -> bool:",
        "tag": "def",
        "lineNum": 15
      },
      {
        "text": "        if self.isFull(): return False",
        "tag": "branch",
        "lineNum": 16
      },
      {
        "text": "        idx = (self.front + self.count) % self.k",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "        self.data[idx] = value",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "        self.count += 1",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "        return True",
        "tag": "return",
        "lineNum": 20
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "    def deleteFront(self) -> bool:",
        "tag": "def",
        "lineNum": 22
      },
      {
        "text": "        if self.isEmpty(): return False",
        "tag": "branch",
        "lineNum": 23
      },
      {
        "text": "        self.front = (self.front + 1) % self.k",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "        self.count -= 1",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "        return True",
        "tag": "return",
        "lineNum": 26
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "    def deleteLast(self) -> bool:",
        "tag": "def",
        "lineNum": 28
      },
      {
        "text": "        if self.isEmpty(): return False",
        "tag": "branch",
        "lineNum": 29
      },
      {
        "text": "        self.count -= 1",
        "tag": "exec",
        "lineNum": 30
      },
      {
        "text": "        return True",
        "tag": "return",
        "lineNum": 31
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 32
      },
      {
        "text": "    def getFront(self) -> int:",
        "tag": "def",
        "lineNum": 33
      },
      {
        "text": "        return -1 if self.isEmpty() else self.data[self.front]",
        "tag": "return",
        "lineNum": 34
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 35
      },
      {
        "text": "    def getRear(self) -> int:",
        "tag": "def",
        "lineNum": 36
      },
      {
        "text": "        if self.isEmpty(): return -1",
        "tag": "branch",
        "lineNum": 37
      },
      {
        "text": "        return self.data[(self.front + self.count - 1) % self.k]",
        "tag": "return",
        "lineNum": 38
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 39
      },
      {
        "text": "    def isEmpty(self) -> bool: return self.count == 0",
        "tag": "def",
        "lineNum": 40
      },
      {
        "text": "    def isFull(self) -> bool: return self.count == self.k",
        "tag": "def",
        "lineNum": 41
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 42
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 43
      },
      {
        "text": "cd = MyCircularDeque(3)",
        "tag": "exec",
        "lineNum": 44
      },
      {
        "text": "cd.insertLast(1)",
        "tag": "exec",
        "lineNum": 45
      },
      {
        "text": "cd.insertLast(2)",
        "tag": "exec",
        "lineNum": 46
      },
      {
        "text": "cd.insertFront(3)",
        "tag": "exec",
        "lineNum": 47
      },
      {
        "text": "print([cd.getFront(), cd.getRear()])",
        "tag": "exec",
        "lineNum": 48
      }
    ],
    "rawCode": "class MyCircularDeque:\n    def __init__(self, k: int):\n        self.k = k\n        self.data = [0] * k\n        self.front = 0\n        self.count = 0\n\n    def insertFront(self, value: int) -> bool:\n        if self.isFull(): return False\n        self.front = (self.front - 1 + self.k) % self.k\n        self.data[self.front] = value\n        self.count += 1\n        return True\n\n    def insertLast(self, value: int) -> bool:\n        if self.isFull(): return False\n        idx = (self.front + self.count) % self.k\n        self.data[idx] = value\n        self.count += 1\n        return True\n\n    def deleteFront(self) -> bool:\n        if self.isEmpty(): return False\n        self.front = (self.front + 1) % self.k\n        self.count -= 1\n        return True\n\n    def deleteLast(self) -> bool:\n        if self.isEmpty(): return False\n        self.count -= 1\n        return True\n\n    def getFront(self) -> int:\n        return -1 if self.isEmpty() else self.data[self.front]\n\n    def getRear(self) -> int:\n        if self.isEmpty(): return -1\n        return self.data[(self.front + self.count - 1) % self.k]\n\n    def isEmpty(self) -> bool: return self.count == 0\n    def isFull(self) -> bool: return self.count == self.k\n\n# Test\ncd = MyCircularDeque(3)\ncd.insertLast(1)\ncd.insertLast(2)\ncd.insertFront(3)\nprint([cd.getFront(), cd.getRear()])",
    "explanations": {
      "step_1": "insertFront steps backwards circularly: (front - 1 + k) % k and places value at the new front.",
      "step_2": "insertLast calculates the next tail slot as (front + count) % k.",
      "step_3": "deleteFront moves front forward circularly: (front + 1) % k.",
      "step_4": "deleteLast simply decrements count without moving front.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "stack-using-queues",
    "code": [
      {
        "text": "from collections import deque",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "class MyStack:",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    def __init__(self):",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "        self.q = deque()",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    def push(self, x: int) -> None:",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "        self.q.append(x)",
        "tag": "mutate",
        "lineNum": 8
      },
      {
        "text": "        for _ in range(len(self.q) - 1):",
        "tag": "loop",
        "lineNum": 9
      },
      {
        "text": "            self.q.append(self.q.popleft())",
        "tag": "mutate",
        "lineNum": 10
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    def pop(self) -> int:",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "        return self.q.popleft()",
        "tag": "return",
        "lineNum": 13
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    def top(self) -> int:",
        "tag": "def",
        "lineNum": 15
      },
      {
        "text": "        return self.q[0]",
        "tag": "return",
        "lineNum": 16
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "    def empty(self) -> bool:",
        "tag": "def",
        "lineNum": 18
      },
      {
        "text": "        return len(self.q) == 0",
        "tag": "return",
        "lineNum": 19
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 21
      },
      {
        "text": "s = MyStack()",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "s.push(1)",
        "tag": "mutate",
        "lineNum": 23
      },
      {
        "text": "s.push(2)",
        "tag": "mutate",
        "lineNum": 24
      },
      {
        "text": "print([s.top(), s.pop(), s.empty()])",
        "tag": "mutate",
        "lineNum": 25
      }
    ],
    "rawCode": "from collections import deque\n\nclass MyStack:\n    def __init__(self):\n        self.q = deque()\n\n    def push(self, x: int) -> None:\n        self.q.append(x)\n        for _ in range(len(self.q) - 1):\n            self.q.append(self.q.popleft())\n\n    def pop(self) -> int:\n        return self.q.popleft()\n\n    def top(self) -> int:\n        return self.q[0]\n\n    def empty(self) -> bool:\n        return len(self.q) == 0\n\n# Test\ns = MyStack()\ns.push(1)\ns.push(2)\nprint([s.top(), s.pop(), s.empty()])",
    "explanations": {
      "step_1": "Push new element to queue, then rotate (size - 1) elements by popping from front and appending to rear.",
      "step_2": "Pop simply dequeues from the front of the queue in O(1) time.",
      "step_3": "Top inspects the front element.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "sliding-window-max",
    "code": [
      {
        "text": "from collections import deque",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "def maxSlidingWindow(nums, k):",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    q = deque()  # stores indices",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    res = []",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "    ",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    for i in range(len(nums)):",
        "tag": "loop",
        "lineNum": 7
      },
      {
        "text": "        # Remove elements outside current window",
        "tag": "comment",
        "lineNum": 8
      },
      {
        "text": "        if q and q[0] < i - k + 1:",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "            q.popleft()",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "            ",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "        # Maintain decreasing order: remove smaller elements from rear",
        "tag": "comment",
        "lineNum": 12
      },
      {
        "text": "        while q and nums[q[-1]] < nums[i]:",
        "tag": "loop",
        "lineNum": 13
      },
      {
        "text": "            q.pop()",
        "tag": "mutate",
        "lineNum": 14
      },
      {
        "text": "            ",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "        q.append(i)",
        "tag": "mutate",
        "lineNum": 16
      },
      {
        "text": "        ",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "        # Window has reached size k",
        "tag": "comment",
        "lineNum": 18
      },
      {
        "text": "        if i >= k - 1:",
        "tag": "branch",
        "lineNum": 19
      },
      {
        "text": "            res.append(nums[q[0]])",
        "tag": "mutate",
        "lineNum": 20
      },
      {
        "text": "            ",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "    return res",
        "tag": "return",
        "lineNum": 22
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 24
      },
      {
        "text": "print(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))",
        "tag": "exec",
        "lineNum": 25
      }
    ],
    "rawCode": "from collections import deque\n\ndef maxSlidingWindow(nums, k):\n    q = deque()  # stores indices\n    res = []\n    \n    for i in range(len(nums)):\n        # Remove elements outside current window\n        if q and q[0] < i - k + 1:\n            q.popleft()\n            \n        # Maintain decreasing order: remove smaller elements from rear\n        while q and nums[q[-1]] < nums[i]:\n            q.pop()\n            \n        q.append(i)\n        \n        # Window has reached size k\n        if i >= k - 1:\n            res.append(nums[q[0]])\n            \n    return res\n\n# Test\nprint(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))",
    "explanations": {
      "step_1": "If front index is older than i - k + 1, it has slipped out of the window; remove it.",
      "step_2": "While current number is greater than numbers at rear of deque, pop them. They can never be maximums again.",
      "step_3": "Append current index. Once window size >= k, record nums[q[0]] as window max.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "first-unique-char",
    "code": [
      {
        "text": "from collections import Counter",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "def firstUniqChar(s: str) -> int:",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    count = Counter(s)",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    for i, ch in enumerate(s):",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "        if count[ch] == 1:",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "            return i",
        "tag": "return",
        "lineNum": 7
      },
      {
        "text": "    return -1",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 10
      },
      {
        "text": "print(firstUniqChar(\"leetcode\"))",
        "tag": "exec",
        "lineNum": 11
      }
    ],
    "rawCode": "from collections import Counter\n\ndef firstUniqChar(s: str) -> int:\n    count = Counter(s)\n    for i, ch in enumerate(s):\n        if count[ch] == 1:\n            return i\n    return -1\n\n# Test\nprint(firstUniqChar(\"leetcode\"))",
    "explanations": {
      "step_1": "Build frequency hash map counting occurrences of each character.",
      "step_2": "Traverse the string from left to right; return index of first character with frequency 1.",
      "step_3": "If no unique character is found, return -1.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "recent-counter",
    "code": [
      {
        "text": "from collections import deque",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "class RecentCounter:",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    def __init__(self):",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "        self.q = deque()",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    def ping(self, t: int) -> int:",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "        self.q.append(t)",
        "tag": "mutate",
        "lineNum": 8
      },
      {
        "text": "        while self.q and self.q[0] < t - 3000:",
        "tag": "loop",
        "lineNum": 9
      },
      {
        "text": "            self.q.popleft()",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        return len(self.q)",
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
        "text": "rc = RecentCounter()",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "print([rc.ping(1), rc.ping(100), rc.ping(3001), rc.ping(3002)])",
        "tag": "exec",
        "lineNum": 15
      }
    ],
    "rawCode": "from collections import deque\n\nclass RecentCounter:\n    def __init__(self):\n        self.q = deque()\n\n    def ping(self, t: int) -> int:\n        self.q.append(t)\n        while self.q and self.q[0] < t - 3000:\n            self.q.popleft()\n        return len(self.q)\n\n# Test\nrc = RecentCounter()\nprint([rc.ping(1), rc.ping(100), rc.ping(3001), rc.ping(3002)])",
    "explanations": {
      "step_1": "Enqueue incoming request timestamp t into the queue.",
      "step_2": "Evict older calls that fall before the sliding 3000ms window (t - 3000).",
      "step_3": "Return current queue length representing active calls in the window.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "rotting-oranges",
    "code": [
      {
        "text": "from collections import deque",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "def orangesRotting(grid):",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    rows, cols = len(grid), len(grid[0])",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    q = deque()",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    fresh = 0",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "    ",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    for r in range(rows):",
        "tag": "loop",
        "lineNum": 8
      },
      {
        "text": "        for c in range(cols):",
        "tag": "loop",
        "lineNum": 9
      },
      {
        "text": "            if grid[r][c] == 2:",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "                q.append((r, c))",
        "tag": "mutate",
        "lineNum": 11
      },
      {
        "text": "            elif grid[r][c] == 1:",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "                fresh += 1",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "                ",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    if fresh == 0:",
        "tag": "branch",
        "lineNum": 15
      },
      {
        "text": "        return 0",
        "tag": "return",
        "lineNum": 16
      },
      {
        "text": "        ",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "    minutes = 0",
        "tag": "init",
        "lineNum": 18
      },
      {
        "text": "    dirs = [(0, 1), (0, -1), (1, 0), (-1, 0)]",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "    ",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "    while q and fresh > 0:",
        "tag": "loop",
        "lineNum": 21
      },
      {
        "text": "        minutes += 1",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "        for _ in range(len(q)):",
        "tag": "loop",
        "lineNum": 23
      },
      {
        "text": "            r, c = q.popleft()",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "            for dr, dc in dirs:",
        "tag": "loop",
        "lineNum": 25
      },
      {
        "text": "                nr, nc = r + dr, c + dc",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "                if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1:",
        "tag": "branch",
        "lineNum": 27
      },
      {
        "text": "                    grid[nr][nc] = 2",
        "tag": "exec",
        "lineNum": 28
      },
      {
        "text": "                    fresh -= 1",
        "tag": "exec",
        "lineNum": 29
      },
      {
        "text": "                    q.append((nr, nc))",
        "tag": "mutate",
        "lineNum": 30
      },
      {
        "text": "                    ",
        "tag": "exec",
        "lineNum": 31
      },
      {
        "text": "    return minutes if fresh == 0 else -1",
        "tag": "return",
        "lineNum": 32
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 33
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 34
      },
      {
        "text": "print(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]))",
        "tag": "exec",
        "lineNum": 35
      }
    ],
    "rawCode": "from collections import deque\n\ndef orangesRotting(grid):\n    rows, cols = len(grid), len(grid[0])\n    q = deque()\n    fresh = 0\n    \n    for r in range(rows):\n        for c in range(cols):\n            if grid[r][c] == 2:\n                q.append((r, c))\n            elif grid[r][c] == 1:\n                fresh += 1\n                \n    if fresh == 0:\n        return 0\n        \n    minutes = 0\n    dirs = [(0, 1), (0, -1), (1, 0), (-1, 0)]\n    \n    while q and fresh > 0:\n        minutes += 1\n        for _ in range(len(q)):\n            r, c = q.popleft()\n            for dr, dc in dirs:\n                nr, nc = r + dr, c + dc\n                if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1:\n                    grid[nr][nc] = 2\n                    fresh -= 1\n                    q.append((nr, nc))\n                    \n    return minutes if fresh == 0 else -1\n\n# Test\nprint(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]))",
    "explanations": {
      "step_1": "Scan grid: enqueue all rotten oranges (multi-source seeds) and count fresh ones.",
      "step_2": "Process BFS layer by layer: each while iteration corresponds to 1 minute of rotting propagation.",
      "step_3": "Infect adjacent fresh neighbors (4 directions), mark them rotten (2), decrement fresh count, and enqueue.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  }
];
})(typeof window !== 'undefined' ? window : global);
