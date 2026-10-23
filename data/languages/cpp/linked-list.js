/**
 * SynapseCS Language-Specific Implementation: CPP - linked-list
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['cpp'] = window.DSA_LANG_CODE['cpp'] || {};
  window.DSA_LANG_CODE['cpp']['linked-list'] = [
  {
    "id": "ll-create",
    "code": [
      {
        "text": "struct ListNode {",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "    int val;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    ListNode* next;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    ListNode(int x) : val(x), next(nullptr) {}",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "};",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "ListNode* createList() {",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    ListNode* head = new ListNode(10);",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "    ListNode* second = new ListNode(20);",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "    ListNode* third = new ListNode(30);",
        "tag": "init",
        "lineNum": 9
      },
      {
        "text": "    head->next = second;",
        "tag": "pointer",
        "lineNum": 10
      },
      {
        "text": "    second->next = third;",
        "tag": "pointer",
        "lineNum": 11
      },
      {
        "text": "    return head;",
        "tag": "return",
        "lineNum": 12
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 13
      }
    ],
    "rawCode": "struct ListNode {\n    int val;\n    ListNode* next;\n    ListNode(int x) : val(x), next(nullptr) {}\n};\nListNode* createList() {\n    ListNode* head = new ListNode(10);\n    ListNode* second = new ListNode(20);\n    ListNode* third = new ListNode(30);\n    head->next = second;\n    second->next = third;\n    return head;\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "pointer": "Executes tagged statement [pointer] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "ll-insert-head",
    "code": [
      {
        "text": "ListNode* insertAtHead(ListNode* head, int val) {",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "    ListNode* newNode = new ListNode(val);",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    newNode->next = head;",
        "tag": "pointer",
        "lineNum": 3
      },
      {
        "text": "    return newNode;",
        "tag": "return",
        "lineNum": 4
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 5
      }
    ],
    "rawCode": "ListNode* insertAtHead(ListNode* head, int val) {\n    ListNode* newNode = new ListNode(val);\n    newNode->next = head;\n    return newNode;\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "pointer": "Executes tagged statement [pointer] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "ll-insert-tail",
    "code": [
      {
        "text": "ListNode* insertAtTail(ListNode* head, int val) {",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "    ListNode* newNode = new ListNode(val);",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    if (!head) return newNode;",
        "tag": "branch",
        "lineNum": 3
      },
      {
        "text": "    ListNode* curr = head;",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    while (curr->next) curr = curr->next;",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "    curr->next = newNode;",
        "tag": "pointer",
        "lineNum": 6
      },
      {
        "text": "    return head;",
        "tag": "return",
        "lineNum": 7
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 8
      }
    ],
    "rawCode": "ListNode* insertAtTail(ListNode* head, int val) {\n    ListNode* newNode = new ListNode(val);\n    if (!head) return newNode;\n    ListNode* curr = head;\n    while (curr->next) curr = curr->next;\n    curr->next = newNode;\n    return head;\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp.",
      "pointer": "Executes tagged statement [pointer] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "ll-insert-kth",
    "code": [
      {
        "text": "ListNode* insertAtK(ListNode* head, int index, int val) {",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "    if (index == 0) {",
        "tag": "branch",
        "lineNum": 2
      },
      {
        "text": "        ListNode* n = new ListNode(val);",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "        n->next = head;",
        "tag": "pointer",
        "lineNum": 4
      },
      {
        "text": "        return n;",
        "tag": "return",
        "lineNum": 5
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    ListNode* curr = head;",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    for (int i = 0; i < index - 1 && curr; i++) curr = curr->next;",
        "tag": "loop",
        "lineNum": 8
      },
      {
        "text": "    if (!curr) return head;",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "    ListNode* n = new ListNode(val);",
        "tag": "init",
        "lineNum": 10
      },
      {
        "text": "    n->next = curr->next;",
        "tag": "pointer",
        "lineNum": 11
      },
      {
        "text": "    curr->next = n;",
        "tag": "pointer",
        "lineNum": 12
      },
      {
        "text": "    return head;",
        "tag": "return",
        "lineNum": 13
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 14
      }
    ],
    "rawCode": "ListNode* insertAtK(ListNode* head, int index, int val) {\n    if (index == 0) {\n        ListNode* n = new ListNode(val);\n        n->next = head;\n        return n;\n    }\n    ListNode* curr = head;\n    for (int i = 0; i < index - 1 && curr; i++) curr = curr->next;\n    if (!curr) return head;\n    ListNode* n = new ListNode(val);\n    n->next = curr->next;\n    curr->next = n;\n    return head;\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp.",
      "pointer": "Executes tagged statement [pointer] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "ll-delete-head",
    "code": [
      {
        "text": "ListNode* deleteHead(ListNode* head) {",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "    if (!head) return nullptr;",
        "tag": "branch",
        "lineNum": 2
      },
      {
        "text": "    ListNode* temp = head->next;",
        "tag": "pointer",
        "lineNum": 3
      },
      {
        "text": "    delete head; // Free heap memory in C++",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    return temp;",
        "tag": "return",
        "lineNum": 5
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 6
      }
    ],
    "rawCode": "ListNode* deleteHead(ListNode* head) {\n    if (!head) return nullptr;\n    ListNode* temp = head->next;\n    delete head; // Free heap memory in C++\n    return temp;\n}",
    "explanations": {
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp.",
      "pointer": "Executes tagged statement [pointer] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "ll-delete-tail",
    "code": [
      {
        "text": "ListNode* deleteTail(ListNode* head) {",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "    if (!head || !head->next) { delete head; return nullptr; }",
        "tag": "branch",
        "lineNum": 2
      },
      {
        "text": "    ListNode* curr = head;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    while (curr->next->next) curr = curr->next;",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "    delete curr->next; curr->next = nullptr;",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "    return head;",
        "tag": "return",
        "lineNum": 6
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 7
      }
    ],
    "rawCode": "ListNode* deleteTail(ListNode* head) {\n    if (!head || !head->next) { delete head; return nullptr; }\n    ListNode* curr = head;\n    while (curr->next->next) curr = curr->next;\n    delete curr->next; curr->next = nullptr;\n    return head;\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "ll-delete-val",
    "code": [
      {
        "text": "ListNode* removeElements(ListNode* head, int val) {",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "    ListNode dummy(0);",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    dummy.next = head;",
        "tag": "pointer",
        "lineNum": 3
      },
      {
        "text": "    ListNode* curr = &dummy;",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    while (curr->next) {",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "        if (curr->next->val == val) {",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "            ListNode* toDel = curr->next;",
        "tag": "pointer",
        "lineNum": 7
      },
      {
        "text": "            curr->next = curr->next->next;",
        "tag": "pointer",
        "lineNum": 8
      },
      {
        "text": "            delete toDel;",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        } else {",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "            curr = curr->next;",
        "tag": "pointer",
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
        "text": "    return dummy.next;",
        "tag": "return",
        "lineNum": 14
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 15
      }
    ],
    "rawCode": "ListNode* removeElements(ListNode* head, int val) {\n    ListNode dummy(0);\n    dummy.next = head;\n    ListNode* curr = &dummy;\n    while (curr->next) {\n        if (curr->next->val == val) {\n            ListNode* toDel = curr->next;\n            curr->next = curr->next->next;\n            delete toDel;\n        } else {\n            curr = curr->next;\n        }\n    }\n    return dummy.next;\n}",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "pointer": "Executes tagged statement [pointer] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "ll-search",
    "code": [
      {
        "text": "int searchList(ListNode* head, int target) {",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "    ListNode* curr = head;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    int idx = 0;",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    while (curr) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        if (curr->val == target) return idx;",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "        curr = curr->next;",
        "tag": "pointer",
        "lineNum": 6
      },
      {
        "text": "        idx++;",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    return -1;",
        "tag": "return",
        "lineNum": 9
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 10
      }
    ],
    "rawCode": "int searchList(ListNode* head, int target) {\n    ListNode* curr = head;\n    int idx = 0;\n    while (curr) {\n        if (curr->val == target) return idx;\n        curr = curr->next;\n        idx++;\n    }\n    return -1;\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp.",
      "pointer": "Executes tagged statement [pointer] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "ll-traverse",
    "code": [
      {
        "text": "vector<int> traverse(ListNode* head) {",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "    vector<int> res;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    ListNode* curr = head;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    while (curr) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        res.push_back(curr->val);",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "        curr = curr->next;",
        "tag": "pointer",
        "lineNum": 6
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    return res;",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 9
      }
    ],
    "rawCode": "vector<int> traverse(ListNode* head) {\n    vector<int> res;\n    ListNode* curr = head;\n    while (curr) {\n        res.push_back(curr->val);\n        curr = curr->next;\n    }\n    return res;\n}",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "pointer": "Executes tagged statement [pointer] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "ll-update",
    "code": [
      {
        "text": "bool updateVal(ListNode* head, int index, int newVal) {",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "    ListNode* curr = head;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    for (int i = 0; i < index && curr; i++) curr = curr->next;",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "    if (!curr) return false;",
        "tag": "branch",
        "lineNum": 4
      },
      {
        "text": "    curr->val = newVal;",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    return true;",
        "tag": "return",
        "lineNum": 6
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 7
      }
    ],
    "rawCode": "bool updateVal(ListNode* head, int index, int newVal) {\n    ListNode* curr = head;\n    for (int i = 0; i < index && curr; i++) curr = curr->next;\n    if (!curr) return false;\n    curr->val = newVal;\n    return true;\n}",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "ll-size",
    "code": [
      {
        "text": "int getSize(ListNode* head) {",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "    int count = 0;",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    ListNode* curr = head;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    while (curr) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        count++;",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "        curr = curr->next;",
        "tag": "pointer",
        "lineNum": 6
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    return count;",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 9
      }
    ],
    "rawCode": "int getSize(ListNode* head) {\n    int count = 0;\n    ListNode* curr = head;\n    while (curr) {\n        count++;\n        curr = curr->next;\n    }\n    return count;\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "pointer": "Executes tagged statement [pointer] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "ll-reverse",
    "code": [
      {
        "text": "ListNode* reverseList(ListNode* head) {",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "    ListNode* prev = nullptr;",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    ListNode* curr = head;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    while (curr) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        ListNode* nextTemp = curr->next;",
        "tag": "pointer",
        "lineNum": 5
      },
      {
        "text": "        curr->next = prev;",
        "tag": "pointer",
        "lineNum": 6
      },
      {
        "text": "        prev = curr;",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "        curr = nextTemp;",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    return prev;",
        "tag": "return",
        "lineNum": 10
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 11
      }
    ],
    "rawCode": "ListNode* reverseList(ListNode* head) {\n    ListNode* prev = nullptr;\n    ListNode* curr = head;\n    while (curr) {\n        ListNode* nextTemp = curr->next;\n        curr->next = prev;\n        prev = curr;\n        curr = nextTemp;\n    }\n    return prev;\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "pointer": "Executes tagged statement [pointer] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "ll-middle",
    "code": [
      {
        "text": "ListNode* middleNode(ListNode* head) {",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "    ListNode* slow = head;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    ListNode* fast = head;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    while (fast && fast->next) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        slow = slow->next;",
        "tag": "pointer",
        "lineNum": 5
      },
      {
        "text": "        fast = fast->next->next;",
        "tag": "pointer",
        "lineNum": 6
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    return slow;",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 9
      }
    ],
    "rawCode": "ListNode* middleNode(ListNode* head) {\n    ListNode* slow = head;\n    ListNode* fast = head;\n    while (fast && fast->next) {\n        slow = slow->next;\n        fast = fast->next->next;\n    }\n    return slow;\n}",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "pointer": "Executes tagged statement [pointer] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "ll-cycle",
    "code": [
      {
        "text": "bool hasCycle(ListNode* head) {",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "    ListNode* slow = head;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    ListNode* fast = head;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    while (fast && fast->next) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        slow = slow->next;",
        "tag": "pointer",
        "lineNum": 5
      },
      {
        "text": "        fast = fast->next->next;",
        "tag": "pointer",
        "lineNum": 6
      },
      {
        "text": "        if (slow == fast) return true;",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    return false;",
        "tag": "return",
        "lineNum": 9
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 10
      }
    ],
    "rawCode": "bool hasCycle(ListNode* head) {\n    ListNode* slow = head;\n    ListNode* fast = head;\n    while (fast && fast->next) {\n        slow = slow->next;\n        fast = fast->next->next;\n        if (slow == fast) return true;\n    }\n    return false;\n}",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "pointer": "Executes tagged statement [pointer] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "ll-merge",
    "code": [
      {
        "text": "ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    ListNode dummy(0);",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    ListNode* tail = &dummy;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    while (l1 && l2) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        if (l1->val <= l2->val) {",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "            tail->next = l1; l1 = l1->next;",
        "tag": "pointer",
        "lineNum": 6
      },
      {
        "text": "        } else {",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "            tail->next = l2; l2 = l2->next;",
        "tag": "pointer",
        "lineNum": 8
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        tail = tail->next;",
        "tag": "pointer",
        "lineNum": 10
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    tail->next = l1 ? l1 : l2;",
        "tag": "pointer",
        "lineNum": 12
      },
      {
        "text": "    return dummy.next;",
        "tag": "return",
        "lineNum": 13
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 14
      }
    ],
    "rawCode": "ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {\n    ListNode dummy(0);\n    ListNode* tail = &dummy;\n    while (l1 && l2) {\n        if (l1->val <= l2->val) {\n            tail->next = l1; l1 = l1->next;\n        } else {\n            tail->next = l2; l2 = l2->next;\n        }\n        tail = tail->next;\n    }\n    tail->next = l1 ? l1 : l2;\n    return dummy.next;\n}",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp.",
      "pointer": "Executes tagged statement [pointer] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "ll-remove-nth-end",
    "code": [
      {
        "text": "ListNode* removeNthFromEnd(ListNode* head, int n) {",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "    ListNode dummy(0);",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    dummy.next = head;",
        "tag": "pointer",
        "lineNum": 3
      },
      {
        "text": "    ListNode* fast = &dummy;",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    ListNode* slow = &dummy;",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    for (int i = 0; i <= n; i++) fast = fast->next;",
        "tag": "loop",
        "lineNum": 6
      },
      {
        "text": "    while (fast) {",
        "tag": "loop",
        "lineNum": 7
      },
      {
        "text": "        fast = fast->next;",
        "tag": "pointer",
        "lineNum": 8
      },
      {
        "text": "        slow = slow->next;",
        "tag": "pointer",
        "lineNum": 9
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    slow->next = slow->next->next;",
        "tag": "pointer",
        "lineNum": 11
      },
      {
        "text": "    return dummy.next;",
        "tag": "return",
        "lineNum": 12
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 13
      }
    ],
    "rawCode": "ListNode* removeNthFromEnd(ListNode* head, int n) {\n    ListNode dummy(0);\n    dummy.next = head;\n    ListNode* fast = &dummy;\n    ListNode* slow = &dummy;\n    for (int i = 0; i <= n; i++) fast = fast->next;\n    while (fast) {\n        fast = fast->next;\n        slow = slow->next;\n    }\n    slow->next = slow->next->next;\n    return dummy.next;\n}",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "pointer": "Executes tagged statement [pointer] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "ll-palindrome",
    "code": [
      {
        "text": "bool isPalindrome(ListNode* head) {",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "    ListNode* slow = head;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    ListNode* fast = head;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    while (fast && fast->next) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        slow = slow->next;",
        "tag": "pointer",
        "lineNum": 5
      },
      {
        "text": "        fast = fast->next->next;",
        "tag": "pointer",
        "lineNum": 6
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    ListNode* prev = nullptr;",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "    while (slow) {",
        "tag": "loop",
        "lineNum": 9
      },
      {
        "text": "        ListNode* nxt = slow->next;",
        "tag": "pointer",
        "lineNum": 10
      },
      {
        "text": "        slow->next = prev;",
        "tag": "pointer",
        "lineNum": 11
      },
      {
        "text": "        prev = slow;",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "        slow = nxt;",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    ListNode* left = head;",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    ListNode* right = prev;",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "    while (right) {",
        "tag": "loop",
        "lineNum": 17
      },
      {
        "text": "        if (left->val != right->val) return false;",
        "tag": "branch",
        "lineNum": 18
      },
      {
        "text": "        left = left->next;",
        "tag": "pointer",
        "lineNum": 19
      },
      {
        "text": "        right = right->next;",
        "tag": "pointer",
        "lineNum": 20
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "    return true;",
        "tag": "return",
        "lineNum": 22
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 23
      }
    ],
    "rawCode": "bool isPalindrome(ListNode* head) {\n    ListNode* slow = head;\n    ListNode* fast = head;\n    while (fast && fast->next) {\n        slow = slow->next;\n        fast = fast->next->next;\n    }\n    ListNode* prev = nullptr;\n    while (slow) {\n        ListNode* nxt = slow->next;\n        slow->next = prev;\n        prev = slow;\n        slow = nxt;\n    }\n    ListNode* left = head;\n    ListNode* right = prev;\n    while (right) {\n        if (left->val != right->val) return false;\n        left = left->next;\n        right = right->next;\n    }\n    return true;\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "pointer": "Executes tagged statement [pointer] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "ll-lru-cache",
    "code": [
      {
        "text": "struct DNode { int k, v; DNode* prev; DNode* next; DNode(int k, int v) : k(k), v(v), prev(nullptr), next(nullptr) {} };",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "class LRUCache {",
        "tag": "def",
        "lineNum": 2
      },
      {
        "text": "    int cap;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    unordered_map<int, DNode*> map;",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    DNode* head; DNode* tail;",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    void remove(DNode* n) { n->prev->next = n->next; n->next->prev = n->prev; }",
        "tag": "pointer",
        "lineNum": 6
      },
      {
        "text": "    void add(DNode* n) { n->next = head->next; n->prev = head; head->next->prev = n; head->next = n; }",
        "tag": "pointer",
        "lineNum": 7
      },
      {
        "text": "public:",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    LRUCache(int capacity) : cap(capacity) {",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        head = new DNode(0, 0); tail = new DNode(0, 0);",
        "tag": "init",
        "lineNum": 10
      },
      {
        "text": "        head->next = tail; tail->prev = head;",
        "tag": "pointer",
        "lineNum": 11
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    int get(int key) {",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        if (!map.count(key)) return -1;",
        "tag": "branch",
        "lineNum": 14
      },
      {
        "text": "        DNode* n = map[key]; remove(n); add(n); return n->v;",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "    void put(int key, int value) {",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "        if (map.count(key)) remove(map[key]);",
        "tag": "branch",
        "lineNum": 18
      },
      {
        "text": "        DNode* n = new DNode(key, value);",
        "tag": "init",
        "lineNum": 19
      },
      {
        "text": "        add(n); map[key] = n;",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "        if (map.size() > cap) {",
        "tag": "branch",
        "lineNum": 21
      },
      {
        "text": "            DNode* lru = tail->prev;",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "            remove(lru); map.erase(lru->k); delete lru;",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "};",
        "tag": "exec",
        "lineNum": 26
      }
    ],
    "rawCode": "struct DNode { int k, v; DNode* prev; DNode* next; DNode(int k, int v) : k(k), v(v), prev(nullptr), next(nullptr) {} };\nclass LRUCache {\n    int cap;\n    unordered_map<int, DNode*> map;\n    DNode* head; DNode* tail;\n    void remove(DNode* n) { n->prev->next = n->next; n->next->prev = n->prev; }\n    void add(DNode* n) { n->next = head->next; n->prev = head; head->next->prev = n; head->next = n; }\npublic:\n    LRUCache(int capacity) : cap(capacity) {\n        head = new DNode(0, 0); tail = new DNode(0, 0);\n        head->next = tail; tail->prev = head;\n    }\n    int get(int key) {\n        if (!map.count(key)) return -1;\n        DNode* n = map[key]; remove(n); add(n); return n->v;\n    }\n    void put(int key, int value) {\n        if (map.count(key)) remove(map[key]);\n        DNode* n = new DNode(key, value);\n        add(n); map[key] = n;\n        if (map.size() > cap) {\n            DNode* lru = tail->prev;\n            remove(lru); map.erase(lru->k); delete lru;\n        }\n    }\n};",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "def": "Executes tagged statement [def] in cpp.",
      "pointer": "Executes tagged statement [pointer] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  }
];
})(typeof window !== 'undefined' ? window : global);
