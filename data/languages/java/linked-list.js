/**
 * SynapseCS Language-Specific Implementation: JAVA - linked-list
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['java'] = window.DSA_LANG_CODE['java'] || {};
  window.DSA_LANG_CODE['java']['linked-list'] = [
  {
    "id": "ll-create",
    "code": [
      {
        "text": "class ListNode {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    int val;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    ListNode next;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    ListNode(int val) { this.val = val; this.next = null; }",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "public class Solution {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "    public static ListNode createList() {",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "        ListNode head = new ListNode(10);",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "        ListNode second = new ListNode(20);",
        "tag": "init",
        "lineNum": 9
      },
      {
        "text": "        ListNode third = new ListNode(30);",
        "tag": "init",
        "lineNum": 10
      },
      {
        "text": "        head.next = second;",
        "tag": "pointer",
        "lineNum": 11
      },
      {
        "text": "        second.next = third;",
        "tag": "pointer",
        "lineNum": 12
      },
      {
        "text": "        return head;",
        "tag": "return",
        "lineNum": 13
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 15
      }
    ],
    "rawCode": "class ListNode {\n    int val;\n    ListNode next;\n    ListNode(int val) { this.val = val; this.next = null; }\n}\npublic class Solution {\n    public static ListNode createList() {\n        ListNode head = new ListNode(10);\n        ListNode second = new ListNode(20);\n        ListNode third = new ListNode(30);\n        head.next = second;\n        second.next = third;\n        return head;\n    }\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "exec": "Executes tagged statement [exec] in java.",
      "pointer": "Executes tagged statement [pointer] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "ll-insert-head",
    "code": [
      {
        "text": "public static ListNode insertAtHead(ListNode head, int val) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    ListNode newNode = new ListNode(val);",
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
    "rawCode": "public static ListNode insertAtHead(ListNode head, int val) {\n    ListNode newNode = new ListNode(val);\n    newNode.next = head;\n    return newNode;\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "pointer": "Executes tagged statement [pointer] in java.",
      "exec": "Executes tagged statement [exec] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "ll-insert-tail",
    "code": [
      {
        "text": "public static ListNode insertAtTail(ListNode head, int val) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    ListNode newNode = new ListNode(val);",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    if (head == null) return newNode;",
        "tag": "branch",
        "lineNum": 3
      },
      {
        "text": "    ListNode curr = head;",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    while (curr.next != null) curr = curr.next;",
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
    "rawCode": "public static ListNode insertAtTail(ListNode head, int val) {\n    ListNode newNode = new ListNode(val);\n    if (head == null) return newNode;\n    ListNode curr = head;\n    while (curr.next != null) curr = curr.next;\n    curr.next = newNode;\n    return head;\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "branch": "Executes tagged statement [branch] in java.",
      "exec": "Executes tagged statement [exec] in java.",
      "pointer": "Executes tagged statement [pointer] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "ll-insert-kth",
    "code": [
      {
        "text": "public static ListNode insertAtK(ListNode head, int index, int val) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    if (index == 0) {",
        "tag": "branch",
        "lineNum": 2
      },
      {
        "text": "        ListNode n = new ListNode(val);",
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
        "text": "    ListNode curr = head;",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    for (int i = 0; i < index - 1 && curr != null; i++) curr = curr.next;",
        "tag": "loop",
        "lineNum": 8
      },
      {
        "text": "    if (curr == null) return head;",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "    ListNode n = new ListNode(val);",
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
    "rawCode": "public static ListNode insertAtK(ListNode head, int index, int val) {\n    if (index == 0) {\n        ListNode n = new ListNode(val);\n        n.next = head;\n        return n;\n    }\n    ListNode curr = head;\n    for (int i = 0; i < index - 1 && curr != null; i++) curr = curr.next;\n    if (curr == null) return head;\n    ListNode n = new ListNode(val);\n    n.next = curr.next;\n    curr.next = n;\n    return head;\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "branch": "Executes tagged statement [branch] in java.",
      "pointer": "Executes tagged statement [pointer] in java.",
      "exec": "Executes tagged statement [exec] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "ll-delete-head",
    "code": [
      {
        "text": "public static ListNode deleteHead(ListNode head) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    if (head == null) return null;",
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
    "rawCode": "public static ListNode deleteHead(ListNode head) {\n    if (head == null) return null;\n    return head.next;\n}",
    "explanations": {
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "branch": "Executes tagged statement [branch] in java.",
      "exec": "Executes tagged statement [exec] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "ll-delete-tail",
    "code": [
      {
        "text": "public static ListNode deleteTail(ListNode head) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    if (head == null || head.next == null) return null;",
        "tag": "branch",
        "lineNum": 2
      },
      {
        "text": "    ListNode curr = head;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    while (curr.next.next != null) curr = curr.next;",
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
    "rawCode": "public static ListNode deleteTail(ListNode head) {\n    if (head == null || head.next == null) return null;\n    ListNode curr = head;\n    while (curr.next.next != null) curr = curr.next;\n    curr.next = null;\n    return head;\n}",
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
    "id": "ll-delete-val",
    "code": [
      {
        "text": "public static ListNode removeElements(ListNode head, int val) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    ListNode dummy = new ListNode(0);",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    dummy.next = head;",
        "tag": "pointer",
        "lineNum": 3
      },
      {
        "text": "    ListNode curr = dummy;",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    while (curr.next != null) {",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "        if (curr.next.val == val) curr.next = curr.next.next;",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "        else curr = curr.next;",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    return dummy.next;",
        "tag": "return",
        "lineNum": 9
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 10
      }
    ],
    "rawCode": "public static ListNode removeElements(ListNode head, int val) {\n    ListNode dummy = new ListNode(0);\n    dummy.next = head;\n    ListNode curr = dummy;\n    while (curr.next != null) {\n        if (curr.next.val == val) curr.next = curr.next.next;\n        else curr = curr.next;\n    }\n    return dummy.next;\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "pointer": "Executes tagged statement [pointer] in java.",
      "exec": "Executes tagged statement [exec] in java.",
      "branch": "Executes tagged statement [branch] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "ll-search",
    "code": [
      {
        "text": "public static int searchList(ListNode head, int target) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    ListNode curr = head;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    int idx = 0;",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    while (curr != null) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        if (curr.val == target) return idx;",
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
    "rawCode": "public static int searchList(ListNode head, int target) {\n    ListNode curr = head;\n    int idx = 0;\n    while (curr != null) {\n        if (curr.val == target) return idx;\n        curr = curr.next;\n        idx++;\n    }\n    return -1;\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "exec": "Executes tagged statement [exec] in java.",
      "branch": "Executes tagged statement [branch] in java.",
      "pointer": "Executes tagged statement [pointer] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "ll-traverse",
    "code": [
      {
        "text": "public static List<Integer> traverse(ListNode head) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    List<Integer> res = new ArrayList<>();",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    ListNode curr = head;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    while (curr != null) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        res.add(curr.val);",
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
    "rawCode": "public static List<Integer> traverse(ListNode head) {\n    List<Integer> res = new ArrayList<>();\n    ListNode curr = head;\n    while (curr != null) {\n        res.add(curr.val);\n        curr = curr.next;\n    }\n    return res;\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "exec": "Executes tagged statement [exec] in java.",
      "mutate": "Executes tagged statement [mutate] in java.",
      "pointer": "Executes tagged statement [pointer] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "ll-update",
    "code": [
      {
        "text": "public static boolean updateVal(ListNode head, int index, int newVal) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    ListNode curr = head;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    for (int i = 0; i < index && curr != null; i++) curr = curr.next;",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "    if (curr == null) return false;",
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
    "rawCode": "public static boolean updateVal(ListNode head, int index, int newVal) {\n    ListNode curr = head;\n    for (int i = 0; i < index && curr != null; i++) curr = curr.next;\n    if (curr == null) return false;\n    curr.val = newVal;\n    return true;\n}",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "exec": "Executes tagged statement [exec] in java.",
      "branch": "Executes tagged statement [branch] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "ll-size",
    "code": [
      {
        "text": "public static int getSize(ListNode head) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    int count = 0;",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    ListNode curr = head;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    while (curr != null) {",
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
    "rawCode": "public static int getSize(ListNode head) {\n    int count = 0;\n    ListNode curr = head;\n    while (curr != null) {\n        count++;\n        curr = curr.next;\n    }\n    return count;\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "exec": "Executes tagged statement [exec] in java.",
      "pointer": "Executes tagged statement [pointer] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "ll-reverse",
    "code": [
      {
        "text": "public static ListNode reverseList(ListNode head) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    ListNode prev = null;",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    ListNode curr = head;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    while (curr != null) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        ListNode nextTemp = curr.next;",
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
    "rawCode": "public static ListNode reverseList(ListNode head) {\n    ListNode prev = null;\n    ListNode curr = head;\n    while (curr != null) {\n        ListNode nextTemp = curr.next;\n        curr.next = prev;\n        prev = curr;\n        curr = nextTemp;\n    }\n    return prev;\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "exec": "Executes tagged statement [exec] in java.",
      "pointer": "Executes tagged statement [pointer] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "ll-middle",
    "code": [
      {
        "text": "public static ListNode middleNode(ListNode head) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    ListNode slow = head, fast = head;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    while (fast != null && fast.next != null) {",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "        slow = slow.next;",
        "tag": "pointer",
        "lineNum": 4
      },
      {
        "text": "        fast = fast.next.next;",
        "tag": "pointer",
        "lineNum": 5
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    return slow;",
        "tag": "return",
        "lineNum": 7
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 8
      }
    ],
    "rawCode": "public static ListNode middleNode(ListNode head) {\n    ListNode slow = head, fast = head;\n    while (fast != null && fast.next != null) {\n        slow = slow.next;\n        fast = fast.next.next;\n    }\n    return slow;\n}",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "exec": "Executes tagged statement [exec] in java.",
      "pointer": "Executes tagged statement [pointer] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "ll-cycle",
    "code": [
      {
        "text": "public static boolean hasCycle(ListNode head) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    ListNode slow = head, fast = head;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    while (fast != null && fast.next != null) {",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "        slow = slow.next;",
        "tag": "pointer",
        "lineNum": 4
      },
      {
        "text": "        fast = fast.next.next;",
        "tag": "pointer",
        "lineNum": 5
      },
      {
        "text": "        if (slow == fast) return true;",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    return false;",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 9
      }
    ],
    "rawCode": "public static boolean hasCycle(ListNode head) {\n    ListNode slow = head, fast = head;\n    while (fast != null && fast.next != null) {\n        slow = slow.next;\n        fast = fast.next.next;\n        if (slow == fast) return true;\n    }\n    return false;\n}",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "exec": "Executes tagged statement [exec] in java.",
      "pointer": "Executes tagged statement [pointer] in java.",
      "branch": "Executes tagged statement [branch] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "ll-merge",
    "code": [
      {
        "text": "public static ListNode mergeTwoLists(ListNode l1, ListNode l2) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    ListNode dummy = new ListNode(0);",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    ListNode tail = dummy;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    while (l1 != null && l2 != null) {",
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
        "text": "    tail.next = (l1 != null) ? l1 : l2;",
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
    "rawCode": "public static ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n    ListNode dummy = new ListNode(0);\n    ListNode tail = dummy;\n    while (l1 != null && l2 != null) {\n        if (l1.val <= l2.val) {\n            tail.next = l1; l1 = l1.next;\n        } else {\n            tail.next = l2; l2 = l2.next;\n        }\n        tail = tail.next;\n    }\n    tail.next = (l1 != null) ? l1 : l2;\n    return dummy.next;\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "exec": "Executes tagged statement [exec] in java.",
      "branch": "Executes tagged statement [branch] in java.",
      "pointer": "Executes tagged statement [pointer] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "ll-remove-nth-end",
    "code": [
      {
        "text": "public static ListNode removeNthFromEnd(ListNode head, int n) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    ListNode dummy = new ListNode(0);",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    dummy.next = head;",
        "tag": "pointer",
        "lineNum": 3
      },
      {
        "text": "    ListNode fast = dummy, slow = dummy;",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    for (int i = 0; i <= n; i++) fast = fast.next;",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "    while (fast != null) {",
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
    "rawCode": "public static ListNode removeNthFromEnd(ListNode head, int n) {\n    ListNode dummy = new ListNode(0);\n    dummy.next = head;\n    ListNode fast = dummy, slow = dummy;\n    for (int i = 0; i <= n; i++) fast = fast.next;\n    while (fast != null) {\n        fast = fast.next;\n        slow = slow.next;\n    }\n    slow.next = slow.next.next;\n    return dummy.next;\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "pointer": "Executes tagged statement [pointer] in java.",
      "exec": "Executes tagged statement [exec] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "ll-palindrome",
    "code": [
      {
        "text": "public static boolean isPalindrome(ListNode head) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    ListNode slow = head, fast = head;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    while (fast != null && fast.next != null) {",
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
        "text": "    ListNode prev = null;",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "    while (slow != null) {",
        "tag": "loop",
        "lineNum": 7
      },
      {
        "text": "        ListNode nxt = slow.next;",
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
        "text": "    ListNode left = head, right = prev;",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    while (right != null) {",
        "tag": "loop",
        "lineNum": 14
      },
      {
        "text": "        if (left.val != right.val) return false;",
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
    "rawCode": "public static boolean isPalindrome(ListNode head) {\n    ListNode slow = head, fast = head;\n    while (fast != null && fast.next != null) {\n        slow = slow.next; fast = fast.next.next;\n    }\n    ListNode prev = null;\n    while (slow != null) {\n        ListNode nxt = slow.next;\n        slow.next = prev;\n        prev = slow;\n        slow = nxt;\n    }\n    ListNode left = head, right = prev;\n    while (right != null) {\n        if (left.val != right.val) return false;\n        left = left.next; right = right.next;\n    }\n    return true;\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "exec": "Executes tagged statement [exec] in java.",
      "pointer": "Executes tagged statement [pointer] in java.",
      "branch": "Executes tagged statement [branch] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
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
        "text": "    class DNode { int k, v; DNode prev, next; DNode(int k, int v) { this.k = k; this.v = v; } }",
        "tag": "def",
        "lineNum": 2
      },
      {
        "text": "    private int cap;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    private Map<Integer, DNode> map = new HashMap<>();",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "    private DNode head = new DNode(0, 0), tail = new DNode(0, 0);",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    public LRUCache(int capacity) {",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "        this.cap = capacity;",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        head.next = tail; tail.prev = head;",
        "tag": "pointer",
        "lineNum": 9
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    private void remove(DNode n) { n.prev.next = n.next; n.next.prev = n.prev; }",
        "tag": "pointer",
        "lineNum": 11
      },
      {
        "text": "    private void add(DNode n) { n.next = head.next; n.prev = head; head.next.prev = n; head.next = n; }",
        "tag": "pointer",
        "lineNum": 12
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    public int get(int key) {",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "        if (!map.containsKey(key)) return -1;",
        "tag": "branch",
        "lineNum": 15
      },
      {
        "text": "        DNode n = map.get(key);",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "        remove(n); add(n);",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "        return n.v;",
        "tag": "return",
        "lineNum": 18
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "    public void put(int key, int value) {",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "        if (map.containsKey(key)) remove(map.get(key));",
        "tag": "branch",
        "lineNum": 21
      },
      {
        "text": "        DNode n = new DNode(key, value);",
        "tag": "init",
        "lineNum": 22
      },
      {
        "text": "        add(n); map.put(key, n);",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "        if (map.size() > cap) {",
        "tag": "branch",
        "lineNum": 24
      },
      {
        "text": "            DNode lru = tail.prev;",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "            remove(lru); map.remove(lru.k);",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 28
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 29
      }
    ],
    "rawCode": "class LRUCache {\n    class DNode { int k, v; DNode prev, next; DNode(int k, int v) { this.k = k; this.v = v; } }\n    private int cap;\n    private Map<Integer, DNode> map = new HashMap<>();\n    private DNode head = new DNode(0, 0), tail = new DNode(0, 0);\n\n    public LRUCache(int capacity) {\n        this.cap = capacity;\n        head.next = tail; tail.prev = head;\n    }\n    private void remove(DNode n) { n.prev.next = n.next; n.next.prev = n.prev; }\n    private void add(DNode n) { n.next = head.next; n.prev = head; head.next.prev = n; head.next = n; }\n\n    public int get(int key) {\n        if (!map.containsKey(key)) return -1;\n        DNode n = map.get(key);\n        remove(n); add(n);\n        return n.v;\n    }\n    public void put(int key, int value) {\n        if (map.containsKey(key)) remove(map.get(key));\n        DNode n = new DNode(key, value);\n        add(n); map.put(key, n);\n        if (map.size() > cap) {\n            DNode lru = tail.prev;\n            remove(lru); map.remove(lru.k);\n        }\n    }\n}",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in java.",
      "exec": "Executes tagged statement [exec] in java.",
      "pointer": "Executes tagged statement [pointer] in java.",
      "branch": "Executes tagged statement [branch] in java."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  }
];
})(typeof window !== 'undefined' ? window : global);
