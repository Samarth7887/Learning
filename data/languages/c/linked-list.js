/**
 * SynapseCS Language-Specific Implementation: C - linked-list
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['c'] = window.DSA_LANG_CODE['c'] || {};
  window.DSA_LANG_CODE['c']['linked-list'] = [
  {
    "id": "ll-create",
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
        "text": "struct ListNode {",
        "code": "struct ListNode {",
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
        "text": "    struct ListNode* next;",
        "code": "    struct ListNode* next;",
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
        "text": "struct ListNode* createNode(int val) {",
        "code": "struct ListNode* createNode(int val) {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    struct ListNode* node = (struct ListNode*)malloc(sizeof(struct ListNode));",
        "code": "    struct ListNode* node = (struct ListNode*)malloc(sizeof(struct ListNode));",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "    node->val = val;",
        "code": "    node->val = val;",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    node->next = NULL;",
        "code": "    node->next = NULL;",
        "tag": "pointer",
        "lineNum": 12
      },
      {
        "text": "    return node;",
        "code": "    return node;",
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
        "text": "int main() {",
        "code": "int main() {",
        "tag": "def",
        "lineNum": 16
      },
      {
        "text": "    struct ListNode* head = createNode(10);",
        "code": "    struct ListNode* head = createNode(10);",
        "tag": "def",
        "lineNum": 17
      },
      {
        "text": "    head->next = createNode(20);",
        "code": "    head->next = createNode(20);",
        "tag": "pointer",
        "lineNum": 18
      },
      {
        "text": "    head->next->next = createNode(30);",
        "code": "    head->next->next = createNode(30);",
        "tag": "pointer",
        "lineNum": 19
      },
      {
        "text": "    return 0;",
        "code": "    return 0;",
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
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct ListNode {\n    int val;\n    struct ListNode* next;\n};\n\nstruct ListNode* createNode(int val) {\n    struct ListNode* node = (struct ListNode*)malloc(sizeof(struct ListNode));\n    node->val = val;\n    node->next = NULL;\n    return node;\n}\n\nint main() {\n    struct ListNode* head = createNode(10);\n    head->next = createNode(20);\n    head->next->next = createNode(30);\n    return 0;\n}",
    "explanations": {
      "def": "Declare ListNode struct containing integer val and next pointer.",
      "init": "Set node value and initialize next pointer to NULL.",
      "pointer": "Link nodes using pointer arrow notation: head->next = createNode(20).",
      "return": "Return allocated node pointer from constructor.",
      "comment": "Header inclusions.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "In C, linked lists require explicit heap allocation via malloc() and manual traversal; failing to free() allocated nodes causes memory leaks."
  },
  {
    "id": "ll-insert-head",
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
        "text": "struct ListNode {",
        "code": "struct ListNode {",
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
        "text": "    struct ListNode* next;",
        "code": "    struct ListNode* next;",
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
        "text": "struct ListNode* insertHead(struct ListNode* head, int val) {",
        "code": "struct ListNode* insertHead(struct ListNode* head, int val) {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    struct ListNode* newNode = (struct ListNode*)malloc(sizeof(struct ListNode));",
        "code": "    struct ListNode* newNode = (struct ListNode*)malloc(sizeof(struct ListNode));",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "    newNode->val = val;",
        "code": "    newNode->val = val;",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    newNode->next = head;",
        "code": "    newNode->next = head;",
        "tag": "pointer",
        "lineNum": 12
      },
      {
        "text": "    return newNode;",
        "code": "    return newNode;",
        "tag": "return",
        "lineNum": 13
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 14
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct ListNode {\n    int val;\n    struct ListNode* next;\n};\n\nstruct ListNode* insertHead(struct ListNode* head, int val) {\n    struct ListNode* newNode = (struct ListNode*)malloc(sizeof(struct ListNode));\n    newNode->val = val;\n    newNode->next = head;\n    return newNode;\n}",
    "explanations": {
      "def": "Define insertHead taking head pointer and integer value.",
      "init": "Set newNode->val = val.",
      "pointer": "Set newNode->next = head to point to previous head.",
      "return": "Return newNode as the updated head pointer.",
      "comment": "Prototypes.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Inserting at head is an O(1) operation requiring only one allocation and pointer reassignment."
  },
  {
    "id": "ll-insert-tail",
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
        "text": "struct ListNode {",
        "code": "struct ListNode {",
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
        "text": "    struct ListNode* next;",
        "code": "    struct ListNode* next;",
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
        "text": "struct ListNode* insertTail(struct ListNode* head, int val) {",
        "code": "struct ListNode* insertTail(struct ListNode* head, int val) {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    struct ListNode* newNode = (struct ListNode*)malloc(sizeof(struct ListNode));",
        "code": "    struct ListNode* newNode = (struct ListNode*)malloc(sizeof(struct ListNode));",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "    newNode->val = val;",
        "code": "    newNode->val = val;",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    newNode->next = NULL;",
        "code": "    newNode->next = NULL;",
        "tag": "pointer",
        "lineNum": 12
      },
      {
        "text": "    if (head == NULL) return newNode;",
        "code": "    if (head == NULL) return newNode;",
        "tag": "branch",
        "lineNum": 13
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    struct ListNode* curr = head;",
        "code": "    struct ListNode* curr = head;",
        "tag": "def",
        "lineNum": 15
      },
      {
        "text": "    while (curr->next != NULL) {",
        "code": "    while (curr->next != NULL) {",
        "tag": "def",
        "lineNum": 16
      },
      {
        "text": "        curr = curr->next;",
        "code": "        curr = curr->next;",
        "tag": "pointer",
        "lineNum": 17
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "    curr->next = newNode;",
        "code": "    curr->next = newNode;",
        "tag": "pointer",
        "lineNum": 19
      },
      {
        "text": "    return head;",
        "code": "    return head;",
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
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct ListNode {\n    int val;\n    struct ListNode* next;\n};\n\nstruct ListNode* insertTail(struct ListNode* head, int val) {\n    struct ListNode* newNode = (struct ListNode*)malloc(sizeof(struct ListNode));\n    newNode->val = val;\n    newNode->next = NULL;\n    if (head == NULL) return newNode;\n\n    struct ListNode* curr = head;\n    while (curr->next != NULL) {\n        curr = curr->next;\n    }\n    curr->next = newNode;\n    return head;\n}",
    "explanations": {
      "def": "Define insertTail appending new node at list end.",
      "init": "Set newNode->val and initialize next pointer to NULL.",
      "branch": "If head is NULL, return newNode as the new head.",
      "pointer": "Attach newNode to curr->next.",
      "return": "Return head of the list.",
      "comment": "Function header.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Appending to tail takes O(N) time without a tail pointer, or O(1) if a tail pointer is maintained."
  },
  {
    "id": "ll-insert-kth",
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
        "text": "struct ListNode {",
        "code": "struct ListNode {",
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
        "text": "    struct ListNode* next;",
        "code": "    struct ListNode* next;",
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
        "text": "struct ListNode* insertKth(struct ListNode* head, int index, int val) {",
        "code": "struct ListNode* insertKth(struct ListNode* head, int index, int val) {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    if (index == 0) {",
        "code": "    if (index == 0) {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "        struct ListNode* newNode = (struct ListNode*)malloc(sizeof(struct ListNode));",
        "code": "        struct ListNode* newNode = (struct ListNode*)malloc(sizeof(struct ListNode));",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "        newNode->val = val;",
        "code": "        newNode->val = val;",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "        newNode->next = head;",
        "code": "        newNode->next = head;",
        "tag": "pointer",
        "lineNum": 13
      },
      {
        "text": "        return newNode;",
        "code": "        return newNode;",
        "tag": "return",
        "lineNum": 14
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    struct ListNode* curr = head;",
        "code": "    struct ListNode* curr = head;",
        "tag": "def",
        "lineNum": 16
      },
      {
        "text": "    for (int i = 0; i < index - 1 && curr != NULL; i++) {",
        "code": "    for (int i = 0; i < index - 1 && curr != NULL; i++) {",
        "tag": "def",
        "lineNum": 17
      },
      {
        "text": "        curr = curr->next;",
        "code": "        curr = curr->next;",
        "tag": "pointer",
        "lineNum": 18
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "    if (curr == NULL) return head;",
        "code": "    if (curr == NULL) return head;",
        "tag": "branch",
        "lineNum": 20
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "    struct ListNode* newNode = (struct ListNode*)malloc(sizeof(struct ListNode));",
        "code": "    struct ListNode* newNode = (struct ListNode*)malloc(sizeof(struct ListNode));",
        "tag": "def",
        "lineNum": 22
      },
      {
        "text": "    newNode->val = val;",
        "code": "    newNode->val = val;",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "    newNode->next = curr->next;",
        "code": "    newNode->next = curr->next;",
        "tag": "pointer",
        "lineNum": 24
      },
      {
        "text": "    curr->next = newNode;",
        "code": "    curr->next = newNode;",
        "tag": "pointer",
        "lineNum": 25
      },
      {
        "text": "    return head;",
        "code": "    return head;",
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
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct ListNode {\n    int val;\n    struct ListNode* next;\n};\n\nstruct ListNode* insertKth(struct ListNode* head, int index, int val) {\n    if (index == 0) {\n        struct ListNode* newNode = (struct ListNode*)malloc(sizeof(struct ListNode));\n        newNode->val = val;\n        newNode->next = head;\n        return newNode;\n    }\n    struct ListNode* curr = head;\n    for (int i = 0; i < index - 1 && curr != NULL; i++) {\n        curr = curr->next;\n    }\n    if (curr == NULL) return head;\n\n    struct ListNode* newNode = (struct ListNode*)malloc(sizeof(struct ListNode));\n    newNode->val = val;\n    newNode->next = curr->next;\n    curr->next = newNode;\n    return head;\n}",
    "explanations": {
      "def": "Define insertKth inserting element at 0-indexed position.",
      "branch": "Check if index is 0 or if traversal reached out of bounds.",
      "init": "Assign node value and link into chain.",
      "pointer": "Splice node by setting newNode->next = curr->next and curr->next = newNode.",
      "return": "Return head pointer.",
      "comment": "Definitions.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Splicing into a linked list requires updating predecessor pointer curr->next; order of assignments is critical to avoid dropping the rest of the list."
  },
  {
    "id": "ll-delete-head",
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
        "text": "struct ListNode {",
        "code": "struct ListNode {",
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
        "text": "    struct ListNode* next;",
        "code": "    struct ListNode* next;",
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
        "text": "struct ListNode* deleteHead(struct ListNode* head) {",
        "code": "struct ListNode* deleteHead(struct ListNode* head) {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    if (head == NULL) return NULL;",
        "code": "    if (head == NULL) return NULL;",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "    struct ListNode* newHead = head->next;",
        "code": "    struct ListNode* newHead = head->next;",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "    free(head);",
        "code": "    free(head);",
        "tag": "mutate",
        "lineNum": 12
      },
      {
        "text": "    return newHead;",
        "code": "    return newHead;",
        "tag": "return",
        "lineNum": 13
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 14
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct ListNode {\n    int val;\n    struct ListNode* next;\n};\n\nstruct ListNode* deleteHead(struct ListNode* head) {\n    if (head == NULL) return NULL;\n    struct ListNode* newHead = head->next;\n    free(head);\n    return newHead;\n}",
    "explanations": {
      "def": "Define deleteHead removing the first node of the list.",
      "branch": "Return NULL if list is already empty.",
      "init": "Save second node reference newHead = head->next.",
      "mutate": "Deallocate old head node using free(head).",
      "return": "Return newHead.",
      "comment": "Function declaration.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Always save head->next into a temporary variable before calling free(head) to avoid accessing freed memory (use-after-free)."
  },
  {
    "id": "ll-delete-tail",
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
        "text": "struct ListNode {",
        "code": "struct ListNode {",
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
        "text": "    struct ListNode* next;",
        "code": "    struct ListNode* next;",
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
        "text": "struct ListNode* deleteTail(struct ListNode* head) {",
        "code": "struct ListNode* deleteTail(struct ListNode* head) {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    if (head == NULL) return NULL;",
        "code": "    if (head == NULL) return NULL;",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "    if (head->next == NULL) {",
        "code": "    if (head->next == NULL) {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "        free(head);",
        "code": "        free(head);",
        "tag": "mutate",
        "lineNum": 12
      },
      {
        "text": "        return NULL;",
        "code": "        return NULL;",
        "tag": "return",
        "lineNum": 13
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    struct ListNode* curr = head;",
        "code": "    struct ListNode* curr = head;",
        "tag": "def",
        "lineNum": 15
      },
      {
        "text": "    while (curr->next->next != NULL) {",
        "code": "    while (curr->next->next != NULL) {",
        "tag": "def",
        "lineNum": 16
      },
      {
        "text": "        curr = curr->next;",
        "code": "        curr = curr->next;",
        "tag": "pointer",
        "lineNum": 17
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "    free(curr->next);",
        "code": "    free(curr->next);",
        "tag": "pointer",
        "lineNum": 19
      },
      {
        "text": "    curr->next = NULL;",
        "code": "    curr->next = NULL;",
        "tag": "pointer",
        "lineNum": 20
      },
      {
        "text": "    return head;",
        "code": "    return head;",
        "tag": "return",
        "lineNum": 21
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 22
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct ListNode {\n    int val;\n    struct ListNode* next;\n};\n\nstruct ListNode* deleteTail(struct ListNode* head) {\n    if (head == NULL) return NULL;\n    if (head->next == NULL) {\n        free(head);\n        return NULL;\n    }\n    struct ListNode* curr = head;\n    while (curr->next->next != NULL) {\n        curr = curr->next;\n    }\n    free(curr->next);\n    curr->next = NULL;\n    return head;\n}",
    "explanations": {
      "def": "Define deleteTail removing last node in linked list.",
      "branch": "Handle empty list or single-node list cases.",
      "mutate": "Free tail node with free(curr->next).",
      "pointer": "Set curr->next = NULL to mark new tail.",
      "return": "Return list head.",
      "comment": "Standard C prototypes.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "init": "Executes [init] operation in this algorithm step."
    },
    "notes": "Deleting the tail requires locating the second-to-last node so its next pointer can be set to NULL after freeing the tail."
  },
  {
    "id": "ll-delete-val",
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
        "text": "struct ListNode {",
        "code": "struct ListNode {",
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
        "text": "    struct ListNode* next;",
        "code": "    struct ListNode* next;",
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
        "text": "struct ListNode* deleteVal(struct ListNode* head, int target) {",
        "code": "struct ListNode* deleteVal(struct ListNode* head, int target) {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    struct ListNode dummy;",
        "code": "    struct ListNode dummy;",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "    dummy.next = head;",
        "code": "    dummy.next = head;",
        "tag": "pointer",
        "lineNum": 11
      },
      {
        "text": "    struct ListNode* curr = &dummy;",
        "code": "    struct ListNode* curr = &dummy;",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    while (curr->next != NULL) {",
        "code": "    while (curr->next != NULL) {",
        "tag": "def",
        "lineNum": 14
      },
      {
        "text": "        if (curr->next->val == target) {",
        "code": "        if (curr->next->val == target) {",
        "tag": "def",
        "lineNum": 15
      },
      {
        "text": "            struct ListNode* temp = curr->next;",
        "code": "            struct ListNode* temp = curr->next;",
        "tag": "def",
        "lineNum": 16
      },
      {
        "text": "            curr->next = curr->next->next;",
        "code": "            curr->next = curr->next->next;",
        "tag": "pointer",
        "lineNum": 17
      },
      {
        "text": "            free(temp);",
        "code": "            free(temp);",
        "tag": "mutate",
        "lineNum": 18
      },
      {
        "text": "            break;",
        "code": "            break;",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "        curr = curr->next;",
        "code": "        curr = curr->next;",
        "tag": "pointer",
        "lineNum": 21
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "    return dummy.next;",
        "code": "    return dummy.next;",
        "tag": "return",
        "lineNum": 23
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 24
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct ListNode {\n    int val;\n    struct ListNode* next;\n};\n\nstruct ListNode* deleteVal(struct ListNode* head, int target) {\n    struct ListNode dummy;\n    dummy.next = head;\n    struct ListNode* curr = &dummy;\n\n    while (curr->next != NULL) {\n        if (curr->next->val == target) {\n            struct ListNode* temp = curr->next;\n            curr->next = curr->next->next;\n            free(temp);\n            break;\n        }\n        curr = curr->next;\n    }\n    return dummy.next;\n}",
    "explanations": {
      "def": "Define deleteVal removing first occurrence of target value.",
      "init": "Stack-allocate dummy sentinel node dummy.next = head.",
      "pointer": "Bypass node by updating curr->next = curr->next->next.",
      "mutate": "Deallocate deleted node memory via free(temp).",
      "return": "Return dummy.next as modified head pointer.",
      "comment": "Dummy node pattern in C.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Stack-allocating a dummy sentinel node eliminates special-casing for head node deletion and avoids extra heap allocation."
  },
  {
    "id": "ll-search",
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
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "struct ListNode {",
        "code": "struct ListNode {",
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
        "text": "    struct ListNode* next;",
        "code": "    struct ListNode* next;",
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
        "text": "bool search(struct ListNode* head, int target) {",
        "code": "bool search(struct ListNode* head, int target) {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    struct ListNode* curr = head;",
        "code": "    struct ListNode* curr = head;",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "    while (curr != NULL) {",
        "code": "    while (curr != NULL) {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "        if (curr->val == target) return true;",
        "code": "        if (curr->val == target) return true;",
        "tag": "branch",
        "lineNum": 12
      },
      {
        "text": "        curr = curr->next;",
        "code": "        curr = curr->next;",
        "tag": "pointer",
        "lineNum": 13
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    return false;",
        "code": "    return false;",
        "tag": "return",
        "lineNum": 15
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 16
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdbool.h>\n\nstruct ListNode {\n    int val;\n    struct ListNode* next;\n};\n\nbool search(struct ListNode* head, int target) {\n    struct ListNode* curr = head;\n    while (curr != NULL) {\n        if (curr->val == target) return true;\n        curr = curr->next;\n    }\n    return false;\n}",
    "explanations": {
      "def": "Define search returning boolean.",
      "init": "Initialize current traversal pointer curr = head.",
      "branch": "If curr->val == target, return true.",
      "pointer": "Advance pointer: curr = curr->next.",
      "return": "Return false if target not found.",
      "comment": "Include stdbool.h.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Linear traversal in linked lists runs in O(N) time because nodes cannot be accessed via constant-time random indexing."
  },
  {
    "id": "ll-traverse",
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
        "text": "struct ListNode {",
        "code": "struct ListNode {",
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
        "text": "    struct ListNode* next;",
        "code": "    struct ListNode* next;",
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
        "text": "void traverse(struct ListNode* head) {",
        "code": "void traverse(struct ListNode* head) {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    struct ListNode* curr = head;",
        "code": "    struct ListNode* curr = head;",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "    while (curr != NULL) {",
        "code": "    while (curr != NULL) {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "        printf(\"%d -> \", curr->val);",
        "code": "        printf(\"%d -> \", curr->val);",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "        curr = curr->next;",
        "code": "        curr = curr->next;",
        "tag": "pointer",
        "lineNum": 13
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    printf(\"NULL\\n\");",
        "code": "    printf(\"NULL\\n\");",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 16
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct ListNode {\n    int val;\n    struct ListNode* next;\n};\n\nvoid traverse(struct ListNode* head) {\n    struct ListNode* curr = head;\n    while (curr != NULL) {\n        printf(\"%d -> \", curr->val);\n        curr = curr->next;\n    }\n    printf(\"NULL\\n\");\n}",
    "explanations": {
      "def": "Define traverse printing all node values.",
      "init": "Set curr = head.",
      "exec": "Print node value followed by arrow symbol.",
      "pointer": "Advance pointer curr = curr->next.",
      "comment": "Function header."
    },
    "notes": "Traversing a linked list follows heap pointers sequentially from head to the terminating NULL pointer."
  },
  {
    "id": "ll-update",
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
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "struct ListNode {",
        "code": "struct ListNode {",
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
        "text": "    struct ListNode* next;",
        "code": "    struct ListNode* next;",
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
        "text": "bool updateAt(struct ListNode* head, int index, int newVal) {",
        "code": "bool updateAt(struct ListNode* head, int index, int newVal) {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    struct ListNode* curr = head;",
        "code": "    struct ListNode* curr = head;",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "    for (int i = 0; i < index && curr != NULL; i++) {",
        "code": "    for (int i = 0; i < index && curr != NULL; i++) {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "        curr = curr->next;",
        "code": "        curr = curr->next;",
        "tag": "pointer",
        "lineNum": 12
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    if (curr == NULL) return false;",
        "code": "    if (curr == NULL) return false;",
        "tag": "branch",
        "lineNum": 14
      },
      {
        "text": "    curr->val = newVal;",
        "code": "    curr->val = newVal;",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    return true;",
        "code": "    return true;",
        "tag": "return",
        "lineNum": 16
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 17
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdbool.h>\n\nstruct ListNode {\n    int val;\n    struct ListNode* next;\n};\n\nbool updateAt(struct ListNode* head, int index, int newVal) {\n    struct ListNode* curr = head;\n    for (int i = 0; i < index && curr != NULL; i++) {\n        curr = curr->next;\n    }\n    if (curr == NULL) return false;\n    curr->val = newVal;\n    return true;\n}",
    "explanations": {
      "def": "Define updateAt modifying node value at index.",
      "init": "Initialize curr pointer to head.",
      "branch": "Return false if index is out of bounds (curr == NULL).",
      "return": "Return true upon successful value update.",
      "comment": "Headers.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "pointer": "Executes [pointer] operation in this algorithm step."
    },
    "notes": "Updating a linked list node takes O(K) traversal time to reach the index followed by an O(1) in-place value assignment."
  },
  {
    "id": "ll-size",
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
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "struct ListNode {",
        "code": "struct ListNode {",
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
        "text": "    struct ListNode* next;",
        "code": "    struct ListNode* next;",
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
        "text": "int getLength(struct ListNode* head) {",
        "code": "int getLength(struct ListNode* head) {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    int count = 0;",
        "code": "    int count = 0;",
        "tag": "init",
        "lineNum": 10
      },
      {
        "text": "    struct ListNode* curr = head;",
        "code": "    struct ListNode* curr = head;",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "    while (curr != NULL) {",
        "code": "    while (curr != NULL) {",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "        count++;",
        "code": "        count++;",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        curr = curr->next;",
        "code": "        curr = curr->next;",
        "tag": "pointer",
        "lineNum": 14
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    return count;",
        "code": "    return count;",
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
        "text": "bool isEmpty(struct ListNode* head) {",
        "code": "bool isEmpty(struct ListNode* head) {",
        "tag": "def",
        "lineNum": 19
      },
      {
        "text": "    return head == NULL;",
        "code": "    return head == NULL;",
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
    "rawCode": "#include <stdio.h>\n#include <stdbool.h>\n\nstruct ListNode {\n    int val;\n    struct ListNode* next;\n};\n\nint getLength(struct ListNode* head) {\n    int count = 0;\n    struct ListNode* curr = head;\n    while (curr != NULL) {\n        count++;\n        curr = curr->next;\n    }\n    return count;\n}\n\nbool isEmpty(struct ListNode* head) {\n    return head == NULL;\n}",
    "explanations": {
      "def": "Define getLength and isEmpty functions.",
      "init": "Initialize count = 0 and curr = head.",
      "return": "Return count or boolean check (head == NULL).",
      "comment": "C declarations.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "pointer": "Executes [pointer] operation in this algorithm step."
    },
    "notes": "Calculating length takes O(N) time by traversing all nodes, while checking if the list is empty takes O(1) time."
  },
  {
    "id": "ll-reverse",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "struct ListNode {",
        "code": "struct ListNode {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    int val;",
        "code": "    int val;",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "    struct ListNode* next;",
        "code": "    struct ListNode* next;",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "};",
        "code": "};",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "struct ListNode* reverseList(struct ListNode* head) {",
        "code": "struct ListNode* reverseList(struct ListNode* head) {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "    struct ListNode* prev = NULL;",
        "code": "    struct ListNode* prev = NULL;",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    struct ListNode* curr = head;",
        "code": "    struct ListNode* curr = head;",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "    while (curr != NULL) {",
        "code": "    while (curr != NULL) {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "        struct ListNode* nextNode = curr->next;",
        "code": "        struct ListNode* nextNode = curr->next;",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "        curr->next = prev;",
        "code": "        curr->next = prev;",
        "tag": "pointer",
        "lineNum": 13
      },
      {
        "text": "        prev = curr;",
        "code": "        prev = curr;",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "        curr = nextNode;",
        "code": "        curr = nextNode;",
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
        "text": "    return prev;",
        "code": "    return prev;",
        "tag": "return",
        "lineNum": 17
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 18
      }
    ],
    "rawCode": "#include <stdio.h>\n\nstruct ListNode {\n    int val;\n    struct ListNode* next;\n};\n\nstruct ListNode* reverseList(struct ListNode* head) {\n    struct ListNode* prev = NULL;\n    struct ListNode* curr = head;\n    while (curr != NULL) {\n        struct ListNode* nextNode = curr->next;\n        curr->next = prev;\n        prev = curr;\n        curr = nextNode;\n    }\n    return prev;\n}",
    "explanations": {
      "def": "Define reverseList returning reversed head.",
      "init": "Initialize prev = NULL and curr = head.",
      "pointer": "Save curr->next, reverse pointer curr->next = prev, and advance prev and curr.",
      "return": "Return prev as the new head of the reversed list.",
      "comment": "Three-pointer linked list reversal.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "In-place linked list reversal uses 3 pointers (prev, curr, nextNode) to reverse link directions in O(N) time and O(1) space."
  },
  {
    "id": "ll-middle",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "struct ListNode {",
        "code": "struct ListNode {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    int val;",
        "code": "    int val;",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "    struct ListNode* next;",
        "code": "    struct ListNode* next;",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "};",
        "code": "};",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "struct ListNode* middleNode(struct ListNode* head) {",
        "code": "struct ListNode* middleNode(struct ListNode* head) {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "    struct ListNode* slow = head;",
        "code": "    struct ListNode* slow = head;",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    struct ListNode* fast = head;",
        "code": "    struct ListNode* fast = head;",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "    while (fast != NULL && fast->next != NULL) {",
        "code": "    while (fast != NULL && fast->next != NULL) {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "        slow = slow->next;",
        "code": "        slow = slow->next;",
        "tag": "pointer",
        "lineNum": 12
      },
      {
        "text": "        fast = fast->next->next;",
        "code": "        fast = fast->next->next;",
        "tag": "pointer",
        "lineNum": 13
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    return slow;",
        "code": "    return slow;",
        "tag": "return",
        "lineNum": 15
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 16
      }
    ],
    "rawCode": "#include <stdio.h>\n\nstruct ListNode {\n    int val;\n    struct ListNode* next;\n};\n\nstruct ListNode* middleNode(struct ListNode* head) {\n    struct ListNode* slow = head;\n    struct ListNode* fast = head;\n    while (fast != NULL && fast->next != NULL) {\n        slow = slow->next;\n        fast = fast->next->next;\n    }\n    return slow;\n}",
    "explanations": {
      "def": "Define middleNode using fast and slow pointers.",
      "init": "Initialize slow = head and fast = head.",
      "pointer": "Advance slow by 1 node and fast by 2 nodes.",
      "return": "Return slow pointer pointing to the middle node.",
      "comment": "Tortoise and hare algorithm.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Fast/slow two-pointer technique finds the middle node in a single O(N) pass without counting total list length."
  },
  {
    "id": "ll-cycle",
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
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "struct ListNode {",
        "code": "struct ListNode {",
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
        "text": "    struct ListNode* next;",
        "code": "    struct ListNode* next;",
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
        "text": "bool hasCycle(struct ListNode* head) {",
        "code": "bool hasCycle(struct ListNode* head) {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    struct ListNode* slow = head;",
        "code": "    struct ListNode* slow = head;",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "    struct ListNode* fast = head;",
        "code": "    struct ListNode* fast = head;",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "    while (fast != NULL && fast->next != NULL) {",
        "code": "    while (fast != NULL && fast->next != NULL) {",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "        slow = slow->next;",
        "code": "        slow = slow->next;",
        "tag": "pointer",
        "lineNum": 13
      },
      {
        "text": "        fast = fast->next->next;",
        "code": "        fast = fast->next->next;",
        "tag": "pointer",
        "lineNum": 14
      },
      {
        "text": "        if (slow == fast) return true;",
        "code": "        if (slow == fast) return true;",
        "tag": "branch",
        "lineNum": 15
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "    return false;",
        "code": "    return false;",
        "tag": "return",
        "lineNum": 17
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 18
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdbool.h>\n\nstruct ListNode {\n    int val;\n    struct ListNode* next;\n};\n\nbool hasCycle(struct ListNode* head) {\n    struct ListNode* slow = head;\n    struct ListNode* fast = head;\n    while (fast != NULL && fast->next != NULL) {\n        slow = slow->next;\n        fast = fast->next->next;\n        if (slow == fast) return true;\n    }\n    return false;\n}",
    "explanations": {
      "def": "Define hasCycle implementing Floyd Cycle Detection.",
      "init": "Initialize slow = head and fast = head.",
      "pointer": "Advance slow by 1 step and fast by 2 steps.",
      "branch": "If slow == fast, pointers have met in a cycle; return true.",
      "return": "Return false if fast reaches NULL tail.",
      "comment": "Floyd cycle finding algorithm.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Floyd cycle detection algorithm runs in O(N) time and O(1) space; if a cycle exists, fast pointer catches up to slow pointer."
  },
  {
    "id": "ll-merge",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "struct ListNode {",
        "code": "struct ListNode {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    int val;",
        "code": "    int val;",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "    struct ListNode* next;",
        "code": "    struct ListNode* next;",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "};",
        "code": "};",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2) {",
        "code": "struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2) {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "    struct ListNode dummy;",
        "code": "    struct ListNode dummy;",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    dummy.next = NULL;",
        "code": "    dummy.next = NULL;",
        "tag": "pointer",
        "lineNum": 10
      },
      {
        "text": "    struct ListNode* tail = &dummy;",
        "code": "    struct ListNode* tail = &dummy;",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    while (list1 != NULL && list2 != NULL) {",
        "code": "    while (list1 != NULL && list2 != NULL) {",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "        if (list1->val <= list2->val) {",
        "code": "        if (list1->val <= list2->val) {",
        "tag": "def",
        "lineNum": 14
      },
      {
        "text": "            tail->next = list1;",
        "code": "            tail->next = list1;",
        "tag": "pointer",
        "lineNum": 15
      },
      {
        "text": "            list1 = list1->next;",
        "code": "            list1 = list1->next;",
        "tag": "pointer",
        "lineNum": 16
      },
      {
        "text": "        } else {",
        "code": "        } else {",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "            tail->next = list2;",
        "code": "            tail->next = list2;",
        "tag": "pointer",
        "lineNum": 18
      },
      {
        "text": "            list2 = list2->next;",
        "code": "            list2 = list2->next;",
        "tag": "pointer",
        "lineNum": 19
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "        tail = tail->next;",
        "code": "        tail = tail->next;",
        "tag": "pointer",
        "lineNum": 21
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "    tail->next = (list1 != NULL) ? list1 : list2;",
        "code": "    tail->next = (list1 != NULL) ? list1 : list2;",
        "tag": "pointer",
        "lineNum": 23
      },
      {
        "text": "    return dummy.next;",
        "code": "    return dummy.next;",
        "tag": "return",
        "lineNum": 24
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 25
      }
    ],
    "rawCode": "#include <stdio.h>\n\nstruct ListNode {\n    int val;\n    struct ListNode* next;\n};\n\nstruct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2) {\n    struct ListNode dummy;\n    dummy.next = NULL;\n    struct ListNode* tail = &dummy;\n\n    while (list1 != NULL && list2 != NULL) {\n        if (list1->val <= list2->val) {\n            tail->next = list1;\n            list1 = list1->next;\n        } else {\n            tail->next = list2;\n            list2 = list2->next;\n        }\n        tail = tail->next;\n    }\n    tail->next = (list1 != NULL) ? list1 : list2;\n    return dummy.next;\n}",
    "explanations": {
      "def": "Define mergeTwoLists merging sorted chains.",
      "init": "Stack-allocate dummy node and point tail to &dummy.",
      "pointer": "Attach remaining non-empty list directly to tail->next.",
      "return": "Return dummy.next.",
      "comment": "Sorted merge.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Splicing existing node pointers avoids allocating any new heap nodes, operating in O(N + M) time and O(1) space."
  },
  {
    "id": "ll-remove-nth-end",
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
        "text": "struct ListNode {",
        "code": "struct ListNode {",
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
        "text": "    struct ListNode* next;",
        "code": "    struct ListNode* next;",
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
        "text": "struct ListNode* removeNthFromEnd(struct ListNode* head, int n) {",
        "code": "struct ListNode* removeNthFromEnd(struct ListNode* head, int n) {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    struct ListNode dummy;",
        "code": "    struct ListNode dummy;",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "    dummy.next = head;",
        "code": "    dummy.next = head;",
        "tag": "pointer",
        "lineNum": 11
      },
      {
        "text": "    struct ListNode* fast = &dummy;",
        "code": "    struct ListNode* fast = &dummy;",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "    struct ListNode* slow = &dummy;",
        "code": "    struct ListNode* slow = &dummy;",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    for (int i = 0; i < n; i++) {",
        "code": "    for (int i = 0; i < n; i++) {",
        "tag": "def",
        "lineNum": 15
      },
      {
        "text": "        fast = fast->next;",
        "code": "        fast = fast->next;",
        "tag": "pointer",
        "lineNum": 16
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "    while (fast->next != NULL) {",
        "code": "    while (fast->next != NULL) {",
        "tag": "def",
        "lineNum": 18
      },
      {
        "text": "        fast = fast->next;",
        "code": "        fast = fast->next;",
        "tag": "pointer",
        "lineNum": 19
      },
      {
        "text": "        slow = slow->next;",
        "code": "        slow = slow->next;",
        "tag": "pointer",
        "lineNum": 20
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "    struct ListNode* toDelete = slow->next;",
        "code": "    struct ListNode* toDelete = slow->next;",
        "tag": "def",
        "lineNum": 22
      },
      {
        "text": "    slow->next = slow->next->next;",
        "code": "    slow->next = slow->next->next;",
        "tag": "pointer",
        "lineNum": 23
      },
      {
        "text": "    free(toDelete);",
        "code": "    free(toDelete);",
        "tag": "mutate",
        "lineNum": 24
      },
      {
        "text": "    return dummy.next;",
        "code": "    return dummy.next;",
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
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct ListNode {\n    int val;\n    struct ListNode* next;\n};\n\nstruct ListNode* removeNthFromEnd(struct ListNode* head, int n) {\n    struct ListNode dummy;\n    dummy.next = head;\n    struct ListNode* fast = &dummy;\n    struct ListNode* slow = &dummy;\n\n    for (int i = 0; i < n; i++) {\n        fast = fast->next;\n    }\n    while (fast->next != NULL) {\n        fast = fast->next;\n        slow = slow->next;\n    }\n    struct ListNode* toDelete = slow->next;\n    slow->next = slow->next->next;\n    free(toDelete);\n    return dummy.next;\n}",
    "explanations": {
      "def": "Define removeNthFromEnd using offset two-pointer method.",
      "init": "Stack-allocate dummy node and initialize fast and slow to &dummy.",
      "pointer": "Bypass target node slow->next = slow->next->next.",
      "mutate": "Free removed node memory via free(toDelete).",
      "return": "Return dummy.next.",
      "comment": "Offset pointers.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Advancing fast by n nodes creates a gap of n between fast and slow, allowing single-pass removal of the nth node from the end."
  },
  {
    "id": "ll-palindrome",
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
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "struct ListNode {",
        "code": "struct ListNode {",
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
        "text": "    struct ListNode* next;",
        "code": "    struct ListNode* next;",
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
        "text": "bool isPalindrome(struct ListNode* head) {",
        "code": "bool isPalindrome(struct ListNode* head) {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    if (head == NULL || head->next == NULL) return true;",
        "code": "    if (head == NULL || head->next == NULL) return true;",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "    struct ListNode* slow = head;",
        "code": "    struct ListNode* slow = head;",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "    struct ListNode* fast = head;",
        "code": "    struct ListNode* fast = head;",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "    while (fast->next != NULL && fast->next->next != NULL) {",
        "code": "    while (fast->next != NULL && fast->next->next != NULL) {",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "        slow = slow->next;",
        "code": "        slow = slow->next;",
        "tag": "pointer",
        "lineNum": 14
      },
      {
        "text": "        fast = fast->next->next;",
        "code": "        fast = fast->next->next;",
        "tag": "pointer",
        "lineNum": 15
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "    struct ListNode* prev = NULL;",
        "code": "    struct ListNode* prev = NULL;",
        "tag": "def",
        "lineNum": 17
      },
      {
        "text": "    struct ListNode* curr = slow->next;",
        "code": "    struct ListNode* curr = slow->next;",
        "tag": "def",
        "lineNum": 18
      },
      {
        "text": "    while (curr != NULL) {",
        "code": "    while (curr != NULL) {",
        "tag": "def",
        "lineNum": 19
      },
      {
        "text": "        struct ListNode* nextNode = curr->next;",
        "code": "        struct ListNode* nextNode = curr->next;",
        "tag": "def",
        "lineNum": 20
      },
      {
        "text": "        curr->next = prev;",
        "code": "        curr->next = prev;",
        "tag": "pointer",
        "lineNum": 21
      },
      {
        "text": "        prev = curr;",
        "code": "        prev = curr;",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "        curr = nextNode;",
        "code": "        curr = nextNode;",
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
        "text": "    struct ListNode* p1 = head;",
        "code": "    struct ListNode* p1 = head;",
        "tag": "def",
        "lineNum": 25
      },
      {
        "text": "    struct ListNode* p2 = prev;",
        "code": "    struct ListNode* p2 = prev;",
        "tag": "def",
        "lineNum": 26
      },
      {
        "text": "    while (p2 != NULL) {",
        "code": "    while (p2 != NULL) {",
        "tag": "def",
        "lineNum": 27
      },
      {
        "text": "        if (p1->val != p2->val) return false;",
        "code": "        if (p1->val != p2->val) return false;",
        "tag": "branch",
        "lineNum": 28
      },
      {
        "text": "        p1 = p1->next;",
        "code": "        p1 = p1->next;",
        "tag": "pointer",
        "lineNum": 29
      },
      {
        "text": "        p2 = p2->next;",
        "code": "        p2 = p2->next;",
        "tag": "pointer",
        "lineNum": 30
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 31
      },
      {
        "text": "    return true;",
        "code": "    return true;",
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
    "rawCode": "#include <stdio.h>\n#include <stdbool.h>\n\nstruct ListNode {\n    int val;\n    struct ListNode* next;\n};\n\nbool isPalindrome(struct ListNode* head) {\n    if (head == NULL || head->next == NULL) return true;\n    struct ListNode* slow = head;\n    struct ListNode* fast = head;\n    while (fast->next != NULL && fast->next->next != NULL) {\n        slow = slow->next;\n        fast = fast->next->next;\n    }\n    struct ListNode* prev = NULL;\n    struct ListNode* curr = slow->next;\n    while (curr != NULL) {\n        struct ListNode* nextNode = curr->next;\n        curr->next = prev;\n        prev = curr;\n        curr = nextNode;\n    }\n    struct ListNode* p1 = head;\n    struct ListNode* p2 = prev;\n    while (p2 != NULL) {\n        if (p1->val != p2->val) return false;\n        p1 = p1->next;\n        p2 = p2->next;\n    }\n    return true;\n}",
    "explanations": {
      "def": "Define isPalindrome validating symmetry of linked list.",
      "branch": "Base check for short lists, and return false on value mismatch.",
      "init": "Find middle node with fast and slow pointers.",
      "pointer": "Reverse links and advance pointers p1 and p2.",
      "return": "Return true if all symmetric pairs match.",
      "comment": "In-place palindrome check.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Finding the middle and reversing the second half in-place checks palindrome validity in O(N) time and O(1) space."
  },
  {
    "id": "ll-lru-cache",
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
        "text": "struct DNode {",
        "code": "struct DNode {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    int key;",
        "code": "    int key;",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "    int val;",
        "code": "    int val;",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "    struct DNode* prev;",
        "code": "    struct DNode* prev;",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "    struct DNode* next;",
        "code": "    struct DNode* next;",
        "tag": "def",
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
        "text": "struct LRUCache {",
        "code": "struct LRUCache {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "    int capacity;",
        "code": "    int capacity;",
        "tag": "init",
        "lineNum": 12
      },
      {
        "text": "    int size;",
        "code": "    int size;",
        "tag": "init",
        "lineNum": 13
      },
      {
        "text": "    struct DNode* head;",
        "code": "    struct DNode* head;",
        "tag": "def",
        "lineNum": 14
      },
      {
        "text": "    struct DNode* tail;",
        "code": "    struct DNode* tail;",
        "tag": "def",
        "lineNum": 15
      },
      {
        "text": "};",
        "code": "};",
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
        "text": "struct LRUCache* lruCacheCreate(int capacity) {",
        "code": "struct LRUCache* lruCacheCreate(int capacity) {",
        "tag": "def",
        "lineNum": 18
      },
      {
        "text": "    struct LRUCache* cache = (struct LRUCache*)malloc(sizeof(struct LRUCache));",
        "code": "    struct LRUCache* cache = (struct LRUCache*)malloc(sizeof(struct LRUCache));",
        "tag": "def",
        "lineNum": 19
      },
      {
        "text": "    cache->capacity = capacity;",
        "code": "    cache->capacity = capacity;",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "    cache->size = 0;",
        "code": "    cache->size = 0;",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "    cache->head = (struct DNode*)malloc(sizeof(struct DNode));",
        "code": "    cache->head = (struct DNode*)malloc(sizeof(struct DNode));",
        "tag": "alloc",
        "lineNum": 22
      },
      {
        "text": "    cache->tail = (struct DNode*)malloc(sizeof(struct DNode));",
        "code": "    cache->tail = (struct DNode*)malloc(sizeof(struct DNode));",
        "tag": "alloc",
        "lineNum": 23
      },
      {
        "text": "    cache->head->next = cache->tail;",
        "code": "    cache->head->next = cache->tail;",
        "tag": "pointer",
        "lineNum": 24
      },
      {
        "text": "    cache->tail->prev = cache->head;",
        "code": "    cache->tail->prev = cache->head;",
        "tag": "pointer",
        "lineNum": 25
      },
      {
        "text": "    return cache;",
        "code": "    return cache;",
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
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct DNode {\n    int key;\n    int val;\n    struct DNode* prev;\n    struct DNode* next;\n};\n\nstruct LRUCache {\n    int capacity;\n    int size;\n    struct DNode* head;\n    struct DNode* tail;\n};\n\nstruct LRUCache* lruCacheCreate(int capacity) {\n    struct LRUCache* cache = (struct LRUCache*)malloc(sizeof(struct LRUCache));\n    cache->capacity = capacity;\n    cache->size = 0;\n    cache->head = (struct DNode*)malloc(sizeof(struct DNode));\n    cache->tail = (struct DNode*)malloc(sizeof(struct DNode));\n    cache->head->next = cache->tail;\n    cache->tail->prev = cache->head;\n    return cache;\n}",
    "explanations": {
      "def": "Define DNode and LRUCache structs and constructor.",
      "alloc": "Allocate cache and dummy head/tail sentinel nodes via malloc().",
      "init": "Initialize capacity, size = 0, and wire dummy head and tail together.",
      "pointer": "Wire cache->head->next = cache->tail and cache->tail->prev = cache->head.",
      "return": "Return initialized cache pointer.",
      "comment": "LRU Cache architecture.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Doubly linked list with dummy head and tail sentinels guarantees O(1) removal and insertion without null check branching."
  }
];
})(typeof window !== 'undefined' ? window : global);
