/**
 * SynapseCS Language-Specific Implementation: JAVA - queue
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['java'] = window.DSA_LANG_CODE['java'] || {};
  window.DSA_LANG_CODE['java']['queue'] = [
  {
    "id": "queue-array-impl",
    "code": [
      {
        "text": "import java.util.*;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "public class ArrayQueue {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    private List<Integer> items = new ArrayList<>();",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "    private int frontIdx = 0;",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    public void enqueue(int val) { items.add(val); }",
        "tag": "mutate",
        "lineNum": 7
      },
      {
        "text": "    public Integer dequeue() {",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        if (isEmpty()) return null;",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "        return items.get(frontIdx++);",
        "tag": "return",
        "lineNum": 10
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    public Integer front() {",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "        if (isEmpty()) return null;",
        "tag": "branch",
        "lineNum": 13
      },
      {
        "text": "        return items.get(frontIdx);",
        "tag": "return",
        "lineNum": 14
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    public boolean isEmpty() { return frontIdx >= items.size(); }",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "    public List<Integer> toList() {",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "        return items.subList(frontIdx, items.size());",
        "tag": "return",
        "lineNum": 18
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 20
      }
    ],
    "rawCode": "import java.util.*;\n\npublic class ArrayQueue {\n    private List<Integer> items = new ArrayList<>();\n    private int frontIdx = 0;\n\n    public void enqueue(int val) { items.add(val); }\n    public Integer dequeue() {\n        if (isEmpty()) return null;\n        return items.get(frontIdx++);\n    }\n    public Integer front() {\n        if (isEmpty()) return null;\n        return items.get(frontIdx);\n    }\n    public boolean isEmpty() { return frontIdx >= items.size(); }\n    public List<Integer> toList() {\n        return items.subList(frontIdx, items.size());\n    }\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in java.",
      "def": "Executes tagged statement [def] in java.",
      "mutate": "Executes tagged statement [mutate] in java.",
      "branch": "Executes tagged statement [branch] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "queue-linkedlist-impl",
    "code": [
      {
        "text": "public class LinkedQueue {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    static class Node {",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "        int val; Node next;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "        Node(int v) { val = v; }",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    private Node head = null, tail = null;",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    public void enqueue(int v) {",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        Node n = new Node(v);",
        "tag": "init",
        "lineNum": 9
      },
      {
        "text": "        if (tail == null) head = tail = n;",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "        else { tail.next = n; tail = n; }",
        "tag": "branch",
        "lineNum": 11
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    public Integer dequeue() {",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        if (head == null) return null;",
        "tag": "branch",
        "lineNum": 14
      },
      {
        "text": "        int v = head.val;",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "        head = head.next;",
        "tag": "pointer",
        "lineNum": 16
      },
      {
        "text": "        if (head == null) tail = null;",
        "tag": "branch",
        "lineNum": 17
      },
      {
        "text": "        return v;",
        "tag": "return",
        "lineNum": 18
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 20
      }
    ],
    "rawCode": "public class LinkedQueue {\n    static class Node {\n        int val; Node next;\n        Node(int v) { val = v; }\n    }\n    private Node head = null, tail = null;\n\n    public void enqueue(int v) {\n        Node n = new Node(v);\n        if (tail == null) head = tail = n;\n        else { tail.next = n; tail = n; }\n    }\n    public Integer dequeue() {\n        if (head == null) return null;\n        int v = head.val;\n        head = head.next;\n        if (head == null) tail = null;\n        return v;\n    }\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "exec": "Executes tagged statement [exec] in java.",
      "branch": "Executes tagged statement [branch] in java.",
      "pointer": "Executes tagged statement [pointer] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
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
        "text": "    private int[] data;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    private int head = 0, count = 0, capacity;",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    public MyCircularQueue(int k) {",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "        data = new int[k];",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "        capacity = k;",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    public boolean enQueue(int value) {",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        if (isFull()) return false;",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "        data[(head + count) % capacity] = value;",
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
        "text": "    public boolean deQueue() {",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "        if (isEmpty()) return false;",
        "tag": "branch",
        "lineNum": 16
      },
      {
        "text": "        head = (head + 1) % capacity;",
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
        "text": "    public int Front() { return isEmpty() ? -1 : data[head]; }",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "    public int Rear() { return isEmpty() ? -1 : data[(head + count - 1) % capacity]; }",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "    public boolean isEmpty() { return count == 0; }",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "    public boolean isFull() { return count == capacity; }",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 25
      }
    ],
    "rawCode": "class MyCircularQueue {\n    private int[] data;\n    private int head = 0, count = 0, capacity;\n\n    public MyCircularQueue(int k) {\n        data = new int[k];\n        capacity = k;\n    }\n    public boolean enQueue(int value) {\n        if (isFull()) return false;\n        data[(head + count) % capacity] = value;\n        count++;\n        return true;\n    }\n    public boolean deQueue() {\n        if (isEmpty()) return false;\n        head = (head + 1) % capacity;\n        count--;\n        return true;\n    }\n    public int Front() { return isEmpty() ? -1 : data[head]; }\n    public int Rear() { return isEmpty() ? -1 : data[(head + count - 1) % capacity]; }\n    public boolean isEmpty() { return count == 0; }\n    public boolean isFull() { return count == capacity; }\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "exec": "Executes tagged statement [exec] in java.",
      "branch": "Executes tagged statement [branch] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
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
        "text": "    private int[] data;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    private int front = 0, count = 0, k;",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    public MyCircularDeque(int k) { this.k = k; data = new int[k]; }",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "    public boolean insertFront(int v) {",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "        if (isFull()) return false;",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "        front = (front - 1 + k) % k;",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "        data[front] = v;",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        count++;",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        return true;",
        "tag": "return",
        "lineNum": 10
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    public boolean insertLast(int v) {",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "        if (isFull()) return false;",
        "tag": "branch",
        "lineNum": 13
      },
      {
        "text": "        data[(front + count) % k] = v;",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "        count++;",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "        return true;",
        "tag": "return",
        "lineNum": 16
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "    public boolean deleteFront() {",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "        if (isEmpty()) return false;",
        "tag": "branch",
        "lineNum": 19
      },
      {
        "text": "        front = (front + 1) % k;",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "        count--;",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "        return true;",
        "tag": "return",
        "lineNum": 22
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "    public boolean deleteLast() {",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "        if (isEmpty()) return false;",
        "tag": "branch",
        "lineNum": 25
      },
      {
        "text": "        count--;",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "        return true;",
        "tag": "return",
        "lineNum": 27
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 28
      },
      {
        "text": "    public int getFront() { return isEmpty() ? -1 : data[front]; }",
        "tag": "exec",
        "lineNum": 29
      },
      {
        "text": "    public int getRear() { return isEmpty() ? -1 : data[(front + count - 1) % k]; }",
        "tag": "exec",
        "lineNum": 30
      },
      {
        "text": "    public boolean isEmpty() { return count == 0; }",
        "tag": "exec",
        "lineNum": 31
      },
      {
        "text": "    public boolean isFull() { return count == k; }",
        "tag": "exec",
        "lineNum": 32
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 33
      }
    ],
    "rawCode": "class MyCircularDeque {\n    private int[] data;\n    private int front = 0, count = 0, k;\n    public MyCircularDeque(int k) { this.k = k; data = new int[k]; }\n    public boolean insertFront(int v) {\n        if (isFull()) return false;\n        front = (front - 1 + k) % k;\n        data[front] = v;\n        count++;\n        return true;\n    }\n    public boolean insertLast(int v) {\n        if (isFull()) return false;\n        data[(front + count) % k] = v;\n        count++;\n        return true;\n    }\n    public boolean deleteFront() {\n        if (isEmpty()) return false;\n        front = (front + 1) % k;\n        count--;\n        return true;\n    }\n    public boolean deleteLast() {\n        if (isEmpty()) return false;\n        count--;\n        return true;\n    }\n    public int getFront() { return isEmpty() ? -1 : data[front]; }\n    public int getRear() { return isEmpty() ? -1 : data[(front + count - 1) % k]; }\n    public boolean isEmpty() { return count == 0; }\n    public boolean isFull() { return count == k; }\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "exec": "Executes tagged statement [exec] in java.",
      "branch": "Executes tagged statement [branch] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "stack-using-queues",
    "code": [
      {
        "text": "import java.util.*;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "class MyStack {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    private Queue<Integer> q = new LinkedList<>();",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    public void push(int x) {",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "        q.add(x);",
        "tag": "mutate",
        "lineNum": 7
      },
      {
        "text": "        for (int i = 0; i < q.size() - 1; i++) {",
        "tag": "loop",
        "lineNum": 8
      },
      {
        "text": "            q.add(q.remove());",
        "tag": "mutate",
        "lineNum": 9
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    public int pop() { return q.remove(); }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    public int top() { return q.peek(); }",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    public boolean empty() { return q.isEmpty(); }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 15
      }
    ],
    "rawCode": "import java.util.*;\n\nclass MyStack {\n    private Queue<Integer> q = new LinkedList<>();\n\n    public void push(int x) {\n        q.add(x);\n        for (int i = 0; i < q.size() - 1; i++) {\n            q.add(q.remove());\n        }\n    }\n    public int pop() { return q.remove(); }\n    public int top() { return q.peek(); }\n    public boolean empty() { return q.isEmpty(); }\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "exec": "Executes tagged statement [exec] in java.",
      "def": "Executes tagged statement [def] in java.",
      "mutate": "Executes tagged statement [mutate] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "sliding-window-max",
    "code": [
      {
        "text": "import java.util.*;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "class Solution {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    public int[] maxSlidingWindow(int[] nums, int k) {",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "        Deque<Integer> q = new ArrayDeque<>();",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "        int[] res = new int[nums.length - k + 1];",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "        int ri = 0;",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "        ",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        for (int i = 0; i < nums.length; i++) {",
        "tag": "loop",
        "lineNum": 9
      },
      {
        "text": "            if (!q.isEmpty() && q.peekFirst() < i - k + 1) q.pollFirst();",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "            while (!q.isEmpty() && nums[q.peekLast()] < nums[i]) q.pollLast();",
        "tag": "loop",
        "lineNum": 11
      },
      {
        "text": "            q.offerLast(i);",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "            if (i >= k - 1) res[ri++] = nums[q.peekFirst()];",
        "tag": "branch",
        "lineNum": 13
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "        return res;",
        "tag": "return",
        "lineNum": 15
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 17
      }
    ],
    "rawCode": "import java.util.*;\n\nclass Solution {\n    public int[] maxSlidingWindow(int[] nums, int k) {\n        Deque<Integer> q = new ArrayDeque<>();\n        int[] res = new int[nums.length - k + 1];\n        int ri = 0;\n        \n        for (int i = 0; i < nums.length; i++) {\n            if (!q.isEmpty() && q.peekFirst() < i - k + 1) q.pollFirst();\n            while (!q.isEmpty() && nums[q.peekLast()] < nums[i]) q.pollLast();\n            q.offerLast(i);\n            if (i >= k - 1) res[ri++] = nums[q.peekFirst()];\n        }\n        return res;\n    }\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in java.",
      "def": "Executes tagged statement [def] in java.",
      "branch": "Executes tagged statement [branch] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "first-unique-char",
    "code": [
      {
        "text": "class Solution {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    public int firstUniqChar(String s) {",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "        int[] freq = new int[26];",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "        for (char c : s.toCharArray()) freq[c - 'a']++;",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        for (int i = 0; i < s.length(); i++) {",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "            if (freq[s.charAt(i) - 'a'] == 1) return i;",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "        return -1;",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 10
      }
    ],
    "rawCode": "class Solution {\n    public int firstUniqChar(String s) {\n        int[] freq = new int[26];\n        for (char c : s.toCharArray()) freq[c - 'a']++;\n        for (int i = 0; i < s.length(); i++) {\n            if (freq[s.charAt(i) - 'a'] == 1) return i;\n        }\n        return -1;\n    }\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "exec": "Executes tagged statement [exec] in java.",
      "branch": "Executes tagged statement [branch] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "recent-counter",
    "code": [
      {
        "text": "import java.util.*;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "class RecentCounter {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    private Queue<Integer> q = new LinkedList<>();",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "    public int ping(int t) {",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "        q.add(t);",
        "tag": "mutate",
        "lineNum": 6
      },
      {
        "text": "        while (q.peek() < t - 3000) q.poll();",
        "tag": "loop",
        "lineNum": 7
      },
      {
        "text": "        return q.size();",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 10
      }
    ],
    "rawCode": "import java.util.*;\n\nclass RecentCounter {\n    private Queue<Integer> q = new LinkedList<>();\n    public int ping(int t) {\n        q.add(t);\n        while (q.peek() < t - 3000) q.poll();\n        return q.size();\n    }\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in java.",
      "def": "Executes tagged statement [def] in java.",
      "mutate": "Executes tagged statement [mutate] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "rotting-oranges",
    "code": [
      {
        "text": "import java.util.*;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "class Solution {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    public int orangesRotting(int[][] grid) {",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "        int rows = grid.length, cols = grid[0].length;",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "        Queue<int[]> q = new LinkedList<>();",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "        int fresh = 0;",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "        for (int r = 0; r < rows; r++) {",
        "tag": "loop",
        "lineNum": 8
      },
      {
        "text": "            for (int c = 0; c < cols; c++) {",
        "tag": "loop",
        "lineNum": 9
      },
      {
        "text": "                if (grid[r][c] == 2) q.offer(new int[]{r, c});",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "                else if (grid[r][c] == 1) fresh++;",
        "tag": "branch",
        "lineNum": 11
      },
      {
        "text": "            }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        if (fresh == 0) return 0;",
        "tag": "branch",
        "lineNum": 14
      },
      {
        "text": "        int minutes = 0;",
        "tag": "init",
        "lineNum": 15
      },
      {
        "text": "        int[][] dirs = {{0,1},{0,-1},{1,0},{-1,0}};",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "        while (!q.isEmpty() && fresh > 0) {",
        "tag": "loop",
        "lineNum": 17
      },
      {
        "text": "            minutes++;",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "            int size = q.size();",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "            for (int i = 0; i < size; i++) {",
        "tag": "loop",
        "lineNum": 20
      },
      {
        "text": "                int[] curr = q.poll();",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "                for (int[] d : dirs) {",
        "tag": "loop",
        "lineNum": 22
      },
      {
        "text": "                    int nr = curr[0] + d[0], nc = curr[1] + d[1];",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "                    if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == 1) {",
        "tag": "branch",
        "lineNum": 24
      },
      {
        "text": "                        grid[nr][nc] = 2; fresh--; q.offer(new int[]{nr, nc});",
        "tag": "init",
        "lineNum": 25
      },
      {
        "text": "                    }",
        "tag": "exec",
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
        "text": "        return fresh == 0 ? minutes : -1;",
        "tag": "return",
        "lineNum": 30
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 31
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 32
      }
    ],
    "rawCode": "import java.util.*;\n\nclass Solution {\n    public int orangesRotting(int[][] grid) {\n        int rows = grid.length, cols = grid[0].length;\n        Queue<int[]> q = new LinkedList<>();\n        int fresh = 0;\n        for (int r = 0; r < rows; r++) {\n            for (int c = 0; c < cols; c++) {\n                if (grid[r][c] == 2) q.offer(new int[]{r, c});\n                else if (grid[r][c] == 1) fresh++;\n            }\n        }\n        if (fresh == 0) return 0;\n        int minutes = 0;\n        int[][] dirs = {{0,1},{0,-1},{1,0},{-1,0}};\n        while (!q.isEmpty() && fresh > 0) {\n            minutes++;\n            int size = q.size();\n            for (int i = 0; i < size; i++) {\n                int[] curr = q.poll();\n                for (int[] d : dirs) {\n                    int nr = curr[0] + d[0], nc = curr[1] + d[1];\n                    if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == 1) {\n                        grid[nr][nc] = 2; fresh--; q.offer(new int[]{nr, nc});\n                    }\n                }\n            }\n        }\n        return fresh == 0 ? minutes : -1;\n    }\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in java.",
      "def": "Executes tagged statement [def] in java.",
      "branch": "Executes tagged statement [branch] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  }
];
})(typeof window !== 'undefined' ? window : global);
