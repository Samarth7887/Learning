/**
 * SynapseCS Language-Neutral Question Catalog: Stack
 */
(function(window) {
  'use strict';
  window.DSA_QUESTIONS = window.DSA_QUESTIONS || {};
  window.DSA_QUESTIONS['stack'] = {
    id: 'stack',
    title: 'Stack',
    icon: 'ph:code',
    description: "Linear LIFO (Last-In, First-Out) abstract data type where insertions and extractions are strictly restricted to the top of the container.",
    subtopics: [{"id":"stack-basics","title":"Basics & Fundamental Implementations"},{"id":"stack-matching","title":"Parentheses & Delimiter Matching"},{"id":"stack-monotonic","title":"Monotonic Stack Patterns"},{"id":"stack-expressions","title":"Expression Parsing & Design"}],
    questions: [
  {
    "id": "stack-array-impl",
    "subtopicId": "stack-basics",
    "title": "Implement Stack using Dynamic Array",
    "difficulty": "Basic",
    "leetcode": null,
    "description": "Implement a Stack data structure using an array buffer supporting push(x), pop(), top(), isEmpty(), and size(), all in O(1) amortized time.",
    "constraints": "0 <= operations <= 10^5. Elements are 32-bit integers.",
    "examples": [
      {
        "input": "push(10); push(20); pop(); top();",
        "output": "[10]",
        "why": "20 is pushed above 10, then popped off. Top element is 10."
      }
    ],
    "approach": {
      "name": "Dynamic Array with Top Pointer",
      "idea": "Use an array where top index tracks the active element. Push increments top; pop decrements top.",
      "timeComplexity": "O(1) amortized for all operations",
      "spaceComplexity": "O(n) memory to store n elements"
    },
    "commonMistakes": "Popping or peeking an empty stack without boundary verification, causing an out of bounds exception.",
    "relatedQuestionIds": [
      "stack-ll-impl",
      "stack-valid-parens"
    ],
    "tracer": "stack-array-impl",
    "sampleInput": "push(10); push(20); pop(); top();"
  },
  {
    "id": "stack-ll-impl",
    "subtopicId": "stack-basics",
    "title": "Implement Stack using Singly Linked List",
    "difficulty": "Basic",
    "leetcode": null,
    "description": "Implement a Stack where every push allocates a node and prepends to the head, and pop removes the head node, guaranteeing strict O(1) worst-case time without array resizes.",
    "constraints": "0 <= operations <= 10^5.",
    "examples": [
      {
        "input": "push(5); push(15); pop();",
        "output": "15",
        "why": "Node 15 is pushed as head, then popped."
      }
    ],
    "approach": {
      "name": "Head-Anchor LIFO Linked List",
      "idea": "Treat head of the linked list as the top of the stack. Push is insert-at-head; pop is delete-at-head.",
      "timeComplexity": "O(1) strict worst-case for all operations (zero reallocation copy spikes)",
      "spaceComplexity": "O(n) heap memory with per-node pointer overhead"
    },
    "commonMistakes": "Pushing to tail of singly linked list instead of head, which requires an expensive O(n) traversal.",
    "relatedQuestionIds": [
      "stack-array-impl",
      "stack-min"
    ],
    "tracer": "stack-ll-impl",
    "sampleInput": "push(5); push(15); pop();"
  },
  {
    "id": "stack-valid-parens",
    "subtopicId": "stack-matching",
    "title": "Valid Parentheses",
    "difficulty": "Easy",
    "leetcode": {
      "number": 20,
      "url": "https://leetcode.com/problems/valid-parentheses/"
    },
    "description": "Given a string s containing just the characters \"(\", \")\", \"{\", \"}\", \"[\" and \"]\", determine if the input string is valid. Open brackets must be closed by the same type of brackets in the correct order.",
    "constraints": "1 <= s.length <= 10^4. s consists of parentheses only \"()[]{}\".",
    "examples": [
      {
        "input": "s = \"()[]{}\"",
        "output": "true",
        "why": "Every opening bracket is closed immediately by its corresponding pair."
      },
      {
        "input": "s = \"(]\"",
        "output": "false",
        "why": "Open \"(\" closed by mismatching \"]\" bracket."
      }
    ],
    "approach": {
      "name": "LIFO Bracket Matching Stack",
      "idea": "Push expected closing brackets when an opening bracket appears. When a closing bracket is seen, pop from stack and check if it matches.",
      "timeComplexity": "O(n) time to inspect each character once",
      "spaceComplexity": "O(n) auxiliary stack memory in worst case of all opening brackets"
    },
    "commonMistakes": "Forgetting to check if stack is empty at the end, mistakenly accepting unclosed prefixes like '(' or '{[('.",
    "relatedQuestionIds": [
      "stack-min",
      "stack-simplify-path"
    ],
    "tracer": "stack-valid-parens",
    "sampleInput": "s = \"()[]{}\""
  },
  {
    "id": "stack-min",
    "subtopicId": "stack-basics",
    "title": "Min Stack with O(1) getMin()",
    "difficulty": "Medium",
    "leetcode": {
      "number": 155,
      "url": "https://leetcode.com/problems/min-stack/"
    },
    "description": "Design a stack that supports push, pop, top, and retrieving the minimum element in O(1) constant time.",
    "constraints": "-2^31 <= val <= 2^31 - 1. At most 3 * 10^4 calls will be made to push, pop, top, and getMin.",
    "examples": [
      {
        "input": "push(-2); push(0); push(-3); getMin(); pop(); top(); getMin();",
        "output": "getMin() -> -3; top() -> 0; getMin() -> -2;",
        "why": "Minimum tracked at every frame."
      }
    ],
    "approach": {
      "name": "Synchronized Pair / Auxiliary Min Stack",
      "idea": "Maintain a secondary min_stack alongside the main stack. On push(x), push min(x, min_stack.top()) onto min_stack. Pop removes from both in sync.",
      "timeComplexity": "O(1) strict for push, pop, top, and getMin",
      "spaceComplexity": "O(n) auxiliary memory for the paired min tracker"
    },
    "commonMistakes": "Iterating through the stack on getMin(), turning an O(1) contract into an O(n) scan.",
    "relatedQuestionIds": [
      "stack-array-impl",
      "stack-queue-using-stacks"
    ],
    "tracer": "stack-min",
    "sampleInput": "push(-2); push(0); push(-3); getMin(); pop(); top(); getMin();"
  },
  {
    "id": "stack-next-greater",
    "subtopicId": "stack-monotonic",
    "title": "Next Greater Element I",
    "difficulty": "Easy",
    "leetcode": {
      "number": 496,
      "url": "https://leetcode.com/problems/next-greater-element-i/"
    },
    "description": "Find the first greater element to the right of each element in nums2, and answer queries for subset nums1. If no greater element exists, output -1.",
    "constraints": "1 <= nums1.length <= nums2.length <= 1000. 0 <= nums[i] <= 10^4. All integers in nums1 and nums2 are unique.",
    "examples": [
      {
        "input": "nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]",
        "output": "[-1, 3, -1]",
        "why": "For 4 in nums2, no greater element exists (-1). For 1, next greater is 3. For 2, no greater exists (-1)."
      }
    ],
    "approach": {
      "name": "Monotonic Decreasing Stack",
      "idea": "Traverse nums2. While stack has elements smaller than current number, pop them and record in a hash map that their next greater element is the current number. Then push current number.",
      "timeComplexity": "O(n + m) time since each element is pushed and popped at most once",
      "spaceComplexity": "O(n) auxiliary stack and map space"
    },
    "commonMistakes": "Using a nested O(n*m) loop scanning forward on every query, resulting in TLE on larger constraints.",
    "relatedQuestionIds": [
      "stack-daily-temperatures",
      "stack-histogram"
    ],
    "tracer": "stack-next-greater",
    "sampleInput": "nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]"
  },
  {
    "id": "stack-daily-temperatures",
    "subtopicId": "stack-monotonic",
    "title": "Daily Temperatures (Days to Warmer Weather)",
    "difficulty": "Medium",
    "leetcode": {
      "number": 739,
      "url": "https://leetcode.com/problems/daily-temperatures/"
    },
    "description": "Given an array of integers temperatures represents daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If no future day is warmer, keep answer[i] == 0.",
    "constraints": "1 <= temperatures.length <= 10^5. 30 <= temperatures[i] <= 100.",
    "examples": [
      {
        "input": "temperatures = [73, 74, 75, 71, 69, 72, 76, 73]",
        "output": "[1, 1, 4, 2, 1, 1, 0, 0]",
        "why": "For day 0 (73), day 1 is 74 (1 day). For day 2 (75), day 6 is 76 (4 days)."
      }
    ],
    "approach": {
      "name": "Monotonic Decreasing Index Stack",
      "idea": "Store indices on the stack. When current temperature exceeds temperature at stack top index, pop and calculate distance: i - prev_index.",
      "timeComplexity": "O(n) linear time (each index pushed and popped at most once)",
      "spaceComplexity": "O(n) auxiliary stack space"
    },
    "commonMistakes": "Pushing raw temperature values onto the stack instead of their indices, preventing distance calculation (i - prev_i).",
    "relatedQuestionIds": [
      "stack-next-greater",
      "stack-stock-span"
    ],
    "tracer": "stack-daily-temperatures",
    "sampleInput": "temperatures = [73, 74, 75, 71, 69, 72, 76, 73]"
  },
  {
    "id": "stack-eval-rpn",
    "subtopicId": "stack-expressions",
    "title": "Evaluate Reverse Polish Notation (Postfix)",
    "difficulty": "Medium",
    "leetcode": {
      "number": 150,
      "url": "https://leetcode.com/problems/evaluate-reverse-polish-notation/"
    },
    "description": "Evaluate the value of an arithmetic expression in Reverse Polish Notation. Valid operators are +, -, *, and /. Each operand may be an integer or another expression. Division truncates toward zero.",
    "constraints": "1 <= tokens.length <= 10^4. tokens[i] is either an operator or integer in [-200, 200].",
    "examples": [
      {
        "input": "tokens = [\"2\", \"1\", \"+\", \"3\", \"*\"]",
        "output": "9",
        "why": "((2 + 1) * 3) = 9."
      },
      {
        "input": "tokens = [\"4\", \"13\", \"5\", \"/\", \"+\"]",
        "output": "6",
        "why": "(4 + (13 / 5)) = 6."
      }
    ],
    "approach": {
      "name": "Operand Stack Evaluation",
      "idea": "Push numbers onto stack. When an operator is encountered, pop operand B, pop operand A, evaluate (A op B), and push the result back onto stack.",
      "timeComplexity": "O(n) time for a single pass across tokens",
      "spaceComplexity": "O(n) auxiliary stack space"
    },
    "commonMistakes": "Computing (b - a) or (b / a) instead of (a - b) and (a / b), since LIFO popping inverts operand order.",
    "relatedQuestionIds": [
      "stack-valid-parens",
      "stack-array-impl"
    ],
    "tracer": "stack-eval-rpn",
    "sampleInput": "tokens = [\"2\", \"1\", \"+\", \"3\", \"*\"]"
  },
  {
    "id": "stack-queue-using-stacks",
    "subtopicId": "stack-basics",
    "title": "Implement Queue using Stacks",
    "difficulty": "Easy",
    "leetcode": {
      "number": 232,
      "url": "https://leetcode.com/problems/implement-queue-using-stacks/"
    },
    "description": "Implement a first-in-first-out (FIFO) queue using only two LIFO stacks. Support push, pop, peek, and empty with amortized O(1) time complexity.",
    "constraints": "1 <= x <= 9. At most 100 calls to push, pop, peek, and empty.",
    "examples": [
      {
        "input": "push(1); push(2); peek(); pop(); empty();",
        "output": "peek() -> 1; pop() -> 1; empty() -> false",
        "why": "Elements emerge in original FIFO insertion order."
      }
    ],
    "approach": {
      "name": "Two Stacks (In-Stack and Out-Stack)",
      "idea": "push always appends to in_stack. When pop or peek is called, if out_stack is empty, pour all elements from in_stack into out_stack (reversing them to FIFO order).",
      "timeComplexity": "O(1) amortized for push, pop, peek (each item poured at most once)",
      "spaceComplexity": "O(n) auxiliary memory across both stacks"
    },
    "commonMistakes": "Transferring elements back from out_stack into in_stack after each pop, ruining the amortized O(1) complexity.",
    "relatedQuestionIds": [
      "stack-array-impl",
      "stack-min"
    ],
    "tracer": "stack-queue-using-stacks",
    "sampleInput": "push(1); push(2); peek(); pop(); empty();"
  },
  {
    "id": "stack-simplify-path",
    "subtopicId": "stack-matching",
    "title": "Simplify Unix File Path",
    "difficulty": "Medium",
    "leetcode": {
      "number": 71,
      "url": "https://leetcode.com/problems/simplify-path/"
    },
    "description": "Given an absolute path for a Unix-style file system, transform it to the simplified canonical path. Treat \".\" as current directory and \"..\" as parent directory.",
    "constraints": "1 <= path.length <= 3000. path consists of English letters, digits, period \".\", slash \"/\" or \"_\".",
    "examples": [
      {
        "input": "path = \"/home//foo/\"",
        "output": "\"/home/foo\"",
        "why": "Multiple slashes reduced to single slash, trailing slash dropped."
      },
      {
        "input": "path = \"/home/user/Documents/../Pictures\"",
        "output": "\"/home/user/Pictures\"",
        "why": "\"..\" pops Documents directory."
      }
    ],
    "approach": {
      "name": "Split by Slash + Directory Stack",
      "idea": "Split string by \"/\". Skip empty strings and \".\". If token is \"..\", pop from stack if non-empty. Otherwise, push valid directory name. Rejoin with \"/\".",
      "timeComplexity": "O(n) time to tokenize and process directories",
      "spaceComplexity": "O(n) auxiliary stack space"
    },
    "commonMistakes": "Throwing an exception when '..' is applied at the root directory '/'. In Unix, '/..' remains at root '/'.",
    "relatedQuestionIds": [
      "stack-valid-parens"
    ],
    "tracer": "stack-simplify-path",
    "sampleInput": "path = \"/home//foo/\""
  },
  {
    "id": "stack-histogram",
    "subtopicId": "stack-monotonic",
    "title": "Largest Rectangle in Histogram",
    "difficulty": "Hard",
    "leetcode": {
      "number": 84,
      "url": "https://leetcode.com/problems/largest-rectangle-in-histogram/"
    },
    "description": "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
    "constraints": "1 <= heights.length <= 10^5. 0 <= heights[i] <= 10^4.",
    "examples": [
      {
        "input": "heights = [2, 1, 5, 6, 2, 3]",
        "output": "10",
        "why": "The largest rectangle is formed by heights 5 and 6 with area = 5 * 2 = 10."
      }
    ],
    "approach": {
      "name": "Monotonic Increasing Stack",
      "idea": "Maintain a stack of bar indices with increasing heights. When a shorter bar is encountered, pop previous bars and compute area: height * (current_index - left_bound - 1).",
      "timeComplexity": "O(n) single pass (each bar pushed and popped exactly once)",
      "spaceComplexity": "O(n) auxiliary stack space"
    },
    "commonMistakes": "Testing all O(n^2) pairs of left and right boundaries, which times out on 10^5 elements. Monotonic stack runs in linear O(n).",
    "relatedQuestionIds": [
      "stack-next-greater",
      "stack-daily-temperatures"
    ],
    "tracer": "stack-histogram",
    "sampleInput": "heights = [2, 1, 5, 6, 2, 3]"
  }
]
  };
})(typeof window !== 'undefined' ? window : global);
