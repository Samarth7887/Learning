/**
 * SynapseCS Language-Specific Implementation: PYTHON - trees
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['python'] = window.DSA_LANG_CODE['python'] || {};
  window.DSA_LANG_CODE['python']['trees'] = [
  {
    "id": "tree-node-create",
    "code": [
      {
        "text": "class TreeNode:",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    def __init__(self, val=0, left=None, right=None):",
        "tag": "def",
        "lineNum": 2
      },
      {
        "text": "        self.val = val",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "        self.left = left",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "        self.right = right",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "# Build Tree: 1 -> left: 2, right: 3",
        "tag": "comment",
        "lineNum": 7
      },
      {
        "text": "root = TreeNode(1)",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "root.left = TreeNode(2)",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "root.right = TreeNode(3)",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "print([root.val, root.left.val, root.right.val])",
        "tag": "exec",
        "lineNum": 11
      }
    ],
    "rawCode": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n# Build Tree: 1 -> left: 2, right: 3\nroot = TreeNode(1)\nroot.left = TreeNode(2)\nroot.right = TreeNode(3)\nprint([root.val, root.left.val, root.right.val])",
    "explanations": {
      "def": "Executes tagged statement [def] in python.",
      "exec": "Executes tagged statement [exec] in python.",
      "comment": "Executes tagged statement [comment] in python."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "tree-inorder-traversal",
    "code": [
      {
        "text": "class TreeNode:",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    def __init__(self, val=0, left=None, right=None):",
        "tag": "def",
        "lineNum": 2
      },
      {
        "text": "        self.val = val",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "        self.left = left",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "        self.right = right",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "def inorderTraversal(root):",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "    res = []",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "    def dfs(node):",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "        if not node: return",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "        dfs(node.left)",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "        res.append(node.val)",
        "tag": "mutate",
        "lineNum": 12
      },
      {
        "text": "        dfs(node.right)",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    dfs(root)",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    return res",
        "tag": "return",
        "lineNum": 15
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 17
      },
      {
        "text": "root = TreeNode(1, None, TreeNode(2, TreeNode(3), None))",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "print(inorderTraversal(root))",
        "tag": "exec",
        "lineNum": 19
      }
    ],
    "rawCode": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef inorderTraversal(root):\n    res = []\n    def dfs(node):\n        if not node: return\n        dfs(node.left)\n        res.append(node.val)\n        dfs(node.right)\n    dfs(root)\n    return res\n\n# Test\nroot = TreeNode(1, None, TreeNode(2, TreeNode(3), None))\nprint(inorderTraversal(root))",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in python.",
      "exec": "Executes tagged statement [exec] in python.",
      "branch": "Executes tagged statement [branch] in python.",
      "mutate": "Executes tagged statement [mutate] in python.",
      "comment": "Executes tagged statement [comment] in python."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "tree-level-order",
    "code": [
      {
        "text": "from collections import deque",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "class TreeNode:",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    def __init__(self, val=0, left=None, right=None):",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "        self.val = val",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "        self.left = left",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "        self.right = right",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "def levelOrder(root):",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    if not root: return []",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "    res = []",
        "tag": "init",
        "lineNum": 11
      },
      {
        "text": "    q = deque([root])",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    while q:",
        "tag": "loop",
        "lineNum": 13
      },
      {
        "text": "        level = []",
        "tag": "init",
        "lineNum": 14
      },
      {
        "text": "        for _ in range(len(q)):",
        "tag": "loop",
        "lineNum": 15
      },
      {
        "text": "            node = q.popleft()",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "            level.append(node.val)",
        "tag": "mutate",
        "lineNum": 17
      },
      {
        "text": "            if node.left: q.append(node.left)",
        "tag": "branch",
        "lineNum": 18
      },
      {
        "text": "            if node.right: q.append(node.right)",
        "tag": "branch",
        "lineNum": 19
      },
      {
        "text": "        res.append(level)",
        "tag": "mutate",
        "lineNum": 20
      },
      {
        "text": "    return res",
        "tag": "return",
        "lineNum": 21
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 23
      },
      {
        "text": "root = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "print(levelOrder(root))",
        "tag": "exec",
        "lineNum": 25
      }
    ],
    "rawCode": "from collections import deque\n\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef levelOrder(root):\n    if not root: return []\n    res = []\n    q = deque([root])\n    while q:\n        level = []\n        for _ in range(len(q)):\n            node = q.popleft()\n            level.append(node.val)\n            if node.left: q.append(node.left)\n            if node.right: q.append(node.right)\n        res.append(level)\n    return res\n\n# Test\nroot = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))\nprint(levelOrder(root))",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "exec": "Executes tagged statement [exec] in python.",
      "def": "Executes tagged statement [def] in python.",
      "branch": "Executes tagged statement [branch] in python.",
      "mutate": "Executes tagged statement [mutate] in python.",
      "comment": "Executes tagged statement [comment] in python."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "tree-max-depth",
    "code": [
      {
        "text": "def maxDepth(root):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    if not root:",
        "tag": "branch",
        "lineNum": 2
      },
      {
        "text": "        return 0",
        "tag": "return",
        "lineNum": 3
      },
      {
        "text": "    return 1 + max(maxDepth(root.left), maxDepth(root.right))",
        "tag": "return",
        "lineNum": 4
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 6
      },
      {
        "text": "class TreeNode:",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "    def __init__(self, val=0, left=None, right=None):",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "        self.val, self.left, self.right = val, left, right",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "root = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "print(maxDepth(root))",
        "tag": "exec",
        "lineNum": 12
      }
    ],
    "rawCode": "def maxDepth(root):\n    if not root:\n        return 0\n    return 1 + max(maxDepth(root.left), maxDepth(root.right))\n\n# Test\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val, self.left, self.right = val, left, right\n\nroot = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))\nprint(maxDepth(root))",
    "explanations": {
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in python.",
      "branch": "Executes tagged statement [branch] in python.",
      "exec": "Executes tagged statement [exec] in python.",
      "comment": "Executes tagged statement [comment] in python."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "tree-invert",
    "code": [
      {
        "text": "def invertTree(root):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    if not root:",
        "tag": "branch",
        "lineNum": 2
      },
      {
        "text": "        return None",
        "tag": "return",
        "lineNum": 3
      },
      {
        "text": "    root.left, root.right = invertTree(root.right), invertTree(root.left)",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    return root",
        "tag": "return",
        "lineNum": 5
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 7
      },
      {
        "text": "class TreeNode:",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "    def __init__(self, val=0, left=None, right=None):",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "        self.val, self.left, self.right = val, left, right",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "root = TreeNode(4, TreeNode(2), TreeNode(7))",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "invertTree(root)",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "print([root.val, root.left.val, root.right.val])",
        "tag": "exec",
        "lineNum": 14
      }
    ],
    "rawCode": "def invertTree(root):\n    if not root:\n        return None\n    root.left, root.right = invertTree(root.right), invertTree(root.left)\n    return root\n\n# Test\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val, self.left, self.right = val, left, right\n\nroot = TreeNode(4, TreeNode(2), TreeNode(7))\ninvertTree(root)\nprint([root.val, root.left.val, root.right.val])",
    "explanations": {
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in python.",
      "branch": "Executes tagged statement [branch] in python.",
      "exec": "Executes tagged statement [exec] in python.",
      "comment": "Executes tagged statement [comment] in python."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "tree-validate-bst",
    "code": [
      {
        "text": "def isValidBST(root):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    def validate(node, low, high):",
        "tag": "def",
        "lineNum": 2
      },
      {
        "text": "        if not node:",
        "tag": "branch",
        "lineNum": 3
      },
      {
        "text": "            return True",
        "tag": "return",
        "lineNum": 4
      },
      {
        "text": "        if not (low < node.val < high):",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "            return False",
        "tag": "return",
        "lineNum": 6
      },
      {
        "text": "        return validate(node.left, low, node.val) and validate(node.right, node.val, high)",
        "tag": "return",
        "lineNum": 7
      },
      {
        "text": "    return validate(root, float('-inf'), float('inf'))",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 10
      },
      {
        "text": "class TreeNode:",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "    def __init__(self, val=0, left=None, right=None):",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "        self.val, self.left, self.right = val, left, right",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "print(isValidBST(TreeNode(2, TreeNode(1), TreeNode(3))))",
        "tag": "exec",
        "lineNum": 15
      }
    ],
    "rawCode": "def isValidBST(root):\n    def validate(node, low, high):\n        if not node:\n            return True\n        if not (low < node.val < high):\n            return False\n        return validate(node.left, low, node.val) and validate(node.right, node.val, high)\n    return validate(root, float('-inf'), float('inf'))\n\n# Test\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val, self.left, self.right = val, left, right\n\nprint(isValidBST(TreeNode(2, TreeNode(1), TreeNode(3))))",
    "explanations": {
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in python.",
      "branch": "Executes tagged statement [branch] in python.",
      "exec": "Executes tagged statement [exec] in python.",
      "comment": "Executes tagged statement [comment] in python."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "tree-lca-bst",
    "code": [
      {
        "text": "def lowestCommonAncestor(root, p_val, q_val):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    curr = root",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    while curr:",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "        if p_val < curr.val and q_val < curr.val:",
        "tag": "branch",
        "lineNum": 4
      },
      {
        "text": "            curr = curr.left",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "        elif p_val > curr.val and q_val > curr.val:",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "            curr = curr.right",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "        else:",
        "tag": "branch",
        "lineNum": 8
      },
      {
        "text": "            return curr.val",
        "tag": "return",
        "lineNum": 9
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "# Test",
        "tag": "comment",
        "lineNum": 11
      },
      {
        "text": "class TreeNode:",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "    def __init__(self, val=0, left=None, right=None):",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "        self.val, self.left, self.right = val, left, right",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "root = TreeNode(6, TreeNode(2), TreeNode(8))",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "print(lowestCommonAncestor(root, 2, 8))",
        "tag": "exec",
        "lineNum": 17
      }
    ],
    "rawCode": "def lowestCommonAncestor(root, p_val, q_val):\n    curr = root\n    while curr:\n        if p_val < curr.val and q_val < curr.val:\n            curr = curr.left\n        elif p_val > curr.val and q_val > curr.val:\n            curr = curr.right\n        else:\n            return curr.val\n\n# Test\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val, self.left, self.right = val, left, right\n\nroot = TreeNode(6, TreeNode(2), TreeNode(8))\nprint(lowestCommonAncestor(root, 2, 8))",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in python.",
      "exec": "Executes tagged statement [exec] in python.",
      "branch": "Executes tagged statement [branch] in python.",
      "comment": "Executes tagged statement [comment] in python."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  }
];
})(typeof window !== 'undefined' ? window : global);
