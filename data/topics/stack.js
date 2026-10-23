
/**
 * SynapseCS Data Module - Stack
 * Schema compliant, zero-fetch, global namespace registry.
 */
window.DSA_TOPICS = window.DSA_TOPICS || {};

window.DSA_TOPICS['stack'] = {
  id: 'stack',
  title: 'Stack',
  description: 'Linear LIFO (Last-In, First-Out) abstract data type where insertions and extractions are strictly restricted to the top of the container.',
  subtopics: [
    { id: 'stack-basics', title: 'Basics & Fundamental Implementations' },
    { id: 'stack-matching', title: 'Parentheses & Delimiter Matching' },
    { id: 'stack-monotonic', title: 'Monotonic Stack Patterns' },
    { id: 'stack-expressions', title: 'Expression Parsing & Design' }
  ],
  questions: [
    // -------------------------------------------------------------------------
    // 1. ARRAY IMPLEMENTATION OF STACK
    // -------------------------------------------------------------------------
    {
      id: 'stack-array-impl',
      subtopicId: 'stack-basics',
      title: 'Implement Stack using Dynamic Array',
      difficulty: 'Basic',
      leetcode: null,
      description: 'Implement a Stack data structure using an array buffer supporting push(x), pop(), top(), isEmpty(), and size(), all in O(1) amortized time.',
      constraints: '0 <= operations <= 10^5. Elements are 32-bit integers.',
      examples: [
        { input: 'push(10); push(20); pop(); top();', output: '[10]', why: '20 is pushed above 10, then popped off. Top element is 10.' }
      ],
      approaches: [
        {
          name: 'Dynamic Array with Top Pointer',
          idea: 'Use an array where top index tracks the active element. Push increments top; pop decrements top.',
          timeComplexity: 'O(1) amortized for all operations',
          spaceComplexity: 'O(n) memory to store n elements',
          code: {
            python: `class ArrayStack:\n    def __init__(self):\n        self.data = []\n    def push(self, val):\n        self.data.append(val)\n    def pop(self):\n        if not self.is_empty():\n            return self.data.pop()\n        return None\n    def top(self):\n        return self.data[-1] if not self.is_empty() else None\n    def is_empty(self):\n        return len(self.data) == 0\n    def size(self):\n        return len(self.data)`,
            java: `public class ArrayStack {\n    private List<Integer> data = new ArrayList<>();\n    public void push(int val) { data.add(val); }\n    public int pop() {\n        if (isEmpty()) throw new EmptyStackException();\n        return data.remove(data.size() - 1);\n    }\n    public int top() {\n        if (isEmpty()) throw new EmptyStackException();\n        return data.get(data.size() - 1);\n    }\n    public boolean isEmpty() { return data.isEmpty(); }\n    public int size() { return data.size(); }\n}`,
            cpp: `class ArrayStack {\n    vector<int> data;\npublic:\n    void push(int val) { data.push_back(val); }\n    int pop() {\n        if (isEmpty()) return -1;\n        int val = data.back(); data.pop_back(); return val;\n    }\n    int top() { return isEmpty() ? -1 : data.back(); }\n    bool isEmpty() { return data.empty(); }\n    int size() { return data.size(); }\n};`,
            javascript: `class ArrayStack {\n    constructor() { this.data = []; }\n    push(val) { this.data.push(val); }\n    pop() { return this.isEmpty() ? null : this.data.pop(); }\n    top() { return this.isEmpty() ? null : this.data[this.data.length - 1]; }\n    isEmpty() { return this.data.length === 0; }\n    size() { return this.data.length; }\n}`
          },
          lineExplanations: [
            { lines: [2, 3], text: "Initialize underlying contiguous array buffer." },
            { lines: [4, 5], text: "push: append item to the end of the array buffer in O(1) amortized time." },
            { lines: [6, 9], text: "pop: remove and return the last item in O(1) time after checking non-empty." },
            { lines: [10, 11], text: "top: peek at index data.length - 1 without removing it." }
          ],
          animationSteps: [
            { codeLine: 4, description: "push(10): 10 added at index 0. TOP = 0.", state: { type: 'stack', stack: [10], action: 'PUSH(10)' }, highlights: [0], pointers: { top: 0 } },
            { codeLine: 4, description: "push(20): 20 added at index 1. TOP = 1.", state: { type: 'stack', stack: [10, 20], action: 'PUSH(20)' }, highlights: [1], pointers: { top: 1 } },
            { codeLine: 7, description: "pop(): 20 removed from top. TOP retreats to index 0.", state: { type: 'stack', stack: [10], action: 'POP() -> 20' }, highlights: [0], pointers: { top: 0 } },
            { codeLine: 10, description: "top(): Inspect element at index 0 without removing. Returns 10.", state: { type: 'stack', stack: [10], action: 'TOP() -> 10' }, highlights: [0], pointers: { top: 0 } }
          ]
        }
      ],
      commonMistakes: "Popping or peeking an empty stack without boundary verification, causing an out of bounds exception.",
      relatedQuestionIds: ['stack-ll-impl', 'stack-valid-parens']
    },

    // -------------------------------------------------------------------------
    // 2. LINKED LIST IMPLEMENTATION OF STACK
    // -------------------------------------------------------------------------
    {
      id: 'stack-ll-impl',
      subtopicId: 'stack-basics',
      title: 'Implement Stack using Singly Linked List',
      difficulty: 'Basic',
      leetcode: null,
      description: 'Implement a Stack where every push allocates a node and prepends to the head, and pop removes the head node, guaranteeing strict O(1) worst-case time without array resizes.',
      constraints: '0 <= operations <= 10^5.',
      examples: [
        { input: 'push(5); push(15); pop();', output: '15', why: 'Node 15 is pushed as head, then popped.' }
      ],
      approaches: [
        {
          name: 'Head-Anchor LIFO Linked List',
          idea: 'Treat head of the linked list as the top of the stack. Push is insert-at-head; pop is delete-at-head.',
          timeComplexity: 'O(1) strict worst-case for all operations (zero reallocation copy spikes)',
          spaceComplexity: 'O(n) heap memory with per-node pointer overhead',
          code: {
            python: `class Node:\n    def __init__(self, val, next=None):\n        self.val = val\n        self.next = next\n\nclass LLStack:\n    def __init__(self):\n        self.head = None\n        self.count = 0\n    def push(self, val):\n        self.head = Node(val, self.head)\n        self.count += 1\n    def pop(self):\n        if not self.head: return None\n        val = self.head.val\n        self.head = self.head.next\n        self.count -= 1\n        return val\n    def top(self):\n        return self.head.val if self.head else None`,
            java: `public class LLStack {\n    private class Node { int val; Node next; Node(int v, Node n) { val = v; next = n; } }\n    private Node head = null;\n    private int count = 0;\n    public void push(int val) { head = new Node(val, head); count++; }\n    public int pop() {\n        if (head == null) throw new EmptyStackException();\n        int val = head.val; head = head.next; count--;\n        return val;\n    }\n    public int top() { return (head != null) ? head.val : -1; }\n}`,
            cpp: `class LLStack {\n    struct Node { int val; Node* next; Node(int v, Node* n) : val(v), next(n) {} };\n    Node* head = nullptr;\npublic:\n    void push(int val) { head = new Node(val, head); }\n    int pop() {\n        if (!head) return -1;\n        Node* t = head; int val = t->val; head = head->next; delete t;\n        return val;\n    }\n    int top() { return head ? head->val : -1; }\n};`,
            javascript: `class LLStack {\n    constructor() { this.head = null; this.count = 0; }\n    push(val) { this.head = { val, next: this.head }; this.count++; }\n    pop() {\n        if (!this.head) return null;\n        const val = this.head.val;\n        this.head = this.head.next;\n        this.count--;\n        return val;\n    }\n    top() { return this.head ? this.head.val : null; }\n}`
          },
          lineExplanations: [
            { lines: [8, 9], text: "push: allocate new node whose next points to current head, re-anchoring head to the new node in O(1)." },
            { lines: [10, 15], text: "pop: save head.val, advance head = head.next, and decrement count in O(1)." }
          ],
          animationSteps: [
            { codeLine: 9, description: "push(5): Node 5 becomes head. Stack top is 5.", state: { type: 'stack', stack: [5], action: 'PUSH(5)' }, highlights: [0], pointers: { top: 0 } },
            { codeLine: 9, description: "push(15): Node 15 prepended to head. Stack top is 15.", state: { type: 'stack', stack: [5, 15], action: 'PUSH(15)' }, highlights: [1], pointers: { top: 1 } },
            { codeLine: 12, description: "pop(): Head advances from 15 to 5. 15 returned.", state: { type: 'stack', stack: [5], action: 'POP() -> 15' }, highlights: [0], pointers: { top: 0 } }
          ]
        }
      ],
      commonMistakes: "Pushing to tail of singly linked list instead of head, which requires an expensive O(n) traversal.",
      relatedQuestionIds: ['stack-array-impl', 'stack-min']
    },

    // -------------------------------------------------------------------------
    // 3. VALID PARENTHESES (LEETCODE 20)
    // -------------------------------------------------------------------------
    {
      id: 'stack-valid-parens',
      subtopicId: 'stack-matching',
      title: 'Valid Parentheses',
      difficulty: 'Easy',
      leetcode: { number: 20, url: 'https://leetcode.com/problems/valid-parentheses/' },
      description: 'Given a string s containing just the characters "(", ")", "{", "}", "[" and "]", determine if the input string is valid. Open brackets must be closed by the same type of brackets in the correct order.',
      constraints: '1 <= s.length <= 10^4. s consists of parentheses only "()[]{}".',
      examples: [
        { input: 's = "()[]{}"', output: 'true', why: 'Every opening bracket is closed immediately by its corresponding pair.' },
        { input: 's = "(]"', output: 'false', why: 'Open "(" closed by mismatching "]" bracket.' }
      ],
      approaches: [
        {
          name: 'LIFO Bracket Matching Stack',
          idea: 'Push expected closing brackets when an opening bracket appears. When a closing bracket is seen, pop from stack and check if it matches.',
          timeComplexity: 'O(n) time to inspect each character once',
          spaceComplexity: 'O(n) auxiliary stack memory in worst case of all opening brackets',
          code: {
            python: `def is_valid(s: str) -> bool:\n    stack = []\n    mapping = {")": "(", "}": "{", "]": "["}\n    for char in s:\n        if char in mapping:\n            top_element = stack.pop() if stack else '#'\n            if mapping[char] != top_element:\n                return False\n        else:\n            stack.append(char)\n    return not stack`,
            java: `public static boolean isValid(String s) {\n    Deque<Character> stack = new ArrayDeque<>();\n    for (char c : s.toCharArray()) {\n        if (c == '(') stack.push(')');\n        else if (c == '{') stack.push('}');\n        else if (c == '[') stack.push(']');\n        else if (stack.isEmpty() || stack.pop() != c) return false;\n    }\n    return stack.isEmpty();\n}`,
            cpp: `bool isValid(string s) {\n    stack<char> st;\n    for (char c : s) {\n        if (c == '(') st.push(')');\n        else if (c == '{') st.push('}');\n        else if (c == '[') st.push(']');\n        else {\n            if (st.empty() || st.top() != c) return false;\n            st.pop();\n        }\n    }\n    return st.empty();\n}`,
            javascript: `function isValid(s) {\n    const stack = [];\n    const map = { ')': '(', '}': '{', ']': '[' };\n    for (const char of s) {\n        if (map[char]) {\n            const top = stack.length ? stack.pop() : '#';\n            if (map[char] !== top) return false;\n        } else {\n            stack.push(char);\n        }\n    }\n    return stack.length === 0;\n}`
          },
          lineExplanations: [
            { lines: [2, 3], text: "Initialize LIFO stack and opening/closing bracket pairing map." },
            { lines: [4, 8], text: "If current character is a closing bracket, pop from stack and verify matching pair." },
            { lines: [9, 10], text: "If current character is an opening bracket, push onto stack." },
            { lines: [11, 11], text: "At completion, stack must be completely empty (all opened brackets resolved)." }
          ],
          animationSteps: [
            { codeLine: 4, description: 'Read "(": opening bracket. Push "(" onto stack.', state: { type: 'stack', stack: ['('], action: 'PUSH("(")' }, highlights: [0], pointers: { top: 0 } },
            { codeLine: 5, description: 'Read "[": opening bracket. Push "[" onto stack.', state: { type: 'stack', stack: ['(', '['], action: 'PUSH("[")' }, highlights: [1], pointers: { top: 1 } },
            { codeLine: 7, description: 'Read "]": closing bracket. Pop top of stack ("[") and match. Match successful!', state: { type: 'stack', stack: ['('], action: 'POP("[") matched with "]"' }, highlights: [0], pointers: { top: 0 } },
            { codeLine: 7, description: 'Read ")": closing bracket. Pop top of stack ("(") and match. Stack now empty. Valid = true.', state: { type: 'stack', stack: [], action: 'EMPTY STACK -> VALID' }, highlights: [], pointers: {} }
          ]
        }
      ],
      commonMistakes: "Forgetting to check if stack is empty at the end, mistakenly accepting unclosed prefixes like '(' or '{[('.",
      relatedQuestionIds: ['stack-min', 'stack-simplify-path']
    },

    // -------------------------------------------------------------------------
    // 4. MIN STACK (LEETCODE 155)
    // -------------------------------------------------------------------------
    {
      id: 'stack-min',
      subtopicId: 'stack-basics',
      title: 'Min Stack with O(1) getMin()',
      difficulty: 'Medium',
      leetcode: { number: 155, url: 'https://leetcode.com/problems/min-stack/' },
      description: 'Design a stack that supports push, pop, top, and retrieving the minimum element in O(1) constant time.',
      constraints: '-2^31 <= val <= 2^31 - 1. At most 3 * 10^4 calls will be made to push, pop, top, and getMin.',
      examples: [
        { input: 'push(-2); push(0); push(-3); getMin(); pop(); top(); getMin();', output: 'getMin() -> -3; top() -> 0; getMin() -> -2;', why: 'Minimum tracked at every frame.' }
      ],
      approaches: [
        {
          name: 'Synchronized Pair / Auxiliary Min Stack',
          idea: 'Maintain a secondary min_stack alongside the main stack. On push(x), push min(x, min_stack.top()) onto min_stack. Pop removes from both in sync.',
          timeComplexity: 'O(1) strict for push, pop, top, and getMin',
          spaceComplexity: 'O(n) auxiliary memory for the paired min tracker',
          code: {
            python: `class MinStack:\n    def __init__(self):\n        self.stack = []\n        self.min_stack = []\n\n    def push(self, val: int) -> None:\n        self.stack.append(val)\n        current_min = min(val, self.min_stack[-1] if self.min_stack else val)\n        self.min_stack.append(current_min)\n\n    def pop(self) -> None:\n        self.stack.pop()\n        self.min_stack.pop()\n\n    def top(self) -> int:\n        return self.stack[-1]\n\n    def getMin(self) -> int:\n        return self.min_stack[-1]`,
            java: `class MinStack {\n    private Deque<Integer> stack = new ArrayDeque<>();\n    private Deque<Integer> minStack = new ArrayDeque<>();\n    public void push(int val) {\n        stack.push(val);\n        int curMin = minStack.isEmpty() ? val : Math.min(val, minStack.peek());\n        minStack.push(curMin);\n    }\n    public void pop() { stack.pop(); minStack.pop(); }\n    public int top() { return stack.peek(); }\n    public int getMin() { return minStack.peek(); }\n}`,
            cpp: `class MinStack {\n    stack<int> st;\n    stack<int> minSt;\npublic:\n    void push(int val) {\n        st.push(val);\n        int curMin = minSt.empty() ? val : min(val, minSt.top());\n        minSt.push(curMin);\n    }\n    void pop() { st.pop(); minSt.pop(); }\n    int top() { return st.top(); }\n    int getMin() { return minSt.top(); }\n};`,
            javascript: `class MinStack {\n    constructor() {\n        this.stack = [];\n        this.minStack = [];\n    }\n    push(val) {\n        this.stack.push(val);\n        const curMin = this.minStack.length === 0 ? val : Math.min(val, this.minStack[this.minStack.length - 1]);\n        this.minStack.push(curMin);\n    }\n    pop() { this.stack.pop(); this.minStack.pop(); }\n    top() { return this.stack[this.stack.length - 1]; }\n    getMin() { return this.minStack[this.minStack.length - 1]; }\n}`
          },
          lineExplanations: [
            { lines: [2, 4], text: "Maintain main storage stack and parallel minimum tracker stack." },
            { lines: [6, 9], text: "push: append new element and compute new minimum relative to previous minStack top." },
            { lines: [11, 13], text: "pop: remove from both stacks in lockstep, preserving previous minimum context." },
            { lines: [17, 18], text: "getMin: return top of minStack in O(1) without scanning." }
          ],
          animationSteps: [
            { codeLine: 7, description: "push(-2): stack = [-2], min_stack = [-2].", state: { type: 'stack', stack: [-2], action: 'PUSH(-2) | min=-2' }, highlights: [0], pointers: { top: 0 } },
            { codeLine: 7, description: "push(0): stack = [-2, 0], min_stack = [-2, -2].", state: { type: 'stack', stack: [-2, 0], action: 'PUSH(0) | min=-2' }, highlights: [1], pointers: { top: 1 } },
            { codeLine: 7, description: "push(-3): stack = [-2, 0, -3], min_stack = [-2, -2, -3].", state: { type: 'stack', stack: [-2, 0, -3], action: 'PUSH(-3) | min=-3' }, highlights: [2], pointers: { top: 2 } },
            { codeLine: 18, description: "getMin(): Returns -3 in O(1) time.", state: { type: 'stack', stack: [-2, 0, -3], action: 'getMin() -> -3' }, highlights: [2], pointers: { top: 2 } },
            { codeLine: 12, description: "pop(): -3 removed. Top is 0. getMin() automatically rolls back to -2.", state: { type: 'stack', stack: [-2, 0], action: 'POP() | new min=-2' }, highlights: [1], pointers: { top: 1 } }
          ]
        }
      ],
      commonMistakes: "Iterating through the stack on getMin(), turning an O(1) contract into an O(n) scan.",
      relatedQuestionIds: ['stack-array-impl', 'stack-queue-using-stacks']
    },

    // -------------------------------------------------------------------------
    // 5. NEXT GREATER ELEMENT I (LEETCODE 496)
    // -------------------------------------------------------------------------
    {
      id: 'stack-next-greater',
      subtopicId: 'stack-monotonic',
      title: 'Next Greater Element I',
      difficulty: 'Easy',
      leetcode: { number: 496, url: 'https://leetcode.com/problems/next-greater-element-i/' },
      description: 'Find the first greater element to the right of each element in nums2, and answer queries for subset nums1. If no greater element exists, output -1.',
      constraints: '1 <= nums1.length <= nums2.length <= 1000. 0 <= nums[i] <= 10^4. All integers in nums1 and nums2 are unique.',
      examples: [
        { input: 'nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]', output: '[-1, 3, -1]', why: 'For 4 in nums2, no greater element exists (-1). For 1, next greater is 3. For 2, no greater exists (-1).' }
      ],
      approaches: [
        {
          name: 'Monotonic Decreasing Stack',
          idea: 'Traverse nums2. While stack has elements smaller than current number, pop them and record in a hash map that their next greater element is the current number. Then push current number.',
          timeComplexity: 'O(n + m) time since each element is pushed and popped at most once',
          spaceComplexity: 'O(n) auxiliary stack and map space',
          code: {
            python: `def next_greater_element(nums1, nums2):\n    mapping = {}\n    stack = []\n    for num in nums2:\n        while stack and stack[-1] < num:\n            mapping[stack.pop()] = num\n        stack.append(num)\n    return [mapping.get(x, -1) for x in nums1]`,
            java: `public static int[] nextGreaterElement(int[] nums1, int[] nums2) {\n    Map<Integer, Integer> map = new HashMap<>();\n    Deque<Integer> stack = new ArrayDeque<>();\n    for (int num : nums2) {\n        while (!stack.isEmpty() && stack.peek() < num) {\n            map.put(stack.pop(), num);\n        }\n        stack.push(num);\n    }\n    int[] res = new int[nums1.length];\n    for (int i = 0; i < nums1.length; i++) res[i] = map.getOrDefault(nums1[i], -1);\n    return res;\n}`,
            cpp: `vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {\n    unordered_map<int, int> map;\n    stack<int> st;\n    for (int num : nums2) {\n        while (!st.empty() && st.top() < num) {\n            map[st.top()] = num; st.pop();\n        }\n        st.push(num);\n    }\n    vector<int> res;\n    for (int x : nums1) res.push_back(map.count(x) ? map[x] : -1);\n    return res;\n}`,
            javascript: `function nextGreaterElement(nums1, nums2) {\n    const map = new Map();\n    const stack = [];\n    for (const num of nums2) {\n        while (stack.length && stack[stack.length - 1] < num) {\n            map.set(stack.pop(), num);\n        }\n        stack.push(num);\n    }\n    return nums1.map(x => map.has(x) ? map.get(x) : -1);\n}`
          },
          lineExplanations: [
            { lines: [2, 3], text: "Initialize hash map to store results and stack to maintain decreasing elements." },
            { lines: [4, 7], text: "Whenever current number is greater than stack top, resolve top's next greater element and pop it." },
            { lines: [8, 8], text: "Map queries in nums1 directly to O(1) results from hash map." }
          ],
          animationSteps: [
            { codeLine: 5, description: "Process 1: stack = [1].", state: { type: 'stack', stack: [1], action: 'PUSH(1)' }, highlights: [0], pointers: { top: 0 } },
            { codeLine: 6, description: "Process 3: 3 > 1. Pop 1, map[1] = 3. Push 3. stack = [3].", state: { type: 'stack', stack: [3], action: 'RESOLVE 1 -> 3, PUSH 3' }, highlights: [0], pointers: { top: 0 } },
            { codeLine: 6, description: "Process 4: 4 > 3. Pop 3, map[3] = 4. Push 4. stack = [4].", state: { type: 'stack', stack: [4], action: 'RESOLVE 3 -> 4, PUSH 4' }, highlights: [0], pointers: { top: 0 } },
            { codeLine: 7, description: "Process 2: 2 < 4. Push 2. stack = [4, 2]. Finished nums2 scan.", state: { type: 'stack', stack: [4, 2], action: 'PUSH 2 (done)' }, highlights: [1], pointers: { top: 1 } }
          ]
        }
      ],
      commonMistakes: "Using a nested O(n*m) loop scanning forward on every query, resulting in TLE on larger constraints.",
      relatedQuestionIds: ['stack-daily-temperatures', 'stack-histogram']
    },

    // -------------------------------------------------------------------------
    // 6. DAILY TEMPERATURES (LEETCODE 739)
    // -------------------------------------------------------------------------
    {
      id: 'stack-daily-temperatures',
      subtopicId: 'stack-monotonic',
      title: 'Daily Temperatures (Days to Warmer Weather)',
      difficulty: 'Medium',
      leetcode: { number: 739, url: 'https://leetcode.com/problems/daily-temperatures/' },
      description: 'Given an array of integers temperatures represents daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If no future day is warmer, keep answer[i] == 0.',
      constraints: '1 <= temperatures.length <= 10^5. 30 <= temperatures[i] <= 100.',
      examples: [
        { input: 'temperatures = [73, 74, 75, 71, 69, 72, 76, 73]', output: '[1, 1, 4, 2, 1, 1, 0, 0]', why: 'For day 0 (73), day 1 is 74 (1 day). For day 2 (75), day 6 is 76 (4 days).' }
      ],
      approaches: [
        {
          name: 'Monotonic Decreasing Index Stack',
          idea: 'Store indices on the stack. When current temperature exceeds temperature at stack top index, pop and calculate distance: i - prev_index.',
          timeComplexity: 'O(n) linear time (each index pushed and popped at most once)',
          spaceComplexity: 'O(n) auxiliary stack space',
          code: {
            python: `def daily_temperatures(temperatures):\n    res = [0] * len(temperatures)\n    stack = []  # indices of unresolved days\n    for i, t in enumerate(temperatures):\n        while stack and temperatures[stack[-1]] < t:\n            prev_i = stack.pop()\n            res[prev_i] = i - prev_i\n        stack.append(i)\n    return res`,
            java: `public static int[] dailyTemperatures(int[] temperatures) {\n    int n = temperatures.length;\n    int[] res = new int[n];\n    Deque<Integer> stack = new ArrayDeque<>();\n    for (int i = 0; i < n; i++) {\n        while (!stack.isEmpty() && temperatures[stack.peek()] < temperatures[i]) {\n            int prevI = stack.pop();\n            res[prevI] = i - prevI;\n        }\n        stack.push(i);\n    }\n    return res;\n}`,
            cpp: `vector<int> dailyTemperatures(vector<int>& temperatures) {\n    int n = temperatures.size();\n    vector<int> res(n, 0);\n    stack<int> st;\n    for (int i = 0; i < n; i++) {\n        while (!st.empty() && temperatures[st.top()] < temperatures[i]) {\n            int prevI = st.top(); st.pop();\n            res[prevI] = i - prevI;\n        }\n        st.push(i);\n    }\n    return res;\n}`,
            javascript: `function dailyTemperatures(temperatures) {\n    const res = new Array(temperatures.length).fill(0);\n    const stack = [];\n    for (let i = 0; i < temperatures.length; i++) {\n        while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {\n            const prevI = stack.pop();\n            res[prevI] = i - prevI;\n        }\n        stack.push(i);\n    }\n    return res;\n}`
          },
          lineExplanations: [
            { lines: [2, 3], text: "Allocate answer array initialized with 0s and initialize monotonic stack of indices." },
            { lines: [4, 7], text: "When today is warmer than stack top day, pop previous day and compute elapsed days (i - prev_i)." },
            { lines: [8, 8], text: "Push today's index onto the stack." }
          ],
          animationSteps: [
            { codeLine: 4, description: "Day 0 (73°): Push index 0. stack = [0].", state: { type: 'stack', stack: ['Day 0 (73°)'], action: 'PUSH(Day 0)' }, highlights: [0], pointers: { top: 0 } },
            { codeLine: 5, description: "Day 1 (74°): 74 > 73. Pop Day 0. Wait time = 1 - 0 = 1 day. Push Day 1. stack = [Day 1 (74°)].", state: { type: 'stack', stack: ['Day 1 (74°)'], action: 'RESOLVE Day 0: 1 day' }, highlights: [0], pointers: { top: 0 } },
            { codeLine: 5, description: "Day 2 (75°): 75 > 74. Pop Day 1. Wait time = 2 - 1 = 1 day. Push Day 2. stack = [Day 2 (75°)].", state: { type: 'stack', stack: ['Day 2 (75°)'], action: 'RESOLVE Day 1: 1 day' }, highlights: [0], pointers: { top: 0 } },
            { codeLine: 8, description: "Days 3, 4, 5 (71°, 69°, 72°): Monotonic descending stack accumulated.", state: { type: 'stack', stack: ['Day 2 (75°)', 'Day 5 (72°)'], action: 'STACK ACCUMULATES' }, highlights: [1], pointers: { top: 1 } }
          ]
        }
      ],
      commonMistakes: "Pushing raw temperature values onto the stack instead of their indices, preventing distance calculation (i - prev_i).",
      relatedQuestionIds: ['stack-next-greater', 'stack-stock-span']
    },

    // -------------------------------------------------------------------------
    // 7. EVALUATE REVERSE POLISH NOTATION (LEETCODE 150)
    // -------------------------------------------------------------------------
    {
      id: 'stack-eval-rpn',
      subtopicId: 'stack-expressions',
      title: 'Evaluate Reverse Polish Notation (Postfix)',
      difficulty: 'Medium',
      leetcode: { number: 150, url: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/' },
      description: 'Evaluate the value of an arithmetic expression in Reverse Polish Notation. Valid operators are +, -, *, and /. Each operand may be an integer or another expression. Division truncates toward zero.',
      constraints: '1 <= tokens.length <= 10^4. tokens[i] is either an operator or integer in [-200, 200].',
      examples: [
        { input: 'tokens = ["2", "1", "+", "3", "*"]', output: '9', why: '((2 + 1) * 3) = 9.' },
        { input: 'tokens = ["4", "13", "5", "/", "+"]', output: '6', why: '(4 + (13 / 5)) = 6.' }
      ],
      approaches: [
        {
          name: 'Operand Stack Evaluation',
          idea: 'Push numbers onto stack. When an operator is encountered, pop operand B, pop operand A, evaluate (A op B), and push the result back onto stack.',
          timeComplexity: 'O(n) time for a single pass across tokens',
          spaceComplexity: 'O(n) auxiliary stack space',
          code: {
            python: `def eval_rpn(tokens):\n    stack = []\n    for token in tokens:\n        if token in "+-*/":\n            b = stack.pop()\n            a = stack.pop()\n            if token == '+': stack.append(a + b)\n            elif token == '-': stack.append(a - b)\n            elif token == '*': stack.append(a * b)\n            else: stack.append(int(a / b))  # truncate toward zero\n        else:\n            stack.append(int(token))\n    return stack[0]`,
            java: `public static int evalRPN(String[] tokens) {\n    Deque<Integer> stack = new ArrayDeque<>();\n    for (String s : tokens) {\n        if ("+-*/".contains(s) && s.length() == 1) {\n            int b = stack.pop(), a = stack.pop();\n            if (s.equals("+")) stack.push(a + b);\n            else if (s.equals("-")) stack.push(a - b);\n            else if (s.equals("*")) stack.push(a * b);\n            else stack.push(a / b);\n        } else {\n            stack.push(Integer.parseInt(s));\n        }\n    }\n    return stack.pop();\n}`,
            cpp: `int evalRPN(vector<string>& tokens) {\n    stack<int> st;\n    for (const string& s : tokens) {\n        if (s == "+" || s == "-" || s == "*" || s == "/") {\n            int b = st.top(); st.pop();\n            int a = st.top(); st.pop();\n            if (s == "+") st.push(a + b);\n            else if (s == "-") st.push(a - b);\n            else if (s == "*") st.push(a * b);\n            else st.push(a / b);\n        } else {\n            st.push(stoi(s));\n        }\n    }\n    return st.top();\n}`,
            javascript: `function evalRPN(tokens) {\n    const stack = [];\n    for (const t of tokens) {\n        if (['+', '-', '*', '/'].includes(t)) {\n            const b = stack.pop(), a = stack.pop();\n            if (t === '+') stack.push(a + b);\n            else if (t === '-') stack.push(a - b);\n            else if (t === '*') stack.push(a * b);\n            else stack.push(Math.trunc(a / b));\n        } else {\n            stack.push(Number(t));\n        }\n    }\n    return stack[0];\n}`
          },
          lineExplanations: [
            { lines: [4, 6], text: "Pop second operand (b) first, then first operand (a). Order matters for subtraction and division." },
            { lines: [7, 10], text: "Apply operation (a op b) and push computed result back onto the stack." }
          ],
          animationSteps: [
            { codeLine: 11, description: 'Read "2", "1": Push both. stack = [2, 1].', state: { type: 'stack', stack: [2, 1], action: 'PUSH 2, 1' }, highlights: [0, 1], pointers: { top: 1 } },
            { codeLine: 5, description: 'Read "+": Pop 1 and 2. Compute 2 + 1 = 3. Push 3.', state: { type: 'stack', stack: [3], action: 'EVAL 2 + 1 -> 3' }, highlights: [0], pointers: { top: 0 } },
            { codeLine: 11, description: 'Read "3": Push 3. stack = [3, 3].', state: { type: 'stack', stack: [3, 3], action: 'PUSH 3' }, highlights: [1], pointers: { top: 1 } },
            { codeLine: 9, description: 'Read "*": Pop 3 and 3. Compute 3 * 3 = 9. Push 9. Final result = 9.', state: { type: 'stack', stack: [9], action: 'EVAL 3 * 3 -> 9' }, highlights: [0], pointers: { top: 0 } }
          ]
        }
      ],
      commonMistakes: "Computing (b - a) or (b / a) instead of (a - b) and (a / b), since LIFO popping inverts operand order.",
      relatedQuestionIds: ['stack-valid-parens', 'stack-array-impl']
    },

    // -------------------------------------------------------------------------
    // 8. IMPLEMENT QUEUE USING STACKS (LEETCODE 232)
    // -------------------------------------------------------------------------
    {
      id: 'stack-queue-using-stacks',
      subtopicId: 'stack-basics',
      title: 'Implement Queue using Stacks',
      difficulty: 'Easy',
      leetcode: { number: 232, url: 'https://leetcode.com/problems/implement-queue-using-stacks/' },
      description: 'Implement a first-in-first-out (FIFO) queue using only two LIFO stacks. Support push, pop, peek, and empty with amortized O(1) time complexity.',
      constraints: '1 <= x <= 9. At most 100 calls to push, pop, peek, and empty.',
      examples: [
        { input: 'push(1); push(2); peek(); pop(); empty();', output: 'peek() -> 1; pop() -> 1; empty() -> false', why: 'Elements emerge in original FIFO insertion order.' }
      ],
      approaches: [
        {
          name: 'Two Stacks (In-Stack and Out-Stack)',
          idea: 'push always appends to in_stack. When pop or peek is called, if out_stack is empty, pour all elements from in_stack into out_stack (reversing them to FIFO order).',
          timeComplexity: 'O(1) amortized for push, pop, peek (each item poured at most once)',
          spaceComplexity: 'O(n) auxiliary memory across both stacks',
          code: {
            python: `class MyQueue:\n    def __init__(self):\n        self.in_st = []\n        self.out_st = []\n    def push(self, x: int) -> None:\n        self.in_st.append(x)\n    def pop(self) -> int:\n        self.peek()\n        return self.out_st.pop()\n    def peek(self) -> int:\n        if not self.out_st:\n            while self.in_st:\n                self.out_st.append(self.in_st.pop())\n        return self.out_st[-1]\n    def empty(self) -> bool:\n        return not self.in_st and not self.out_st`,
            java: `class MyQueue {\n    private Deque<Integer> inSt = new ArrayDeque<>();\n    private Deque<Integer> outSt = new ArrayDeque<>();\n    public void push(int x) { inSt.push(x); }\n    public int pop() { peek(); return outSt.pop(); }\n    public int peek() {\n        if (outSt.isEmpty()) {\n            while (!inSt.isEmpty()) outSt.push(inSt.pop());\n        }\n        return outSt.peek();\n    }\n    public boolean empty() { return inSt.isEmpty() && outSt.isEmpty(); }\n}`,
            cpp: `class MyQueue {\n    stack<int> inSt, outSt;\npublic:\n    void push(int x) { inSt.push(x); }\n    int pop() { int v = peek(); outSt.pop(); return v; }\n    int peek() {\n        if (outSt.empty()) {\n            while (!inSt.empty()) { outSt.push(inSt.top()); inSt.pop(); }\n        }\n        return outSt.top();\n    }\n    bool empty() { return inSt.empty() && outSt.empty(); }\n};`,
            javascript: `class MyQueue {\n    constructor() { this.inSt = []; this.outSt = []; }\n    push(x) { this.inSt.push(x); }\n    pop() { this.peek(); return this.outSt.pop(); }\n    peek() {\n        if (this.outSt.length === 0) {\n            while (this.inSt.length) this.outSt.push(this.inSt.pop());\n        }\n        return this.outSt[this.outSt.length - 1];\n    }\n    empty() { return this.inSt.length === 0 && this.outSt.length === 0; }\n}`
          },
          lineExplanations: [
            { lines: [5, 6], text: "push: simply append to in_stack in O(1)." },
            { lines: [10, 14], text: "peek/pop: if out_stack is dry, dump in_stack into out_stack, reversing the stack order into FIFO order." }
          ],
          animationSteps: [
            { codeLine: 5, description: "push(1), push(2): in_stack = [1, 2], out_stack = [].", state: { type: 'stack', stack: [1, 2], action: 'IN_STACK: [1, 2]' }, highlights: [1], pointers: { top: 1 } },
            { codeLine: 12, description: "pop(): out_stack empty. Transfer in_stack -> out_stack. out_stack = [2, 1].", state: { type: 'stack', stack: [2, 1], action: 'REVERSED TO FIFO' }, highlights: [1], pointers: { top: 1 } },
            { codeLine: 8, description: "Pop top of out_stack: 1 removed first! FIFO order achieved.", state: { type: 'stack', stack: [2], action: 'POP() -> 1 (FIFO)' }, highlights: [0], pointers: { top: 0 } }
          ]
        }
      ],
      commonMistakes: "Transferring elements back from out_stack into in_stack after each pop, ruining the amortized O(1) complexity.",
      relatedQuestionIds: ['stack-array-impl', 'stack-min']
    },

    // -------------------------------------------------------------------------
    // 9. SIMPLIFY PATH (LEETCODE 71)
    // -------------------------------------------------------------------------
    {
      id: 'stack-simplify-path',
      subtopicId: 'stack-matching',
      title: 'Simplify Unix File Path',
      difficulty: 'Medium',
      leetcode: { number: 71, url: 'https://leetcode.com/problems/simplify-path/' },
      description: 'Given an absolute path for a Unix-style file system, transform it to the simplified canonical path. Treat "." as current directory and ".." as parent directory.',
      constraints: '1 <= path.length <= 3000. path consists of English letters, digits, period ".", slash "/" or "_".',
      examples: [
        { input: 'path = "/home//foo/"', output: '"/home/foo"', why: 'Multiple slashes reduced to single slash, trailing slash dropped.' },
        { input: 'path = "/home/user/Documents/../Pictures"', output: '"/home/user/Pictures"', why: '".." pops Documents directory.' }
      ],
      approaches: [
        {
          name: 'Split by Slash + Directory Stack',
          idea: 'Split string by "/". Skip empty strings and ".". If token is "..", pop from stack if non-empty. Otherwise, push valid directory name. Rejoin with "/".',
          timeComplexity: 'O(n) time to tokenize and process directories',
          spaceComplexity: 'O(n) auxiliary stack space',
          code: {
            python: `def simplify_path(path: str) -> str:\n    stack = []\n    for part in path.split('/'):\n        if part == '' or part == '.':\n            continue\n        elif part == '..':\n            if stack:\n                stack.pop()\n        else:\n            stack.append(part)\n    return '/' + '/'.join(stack)`,
            java: `public static String simplifyPath(String path) {\n    Deque<String> stack = new ArrayDeque<>();\n    for (String part : path.split("/")) {\n        if (part.isEmpty() || part.equals(".")) continue;\n        if (part.equals("..")) {\n            if (!stack.isEmpty()) stack.pop();\n        } else {\n            stack.push(part);\n        }\n    }\n    List<String> list = new ArrayList<>(stack);\n    Collections.reverse(list);\n    return "/" + String.join("/", list);\n}`,
            cpp: `string simplifyPath(string path) {\n    stringstream ss(path);\n    string part;\n    vector<string> st;\n    while (getline(ss, part, '/')) {\n        if (part == "" || part == ".") continue;\n        if (part == "..") {\n            if (!st.empty()) st.pop_back();\n        } else {\n            st.push_back(part);\n        }\n    }\n    string res = "";\n    for (const string& dir : st) res += "/" + dir;\n    return res.empty() ? "/" : res;\n}`,
            javascript: `function simplifyPath(path) {\n    const stack = [];\n    const parts = path.split('/');\n    for (const part of parts) {\n        if (!part || part === '.') continue;\n        if (part === '..') {\n            if (stack.length) stack.pop();\n        } else {\n            stack.push(part);\n        }\n    }\n    return '/' + stack.join('/');\n}`
          },
          lineExplanations: [
            { lines: [3, 5], text: "Ignore consecutive slashes (empty string) and '.' current directory tokens." },
            { lines: [6, 8], text: "When '..' appears, pop the parent directory from stack if stack is not at root." },
            { lines: [9, 10], text: "Push actual directory names onto the stack." },
            { lines: [11, 11], text: "Assemble canonical path by joining stack elements with leading root '/'." }
          ],
          animationSteps: [
            { codeLine: 10, description: 'Push "home". stack = ["home"].', state: { type: 'stack', stack: ['home'], action: 'PUSH "home"' }, highlights: [0], pointers: { top: 0 } },
            { codeLine: 10, description: 'Push "user". stack = ["home", "user"].', state: { type: 'stack', stack: ['home', 'user'], action: 'PUSH "user"' }, highlights: [1], pointers: { top: 1 } },
            { codeLine: 8, description: 'Read "..". Pop parent directory "user". stack = ["home"].', state: { type: 'stack', stack: ['home'], action: 'POP (..)' }, highlights: [0], pointers: { top: 0 } },
            { codeLine: 10, description: 'Push "Pictures". Final canonical path: "/home/Pictures".', state: { type: 'stack', stack: ['home', 'Pictures'], action: 'CANONICAL: /home/Pictures' }, highlights: [1], pointers: { top: 1 } }
          ]
        }
      ],
      commonMistakes: "Throwing an exception when '..' is applied at the root directory '/'. In Unix, '/..' remains at root '/'.",
      relatedQuestionIds: ['stack-valid-parens']
    },

    // -------------------------------------------------------------------------
    // 10. LARGEST RECTANGLE IN HISTOGRAM (LEETCODE 84)
    // -------------------------------------------------------------------------
    {
      id: 'stack-histogram',
      subtopicId: 'stack-monotonic',
      title: 'Largest Rectangle in Histogram',
      difficulty: 'Hard',
      leetcode: { number: 84, url: 'https://leetcode.com/problems/largest-rectangle-in-histogram/' },
      description: 'Given an array of integers heights representing the histogram\'s bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.',
      constraints: '1 <= heights.length <= 10^5. 0 <= heights[i] <= 10^4.',
      examples: [
        { input: 'heights = [2, 1, 5, 6, 2, 3]', output: '10', why: 'The largest rectangle is formed by heights 5 and 6 with area = 5 * 2 = 10.' }
      ],
      approaches: [
        {
          name: 'Monotonic Increasing Stack',
          idea: 'Maintain a stack of bar indices with increasing heights. When a shorter bar is encountered, pop previous bars and compute area: height * (current_index - left_bound - 1).',
          timeComplexity: 'O(n) single pass (each bar pushed and popped exactly once)',
          spaceComplexity: 'O(n) auxiliary stack space',
          code: {
            python: `def largest_rectangle_area(heights):\n    heights.append(0)  # Sentinel to flush remaining bars\n    stack = [-1]       # Left boundary sentinel\n    max_area = 0\n    for i, h in enumerate(heights):\n        while stack[-1] != -1 and heights[stack[-1]] >= h:\n            height = heights[stack.pop()]\n            width = i - stack[-1] - 1\n            max_area = max(max_area, height * width)\n        stack.append(i)\n    heights.pop()\n    return max_area`,
            java: `public static int largestRectangleArea(int[] heights) {\n    int n = heights.length, maxArea = 0;\n    Deque<Integer> stack = new ArrayDeque<>();\n    for (int i = 0; i <= n; i++) {\n        int h = (i == n) ? 0 : heights[i];\n        while (!stack.isEmpty() && heights[stack.peek()] >= h) {\n            int height = heights[stack.pop()];\n            int width = stack.isEmpty() ? i : i - stack.peek() - 1;\n            maxArea = Math.max(maxArea, height * width);\n        }\n        stack.push(i);\n    }\n    return maxArea;\n}`,
            cpp: `int largestRectangleArea(vector<int>& heights) {\n    heights.push_back(0);\n    stack<int> st;\n    int maxArea = 0;\n    for (int i = 0; i < heights.size(); i++) {\n        while (!st.empty() && heights[st.top()] >= heights[i]) {\n            int h = heights[st.top()]; st.pop();\n            int w = st.empty() ? i : i - st.top() - 1;\n            maxArea = max(maxArea, h * w);\n        }\n        st.push(i);\n    }\n    heights.pop_back();\n    return maxArea;\n}`,
            javascript: `function largestRectangleArea(heights) {\n    const copy = [...heights, 0];\n    const stack = [];\n    let maxArea = 0;\n    for (let i = 0; i < copy.length; i++) {\n        while (stack.length && copy[stack[stack.length - 1]] >= copy[i]) {\n            const h = copy[stack.pop()];\n            const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;\n            maxArea = Math.max(maxArea, h * w);\n        }\n        stack.push(i);\n    }\n    return maxArea;\n}`
          },
          lineExplanations: [
            { lines: [2, 3], text: "Append 0-height sentinel at end so all pending bars in stack are flushed." },
            { lines: [5, 9], text: "While current bar is shorter than stack top, pop top: height is heights[popped], width extends between left boundary (stack.top) and right boundary (i)." }
          ],
          animationSteps: [
            { codeLine: 5, description: "Stack holds bars [5, 6]. Next bar has height 2 (shorter).", state: { type: 'stack', stack: ['Bar 2 (h=5)', 'Bar 3 (h=6)'], action: 'ENCOUNTER h=2' }, highlights: [1], pointers: { top: 1 } },
            { codeLine: 7, description: "Pop Bar 3 (h=6). Width = 1. Area = 6 * 1 = 6.", state: { type: 'stack', stack: ['Bar 2 (h=5)'], action: 'CALC AREA = 6' }, highlights: [0], pointers: { top: 0 } },
            { codeLine: 7, description: "Pop Bar 2 (h=5). Width = 4 - 1 - 1 = 2. Area = 5 * 2 = 10 (Max Area!).", state: { type: 'stack', stack: [], action: 'MAX AREA = 10' }, highlights: [], pointers: {} }
          ]
        }
      ],
      commonMistakes: "Testing all O(n^2) pairs of left and right boundaries, which times out on 10^5 elements. Monotonic stack runs in linear O(n).",
      relatedQuestionIds: ['stack-next-greater', 'stack-daily-temperatures']
    }
  ]
};
