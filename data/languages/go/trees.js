/**
 * SynapseCS Language-Specific Implementation: GO - trees
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['go'] = window.DSA_LANG_CODE['go'] || {};
  window.DSA_LANG_CODE['go']['trees'] = [
  {
    "id": "tree-node-create",
    "code": [
      {
        "text": "package main",
        "code": "package main",
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
        "text": "import \"fmt\"",
        "code": "import \"fmt\"",
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
        "text": "type TreeNode struct {",
        "code": "type TreeNode struct {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "\tVal   int",
        "code": "\tVal   int",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "\tLeft  *TreeNode",
        "code": "\tLeft  *TreeNode",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "\tRight *TreeNode",
        "code": "\tRight *TreeNode",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "}",
        "code": "}",
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
        "text": "func NewTreeNode(val int) *TreeNode {",
        "code": "func NewTreeNode(val int) *TreeNode {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "\treturn &TreeNode{Val: val, Left: nil, Right: nil}",
        "code": "\treturn &TreeNode{Val: val, Left: nil, Right: nil}",
        "tag": "return",
        "lineNum": 12
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "func main() {",
        "code": "func main() {",
        "tag": "def",
        "lineNum": 15
      },
      {
        "text": "\troot := NewTreeNode(1)",
        "code": "\troot := NewTreeNode(1)",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "\troot.Left = NewTreeNode(2)",
        "code": "\troot.Left = NewTreeNode(2)",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "\troot.Right = NewTreeNode(3)",
        "code": "\troot.Right = NewTreeNode(3)",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "\tfmt.Printf(\"Root: %d, Left: %d, Right: %d\\n\", root.Val, root.Left.Val, root.Right.Val)",
        "code": "\tfmt.Printf(\"Root: %d, Left: %d, Right: %d\\n\", root.Val, root.Left.Val, root.Right.Val)",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 20
      }
    ],
    "rawCode": "package main\n\nimport \"fmt\"\n\ntype TreeNode struct {\n\tVal   int\n\tLeft  *TreeNode\n\tRight *TreeNode\n}\n\nfunc NewTreeNode(val int) *TreeNode {\n\treturn &TreeNode{Val: val, Left: nil, Right: nil}\n}\n\nfunc main() {\n\troot := NewTreeNode(1)\n\troot.Left = NewTreeNode(2)\n\troot.Right = NewTreeNode(3)\n\tfmt.Printf(\"Root: %d, Left: %d, Right: %d\\n\", root.Val, root.Left.Val, root.Right.Val)\n}",
    "explanations": {
      "def": "Define TreeNode struct with pointer fields and constructor function.",
      "exec": "Format and print tree structure to standard output.",
      "return": "Return pointer reference to freshly allocated struct.",
      "comment": "Package main and fmt package imports."
    },
    "notes": "Go compiler escapes heap-allocated struct pointers automatically, and Go garbage collector reclaims unreferenced nodes without manual free()."
  },
  {
    "id": "tree-inorder-traversal",
    "code": [
      {
        "text": "package main",
        "code": "package main",
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
        "text": "type TreeNode struct {",
        "code": "type TreeNode struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tVal   int",
        "code": "\tVal   int",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tLeft  *TreeNode",
        "code": "\tLeft  *TreeNode",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "\tRight *TreeNode",
        "code": "\tRight *TreeNode",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "}",
        "code": "}",
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
        "text": "func inorderTraversal(root *TreeNode) []int {",
        "code": "func inorderTraversal(root *TreeNode) []int {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "\tres := []int{}",
        "code": "\tres := []int{}",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "\tvar dfs func(node *TreeNode)",
        "code": "\tvar dfs func(node *TreeNode)",
        "tag": "init",
        "lineNum": 11
      },
      {
        "text": "\tdfs = func(node *TreeNode) {",
        "code": "\tdfs = func(node *TreeNode) {",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "\t\tif node == nil {",
        "code": "\t\tif node == nil {",
        "tag": "branch",
        "lineNum": 13
      },
      {
        "text": "\t\t\treturn",
        "code": "\t\t\treturn",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\t\tdfs(node.Left)",
        "code": "\t\tdfs(node.Left)",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "\t\tres = append(res, node.Val)",
        "code": "\t\tres = append(res, node.Val)",
        "tag": "mutate",
        "lineNum": 17
      },
      {
        "text": "\t\tdfs(node.Right)",
        "code": "\t\tdfs(node.Right)",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "\tdfs(root)",
        "code": "\tdfs(root)",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "\treturn res",
        "code": "\treturn res",
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
    "rawCode": "package main\n\ntype TreeNode struct {\n\tVal   int\n\tLeft  *TreeNode\n\tRight *TreeNode\n}\n\nfunc inorderTraversal(root *TreeNode) []int {\n\tres := []int{}\n\tvar dfs func(node *TreeNode)\n\tdfs = func(node *TreeNode) {\n\t\tif node == nil {\n\t\t\treturn\n\t\t}\n\t\tdfs(node.Left)\n\t\tres = append(res, node.Val)\n\t\tdfs(node.Right)\n\t}\n\tdfs(root)\n\treturn res\n}",
    "explanations": {
      "def": "Define inorderTraversal function and recursive closure dfs.",
      "init": "Initialize empty slice res using []int{}.",
      "branch": "Check if current node is nil and terminate branch.",
      "exec": "Traverse left child before reading current node.",
      "mutate": "Append node.Val to slice dynamically via built-in append().",
      "return": "Return completed integer slice.",
      "comment": "Go struct declaration and package header."
    },
    "notes": "Go slices dynamically reallocate capacity when appended; closures capture outer slice reference by lexical scoping."
  },
  {
    "id": "tree-level-order",
    "code": [
      {
        "text": "package main",
        "code": "package main",
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
        "text": "type TreeNode struct {",
        "code": "type TreeNode struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tVal   int",
        "code": "\tVal   int",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tLeft  *TreeNode",
        "code": "\tLeft  *TreeNode",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "\tRight *TreeNode",
        "code": "\tRight *TreeNode",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "}",
        "code": "}",
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
        "text": "func levelOrder(root *TreeNode) [][]int {",
        "code": "func levelOrder(root *TreeNode) [][]int {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "\tif root == nil {",
        "code": "\tif root == nil {",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "\t\treturn [][]int{}",
        "code": "\t\treturn [][]int{}",
        "tag": "return",
        "lineNum": 11
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "\tres := [][]int{}",
        "code": "\tres := [][]int{}",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "\tqueue := []*TreeNode{root}",
        "code": "\tqueue := []*TreeNode{root}",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "\tfor len(queue) > 0 {",
        "code": "\tfor len(queue) > 0 {",
        "tag": "def",
        "lineNum": 15
      },
      {
        "text": "\t\tlevelSize := len(queue)",
        "code": "\t\tlevelSize := len(queue)",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "\t\tlevel := []int{}",
        "code": "\t\tlevel := []int{}",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "\t\tfor i := 0; i < levelSize; i++ {",
        "code": "\t\tfor i := 0; i < levelSize; i++ {",
        "tag": "loop",
        "lineNum": 18
      },
      {
        "text": "\t\t\tnode := queue[0]",
        "code": "\t\t\tnode := queue[0]",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "\t\t\tqueue = queue[1:]",
        "code": "\t\t\tqueue = queue[1:]",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "\t\t\tlevel = append(level, node.Val)",
        "code": "\t\t\tlevel = append(level, node.Val)",
        "tag": "mutate",
        "lineNum": 21
      },
      {
        "text": "\t\t\tif node.Left != nil {",
        "code": "\t\t\tif node.Left != nil {",
        "tag": "branch",
        "lineNum": 22
      },
      {
        "text": "\t\t\t\tqueue = append(queue, node.Left)",
        "code": "\t\t\t\tqueue = append(queue, node.Left)",
        "tag": "mutate",
        "lineNum": 23
      },
      {
        "text": "\t\t\t}",
        "code": "\t\t\t}",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "\t\t\tif node.Right != nil {",
        "code": "\t\t\tif node.Right != nil {",
        "tag": "branch",
        "lineNum": 25
      },
      {
        "text": "\t\t\t\tqueue = append(queue, node.Right)",
        "code": "\t\t\t\tqueue = append(queue, node.Right)",
        "tag": "mutate",
        "lineNum": 26
      },
      {
        "text": "\t\t\t}",
        "code": "\t\t\t}",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 28
      },
      {
        "text": "\t\tres = append(res, level)",
        "code": "\t\tres = append(res, level)",
        "tag": "mutate",
        "lineNum": 29
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 30
      },
      {
        "text": "\treturn res",
        "code": "\treturn res",
        "tag": "return",
        "lineNum": 31
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 32
      }
    ],
    "rawCode": "package main\n\ntype TreeNode struct {\n\tVal   int\n\tLeft  *TreeNode\n\tRight *TreeNode\n}\n\nfunc levelOrder(root *TreeNode) [][]int {\n\tif root == nil {\n\t\treturn [][]int{}\n\t}\n\tres := [][]int{}\n\tqueue := []*TreeNode{root}\n\tfor len(queue) > 0 {\n\t\tlevelSize := len(queue)\n\t\tlevel := []int{}\n\t\tfor i := 0; i < levelSize; i++ {\n\t\t\tnode := queue[0]\n\t\t\tqueue = queue[1:]\n\t\t\tlevel = append(level, node.Val)\n\t\t\tif node.Left != nil {\n\t\t\t\tqueue = append(queue, node.Left)\n\t\t\t}\n\t\t\tif node.Right != nil {\n\t\t\t\tqueue = append(queue, node.Right)\n\t\t\t}\n\t\t}\n\t\tres = append(res, level)\n\t}\n\treturn res\n}",
    "explanations": {
      "def": "Define levelOrder BFS function taking *TreeNode and returning [][]int.",
      "branch": "Verify root is non-nil and check child nodes before enqueueing.",
      "loop": "Iterate while len(queue) > 0 and loop across current level size.",
      "mutate": "Slice queue[1:] to dequeue and append() to add child nodes.",
      "return": "Return 2D slice of level order values.",
      "comment": "Package header and struct type definitions.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "In Go, queue[1:] reslices in O(1) time without copying backing array; garbage collector cleans unreferenced elements."
  },
  {
    "id": "tree-max-depth",
    "code": [
      {
        "text": "package main",
        "code": "package main",
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
        "text": "type TreeNode struct {",
        "code": "type TreeNode struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tVal   int",
        "code": "\tVal   int",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tLeft  *TreeNode",
        "code": "\tLeft  *TreeNode",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "\tRight *TreeNode",
        "code": "\tRight *TreeNode",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "}",
        "code": "}",
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
        "text": "func maxDepth(root *TreeNode) int {",
        "code": "func maxDepth(root *TreeNode) int {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "\tif root == nil {",
        "code": "\tif root == nil {",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "\t\treturn 0",
        "code": "\t\treturn 0",
        "tag": "return",
        "lineNum": 11
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "\tleft := maxDepth(root.Left)",
        "code": "\tleft := maxDepth(root.Left)",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "\tright := maxDepth(root.Right)",
        "code": "\tright := maxDepth(root.Right)",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "\tif left > right {",
        "code": "\tif left > right {",
        "tag": "branch",
        "lineNum": 15
      },
      {
        "text": "\t\treturn left + 1",
        "code": "\t\treturn left + 1",
        "tag": "return",
        "lineNum": 16
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "\treturn right + 1",
        "code": "\treturn right + 1",
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
    "rawCode": "package main\n\ntype TreeNode struct {\n\tVal   int\n\tLeft  *TreeNode\n\tRight *TreeNode\n}\n\nfunc maxDepth(root *TreeNode) int {\n\tif root == nil {\n\t\treturn 0\n\t}\n\tleft := maxDepth(root.Left)\n\tright := maxDepth(root.Right)\n\tif left > right {\n\t\treturn left + 1\n\t}\n\treturn right + 1\n}",
    "explanations": {
      "def": "Define maxDepth recursive function.",
      "branch": "Return 0 if root is nil, and compare left vs right subtree heights.",
      "return": "Return greater height plus 1.",
      "comment": "Go type definitions.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Go handles recursion efficiently with dynamic goroutine stack segments starting at 2KB and expanding as needed."
  },
  {
    "id": "tree-invert",
    "code": [
      {
        "text": "package main",
        "code": "package main",
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
        "text": "type TreeNode struct {",
        "code": "type TreeNode struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tVal   int",
        "code": "\tVal   int",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tLeft  *TreeNode",
        "code": "\tLeft  *TreeNode",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "\tRight *TreeNode",
        "code": "\tRight *TreeNode",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "}",
        "code": "}",
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
        "text": "func invertTree(root *TreeNode) *TreeNode {",
        "code": "func invertTree(root *TreeNode) *TreeNode {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "\tif root == nil {",
        "code": "\tif root == nil {",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "\t\treturn nil",
        "code": "\t\treturn nil",
        "tag": "return",
        "lineNum": 11
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "\troot.Left, root.Right = root.Right, root.Left",
        "code": "\troot.Left, root.Right = root.Right, root.Left",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "\tinvertTree(root.Left)",
        "code": "\tinvertTree(root.Left)",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "\tinvertTree(root.Right)",
        "code": "\tinvertTree(root.Right)",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\treturn root",
        "code": "\treturn root",
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
    "rawCode": "package main\n\ntype TreeNode struct {\n\tVal   int\n\tLeft  *TreeNode\n\tRight *TreeNode\n}\n\nfunc invertTree(root *TreeNode) *TreeNode {\n\tif root == nil {\n\t\treturn nil\n\t}\n\troot.Left, root.Right = root.Right, root.Left\n\tinvertTree(root.Left)\n\tinvertTree(root.Right)\n\treturn root\n}",
    "explanations": {
      "def": "Define invertTree function returning *TreeNode.",
      "branch": "Base case: return nil if current node is empty.",
      "exec": "Recursively invert subtrees.",
      "return": "Return inverted root pointer.",
      "comment": "TreeNode struct declaration."
    },
    "notes": "Go supports simultaneous multiple assignments (a, b = b, a) which cleanly swaps child pointers without a temporary variable."
  },
  {
    "id": "tree-validate-bst",
    "code": [
      {
        "text": "package main",
        "code": "package main",
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
        "text": "import \"math\"",
        "code": "import \"math\"",
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
        "text": "type TreeNode struct {",
        "code": "type TreeNode struct {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "\tVal   int",
        "code": "\tVal   int",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "\tLeft  *TreeNode",
        "code": "\tLeft  *TreeNode",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "\tRight *TreeNode",
        "code": "\tRight *TreeNode",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "}",
        "code": "}",
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
        "text": "func isValidBST(root *TreeNode) bool {",
        "code": "func isValidBST(root *TreeNode) bool {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "\tvar validate func(node *TreeNode, minVal, maxVal int64) bool",
        "code": "\tvar validate func(node *TreeNode, minVal, maxVal int64) bool",
        "tag": "init",
        "lineNum": 12
      },
      {
        "text": "\tvalidate = func(node *TreeNode, minVal, maxVal int64) bool {",
        "code": "\tvalidate = func(node *TreeNode, minVal, maxVal int64) bool {",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "\t\tif node == nil {",
        "code": "\t\tif node == nil {",
        "tag": "branch",
        "lineNum": 14
      },
      {
        "text": "\t\t\treturn true",
        "code": "\t\t\treturn true",
        "tag": "return",
        "lineNum": 15
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "\t\tval := int64(node.Val)",
        "code": "\t\tval := int64(node.Val)",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "\t\tif val <= minVal || val >= maxVal {",
        "code": "\t\tif val <= minVal || val >= maxVal {",
        "tag": "branch",
        "lineNum": 18
      },
      {
        "text": "\t\t\treturn false",
        "code": "\t\t\treturn false",
        "tag": "return",
        "lineNum": 19
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "\t\treturn validate(node.Left, minVal, val) && validate(node.Right, val, maxVal)",
        "code": "\t\treturn validate(node.Left, minVal, val) && validate(node.Right, val, maxVal)",
        "tag": "return",
        "lineNum": 21
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "\treturn validate(root, math.MinInt64, math.MaxInt64)",
        "code": "\treturn validate(root, math.MinInt64, math.MaxInt64)",
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
    "rawCode": "package main\n\nimport \"math\"\n\ntype TreeNode struct {\n\tVal   int\n\tLeft  *TreeNode\n\tRight *TreeNode\n}\n\nfunc isValidBST(root *TreeNode) bool {\n\tvar validate func(node *TreeNode, minVal, maxVal int64) bool\n\tvalidate = func(node *TreeNode, minVal, maxVal int64) bool {\n\t\tif node == nil {\n\t\t\treturn true\n\t\t}\n\t\tval := int64(node.Val)\n\t\tif val <= minVal || val >= maxVal {\n\t\t\treturn false\n\t\t}\n\t\treturn validate(node.Left, minVal, val) && validate(node.Right, val, maxVal)\n\t}\n\treturn validate(root, math.MinInt64, math.MaxInt64)\n}",
    "explanations": {
      "def": "Define isValidBST with nested validate closure using int64 bounds.",
      "branch": "Test if node value violates strict minVal or maxVal threshold.",
      "init": "Cast node.Val to int64 to avoid overflow.",
      "return": "Return boolean conjunction of left and right validations.",
      "comment": "Import math package for MinInt64 and MaxInt64 constants.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Using int64 bounds ensures correct validation even when node values equal math.MinInt32 or math.MaxInt32."
  },
  {
    "id": "tree-lca-bst",
    "code": [
      {
        "text": "package main",
        "code": "package main",
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
        "text": "type TreeNode struct {",
        "code": "type TreeNode struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tVal   int",
        "code": "\tVal   int",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tLeft  *TreeNode",
        "code": "\tLeft  *TreeNode",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "\tRight *TreeNode",
        "code": "\tRight *TreeNode",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "}",
        "code": "}",
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
        "text": "func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {",
        "code": "func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "\tcurr := root",
        "code": "\tcurr := root",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "\tfor curr != nil {",
        "code": "\tfor curr != nil {",
        "tag": "loop",
        "lineNum": 11
      },
      {
        "text": "\t\tif p.Val < curr.Val && q.Val < curr.Val {",
        "code": "\t\tif p.Val < curr.Val && q.Val < curr.Val {",
        "tag": "branch",
        "lineNum": 12
      },
      {
        "text": "\t\t\tcurr = curr.Left",
        "code": "\t\t\tcurr = curr.Left",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "\t\t} else if p.Val > curr.Val && q.Val > curr.Val {",
        "code": "\t\t} else if p.Val > curr.Val && q.Val > curr.Val {",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "\t\t\tcurr = curr.Right",
        "code": "\t\t\tcurr = curr.Right",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\t\t} else {",
        "code": "\t\t} else {",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "\t\t\treturn curr",
        "code": "\t\t\treturn curr",
        "tag": "return",
        "lineNum": 17
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "\treturn nil",
        "code": "\treturn nil",
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
    "rawCode": "package main\n\ntype TreeNode struct {\n\tVal   int\n\tLeft  *TreeNode\n\tRight *TreeNode\n}\n\nfunc lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {\n\tcurr := root\n\tfor curr != nil {\n\t\tif p.Val < curr.Val && q.Val < curr.Val {\n\t\t\tcurr = curr.Left\n\t\t} else if p.Val > curr.Val && q.Val > curr.Val {\n\t\t\tcurr = curr.Right\n\t\t} else {\n\t\t\treturn curr\n\t\t}\n\t}\n\treturn nil\n}",
    "explanations": {
      "def": "Define lowestCommonAncestor function traversing BST iteratively.",
      "loop": "Loop while curr pointer is not nil.",
      "branch": "Compare target values to current node value to decide branch direction.",
      "return": "Return curr node once targets diverge on opposite sides.",
      "comment": "TreeNode struct definition.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Iterative approach in Go runs in O(H) time and uses zero heap allocations and O(1) stack space."
  }
];
})(typeof window !== 'undefined' ? window : global);
