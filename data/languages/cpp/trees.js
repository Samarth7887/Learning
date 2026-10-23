/**
 * SynapseCS Language-Specific Implementation: CPP - trees
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['cpp'] = window.DSA_LANG_CODE['cpp'] || {};
  window.DSA_LANG_CODE['cpp']['trees'] = [
  {
    "id": "tree-node-create",
    "code": [
      {
        "text": "struct TreeNode {",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "    int val;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    TreeNode* left;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    TreeNode* right;",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "};",
        "tag": "exec",
        "lineNum": 6
      }
    ],
    "rawCode": "struct TreeNode {\n    int val;\n    TreeNode* left;\n    TreeNode* right;\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n};",
    "explanations": {
      "exec": "Executes tagged statement [exec] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "tree-inorder-traversal",
    "code": [
      {
        "text": "#include <vector>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "using namespace std;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "void dfs(TreeNode* n, vector<int>& res) {",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    if (!n) return;",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "    dfs(n->left, res);",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    res.push_back(n->val);",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    dfs(n->right, res);",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "vector<int> inorderTraversal(TreeNode* root) {",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    vector<int> res;",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    dfs(root, res);",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    return res;",
        "tag": "return",
        "lineNum": 13
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 14
      }
    ],
    "rawCode": "#include <vector>\nusing namespace std;\n\nvoid dfs(TreeNode* n, vector<int>& res) {\n    if (!n) return;\n    dfs(n->left, res);\n    res.push_back(n->val);\n    dfs(n->right, res);\n}\nvector<int> inorderTraversal(TreeNode* root) {\n    vector<int> res;\n    dfs(root, res);\n    return res;\n}",
    "explanations": {
      "return": "Return computed solution result.",
      "comment": "Executes tagged statement [comment] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "tree-level-order",
    "code": [
      {
        "text": "#include <vector>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <queue>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "using namespace std;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "vector<vector<int>> levelOrder(TreeNode* root) {",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    if (!root) return {};",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "    vector<vector<int>> res;",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    queue<TreeNode*> q;",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    q.push(root);",
        "tag": "mutate",
        "lineNum": 9
      },
      {
        "text": "    while (!q.empty()) {",
        "tag": "loop",
        "lineNum": 10
      },
      {
        "text": "        int sz = q.size();",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "        vector<int> level;",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "        for (int i = 0; i < sz; i++) {",
        "tag": "loop",
        "lineNum": 13
      },
      {
        "text": "            TreeNode* n = q.front(); q.pop();",
        "tag": "mutate",
        "lineNum": 14
      },
      {
        "text": "            level.push_back(n->val);",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "            if (n->left) q.push(n->left);",
        "tag": "branch",
        "lineNum": 16
      },
      {
        "text": "            if (n->right) q.push(n->right);",
        "tag": "branch",
        "lineNum": 17
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "        res.push_back(level);",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "    return res;",
        "tag": "return",
        "lineNum": 21
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 22
      }
    ],
    "rawCode": "#include <vector>\n#include <queue>\nusing namespace std;\n\nvector<vector<int>> levelOrder(TreeNode* root) {\n    if (!root) return {};\n    vector<vector<int>> res;\n    queue<TreeNode*> q;\n    q.push(root);\n    while (!q.empty()) {\n        int sz = q.size();\n        vector<int> level;\n        for (int i = 0; i < sz; i++) {\n            TreeNode* n = q.front(); q.pop();\n            level.push_back(n->val);\n            if (n->left) q.push(n->left);\n            if (n->right) q.push(n->right);\n        }\n        res.push_back(level);\n    }\n    return res;\n}",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "comment": "Executes tagged statement [comment] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp.",
      "mutate": "Executes tagged statement [mutate] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "tree-max-depth",
    "code": [
      {
        "text": "#include <algorithm>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "using namespace std;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "int maxDepth(TreeNode* root) {",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    if (!root) return 0;",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "    return 1 + max(maxDepth(root->left), maxDepth(root->right));",
        "tag": "return",
        "lineNum": 6
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 7
      }
    ],
    "rawCode": "#include <algorithm>\nusing namespace std;\n\nint maxDepth(TreeNode* root) {\n    if (!root) return 0;\n    return 1 + max(maxDepth(root->left), maxDepth(root->right));\n}",
    "explanations": {
      "return": "Return computed solution result.",
      "comment": "Executes tagged statement [comment] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "tree-invert",
    "code": [
      {
        "text": "TreeNode* invertTree(TreeNode* root) {",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "    if (!root) return nullptr;",
        "tag": "branch",
        "lineNum": 2
      },
      {
        "text": "    TreeNode* tmp = root->left;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    root->left = invertTree(root->right);",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    root->right = invertTree(tmp);",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    return root;",
        "tag": "return",
        "lineNum": 6
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 7
      }
    ],
    "rawCode": "TreeNode* invertTree(TreeNode* root) {\n    if (!root) return nullptr;\n    TreeNode* tmp = root->left;\n    root->left = invertTree(root->right);\n    root->right = invertTree(tmp);\n    return root;\n}",
    "explanations": {
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "tree-validate-bst",
    "code": [
      {
        "text": "#include <climits>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "bool validate(TreeNode* n, long long low, long long high) {",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    if (!n) return true;",
        "tag": "branch",
        "lineNum": 4
      },
      {
        "text": "    if (n->val <= low || n->val >= high) return false;",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "    return validate(n->left, low, n->val) && validate(n->right, n->val, high);",
        "tag": "return",
        "lineNum": 6
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "bool isValidBST(TreeNode* root) {",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    return validate(root, LLONG_MIN, LLONG_MAX);",
        "tag": "return",
        "lineNum": 9
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 10
      }
    ],
    "rawCode": "#include <climits>\n\nbool validate(TreeNode* n, long long low, long long high) {\n    if (!n) return true;\n    if (n->val <= low || n->val >= high) return false;\n    return validate(n->left, low, n->val) && validate(n->right, n->val, high);\n}\nbool isValidBST(TreeNode* root) {\n    return validate(root, LLONG_MIN, LLONG_MAX);\n}",
    "explanations": {
      "return": "Return computed solution result.",
      "comment": "Executes tagged statement [comment] in cpp.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  },
  {
    "id": "tree-lca-bst",
    "code": [
      {
        "text": "TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "    TreeNode* curr = root;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    while (curr) {",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "        if (p->val < curr->val && q->val < curr->val) curr = curr->left;",
        "tag": "branch",
        "lineNum": 4
      },
      {
        "text": "        else if (p->val > curr->val && q->val > curr->val) curr = curr->right;",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "        else return curr;",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    return nullptr;",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 9
      }
    ],
    "rawCode": "TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {\n    TreeNode* curr = root;\n    while (curr) {\n        if (p->val < curr->val && q->val < curr->val) curr = curr->left;\n        else if (p->val > curr->val && q->val > curr->val) curr = curr->right;\n        else return curr;\n    }\n    return nullptr;\n}",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in cpp.",
      "branch": "Executes tagged statement [branch] in cpp."
    },
    "notes": "Fast explicit memory layout with direct value semantics or pointer references."
  }
];
})(typeof window !== 'undefined' ? window : global);
