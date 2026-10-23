// Queue & Deque Topic Definition
window.DSA_TOPICS = window.DSA_TOPICS || {};
window.DSA_TOPICS['queue'] = {
  "id": "queue",
  "title": "Queue & Deque",
  "badge": "10 Problems",
  "description": "First-In, First-Out (FIFO) and Double-Ended Queue (Deque) structures with circular buffers and monotonic deque optimizations.",
  "subtopics": [
    {
      "id": "queue-basics",
      "title": "Basics & Implementations",
      "questions": [
        {
          "id": "queue-array-impl",
          "title": "Implement Queue using Dynamic Array",
          "difficulty": "Basic",
          "leetcode": null,
          "description": "Construct a First-In First-Out (FIFO) Queue using a dynamic array or list. Implement enqueue (add to rear), dequeue (remove from front), front (peek first element), size, and isEmpty.",
          "constraints": "O(1) amortized enqueue; array-based front shifts take O(N) or O(1) with pointer tracking.",
          "examples": [
            {
              "input": "enqueue(10), enqueue(20), enqueue(30), dequeue(), front()",
              "output": "[20, 30]",
              "why": "10 was enqueued first and dequeued first. 20 is now at the front."
            }
          ],
          "approaches": [
            {
              "name": "Pointer Offset Queue",
              "idea": "Keep an internal array and a frontIndex pointer. Enqueue appends to the end in O(1). Dequeue increments frontIndex in O(1) without shifting remaining elements.",
              "timeComplexity": "O(1)",
              "spaceComplexity": "O(N)",
              "code": {
                "python": "class ArrayQueue:\n    def __init__(self):\n        self.items = []\n        self.front_idx = 0\n\n    def enqueue(self, val):\n        self.items.append(val)\n\n    def dequeue(self):\n        if self.is_empty():\n            return None\n        val = self.items[self.front_idx]\n        self.front_idx += 1\n        return val\n\n    def front(self):\n        return None if self.is_empty() else self.items[self.front_idx]\n\n    def is_empty(self):\n        return self.front_idx >= len(self.items)\n\n    def to_list(self):\n        return self.items[self.front_idx:]\n\n# Test\nq = ArrayQueue()\nq.enqueue(10)\nq.enqueue(20)\nq.enqueue(30)\nq.dequeue()\nprint(q.to_list())",
                "java": "import java.util.*;\n\npublic class ArrayQueue {\n    private List<Integer> items = new ArrayList<>();\n    private int frontIdx = 0;\n\n    public void enqueue(int val) { items.add(val); }\n    public Integer dequeue() {\n        if (isEmpty()) return null;\n        return items.get(frontIdx++);\n    }\n    public Integer front() {\n        if (isEmpty()) return null;\n        return items.get(frontIdx);\n    }\n    public boolean isEmpty() { return frontIdx >= items.size(); }\n    public List<Integer> toList() {\n        return items.subList(frontIdx, items.size());\n    }\n}",
                "cpp": "#include <vector>\nusing namespace std;\n\nclass ArrayQueue {\n    vector<int> items;\n    int frontIdx = 0;\npublic:\n    void enqueue(int val) { items.push_back(val); }\n    int dequeue() {\n        if (isEmpty()) return -1;\n        return items[frontIdx++];\n    }\n    int front() {\n        if (isEmpty()) return -1;\n        return items[frontIdx];\n    }\n    bool isEmpty() { return frontIdx >= (int)items.size(); }\n};",
                "javascript": "class ArrayQueue {\n  constructor() {\n    this.items = [];\n    this.frontIdx = 0;\n  }\n  enqueue(val) { this.items.push(val); }\n  dequeue() {\n    if (this.isEmpty()) return null;\n    return this.items[this.frontIdx++];\n  }\n  front() {\n    return this.isEmpty() ? null : this.items[this.frontIdx];\n  }\n  isEmpty() { return this.frontIdx >= this.items.length; }\n  toList() { return this.items.slice(this.frontIdx); }\n}\n\nconst q = new ArrayQueue();\nq.enqueue(10);\nq.enqueue(20);\nq.enqueue(30);\nq.dequeue();\nconsole.log(JSON.stringify(q.toList()));"
              },
              "lineExplanations": [
                {
                  "lines": [
                    1,
                    4
                  ],
                  "text": "Initialize an empty list for storage and front_idx = 0 to track the head."
                },
                {
                  "lines": [
                    6,
                    7
                  ],
                  "text": "Enqueue simply appends to the end of the array in O(1) time."
                },
                {
                  "lines": [
                    9,
                    14
                  ],
                  "text": "Dequeue returns the element at front_idx and increments front_idx by 1, avoiding slow O(N) array shifts."
                },
                {
                  "lines": [
                    16,
                    17
                  ],
                  "text": "Front returns the current item at front_idx if the queue is not empty."
                }
              ],
              "animationSteps": [
                {
                  "codeLine": 1,
                  "description": "Initialize empty queue.",
                  "state": {
                    "type": "queue",
                    "queue": []
                  },
                  "highlights": [],
                  "pointers": {}
                },
                {
                  "codeLine": 6,
                  "description": "enqueue(10): Add 10 to rear.",
                  "state": {
                    "type": "queue",
                    "queue": [
                      10
                    ]
                  },
                  "highlights": [
                    0
                  ],
                  "pointers": {
                    "REAR": 0,
                    "FRONT": 0
                  }
                },
                {
                  "codeLine": 6,
                  "description": "enqueue(20): Add 20 to rear.",
                  "state": {
                    "type": "queue",
                    "queue": [
                      10,
                      20
                    ]
                  },
                  "highlights": [
                    1
                  ],
                  "pointers": {
                    "FRONT": 0,
                    "REAR": 1
                  }
                },
                {
                  "codeLine": 6,
                  "description": "enqueue(30): Add 30 to rear.",
                  "state": {
                    "type": "queue",
                    "queue": [
                      10,
                      20,
                      30
                    ]
                  },
                  "highlights": [
                    2
                  ],
                  "pointers": {
                    "FRONT": 0,
                    "REAR": 2
                  }
                },
                {
                  "codeLine": 9,
                  "description": "dequeue(): 10 exits from FRONT. 20 is now FRONT.",
                  "state": {
                    "type": "queue",
                    "queue": [
                      20,
                      30
                    ]
                  },
                  "highlights": [
                    0
                  ],
                  "pointers": {
                    "FRONT": 0,
                    "REAR": 1
                  }
                }
              ]
            }
          ],
          "commonMistakes": "Using array.shift() in JavaScript or list.pop(0) in Python, which takes O(N) time because every subsequent element has to be shifted in memory.",
          "relatedQuestionIds": [
            "queue-linkedlist-impl",
            "queue-circular-array"
          ]
        },
        {
          "id": "queue-linkedlist-impl",
          "title": "Implement Queue using Singly Linked List",
          "difficulty": "Easy",
          "leetcode": null,
          "description": "Construct a FIFO Queue using a singly linked list with both head (front) and tail (rear) pointer references for true O(1) enqueue and dequeue with zero memory waste.",
          "constraints": "O(1) time for enqueue and dequeue; O(1) auxiliary space per operation.",
          "examples": [
            {
              "input": "enqueue(5), enqueue(15), enqueue(25), dequeue()",
              "output": "[15, 25]",
              "why": "Node 5 was removed from head. Head is now 15 and tail is 25."
            }
          ],
          "approaches": [
            {
              "name": "Head-Tail Linked List",
              "idea": "Head points to the first node (dequeue exit). Tail points to the last node (enqueue entry). Both operations update pointers in guaranteed O(1) time.",
              "timeComplexity": "O(1)",
              "spaceComplexity": "O(N)",
              "code": {
                "python": "class Node:\n    def __init__(self, val):\n        self.val = val\n        self.next = None\n\nclass LinkedQueue:\n    def __init__(self):\n        self.head = None\n        self.tail = None\n        self.count = 0\n\n    def enqueue(self, val):\n        new_node = Node(val)\n        if not self.tail:\n            self.head = self.tail = new_node\n        else:\n            self.tail.next = new_node\n            self.tail = new_node\n        self.count += 1\n\n    def dequeue(self):\n        if not self.head:\n            return None\n        val = self.head.val\n        self.head = self.head.next\n        if not self.head:\n            self.tail = None\n        self.count -= 1\n        return val\n\n    def to_list(self):\n        res, curr = [], self.head\n        while curr:\n            res.append(curr.val)\n            curr = curr.next\n        return res\n\n# Test\nq = LinkedQueue()\nq.enqueue(5)\nq.enqueue(15)\nq.enqueue(25)\nq.dequeue()\nprint(q.to_list())",
                "java": "public class LinkedQueue {\n    static class Node {\n        int val; Node next;\n        Node(int v) { val = v; }\n    }\n    private Node head = null, tail = null;\n\n    public void enqueue(int v) {\n        Node n = new Node(v);\n        if (tail == null) head = tail = n;\n        else { tail.next = n; tail = n; }\n    }\n    public Integer dequeue() {\n        if (head == null) return null;\n        int v = head.val;\n        head = head.next;\n        if (head == null) tail = null;\n        return v;\n    }\n}",
                "cpp": "class LinkedQueue {\n    struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };\n    Node* head = nullptr;\n    Node* tail = nullptr;\npublic:\n    void enqueue(int val) {\n        Node* n = new Node(val);\n        if (!tail) head = tail = n;\n        else { tail->next = n; tail = n; }\n    }\n    int dequeue() {\n        if (!head) return -1;\n        int val = head->val;\n        Node* tmp = head;\n        head = head->next;\n        if (!head) tail = nullptr;\n        delete tmp;\n        return val;\n    }\n};",
                "javascript": "class Node {\n  constructor(val) { this.val = val; this.next = null; }\n}\nclass LinkedQueue {\n  constructor() { this.head = null; this.tail = null; }\n  enqueue(val) {\n    const node = new Node(val);\n    if (!this.tail) this.head = this.tail = node;\n    else { this.tail.next = node; this.tail = node; }\n  }\n  dequeue() {\n    if (!this.head) return null;\n    const v = this.head.val;\n    this.head = this.head.next;\n    if (!this.head) this.tail = null;\n    return v;\n  }\n  toList() {\n    const res = [];\n    let curr = this.head;\n    while (curr) { res.push(curr.val); curr = curr.next; }\n    return res;\n  }\n}\n\nconst q = new LinkedQueue();\nq.enqueue(5);\nq.enqueue(15);\nq.enqueue(25);\nq.dequeue();\nconsole.log(JSON.stringify(q.toList()));"
              },
              "lineExplanations": [
                {
                  "lines": [
                    1,
                    4
                  ],
                  "text": "Standard Node object holding val and pointer to next node."
                },
                {
                  "lines": [
                    6,
                    10
                  ],
                  "text": "Initialize queue with head = None and tail = None."
                },
                {
                  "lines": [
                    12,
                    19
                  ],
                  "text": "Enqueue: link new node to tail.next and advance tail. If queue was empty, head and tail both become the new node."
                },
                {
                  "lines": [
                    21,
                    29
                  ],
                  "text": "Dequeue: advance head to head.next. If head becomes None, clear tail to prevent dangling references."
                }
              ],
              "animationSteps": [
                {
                  "codeLine": 12,
                  "description": "enqueue(5): Allocate node 5. Head and tail point to 5.",
                  "state": {
                    "type": "linked-list",
                    "nodes": [
                      {
                        "val": 5,
                        "addr": "0x1000"
                      }
                    ]
                  },
                  "highlights": [
                    0
                  ],
                  "pointers": {
                    "HEAD": 0,
                    "TAIL": 0
                  }
                },
                {
                  "codeLine": 12,
                  "description": "enqueue(15): Append node 15 at tail. TAIL moves to 0x1020.",
                  "state": {
                    "type": "linked-list",
                    "nodes": [
                      {
                        "val": 5,
                        "addr": "0x1000"
                      },
                      {
                        "val": 15,
                        "addr": "0x1020"
                      }
                    ]
                  },
                  "highlights": [
                    1
                  ],
                  "pointers": {
                    "HEAD": 0,
                    "TAIL": 1
                  }
                },
                {
                  "codeLine": 12,
                  "description": "enqueue(25): Append node 25 at tail. TAIL moves to 0x1040.",
                  "state": {
                    "type": "linked-list",
                    "nodes": [
                      {
                        "val": 5,
                        "addr": "0x1000"
                      },
                      {
                        "val": 15,
                        "addr": "0x1020"
                      },
                      {
                        "val": 25,
                        "addr": "0x1040"
                      }
                    ]
                  },
                  "highlights": [
                    2
                  ],
                  "pointers": {
                    "HEAD": 0,
                    "TAIL": 2
                  }
                },
                {
                  "codeLine": 21,
                  "description": "dequeue(): Remove head node 5. HEAD moves to 0x1020.",
                  "state": {
                    "type": "linked-list",
                    "nodes": [
                      {
                        "val": 15,
                        "addr": "0x1020"
                      },
                      {
                        "val": 25,
                        "addr": "0x1040"
                      }
                    ]
                  },
                  "highlights": [
                    0
                  ],
                  "pointers": {
                    "HEAD": 0,
                    "TAIL": 1
                  }
                }
              ]
            }
          ],
          "commonMistakes": "Forgetting to set tail = None when the last remaining node is dequeued, leaving a dangling tail reference.",
          "relatedQuestionIds": [
            "queue-array-impl",
            "queue-circular-array"
          ]
        },
        {
          "id": "queue-circular-array",
          "title": "Design Circular Queue",
          "difficulty": "Medium",
          "leetcode": {
            "number": 622,
            "url": "https://leetcode.com/problems/design-circular-queue/"
          },
          "description": "Design a circular queue of fixed capacity k where the last position connects back to the first position using modulo arithmetic, reusing deallocated slot memory.",
          "constraints": "k <= 1000; all values between 0 and 1000.",
          "examples": [
            {
              "input": "CircularQueue(3): enq(1), enq(2), enq(3), deq(), enq(4), Rear()",
              "output": "4",
              "why": "1 was dequeued at index 0, so 4 wrapped around to fill index 0. Rear is 4."
            }
          ],
          "approaches": [
            {
              "name": "Modulo Buffer",
              "idea": "Use fixed-size array of size k. Maintain front pointer and current count. Rear is (front + count - 1) % k. Enqueue inserts at (front + count) % k.",
              "timeComplexity": "O(1)",
              "spaceComplexity": "O(k)",
              "code": {
                "python": "class MyCircularQueue:\n    def __init__(self, k: int):\n        self.k = k\n        self.queue = [0] * k\n        self.head = 0\n        self.count = 0\n\n    def enQueue(self, value: int) -> bool:\n        if self.isFull():\n            return False\n        tail = (self.head + self.count) % self.k\n        self.queue[tail] = value\n        self.count += 1\n        return True\n\n    def deQueue(self) -> bool:\n        if self.isEmpty():\n            return False\n        self.head = (self.head + 1) % self.k\n        self.count -= 1\n        return True\n\n    def Front(self) -> int:\n        return -1 if self.isEmpty() else self.queue[self.head]\n\n    def Rear(self) -> int:\n        if self.isEmpty():\n            return -1\n        tail = (self.head + self.count - 1) % self.k\n        return self.queue[tail]\n\n    def isEmpty(self) -> bool:\n        return self.count == 0\n\n    def isFull(self) -> bool:\n        return self.count == self.k\n\n# Test\ncq = MyCircularQueue(3)\ncq.enQueue(1)\ncq.enQueue(2)\ncq.enQueue(3)\ncq.deQueue()\ncq.enQueue(4)\nprint(cq.Rear())",
                "java": "class MyCircularQueue {\n    private int[] data;\n    private int head = 0, count = 0, capacity;\n\n    public MyCircularQueue(int k) {\n        data = new int[k];\n        capacity = k;\n    }\n    public boolean enQueue(int value) {\n        if (isFull()) return false;\n        data[(head + count) % capacity] = value;\n        count++;\n        return true;\n    }\n    public boolean deQueue() {\n        if (isEmpty()) return false;\n        head = (head + 1) % capacity;\n        count--;\n        return true;\n    }\n    public int Front() { return isEmpty() ? -1 : data[head]; }\n    public int Rear() { return isEmpty() ? -1 : data[(head + count - 1) % capacity]; }\n    public boolean isEmpty() { return count == 0; }\n    public boolean isFull() { return count == capacity; }\n}",
                "cpp": "#include <vector>\nusing namespace std;\n\nclass MyCircularQueue {\n    vector<int> data;\n    int head = 0, count = 0, cap;\npublic:\n    MyCircularQueue(int k) : data(k), cap(k) {}\n    bool enQueue(int value) {\n        if (isFull()) return false;\n        data[(head + count) % cap] = value;\n        count++;\n        return true;\n    }\n    bool deQueue() {\n        if (isEmpty()) return false;\n        head = (head + 1) % cap;\n        count--;\n        return true;\n    }\n    int Front() { return isEmpty() ? -1 : data[head]; }\n    int Rear() { return isEmpty() ? -1 : data[(head + count - 1) % cap]; }\n    bool isEmpty() { return count == 0; }\n    bool isFull() { return count == cap; }\n};",
                "javascript": "class MyCircularQueue {\n  constructor(k) {\n    this.k = k;\n    this.queue = new Array(k);\n    this.head = 0;\n    this.count = 0;\n  }\n  enQueue(val) {\n    if (this.isFull()) return false;\n    const tail = (this.head + this.count) % this.k;\n    this.queue[tail] = val;\n    this.count++;\n    return true;\n  }\n  deQueue() {\n    if (this.isEmpty()) return false;\n    this.head = (this.head + 1) % this.k;\n    this.count--;\n    return true;\n  }\n  Front() { return this.isEmpty() ? -1 : this.queue[this.head]; }\n  Rear() {\n    if (this.isEmpty()) return -1;\n    return this.queue[(this.head + this.count - 1) % this.k];\n  }\n  isEmpty() { return this.count === 0; }\n  isFull() { return this.count === this.k; }\n}\n\nconst cq = new MyCircularQueue(3);\ncq.enQueue(1);\ncq.enQueue(2);\ncq.enQueue(3);\ncq.deQueue();\ncq.enQueue(4);\nconsole.log(cq.Rear());"
              },
              "lineExplanations": [
                {
                  "lines": [
                    2,
                    6
                  ],
                  "text": "Allocate fixed buffer of size k with head = 0 and counter count = 0."
                },
                {
                  "lines": [
                    8,
                    14
                  ],
                  "text": "Calculate tail index as (head + count) % k to wrap back to 0 when reaching end."
                },
                {
                  "lines": [
                    16,
                    21
                  ],
                  "text": "Dequeue increments head circularly: (head + 1) % k."
                },
                {
                  "lines": [
                    23,
                    30
                  ],
                  "text": "Rear element is located at (head + count - 1) % k."
                }
              ],
              "animationSteps": [
                {
                  "codeLine": 8,
                  "description": "enQueue(1): Insert 1 at index 0.",
                  "state": {
                    "type": "array",
                    "array": [
                      1,
                      0,
                      0
                    ]
                  },
                  "highlights": [
                    0
                  ],
                  "pointers": {
                    "HEAD": 0
                  }
                },
                {
                  "codeLine": 8,
                  "description": "enQueue(2): Insert 2 at index 1.",
                  "state": {
                    "type": "array",
                    "array": [
                      1,
                      2,
                      0
                    ]
                  },
                  "highlights": [
                    1
                  ],
                  "pointers": {
                    "HEAD": 0
                  }
                },
                {
                  "codeLine": 8,
                  "description": "enQueue(3): Insert 3 at index 2. Queue is full.",
                  "state": {
                    "type": "array",
                    "array": [
                      1,
                      2,
                      3
                    ]
                  },
                  "highlights": [
                    2
                  ],
                  "pointers": {
                    "HEAD": 0
                  }
                },
                {
                  "codeLine": 16,
                  "description": "deQueue(): Head advances to index 1. Slot 0 is now reusable.",
                  "state": {
                    "type": "array",
                    "array": [
                      0,
                      2,
                      3
                    ]
                  },
                  "highlights": [
                    1
                  ],
                  "pointers": {
                    "HEAD": 1
                  }
                },
                {
                  "codeLine": 8,
                  "description": "enQueue(4): Circular wrap-around! (1 + 2) % 3 = 0. Insert 4 at index 0.",
                  "state": {
                    "type": "array",
                    "array": [
                      4,
                      2,
                      3
                    ]
                  },
                  "highlights": [
                    0
                  ],
                  "pointers": {
                    "REAR": 0,
                    "HEAD": 1
                  }
                }
              ]
            }
          ],
          "commonMistakes": "Calculating rear as (head + count) % k instead of (head + count - 1) % k.",
          "relatedQuestionIds": [
            "queue-circular-deque",
            "queue-array-impl"
          ]
        },
        {
          "id": "queue-circular-deque",
          "title": "Design Circular Deque",
          "difficulty": "Medium",
          "leetcode": {
            "number": 641,
            "url": "https://leetcode.com/problems/design-circular-deque/"
          },
          "description": "Design a double-ended queue (deque) supporting insertFront, insertLast, deleteFront, deleteLast, getFront, getRear in O(1) time.",
          "constraints": "k <= 1000; values between 0 and 1000.",
          "examples": [
            {
              "input": "CircularDeque(3): insertLast(1), insertLast(2), insertFront(3), getFront(), getRear()",
              "output": "[3, 2]",
              "why": "3 was inserted at front, so front is 3 and rear is 2."
            }
          ],
          "approaches": [
            {
              "name": "Two-Pointer Circular Array",
              "idea": "Maintain front index. insertFront moves front backwards: (front - 1 + k) % k. insertLast inserts at (front + count) % k.",
              "timeComplexity": "O(1)",
              "spaceComplexity": "O(k)",
              "code": {
                "python": "class MyCircularDeque:\n    def __init__(self, k: int):\n        self.k = k\n        self.data = [0] * k\n        self.front = 0\n        self.count = 0\n\n    def insertFront(self, value: int) -> bool:\n        if self.isFull(): return False\n        self.front = (self.front - 1 + self.k) % self.k\n        self.data[self.front] = value\n        self.count += 1\n        return True\n\n    def insertLast(self, value: int) -> bool:\n        if self.isFull(): return False\n        idx = (self.front + self.count) % self.k\n        self.data[idx] = value\n        self.count += 1\n        return True\n\n    def deleteFront(self) -> bool:\n        if self.isEmpty(): return False\n        self.front = (self.front + 1) % self.k\n        self.count -= 1\n        return True\n\n    def deleteLast(self) -> bool:\n        if self.isEmpty(): return False\n        self.count -= 1\n        return True\n\n    def getFront(self) -> int:\n        return -1 if self.isEmpty() else self.data[self.front]\n\n    def getRear(self) -> int:\n        if self.isEmpty(): return -1\n        return self.data[(self.front + self.count - 1) % self.k]\n\n    def isEmpty(self) -> bool: return self.count == 0\n    def isFull(self) -> bool: return self.count == self.k\n\n# Test\ncd = MyCircularDeque(3)\ncd.insertLast(1)\ncd.insertLast(2)\ncd.insertFront(3)\nprint([cd.getFront(), cd.getRear()])",
                "java": "class MyCircularDeque {\n    private int[] data;\n    private int front = 0, count = 0, k;\n    public MyCircularDeque(int k) { this.k = k; data = new int[k]; }\n    public boolean insertFront(int v) {\n        if (isFull()) return false;\n        front = (front - 1 + k) % k;\n        data[front] = v;\n        count++;\n        return true;\n    }\n    public boolean insertLast(int v) {\n        if (isFull()) return false;\n        data[(front + count) % k] = v;\n        count++;\n        return true;\n    }\n    public boolean deleteFront() {\n        if (isEmpty()) return false;\n        front = (front + 1) % k;\n        count--;\n        return true;\n    }\n    public boolean deleteLast() {\n        if (isEmpty()) return false;\n        count--;\n        return true;\n    }\n    public int getFront() { return isEmpty() ? -1 : data[front]; }\n    public int getRear() { return isEmpty() ? -1 : data[(front + count - 1) % k]; }\n    public boolean isEmpty() { return count == 0; }\n    public boolean isFull() { return count == k; }\n}",
                "cpp": "#include <vector>\nusing namespace std;\n\nclass MyCircularDeque {\n    vector<int> data;\n    int front = 0, count = 0, k;\npublic:\n    MyCircularDeque(int k) : data(k), k(k) {}\n    bool insertFront(int v) {\n        if (isFull()) return false;\n        front = (front - 1 + k) % k;\n        data[front] = v;\n        count++;\n        return true;\n    }\n    bool insertLast(int v) {\n        if (isFull()) return false;\n        data[(front + count) % k] = v;\n        count++;\n        return true;\n    }\n    bool deleteFront() {\n        if (isEmpty()) return false;\n        front = (front + 1) % k;\n        count--;\n        return true;\n    }\n    bool deleteLast() {\n        if (isEmpty()) return false;\n        count--;\n        return true;\n    }\n    int getFront() { return isEmpty() ? -1 : data[front]; }\n    int getRear() { return isEmpty() ? -1 : data[(front + count - 1) % k]; }\n    bool isEmpty() { return count == 0; }\n    bool isFull() { return count == k; }\n};",
                "javascript": "class MyCircularDeque {\n  constructor(k) {\n    this.k = k;\n    this.data = new Array(k);\n    this.front = 0;\n    this.count = 0;\n  }\n  insertFront(v) {\n    if (this.isFull()) return false;\n    this.front = (this.front - 1 + this.k) % this.k;\n    this.data[this.front] = v;\n    this.count++;\n    return true;\n  }\n  insertLast(v) {\n    if (this.isFull()) return false;\n    this.data[(this.front + this.count) % this.k] = v;\n    this.count++;\n    return true;\n  }\n  deleteFront() {\n    if (this.isEmpty()) return false;\n    this.front = (this.front + 1) % this.k;\n    this.count--;\n    return true;\n  }\n  deleteLast() {\n    if (this.isEmpty()) return false;\n    this.count--;\n    return true;\n  }\n  getFront() { return this.isEmpty() ? -1 : this.data[this.front]; }\n  getRear() {\n    if (this.isEmpty()) return -1;\n    return this.data[(this.front + this.count - 1) % this.k];\n  }\n  isEmpty() { return this.count === 0; }\n  isFull() { return this.count === this.k; }\n}\n\nconst cd = new MyCircularDeque(3);\ncd.insertLast(1);\ncd.insertLast(2);\ncd.insertFront(3);\nconsole.log(JSON.stringify([cd.getFront(), cd.getRear()]));"
              },
              "lineExplanations": [
                {
                  "lines": [
                    8,
                    13
                  ],
                  "text": "insertFront steps backwards circularly: (front - 1 + k) % k and places value at the new front."
                },
                {
                  "lines": [
                    15,
                    20
                  ],
                  "text": "insertLast calculates the next tail slot as (front + count) % k."
                },
                {
                  "lines": [
                    22,
                    26
                  ],
                  "text": "deleteFront moves front forward circularly: (front + 1) % k."
                },
                {
                  "lines": [
                    28,
                    31
                  ],
                  "text": "deleteLast simply decrements count without moving front."
                }
              ],
              "animationSteps": [
                {
                  "codeLine": 15,
                  "description": "insertLast(1): Placed at index 0.",
                  "state": {
                    "type": "array",
                    "array": [
                      1,
                      0,
                      0
                    ]
                  },
                  "highlights": [
                    0
                  ],
                  "pointers": {
                    "FRONT": 0
                  }
                },
                {
                  "codeLine": 15,
                  "description": "insertLast(2): Placed at index 1.",
                  "state": {
                    "type": "array",
                    "array": [
                      1,
                      2,
                      0
                    ]
                  },
                  "highlights": [
                    1
                  ],
                  "pointers": {
                    "FRONT": 0
                  }
                },
                {
                  "codeLine": 8,
                  "description": "insertFront(3): Front wraps backwards to index 2! [3 at idx 2, 1 at idx 0, 2 at idx 1].",
                  "state": {
                    "type": "array",
                    "array": [
                      1,
                      2,
                      3
                    ]
                  },
                  "highlights": [
                    2
                  ],
                  "pointers": {
                    "FRONT": 2
                  }
                }
              ]
            }
          ],
          "commonMistakes": "Negative modulo bug: in languages like C++ or Java, (front - 1) % k can return negative numbers. Always add k before modulo: (front - 1 + k) % k.",
          "relatedQuestionIds": [
            "queue-circular-array",
            "sliding-window-max"
          ]
        }
      ]
    },
    {
      "id": "queue-classics",
      "title": "Classic Queue Problems",
      "questions": [
        {
          "id": "stack-using-queues",
          "title": "Implement Stack using Queues",
          "difficulty": "Easy",
          "leetcode": {
            "number": 225,
            "url": "https://leetcode.com/problems/implement-stack-using-queues/"
          },
          "description": "Implement a Last-In-First-Out (LIFO) Stack using only standard First-In-First-Out (FIFO) Queues.",
          "constraints": "1 <= calls <= 100; all values between 1 and 100.",
          "examples": [
            {
              "input": "push(1), push(2), top(), pop(), empty()",
              "output": "[2, 2, false]",
              "why": "2 was pushed last, so it is popped first."
            }
          ],
          "approaches": [
            {
              "name": "Single Queue Rotation",
              "idea": "Use a single queue. When pushing an element, enqueue it, then dequeue and re-enqueue all previous elements so the newest element ends up at the front.",
              "timeComplexity": "O(N) for push, O(1) for pop and top",
              "spaceComplexity": "O(N)",
              "code": {
                "python": "from collections import deque\n\nclass MyStack:\n    def __init__(self):\n        self.q = deque()\n\n    def push(self, x: int) -> None:\n        self.q.append(x)\n        for _ in range(len(self.q) - 1):\n            self.q.append(self.q.popleft())\n\n    def pop(self) -> int:\n        return self.q.popleft()\n\n    def top(self) -> int:\n        return self.q[0]\n\n    def empty(self) -> bool:\n        return len(self.q) == 0\n\n# Test\ns = MyStack()\ns.push(1)\ns.push(2)\nprint([s.top(), s.pop(), s.empty()])",
                "java": "import java.util.*;\n\nclass MyStack {\n    private Queue<Integer> q = new LinkedList<>();\n\n    public void push(int x) {\n        q.add(x);\n        for (int i = 0; i < q.size() - 1; i++) {\n            q.add(q.remove());\n        }\n    }\n    public int pop() { return q.remove(); }\n    public int top() { return q.peek(); }\n    public boolean empty() { return q.isEmpty(); }\n}",
                "cpp": "#include <queue>\nusing namespace std;\n\nclass MyStack {\n    queue<int> q;\npublic:\n    void push(int x) {\n        q.push(x);\n        for (int i = 0; i < (int)q.size() - 1; i++) {\n            q.push(q.front());\n            q.pop();\n        }\n    }\n    int pop() {\n        int v = q.front();\n        q.pop();\n        return v;\n    }\n    int top() { return q.front(); }\n    bool empty() { return q.empty(); }\n};",
                "javascript": "class MyStack {\n  constructor() { this.q = []; }\n  push(x) {\n    this.q.push(x);\n    for (let i = 0; i < this.q.length - 1; i++) {\n      this.q.push(this.q.shift());\n    }\n  }\n  pop() { return this.q.shift(); }\n  top() { return this.q[0]; }\n  empty() { return this.q.length === 0; }\n}\n\nconst s = new MyStack();\ns.push(1);\ns.push(2);\nconsole.log(JSON.stringify([s.top(), s.pop(), s.empty()]));"
              },
              "lineExplanations": [
                {
                  "lines": [
                    7,
                    10
                  ],
                  "text": "Push new element to queue, then rotate (size - 1) elements by popping from front and appending to rear."
                },
                {
                  "lines": [
                    12,
                    13
                  ],
                  "text": "Pop simply dequeues from the front of the queue in O(1) time."
                },
                {
                  "lines": [
                    15,
                    16
                  ],
                  "text": "Top inspects the front element."
                }
              ],
              "animationSteps": [
                {
                  "codeLine": 7,
                  "description": "push(1): Enqueue 1.",
                  "state": {
                    "type": "queue",
                    "queue": [
                      1
                    ]
                  },
                  "highlights": [
                    0
                  ],
                  "pointers": {
                    "TOP": 0
                  }
                },
                {
                  "codeLine": 7,
                  "description": "push(2): Enqueue 2. Queue is [1, 2].",
                  "state": {
                    "type": "queue",
                    "queue": [
                      1,
                      2
                    ]
                  },
                  "highlights": [
                    1
                  ],
                  "pointers": {}
                },
                {
                  "codeLine": 9,
                  "description": "Rotate 1 to rear: popleft(1) and append(1). Queue is [2, 1]. Top is now 2!",
                  "state": {
                    "type": "queue",
                    "queue": [
                      2,
                      1
                    ]
                  },
                  "highlights": [
                    0
                  ],
                  "pointers": {
                    "TOP": 0
                  }
                },
                {
                  "codeLine": 12,
                  "description": "pop(): Pop 2 from front. Queue is [1].",
                  "state": {
                    "type": "queue",
                    "queue": [
                      1
                    ]
                  },
                  "highlights": [
                    0
                  ],
                  "pointers": {
                    "TOP": 0
                  }
                }
              ]
            }
          ],
          "commonMistakes": "Using two queues when one rotating queue suffices, or confusing FIFO queue order with LIFO stack order.",
          "relatedQuestionIds": [
            "queue-using-stacks"
          ]
        },
        {
          "id": "sliding-window-max",
          "title": "Sliding Window Maximum",
          "difficulty": "Hard",
          "leetcode": {
            "number": 239,
            "url": "https://leetcode.com/problems/sliding-window-maximum/"
          },
          "description": "Given an integer array nums and a sliding window of size k moving from left to right, return the maximum element in each window.",
          "constraints": "1 <= nums.length <= 10^5; 1 <= k <= nums.length.",
          "examples": [
            {
              "input": "nums = [1,3,-1,-3,5,3,6,7], k = 3",
              "output": "[3, 3, 5, 5, 6, 7]",
              "why": "Window 1: [1, 3, -1] -> max 3. Window 2: [3, -1, -3] -> max 3. Window 3: [-1, -3, 5] -> max 5, etc."
            }
          ],
          "approaches": [
            {
              "name": "Monotonic Decreasing Deque",
              "idea": "Store indices in a deque maintaining strictly decreasing values. The front of the deque is always the maximum of the current window. Remove indices out of window bounds.",
              "timeComplexity": "O(N) - every element is added and removed at most once",
              "spaceComplexity": "O(k)",
              "code": {
                "python": "from collections import deque\n\ndef maxSlidingWindow(nums, k):\n    q = deque()  # stores indices\n    res = []\n    \n    for i in range(len(nums)):\n        # Remove elements outside current window\n        if q and q[0] < i - k + 1:\n            q.popleft()\n            \n        # Maintain decreasing order: remove smaller elements from rear\n        while q and nums[q[-1]] < nums[i]:\n            q.pop()\n            \n        q.append(i)\n        \n        # Window has reached size k\n        if i >= k - 1:\n            res.append(nums[q[0]])\n            \n    return res\n\n# Test\nprint(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))",
                "java": "import java.util.*;\n\nclass Solution {\n    public int[] maxSlidingWindow(int[] nums, int k) {\n        Deque<Integer> q = new ArrayDeque<>();\n        int[] res = new int[nums.length - k + 1];\n        int ri = 0;\n        \n        for (int i = 0; i < nums.length; i++) {\n            if (!q.isEmpty() && q.peekFirst() < i - k + 1) q.pollFirst();\n            while (!q.isEmpty() && nums[q.peekLast()] < nums[i]) q.pollLast();\n            q.offerLast(i);\n            if (i >= k - 1) res[ri++] = nums[q.peekFirst()];\n        }\n        return res;\n    }\n}",
                "cpp": "#include <vector>\n#include <deque>\nusing namespace std;\n\nvector<int> maxSlidingWindow(vector<int>& nums, int k) {\n    deque<int> q;\n    vector<int> res;\n    for (int i = 0; i < (int)nums.size(); i++) {\n        if (!q.empty() && q.front() < i - k + 1) q.pop_front();\n        while (!q.empty() && nums[q.back()] < nums[i]) q.pop_back();\n        q.push_back(i);\n        if (i >= k - 1) res.push_back(nums[q.front()]);\n    }\n    return res;\n}",
                "javascript": "function maxSlidingWindow(nums, k) {\n  const q = []; // deque of indices\n  const res = [];\n  for (let i = 0; i < nums.length; i++) {\n    if (q.length && q[0] < i - k + 1) q.shift();\n    while (q.length && nums[q[q.length - 1]] < nums[i]) q.pop();\n    q.push(i);\n    if (i >= k - 1) res.push(nums[q[0]]);\n  }\n  return res;\n}\n\nconsole.log(JSON.stringify(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)));"
              },
              "lineExplanations": [
                {
                  "lines": [
                    8,
                    10
                  ],
                  "text": "If front index is older than i - k + 1, it has slipped out of the window; remove it."
                },
                {
                  "lines": [
                    12,
                    14
                  ],
                  "text": "While current number is greater than numbers at rear of deque, pop them. They can never be maximums again."
                },
                {
                  "lines": [
                    16,
                    20
                  ],
                  "text": "Append current index. Once window size >= k, record nums[q[0]] as window max."
                }
              ],
              "animationSteps": [
                {
                  "codeLine": 16,
                  "description": "i=0 (1): Deque = [idx 0 (val 1)].",
                  "state": {
                    "type": "array",
                    "array": [
                      1,
                      3,
                      -1,
                      -3,
                      5,
                      3,
                      6,
                      7
                    ]
                  },
                  "highlights": [
                    0
                  ],
                  "pointers": {
                    "i": 0
                  }
                },
                {
                  "codeLine": 12,
                  "description": "i=1 (3): 3 > 1, so pop 1. Deque = [idx 1 (val 3)].",
                  "state": {
                    "type": "array",
                    "array": [
                      1,
                      3,
                      -1,
                      -3,
                      5,
                      3,
                      6,
                      7
                    ]
                  },
                  "highlights": [
                    1
                  ],
                  "pointers": {
                    "i": 1
                  }
                },
                {
                  "codeLine": 18,
                  "description": "i=2 (-1): First full window [1, 3, -1]. Max is nums[q[0]] = 3.",
                  "state": {
                    "type": "array",
                    "array": [
                      1,
                      3,
                      -1,
                      -3,
                      5,
                      3,
                      6,
                      7
                    ]
                  },
                  "highlights": [
                    0,
                    1,
                    2
                  ],
                  "pointers": {
                    "MAX": 1
                  }
                },
                {
                  "codeLine": 18,
                  "description": "i=4 (5): 5 eliminates -1 and -3. Deque = [idx 4 (val 5)]. Max = 5.",
                  "state": {
                    "type": "array",
                    "array": [
                      1,
                      3,
                      -1,
                      -3,
                      5,
                      3,
                      6,
                      7
                    ]
                  },
                  "highlights": [
                    4
                  ],
                  "pointers": {
                    "MAX": 4
                  }
                }
              ]
            }
          ],
          "commonMistakes": "Storing values instead of indices in the deque, making it impossible to verify whether an element has slid out of the active window.",
          "relatedQuestionIds": [
            "queue-circular-deque",
            "daily-temperatures"
          ]
        },
        {
          "id": "first-unique-char",
          "title": "First Unique Character in a String",
          "difficulty": "Easy",
          "leetcode": {
            "number": 387,
            "url": "https://leetcode.com/problems/first-unique-character-in-a-string/"
          },
          "description": "Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.",
          "constraints": "1 <= s.length <= 10^5; s consists of only lowercase English letters.",
          "examples": [
            {
              "input": "s = 'leetcode'",
              "output": "0",
              "why": "Character 'l' at index 0 does not repeat anywhere in the string."
            },
            {
              "input": "s = 'loveleetcode'",
              "output": "2",
              "why": "'l' and 'o' repeat; 'v' at index 2 is the first unique character."
            }
          ],
          "approaches": [
            {
              "name": "Frequency Map / Queue",
              "idea": "Count frequency of each character in one pass. In second pass, return the first character whose count is 1.",
              "timeComplexity": "O(N)",
              "spaceComplexity": "O(1) - alphabet size <= 26",
              "code": {
                "python": "from collections import Counter\n\ndef firstUniqChar(s: str) -> int:\n    count = Counter(s)\n    for i, ch in enumerate(s):\n        if count[ch] == 1:\n            return i\n    return -1\n\n# Test\nprint(firstUniqChar(\"leetcode\"))",
                "java": "class Solution {\n    public int firstUniqChar(String s) {\n        int[] freq = new int[26];\n        for (char c : s.toCharArray()) freq[c - 'a']++;\n        for (int i = 0; i < s.length(); i++) {\n            if (freq[s.charAt(i) - 'a'] == 1) return i;\n        }\n        return -1;\n    }\n}",
                "cpp": "#include <string>\n#include <vector>\nusing namespace std;\n\nint firstUniqChar(string s) {\n    vector<int> freq(26, 0);\n    for (char c : s) freq[c - 'a']++;\n    for (int i = 0; i < (int)s.size(); i++) {\n        if (freq[s[i] - 'a'] == 1) return i;\n    }\n    return -1;\n}",
                "javascript": "function firstUniqChar(s) {\n  const counts = {};\n  for (const ch of s) counts[ch] = (counts[ch] || 0) + 1;\n  for (let i = 0; i < s.length; i++) {\n    if (counts[s[i]] === 1) return i;\n  }\n  return -1;\n}\n\nconsole.log(firstUniqChar(\"leetcode\"));"
              },
              "lineExplanations": [
                {
                  "lines": [
                    4,
                    4
                  ],
                  "text": "Build frequency hash map counting occurrences of each character."
                },
                {
                  "lines": [
                    5,
                    7
                  ],
                  "text": "Traverse the string from left to right; return index of first character with frequency 1."
                },
                {
                  "lines": [
                    8,
                    8
                  ],
                  "text": "If no unique character is found, return -1."
                }
              ],
              "animationSteps": [
                {
                  "codeLine": 4,
                  "description": "Count frequencies for 'leetcode': {'l': 1, 'e': 3, 't': 1, 'c': 1, 'o': 1, 'd': 1}.",
                  "state": {
                    "type": "array",
                    "array": [
                      "l",
                      "e",
                      "e",
                      "t",
                      "c",
                      "o",
                      "d",
                      "e"
                    ]
                  },
                  "highlights": [],
                  "pointers": {}
                },
                {
                  "codeLine": 6,
                  "description": "Check index 0 ('l'): frequency is 1. Match found!",
                  "state": {
                    "type": "array",
                    "array": [
                      "l",
                      "e",
                      "e",
                      "t",
                      "c",
                      "o",
                      "d",
                      "e"
                    ]
                  },
                  "highlights": [
                    0
                  ],
                  "pointers": {
                    "MATCH": 0
                  }
                }
              ]
            }
          ],
          "commonMistakes": "Checking indexOf and lastIndexOf inside a loop, turning an O(N) linear solution into an O(N^2) quadratic algorithm.",
          "relatedQuestionIds": [
            "valid-anagram",
            "two-sum"
          ]
        },
        {
          "id": "recent-counter",
          "title": "Number of Recent Calls (Rate Limiter Queue)",
          "difficulty": "Easy",
          "leetcode": {
            "number": 933,
            "url": "https://leetcode.com/problems/number-of-recent-calls/"
          },
          "description": "Implement the RecentCounter class that counts the number of recent requests within a certain time frame [t - 3000, t] milliseconds.",
          "constraints": "1 <= t <= 10^9; each test call has strictly increasing values of t.",
          "examples": [
            {
              "input": "ping(1), ping(100), ping(3001), ping(3002)",
              "output": "[1, 2, 3, 3]",
              "why": "At t=3002, the window is [2, 3002]. Call 1 is outside the window, leaving calls 100, 3001, 3002 (count 3)."
            }
          ],
          "approaches": [
            {
              "name": "Sliding Window FIFO Queue",
              "idea": "Enqueue each new timestamp t. While the front timestamp is strictly less than t - 3000, dequeue it. Return queue size.",
              "timeComplexity": "O(1) amortized per ping",
              "spaceComplexity": "O(W) where W is the number of calls in 3000ms",
              "code": {
                "python": "from collections import deque\n\nclass RecentCounter:\n    def __init__(self):\n        self.q = deque()\n\n    def ping(self, t: int) -> int:\n        self.q.append(t)\n        while self.q and self.q[0] < t - 3000:\n            self.q.popleft()\n        return len(self.q)\n\n# Test\nrc = RecentCounter()\nprint([rc.ping(1), rc.ping(100), rc.ping(3001), rc.ping(3002)])",
                "java": "import java.util.*;\n\nclass RecentCounter {\n    private Queue<Integer> q = new LinkedList<>();\n    public int ping(int t) {\n        q.add(t);\n        while (q.peek() < t - 3000) q.poll();\n        return q.size();\n    }\n}",
                "cpp": "#include <queue>\nusing namespace std;\n\nclass RecentCounter {\n    queue<int> q;\npublic:\n    int ping(int t) {\n        q.push(t);\n        while (q.front() < t - 3000) q.pop();\n        return q.size();\n    }\n};",
                "javascript": "class RecentCounter {\n  constructor() { this.q = []; }\n  ping(t) {\n    this.q.push(t);\n    while (this.q[0] < t - 3000) this.q.shift();\n    return this.q.length;\n  }\n}\n\nconst rc = new RecentCounter();\nconsole.log(JSON.stringify([rc.ping(1), rc.ping(100), rc.ping(3001), rc.ping(3002)]));"
              },
              "lineExplanations": [
                {
                  "lines": [
                    8,
                    8
                  ],
                  "text": "Enqueue incoming request timestamp t into the queue."
                },
                {
                  "lines": [
                    9,
                    10
                  ],
                  "text": "Evict older calls that fall before the sliding 3000ms window (t - 3000)."
                },
                {
                  "lines": [
                    11,
                    11
                  ],
                  "text": "Return current queue length representing active calls in the window."
                }
              ],
              "animationSteps": [
                {
                  "codeLine": 8,
                  "description": "ping(1): Queue is [1]. Active calls: 1.",
                  "state": {
                    "type": "queue",
                    "queue": [
                      1
                    ]
                  },
                  "highlights": [
                    0
                  ],
                  "pointers": {
                    "t": 1
                  }
                },
                {
                  "codeLine": 8,
                  "description": "ping(100): Queue is [1, 100]. Active calls: 2.",
                  "state": {
                    "type": "queue",
                    "queue": [
                      1,
                      100
                    ]
                  },
                  "highlights": [
                    1
                  ],
                  "pointers": {
                    "t": 100
                  }
                },
                {
                  "codeLine": 8,
                  "description": "ping(3001): Window is [1, 3001]. Queue is [1, 100, 3001]. Active calls: 3.",
                  "state": {
                    "type": "queue",
                    "queue": [
                      1,
                      100,
                      3001
                    ]
                  },
                  "highlights": [
                    2
                  ],
                  "pointers": {
                    "t": 3001
                  }
                },
                {
                  "codeLine": 9,
                  "description": "ping(3002): Window is [2, 3002]. Dequeue 1 because 1 < 2! Queue is [100, 3001, 3002].",
                  "state": {
                    "type": "queue",
                    "queue": [
                      100,
                      3001,
                      3002
                    ]
                  },
                  "highlights": [
                    0,
                    1,
                    2
                  ],
                  "pointers": {
                    "t": 3002
                  }
                }
              ]
            }
          ],
          "commonMistakes": "Storing timestamps in an unbounded list without popping old timestamps, causing memory to grow indefinitely.",
          "relatedQuestionIds": [
            "sliding-window-max",
            "queue-array-impl"
          ]
        },
        {
          "id": "rotting-oranges",
          "title": "Rotting Oranges (Multi-Source BFS)",
          "difficulty": "Medium",
          "leetcode": {
            "number": 994,
            "url": "https://leetcode.com/problems/rotting-oranges/"
          },
          "description": "Given an m x n grid where each cell is 0 (empty), 1 (fresh orange), or 2 (rotten orange), determine the minimum number of minutes that must elapse until no cell has a fresh orange. Return -1 if impossible.",
          "constraints": "m, n <= 10; values in grid are 0, 1, or 2.",
          "examples": [
            {
              "input": "grid = [[2,1,1],[1,1,0],[0,1,1]]",
              "output": "4",
              "why": "Minute 1 rots adjacent oranges; after 4 minutes all 6 fresh oranges are rotten."
            }
          ],
          "approaches": [
            {
              "name": "Multi-Source BFS Queue",
              "idea": "Add all initially rotten oranges to a BFS queue. Process level by level (each level represents 1 minute). Infect adjacent fresh oranges and decrement fresh count.",
              "timeComplexity": "O(M * N)",
              "spaceComplexity": "O(M * N)",
              "code": {
                "python": "from collections import deque\n\ndef orangesRotting(grid):\n    rows, cols = len(grid), len(grid[0])\n    q = deque()\n    fresh = 0\n    \n    for r in range(rows):\n        for c in range(cols):\n            if grid[r][c] == 2:\n                q.append((r, c))\n            elif grid[r][c] == 1:\n                fresh += 1\n                \n    if fresh == 0:\n        return 0\n        \n    minutes = 0\n    dirs = [(0, 1), (0, -1), (1, 0), (-1, 0)]\n    \n    while q and fresh > 0:\n        minutes += 1\n        for _ in range(len(q)):\n            r, c = q.popleft()\n            for dr, dc in dirs:\n                nr, nc = r + dr, c + dc\n                if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1:\n                    grid[nr][nc] = 2\n                    fresh -= 1\n                    q.append((nr, nc))\n                    \n    return minutes if fresh == 0 else -1\n\n# Test\nprint(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]))",
                "java": "import java.util.*;\n\nclass Solution {\n    public int orangesRotting(int[][] grid) {\n        int rows = grid.length, cols = grid[0].length;\n        Queue<int[]> q = new LinkedList<>();\n        int fresh = 0;\n        for (int r = 0; r < rows; r++) {\n            for (int c = 0; c < cols; c++) {\n                if (grid[r][c] == 2) q.offer(new int[]{r, c});\n                else if (grid[r][c] == 1) fresh++;\n            }\n        }\n        if (fresh == 0) return 0;\n        int minutes = 0;\n        int[][] dirs = {{0,1},{0,-1},{1,0},{-1,0}};\n        while (!q.isEmpty() && fresh > 0) {\n            minutes++;\n            int size = q.size();\n            for (int i = 0; i < size; i++) {\n                int[] curr = q.poll();\n                for (int[] d : dirs) {\n                    int nr = curr[0] + d[0], nc = curr[1] + d[1];\n                    if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == 1) {\n                        grid[nr][nc] = 2; fresh--; q.offer(new int[]{nr, nc});\n                    }\n                }\n            }\n        }\n        return fresh == 0 ? minutes : -1;\n    }\n}",
                "cpp": "#include <vector>\n#include <queue>\nusing namespace std;\n\nint orangesRotting(vector<vector<int>>& grid) {\n    int rows = grid.size(), cols = grid[0].size();\n    queue<pair<int,int>> q;\n    int fresh = 0;\n    for (int r = 0; r < rows; r++) {\n        for (int c = 0; c < cols; c++) {\n            if (grid[r][c] == 2) q.push({r, c});\n            else if (grid[r][c] == 1) fresh++;\n        }\n    }\n    if (fresh == 0) return 0;\n    int minutes = 0;\n    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};\n    while (!q.empty() && fresh > 0) {\n        minutes++;\n        int sz = q.size();\n        for (int i = 0; i < sz; i++) {\n            auto [r, c] = q.front(); q.pop();\n            for (auto& d : dirs) {\n                int nr = r + d[0], nc = c + d[1];\n                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == 1) {\n                    grid[nr][nc] = 2; fresh--; q.push({nr, nc});\n                }\n            }\n        }\n    }\n    return fresh == 0 ? minutes : -1;\n}",
                "javascript": "function orangesRotting(grid) {\n  const rows = grid.length, cols = grid[0].length;\n  const q = [];\n  let fresh = 0;\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      if (grid[r][c] === 2) q.push([r, c]);\n      else if (grid[r][c] === 1) fresh++;\n    }\n  }\n  if (fresh === 0) return 0;\n  let minutes = 0;\n  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];\n  while (q.length && fresh > 0) {\n    minutes++;\n    const sz = q.length;\n    for (let i = 0; i < sz; i++) {\n      const [r, c] = q.shift();\n      for (const [dr, dc] of dirs) {\n        const nr = r + dr, nc = c + dc;\n        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {\n          grid[nr][nc] = 2;\n          fresh--;\n          q.push([nr, nc]);\n        }\n      }\n    }\n  }\n  return fresh === 0 ? minutes : -1;\n}\n\nconsole.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]));"
              },
              "lineExplanations": [
                {
                  "lines": [
                    8,
                    14
                  ],
                  "text": "Scan grid: enqueue all rotten oranges (multi-source seeds) and count fresh ones."
                },
                {
                  "lines": [
                    21,
                    24
                  ],
                  "text": "Process BFS layer by layer: each while iteration corresponds to 1 minute of rotting propagation."
                },
                {
                  "lines": [
                    26,
                    30
                  ],
                  "text": "Infect adjacent fresh neighbors (4 directions), mark them rotten (2), decrement fresh count, and enqueue."
                }
              ],
              "animationSteps": [
                {
                  "codeLine": 8,
                  "description": "Minute 0: Rotten orange at (0,0) initialized in queue. Fresh count = 6.",
                  "state": {
                    "type": "array",
                    "array": [
                      "(0,0)=Rotten",
                      "(0,1)=Fresh",
                      "(1,0)=Fresh"
                    ]
                  },
                  "highlights": [
                    0
                  ],
                  "pointers": {
                    "t=0": 0
                  }
                },
                {
                  "codeLine": 21,
                  "description": "Minute 1: (0,0) rots neighbors (0,1) and (1,0). Queue length = 2. Fresh count = 4.",
                  "state": {
                    "type": "array",
                    "array": [
                      "(0,1)=Rotten",
                      "(1,0)=Rotten"
                    ]
                  },
                  "highlights": [
                    0,
                    1
                  ],
                  "pointers": {
                    "t=1": 0
                  }
                },
                {
                  "codeLine": 21,
                  "description": "Minute 4: Final fresh orange at (2,2) rots. Fresh count = 0. Total minutes = 4.",
                  "state": {
                    "type": "array",
                    "array": [
                      "All Rotted!"
                    ]
                  },
                  "highlights": [
                    0
                  ],
                  "pointers": {
                    "DONE": 0
                  }
                }
              ]
            }
          ],
          "commonMistakes": "Running standard single-source BFS from each rotten orange separately instead of pushing all initial rotten oranges into the queue simultaneously.",
          "relatedQuestionIds": [
            "sliding-window-max",
            "recent-counter"
          ]
        }
      ]
    }
  ]
};
