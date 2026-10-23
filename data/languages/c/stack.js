/**
 * SynapseCS Language-Specific Implementation: C - stack
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['c'] = window.DSA_LANG_CODE['c'] || {};
  window.DSA_LANG_CODE['c']['stack'] = [
  {
    "id": "stack-array-impl",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <stdlib.h>",
        "code": "#include <stdlib.h>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "#include <stdbool.h>",
        "code": "#include <stdbool.h>",
        "tag": "comment",
        "lineNum": 3
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "#define MAX_SIZE 100",
        "code": "#define MAX_SIZE 100",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "struct ArrayStack {",
        "code": "struct ArrayStack {",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "    int data[MAX_SIZE];",
        "code": "    int data[MAX_SIZE];",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "    int top;",
        "code": "    int top;",
        "tag": "init",
        "lineNum": 9
      },
      {
        "text": "};",
        "code": "};",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "struct ArrayStack* createStack() {",
        "code": "struct ArrayStack* createStack() {",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "    struct ArrayStack* s = (struct ArrayStack*)malloc(sizeof(struct ArrayStack));",
        "code": "    struct ArrayStack* s = (struct ArrayStack*)malloc(sizeof(struct ArrayStack));",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "    s->top = -1;",
        "code": "    s->top = -1;",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    return s;",
        "code": "    return s;",
        "tag": "return",
        "lineNum": 15
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "void push(struct ArrayStack* s, int val) {",
        "code": "void push(struct ArrayStack* s, int val) {",
        "tag": "def",
        "lineNum": 18
      },
      {
        "text": "    if (s->top < MAX_SIZE - 1) {",
        "code": "    if (s->top < MAX_SIZE - 1) {",
        "tag": "def",
        "lineNum": 19
      },
      {
        "text": "        s->data[++s->top] = val;",
        "code": "        s->data[++s->top] = val;",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "int pop(struct ArrayStack* s) {",
        "code": "int pop(struct ArrayStack* s) {",
        "tag": "def",
        "lineNum": 24
      },
      {
        "text": "    if (s->top >= 0) {",
        "code": "    if (s->top >= 0) {",
        "tag": "def",
        "lineNum": 25
      },
      {
        "text": "        return s->data[s->top--];",
        "code": "        return s->data[s->top--];",
        "tag": "return",
        "lineNum": 26
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "    return -1;",
        "code": "    return -1;",
        "tag": "return",
        "lineNum": 28
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 29
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n\n#define MAX_SIZE 100\n\nstruct ArrayStack {\n    int data[MAX_SIZE];\n    int top;\n};\n\nstruct ArrayStack* createStack() {\n    struct ArrayStack* s = (struct ArrayStack*)malloc(sizeof(struct ArrayStack));\n    s->top = -1;\n    return s;\n}\n\nvoid push(struct ArrayStack* s, int val) {\n    if (s->top < MAX_SIZE - 1) {\n        s->data[++s->top] = val;\n    }\n}\n\nint pop(struct ArrayStack* s) {\n    if (s->top >= 0) {\n        return s->data[s->top--];\n    }\n    return -1;\n}",
    "explanations": {
      "def": "Define ArrayStack struct and operations push, pop, createStack.",
      "init": "Initialize top pointer to -1.",
      "return": "Return popped integer or -1 on empty stack.",
      "comment": "Array stack in C.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Stack uses LIFO (last-in, first-out) order; fixed array implementation provides O(1) push and pop."
  },
  {
    "id": "stack-ll-impl",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <stdlib.h>",
        "code": "#include <stdlib.h>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "struct StackNode {",
        "code": "struct StackNode {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    int val;",
        "code": "    int val;",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "    struct StackNode* next;",
        "code": "    struct StackNode* next;",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "};",
        "code": "};",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "struct LinkedStack {",
        "code": "struct LinkedStack {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    struct StackNode* top;",
        "code": "    struct StackNode* top;",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "};",
        "code": "};",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "struct LinkedStack* createLinkedStack() {",
        "code": "struct LinkedStack* createLinkedStack() {",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "    struct LinkedStack* s = (struct LinkedStack*)malloc(sizeof(struct LinkedStack));",
        "code": "    struct LinkedStack* s = (struct LinkedStack*)malloc(sizeof(struct LinkedStack));",
        "tag": "def",
        "lineNum": 14
      },
      {
        "text": "    s->top = NULL;",
        "code": "    s->top = NULL;",
        "tag": "init",
        "lineNum": 15
      },
      {
        "text": "    return s;",
        "code": "    return s;",
        "tag": "return",
        "lineNum": 16
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "void pushLinked(struct LinkedStack* s, int val) {",
        "code": "void pushLinked(struct LinkedStack* s, int val) {",
        "tag": "def",
        "lineNum": 19
      },
      {
        "text": "    struct StackNode* node = (struct StackNode*)malloc(sizeof(struct StackNode));",
        "code": "    struct StackNode* node = (struct StackNode*)malloc(sizeof(struct StackNode));",
        "tag": "def",
        "lineNum": 20
      },
      {
        "text": "    node->val = val;",
        "code": "    node->val = val;",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "    node->next = s->top;",
        "code": "    node->next = s->top;",
        "tag": "pointer",
        "lineNum": 22
      },
      {
        "text": "    s->top = node;",
        "code": "    s->top = node;",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "int popLinked(struct LinkedStack* s) {",
        "code": "int popLinked(struct LinkedStack* s) {",
        "tag": "def",
        "lineNum": 26
      },
      {
        "text": "    if (s->top == NULL) return -1;",
        "code": "    if (s->top == NULL) return -1;",
        "tag": "branch",
        "lineNum": 27
      },
      {
        "text": "    struct StackNode* temp = s->top;",
        "code": "    struct StackNode* temp = s->top;",
        "tag": "def",
        "lineNum": 28
      },
      {
        "text": "    int val = temp->val;",
        "code": "    int val = temp->val;",
        "tag": "init",
        "lineNum": 29
      },
      {
        "text": "    s->top = s->top->next;",
        "code": "    s->top = s->top->next;",
        "tag": "pointer",
        "lineNum": 30
      },
      {
        "text": "    free(temp);",
        "code": "    free(temp);",
        "tag": "mutate",
        "lineNum": 31
      },
      {
        "text": "    return val;",
        "code": "    return val;",
        "tag": "return",
        "lineNum": 32
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 33
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct StackNode {\n    int val;\n    struct StackNode* next;\n};\n\nstruct LinkedStack {\n    struct StackNode* top;\n};\n\nstruct LinkedStack* createLinkedStack() {\n    struct LinkedStack* s = (struct LinkedStack*)malloc(sizeof(struct LinkedStack));\n    s->top = NULL;\n    return s;\n}\n\nvoid pushLinked(struct LinkedStack* s, int val) {\n    struct StackNode* node = (struct StackNode*)malloc(sizeof(struct StackNode));\n    node->val = val;\n    node->next = s->top;\n    s->top = node;\n}\n\nint popLinked(struct LinkedStack* s) {\n    if (s->top == NULL) return -1;\n    struct StackNode* temp = s->top;\n    int val = temp->val;\n    s->top = s->top->next;\n    free(temp);\n    return val;\n}",
    "explanations": {
      "def": "Define StackNode and LinkedStack structs.",
      "init": "Set s->top = NULL.",
      "branch": "Check if stack is empty (s->top == NULL).",
      "pointer": "Update node->next = s->top and s->top = node.",
      "mutate": "Deallocate popped node with free(temp).",
      "return": "Return popped value.",
      "comment": "Linked stack implementation.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Linked stack grows dynamically without size limit; memory must be freed on pop to prevent memory leaks."
  },
  {
    "id": "stack-valid-parens",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <stdbool.h>",
        "code": "#include <stdbool.h>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "#include <string.h>",
        "code": "#include <string.h>",
        "tag": "comment",
        "lineNum": 3
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "bool isValid(char* s) {",
        "code": "bool isValid(char* s) {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "    int n = strlen(s);",
        "code": "    int n = strlen(s);",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "    char stack[1000];",
        "code": "    char stack[1000];",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    int top = -1;",
        "code": "    int top = -1;",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    for (int i = 0; i < n; i++) {",
        "code": "    for (int i = 0; i < n; i++) {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "        char c = s[i];",
        "code": "        char c = s[i];",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "        if (c == '(' || c == '{' || c == '[') {",
        "code": "        if (c == '(' || c == '{' || c == '[') {",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "            stack[++top] = c;",
        "code": "            stack[++top] = c;",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        } else {",
        "code": "        } else {",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "            if (top == -1) return false;",
        "code": "            if (top == -1) return false;",
        "tag": "branch",
        "lineNum": 15
      },
      {
        "text": "            char open = stack[top--];",
        "code": "            char open = stack[top--];",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "            if (c == ')' && open != '(') return false;",
        "code": "            if (c == ')' && open != '(') return false;",
        "tag": "branch",
        "lineNum": 17
      },
      {
        "text": "            if (c == '}' && open != '{') return false;",
        "code": "            if (c == '}' && open != '{') return false;",
        "tag": "branch",
        "lineNum": 18
      },
      {
        "text": "            if (c == ']' && open != '[') return false;",
        "code": "            if (c == ']' && open != '[') return false;",
        "tag": "branch",
        "lineNum": 19
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "    return top == -1;",
        "code": "    return top == -1;",
        "tag": "return",
        "lineNum": 22
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 23
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdbool.h>\n#include <string.h>\n\nbool isValid(char* s) {\n    int n = strlen(s);\n    char stack[1000];\n    int top = -1;\n\n    for (int i = 0; i < n; i++) {\n        char c = s[i];\n        if (c == '(' || c == '{' || c == '[') {\n            stack[++top] = c;\n        } else {\n            if (top == -1) return false;\n            char open = stack[top--];\n            if (c == ')' && open != '(') return false;\n            if (c == '}' && open != '{') return false;\n            if (c == ']' && open != '[') return false;\n        }\n    }\n    return top == -1;\n}",
    "explanations": {
      "def": "Define isValid validating balanced brackets.",
      "init": "Initialize character stack array and top = -1.",
      "branch": "Push opening bracket, or verify matching closing bracket.",
      "return": "Return true if all brackets matched (top == -1).",
      "comment": "Parentheses validation.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Stack holds unmatched opening brackets; encountering a mismatched closing bracket invalidates the string immediately."
  },
  {
    "id": "stack-min",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <stdlib.h>",
        "code": "#include <stdlib.h>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "struct MinStack {",
        "code": "struct MinStack {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    int stack[1000];",
        "code": "    int stack[1000];",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "    int minStack[1000];",
        "code": "    int minStack[1000];",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "    int top;",
        "code": "    int top;",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "};",
        "code": "};",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "struct MinStack* minStackCreate() {",
        "code": "struct MinStack* minStackCreate() {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "    struct MinStack* s = (struct MinStack*)malloc(sizeof(struct MinStack));",
        "code": "    struct MinStack* s = (struct MinStack*)malloc(sizeof(struct MinStack));",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "    s->top = -1;",
        "code": "    s->top = -1;",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    return s;",
        "code": "    return s;",
        "tag": "return",
        "lineNum": 13
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "void minStackPush(struct MinStack* obj, int val) {",
        "code": "void minStackPush(struct MinStack* obj, int val) {",
        "tag": "def",
        "lineNum": 16
      },
      {
        "text": "    obj->stack[++obj->top] = val;",
        "code": "    obj->stack[++obj->top] = val;",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "    if (obj->top == 0 || val < obj->minStack[obj->top - 1]) {",
        "code": "    if (obj->top == 0 || val < obj->minStack[obj->top - 1]) {",
        "tag": "def",
        "lineNum": 18
      },
      {
        "text": "        obj->minStack[obj->top] = val;",
        "code": "        obj->minStack[obj->top] = val;",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "    } else {",
        "code": "    } else {",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "        obj->minStack[obj->top] = obj->minStack[obj->top - 1];",
        "code": "        obj->minStack[obj->top] = obj->minStack[obj->top - 1];",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "int minStackGetMin(struct MinStack* obj) {",
        "code": "int minStackGetMin(struct MinStack* obj) {",
        "tag": "def",
        "lineNum": 25
      },
      {
        "text": "    return obj->minStack[obj->top];",
        "code": "    return obj->minStack[obj->top];",
        "tag": "return",
        "lineNum": 26
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 27
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct MinStack {\n    int stack[1000];\n    int minStack[1000];\n    int top;\n};\n\nstruct MinStack* minStackCreate() {\n    struct MinStack* s = (struct MinStack*)malloc(sizeof(struct MinStack));\n    s->top = -1;\n    return s;\n}\n\nvoid minStackPush(struct MinStack* obj, int val) {\n    obj->stack[++obj->top] = val;\n    if (obj->top == 0 || val < obj->minStack[obj->top - 1]) {\n        obj->minStack[obj->top] = val;\n    } else {\n        obj->minStack[obj->top] = obj->minStack[obj->top - 1];\n    }\n}\n\nint minStackGetMin(struct MinStack* obj) {\n    return obj->minStack[obj->top];\n}",
    "explanations": {
      "def": "Define MinStack struct with primary and minimum tracking stacks.",
      "init": "Initialize top = -1.",
      "return": "Return current minimum in O(1) time.",
      "comment": "Min stack.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Auxiliary minStack tracks the minimum value up to each stack height, supporting getMin() in O(1) time."
  },
  {
    "id": "stack-next-greater",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <stdlib.h>",
        "code": "#include <stdlib.h>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "int* nextGreaterElement(int* nums1, int nums1Size, int* nums2, int nums2Size, int* returnSize) {",
        "code": "int* nextGreaterElement(int* nums1, int nums1Size, int* nums2, int nums2Size, int* returnSize) {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    int* res = (int*)malloc(nums1Size * sizeof(int));",
        "code": "    int* res = (int*)malloc(nums1Size * sizeof(int));",
        "tag": "alloc",
        "lineNum": 5
      },
      {
        "text": "    *returnSize = nums1Size;",
        "code": "    *returnSize = nums1Size;",
        "tag": "comment",
        "lineNum": 6
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    for (int i = 0; i < nums1Size; i++) {",
        "code": "    for (int i = 0; i < nums1Size; i++) {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "        int target = nums1[i];",
        "code": "        int target = nums1[i];",
        "tag": "init",
        "lineNum": 9
      },
      {
        "text": "        int foundIdx = -1;",
        "code": "        int foundIdx = -1;",
        "tag": "init",
        "lineNum": 10
      },
      {
        "text": "        res[i] = -1;",
        "code": "        res[i] = -1;",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "        for (int j = 0; j < nums2Size; j++) {",
        "code": "        for (int j = 0; j < nums2Size; j++) {",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "            if (nums2[j] == target) {",
        "code": "            if (nums2[j] == target) {",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "                foundIdx = j;",
        "code": "                foundIdx = j;",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "                break;",
        "code": "                break;",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "            }",
        "code": "            }",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "        for (int j = foundIdx + 1; j < nums2Size; j++) {",
        "code": "        for (int j = foundIdx + 1; j < nums2Size; j++) {",
        "tag": "def",
        "lineNum": 18
      },
      {
        "text": "            if (nums2[j] > target) {",
        "code": "            if (nums2[j] > target) {",
        "tag": "def",
        "lineNum": 19
      },
      {
        "text": "                res[i] = nums2[j];",
        "code": "                res[i] = nums2[j];",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "                break;",
        "code": "                break;",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "            }",
        "code": "            }",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "    return res;",
        "code": "    return res;",
        "tag": "return",
        "lineNum": 25
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 26
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nint* nextGreaterElement(int* nums1, int nums1Size, int* nums2, int nums2Size, int* returnSize) {\n    int* res = (int*)malloc(nums1Size * sizeof(int));\n    *returnSize = nums1Size;\n\n    for (int i = 0; i < nums1Size; i++) {\n        int target = nums1[i];\n        int foundIdx = -1;\n        res[i] = -1;\n        for (int j = 0; j < nums2Size; j++) {\n            if (nums2[j] == target) {\n                foundIdx = j;\n                break;\n            }\n        }\n        for (int j = foundIdx + 1; j < nums2Size; j++) {\n            if (nums2[j] > target) {\n                res[i] = nums2[j];\n                break;\n            }\n        }\n    }\n    return res;\n}",
    "explanations": {
      "def": "Define nextGreaterElement function.",
      "alloc": "Allocate result array buffer with malloc().",
      "init": "Set default res[i] = -1.",
      "return": "Return result array pointer.",
      "comment": "Next greater element.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Monotonic stack finds next greater elements in O(N) time by maintaining elements in decreasing order."
  },
  {
    "id": "stack-daily-temperatures",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <stdlib.h>",
        "code": "#include <stdlib.h>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "int* dailyTemperatures(int* temperatures, int temperaturesSize, int* returnSize) {",
        "code": "int* dailyTemperatures(int* temperatures, int temperaturesSize, int* returnSize) {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    int* res = (int*)calloc(temperaturesSize, sizeof(int));",
        "code": "    int* res = (int*)calloc(temperaturesSize, sizeof(int));",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    int* stack = (int*)malloc(temperaturesSize * sizeof(int));",
        "code": "    int* stack = (int*)malloc(temperaturesSize * sizeof(int));",
        "tag": "alloc",
        "lineNum": 6
      },
      {
        "text": "    int top = -1;",
        "code": "    int top = -1;",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "    *returnSize = temperaturesSize;",
        "code": "    *returnSize = temperaturesSize;",
        "tag": "comment",
        "lineNum": 8
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    for (int i = 0; i < temperaturesSize; i++) {",
        "code": "    for (int i = 0; i < temperaturesSize; i++) {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "        while (top >= 0 && temperatures[i] > temperatures[stack[top]]) {",
        "code": "        while (top >= 0 && temperatures[i] > temperatures[stack[top]]) {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "            int prevIdx = stack[top--];",
        "code": "            int prevIdx = stack[top--];",
        "tag": "init",
        "lineNum": 12
      },
      {
        "text": "            res[prevIdx] = i - prevIdx;",
        "code": "            res[prevIdx] = i - prevIdx;",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "        stack[++top] = i;",
        "code": "        stack[++top] = i;",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "    free(stack);",
        "code": "    free(stack);",
        "tag": "mutate",
        "lineNum": 17
      },
      {
        "text": "    return res;",
        "code": "    return res;",
        "tag": "return",
        "lineNum": 18
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 19
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nint* dailyTemperatures(int* temperatures, int temperaturesSize, int* returnSize) {\n    int* res = (int*)calloc(temperaturesSize, sizeof(int));\n    int* stack = (int*)malloc(temperaturesSize * sizeof(int));\n    int top = -1;\n    *returnSize = temperaturesSize;\n\n    for (int i = 0; i < temperaturesSize; i++) {\n        while (top >= 0 && temperatures[i] > temperatures[stack[top]]) {\n            int prevIdx = stack[top--];\n            res[prevIdx] = i - prevIdx;\n        }\n        stack[++top] = i;\n    }\n    free(stack);\n    return res;\n}",
    "explanations": {
      "def": "Define dailyTemperatures using monotonic stack.",
      "alloc": "Allocate zero-initialized result array via calloc() and stack buffer.",
      "init": "Initialize top = -1 and returnSize.",
      "mutate": "Record days delta: res[prevIdx] = i - prevIdx, and push i.",
      "return": "Free stack buffer and return res.",
      "comment": "Daily temperatures in C.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Monotonic decreasing stack stores unresolved day indices; popping computes distance to the warmer day in O(N) overall time."
  },
  {
    "id": "stack-eval-rpn",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <stdlib.h>",
        "code": "#include <stdlib.h>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "#include <string.h>",
        "code": "#include <string.h>",
        "tag": "comment",
        "lineNum": 3
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "int evalRPN(char** tokens, int tokensSize) {",
        "code": "int evalRPN(char** tokens, int tokensSize) {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "    int stack[1000];",
        "code": "    int stack[1000];",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "    int top = -1;",
        "code": "    int top = -1;",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    for (int i = 0; i < tokensSize; i++) {",
        "code": "    for (int i = 0; i < tokensSize; i++) {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "        char* t = tokens[i];",
        "code": "        char* t = tokens[i];",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        if (strcmp(t, \"+\") == 0) {",
        "code": "        if (strcmp(t, \"+\") == 0) {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "            int b = stack[top--], a = stack[top--];",
        "code": "            int b = stack[top--], a = stack[top--];",
        "tag": "init",
        "lineNum": 12
      },
      {
        "text": "            stack[++top] = a + b;",
        "code": "            stack[++top] = a + b;",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        } else if (strcmp(t, \"-\") == 0) {",
        "code": "        } else if (strcmp(t, \"-\") == 0) {",
        "tag": "def",
        "lineNum": 14
      },
      {
        "text": "            int b = stack[top--], a = stack[top--];",
        "code": "            int b = stack[top--], a = stack[top--];",
        "tag": "init",
        "lineNum": 15
      },
      {
        "text": "            stack[++top] = a - b;",
        "code": "            stack[++top] = a - b;",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "        } else if (strcmp(t, \"*\") == 0) {",
        "code": "        } else if (strcmp(t, \"*\") == 0) {",
        "tag": "def",
        "lineNum": 17
      },
      {
        "text": "            int b = stack[top--], a = stack[top--];",
        "code": "            int b = stack[top--], a = stack[top--];",
        "tag": "init",
        "lineNum": 18
      },
      {
        "text": "            stack[++top] = a * b;",
        "code": "            stack[++top] = a * b;",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "        } else if (strcmp(t, \"/\") == 0) {",
        "code": "        } else if (strcmp(t, \"/\") == 0) {",
        "tag": "def",
        "lineNum": 20
      },
      {
        "text": "            int b = stack[top--], a = stack[top--];",
        "code": "            int b = stack[top--], a = stack[top--];",
        "tag": "init",
        "lineNum": 21
      },
      {
        "text": "            stack[++top] = a / b;",
        "code": "            stack[++top] = a / b;",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "        } else {",
        "code": "        } else {",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "            stack[++top] = atoi(t);",
        "code": "            stack[++top] = atoi(t);",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "    return stack[top];",
        "code": "    return stack[top];",
        "tag": "return",
        "lineNum": 27
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 28
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint evalRPN(char** tokens, int tokensSize) {\n    int stack[1000];\n    int top = -1;\n\n    for (int i = 0; i < tokensSize; i++) {\n        char* t = tokens[i];\n        if (strcmp(t, \"+\") == 0) {\n            int b = stack[top--], a = stack[top--];\n            stack[++top] = a + b;\n        } else if (strcmp(t, \"-\") == 0) {\n            int b = stack[top--], a = stack[top--];\n            stack[++top] = a - b;\n        } else if (strcmp(t, \"*\") == 0) {\n            int b = stack[top--], a = stack[top--];\n            stack[++top] = a * b;\n        } else if (strcmp(t, \"/\") == 0) {\n            int b = stack[top--], a = stack[top--];\n            stack[++top] = a / b;\n        } else {\n            stack[++top] = atoi(t);\n        }\n    }\n    return stack[top];\n}",
    "explanations": {
      "def": "Define evalRPN evaluating postfix expressions.",
      "init": "Initialize operand stack array and top = -1.",
      "return": "Return final evaluated expression result: stack[top].",
      "comment": "Reverse Polish Notation.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "In RPN, operators act on the two most recently pushed operands; popping b then a preserves non-commutative order (a - b and a / b)."
  },
  {
    "id": "stack-queue-using-stacks",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <stdlib.h>",
        "code": "#include <stdlib.h>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "struct MyQueue {",
        "code": "struct MyQueue {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    int inStack[100];",
        "code": "    int inStack[100];",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "    int outStack[100];",
        "code": "    int outStack[100];",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "    int inTop;",
        "code": "    int inTop;",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "    int outTop;",
        "code": "    int outTop;",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "};",
        "code": "};",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "struct MyQueue* myQueueCreate() {",
        "code": "struct MyQueue* myQueueCreate() {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "    struct MyQueue* q = (struct MyQueue*)malloc(sizeof(struct MyQueue));",
        "code": "    struct MyQueue* q = (struct MyQueue*)malloc(sizeof(struct MyQueue));",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "    q->inTop = -1;",
        "code": "    q->inTop = -1;",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    q->outTop = -1;",
        "code": "    q->outTop = -1;",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    return q;",
        "code": "    return q;",
        "tag": "return",
        "lineNum": 15
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "void myQueuePush(struct MyQueue* obj, int x) {",
        "code": "void myQueuePush(struct MyQueue* obj, int x) {",
        "tag": "def",
        "lineNum": 18
      },
      {
        "text": "    obj->inStack[++obj->inTop] = x;",
        "code": "    obj->inStack[++obj->inTop] = x;",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "int myQueuePop(struct MyQueue* obj) {",
        "code": "int myQueuePop(struct MyQueue* obj) {",
        "tag": "def",
        "lineNum": 22
      },
      {
        "text": "    if (obj->outTop == -1) {",
        "code": "    if (obj->outTop == -1) {",
        "tag": "def",
        "lineNum": 23
      },
      {
        "text": "        while (obj->inTop >= 0) {",
        "code": "        while (obj->inTop >= 0) {",
        "tag": "def",
        "lineNum": 24
      },
      {
        "text": "            obj->outStack[++obj->outTop] = obj->inStack[obj->inTop--];",
        "code": "            obj->outStack[++obj->outTop] = obj->inStack[obj->inTop--];",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "    return obj->outStack[obj->outTop--];",
        "code": "    return obj->outStack[obj->outTop--];",
        "tag": "return",
        "lineNum": 28
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 29
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct MyQueue {\n    int inStack[100];\n    int outStack[100];\n    int inTop;\n    int outTop;\n};\n\nstruct MyQueue* myQueueCreate() {\n    struct MyQueue* q = (struct MyQueue*)malloc(sizeof(struct MyQueue));\n    q->inTop = -1;\n    q->outTop = -1;\n    return q;\n}\n\nvoid myQueuePush(struct MyQueue* obj, int x) {\n    obj->inStack[++obj->inTop] = x;\n}\n\nint myQueuePop(struct MyQueue* obj) {\n    if (obj->outTop == -1) {\n        while (obj->inTop >= 0) {\n            obj->outStack[++obj->outTop] = obj->inStack[obj->inTop--];\n        }\n    }\n    return obj->outStack[obj->outTop--];\n}",
    "explanations": {
      "def": "Define MyQueue using two stacks.",
      "init": "Initialize inTop = -1 and outTop = -1.",
      "return": "Return dequeued value.",
      "comment": "Queue using stacks.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Transferring elements from inStack to outStack reverses order, transforming LIFO into FIFO with O(1) amortized time per operation."
  },
  {
    "id": "stack-simplify-path",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <stdlib.h>",
        "code": "#include <stdlib.h>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "#include <string.h>",
        "code": "#include <string.h>",
        "tag": "comment",
        "lineNum": 3
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "char* simplifyPath(char* path) {",
        "code": "char* simplifyPath(char* path) {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "    char* stack[100];",
        "code": "    char* stack[100];",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    int top = -1;",
        "code": "    int top = -1;",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "    char* token = strtok(path, \"/\");",
        "code": "    char* token = strtok(path, \"/\");",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    while (token != NULL) {",
        "code": "    while (token != NULL) {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "        if (strcmp(token, \"..\") == 0) {",
        "code": "        if (strcmp(token, \"..\") == 0) {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "            if (top >= 0) top--;",
        "code": "            if (top >= 0) top--;",
        "tag": "branch",
        "lineNum": 12
      },
      {
        "text": "        } else if (strcmp(token, \".\") != 0 && strlen(token) > 0) {",
        "code": "        } else if (strcmp(token, \".\") != 0 && strlen(token) > 0) {",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "            stack[++top] = token;",
        "code": "            stack[++top] = token;",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "        token = strtok(NULL, \"/\");",
        "code": "        token = strtok(NULL, \"/\");",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "    char* res = (char*)malloc(1000 * sizeof(char));",
        "code": "    char* res = (char*)malloc(1000 * sizeof(char));",
        "tag": "alloc",
        "lineNum": 19
      },
      {
        "text": "    res[0] = '\\0';",
        "code": "    res[0] = '\\0';",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "    if (top == -1) {",
        "code": "    if (top == -1) {",
        "tag": "def",
        "lineNum": 21
      },
      {
        "text": "        strcpy(res, \"/\");",
        "code": "        strcpy(res, \"/\");",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "        return res;",
        "code": "        return res;",
        "tag": "return",
        "lineNum": 23
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "    for (int i = 0; i <= top; i++) {",
        "code": "    for (int i = 0; i <= top; i++) {",
        "tag": "def",
        "lineNum": 25
      },
      {
        "text": "        strcat(res, \"/\");",
        "code": "        strcat(res, \"/\");",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "        strcat(res, stack[i]);",
        "code": "        strcat(res, stack[i]);",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 28
      },
      {
        "text": "    return res;",
        "code": "    return res;",
        "tag": "return",
        "lineNum": 29
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 30
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nchar* simplifyPath(char* path) {\n    char* stack[100];\n    int top = -1;\n    char* token = strtok(path, \"/\");\n\n    while (token != NULL) {\n        if (strcmp(token, \"..\") == 0) {\n            if (top >= 0) top--;\n        } else if (strcmp(token, \".\") != 0 && strlen(token) > 0) {\n            stack[++top] = token;\n        }\n        token = strtok(NULL, \"/\");\n    }\n\n    char* res = (char*)malloc(1000 * sizeof(char));\n    res[0] = '\\0';\n    if (top == -1) {\n        strcpy(res, \"/\");\n        return res;\n    }\n    for (int i = 0; i <= top; i++) {\n        strcat(res, \"/\");\n        strcat(res, stack[i]);\n    }\n    return res;\n}",
    "explanations": {
      "def": "Define simplifyPath tokenizing Unix path.",
      "alloc": "Allocate canonical path result string with malloc().",
      "init": "Tokenize path using strtok(path, \"/\").",
      "branch": "If \"..\", pop directory; if non-empty and not \".\", push directory.",
      "return": "Return simplified canonical path.",
      "comment": "Unix path simplification.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Stack naturally represents directory hierarchy: \"..\" pops the parent directory while \".\" preserves current position."
  },
  {
    "id": "stack-histogram",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <stdlib.h>",
        "code": "#include <stdlib.h>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "int largestRectangleArea(int* heights, int heightsSize) {",
        "code": "int largestRectangleArea(int* heights, int heightsSize) {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    int* stack = (int*)malloc((heightsSize + 1) * sizeof(int));",
        "code": "    int* stack = (int*)malloc((heightsSize + 1) * sizeof(int));",
        "tag": "alloc",
        "lineNum": 5
      },
      {
        "text": "    int top = -1;",
        "code": "    int top = -1;",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "    int maxArea = 0;",
        "code": "    int maxArea = 0;",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    for (int i = 0; i <= heightsSize; i++) {",
        "code": "    for (int i = 0; i <= heightsSize; i++) {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "        int h = (i == heightsSize) ? 0 : heights[i];",
        "code": "        int h = (i == heightsSize) ? 0 : heights[i];",
        "tag": "init",
        "lineNum": 10
      },
      {
        "text": "        while (top >= 0 && h < heights[stack[top]]) {",
        "code": "        while (top >= 0 && h < heights[stack[top]]) {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "            int height = heights[stack[top--]];",
        "code": "            int height = heights[stack[top--]];",
        "tag": "init",
        "lineNum": 12
      },
      {
        "text": "            int width = (top == -1) ? i : i - stack[top] - 1;",
        "code": "            int width = (top == -1) ? i : i - stack[top] - 1;",
        "tag": "init",
        "lineNum": 13
      },
      {
        "text": "            int area = height * width;",
        "code": "            int area = height * width;",
        "tag": "init",
        "lineNum": 14
      },
      {
        "text": "            if (area > maxArea) maxArea = area;",
        "code": "            if (area > maxArea) maxArea = area;",
        "tag": "branch",
        "lineNum": 15
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "        stack[++top] = i;",
        "code": "        stack[++top] = i;",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "    free(stack);",
        "code": "    free(stack);",
        "tag": "mutate",
        "lineNum": 19
      },
      {
        "text": "    return maxArea;",
        "code": "    return maxArea;",
        "tag": "return",
        "lineNum": 20
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 21
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nint largestRectangleArea(int* heights, int heightsSize) {\n    int* stack = (int*)malloc((heightsSize + 1) * sizeof(int));\n    int top = -1;\n    int maxArea = 0;\n\n    for (int i = 0; i <= heightsSize; i++) {\n        int h = (i == heightsSize) ? 0 : heights[i];\n        while (top >= 0 && h < heights[stack[top]]) {\n            int height = heights[stack[top--]];\n            int width = (top == -1) ? i : i - stack[top] - 1;\n            int area = height * width;\n            if (area > maxArea) maxArea = area;\n        }\n        stack[++top] = i;\n    }\n    free(stack);\n    return maxArea;\n}",
    "explanations": {
      "def": "Define largestRectangleArea using monotonic stack.",
      "alloc": "Allocate stack buffer with malloc().",
      "init": "Initialize top = -1 and maxArea = 0.",
      "mutate": "Pop bar, compute area = height * width, and update maxArea.",
      "return": "Free stack buffer and return maxArea.",
      "comment": "Histogram rectangle calculation.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "branch": "Executes [branch] operation in this algorithm step."
    },
    "notes": "Monotonic increasing stack computes maximum rectangle in O(N) time; sentinel height 0 flushes all remaining bars."
  }
];
})(typeof window !== 'undefined' ? window : global);
