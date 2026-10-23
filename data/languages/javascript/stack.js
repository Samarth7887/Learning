/**
 * SynapseCS Language-Specific Implementation: JAVASCRIPT - Stack
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['javascript'] = window.DSA_LANG_CODE['javascript'] || {};
  window.DSA_LANG_CODE['javascript']['stack'] = [
  {
    "id": "stack-array-impl",
    "code": [
      {
        "text": "class ArrayStack {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    constructor() { this.data = []; }",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    push(val) { this.data.push(val); }",
        "tag": "mutate",
        "lineNum": 3
      },
      {
        "text": "    pop() { return this.isEmpty() ? null : this.data.pop(); }",
        "tag": "mutate",
        "lineNum": 4
      },
      {
        "text": "    top() { return this.isEmpty() ? null : this.data[this.data.length - 1]; }",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    isEmpty() { return this.data.length === 0; }",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    size() { return this.data.length; }",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 8
      }
    ],
    "rawCode": "class ArrayStack {\n    constructor() { this.data = []; }\n    push(val) { this.data.push(val); }\n    pop() { return this.isEmpty() ? null : this.data.pop(); }\n    top() { return this.isEmpty() ? null : this.data[this.data.length - 1]; }\n    isEmpty() { return this.data.length === 0; }\n    size() { return this.data.length; }\n}",
    "explanations": {
      "step_1": "Initialize underlying contiguous array buffer.",
      "step_2": "push: append item to the end of the array buffer in O(1) amortized time.",
      "step_3": "pop: remove and return the last item in O(1) time after checking non-empty.",
      "step_4": "top: peek at index data.length - 1 without removing it.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "stack-ll-impl",
    "code": [
      {
        "text": "class LLStack {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    constructor() { this.head = null; this.count = 0; }",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    push(val) { this.head = { val, next: this.head }; this.count++; }",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    pop() {",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "        if (!this.head) return null;",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "        const val = this.head.val;",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "        this.head = this.head.next;",
        "tag": "pointer",
        "lineNum": 7
      },
      {
        "text": "        this.count--;",
        "tag": "exec",
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
        "text": "    top() { return this.head ? this.head.val : null; }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 12
      }
    ],
    "rawCode": "class LLStack {\n    constructor() { this.head = null; this.count = 0; }\n    push(val) { this.head = { val, next: this.head }; this.count++; }\n    pop() {\n        if (!this.head) return null;\n        const val = this.head.val;\n        this.head = this.head.next;\n        this.count--;\n        return val;\n    }\n    top() { return this.head ? this.head.val : null; }\n}",
    "explanations": {
      "step_1": "push: allocate new node whose next points to current head, re-anchoring head to the new node in O(1).",
      "step_2": "pop: save head.val, advance head = head.next, and decrement count in O(1).",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "stack-valid-parens",
    "code": [
      {
        "text": "function isValid(s) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    const stack = [];",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    const map = { ')': '(', '}': '{', ']': '[' };",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    for (const char of s) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        if (map[char]) {",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "            const top = stack.length ? stack.pop() : '#';",
        "tag": "mutate",
        "lineNum": 6
      },
      {
        "text": "            if (map[char] !== top) return false;",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "        } else {",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "            stack.push(char);",
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
        "text": "    return stack.length === 0;",
        "tag": "return",
        "lineNum": 12
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 13
      }
    ],
    "rawCode": "function isValid(s) {\n    const stack = [];\n    const map = { ')': '(', '}': '{', ']': '[' };\n    for (const char of s) {\n        if (map[char]) {\n            const top = stack.length ? stack.pop() : '#';\n            if (map[char] !== top) return false;\n        } else {\n            stack.push(char);\n        }\n    }\n    return stack.length === 0;\n}",
    "explanations": {
      "step_1": "Initialize LIFO stack and opening/closing bracket pairing map.",
      "step_2": "If current character is a closing bracket, pop from stack and verify matching pair.",
      "step_3": "If current character is an opening bracket, push onto stack.",
      "step_4": "At completion, stack must be completely empty (all opened brackets resolved).",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
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
        "text": "    constructor() {",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "        this.stack = [];",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "        this.minStack = [];",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    push(val) {",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "        this.stack.push(val);",
        "tag": "mutate",
        "lineNum": 7
      },
      {
        "text": "        const curMin = this.minStack.length === 0 ? val : Math.min(val, this.minStack[this.minStack.length - 1]);",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        this.minStack.push(curMin);",
        "tag": "mutate",
        "lineNum": 9
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    pop() { this.stack.pop(); this.minStack.pop(); }",
        "tag": "mutate",
        "lineNum": 11
      },
      {
        "text": "    top() { return this.stack[this.stack.length - 1]; }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    getMin() { return this.minStack[this.minStack.length - 1]; }",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 14
      }
    ],
    "rawCode": "class MinStack {\n    constructor() {\n        this.stack = [];\n        this.minStack = [];\n    }\n    push(val) {\n        this.stack.push(val);\n        const curMin = this.minStack.length === 0 ? val : Math.min(val, this.minStack[this.minStack.length - 1]);\n        this.minStack.push(curMin);\n    }\n    pop() { this.stack.pop(); this.minStack.pop(); }\n    top() { return this.stack[this.stack.length - 1]; }\n    getMin() { return this.minStack[this.minStack.length - 1]; }\n}",
    "explanations": {
      "step_1": "Maintain main storage stack and parallel minimum tracker stack.",
      "step_2": "push: append new element and compute new minimum relative to previous minStack top.",
      "step_3": "pop: remove from both stacks in lockstep, preserving previous minimum context.",
      "step_4": "getMin: return top of minStack in O(1) without scanning.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "stack-next-greater",
    "code": [
      {
        "text": "function nextGreaterElement(nums1, nums2) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    const map = new Map();",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    const stack = [];",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    for (const num of nums2) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        while (stack.length && stack[stack.length - 1] < num) {",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "            map.set(stack.pop(), num);",
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
        "text": "    return nums1.map(x => map.has(x) ? map.get(x) : -1);",
        "tag": "return",
        "lineNum": 10
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 11
      }
    ],
    "rawCode": "function nextGreaterElement(nums1, nums2) {\n    const map = new Map();\n    const stack = [];\n    for (const num of nums2) {\n        while (stack.length && stack[stack.length - 1] < num) {\n            map.set(stack.pop(), num);\n        }\n        stack.push(num);\n    }\n    return nums1.map(x => map.has(x) ? map.get(x) : -1);\n}",
    "explanations": {
      "step_1": "Initialize hash map to store results and stack to maintain decreasing elements.",
      "step_2": "Whenever current number is greater than stack top, resolve top's next greater element and pop it.",
      "step_3": "Map queries in nums1 directly to O(1) results from hash map.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "stack-daily-temperatures",
    "code": [
      {
        "text": "function dailyTemperatures(temperatures) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    const res = new Array(temperatures.length).fill(0);",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    const stack = [];",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    for (let i = 0; i < temperatures.length; i++) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "            const prevI = stack.pop();",
        "tag": "mutate",
        "lineNum": 6
      },
      {
        "text": "            res[prevI] = i - prevI;",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        stack.push(i);",
        "tag": "mutate",
        "lineNum": 9
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    return res;",
        "tag": "return",
        "lineNum": 11
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 12
      }
    ],
    "rawCode": "function dailyTemperatures(temperatures) {\n    const res = new Array(temperatures.length).fill(0);\n    const stack = [];\n    for (let i = 0; i < temperatures.length; i++) {\n        while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {\n            const prevI = stack.pop();\n            res[prevI] = i - prevI;\n        }\n        stack.push(i);\n    }\n    return res;\n}",
    "explanations": {
      "step_1": "Allocate answer array initialized with 0s and initialize monotonic stack of indices.",
      "step_2": "When today is warmer than stack top day, pop previous day and compute elapsed days (i - prev_i).",
      "step_3": "Push today's index onto the stack.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "stack-eval-rpn",
    "code": [
      {
        "text": "function evalRPN(tokens) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    const stack = [];",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    for (const t of tokens) {",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "        if (['+', '-', '*', '/'].includes(t)) {",
        "tag": "branch",
        "lineNum": 4
      },
      {
        "text": "            const b = stack.pop(), a = stack.pop();",
        "tag": "mutate",
        "lineNum": 5
      },
      {
        "text": "            if (t === '+') stack.push(a + b);",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "            else if (t === '-') stack.push(a - b);",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "            else if (t === '*') stack.push(a * b);",
        "tag": "branch",
        "lineNum": 8
      },
      {
        "text": "            else stack.push(Math.trunc(a / b));",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "        } else {",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "            stack.push(Number(t));",
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
        "text": "    return stack[0];",
        "tag": "return",
        "lineNum": 14
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 15
      }
    ],
    "rawCode": "function evalRPN(tokens) {\n    const stack = [];\n    for (const t of tokens) {\n        if (['+', '-', '*', '/'].includes(t)) {\n            const b = stack.pop(), a = stack.pop();\n            if (t === '+') stack.push(a + b);\n            else if (t === '-') stack.push(a - b);\n            else if (t === '*') stack.push(a * b);\n            else stack.push(Math.trunc(a / b));\n        } else {\n            stack.push(Number(t));\n        }\n    }\n    return stack[0];\n}",
    "explanations": {
      "step_1": "Pop second operand (b) first, then first operand (a). Order matters for subtraction and division.",
      "step_2": "Apply operation (a op b) and push computed result back onto the stack.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
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
        "text": "    constructor() { this.inSt = []; this.outSt = []; }",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    push(x) { this.inSt.push(x); }",
        "tag": "mutate",
        "lineNum": 3
      },
      {
        "text": "    pop() { this.peek(); return this.outSt.pop(); }",
        "tag": "mutate",
        "lineNum": 4
      },
      {
        "text": "    peek() {",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "        if (this.outSt.length === 0) {",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "            while (this.inSt.length) this.outSt.push(this.inSt.pop());",
        "tag": "loop",
        "lineNum": 7
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        return this.outSt[this.outSt.length - 1];",
        "tag": "return",
        "lineNum": 9
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    empty() { return this.inSt.length === 0 && this.outSt.length === 0; }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 12
      }
    ],
    "rawCode": "class MyQueue {\n    constructor() { this.inSt = []; this.outSt = []; }\n    push(x) { this.inSt.push(x); }\n    pop() { this.peek(); return this.outSt.pop(); }\n    peek() {\n        if (this.outSt.length === 0) {\n            while (this.inSt.length) this.outSt.push(this.inSt.pop());\n        }\n        return this.outSt[this.outSt.length - 1];\n    }\n    empty() { return this.inSt.length === 0 && this.outSt.length === 0; }\n}",
    "explanations": {
      "step_1": "push: simply append to in_stack in O(1).",
      "step_2": "peek/pop: if out_stack is dry, dump in_stack into out_stack, reversing the stack order into FIFO order.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "stack-simplify-path",
    "code": [
      {
        "text": "function simplifyPath(path) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    const stack = [];",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    const parts = path.split('/');",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    for (const part of parts) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        if (!part || part === '.') continue;",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "        if (part === '..') {",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "            if (stack.length) stack.pop();",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "        } else {",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "            stack.push(part);",
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
        "text": "    return '/' + stack.join('/');",
        "tag": "return",
        "lineNum": 12
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 13
      }
    ],
    "rawCode": "function simplifyPath(path) {\n    const stack = [];\n    const parts = path.split('/');\n    for (const part of parts) {\n        if (!part || part === '.') continue;\n        if (part === '..') {\n            if (stack.length) stack.pop();\n        } else {\n            stack.push(part);\n        }\n    }\n    return '/' + stack.join('/');\n}",
    "explanations": {
      "step_1": "Ignore consecutive slashes (empty string) and '.' current directory tokens.",
      "step_2": "When '..' appears, pop the parent directory from stack if stack is not at root.",
      "step_3": "Push actual directory names onto the stack.",
      "step_4": "Assemble canonical path by joining stack elements with leading root '/'.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "stack-histogram",
    "code": [
      {
        "text": "function largestRectangleArea(heights) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    const copy = [...heights, 0];",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    const stack = [];",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    let maxArea = 0;",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "    for (let i = 0; i < copy.length; i++) {",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "        while (stack.length && copy[stack[stack.length - 1]] >= copy[i]) {",
        "tag": "loop",
        "lineNum": 6
      },
      {
        "text": "            const h = copy[stack.pop()];",
        "tag": "mutate",
        "lineNum": 7
      },
      {
        "text": "            const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "            maxArea = Math.max(maxArea, h * w);",
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
    "rawCode": "function largestRectangleArea(heights) {\n    const copy = [...heights, 0];\n    const stack = [];\n    let maxArea = 0;\n    for (let i = 0; i < copy.length; i++) {\n        while (stack.length && copy[stack[stack.length - 1]] >= copy[i]) {\n            const h = copy[stack.pop()];\n            const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;\n            maxArea = Math.max(maxArea, h * w);\n        }\n        stack.push(i);\n    }\n    return maxArea;\n}",
    "explanations": {
      "step_1": "Append 0-height sentinel at end so all pending bars in stack are flushed.",
      "step_2": "While current bar is shorter than stack top, pop top: height is heights[popped], width extends between left boundary (stack.top) and right boundary (i).",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  }
];
})(typeof window !== 'undefined' ? window : global);
