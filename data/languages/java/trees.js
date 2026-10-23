/**
 * SynapseCS Language-Specific Implementation: JAVA - Binary Trees & BST
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['java'] = window.DSA_LANG_CODE['java'] || {};
  window.DSA_LANG_CODE['java']['trees'] = [
  {
    "id": "tree-node-create",
    "code": [
      {
        "text": "public class TreeNode {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    int val;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    TreeNode left, right;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    TreeNode(int val) { this.val = val; }",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 5
      }
    ],
    "rawCode": "public class TreeNode {\n    int val;\n    TreeNode left, right;\n    TreeNode(int val) { this.val = val; }\n}",
    "explanations": {
      "step_1": "TreeNode class holding a value and pointers to left and right children.",
      "step_2": "Instantiate root (1) and attach left child (2) and right child (3).",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "tree-inorder-traversal",
    "code": [
      {
        "text": "import java.util.*;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "class Solution {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    public List<Integer> inorderTraversal(TreeNode root) {",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "        List<Integer> res = new ArrayList<>();",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "        dfs(root, res);",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "        return res;",
        "tag": "return",
        "lineNum": 7
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    private void dfs(TreeNode n, List<Integer> res) {",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        if (n == null) return;",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "        dfs(n.left, res);",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "        res.add(n.val);",
        "tag": "mutate",
        "lineNum": 12
      },
      {
        "text": "        dfs(n.right, res);",
        "tag": "exec",
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
    "rawCode": "import java.util.*;\n\nclass Solution {\n    public List<Integer> inorderTraversal(TreeNode root) {\n        List<Integer> res = new ArrayList<>();\n        dfs(root, res);\n        return res;\n    }\n    private void dfs(TreeNode n, List<Integer> res) {\n        if (n == null) return;\n        dfs(n.left, res);\n        res.add(n.val);\n        dfs(n.right, res);\n    }\n}",
    "explanations": {
      "step_1": "Base case: if current node is null, return immediately.",
      "step_2": "Recursive step 1: Visit entire left subtree.",
      "step_3": "Process current node: append value to result list.",
      "step_4": "Recursive step 2: Visit entire right subtree.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "tree-level-order",
    "code": [
      {
        "text": "import java.util.*;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "class Solution {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    public List<List<Integer>> levelOrder(TreeNode root) {",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "        List<List<Integer>> res = new ArrayList<>();",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "        if (root == null) return res;",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "        Queue<TreeNode> q = new LinkedList<>();",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "        q.add(root);",
        "tag": "mutate",
        "lineNum": 8
      },
      {
        "text": "        while (!q.isEmpty()) {",
        "tag": "loop",
        "lineNum": 9
      },
      {
        "text": "            int sz = q.size();",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "            List<Integer> level = new ArrayList<>();",
        "tag": "init",
        "lineNum": 11
      },
      {
        "text": "            for (int i = 0; i < sz; i++) {",
        "tag": "loop",
        "lineNum": 12
      },
      {
        "text": "                TreeNode n = q.poll();",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "                level.add(n.val);",
        "tag": "mutate",
        "lineNum": 14
      },
      {
        "text": "                if (n.left != null) q.add(n.left);",
        "tag": "branch",
        "lineNum": 15
      },
      {
        "text": "                if (n.right != null) q.add(n.right);",
        "tag": "branch",
        "lineNum": 16
      },
      {
        "text": "            }",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "            res.add(level);",
        "tag": "mutate",
        "lineNum": 18
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "        return res;",
        "tag": "return",
        "lineNum": 20
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 22
      }
    ],
    "rawCode": "import java.util.*;\n\nclass Solution {\n    public List<List<Integer>> levelOrder(TreeNode root) {\n        List<List<Integer>> res = new ArrayList<>();\n        if (root == null) return res;\n        Queue<TreeNode> q = new LinkedList<>();\n        q.add(root);\n        while (!q.isEmpty()) {\n            int sz = q.size();\n            List<Integer> level = new ArrayList<>();\n            for (int i = 0; i < sz; i++) {\n                TreeNode n = q.poll();\n                level.add(n.val);\n                if (n.left != null) q.add(n.left);\n                if (n.right != null) q.add(n.right);\n            }\n            res.add(level);\n        }\n        return res;\n    }\n}",
    "explanations": {
      "step_1": "Base check and initialize FIFO queue containing the root node.",
      "step_2": "Snapshot current queue length to process exactly one tree level at a time.",
      "step_3": "Enqueue non-null left and right child nodes for the next level.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "tree-max-depth",
    "code": [
      {
        "text": "class Solution {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    public int maxDepth(TreeNode root) {",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "        if (root == null) return 0;",
        "tag": "branch",
        "lineNum": 3
      },
      {
        "text": "        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));",
        "tag": "return",
        "lineNum": 4
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 6
      }
    ],
    "rawCode": "class Solution {\n    public int maxDepth(TreeNode root) {\n        if (root == null) return 0;\n        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n    }\n}",
    "explanations": {
      "step_1": "Base case: empty tree has depth 0.",
      "step_2": "Postorder: depth of this node is 1 plus the larger depth of its two subtrees.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "tree-invert",
    "code": [
      {
        "text": "class Solution {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    public TreeNode invertTree(TreeNode root) {",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "        if (root == null) return null;",
        "tag": "branch",
        "lineNum": 3
      },
      {
        "text": "        TreeNode tmp = root.left;",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "        root.left = invertTree(root.right);",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "        root.right = invertTree(tmp);",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "        return root;",
        "tag": "return",
        "lineNum": 7
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 9
      }
    ],
    "rawCode": "class Solution {\n    public TreeNode invertTree(TreeNode root) {\n        if (root == null) return null;\n        TreeNode tmp = root.left;\n        root.left = invertTree(root.right);\n        root.right = invertTree(tmp);\n        return root;\n    }\n}",
    "explanations": {
      "step_1": "Base case: null node requires no inversion.",
      "step_2": "Swap left and right pointers with the recursively inverted subtrees.",
      "step_3": "Return root of the newly mirrored tree.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "tree-validate-bst",
    "code": [
      {
        "text": "class Solution {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    public boolean isValidBST(TreeNode root) {",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "        return validate(root, Long.MIN_VALUE, Long.MAX_VALUE);",
        "tag": "return",
        "lineNum": 3
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    private boolean validate(TreeNode n, long low, long high) {",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "        if (n == null) return true;",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "        if (n.val <= low || n.val >= high) return false;",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "        return validate(n.left, low, n.val) && validate(n.right, n.val, high);",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 10
      }
    ],
    "rawCode": "class Solution {\n    public boolean isValidBST(TreeNode root) {\n        return validate(root, Long.MIN_VALUE, Long.MAX_VALUE);\n    }\n    private boolean validate(TreeNode n, long low, long high) {\n        if (n == null) return true;\n        if (n.val <= low || n.val >= high) return false;\n        return validate(n.left, low, n.val) && validate(n.right, n.val, high);\n    }\n}",
    "explanations": {
      "step_1": "Base case: empty subtree is valid.",
      "step_2": "Verify current node strictly obeys both upper and lower inherited boundaries.",
      "step_3": "Left child inherits upper bound = node.val; right child inherits lower bound = node.val.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  },
  {
    "id": "tree-lca-bst",
    "code": [
      {
        "text": "class Solution {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "        TreeNode curr = root;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "        while (curr != null) {",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "            if (p.val < curr.val && q.val < curr.val) curr = curr.left;",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "            else if (p.val > curr.val && q.val > curr.val) curr = curr.right;",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "            else return curr;",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "        }",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        return null;",
        "tag": "return",
        "lineNum": 9
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 11
      }
    ],
    "rawCode": "class Solution {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        TreeNode curr = root;\n        while (curr != null) {\n            if (p.val < curr.val && q.val < curr.val) curr = curr.left;\n            else if (p.val > curr.val && q.val > curr.val) curr = curr.right;\n            else return curr;\n        }\n        return null;\n    }\n}",
    "explanations": {
      "step_1": "If both values are smaller than current node, LCA must be in left subtree.",
      "step_2": "If both values are larger than current node, LCA must be in right subtree.",
      "step_3": "Split point reached: one value is on the left, one on the right (or one is current node). Current node is the LCA.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "Java garbage collector manages object lifecycles on the JVM heap."
  }
];
})(typeof window !== 'undefined' ? window : global);
