/**
 * SynapseCS Language-Specific Implementation: CPP - stack
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['cpp'] = window.DSA_LANG_CODE['cpp'] || {};
  window.DSA_LANG_CODE['cpp']['stack'] = [
  {
    "id": "stack-array-impl",
    "code": [
      {
        "text": "class ArrayStack {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    vector<int> data;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "public:",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    void push(int val) { data.push_back(val); }",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    int pop() {",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "        if (isEmpty()) return -1;",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "        int val = data.back(); data.pop_back(); return val;",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    int top() { return isEmpty() ? -1 : data.back(); }",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    bool isEmpty() { return data.empty(); }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    int size() { return data.size(); }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "};",
        "tag": "exec",
        "lineNum": 12
      }
    ],
    "rawCode": "class ArrayStack {\n    vector<int> data;\npublic:\n    void push(int val) { data.push_back(val); }\n    int pop() {\n        if (isEmpty()) return -1;\n        int val = data.back(); data.pop_back(); return val;\n    }\n    int top() { return isEmpty() ? -1 : data.back(); }\n    bool isEmpty() { return data.empty(); }\n    int size() { return data.size(); }\n};",
    "explanations": {
      "def": "Executes tagged statement [def] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
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
        "text": "    struct Node { int val; Node* next; Node(int v, Node* n) : val(v), next(n) {} };",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    Node* head = nullptr;",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "public:",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    void push(int val) { head = new Node(val, head); }",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "    int pop() {",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "        if (!head) return -1;",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "        Node* t = head; int val = t->val; head = head->next; delete t;",
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
        "text": "    int top() { return head ? head->val : -1; }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "};",
        "tag": "exec",
        "lineNum": 12
      }
    ],
    "rawCode": "class LLStack {\n    struct Node { int val; Node* next; Node(int v, Node* n) : val(v), next(n) {} };\n    Node* head = nullptr;\npublic:\n    void push(int val) { head = new Node(val, head); }\n    int pop() {\n        if (!head) return -1;\n        Node* t = head; int val = t->val; head = head->next; delete t;\n        return val;\n    }\n    int top() { return head ? head->val : -1; }\n};",
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
    "id": "stack-valid-parens",
    "code": [
      {
        "text": "bool isValid(string s) {",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "    stack<char> st;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    for (char c : s) {",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "        if (c == '(') st.push(')');",
        "tag": "branch",
        "lineNum": 4
      },
      {
        "text": "        else if (c == '{') st.push('}');",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "        else if (c == '[') st.push(']');",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "        else {",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "            if (st.empty() || st.top() != c) return false;",
        "tag": "branch",
        "lineNum": 8
      },
      {
        "text": "            st.pop();",
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
        "text": "    return st.empty();",
        "tag": "return",
        "lineNum": 12
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 13
      }
    ],
    "rawCode": "bool isValid(string s) {\n    stack<char> st;\n    for (char c : s) {\n        if (c == '(') st.push(')');\n        else if (c == '{') st.push('}');\n        else if (c == '[') st.push(']');\n        else {\n            if (st.empty() || st.top() != c) return false;\n            st.pop();\n        }\n    }\n    return st.empty();\n}",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp.",
      "mutate": "Executes tagged statement [mutate] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
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
        "text": "    stack<int> st;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    stack<int> minSt;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "public:",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    void push(int val) {",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "        st.push(val);",
        "tag": "mutate",
        "lineNum": 6
      },
      {
        "text": "        int curMin = minSt.empty() ? val : min(val, minSt.top());",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "        minSt.push(curMin);",
        "tag": "mutate",
        "lineNum": 8
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    void pop() { st.pop(); minSt.pop(); }",
        "tag": "mutate",
        "lineNum": 10
      },
      {
        "text": "    int top() { return st.top(); }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    int getMin() { return minSt.top(); }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "};",
        "tag": "exec",
        "lineNum": 13
      }
    ],
    "rawCode": "class MinStack {\n    stack<int> st;\n    stack<int> minSt;\npublic:\n    void push(int val) {\n        st.push(val);\n        int curMin = minSt.empty() ? val : min(val, minSt.top());\n        minSt.push(curMin);\n    }\n    void pop() { st.pop(); minSt.pop(); }\n    int top() { return st.top(); }\n    int getMin() { return minSt.top(); }\n};",
    "explanations": {
      "def": "Executes tagged statement [def] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "mutate": "Executes tagged statement [mutate] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "stack-next-greater",
    "code": [
      {
        "text": "vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "    unordered_map<int, int> map;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    stack<int> st;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    for (int num : nums2) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        while (!st.empty() && st.top() < num) {",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "            map[st.top()] = num; st.pop();",
        "tag": "mutate",
        "lineNum": 6
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "        st.push(num);",
        "tag": "mutate",
        "lineNum": 8
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    vector<int> res;",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    for (int x : nums1) res.push_back(map.count(x) ? map[x] : -1);",
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
    "rawCode": "vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {\n    unordered_map<int, int> map;\n    stack<int> st;\n    for (int num : nums2) {\n        while (!st.empty() && st.top() < num) {\n            map[st.top()] = num; st.pop();\n        }\n        st.push(num);\n    }\n    vector<int> res;\n    for (int x : nums1) res.push_back(map.count(x) ? map[x] : -1);\n    return res;\n}",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "mutate": "Executes tagged statement [mutate] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "stack-daily-temperatures",
    "code": [
      {
        "text": "vector<int> dailyTemperatures(vector<int>& temperatures) {",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "    int n = temperatures.size();",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    vector<int> res(n, 0);",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    stack<int> st;",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    for (int i = 0; i < n; i++) {",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "        while (!st.empty() && temperatures[st.top()] < temperatures[i]) {",
        "tag": "loop",
        "lineNum": 6
      },
      {
        "text": "            int prevI = st.top(); st.pop();",
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
        "text": "        st.push(i);",
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
    "rawCode": "vector<int> dailyTemperatures(vector<int>& temperatures) {\n    int n = temperatures.size();\n    vector<int> res(n, 0);\n    stack<int> st;\n    for (int i = 0; i < n; i++) {\n        while (!st.empty() && temperatures[st.top()] < temperatures[i]) {\n            int prevI = st.top(); st.pop();\n            res[prevI] = i - prevI;\n        }\n        st.push(i);\n    }\n    return res;\n}",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "mutate": "Executes tagged statement [mutate] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "stack-eval-rpn",
    "code": [
      {
        "text": "int evalRPN(vector<string>& tokens) {",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "    stack<int> st;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    for (const string& s : tokens) {",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "        if (s == \"+\" || s == \"-\" || s == \"*\" || s == \"/\") {",
        "tag": "branch",
        "lineNum": 4
      },
      {
        "text": "            int b = st.top(); st.pop();",
        "tag": "mutate",
        "lineNum": 5
      },
      {
        "text": "            int a = st.top(); st.pop();",
        "tag": "mutate",
        "lineNum": 6
      },
      {
        "text": "            if (s == \"+\") st.push(a + b);",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "            else if (s == \"-\") st.push(a - b);",
        "tag": "branch",
        "lineNum": 8
      },
      {
        "text": "            else if (s == \"*\") st.push(a * b);",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "            else st.push(a / b);",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "        } else {",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "            st.push(stoi(s));",
        "tag": "mutate",
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
        "text": "    return st.top();",
        "tag": "return",
        "lineNum": 15
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 16
      }
    ],
    "rawCode": "int evalRPN(vector<string>& tokens) {\n    stack<int> st;\n    for (const string& s : tokens) {\n        if (s == \"+\" || s == \"-\" || s == \"*\" || s == \"/\") {\n            int b = st.top(); st.pop();\n            int a = st.top(); st.pop();\n            if (s == \"+\") st.push(a + b);\n            else if (s == \"-\") st.push(a - b);\n            else if (s == \"*\") st.push(a * b);\n            else st.push(a / b);\n        } else {\n            st.push(stoi(s));\n        }\n    }\n    return st.top();\n}",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp.",
      "mutate": "Executes tagged statement [mutate] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
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
        "text": "    stack<int> inSt, outSt;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "public:",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    void push(int x) { inSt.push(x); }",
        "tag": "mutate",
        "lineNum": 4
      },
      {
        "text": "    int pop() { int v = peek(); outSt.pop(); return v; }",
        "tag": "mutate",
        "lineNum": 5
      },
      {
        "text": "    int peek() {",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "        if (outSt.empty()) {",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "            while (!inSt.empty()) { outSt.push(inSt.top()); inSt.pop(); }",
        "tag": "loop",
        "lineNum": 8
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        return outSt.top();",
        "tag": "return",
        "lineNum": 10
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    bool empty() { return inSt.empty() && outSt.empty(); }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "};",
        "tag": "exec",
        "lineNum": 13
      }
    ],
    "rawCode": "class MyQueue {\n    stack<int> inSt, outSt;\npublic:\n    void push(int x) { inSt.push(x); }\n    int pop() { int v = peek(); outSt.pop(); return v; }\n    int peek() {\n        if (outSt.empty()) {\n            while (!inSt.empty()) { outSt.push(inSt.top()); inSt.pop(); }\n        }\n        return outSt.top();\n    }\n    bool empty() { return inSt.empty() && outSt.empty(); }\n};",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "mutate": "Executes tagged statement [mutate] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "stack-simplify-path",
    "code": [
      {
        "text": "string simplifyPath(string path) {",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "    stringstream ss(path);",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    string part;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    vector<string> st;",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    while (getline(ss, part, '/')) {",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "        if (part == \"\" || part == \".\") continue;",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "        if (part == \"..\") {",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "            if (!st.empty()) st.pop_back();",
        "tag": "branch",
        "lineNum": 8
      },
      {
        "text": "        } else {",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "            st.push_back(part);",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    string res = \"\";",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    for (const string& dir : st) res += \"/\" + dir;",
        "tag": "loop",
        "lineNum": 14
      },
      {
        "text": "    return res.empty() ? \"/\" : res;",
        "tag": "return",
        "lineNum": 15
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 16
      }
    ],
    "rawCode": "string simplifyPath(string path) {\n    stringstream ss(path);\n    string part;\n    vector<string> st;\n    while (getline(ss, part, '/')) {\n        if (part == \"\" || part == \".\") continue;\n        if (part == \"..\") {\n            if (!st.empty()) st.pop_back();\n        } else {\n            st.push_back(part);\n        }\n    }\n    string res = \"\";\n    for (const string& dir : st) res += \"/\" + dir;\n    return res.empty() ? \"/\" : res;\n}",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "stack-histogram",
    "code": [
      {
        "text": "int largestRectangleArea(vector<int>& heights) {",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "    heights.push_back(0);",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    stack<int> st;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    int maxArea = 0;",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "    for (int i = 0; i < heights.size(); i++) {",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "        while (!st.empty() && heights[st.top()] >= heights[i]) {",
        "tag": "loop",
        "lineNum": 6
      },
      {
        "text": "            int h = heights[st.top()]; st.pop();",
        "tag": "mutate",
        "lineNum": 7
      },
      {
        "text": "            int w = st.empty() ? i : i - st.top() - 1;",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "            maxArea = max(maxArea, h * w);",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        st.push(i);",
        "tag": "mutate",
        "lineNum": 11
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    heights.pop_back();",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    return maxArea;",
        "tag": "return",
        "lineNum": 14
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 15
      }
    ],
    "rawCode": "int largestRectangleArea(vector<int>& heights) {\n    heights.push_back(0);\n    stack<int> st;\n    int maxArea = 0;\n    for (int i = 0; i < heights.size(); i++) {\n        while (!st.empty() && heights[st.top()] >= heights[i]) {\n            int h = heights[st.top()]; st.pop();\n            int w = st.empty() ? i : i - st.top() - 1;\n            maxArea = max(maxArea, h * w);\n        }\n        st.push(i);\n    }\n    heights.pop_back();\n    return maxArea;\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "mutate": "Executes tagged statement [mutate] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  }
];
})(typeof window !== 'undefined' ? window : global);
