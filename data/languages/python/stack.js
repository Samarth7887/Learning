/**
 * SynapseCS Language-Specific Implementation: PYTHON - Stack
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['python'] = window.DSA_LANG_CODE['python'] || {};
  window.DSA_LANG_CODE['python']['stack'] = [
  {
    "id": "stack-array-impl",
    "code": [
      {
        "text": "class ArrayStack:",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    def __init__(self):",
        "tag": "def",
        "lineNum": 2
      },
      {
        "text": "        self.data = []",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    def push(self, val):",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "        self.data.append(val)",
        "tag": "mutate",
        "lineNum": 5
      },
      {
        "text": "    def pop(self):",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "        if not self.is_empty():",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "            return self.data.pop()",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "        return None",
        "tag": "return",
        "lineNum": 9
      },
      {
        "text": "    def top(self):",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "        return self.data[-1] if not self.is_empty() else None",
        "tag": "return",
        "lineNum": 11
      },
      {
        "text": "    def is_empty(self):",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "        return len(self.data) == 0",
        "tag": "return",
        "lineNum": 13
      },
      {
        "text": "    def size(self):",
        "tag": "def",
        "lineNum": 14
      },
      {
        "text": "        return len(self.data)",
        "tag": "return",
        "lineNum": 15
      }
    ],
    "rawCode": "class ArrayStack:\n    def __init__(self):\n        self.data = []\n    def push(self, val):\n        self.data.append(val)\n    def pop(self):\n        if not self.is_empty():\n            return self.data.pop()\n        return None\n    def top(self):\n        return self.data[-1] if not self.is_empty() else None\n    def is_empty(self):\n        return len(self.data) == 0\n    def size(self):\n        return len(self.data)",
    "explanations": {
      "step_1": "Initialize underlying contiguous array buffer.",
      "step_2": "push: append item to the end of the array buffer in O(1) amortized time.",
      "step_3": "pop: remove and return the last item in O(1) time after checking non-empty.",
      "step_4": "top: peek at index data.length - 1 without removing it.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "stack-ll-impl",
    "code": [
      {
        "text": "class Node:",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    def __init__(self, val, next=None):",
        "tag": "def",
        "lineNum": 2
      },
      {
        "text": "        self.val = val",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "        self.next = next",
        "tag": "pointer",
        "lineNum": 4
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "class LLStack:",
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
        "text": "        self.count = 0",
        "tag": "init",
        "lineNum": 9
      },
      {
        "text": "    def push(self, val):",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "        self.head = Node(val, self.head)",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "        self.count += 1",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    def pop(self):",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "        if not self.head: return None",
        "tag": "branch",
        "lineNum": 14
      },
      {
        "text": "        val = self.head.val",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "        self.head = self.head.next",
        "tag": "pointer",
        "lineNum": 16
      },
      {
        "text": "        self.count -= 1",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "        return val",
        "tag": "return",
        "lineNum": 18
      },
      {
        "text": "    def top(self):",
        "tag": "def",
        "lineNum": 19
      },
      {
        "text": "        return self.head.val if self.head else None",
        "tag": "return",
        "lineNum": 20
      }
    ],
    "rawCode": "class Node:\n    def __init__(self, val, next=None):\n        self.val = val\n        self.next = next\n\nclass LLStack:\n    def __init__(self):\n        self.head = None\n        self.count = 0\n    def push(self, val):\n        self.head = Node(val, self.head)\n        self.count += 1\n    def pop(self):\n        if not self.head: return None\n        val = self.head.val\n        self.head = self.head.next\n        self.count -= 1\n        return val\n    def top(self):\n        return self.head.val if self.head else None",
    "explanations": {
      "step_1": "push: allocate new node whose next points to current head, re-anchoring head to the new node in O(1).",
      "step_2": "pop: save head.val, advance head = head.next, and decrement count in O(1).",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "stack-valid-parens",
    "code": [
      {
        "text": "def is_valid(s: str) -> bool:",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    stack = []",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    mapping = {\")\": \"(\", \"}\": \"{\", \"]\": \"[\"}",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    for char in s:",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        if char in mapping:",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "            top_element = stack.pop() if stack else '#'",
        "tag": "mutate",
        "lineNum": 6
      },
      {
        "text": "            if mapping[char] != top_element:",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "                return False",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "        else:",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "            stack.append(char)",
        "tag": "mutate",
        "lineNum": 10
      },
      {
        "text": "    return not stack",
        "tag": "return",
        "lineNum": 11
      }
    ],
    "rawCode": "def is_valid(s: str) -> bool:\n    stack = []\n    mapping = {\")\": \"(\", \"}\": \"{\", \"]\": \"[\"}\n    for char in s:\n        if char in mapping:\n            top_element = stack.pop() if stack else '#'\n            if mapping[char] != top_element:\n                return False\n        else:\n            stack.append(char)\n    return not stack",
    "explanations": {
      "step_1": "Initialize LIFO stack and opening/closing bracket pairing map.",
      "step_2": "If current character is a closing bracket, pop from stack and verify matching pair.",
      "step_3": "If current character is an opening bracket, push onto stack.",
      "step_4": "At completion, stack must be completely empty (all opened brackets resolved).",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "stack-min",
    "code": [
      {
        "text": "class MinStack:",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    def __init__(self):",
        "tag": "def",
        "lineNum": 2
      },
      {
        "text": "        self.stack = []",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "        self.min_stack = []",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    def push(self, val: int) -> None:",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "        self.stack.append(val)",
        "tag": "mutate",
        "lineNum": 7
      },
      {
        "text": "        current_min = min(val, self.min_stack[-1] if self.min_stack else val)",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        self.min_stack.append(current_min)",
        "tag": "mutate",
        "lineNum": 9
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    def pop(self) -> None:",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "        self.stack.pop()",
        "tag": "mutate",
        "lineNum": 12
      },
      {
        "text": "        self.min_stack.pop()",
        "tag": "mutate",
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
        "text": "        return self.stack[-1]",
        "tag": "return",
        "lineNum": 16
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "    def getMin(self) -> int:",
        "tag": "def",
        "lineNum": 18
      },
      {
        "text": "        return self.min_stack[-1]",
        "tag": "return",
        "lineNum": 19
      }
    ],
    "rawCode": "class MinStack:\n    def __init__(self):\n        self.stack = []\n        self.min_stack = []\n\n    def push(self, val: int) -> None:\n        self.stack.append(val)\n        current_min = min(val, self.min_stack[-1] if self.min_stack else val)\n        self.min_stack.append(current_min)\n\n    def pop(self) -> None:\n        self.stack.pop()\n        self.min_stack.pop()\n\n    def top(self) -> int:\n        return self.stack[-1]\n\n    def getMin(self) -> int:\n        return self.min_stack[-1]",
    "explanations": {
      "step_1": "Maintain main storage stack and parallel minimum tracker stack.",
      "step_2": "push: append new element and compute new minimum relative to previous minStack top.",
      "step_3": "pop: remove from both stacks in lockstep, preserving previous minimum context.",
      "step_4": "getMin: return top of minStack in O(1) without scanning.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "stack-next-greater",
    "code": [
      {
        "text": "def next_greater_element(nums1, nums2):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    mapping = {}",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    stack = []",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    for num in nums2:",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        while stack and stack[-1] < num:",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "            mapping[stack.pop()] = num",
        "tag": "mutate",
        "lineNum": 6
      },
      {
        "text": "        stack.append(num)",
        "tag": "mutate",
        "lineNum": 7
      },
      {
        "text": "    return [mapping.get(x, -1) for x in nums1]",
        "tag": "return",
        "lineNum": 8
      }
    ],
    "rawCode": "def next_greater_element(nums1, nums2):\n    mapping = {}\n    stack = []\n    for num in nums2:\n        while stack and stack[-1] < num:\n            mapping[stack.pop()] = num\n        stack.append(num)\n    return [mapping.get(x, -1) for x in nums1]",
    "explanations": {
      "step_1": "Initialize hash map to store results and stack to maintain decreasing elements.",
      "step_2": "Whenever current number is greater than stack top, resolve top's next greater element and pop it.",
      "step_3": "Map queries in nums1 directly to O(1) results from hash map.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "stack-daily-temperatures",
    "code": [
      {
        "text": "def daily_temperatures(temperatures):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    res = [0] * len(temperatures)",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    stack = []  # indices of unresolved days",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    for i, t in enumerate(temperatures):",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        while stack and temperatures[stack[-1]] < t:",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "            prev_i = stack.pop()",
        "tag": "mutate",
        "lineNum": 6
      },
      {
        "text": "            res[prev_i] = i - prev_i",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "        stack.append(i)",
        "tag": "mutate",
        "lineNum": 8
      },
      {
        "text": "    return res",
        "tag": "return",
        "lineNum": 9
      }
    ],
    "rawCode": "def daily_temperatures(temperatures):\n    res = [0] * len(temperatures)\n    stack = []  # indices of unresolved days\n    for i, t in enumerate(temperatures):\n        while stack and temperatures[stack[-1]] < t:\n            prev_i = stack.pop()\n            res[prev_i] = i - prev_i\n        stack.append(i)\n    return res",
    "explanations": {
      "step_1": "Allocate answer array initialized with 0s and initialize monotonic stack of indices.",
      "step_2": "When today is warmer than stack top day, pop previous day and compute elapsed days (i - prev_i).",
      "step_3": "Push today's index onto the stack.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "stack-eval-rpn",
    "code": [
      {
        "text": "def eval_rpn(tokens):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    stack = []",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    for token in tokens:",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "        if token in \"+-*/\":",
        "tag": "branch",
        "lineNum": 4
      },
      {
        "text": "            b = stack.pop()",
        "tag": "mutate",
        "lineNum": 5
      },
      {
        "text": "            a = stack.pop()",
        "tag": "mutate",
        "lineNum": 6
      },
      {
        "text": "            if token == '+': stack.append(a + b)",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "            elif token == '-': stack.append(a - b)",
        "tag": "mutate",
        "lineNum": 8
      },
      {
        "text": "            elif token == '*': stack.append(a * b)",
        "tag": "mutate",
        "lineNum": 9
      },
      {
        "text": "            else: stack.append(int(a / b))  # truncate toward zero",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "        else:",
        "tag": "branch",
        "lineNum": 11
      },
      {
        "text": "            stack.append(int(token))",
        "tag": "mutate",
        "lineNum": 12
      },
      {
        "text": "    return stack[0]",
        "tag": "return",
        "lineNum": 13
      }
    ],
    "rawCode": "def eval_rpn(tokens):\n    stack = []\n    for token in tokens:\n        if token in \"+-*/\":\n            b = stack.pop()\n            a = stack.pop()\n            if token == '+': stack.append(a + b)\n            elif token == '-': stack.append(a - b)\n            elif token == '*': stack.append(a * b)\n            else: stack.append(int(a / b))  # truncate toward zero\n        else:\n            stack.append(int(token))\n    return stack[0]",
    "explanations": {
      "step_1": "Pop second operand (b) first, then first operand (a). Order matters for subtraction and division.",
      "step_2": "Apply operation (a op b) and push computed result back onto the stack.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "stack-queue-using-stacks",
    "code": [
      {
        "text": "class MyQueue:",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    def __init__(self):",
        "tag": "def",
        "lineNum": 2
      },
      {
        "text": "        self.in_st = []",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "        self.out_st = []",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "    def push(self, x: int) -> None:",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "        self.in_st.append(x)",
        "tag": "mutate",
        "lineNum": 6
      },
      {
        "text": "    def pop(self) -> int:",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "        self.peek()",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        return self.out_st.pop()",
        "tag": "return",
        "lineNum": 9
      },
      {
        "text": "    def peek(self) -> int:",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "        if not self.out_st:",
        "tag": "branch",
        "lineNum": 11
      },
      {
        "text": "            while self.in_st:",
        "tag": "loop",
        "lineNum": 12
      },
      {
        "text": "                self.out_st.append(self.in_st.pop())",
        "tag": "mutate",
        "lineNum": 13
      },
      {
        "text": "        return self.out_st[-1]",
        "tag": "return",
        "lineNum": 14
      },
      {
        "text": "    def empty(self) -> bool:",
        "tag": "def",
        "lineNum": 15
      },
      {
        "text": "        return not self.in_st and not self.out_st",
        "tag": "return",
        "lineNum": 16
      }
    ],
    "rawCode": "class MyQueue:\n    def __init__(self):\n        self.in_st = []\n        self.out_st = []\n    def push(self, x: int) -> None:\n        self.in_st.append(x)\n    def pop(self) -> int:\n        self.peek()\n        return self.out_st.pop()\n    def peek(self) -> int:\n        if not self.out_st:\n            while self.in_st:\n                self.out_st.append(self.in_st.pop())\n        return self.out_st[-1]\n    def empty(self) -> bool:\n        return not self.in_st and not self.out_st",
    "explanations": {
      "step_1": "push: simply append to in_stack in O(1).",
      "step_2": "peek/pop: if out_stack is dry, dump in_stack into out_stack, reversing the stack order into FIFO order.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "stack-simplify-path",
    "code": [
      {
        "text": "def simplify_path(path: str) -> str:",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    stack = []",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    for part in path.split('/'):",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "        if part == '' or part == '.':",
        "tag": "branch",
        "lineNum": 4
      },
      {
        "text": "            continue",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "        elif part == '..':",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "            if stack:",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "                stack.pop()",
        "tag": "mutate",
        "lineNum": 8
      },
      {
        "text": "        else:",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "            stack.append(part)",
        "tag": "mutate",
        "lineNum": 10
      },
      {
        "text": "    return '/' + '/'.join(stack)",
        "tag": "return",
        "lineNum": 11
      }
    ],
    "rawCode": "def simplify_path(path: str) -> str:\n    stack = []\n    for part in path.split('/'):\n        if part == '' or part == '.':\n            continue\n        elif part == '..':\n            if stack:\n                stack.pop()\n        else:\n            stack.append(part)\n    return '/' + '/'.join(stack)",
    "explanations": {
      "step_1": "Ignore consecutive slashes (empty string) and '.' current directory tokens.",
      "step_2": "When '..' appears, pop the parent directory from stack if stack is not at root.",
      "step_3": "Push actual directory names onto the stack.",
      "step_4": "Assemble canonical path by joining stack elements with leading root '/'.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "stack-histogram",
    "code": [
      {
        "text": "def largest_rectangle_area(heights):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    heights.append(0)  # Sentinel to flush remaining bars",
        "tag": "mutate",
        "lineNum": 2
      },
      {
        "text": "    stack = [-1]       # Left boundary sentinel",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    max_area = 0",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "    for i, h in enumerate(heights):",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "        while stack[-1] != -1 and heights[stack[-1]] >= h:",
        "tag": "loop",
        "lineNum": 6
      },
      {
        "text": "            height = heights[stack.pop()]",
        "tag": "mutate",
        "lineNum": 7
      },
      {
        "text": "            width = i - stack[-1] - 1",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "            max_area = max(max_area, height * width)",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        stack.append(i)",
        "tag": "mutate",
        "lineNum": 10
      },
      {
        "text": "    heights.pop()",
        "tag": "mutate",
        "lineNum": 11
      },
      {
        "text": "    return max_area",
        "tag": "return",
        "lineNum": 12
      }
    ],
    "rawCode": "def largest_rectangle_area(heights):\n    heights.append(0)  # Sentinel to flush remaining bars\n    stack = [-1]       # Left boundary sentinel\n    max_area = 0\n    for i, h in enumerate(heights):\n        while stack[-1] != -1 and heights[stack[-1]] >= h:\n            height = heights[stack.pop()]\n            width = i - stack[-1] - 1\n            max_area = max(max_area, height * width)\n        stack.append(i)\n    heights.pop()\n    return max_area",
    "explanations": {
      "step_1": "Append 0-height sentinel at end so all pending bars in stack are flushed.",
      "step_2": "While current bar is shorter than stack top, pop top: height is heights[popped], width extends between left boundary (stack.top) and right boundary (i).",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  }
];
})(typeof window !== 'undefined' ? window : global);
