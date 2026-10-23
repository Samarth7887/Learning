/**
 * SynapseCS Language-Specific Implementation: JAVA - stack
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['java'] = window.DSA_LANG_CODE['java'] || {};
  window.DSA_LANG_CODE['java']['stack'] = [
  {
    "id": "stack-array-impl",
    "code": [
      {
        "text": "public class ArrayStack {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    private List<Integer> data = new ArrayList<>();",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    public void push(int val) { data.add(val); }",
        "tag": "mutate",
        "lineNum": 3
      },
      {
        "text": "    public int pop() {",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "        if (isEmpty()) throw new EmptyStackException();",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "        return data.remove(data.size() - 1);",
        "tag": "return",
        "lineNum": 6
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    public int top() {",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        if (isEmpty()) throw new EmptyStackException();",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "        return data.get(data.size() - 1);",
        "tag": "return",
        "lineNum": 10
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    public boolean isEmpty() { return data.isEmpty(); }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    public int size() { return data.size(); }",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 14
      }
    ],
    "rawCode": "public class ArrayStack {\n    private List<Integer> data = new ArrayList<>();\n    public void push(int val) { data.add(val); }\n    public int pop() {\n        if (isEmpty()) throw new EmptyStackException();\n        return data.remove(data.size() - 1);\n    }\n    public int top() {\n        if (isEmpty()) throw new EmptyStackException();\n        return data.get(data.size() - 1);\n    }\n    public boolean isEmpty() { return data.isEmpty(); }\n    public int size() { return data.size(); }\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "mutate": "Executes tagged statement [mutate] in java.",
      "exec": "Executes tagged statement [exec] in java.",
      "branch": "Executes tagged statement [branch] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "stack-ll-impl",
    "code": [
      {
        "text": "public class LLStack {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    private class Node { int val; Node next; Node(int v, Node n) { val = v; next = n; } }",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    private Node head = null;",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    private int count = 0;",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "    public void push(int val) { head = new Node(val, head); count++; }",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "    public int pop() {",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "        if (head == null) throw new EmptyStackException();",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "        int val = head.val; head = head.next; count--;",
        "tag": "pointer",
        "lineNum": 8
      },
      {
        "text": "        return val;",
        "tag": "return",
        "lineNum": 9
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    public int top() { return (head != null) ? head.val : -1; }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 12
      }
    ],
    "rawCode": "public class LLStack {\n    private class Node { int val; Node next; Node(int v, Node n) { val = v; next = n; } }\n    private Node head = null;\n    private int count = 0;\n    public void push(int val) { head = new Node(val, head); count++; }\n    public int pop() {\n        if (head == null) throw new EmptyStackException();\n        int val = head.val; head = head.next; count--;\n        return val;\n    }\n    public int top() { return (head != null) ? head.val : -1; }\n}",
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
    "id": "stack-valid-parens",
    "code": [
      {
        "text": "public static boolean isValid(String s) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    Deque<Character> stack = new ArrayDeque<>();",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    for (char c : s.toCharArray()) {",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "        if (c == '(') stack.push(')');",
        "tag": "branch",
        "lineNum": 4
      },
      {
        "text": "        else if (c == '{') stack.push('}');",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "        else if (c == '[') stack.push(']');",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "        else if (stack.isEmpty() || stack.pop() != c) return false;",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    return stack.isEmpty();",
        "tag": "return",
        "lineNum": 9
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 10
      }
    ],
    "rawCode": "public static boolean isValid(String s) {\n    Deque<Character> stack = new ArrayDeque<>();\n    for (char c : s.toCharArray()) {\n        if (c == '(') stack.push(')');\n        else if (c == '{') stack.push('}');\n        else if (c == '[') stack.push(']');\n        else if (stack.isEmpty() || stack.pop() != c) return false;\n    }\n    return stack.isEmpty();\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "branch": "Executes tagged statement [branch] in java.",
      "exec": "Executes tagged statement [exec] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "stack-min",
    "code": [
      {
        "text": "class MinStack {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    private Deque<Integer> stack = new ArrayDeque<>();",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    private Deque<Integer> minStack = new ArrayDeque<>();",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    public void push(int val) {",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "        stack.push(val);",
        "tag": "mutate",
        "lineNum": 5
      },
      {
        "text": "        int curMin = minStack.isEmpty() ? val : Math.min(val, minStack.peek());",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "        minStack.push(curMin);",
        "tag": "mutate",
        "lineNum": 7
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    public void pop() { stack.pop(); minStack.pop(); }",
        "tag": "mutate",
        "lineNum": 9
      },
      {
        "text": "    public int top() { return stack.peek(); }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    public int getMin() { return minStack.peek(); }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 12
      }
    ],
    "rawCode": "class MinStack {\n    private Deque<Integer> stack = new ArrayDeque<>();\n    private Deque<Integer> minStack = new ArrayDeque<>();\n    public void push(int val) {\n        stack.push(val);\n        int curMin = minStack.isEmpty() ? val : Math.min(val, minStack.peek());\n        minStack.push(curMin);\n    }\n    public void pop() { stack.pop(); minStack.pop(); }\n    public int top() { return stack.peek(); }\n    public int getMin() { return minStack.peek(); }\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "def": "Executes tagged statement [def] in java.",
      "exec": "Executes tagged statement [exec] in java.",
      "mutate": "Executes tagged statement [mutate] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "stack-next-greater",
    "code": [
      {
        "text": "public static int[] nextGreaterElement(int[] nums1, int[] nums2) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    Map<Integer, Integer> map = new HashMap<>();",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    Deque<Integer> stack = new ArrayDeque<>();",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    for (int num : nums2) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        while (!stack.isEmpty() && stack.peek() < num) {",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "            map.put(stack.pop(), num);",
        "tag": "mutate",
        "lineNum": 6
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "        stack.push(num);",
        "tag": "mutate",
        "lineNum": 8
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    int[] res = new int[nums1.length];",
        "tag": "init",
        "lineNum": 10
      },
      {
        "text": "    for (int i = 0; i < nums1.length; i++) res[i] = map.getOrDefault(nums1[i], -1);",
        "tag": "loop",
        "lineNum": 11
      },
      {
        "text": "    return res;",
        "tag": "return",
        "lineNum": 12
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 13
      }
    ],
    "rawCode": "public static int[] nextGreaterElement(int[] nums1, int[] nums2) {\n    Map<Integer, Integer> map = new HashMap<>();\n    Deque<Integer> stack = new ArrayDeque<>();\n    for (int num : nums2) {\n        while (!stack.isEmpty() && stack.peek() < num) {\n            map.put(stack.pop(), num);\n        }\n        stack.push(num);\n    }\n    int[] res = new int[nums1.length];\n    for (int i = 0; i < nums1.length; i++) res[i] = map.getOrDefault(nums1[i], -1);\n    return res;\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "mutate": "Executes tagged statement [mutate] in java.",
      "exec": "Executes tagged statement [exec] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "stack-daily-temperatures",
    "code": [
      {
        "text": "public static int[] dailyTemperatures(int[] temperatures) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    int n = temperatures.length;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    int[] res = new int[n];",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    Deque<Integer> stack = new ArrayDeque<>();",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "    for (int i = 0; i < n; i++) {",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "        while (!stack.isEmpty() && temperatures[stack.peek()] < temperatures[i]) {",
        "tag": "loop",
        "lineNum": 6
      },
      {
        "text": "            int prevI = stack.pop();",
        "tag": "mutate",
        "lineNum": 7
      },
      {
        "text": "            res[prevI] = i - prevI;",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        stack.push(i);",
        "tag": "mutate",
        "lineNum": 10
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    return res;",
        "tag": "return",
        "lineNum": 12
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 13
      }
    ],
    "rawCode": "public static int[] dailyTemperatures(int[] temperatures) {\n    int n = temperatures.length;\n    int[] res = new int[n];\n    Deque<Integer> stack = new ArrayDeque<>();\n    for (int i = 0; i < n; i++) {\n        while (!stack.isEmpty() && temperatures[stack.peek()] < temperatures[i]) {\n            int prevI = stack.pop();\n            res[prevI] = i - prevI;\n        }\n        stack.push(i);\n    }\n    return res;\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "exec": "Executes tagged statement [exec] in java.",
      "mutate": "Executes tagged statement [mutate] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "stack-eval-rpn",
    "code": [
      {
        "text": "public static int evalRPN(String[] tokens) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    Deque<Integer> stack = new ArrayDeque<>();",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    for (String s : tokens) {",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "        if (\"+-*/\".contains(s) && s.length() == 1) {",
        "tag": "branch",
        "lineNum": 4
      },
      {
        "text": "            int b = stack.pop(), a = stack.pop();",
        "tag": "mutate",
        "lineNum": 5
      },
      {
        "text": "            if (s.equals(\"+\")) stack.push(a + b);",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "            else if (s.equals(\"-\")) stack.push(a - b);",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "            else if (s.equals(\"*\")) stack.push(a * b);",
        "tag": "branch",
        "lineNum": 8
      },
      {
        "text": "            else stack.push(a / b);",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "        } else {",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "            stack.push(Integer.parseInt(s));",
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
        "text": "    return stack.pop();",
        "tag": "return",
        "lineNum": 14
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 15
      }
    ],
    "rawCode": "public static int evalRPN(String[] tokens) {\n    Deque<Integer> stack = new ArrayDeque<>();\n    for (String s : tokens) {\n        if (\"+-*/\".contains(s) && s.length() == 1) {\n            int b = stack.pop(), a = stack.pop();\n            if (s.equals(\"+\")) stack.push(a + b);\n            else if (s.equals(\"-\")) stack.push(a - b);\n            else if (s.equals(\"*\")) stack.push(a * b);\n            else stack.push(a / b);\n        } else {\n            stack.push(Integer.parseInt(s));\n        }\n    }\n    return stack.pop();\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "branch": "Executes tagged statement [branch] in java.",
      "mutate": "Executes tagged statement [mutate] in java.",
      "exec": "Executes tagged statement [exec] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "stack-queue-using-stacks",
    "code": [
      {
        "text": "class MyQueue {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    private Deque<Integer> inSt = new ArrayDeque<>();",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    private Deque<Integer> outSt = new ArrayDeque<>();",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    public void push(int x) { inSt.push(x); }",
        "tag": "mutate",
        "lineNum": 4
      },
      {
        "text": "    public int pop() { peek(); return outSt.pop(); }",
        "tag": "mutate",
        "lineNum": 5
      },
      {
        "text": "    public int peek() {",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "        if (outSt.isEmpty()) {",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "            while (!inSt.isEmpty()) outSt.push(inSt.pop());",
        "tag": "loop",
        "lineNum": 8
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        return outSt.peek();",
        "tag": "return",
        "lineNum": 10
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    public boolean empty() { return inSt.isEmpty() && outSt.isEmpty(); }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 13
      }
    ],
    "rawCode": "class MyQueue {\n    private Deque<Integer> inSt = new ArrayDeque<>();\n    private Deque<Integer> outSt = new ArrayDeque<>();\n    public void push(int x) { inSt.push(x); }\n    public int pop() { peek(); return outSt.pop(); }\n    public int peek() {\n        if (outSt.isEmpty()) {\n            while (!inSt.isEmpty()) outSt.push(inSt.pop());\n        }\n        return outSt.peek();\n    }\n    public boolean empty() { return inSt.isEmpty() && outSt.isEmpty(); }\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "mutate": "Executes tagged statement [mutate] in java.",
      "exec": "Executes tagged statement [exec] in java.",
      "branch": "Executes tagged statement [branch] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "stack-simplify-path",
    "code": [
      {
        "text": "public static String simplifyPath(String path) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    Deque<String> stack = new ArrayDeque<>();",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    for (String part : path.split(\"/\")) {",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "        if (part.isEmpty() || part.equals(\".\")) continue;",
        "tag": "branch",
        "lineNum": 4
      },
      {
        "text": "        if (part.equals(\"..\")) {",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "            if (!stack.isEmpty()) stack.pop();",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "        } else {",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "            stack.push(part);",
        "tag": "mutate",
        "lineNum": 8
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    List<String> list = new ArrayList<>(stack);",
        "tag": "init",
        "lineNum": 11
      },
      {
        "text": "    Collections.reverse(list);",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    return \"/\" + String.join(\"/\", list);",
        "tag": "return",
        "lineNum": 13
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 14
      }
    ],
    "rawCode": "public static String simplifyPath(String path) {\n    Deque<String> stack = new ArrayDeque<>();\n    for (String part : path.split(\"/\")) {\n        if (part.isEmpty() || part.equals(\".\")) continue;\n        if (part.equals(\"..\")) {\n            if (!stack.isEmpty()) stack.pop();\n        } else {\n            stack.push(part);\n        }\n    }\n    List<String> list = new ArrayList<>(stack);\n    Collections.reverse(list);\n    return \"/\" + String.join(\"/\", list);\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "branch": "Executes tagged statement [branch] in java.",
      "exec": "Executes tagged statement [exec] in java.",
      "mutate": "Executes tagged statement [mutate] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "stack-histogram",
    "code": [
      {
        "text": "public static int largestRectangleArea(int[] heights) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    int n = heights.length, maxArea = 0;",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    Deque<Integer> stack = new ArrayDeque<>();",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    for (int i = 0; i <= n; i++) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        int h = (i == n) ? 0 : heights[i];",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "        while (!stack.isEmpty() && heights[stack.peek()] >= h) {",
        "tag": "loop",
        "lineNum": 6
      },
      {
        "text": "            int height = heights[stack.pop()];",
        "tag": "mutate",
        "lineNum": 7
      },
      {
        "text": "            int width = stack.isEmpty() ? i : i - stack.peek() - 1;",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "            maxArea = Math.max(maxArea, height * width);",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        stack.push(i);",
        "tag": "mutate",
        "lineNum": 11
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    return maxArea;",
        "tag": "return",
        "lineNum": 13
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 14
      }
    ],
    "rawCode": "public static int largestRectangleArea(int[] heights) {\n    int n = heights.length, maxArea = 0;\n    Deque<Integer> stack = new ArrayDeque<>();\n    for (int i = 0; i <= n; i++) {\n        int h = (i == n) ? 0 : heights[i];\n        while (!stack.isEmpty() && heights[stack.peek()] >= h) {\n            int height = heights[stack.pop()];\n            int width = stack.isEmpty() ? i : i - stack.peek() - 1;\n            maxArea = Math.max(maxArea, height * width);\n        }\n        stack.push(i);\n    }\n    return maxArea;\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "exec": "Executes tagged statement [exec] in java.",
      "mutate": "Executes tagged statement [mutate] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  }
];
})(typeof window !== 'undefined' ? window : global);
