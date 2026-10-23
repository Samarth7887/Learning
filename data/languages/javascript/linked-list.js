/**
 * SynapseCS Language-Specific Implementation: JAVASCRIPT - Linked List
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['javascript'] = window.DSA_LANG_CODE['javascript'] || {};
  window.DSA_LANG_CODE['javascript']['linked-list'] = [
  {
    "id": "ll-create",
    "code": [
      {
        "text": "function ListNode(val, next = null) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    this.val = val;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    this.next = next;",
        "tag": "pointer",
        "lineNum": 3
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "function createList() {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "    const head = new ListNode(10);",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "    const second = new ListNode(20);",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "    const third = new ListNode(30);",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "    head.next = second;",
        "tag": "pointer",
        "lineNum": 9
      },
      {
        "text": "    second.next = third;",
        "tag": "pointer",
        "lineNum": 10
      },
      {
        "text": "    return head;",
        "tag": "return",
        "lineNum": 11
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 12
      }
    ],
    "rawCode": "function ListNode(val, next = null) {\n    this.val = val;\n    this.next = next;\n}\nfunction createList() {\n    const head = new ListNode(10);\n    const second = new ListNode(20);\n    const third = new ListNode(30);\n    head.next = second;\n    second.next = third;\n    return head;\n}",
    "explanations": {
      "step_1": "Define the fundamental Node constructor storing the element value and a pointer reference.",
      "step_2": "Instantiate 3 individual nodes with values 10, 20, and 30 in heap memory.",
      "step_3": "Link node 10 to node 20, and node 20 to node 30 via forward next pointers.",
      "step_4": "Return the head pointer pointing to the first node in the sequence.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "ll-insert-head",
    "code": [
      {
        "text": "function insertAtHead(head, val) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    const newNode = new ListNode(val);",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    newNode.next = head;",
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
    "rawCode": "function insertAtHead(head, val) {\n    const newNode = new ListNode(val);\n    newNode.next = head;\n    return newNode;\n}",
    "explanations": {
      "step_1": "Allocate a new heap node holding the target insertion value.",
      "step_2": "Point the new node's next link to the existing head node.",
      "step_3": "Return the new node as the updated head of the entire list.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "ll-insert-tail",
    "code": [
      {
        "text": "function insertAtTail(head, val) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    const newNode = new ListNode(val);",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    if (!head) return newNode;",
        "tag": "branch",
        "lineNum": 3
      },
      {
        "text": "    let curr = head;",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    while (curr.next) curr = curr.next;",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "    curr.next = newNode;",
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
    "rawCode": "function insertAtTail(head, val) {\n    const newNode = new ListNode(val);\n    if (!head) return newNode;\n    let curr = head;\n    while (curr.next) curr = curr.next;\n    curr.next = newNode;\n    return head;\n}",
    "explanations": {
      "step_1": "Handle edge case: if list is empty, newly allocated node is returned as head.",
      "step_2": "Step through the chain with pointer curr until reaching the node where curr.next is null.",
      "step_3": "Link the final node to the new node and return the unchanged head pointer.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "ll-insert-kth",
    "code": [
      {
        "text": "function insertAtK(head, index, val) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    if (index === 0) {",
        "tag": "branch",
        "lineNum": 2
      },
      {
        "text": "        const n = new ListNode(val);",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "        n.next = head;",
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
        "text": "    let curr = head;",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    for (let i = 0; i < index - 1 && curr; i++) curr = curr.next;",
        "tag": "loop",
        "lineNum": 8
      },
      {
        "text": "    if (!curr) return head;",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "    const n = new ListNode(val);",
        "tag": "init",
        "lineNum": 10
      },
      {
        "text": "    n.next = curr.next;",
        "tag": "pointer",
        "lineNum": 11
      },
      {
        "text": "    curr.next = n;",
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
    "rawCode": "function insertAtK(head, index, val) {\n    if (index === 0) {\n        const n = new ListNode(val);\n        n.next = head;\n        return n;\n    }\n    let curr = head;\n    for (let i = 0; i < index - 1 && curr; i++) curr = curr.next;\n    if (!curr) return head;\n    const n = new ListNode(val);\n    n.next = curr.next;\n    curr.next = n;\n    return head;\n}",
    "explanations": {
      "step_1": "Handle zero index: delegates directly to O(1) head insertion.",
      "step_2": "Traverse index-1 steps to stand on the predecessor node right before insertion point.",
      "step_3": "Crucial order: connect new node to successor first, then connect predecessor to new node.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "ll-delete-head",
    "code": [
      {
        "text": "function deleteHead(head) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    if (!head) return null;",
        "tag": "branch",
        "lineNum": 2
      },
      {
        "text": "    return head.next;",
        "tag": "return",
        "lineNum": 3
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 4
      }
    ],
    "rawCode": "function deleteHead(head) {\n    if (!head) return null;\n    return head.next;\n}",
    "explanations": {
      "step_1": "Verify non-empty boundary condition to prevent accessing null.",
      "step_2": "Advance head to head.next, deallocating the evicted node where manual memory management applies.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "ll-delete-tail",
    "code": [
      {
        "text": "function deleteTail(head) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    if (!head || !head.next) return null;",
        "tag": "branch",
        "lineNum": 2
      },
      {
        "text": "    let curr = head;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    while (curr.next.next) curr = curr.next;",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "    curr.next = null;",
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
    "rawCode": "function deleteTail(head) {\n    if (!head || !head.next) return null;\n    let curr = head;\n    while (curr.next.next) curr = curr.next;\n    curr.next = null;\n    return head;\n}",
    "explanations": {
      "step_1": "If list has 0 or 1 node, deleting tail leaves the list empty (NULL).",
      "step_2": "Scan forward while looking two steps ahead (curr.next.next) to stop on the penultimate node.",
      "step_3": "Sever the terminal link by setting curr.next to NULL.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "ll-delete-val",
    "code": [
      {
        "text": "function removeElements(head, val) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    const dummy = new ListNode(0, head);",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    let curr = dummy;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    while (curr.next) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        if (curr.next.val === val) {",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "            curr.next = curr.next.next;",
        "tag": "pointer",
        "lineNum": 6
      },
      {
        "text": "        } else {",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "            curr = curr.next;",
        "tag": "pointer",
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
        "text": "    return dummy.next;",
        "tag": "return",
        "lineNum": 11
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 12
      }
    ],
    "rawCode": "function removeElements(head, val) {\n    const dummy = new ListNode(0, head);\n    let curr = dummy;\n    while (curr.next) {\n        if (curr.next.val === val) {\n            curr.next = curr.next.next;\n        } else {\n            curr = curr.next;\n        }\n    }\n    return dummy.next;\n}",
    "explanations": {
      "step_1": "Initialize dummy node pointing to head, eliminating special-casing when head itself matches target.",
      "step_2": "If curr.next matches target val, bypass it via curr.next = curr.next.next without advancing curr.",
      "step_3": "Only advance curr when no deletion occurred, ensuring consecutive duplicates are caught.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "ll-search",
    "code": [
      {
        "text": "function searchList(head, target) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    let curr = head;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    let idx = 0;",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    while (curr) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        if (curr.val === target) return idx;",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "        curr = curr.next;",
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
    "rawCode": "function searchList(head, target) {\n    let curr = head;\n    let idx = 0;\n    while (curr) {\n        if (curr.val === target) return idx;\n        curr = curr.next;\n        idx++;\n    }\n    return -1;\n}",
    "explanations": {
      "step_1": "Set current pointer to head and initialize zero-based index counter.",
      "step_2": "Check node value against target; if matched, return the index immediately.",
      "step_3": "Advance pointer and increment counter. If end of list reached, return -1.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "ll-traverse",
    "code": [
      {
        "text": "function traverse(head) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    const res = [];",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    let curr = head;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    while (curr) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        res.push(curr.val);",
        "tag": "mutate",
        "lineNum": 5
      },
      {
        "text": "        curr = curr.next;",
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
    "rawCode": "function traverse(head) {\n    const res = [];\n    let curr = head;\n    while (curr) {\n        res.push(curr.val);\n        curr = curr.next;\n    }\n    return res;\n}",
    "explanations": {
      "step_1": "Allocate dynamic array buffer and set traversal pointer curr = head.",
      "step_2": "Loop while curr is non-null, appending curr.val and advancing curr to curr.next.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "ll-update",
    "code": [
      {
        "text": "function updateVal(head, index, newVal) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    let curr = head;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    for (let i = 0; i < index && curr; i++) curr = curr.next;",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "    if (!curr) return false;",
        "tag": "branch",
        "lineNum": 4
      },
      {
        "text": "    curr.val = newVal;",
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
    "rawCode": "function updateVal(head, index, newVal) {\n    let curr = head;\n    for (let i = 0; i < index && curr; i++) curr = curr.next;\n    if (!curr) return false;\n    curr.val = newVal;\n    return true;\n}",
    "explanations": {
      "step_1": "Walk forward index times, checking boundary safety.",
      "step_2": "Mutate node's val directly in memory.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "ll-size",
    "code": [
      {
        "text": "function getSize(head) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    let count = 0;",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    let curr = head;",
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
        "text": "        curr = curr.next;",
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
    "rawCode": "function getSize(head) {\n    let count = 0;\n    let curr = head;\n    while (curr) {\n        count++;\n        curr = curr.next;\n    }\n    return count;\n}",
    "explanations": {
      "step_1": "Initialize accumulator count to 0 and cursor to head.",
      "step_2": "Increment count on every node visit until curr becomes null.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "ll-reverse",
    "code": [
      {
        "text": "function reverseList(head) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    let prev = null;",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    let curr = head;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    while (curr) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        const nextTemp = curr.next;",
        "tag": "pointer",
        "lineNum": 5
      },
      {
        "text": "        curr.next = prev;",
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
    "rawCode": "function reverseList(head) {\n    let prev = null;\n    let curr = head;\n    while (curr) {\n        const nextTemp = curr.next;\n        curr.next = prev;\n        prev = curr;\n        curr = nextTemp;\n    }\n    return prev;\n}",
    "explanations": {
      "step_1": "Initialize prev = null (which will become the new tail's next pointer) and curr = head.",
      "step_2": "Save the forward node reference (next_temp = curr.next) before breaking the link.",
      "step_3": "Point current node backwards: curr.next = prev.",
      "step_4": "Shift both pointers forward: prev becomes curr, and curr becomes next_temp.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "ll-middle",
    "code": [
      {
        "text": "function middleNode(head) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    let slow = head;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    let fast = head;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    while (fast && fast.next) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        slow = slow.next;",
        "tag": "pointer",
        "lineNum": 5
      },
      {
        "text": "        fast = fast.next.next;",
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
    "rawCode": "function middleNode(head) {\n    let slow = head;\n    let fast = head;\n    while (fast && fast.next) {\n        slow = slow.next;\n        fast = fast.next.next;\n    }\n    return slow;\n}",
    "explanations": {
      "step_1": "Initialize both slow and fast pointers to the head node.",
      "step_2": "Loop while fast and fast.next are valid: advance slow by 1 step and fast by 2 steps.",
      "step_3": "When fast reaches the end, slow is exactly at the midpoint.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "ll-cycle",
    "code": [
      {
        "text": "function hasCycle(head) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    let slow = head;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    let fast = head;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    while (fast && fast.next) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        slow = slow.next;",
        "tag": "pointer",
        "lineNum": 5
      },
      {
        "text": "        fast = fast.next.next;",
        "tag": "pointer",
        "lineNum": 6
      },
      {
        "text": "        if (slow === fast) return true;",
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
    "rawCode": "function hasCycle(head) {\n    let slow = head;\n    let fast = head;\n    while (fast && fast.next) {\n        slow = slow.next;\n        fast = fast.next.next;\n        if (slow === fast) return true;\n    }\n    return false;\n}",
    "explanations": {
      "step_1": "Set both pointers to head.",
      "step_2": "Advance slow by 1 step and fast by 2 steps.",
      "step_3": "If memory addresses collide (slow == fast), cycle is confirmed. If fast hits null, return false.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "ll-merge",
    "code": [
      {
        "text": "function mergeTwoLists(l1, l2) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    const dummy = new ListNode(0);",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    let tail = dummy;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    while (l1 && l2) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        if (l1.val <= l2.val) {",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "            tail.next = l1; l1 = l1.next;",
        "tag": "pointer",
        "lineNum": 6
      },
      {
        "text": "        } else {",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "            tail.next = l2; l2 = l2.next;",
        "tag": "pointer",
        "lineNum": 8
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        tail = tail.next;",
        "tag": "pointer",
        "lineNum": 10
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    tail.next = l1 || l2;",
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
    "rawCode": "function mergeTwoLists(l1, l2) {\n    const dummy = new ListNode(0);\n    let tail = dummy;\n    while (l1 && l2) {\n        if (l1.val <= l2.val) {\n            tail.next = l1; l1 = l1.next;\n        } else {\n            tail.next = l2; l2 = l2.next;\n        }\n        tail = tail.next;\n    }\n    tail.next = l1 || l2;\n    return dummy.next;\n}",
    "explanations": {
      "step_1": "Create dummy anchor node to build the merged list cleanly.",
      "step_2": "Compare values: wire tail.next to the smaller node and advance that input pointer.",
      "step_3": "Attach whichever non-empty list remains in O(1) time and return dummy.next.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "ll-remove-nth-end",
    "code": [
      {
        "text": "function removeNthFromEnd(head, n) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    const dummy = new ListNode(0, head);",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    let fast = dummy;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    let slow = dummy;",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    for (let i = 0; i <= n; i++) fast = fast.next;",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "    while (fast) {",
        "tag": "loop",
        "lineNum": 6
      },
      {
        "text": "        fast = fast.next;",
        "tag": "pointer",
        "lineNum": 7
      },
      {
        "text": "        slow = slow.next;",
        "tag": "pointer",
        "lineNum": 8
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    slow.next = slow.next.next;",
        "tag": "pointer",
        "lineNum": 10
      },
      {
        "text": "    return dummy.next;",
        "tag": "return",
        "lineNum": 11
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 12
      }
    ],
    "rawCode": "function removeNthFromEnd(head, n) {\n    const dummy = new ListNode(0, head);\n    let fast = dummy;\n    let slow = dummy;\n    for (let i = 0; i <= n; i++) fast = fast.next;\n    while (fast) {\n        fast = fast.next;\n        slow = slow.next;\n    }\n    slow.next = slow.next.next;\n    return dummy.next;\n}",
    "explanations": {
      "step_1": "Set dummy node before head so deleting the first element requires no special case.",
      "step_2": "Advance fast n+1 steps ahead to create a fixed gap between fast and slow.",
      "step_3": "Slide both pointers forward until fast reaches null. slow is now at predecessor.",
      "step_4": "Bypass the target node: slow.next = slow.next.next.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "ll-palindrome",
    "code": [
      {
        "text": "function isPalindrome(head) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    let slow = head, fast = head;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    while (fast && fast.next) {",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "        slow = slow.next; fast = fast.next.next;",
        "tag": "pointer",
        "lineNum": 4
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    let prev = null;",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "    while (slow) {",
        "tag": "loop",
        "lineNum": 7
      },
      {
        "text": "        const nxt = slow.next;",
        "tag": "pointer",
        "lineNum": 8
      },
      {
        "text": "        slow.next = prev;",
        "tag": "pointer",
        "lineNum": 9
      },
      {
        "text": "        prev = slow;",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        slow = nxt;",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    let left = head, right = prev;",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    while (right) {",
        "tag": "loop",
        "lineNum": 14
      },
      {
        "text": "        if (left.val !== right.val) return false;",
        "tag": "branch",
        "lineNum": 15
      },
      {
        "text": "        left = left.next; right = right.next;",
        "tag": "pointer",
        "lineNum": 16
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "    return true;",
        "tag": "return",
        "lineNum": 18
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 19
      }
    ],
    "rawCode": "function isPalindrome(head) {\n    let slow = head, fast = head;\n    while (fast && fast.next) {\n        slow = slow.next; fast = fast.next.next;\n    }\n    let prev = null;\n    while (slow) {\n        const nxt = slow.next;\n        slow.next = prev;\n        prev = slow;\n        slow = nxt;\n    }\n    let left = head, right = prev;\n    while (right) {\n        if (left.val !== right.val) return false;\n        left = left.next; right = right.next;\n    }\n    return true;\n}",
    "explanations": {
      "step_1": "Find middle node using slow and fast pointers.",
      "step_2": "Reverse the second half of the list in-place starting from slow.",
      "step_3": "Compare front half against reversed tail half. If all match, return true.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "ll-lru-cache",
    "code": [
      {
        "text": "class LRUCache {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    constructor(capacity) {",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "        this.cap = capacity;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "        this.map = new Map();",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    get(key) {",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "        if (!this.map.has(key)) return -1;",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "        const val = this.map.get(key);",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        this.map.delete(key);",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        this.map.set(key, val);",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        return val;",
        "tag": "return",
        "lineNum": 11
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    put(key, value) {",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        if (this.map.has(key)) this.map.delete(key);",
        "tag": "branch",
        "lineNum": 14
      },
      {
        "text": "        this.map.set(key, value);",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "        if (this.map.size > this.cap) {",
        "tag": "branch",
        "lineNum": 16
      },
      {
        "text": "            const oldestKey = this.map.keys().next().value;",
        "tag": "pointer",
        "lineNum": 17
      },
      {
        "text": "            this.map.delete(oldestKey);",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 21
      }
    ],
    "rawCode": "class LRUCache {\n    constructor(capacity) {\n        this.cap = capacity;\n        this.map = new Map();\n    }\n    get(key) {\n        if (!this.map.has(key)) return -1;\n        const val = this.map.get(key);\n        this.map.delete(key);\n        this.map.set(key, val);\n        return val;\n    }\n    put(key, value) {\n        if (this.map.has(key)) this.map.delete(key);\n        this.map.set(key, value);\n        if (this.map.size > this.cap) {\n            const oldestKey = this.map.keys().next().value;\n            this.map.delete(oldestKey);\n        }\n    }\n}",
    "explanations": {
      "step_1": "Maintain dummy head (most recently used) and dummy tail (least recently used).",
      "step_2": "_remove detaches node in O(1); _add splices node right after head in O(1).",
      "step_3": "get(key): lookup node in hash map, promote to head, return value in O(1).",
      "step_4": "put(key, val): insert/update node, promote to front, and evict tail.prev if capacity exceeded.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  }
];
})(typeof window !== 'undefined' ? window : global);
