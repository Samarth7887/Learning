/**
 * SynapseCS Language-Specific Implementation: JAVASCRIPT - Binary Trees & BST
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['javascript'] = window.DSA_LANG_CODE['javascript'] || {};
  window.DSA_LANG_CODE['javascript']['trees'] = [
  {
    "id": "tree-node-create",
    "code": [
      {
        "text": "class TreeNode {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  constructor(val = 0, left = null, right = null) {",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    this.val = val;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    this.left = left;",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    this.right = right;",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "const root = new TreeNode(1);",
        "tag": "init",
        "lineNum": 9
      },
      {
        "text": "root.left = new TreeNode(2);",
        "tag": "init",
        "lineNum": 10
      },
      {
        "text": "root.right = new TreeNode(3);",
        "tag": "init",
        "lineNum": 11
      },
      {
        "text": "console.log(JSON.stringify([root.val, root.left.val, root.right.val]));",
        "tag": "exec",
        "lineNum": 12
      }
    ],
    "rawCode": "class TreeNode {\n  constructor(val = 0, left = null, right = null) {\n    this.val = val;\n    this.left = left;\n    this.right = right;\n  }\n}\n\nconst root = new TreeNode(1);\nroot.left = new TreeNode(2);\nroot.right = new TreeNode(3);\nconsole.log(JSON.stringify([root.val, root.left.val, root.right.val]));",
    "explanations": {
      "step_1": "TreeNode class holding a value and pointers to left and right children.",
      "step_2": "Instantiate root (1) and attach left child (2) and right child (3).",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "tree-inorder-traversal",
    "code": [
      {
        "text": "function inorderTraversal(root) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  const res = [];",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "  function dfs(node) {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    if (!node) return;",
        "tag": "branch",
        "lineNum": 4
      },
      {
        "text": "    dfs(node.left);",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    res.push(node.val);",
        "tag": "mutate",
        "lineNum": 6
      },
      {
        "text": "    dfs(node.right);",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "  dfs(root);",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "  return res;",
        "tag": "return",
        "lineNum": 10
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "const root = { val: 1, left: null, right: { val: 2, left: { val: 3, left: null, right: null }, right: null } };",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "console.log(JSON.stringify(inorderTraversal(root)));",
        "tag": "exec",
        "lineNum": 14
      }
    ],
    "rawCode": "function inorderTraversal(root) {\n  const res = [];\n  function dfs(node) {\n    if (!node) return;\n    dfs(node.left);\n    res.push(node.val);\n    dfs(node.right);\n  }\n  dfs(root);\n  return res;\n}\n\nconst root = { val: 1, left: null, right: { val: 2, left: { val: 3, left: null, right: null }, right: null } };\nconsole.log(JSON.stringify(inorderTraversal(root)));",
    "explanations": {
      "step_1": "Base case: if current node is null, return immediately.",
      "step_2": "Recursive step 1: Visit entire left subtree.",
      "step_3": "Process current node: append value to result list.",
      "step_4": "Recursive step 2: Visit entire right subtree.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "tree-level-order",
    "code": [
      {
        "text": "function levelOrder(root) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  if (!root) return [];",
        "tag": "branch",
        "lineNum": 2
      },
      {
        "text": "  const res = [];",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "  const q = [root];",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "  while (q.length) {",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "    const sz = q.length;",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    const level = [];",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "    for (let i = 0; i < sz; i++) {",
        "tag": "loop",
        "lineNum": 8
      },
      {
        "text": "      const node = q.shift();",
        "tag": "mutate",
        "lineNum": 9
      },
      {
        "text": "      level.push(node.val);",
        "tag": "mutate",
        "lineNum": 10
      },
      {
        "text": "      if (node.left) q.push(node.left);",
        "tag": "branch",
        "lineNum": 11
      },
      {
        "text": "      if (node.right) q.push(node.right);",
        "tag": "branch",
        "lineNum": 12
      },
      {
        "text": "    }",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    res.push(level);",
        "tag": "mutate",
        "lineNum": 14
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "  return res;",
        "tag": "return",
        "lineNum": 16
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "const root = { val: 3, left: { val: 9 }, right: { val: 20, left: { val: 15 }, right: { val: 7 } } };",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "console.log(JSON.stringify(levelOrder(root)));",
        "tag": "exec",
        "lineNum": 20
      }
    ],
    "rawCode": "function levelOrder(root) {\n  if (!root) return [];\n  const res = [];\n  const q = [root];\n  while (q.length) {\n    const sz = q.length;\n    const level = [];\n    for (let i = 0; i < sz; i++) {\n      const node = q.shift();\n      level.push(node.val);\n      if (node.left) q.push(node.left);\n      if (node.right) q.push(node.right);\n    }\n    res.push(level);\n  }\n  return res;\n}\n\nconst root = { val: 3, left: { val: 9 }, right: { val: 20, left: { val: 15 }, right: { val: 7 } } };\nconsole.log(JSON.stringify(levelOrder(root)));",
    "explanations": {
      "step_1": "Base check and initialize FIFO queue containing the root node.",
      "step_2": "Snapshot current queue length to process exactly one tree level at a time.",
      "step_3": "Enqueue non-null left and right child nodes for the next level.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "tree-max-depth",
    "code": [
      {
        "text": "function maxDepth(root) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  if (!root) return 0;",
        "tag": "branch",
        "lineNum": 2
      },
      {
        "text": "  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));",
        "tag": "return",
        "lineNum": 3
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "const root = { val: 3, left: { val: 9 }, right: { val: 20, left: { val: 15 }, right: { val: 7 } } };",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "console.log(maxDepth(root));",
        "tag": "exec",
        "lineNum": 7
      }
    ],
    "rawCode": "function maxDepth(root) {\n  if (!root) return 0;\n  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n}\n\nconst root = { val: 3, left: { val: 9 }, right: { val: 20, left: { val: 15 }, right: { val: 7 } } };\nconsole.log(maxDepth(root));",
    "explanations": {
      "step_1": "Base case: empty tree has depth 0.",
      "step_2": "Postorder: depth of this node is 1 plus the larger depth of its two subtrees.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "tree-invert",
    "code": [
      {
        "text": "function invertTree(root) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  if (!root) return null;",
        "tag": "branch",
        "lineNum": 2
      },
      {
        "text": "  const temp = root.left;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "  root.left = invertTree(root.right);",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "  root.right = invertTree(temp);",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "  return root;",
        "tag": "return",
        "lineNum": 6
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "const root = { val: 4, left: { val: 2 }, right: { val: 7 } };",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "invertTree(root);",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "console.log(JSON.stringify([root.val, root.left.val, root.right.val]));",
        "tag": "exec",
        "lineNum": 11
      }
    ],
    "rawCode": "function invertTree(root) {\n  if (!root) return null;\n  const temp = root.left;\n  root.left = invertTree(root.right);\n  root.right = invertTree(temp);\n  return root;\n}\n\nconst root = { val: 4, left: { val: 2 }, right: { val: 7 } };\ninvertTree(root);\nconsole.log(JSON.stringify([root.val, root.left.val, root.right.val]));",
    "explanations": {
      "step_1": "Base case: null node requires no inversion.",
      "step_2": "Swap left and right pointers with the recursively inverted subtrees.",
      "step_3": "Return root of the newly mirrored tree.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "tree-validate-bst",
    "code": [
      {
        "text": "function isValidBST(root) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  function validate(node, low, high) {",
        "tag": "def",
        "lineNum": 2
      },
      {
        "text": "    if (!node) return true;",
        "tag": "branch",
        "lineNum": 3
      },
      {
        "text": "    if (node.val <= low || node.val >= high) return false;",
        "tag": "branch",
        "lineNum": 4
      },
      {
        "text": "    return validate(node.left, low, node.val) && validate(node.right, node.val, high);",
        "tag": "return",
        "lineNum": 5
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "  return validate(root, -Infinity, Infinity);",
        "tag": "return",
        "lineNum": 7
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "const root = { val: 2, left: { val: 1 }, right: { val: 3 } };",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "console.log(isValidBST(root));",
        "tag": "exec",
        "lineNum": 11
      }
    ],
    "rawCode": "function isValidBST(root) {\n  function validate(node, low, high) {\n    if (!node) return true;\n    if (node.val <= low || node.val >= high) return false;\n    return validate(node.left, low, node.val) && validate(node.right, node.val, high);\n  }\n  return validate(root, -Infinity, Infinity);\n}\n\nconst root = { val: 2, left: { val: 1 }, right: { val: 3 } };\nconsole.log(isValidBST(root));",
    "explanations": {
      "step_1": "Base case: empty subtree is valid.",
      "step_2": "Verify current node strictly obeys both upper and lower inherited boundaries.",
      "step_3": "Left child inherits upper bound = node.val; right child inherits lower bound = node.val.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  },
  {
    "id": "tree-lca-bst",
    "code": [
      {
        "text": "function lowestCommonAncestor(root, pVal, qVal) {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "  let curr = root;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "  while (curr) {",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "    if (pVal < curr.val && qVal < curr.val) curr = curr.left;",
        "tag": "branch",
        "lineNum": 4
      },
      {
        "text": "    else if (pVal > curr.val && qVal > curr.val) curr = curr.right;",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "    else return curr.val;",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "  }",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "  return null;",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "}",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "const root = { val: 6, left: { val: 2 }, right: { val: 8 } };",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "console.log(lowestCommonAncestor(root, 2, 8));",
        "tag": "exec",
        "lineNum": 12
      }
    ],
    "rawCode": "function lowestCommonAncestor(root, pVal, qVal) {\n  let curr = root;\n  while (curr) {\n    if (pVal < curr.val && qVal < curr.val) curr = curr.left;\n    else if (pVal > curr.val && qVal > curr.val) curr = curr.right;\n    else return curr.val;\n  }\n  return null;\n}\n\nconst root = { val: 6, left: { val: 2 }, right: { val: 8 } };\nconsole.log(lowestCommonAncestor(root, 2, 8));",
    "explanations": {
      "step_1": "If both values are smaller than current node, LCA must be in left subtree.",
      "step_2": "If both values are larger than current node, LCA must be in right subtree.",
      "step_3": "Split point reached: one value is on the left, one on the right (or one is current node). Current node is the LCA.",
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result."
    },
    "notes": "V8 engine optimizes execution via hidden classes and just-in-time compilation."
  }
];
})(typeof window !== 'undefined' ? window : global);
