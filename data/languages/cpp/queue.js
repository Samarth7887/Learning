/**
 * SynapseCS Language-Specific Implementation: CPP - queue
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['cpp'] = window.DSA_LANG_CODE['cpp'] || {};
  window.DSA_LANG_CODE['cpp']['queue'] = [
  {
    "id": "queue-array-impl",
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
        "text": "class ArrayQueue {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    vector<int> items;",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    int frontIdx = 0;",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "public:",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    void enqueue(int val) { items.push_back(val); }",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    int dequeue() {",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        if (isEmpty()) return -1;",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "        return items[frontIdx++];",
        "tag": "return",
        "lineNum": 11
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    int front() {",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        if (isEmpty()) return -1;",
        "tag": "branch",
        "lineNum": 14
      },
      {
        "text": "        return items[frontIdx];",
        "tag": "return",
        "lineNum": 15
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "    bool isEmpty() { return frontIdx >= (int)items.size(); }",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "};",
        "tag": "exec",
        "lineNum": 18
      }
    ],
    "rawCode": "#include <vector>\nusing namespace std;\n\nclass ArrayQueue {\n    vector<int> items;\n    int frontIdx = 0;\npublic:\n    void enqueue(int val) { items.push_back(val); }\n    int dequeue() {\n        if (isEmpty()) return -1;\n        return items[frontIdx++];\n    }\n    int front() {\n        if (isEmpty()) return -1;\n        return items[frontIdx];\n    }\n    bool isEmpty() { return frontIdx >= (int)items.size(); }\n};",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "return": "Return computed solution result.",
      "comment": "Executes tagged statement [comment] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "def": "Executes tagged statement [def] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "queue-linkedlist-impl",
    "code": [
      {
        "text": "class LinkedQueue {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    Node* head = nullptr;",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    Node* tail = nullptr;",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "public:",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    void enqueue(int val) {",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "        Node* n = new Node(val);",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "        if (!tail) head = tail = n;",
        "tag": "branch",
        "lineNum": 8
      },
      {
        "text": "        else { tail->next = n; tail = n; }",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    int dequeue() {",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "        if (!head) return -1;",
        "tag": "branch",
        "lineNum": 12
      },
      {
        "text": "        int val = head->val;",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        Node* tmp = head;",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "        head = head->next;",
        "tag": "pointer",
        "lineNum": 15
      },
      {
        "text": "        if (!head) tail = nullptr;",
        "tag": "branch",
        "lineNum": 16
      },
      {
        "text": "        delete tmp;",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "        return val;",
        "tag": "return",
        "lineNum": 18
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "};",
        "tag": "exec",
        "lineNum": 20
      }
    ],
    "rawCode": "class LinkedQueue {\n    struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };\n    Node* head = nullptr;\n    Node* tail = nullptr;\npublic:\n    void enqueue(int val) {\n        Node* n = new Node(val);\n        if (!tail) head = tail = n;\n        else { tail->next = n; tail = n; }\n    }\n    int dequeue() {\n        if (!head) return -1;\n        int val = head->val;\n        Node* tmp = head;\n        head = head->next;\n        if (!head) tail = nullptr;\n        delete tmp;\n        return val;\n    }\n};",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp.",
      "pointer": "Executes tagged statement [pointer] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "queue-circular-array",
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
        "text": "class MyCircularQueue {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    vector<int> data;",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    int head = 0, count = 0, cap;",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "public:",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    MyCircularQueue(int k) : data(k), cap(k) {}",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    bool enQueue(int value) {",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        if (isFull()) return false;",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "        data[(head + count) % cap] = value;",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "        count++;",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "        return true;",
        "tag": "return",
        "lineNum": 13
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    bool deQueue() {",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "        if (isEmpty()) return false;",
        "tag": "branch",
        "lineNum": 16
      },
      {
        "text": "        head = (head + 1) % cap;",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "        count--;",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "        return true;",
        "tag": "return",
        "lineNum": 19
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "    int Front() { return isEmpty() ? -1 : data[head]; }",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "    int Rear() { return isEmpty() ? -1 : data[(head + count - 1) % cap]; }",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "    bool isEmpty() { return count == 0; }",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "    bool isFull() { return count == cap; }",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "};",
        "tag": "exec",
        "lineNum": 25
      }
    ],
    "rawCode": "#include <vector>\nusing namespace std;\n\nclass MyCircularQueue {\n    vector<int> data;\n    int head = 0, count = 0, cap;\npublic:\n    MyCircularQueue(int k) : data(k), cap(k) {}\n    bool enQueue(int value) {\n        if (isFull()) return false;\n        data[(head + count) % cap] = value;\n        count++;\n        return true;\n    }\n    bool deQueue() {\n        if (isEmpty()) return false;\n        head = (head + 1) % cap;\n        count--;\n        return true;\n    }\n    int Front() { return isEmpty() ? -1 : data[head]; }\n    int Rear() { return isEmpty() ? -1 : data[(head + count - 1) % cap]; }\n    bool isEmpty() { return count == 0; }\n    bool isFull() { return count == cap; }\n};",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "return": "Return computed solution result.",
      "comment": "Executes tagged statement [comment] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "def": "Executes tagged statement [def] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "queue-circular-deque",
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
        "text": "class MyCircularDeque {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    vector<int> data;",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    int front = 0, count = 0, k;",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "public:",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    MyCircularDeque(int k) : data(k), k(k) {}",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    bool insertFront(int v) {",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        if (isFull()) return false;",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "        front = (front - 1 + k) % k;",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "        data[front] = v;",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "        count++;",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        return true;",
        "tag": "return",
        "lineNum": 14
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    bool insertLast(int v) {",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "        if (isFull()) return false;",
        "tag": "branch",
        "lineNum": 17
      },
      {
        "text": "        data[(front + count) % k] = v;",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "        count++;",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "        return true;",
        "tag": "return",
        "lineNum": 20
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "    bool deleteFront() {",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "        if (isEmpty()) return false;",
        "tag": "branch",
        "lineNum": 23
      },
      {
        "text": "        front = (front + 1) % k;",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "        count--;",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "        return true;",
        "tag": "return",
        "lineNum": 26
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "    bool deleteLast() {",
        "tag": "exec",
        "lineNum": 28
      },
      {
        "text": "        if (isEmpty()) return false;",
        "tag": "branch",
        "lineNum": 29
      },
      {
        "text": "        count--;",
        "tag": "exec",
        "lineNum": 30
      },
      {
        "text": "        return true;",
        "tag": "return",
        "lineNum": 31
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 32
      },
      {
        "text": "    int getFront() { return isEmpty() ? -1 : data[front]; }",
        "tag": "exec",
        "lineNum": 33
      },
      {
        "text": "    int getRear() { return isEmpty() ? -1 : data[(front + count - 1) % k]; }",
        "tag": "exec",
        "lineNum": 34
      },
      {
        "text": "    bool isEmpty() { return count == 0; }",
        "tag": "exec",
        "lineNum": 35
      },
      {
        "text": "    bool isFull() { return count == k; }",
        "tag": "exec",
        "lineNum": 36
      },
      {
        "text": "};",
        "tag": "exec",
        "lineNum": 37
      }
    ],
    "rawCode": "#include <vector>\nusing namespace std;\n\nclass MyCircularDeque {\n    vector<int> data;\n    int front = 0, count = 0, k;\npublic:\n    MyCircularDeque(int k) : data(k), k(k) {}\n    bool insertFront(int v) {\n        if (isFull()) return false;\n        front = (front - 1 + k) % k;\n        data[front] = v;\n        count++;\n        return true;\n    }\n    bool insertLast(int v) {\n        if (isFull()) return false;\n        data[(front + count) % k] = v;\n        count++;\n        return true;\n    }\n    bool deleteFront() {\n        if (isEmpty()) return false;\n        front = (front + 1) % k;\n        count--;\n        return true;\n    }\n    bool deleteLast() {\n        if (isEmpty()) return false;\n        count--;\n        return true;\n    }\n    int getFront() { return isEmpty() ? -1 : data[front]; }\n    int getRear() { return isEmpty() ? -1 : data[(front + count - 1) % k]; }\n    bool isEmpty() { return count == 0; }\n    bool isFull() { return count == k; }\n};",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "return": "Return computed solution result.",
      "comment": "Executes tagged statement [comment] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "def": "Executes tagged statement [def] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "stack-using-queues",
    "code": [
      {
        "text": "#include <queue>",
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
        "text": "class MyStack {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    queue<int> q;",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "public:",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    void push(int x) {",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "        q.push(x);",
        "tag": "mutate",
        "lineNum": 8
      },
      {
        "text": "        for (int i = 0; i < (int)q.size() - 1; i++) {",
        "tag": "loop",
        "lineNum": 9
      },
      {
        "text": "            q.push(q.front());",
        "tag": "mutate",
        "lineNum": 10
      },
      {
        "text": "            q.pop();",
        "tag": "mutate",
        "lineNum": 11
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    int pop() {",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "        int v = q.front();",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "        q.pop();",
        "tag": "mutate",
        "lineNum": 16
      },
      {
        "text": "        return v;",
        "tag": "return",
        "lineNum": 17
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "    int top() { return q.front(); }",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "    bool empty() { return q.empty(); }",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "};",
        "tag": "exec",
        "lineNum": 21
      }
    ],
    "rawCode": "#include <queue>\nusing namespace std;\n\nclass MyStack {\n    queue<int> q;\npublic:\n    void push(int x) {\n        q.push(x);\n        for (int i = 0; i < (int)q.size() - 1; i++) {\n            q.push(q.front());\n            q.pop();\n        }\n    }\n    int pop() {\n        int v = q.front();\n        q.pop();\n        return v;\n    }\n    int top() { return q.front(); }\n    bool empty() { return q.empty(); }\n};",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "comment": "Executes tagged statement [comment] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "def": "Executes tagged statement [def] in cpp.",
      "mutate": "Executes tagged statement [mutate] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "sliding-window-max",
    "code": [
      {
        "text": "#include <vector>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <deque>",
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
        "text": "vector<int> maxSlidingWindow(vector<int>& nums, int k) {",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    deque<int> q;",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    vector<int> res;",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    for (int i = 0; i < (int)nums.size(); i++) {",
        "tag": "loop",
        "lineNum": 8
      },
      {
        "text": "        if (!q.empty() && q.front() < i - k + 1) q.pop_front();",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "        while (!q.empty() && nums[q.back()] < nums[i]) q.pop_back();",
        "tag": "loop",
        "lineNum": 10
      },
      {
        "text": "        q.push_back(i);",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "        if (i >= k - 1) res.push_back(nums[q.front()]);",
        "tag": "branch",
        "lineNum": 12
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    return res;",
        "tag": "return",
        "lineNum": 14
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 15
      }
    ],
    "rawCode": "#include <vector>\n#include <deque>\nusing namespace std;\n\nvector<int> maxSlidingWindow(vector<int>& nums, int k) {\n    deque<int> q;\n    vector<int> res;\n    for (int i = 0; i < (int)nums.size(); i++) {\n        if (!q.empty() && q.front() < i - k + 1) q.pop_front();\n        while (!q.empty() && nums[q.back()] < nums[i]) q.pop_back();\n        q.push_back(i);\n        if (i >= k - 1) res.push_back(nums[q.front()]);\n    }\n    return res;\n}",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "comment": "Executes tagged statement [comment] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "first-unique-char",
    "code": [
      {
        "text": "#include <string>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <vector>",
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
        "text": "int firstUniqChar(string s) {",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    vector<int> freq(26, 0);",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    for (char c : s) freq[c - 'a']++;",
        "tag": "loop",
        "lineNum": 7
      },
      {
        "text": "    for (int i = 0; i < (int)s.size(); i++) {",
        "tag": "loop",
        "lineNum": 8
      },
      {
        "text": "        if (freq[s[i] - 'a'] == 1) return i;",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    return -1;",
        "tag": "return",
        "lineNum": 11
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 12
      }
    ],
    "rawCode": "#include <string>\n#include <vector>\nusing namespace std;\n\nint firstUniqChar(string s) {\n    vector<int> freq(26, 0);\n    for (char c : s) freq[c - 'a']++;\n    for (int i = 0; i < (int)s.size(); i++) {\n        if (freq[s[i] - 'a'] == 1) return i;\n    }\n    return -1;\n}",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "comment": "Executes tagged statement [comment] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "recent-counter",
    "code": [
      {
        "text": "#include <queue>",
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
        "text": "class RecentCounter {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    queue<int> q;",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "public:",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    int ping(int t) {",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "        q.push(t);",
        "tag": "mutate",
        "lineNum": 8
      },
      {
        "text": "        while (q.front() < t - 3000) q.pop();",
        "tag": "loop",
        "lineNum": 9
      },
      {
        "text": "        return q.size();",
        "tag": "return",
        "lineNum": 10
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "};",
        "tag": "exec",
        "lineNum": 12
      }
    ],
    "rawCode": "#include <queue>\nusing namespace std;\n\nclass RecentCounter {\n    queue<int> q;\npublic:\n    int ping(int t) {\n        q.push(t);\n        while (q.front() < t - 3000) q.pop();\n        return q.size();\n    }\n};",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "comment": "Executes tagged statement [comment] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "def": "Executes tagged statement [def] in cpp.",
      "mutate": "Executes tagged statement [mutate] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "rotting-oranges",
    "code": [
      {
        "text": "#include <vector>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <queue>",
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
        "text": "int orangesRotting(vector<vector<int>>& grid) {",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    int rows = grid.size(), cols = grid[0].size();",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    queue<pair<int,int>> q;",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    int fresh = 0;",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "    for (int r = 0; r < rows; r++) {",
        "tag": "loop",
        "lineNum": 9
      },
      {
        "text": "        for (int c = 0; c < cols; c++) {",
        "tag": "loop",
        "lineNum": 10
      },
      {
        "text": "            if (grid[r][c] == 2) q.push({r, c});",
        "tag": "branch",
        "lineNum": 11
      },
      {
        "text": "            else if (grid[r][c] == 1) fresh++;",
        "tag": "branch",
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
        "text": "    if (fresh == 0) return 0;",
        "tag": "branch",
        "lineNum": 15
      },
      {
        "text": "    int minutes = 0;",
        "tag": "init",
        "lineNum": 16
      },
      {
        "text": "    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "    while (!q.empty() && fresh > 0) {",
        "tag": "loop",
        "lineNum": 18
      },
      {
        "text": "        minutes++;",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "        int sz = q.size();",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "        for (int i = 0; i < sz; i++) {",
        "tag": "loop",
        "lineNum": 21
      },
      {
        "text": "            auto [r, c] = q.front(); q.pop();",
        "tag": "mutate",
        "lineNum": 22
      },
      {
        "text": "            for (auto& d : dirs) {",
        "tag": "loop",
        "lineNum": 23
      },
      {
        "text": "                int nr = r + d[0], nc = c + d[1];",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == 1) {",
        "tag": "branch",
        "lineNum": 25
      },
      {
        "text": "                    grid[nr][nc] = 2; fresh--; q.push({nr, nc});",
        "tag": "mutate",
        "lineNum": 26
      },
      {
        "text": "                }",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "            }",
        "tag": "exec",
        "lineNum": 28
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 29
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 30
      },
      {
        "text": "    return fresh == 0 ? minutes : -1;",
        "tag": "return",
        "lineNum": 31
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 32
      }
    ],
    "rawCode": "#include <vector>\n#include <queue>\nusing namespace std;\n\nint orangesRotting(vector<vector<int>>& grid) {\n    int rows = grid.size(), cols = grid[0].size();\n    queue<pair<int,int>> q;\n    int fresh = 0;\n    for (int r = 0; r < rows; r++) {\n        for (int c = 0; c < cols; c++) {\n            if (grid[r][c] == 2) q.push({r, c});\n            else if (grid[r][c] == 1) fresh++;\n        }\n    }\n    if (fresh == 0) return 0;\n    int minutes = 0;\n    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};\n    while (!q.empty() && fresh > 0) {\n        minutes++;\n        int sz = q.size();\n        for (int i = 0; i < sz; i++) {\n            auto [r, c] = q.front(); q.pop();\n            for (auto& d : dirs) {\n                int nr = r + d[0], nc = c + d[1];\n                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == 1) {\n                    grid[nr][nc] = 2; fresh--; q.push({nr, nc});\n                }\n            }\n        }\n    }\n    return fresh == 0 ? minutes : -1;\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "comment": "Executes tagged statement [comment] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp.",
      "mutate": "Executes tagged statement [mutate] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  }
];
})(typeof window !== 'undefined' ? window : global);
