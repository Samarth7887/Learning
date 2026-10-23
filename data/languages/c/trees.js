/**
 * SynapseCS Language-Specific Implementation: C - trees
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['c'] = window.DSA_LANG_CODE['c'] || {};
  window.DSA_LANG_CODE['c']['trees'] = [
  {
    "id": "tree-node-create",
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
        "text": "struct TreeNode {",
        "code": "struct TreeNode {",
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
        "text": "    struct TreeNode* left;",
        "code": "    struct TreeNode* left;",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "    struct TreeNode* right;",
        "code": "    struct TreeNode* right;",
        "tag": "def",
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
        "text": "struct TreeNode* createNode(int val) {",
        "code": "struct TreeNode* createNode(int val) {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "    struct TreeNode* node = (struct TreeNode*)malloc(sizeof(struct TreeNode));",
        "code": "    struct TreeNode* node = (struct TreeNode*)malloc(sizeof(struct TreeNode));",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "    node->val = val;",
        "code": "    node->val = val;",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    node->left = NULL;",
        "code": "    node->left = NULL;",
        "tag": "init",
        "lineNum": 13
      },
      {
        "text": "    node->right = NULL;",
        "code": "    node->right = NULL;",
        "tag": "init",
        "lineNum": 14
      },
      {
        "text": "    return node;",
        "code": "    return node;",
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
        "text": "int main() {",
        "code": "int main() {",
        "tag": "def",
        "lineNum": 18
      },
      {
        "text": "    struct TreeNode* root = createNode(1);",
        "code": "    struct TreeNode* root = createNode(1);",
        "tag": "def",
        "lineNum": 19
      },
      {
        "text": "    root->left = createNode(2);",
        "code": "    root->left = createNode(2);",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "    root->right = createNode(3);",
        "code": "    root->right = createNode(3);",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "    printf(\"Root: %d, Left: %d, Right: %d\\n\", root->val, root->left->val, root->right->val);",
        "code": "    printf(\"Root: %d, Left: %d, Right: %d\\n\", root->val, root->left->val, root->right->val);",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "    free(root->left);",
        "code": "    free(root->left);",
        "tag": "mutate",
        "lineNum": 23
      },
      {
        "text": "    free(root->right);",
        "code": "    free(root->right);",
        "tag": "mutate",
        "lineNum": 24
      },
      {
        "text": "    free(root);",
        "code": "    free(root);",
        "tag": "mutate",
        "lineNum": 25
      },
      {
        "text": "    return 0;",
        "code": "    return 0;",
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
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct TreeNode {\n    int val;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n\nstruct TreeNode* createNode(int val) {\n    struct TreeNode* node = (struct TreeNode*)malloc(sizeof(struct TreeNode));\n    node->val = val;\n    node->left = NULL;\n    node->right = NULL;\n    return node;\n}\n\nint main() {\n    struct TreeNode* root = createNode(1);\n    root->left = createNode(2);\n    root->right = createNode(3);\n    printf(\"Root: %d, Left: %d, Right: %d\\n\", root->val, root->left->val, root->right->val);\n    free(root->left);\n    free(root->right);\n    free(root);\n    return 0;\n}",
    "explanations": {
      "def": "Declare the TreeNode struct and constructor function signature in C.",
      "init": "Initialize node values and set child pointers explicitly to NULL.",
      "mutate": "Free dynamically allocated node memory using free() to prevent memory leaks.",
      "exec": "Print node values or execute diagnostic routine.",
      "return": "Return the initialized pointer or exit code from main.",
      "comment": "Standard C preprocessor directives including stdio and stdlib."
    },
    "notes": "In C, binary tree nodes must be explicitly allocated on the heap with malloc() and freed recursively with free() to avoid memory leaks."
  },
  {
    "id": "tree-inorder-traversal",
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
        "text": "struct TreeNode {",
        "code": "struct TreeNode {",
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
        "text": "    struct TreeNode* left;",
        "code": "    struct TreeNode* left;",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "    struct TreeNode* right;",
        "code": "    struct TreeNode* right;",
        "tag": "def",
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
        "text": "void inorder(struct TreeNode* root, int* res, int* size) {",
        "code": "void inorder(struct TreeNode* root, int* res, int* size) {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "    if (root == NULL) return;",
        "code": "    if (root == NULL) return;",
        "tag": "branch",
        "lineNum": 11
      },
      {
        "text": "    inorder(root->left, res, size);",
        "code": "    inorder(root->left, res, size);",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    res[(*size)++] = root->val;",
        "code": "    res[(*size)++] = root->val;",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    inorder(root->right, res, size);",
        "code": "    inorder(root->right, res, size);",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "int* inorderTraversal(struct TreeNode* root, int* returnSize) {",
        "code": "int* inorderTraversal(struct TreeNode* root, int* returnSize) {",
        "tag": "def",
        "lineNum": 17
      },
      {
        "text": "    int* res = (int*)malloc(100 * sizeof(int));",
        "code": "    int* res = (int*)malloc(100 * sizeof(int));",
        "tag": "alloc",
        "lineNum": 18
      },
      {
        "text": "    *returnSize = 0;",
        "code": "    *returnSize = 0;",
        "tag": "comment",
        "lineNum": 19
      },
      {
        "text": "    inorder(root, res, returnSize);",
        "code": "    inorder(root, res, returnSize);",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "    return res;",
        "code": "    return res;",
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
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct TreeNode {\n    int val;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n\nvoid inorder(struct TreeNode* root, int* res, int* size) {\n    if (root == NULL) return;\n    inorder(root->left, res, size);\n    res[(*size)++] = root->val;\n    inorder(root->right, res, size);\n}\n\nint* inorderTraversal(struct TreeNode* root, int* returnSize) {\n    int* res = (int*)malloc(100 * sizeof(int));\n    *returnSize = 0;\n    inorder(root, res, returnSize);\n    return res;\n}",
    "explanations": {
      "def": "Define recursive inorder DFS helper function signature taking pointer arguments.",
      "branch": "Base case: check if current node pointer is NULL and return immediately.",
      "exec": "Recursively traverse left subtree before visiting parent node.",
      "alloc": "Allocate result array buffer on the heap using malloc().",
      "init": "Set returnSize counter pointer to 0.",
      "return": "Return heap buffer containing inorder traversal values.",
      "comment": "C header includes for standard input/output and heap allocation."
    },
    "notes": "C does not have built-in dynamic arrays, so return size is passed as a pointer (int* returnSize) and callers must free() the returned buffer."
  },
  {
    "id": "tree-level-order",
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
        "text": "struct TreeNode {",
        "code": "struct TreeNode {",
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
        "text": "    struct TreeNode* left;",
        "code": "    struct TreeNode* left;",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "    struct TreeNode* right;",
        "code": "    struct TreeNode* right;",
        "tag": "def",
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
        "text": "void levelOrder(struct TreeNode* root) {",
        "code": "void levelOrder(struct TreeNode* root) {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "    if (!root) return;",
        "code": "    if (!root) return;",
        "tag": "branch",
        "lineNum": 11
      },
      {
        "text": "    struct TreeNode* queue[100];",
        "code": "    struct TreeNode* queue[100];",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "    int front = 0, rear = 0;",
        "code": "    int front = 0, rear = 0;",
        "tag": "init",
        "lineNum": 13
      },
      {
        "text": "    queue[rear++] = root;",
        "code": "    queue[rear++] = root;",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    while (front < rear) {",
        "code": "    while (front < rear) {",
        "tag": "def",
        "lineNum": 15
      },
      {
        "text": "        int levelSize = rear - front;",
        "code": "        int levelSize = rear - front;",
        "tag": "init",
        "lineNum": 16
      },
      {
        "text": "        for (int i = 0; i < levelSize; i++) {",
        "code": "        for (int i = 0; i < levelSize; i++) {",
        "tag": "def",
        "lineNum": 17
      },
      {
        "text": "            struct TreeNode* node = queue[front++];",
        "code": "            struct TreeNode* node = queue[front++];",
        "tag": "def",
        "lineNum": 18
      },
      {
        "text": "            printf(\"%d \", node->val);",
        "code": "            printf(\"%d \", node->val);",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "            if (node->left) queue[rear++] = node->left;",
        "code": "            if (node->left) queue[rear++] = node->left;",
        "tag": "branch",
        "lineNum": 20
      },
      {
        "text": "            if (node->right) queue[rear++] = node->right;",
        "code": "            if (node->right) queue[rear++] = node->right;",
        "tag": "branch",
        "lineNum": 21
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "        printf(\"\\n\");",
        "code": "        printf(\"\\n\");",
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
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 25
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct TreeNode {\n    int val;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n\nvoid levelOrder(struct TreeNode* root) {\n    if (!root) return;\n    struct TreeNode* queue[100];\n    int front = 0, rear = 0;\n    queue[rear++] = root;\n    while (front < rear) {\n        int levelSize = rear - front;\n        for (int i = 0; i < levelSize; i++) {\n            struct TreeNode* node = queue[front++];\n            printf(\"%d \", node->val);\n            if (node->left) queue[rear++] = node->left;\n            if (node->right) queue[rear++] = node->right;\n        }\n        printf(\"\\n\");\n    }\n}",
    "explanations": {
      "def": "Define levelOrder function using array-based FIFO queue.",
      "branch": "Verify root is not NULL and check child pointers before enqueueing.",
      "init": "Initialize queue array, front pointer, and rear pointer.",
      "exec": "Dequeue node from queue[front++] and print its value.",
      "comment": "Standard C library header inclusion."
    },
    "notes": "In C, queue-based BFS typically utilizes a fixed ring buffer or dynamically resized array with front/rear indices."
  },
  {
    "id": "tree-max-depth",
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
        "text": "struct TreeNode {",
        "code": "struct TreeNode {",
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
        "text": "    struct TreeNode* left;",
        "code": "    struct TreeNode* left;",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "    struct TreeNode* right;",
        "code": "    struct TreeNode* right;",
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
        "text": "int maxDepth(struct TreeNode* root) {",
        "code": "int maxDepth(struct TreeNode* root) {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    if (root == NULL) return 0;",
        "code": "    if (root == NULL) return 0;",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "    int leftDepth = maxDepth(root->left);",
        "code": "    int leftDepth = maxDepth(root->left);",
        "tag": "init",
        "lineNum": 11
      },
      {
        "text": "    int rightDepth = maxDepth(root->right);",
        "code": "    int rightDepth = maxDepth(root->right);",
        "tag": "init",
        "lineNum": 12
      },
      {
        "text": "    return (leftDepth > rightDepth ? leftDepth : rightDepth) + 1;",
        "code": "    return (leftDepth > rightDepth ? leftDepth : rightDepth) + 1;",
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
    "rawCode": "#include <stdio.h>\n\nstruct TreeNode {\n    int val;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n\nint maxDepth(struct TreeNode* root) {\n    if (root == NULL) return 0;\n    int leftDepth = maxDepth(root->left);\n    int rightDepth = maxDepth(root->right);\n    return (leftDepth > rightDepth ? leftDepth : rightDepth) + 1;\n}",
    "explanations": {
      "def": "Define recursive maxDepth function returning integer height.",
      "branch": "Base case: return 0 if current node pointer is NULL.",
      "init": "Compute depth of left and right subtrees via recursive calls.",
      "exec": "Evaluate ternary conditional comparison between left and right subtree depths.",
      "return": "Return maximum child depth plus 1 for the current node.",
      "comment": "Standard header declarations in C."
    },
    "notes": "Recursive call stack in C uses O(H) stack memory where H is tree height; balanced trees take O(log N) stack frames, skewed trees take O(N)."
  },
  {
    "id": "tree-invert",
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
        "text": "struct TreeNode {",
        "code": "struct TreeNode {",
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
        "text": "    struct TreeNode* left;",
        "code": "    struct TreeNode* left;",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "    struct TreeNode* right;",
        "code": "    struct TreeNode* right;",
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
        "text": "struct TreeNode* invertTree(struct TreeNode* root) {",
        "code": "struct TreeNode* invertTree(struct TreeNode* root) {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    if (root == NULL) return NULL;",
        "code": "    if (root == NULL) return NULL;",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "    struct TreeNode* temp = root->left;",
        "code": "    struct TreeNode* temp = root->left;",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "    root->left = root->right;",
        "code": "    root->left = root->right;",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    root->right = temp;",
        "code": "    root->right = temp;",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    invertTree(root->left);",
        "code": "    invertTree(root->left);",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    invertTree(root->right);",
        "code": "    invertTree(root->right);",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    return root;",
        "code": "    return root;",
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
    "rawCode": "#include <stdio.h>\n\nstruct TreeNode {\n    int val;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n\nstruct TreeNode* invertTree(struct TreeNode* root) {\n    if (root == NULL) return NULL;\n    struct TreeNode* temp = root->left;\n    root->left = root->right;\n    root->right = temp;\n    invertTree(root->left);\n    invertTree(root->right);\n    return root;\n}",
    "explanations": {
      "def": "Define invertTree function returning modified root pointer.",
      "branch": "Return NULL if node is empty.",
      "init": "Cache left child pointer in temporary variable before swapping.",
      "exec": "Recursively invert left and right subtrees.",
      "return": "Return inverted tree root pointer.",
      "comment": "C struct definitions and function headers."
    },
    "notes": "Swapping pointer references is an O(1) pointer reassignment; no node values or heap allocations are moved."
  },
  {
    "id": "tree-validate-bst",
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
        "text": "#include <limits.h>",
        "code": "#include <limits.h>",
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
        "text": "struct TreeNode {",
        "code": "struct TreeNode {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "    int val;",
        "code": "    int val;",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "    struct TreeNode* left;",
        "code": "    struct TreeNode* left;",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "    struct TreeNode* right;",
        "code": "    struct TreeNode* right;",
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
        "text": "bool validate(struct TreeNode* node, long minVal, long maxVal) {",
        "code": "bool validate(struct TreeNode* node, long minVal, long maxVal) {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "    if (node == NULL) return true;",
        "code": "    if (node == NULL) return true;",
        "tag": "branch",
        "lineNum": 12
      },
      {
        "text": "    if (node->val <= minVal || node->val >= maxVal) return false;",
        "code": "    if (node->val <= minVal || node->val >= maxVal) return false;",
        "tag": "branch",
        "lineNum": 13
      },
      {
        "text": "    return validate(node->left, minVal, node->val) && validate(node->right, node->val, maxVal);",
        "code": "    return validate(node->left, minVal, node->val) && validate(node->right, node->val, maxVal);",
        "tag": "return",
        "lineNum": 14
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "bool isValidBST(struct TreeNode* root) {",
        "code": "bool isValidBST(struct TreeNode* root) {",
        "tag": "def",
        "lineNum": 17
      },
      {
        "text": "    return validate(root, LONG_MIN, LONG_MAX);",
        "code": "    return validate(root, LONG_MIN, LONG_MAX);",
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
    "rawCode": "#include <stdio.h>\n#include <stdbool.h>\n#include <limits.h>\n\nstruct TreeNode {\n    int val;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n\nbool validate(struct TreeNode* node, long minVal, long maxVal) {\n    if (node == NULL) return true;\n    if (node->val <= minVal || node->val >= maxVal) return false;\n    return validate(node->left, minVal, node->val) && validate(node->right, node->val, maxVal);\n}\n\nbool isValidBST(struct TreeNode* root) {\n    return validate(root, LONG_MIN, LONG_MAX);\n}",
    "explanations": {
      "def": "Define helper function validating node value within (minVal, maxVal) bounds.",
      "branch": "Validate node value strictly respects BST lower and upper bounds.",
      "return": "Return true on NULL leaf, or combined boolean validation of left and right subtrees.",
      "comment": "Include stdbool.h for bool types and limits.h for LONG_MIN/LONG_MAX.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "init": "Executes [init] operation in this algorithm step."
    },
    "notes": "In C, using long avoids 32-bit integer overflow when comparing against INT_MIN or INT_MAX in node bounds."
  },
  {
    "id": "tree-lca-bst",
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
        "text": "struct TreeNode {",
        "code": "struct TreeNode {",
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
        "text": "    struct TreeNode* left;",
        "code": "    struct TreeNode* left;",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "    struct TreeNode* right;",
        "code": "    struct TreeNode* right;",
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
        "text": "struct TreeNode* lowestCommonAncestor(struct TreeNode* root, struct TreeNode* p, struct TreeNode* q) {",
        "code": "struct TreeNode* lowestCommonAncestor(struct TreeNode* root, struct TreeNode* p, struct TreeNode* q) {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    struct TreeNode* curr = root;",
        "code": "    struct TreeNode* curr = root;",
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
        "text": "        if (p->val < curr->val && q->val < curr->val) {",
        "code": "        if (p->val < curr->val && q->val < curr->val) {",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "            curr = curr->left;",
        "code": "            curr = curr->left;",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        } else if (p->val > curr->val && q->val > curr->val) {",
        "code": "        } else if (p->val > curr->val && q->val > curr->val) {",
        "tag": "def",
        "lineNum": 14
      },
      {
        "text": "            curr = curr->right;",
        "code": "            curr = curr->right;",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "        } else {",
        "code": "        } else {",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "            return curr;",
        "code": "            return curr;",
        "tag": "return",
        "lineNum": 17
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "    return NULL;",
        "code": "    return NULL;",
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
    "rawCode": "#include <stdio.h>\n\nstruct TreeNode {\n    int val;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n\nstruct TreeNode* lowestCommonAncestor(struct TreeNode* root, struct TreeNode* p, struct TreeNode* q) {\n    struct TreeNode* curr = root;\n    while (curr != NULL) {\n        if (p->val < curr->val && q->val < curr->val) {\n            curr = curr->left;\n        } else if (p->val > curr->val && q->val > curr->val) {\n            curr = curr->right;\n        } else {\n            return curr;\n        }\n    }\n    return NULL;\n}",
    "explanations": {
      "def": "Define lowestCommonAncestor function utilizing BST ordering property.",
      "init": "Initialize current navigation pointer to root node.",
      "return": "Return split point node as the lowest common ancestor.",
      "comment": "Structure and function prototypes in standard C.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Takes advantage of BST sorted property to locate LCA iteratively in O(H) time and O(1) auxiliary space without recursion."
  }
];
})(typeof window !== 'undefined' ? window : global);
