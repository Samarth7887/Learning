// Binary Trees & BST Topic Definition
window.DSA_TOPICS = window.DSA_TOPICS || {};
window.DSA_TOPICS['trees'] = {
  "id": "trees",
  "title": "Binary Trees & BST",
  "badge": "12 Problems",
  "description": "Hierarchical tree nodes, recursive DFS (inorder, preorder, postorder), level-order BFS queues, and Binary Search Tree properties.",
  "subtopics": [
    {
      "id": "trees-basics",
      "title": "Basics & Traversals",
      "questions": [
        {
          "id": "tree-node-create",
          "title": "Define Tree Node & Build Binary Tree",
          "difficulty": "Basic",
          "leetcode": null,
          "description": "Define a TreeNode structure with value, left child pointer, and right child pointer. Construct a 3-node binary tree with root 1, left child 2, and right child 3.",
          "constraints": "TreeNode carries val, left, right.",
          "examples": [
            {
              "input": "root = TreeNode(1); root.left = TreeNode(2); root.right = TreeNode(3)",
              "output": "[1, 2, 3]",
              "why": "Root is 1, left child is 2, right child is 3."
            }
          ],
          "approaches": [
            {
              "name": "Node Linking",
              "idea": "Allocate node references and assign left and right children.",
              "timeComplexity": "O(1) to create, O(N) to traverse",
              "spaceComplexity": "O(N)",
              "code": {
                "python": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n# Build Tree: 1 -> left: 2, right: 3\nroot = TreeNode(1)\nroot.left = TreeNode(2)\nroot.right = TreeNode(3)\nprint([root.val, root.left.val, root.right.val])",
                "java": "public class TreeNode {\n    int val;\n    TreeNode left, right;\n    TreeNode(int val) { this.val = val; }\n}",
                "cpp": "struct TreeNode {\n    int val;\n    TreeNode* left;\n    TreeNode* right;\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n};",
                "javascript": "class TreeNode {\n  constructor(val = 0, left = null, right = null) {\n    this.val = val;\n    this.left = left;\n    this.right = right;\n  }\n}\n\nconst root = new TreeNode(1);\nroot.left = new TreeNode(2);\nroot.right = new TreeNode(3);\nconsole.log(JSON.stringify([root.val, root.left.val, root.right.val]));"
              },
              "lineExplanations": [
                {
                  "lines": [
                    1,
                    5
                  ],
                  "text": "TreeNode class holding a value and pointers to left and right children."
                },
                {
                  "lines": [
                    7,
                    10
                  ],
                  "text": "Instantiate root (1) and attach left child (2) and right child (3)."
                }
              ],
              "animationSteps": [
                {
                  "codeLine": 8,
                  "description": "Allocate root TreeNode with val = 1.",
                  "state": {
                    "type": "tree",
                    "tree": [
                      1
                    ]
                  },
                  "highlights": [
                    0
                  ],
                  "pointers": {
                    "ROOT": 0
                  }
                },
                {
                  "codeLine": 9,
                  "description": "Attach left child TreeNode(2).",
                  "state": {
                    "type": "tree",
                    "tree": [
                      1,
                      2
                    ]
                  },
                  "highlights": [
                    1
                  ],
                  "pointers": {
                    "LEFT": 1
                  }
                },
                {
                  "codeLine": 10,
                  "description": "Attach right child TreeNode(3). Tree complete!",
                  "state": {
                    "type": "tree",
                    "tree": [
                      1,
                      2,
                      3
                    ]
                  },
                  "highlights": [
                    2
                  ],
                  "pointers": {
                    "RIGHT": 2
                  }
                }
              ]
            }
          ],
          "commonMistakes": "Confusing binary trees (at most 2 children per node) with general N-ary trees.",
          "relatedQuestionIds": [
            "tree-inorder-traversal",
            "tree-level-order"
          ]
        },
        {
          "id": "tree-inorder-traversal",
          "title": "Binary Tree Inorder Traversal",
          "difficulty": "Easy",
          "leetcode": {
            "number": 94,
            "url": "https://leetcode.com/problems/binary-tree-inorder-traversal/"
          },
          "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values (Left -> Root -> Right). In a BST, inorder produces strictly sorted ascending order.",
          "constraints": "Number of nodes in tree <= 100; -100 <= Node.val <= 100.",
          "examples": [
            {
              "input": "root = [1, null, 2, 3]",
              "output": "[1, 3, 2]",
              "why": "Left of 1 is null, then visit 1. Right of 1 is 2, whose left is 3. Result: [1, 3, 2]."
            }
          ],
          "approaches": [
            {
              "name": "Recursive DFS (Left -> Root -> Right)",
              "idea": "Recursively visit node.left, process node.val, and recursively visit node.right.",
              "timeComplexity": "O(N)",
              "spaceComplexity": "O(H) where H is tree height for the call stack",
              "code": {
                "python": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef inorderTraversal(root):\n    res = []\n    def dfs(node):\n        if not node: return\n        dfs(node.left)\n        res.append(node.val)\n        dfs(node.right)\n    dfs(root)\n    return res\n\n# Test\nroot = TreeNode(1, None, TreeNode(2, TreeNode(3), None))\nprint(inorderTraversal(root))",
                "java": "import java.util.*;\n\nclass Solution {\n    public List<Integer> inorderTraversal(TreeNode root) {\n        List<Integer> res = new ArrayList<>();\n        dfs(root, res);\n        return res;\n    }\n    private void dfs(TreeNode n, List<Integer> res) {\n        if (n == null) return;\n        dfs(n.left, res);\n        res.add(n.val);\n        dfs(n.right, res);\n    }\n}",
                "cpp": "#include <vector>\nusing namespace std;\n\nvoid dfs(TreeNode* n, vector<int>& res) {\n    if (!n) return;\n    dfs(n->left, res);\n    res.push_back(n->val);\n    dfs(n->right, res);\n}\nvector<int> inorderTraversal(TreeNode* root) {\n    vector<int> res;\n    dfs(root, res);\n    return res;\n}",
                "javascript": "function inorderTraversal(root) {\n  const res = [];\n  function dfs(node) {\n    if (!node) return;\n    dfs(node.left);\n    res.push(node.val);\n    dfs(node.right);\n  }\n  dfs(root);\n  return res;\n}\n\nconst root = { val: 1, left: null, right: { val: 2, left: { val: 3, left: null, right: null }, right: null } };\nconsole.log(JSON.stringify(inorderTraversal(root)));"
              },
              "lineExplanations": [
                {
                  "lines": [
                    8,
                    9
                  ],
                  "text": "Base case: if current node is null, return immediately."
                },
                {
                  "lines": [
                    10,
                    10
                  ],
                  "text": "Recursive step 1: Visit entire left subtree."
                },
                {
                  "lines": [
                    11,
                    11
                  ],
                  "text": "Process current node: append value to result list."
                },
                {
                  "lines": [
                    12,
                    12
                  ],
                  "text": "Recursive step 2: Visit entire right subtree."
                }
              ],
              "animationSteps": [
                {
                  "codeLine": 10,
                  "description": "At root 1: Left is null. Append 1 to result. res = [1].",
                  "state": {
                    "type": "tree",
                    "tree": [
                      1,
                      null,
                      2,
                      null,
                      null,
                      3
                    ]
                  },
                  "highlights": [
                    0
                  ],
                  "pointers": {
                    "CURR": 0
                  }
                },
                {
                  "codeLine": 10,
                  "description": "Move to right child 2, then left child 3. Append 3. res = [1, 3].",
                  "state": {
                    "type": "tree",
                    "tree": [
                      1,
                      null,
                      2,
                      null,
                      null,
                      3
                    ]
                  },
                  "highlights": [
                    5
                  ],
                  "pointers": {
                    "CURR": 5
                  }
                },
                {
                  "codeLine": 11,
                  "description": "Backtrack to 2. Append 2. Final Inorder: [1, 3, 2]!",
                  "state": {
                    "type": "tree",
                    "tree": [
                      1,
                      null,
                      2,
                      null,
                      null,
                      3
                    ]
                  },
                  "highlights": [
                    2
                  ],
                  "pointers": {
                    "CURR": 2
                  }
                }
              ]
            }
          ],
          "commonMistakes": "Confusing Inorder (Left, Root, Right) with Preorder (Root, Left, Right) or Postorder (Left, Right, Root).",
          "relatedQuestionIds": [
            "tree-level-order",
            "tree-validate-bst"
          ]
        },
        {
          "id": "tree-level-order",
          "title": "Binary Tree Level Order Traversal (BFS)",
          "difficulty": "Medium",
          "leetcode": {
            "number": 102,
            "url": "https://leetcode.com/problems/binary-tree-level-order-traversal/"
          },
          "description": "Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).",
          "constraints": "Number of nodes <= 2000; -1000 <= Node.val <= 1000.",
          "examples": [
            {
              "input": "root = [3,9,20,null,null,15,7]",
              "output": "[[3],[9,20],[15,7]]",
              "why": "Level 0: [3]. Level 1: [9, 20]. Level 2: [15, 7]."
            }
          ],
          "approaches": [
            {
              "name": "Queue BFS Level by Level",
              "idea": "Use a FIFO queue initialized with root. At each level, determine queue size, pop that many nodes to collect the current level, and enqueue their non-null children.",
              "timeComplexity": "O(N)",
              "spaceComplexity": "O(N) for the queue (max width of tree)",
              "code": {
                "python": "from collections import deque\n\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef levelOrder(root):\n    if not root: return []\n    res = []\n    q = deque([root])\n    while q:\n        level = []\n        for _ in range(len(q)):\n            node = q.popleft()\n            level.append(node.val)\n            if node.left: q.append(node.left)\n            if node.right: q.append(node.right)\n        res.append(level)\n    return res\n\n# Test\nroot = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))\nprint(levelOrder(root))",
                "java": "import java.util.*;\n\nclass Solution {\n    public List<List<Integer>> levelOrder(TreeNode root) {\n        List<List<Integer>> res = new ArrayList<>();\n        if (root == null) return res;\n        Queue<TreeNode> q = new LinkedList<>();\n        q.add(root);\n        while (!q.isEmpty()) {\n            int sz = q.size();\n            List<Integer> level = new ArrayList<>();\n            for (int i = 0; i < sz; i++) {\n                TreeNode n = q.poll();\n                level.add(n.val);\n                if (n.left != null) q.add(n.left);\n                if (n.right != null) q.add(n.right);\n            }\n            res.add(level);\n        }\n        return res;\n    }\n}",
                "cpp": "#include <vector>\n#include <queue>\nusing namespace std;\n\nvector<vector<int>> levelOrder(TreeNode* root) {\n    if (!root) return {};\n    vector<vector<int>> res;\n    queue<TreeNode*> q;\n    q.push(root);\n    while (!q.empty()) {\n        int sz = q.size();\n        vector<int> level;\n        for (int i = 0; i < sz; i++) {\n            TreeNode* n = q.front(); q.pop();\n            level.push_back(n->val);\n            if (n->left) q.push(n->left);\n            if (n->right) q.push(n->right);\n        }\n        res.push_back(level);\n    }\n    return res;\n}",
                "javascript": "function levelOrder(root) {\n  if (!root) return [];\n  const res = [];\n  const q = [root];\n  while (q.length) {\n    const sz = q.length;\n    const level = [];\n    for (let i = 0; i < sz; i++) {\n      const node = q.shift();\n      level.push(node.val);\n      if (node.left) q.push(node.left);\n      if (node.right) q.push(node.right);\n    }\n    res.push(level);\n  }\n  return res;\n}\n\nconst root = { val: 3, left: { val: 9 }, right: { val: 20, left: { val: 15 }, right: { val: 7 } } };\nconsole.log(JSON.stringify(levelOrder(root)));"
              },
              "lineExplanations": [
                {
                  "lines": [
                    10,
                    11
                  ],
                  "text": "Base check and initialize FIFO queue containing the root node."
                },
                {
                  "lines": [
                    13,
                    15
                  ],
                  "text": "Snapshot current queue length to process exactly one tree level at a time."
                },
                {
                  "lines": [
                    17,
                    18
                  ],
                  "text": "Enqueue non-null left and right child nodes for the next level."
                }
              ],
              "animationSteps": [
                {
                  "codeLine": 11,
                  "description": "Level 0: Pop root 3. Enqueue children 9 and 20. Level = [3].",
                  "state": {
                    "type": "tree",
                    "tree": [
                      3,
                      9,
                      20
                    ]
                  },
                  "highlights": [
                    0
                  ],
                  "pointers": {
                    "L0": 0
                  }
                },
                {
                  "codeLine": 14,
                  "description": "Level 1: Pop 9 and 20. Enqueue children 15 and 7. Level = [9, 20].",
                  "state": {
                    "type": "tree",
                    "tree": [
                      3,
                      9,
                      20,
                      null,
                      null,
                      15,
                      7
                    ]
                  },
                  "highlights": [
                    1,
                    2
                  ],
                  "pointers": {
                    "L1": 1
                  }
                },
                {
                  "codeLine": 14,
                  "description": "Level 2: Pop 15 and 7. Level = [15, 7]. Finished: [[3], [9, 20], [15, 7]].",
                  "state": {
                    "type": "tree",
                    "tree": [
                      3,
                      9,
                      20,
                      null,
                      null,
                      15,
                      7
                    ]
                  },
                  "highlights": [
                    5,
                    6
                  ],
                  "pointers": {
                    "L2": 5
                  }
                }
              ]
            }
          ],
          "commonMistakes": "Not caching queue length (len(q)) before inner loop, which causes child pushes to bleed into the current level.",
          "relatedQuestionIds": [
            "tree-max-depth",
            "tree-right-side-view"
          ]
        }
      ]
    },
    {
      "id": "trees-classics",
      "title": "Classic Binary Tree & BST Problems",
      "questions": [
        {
          "id": "tree-max-depth",
          "title": "Maximum Depth of Binary Tree",
          "difficulty": "Easy",
          "leetcode": {
            "number": 104,
            "url": "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
          },
          "description": "Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
          "constraints": "Number of nodes <= 10^4; -100 <= Node.val <= 100.",
          "examples": [
            {
              "input": "root = [3,9,20,null,null,15,7]",
              "output": "3",
              "why": "Path 3 -> 20 -> 15 (or 7) has 3 nodes."
            }
          ],
          "approaches": [
            {
              "name": "Recursive DFS Postorder",
              "idea": "Depth of a node = 1 + max(depth(node.left), depth(node.right)). Base case: null node has depth 0.",
              "timeComplexity": "O(N)",
              "spaceComplexity": "O(H) for call stack",
              "code": {
                "python": "def maxDepth(root):\n    if not root:\n        return 0\n    return 1 + max(maxDepth(root.left), maxDepth(root.right))\n\n# Test\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val, self.left, self.right = val, left, right\n\nroot = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))\nprint(maxDepth(root))",
                "java": "class Solution {\n    public int maxDepth(TreeNode root) {\n        if (root == null) return 0;\n        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n    }\n}",
                "cpp": "#include <algorithm>\nusing namespace std;\n\nint maxDepth(TreeNode* root) {\n    if (!root) return 0;\n    return 1 + max(maxDepth(root->left), maxDepth(root->right));\n}",
                "javascript": "function maxDepth(root) {\n  if (!root) return 0;\n  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n}\n\nconst root = { val: 3, left: { val: 9 }, right: { val: 20, left: { val: 15 }, right: { val: 7 } } };\nconsole.log(maxDepth(root));"
              },
              "lineExplanations": [
                {
                  "lines": [
                    2,
                    3
                  ],
                  "text": "Base case: empty tree has depth 0."
                },
                {
                  "lines": [
                    4,
                    4
                  ],
                  "text": "Postorder: depth of this node is 1 plus the larger depth of its two subtrees."
                }
              ],
              "animationSteps": [
                {
                  "codeLine": 2,
                  "description": "Leaf 9: Left=0, Right=0. Depth = 1.",
                  "state": {
                    "type": "tree",
                    "tree": [
                      3,
                      9,
                      20
                    ]
                  },
                  "highlights": [
                    1
                  ],
                  "pointers": {
                    "DEPTH=1": 1
                  }
                },
                {
                  "codeLine": 4,
                  "description": "Node 20: Children 15 & 7 have depth 1. Depth of 20 = 1 + 1 = 2.",
                  "state": {
                    "type": "tree",
                    "tree": [
                      3,
                      9,
                      20,
                      null,
                      null,
                      15,
                      7
                    ]
                  },
                  "highlights": [
                    2
                  ],
                  "pointers": {
                    "DEPTH=2": 2
                  }
                },
                {
                  "codeLine": 4,
                  "description": "Root 3: Left=1, Right=2. Max depth = 1 + 2 = 3!",
                  "state": {
                    "type": "tree",
                    "tree": [
                      3,
                      9,
                      20,
                      null,
                      null,
                      15,
                      7
                    ]
                  },
                  "highlights": [
                    0
                  ],
                  "pointers": {
                    "MAX_DEPTH=3": 0
                  }
                }
              ]
            }
          ],
          "commonMistakes": "Counting edges instead of nodes (LeetCode definition counts nodes on the longest path).",
          "relatedQuestionIds": [
            "tree-invert",
            "tree-diameter"
          ]
        },
        {
          "id": "tree-invert",
          "title": "Invert / Flip Binary Tree",
          "difficulty": "Easy",
          "leetcode": {
            "number": 226,
            "url": "https://leetcode.com/problems/invert-binary-tree/"
          },
          "description": "Given the root of a binary tree, invert the tree (swap left and right child subtrees recursively) and return its root.",
          "constraints": "Number of nodes <= 100; -100 <= Node.val <= 100.",
          "examples": [
            {
              "input": "root = [4,2,7,1,3,6,9]",
              "output": "[4, 7, 2]",
              "why": "Every left child is swapped with its corresponding right child."
            }
          ],
          "approaches": [
            {
              "name": "Recursive DFS Child Swap",
              "idea": "For every node, swap its left and right pointers, then recursively invert the left and right subtrees.",
              "timeComplexity": "O(N)",
              "spaceComplexity": "O(H) for call stack",
              "code": {
                "python": "def invertTree(root):\n    if not root:\n        return None\n    root.left, root.right = invertTree(root.right), invertTree(root.left)\n    return root\n\n# Test\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val, self.left, self.right = val, left, right\n\nroot = TreeNode(4, TreeNode(2), TreeNode(7))\ninvertTree(root)\nprint([root.val, root.left.val, root.right.val])",
                "java": "class Solution {\n    public TreeNode invertTree(TreeNode root) {\n        if (root == null) return null;\n        TreeNode tmp = root.left;\n        root.left = invertTree(root.right);\n        root.right = invertTree(tmp);\n        return root;\n    }\n}",
                "cpp": "TreeNode* invertTree(TreeNode* root) {\n    if (!root) return nullptr;\n    TreeNode* tmp = root->left;\n    root->left = invertTree(root->right);\n    root->right = invertTree(tmp);\n    return root;\n}",
                "javascript": "function invertTree(root) {\n  if (!root) return null;\n  const temp = root.left;\n  root.left = invertTree(root.right);\n  root.right = invertTree(temp);\n  return root;\n}\n\nconst root = { val: 4, left: { val: 2 }, right: { val: 7 } };\ninvertTree(root);\nconsole.log(JSON.stringify([root.val, root.left.val, root.right.val]));"
              },
              "lineExplanations": [
                {
                  "lines": [
                    2,
                    3
                  ],
                  "text": "Base case: null node requires no inversion."
                },
                {
                  "lines": [
                    4,
                    4
                  ],
                  "text": "Swap left and right pointers with the recursively inverted subtrees."
                },
                {
                  "lines": [
                    5,
                    5
                  ],
                  "text": "Return root of the newly mirrored tree."
                }
              ],
              "animationSteps": [
                {
                  "codeLine": 1,
                  "description": "Original tree: Root 4 with Left 2 and Right 7.",
                  "state": {
                    "type": "tree",
                    "tree": [
                      4,
                      2,
                      7
                    ]
                  },
                  "highlights": [
                    0
                  ],
                  "pointers": {
                    "ROOT": 0
                  }
                },
                {
                  "codeLine": 4,
                  "description": "Swap: Left becomes 7 and Right becomes 2. Inverted!",
                  "state": {
                    "type": "tree",
                    "tree": [
                      4,
                      7,
                      2
                    ]
                  },
                  "highlights": [
                    1,
                    2
                  ],
                  "pointers": {
                    "SWAPPED": 0
                  }
                }
              ]
            }
          ],
          "commonMistakes": "Overwriting root.left before inverting root.right without saving a temporary reference.",
          "relatedQuestionIds": [
            "tree-max-depth",
            "tree-inorder-traversal"
          ]
        },
        {
          "id": "tree-validate-bst",
          "title": "Validate Binary Search Tree",
          "difficulty": "Medium",
          "leetcode": {
            "number": 98,
            "url": "https://leetcode.com/problems/validate-binary-search-tree/"
          },
          "description": "Given the root of a binary tree, determine if it is a valid binary search tree (BST). In a valid BST: left subtree contains only keys < node.val; right subtree contains only keys > node.val.",
          "constraints": "Number of nodes <= 10^4; -2^31 <= Node.val <= 2^31 - 1.",
          "examples": [
            {
              "input": "root = [2, 1, 3]",
              "output": "true",
              "why": "1 < 2 < 3 satisfies all BST rules."
            },
            {
              "input": "root = [5, 1, 4, null, null, 3, 6]",
              "output": "false",
              "why": "Root is 5, but its right child 4 is smaller than 5."
            }
          ],
          "approaches": [
            {
              "name": "Recursive Range Bounds (Min, Max)",
              "idea": "Every node must satisfy low < node.val < high. Root starts with (-inf, +inf). When going left, high = node.val. When going right, low = node.val.",
              "timeComplexity": "O(N)",
              "spaceComplexity": "O(H) for call stack",
              "code": {
                "python": "def isValidBST(root):\n    def validate(node, low, high):\n        if not node:\n            return True\n        if not (low < node.val < high):\n            return False\n        return validate(node.left, low, node.val) and validate(node.right, node.val, high)\n    return validate(root, float('-inf'), float('inf'))\n\n# Test\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val, self.left, self.right = val, left, right\n\nprint(isValidBST(TreeNode(2, TreeNode(1), TreeNode(3))))",
                "java": "class Solution {\n    public boolean isValidBST(TreeNode root) {\n        return validate(root, Long.MIN_VALUE, Long.MAX_VALUE);\n    }\n    private boolean validate(TreeNode n, long low, long high) {\n        if (n == null) return true;\n        if (n.val <= low || n.val >= high) return false;\n        return validate(n.left, low, n.val) && validate(n.right, n.val, high);\n    }\n}",
                "cpp": "#include <climits>\n\nbool validate(TreeNode* n, long long low, long long high) {\n    if (!n) return true;\n    if (n->val <= low || n->val >= high) return false;\n    return validate(n->left, low, n->val) && validate(n->right, n->val, high);\n}\nbool isValidBST(TreeNode* root) {\n    return validate(root, LLONG_MIN, LLONG_MAX);\n}",
                "javascript": "function isValidBST(root) {\n  function validate(node, low, high) {\n    if (!node) return true;\n    if (node.val <= low || node.val >= high) return false;\n    return validate(node.left, low, node.val) && validate(node.right, node.val, high);\n  }\n  return validate(root, -Infinity, Infinity);\n}\n\nconst root = { val: 2, left: { val: 1 }, right: { val: 3 } };\nconsole.log(isValidBST(root));"
              },
              "lineExplanations": [
                {
                  "lines": [
                    3,
                    4
                  ],
                  "text": "Base case: empty subtree is valid."
                },
                {
                  "lines": [
                    5,
                    6
                  ],
                  "text": "Verify current node strictly obeys both upper and lower inherited boundaries."
                },
                {
                  "lines": [
                    7,
                    7
                  ],
                  "text": "Left child inherits upper bound = node.val; right child inherits lower bound = node.val."
                }
              ],
              "animationSteps": [
                {
                  "codeLine": 5,
                  "description": "Root 2: range (-inf, +inf). Valid!",
                  "state": {
                    "type": "tree",
                    "tree": [
                      2,
                      1,
                      3
                    ]
                  },
                  "highlights": [
                    0
                  ],
                  "pointers": {
                    "BOUNDS: -inf..+inf": 0
                  }
                },
                {
                  "codeLine": 7,
                  "description": "Left 1: inherits bound (-inf, 2). 1 < 2. Valid!",
                  "state": {
                    "type": "tree",
                    "tree": [
                      2,
                      1,
                      3
                    ]
                  },
                  "highlights": [
                    1
                  ],
                  "pointers": {
                    "< 2": 1
                  }
                },
                {
                  "codeLine": 7,
                  "description": "Right 3: inherits bound (2, +inf). 3 > 2. Valid! Valid BST.",
                  "state": {
                    "type": "tree",
                    "tree": [
                      2,
                      1,
                      3
                    ]
                  },
                  "highlights": [
                    2
                  ],
                  "pointers": {
                    "> 2": 2
                  }
                }
              ]
            }
          ],
          "commonMistakes": "Only checking if node.left < node < node.right locally; all nodes in the left subtree must be less than the ancestor root.",
          "relatedQuestionIds": [
            "tree-lca-bst",
            "tree-inorder-traversal"
          ]
        },
        {
          "id": "tree-lca-bst",
          "title": "Lowest Common Ancestor of a BST",
          "difficulty": "Medium",
          "leetcode": {
            "number": 235,
            "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"
          },
          "description": "Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes p and q.",
          "constraints": "Number of nodes <= 10^5; all Node.val are unique.",
          "examples": [
            {
              "input": "root = [6,2,8,0,4,7,9], p = 2, q = 8",
              "output": "6",
              "why": "Since 2 < 6 and 8 > 6, node 6 is the split point and hence the LCA."
            }
          ],
          "approaches": [
            {
              "name": "BST Split Point Search",
              "idea": "Start at root. If both p and q are smaller than curr, LCA is in left subtree. If both are larger, LCA is in right subtree. If they split (one <= curr and one >= curr), curr IS the LCA!",
              "timeComplexity": "O(H)",
              "spaceComplexity": "O(1)",
              "code": {
                "python": "def lowestCommonAncestor(root, p_val, q_val):\n    curr = root\n    while curr:\n        if p_val < curr.val and q_val < curr.val:\n            curr = curr.left\n        elif p_val > curr.val and q_val > curr.val:\n            curr = curr.right\n        else:\n            return curr.val\n\n# Test\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val, self.left, self.right = val, left, right\n\nroot = TreeNode(6, TreeNode(2), TreeNode(8))\nprint(lowestCommonAncestor(root, 2, 8))",
                "java": "class Solution {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        TreeNode curr = root;\n        while (curr != null) {\n            if (p.val < curr.val && q.val < curr.val) curr = curr.left;\n            else if (p.val > curr.val && q.val > curr.val) curr = curr.right;\n            else return curr;\n        }\n        return null;\n    }\n}",
                "cpp": "TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {\n    TreeNode* curr = root;\n    while (curr) {\n        if (p->val < curr->val && q->val < curr->val) curr = curr->left;\n        else if (p->val > curr->val && q->val > curr->val) curr = curr->right;\n        else return curr;\n    }\n    return nullptr;\n}",
                "javascript": "function lowestCommonAncestor(root, pVal, qVal) {\n  let curr = root;\n  while (curr) {\n    if (pVal < curr.val && qVal < curr.val) curr = curr.left;\n    else if (pVal > curr.val && qVal > curr.val) curr = curr.right;\n    else return curr.val;\n  }\n  return null;\n}\n\nconst root = { val: 6, left: { val: 2 }, right: { val: 8 } };\nconsole.log(lowestCommonAncestor(root, 2, 8));"
              },
              "lineExplanations": [
                {
                  "lines": [
                    3,
                    5
                  ],
                  "text": "If both values are smaller than current node, LCA must be in left subtree."
                },
                {
                  "lines": [
                    6,
                    7
                  ],
                  "text": "If both values are larger than current node, LCA must be in right subtree."
                },
                {
                  "lines": [
                    8,
                    9
                  ],
                  "text": "Split point reached: one value is on the left, one on the right (or one is current node). Current node is the LCA."
                }
              ],
              "animationSteps": [
                {
                  "codeLine": 3,
                  "description": "At root 6: p=2 (< 6) and q=8 (> 6). Values split! 6 is LCA.",
                  "state": {
                    "type": "tree",
                    "tree": [
                      6,
                      2,
                      8
                    ]
                  },
                  "highlights": [
                    0
                  ],
                  "pointers": {
                    "LCA=6": 0
                  }
                }
              ]
            }
          ],
          "commonMistakes": "Treating this as a general binary tree with recursion instead of leveraging the BST property for an O(1) space iterative solution.",
          "relatedQuestionIds": [
            "tree-validate-bst",
            "tree-inorder-traversal"
          ]
        }
      ]
    }
  ]
};
