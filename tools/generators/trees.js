const { buildQuestionItem } = require('./helper');

function getTreesQuestions() {
  return {
    c: [
      buildQuestionItem({
        id: 'tree-node-create',
        code: `#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
};

struct TreeNode* createNode(int val) {
    struct TreeNode* node = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    node->val = val;
    node->left = NULL;
    node->right = NULL;
    return node;
}

int main() {
    struct TreeNode* root = createNode(1);
    root->left = createNode(2);
    root->right = createNode(3);
    printf("Root: %d, Left: %d, Right: %d\\n", root->val, root->left->val, root->right->val);
    free(root->left);
    free(root->right);
    free(root);
    return 0;
}`,
        explanations: {
          def: 'Declare the TreeNode struct and constructor function signature in C.',
          alloc: 'Allocate memory dynamically on the heap via malloc() for the new node.',
          init: 'Initialize node values and set child pointers explicitly to NULL.',
          pointer: 'Connect parent node pointer to child nodes using struct arrow notation.',
          mutate: 'Free dynamically allocated node memory using free() to prevent memory leaks.',
          exec: 'Print node values or execute diagnostic routine.',
          return: 'Return the initialized pointer or exit code from main.',
          comment: 'Standard C preprocessor directives including stdio and stdlib.'
        },
        notes: 'In C, binary tree nodes must be explicitly allocated on the heap with malloc() and freed recursively with free() to avoid memory leaks.'
      }),

      buildQuestionItem({
        id: 'tree-inorder-traversal',
        code: `#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
};

void inorder(struct TreeNode* root, int* res, int* size) {
    if (root == NULL) return;
    inorder(root->left, res, size);
    res[(*size)++] = root->val;
    inorder(root->right, res, size);
}

int* inorderTraversal(struct TreeNode* root, int* returnSize) {
    int* res = (int*)malloc(100 * sizeof(int));
    *returnSize = 0;
    inorder(root, res, returnSize);
    return res;
}`,
        explanations: {
          def: 'Define recursive inorder DFS helper function signature taking pointer arguments.',
          branch: 'Base case: check if current node pointer is NULL and return immediately.',
          exec: 'Recursively traverse left subtree before visiting parent node.',
          mutate: 'Store current node value into output buffer using pointer dereferencing and post-increment.',
          alloc: 'Allocate result array buffer on the heap using malloc().',
          init: 'Set returnSize counter pointer to 0.',
          return: 'Return heap buffer containing inorder traversal values.',
          comment: 'C header includes for standard input/output and heap allocation.'
        },
        notes: 'C does not have built-in dynamic arrays, so return size is passed as a pointer (int* returnSize) and callers must free() the returned buffer.'
      }),

      buildQuestionItem({
        id: 'tree-level-order',
        code: `#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
};

void levelOrder(struct TreeNode* root) {
    if (!root) return;
    struct TreeNode* queue[100];
    int front = 0, rear = 0;
    queue[rear++] = root;
    while (front < rear) {
        int levelSize = rear - front;
        for (int i = 0; i < levelSize; i++) {
            struct TreeNode* node = queue[front++];
            printf("%d ", node->val);
            if (node->left) queue[rear++] = node->left;
            if (node->right) queue[rear++] = node->right;
        }
        printf("\\n");
    }
}`,
        explanations: {
          def: 'Define levelOrder function using array-based FIFO queue.',
          branch: 'Verify root is not NULL and check child pointers before enqueueing.',
          init: 'Initialize queue array, front pointer, and rear pointer.',
          mutate: 'Enqueue node into queue[rear++] and advance rear index.',
          loop: 'Iterate while queue is not empty (front < rear) and process each tree level.',
          exec: 'Dequeue node from queue[front++] and print its value.',
          return: 'Return early if root pointer is NULL.',
          comment: 'Standard C library header inclusion.'
        },
        notes: 'In C, queue-based BFS typically utilizes a fixed ring buffer or dynamically resized array with front/rear indices.'
      }),

      buildQuestionItem({
        id: 'tree-max-depth',
        code: `#include <stdio.h>

struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
};

int maxDepth(struct TreeNode* root) {
    if (root == NULL) return 0;
    int leftDepth = maxDepth(root->left);
    int rightDepth = maxDepth(root->right);
    return (leftDepth > rightDepth ? leftDepth : rightDepth) + 1;
}`,
        explanations: {
          def: 'Define recursive maxDepth function returning integer height.',
          branch: 'Base case: return 0 if current node pointer is NULL.',
          init: 'Compute depth of left and right subtrees via recursive calls.',
          exec: 'Evaluate ternary conditional comparison between left and right subtree depths.',
          return: 'Return maximum child depth plus 1 for the current node.',
          comment: 'Standard header declarations in C.'
        },
        notes: 'Recursive call stack in C uses O(H) stack memory where H is tree height; balanced trees take O(log N) stack frames, skewed trees take O(N).'
      }),

      buildQuestionItem({
        id: 'tree-invert',
        code: `#include <stdio.h>

struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
};

struct TreeNode* invertTree(struct TreeNode* root) {
    if (root == NULL) return NULL;
    struct TreeNode* temp = root->left;
    root->left = root->right;
    root->right = temp;
    invertTree(root->left);
    invertTree(root->right);
    return root;
}`,
        explanations: {
          def: 'Define invertTree function returning modified root pointer.',
          branch: 'Return NULL if node is empty.',
          init: 'Cache left child pointer in temporary variable before swapping.',
          pointer: 'Swap left and right pointers directly on the struct.',
          exec: 'Recursively invert left and right subtrees.',
          return: 'Return inverted tree root pointer.',
          comment: 'C struct definitions and function headers.'
        },
        notes: 'Swapping pointer references is an O(1) pointer reassignment; no node values or heap allocations are moved.'
      }),

      buildQuestionItem({
        id: 'tree-validate-bst',
        code: `#include <stdio.h>
#include <stdbool.h>
#include <limits.h>

struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
};

bool validate(struct TreeNode* node, long minVal, long maxVal) {
    if (node == NULL) return true;
    if (node->val <= minVal || node->val >= maxVal) return false;
    return validate(node->left, minVal, node->val) && validate(node->right, node->val, maxVal);
}

bool isValidBST(struct TreeNode* root) {
    return validate(root, LONG_MIN, LONG_MAX);
}`,
        explanations: {
          def: 'Define helper function validating node value within (minVal, maxVal) bounds.',
          branch: 'Validate node value strictly respects BST lower and upper bounds.',
          return: 'Return true on NULL leaf, or combined boolean validation of left and right subtrees.',
          comment: 'Include stdbool.h for bool types and limits.h for LONG_MIN/LONG_MAX.'
        },
        notes: 'In C, using long avoids 32-bit integer overflow when comparing against INT_MIN or INT_MAX in node bounds.'
      }),

      buildQuestionItem({
        id: 'tree-lca-bst',
        code: `#include <stdio.h>

struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
};

struct TreeNode* lowestCommonAncestor(struct TreeNode* root, struct TreeNode* p, struct TreeNode* q) {
    struct TreeNode* curr = root;
    while (curr != NULL) {
        if (p->val < curr->val && q->val < curr->val) {
            curr = curr->left;
        } else if (p->val > curr->val && q->val > curr->val) {
            curr = curr->right;
        } else {
            return curr;
        }
    }
    return NULL;
}`,
        explanations: {
          def: 'Define lowestCommonAncestor function utilizing BST ordering property.',
          init: 'Initialize current navigation pointer to root node.',
          loop: 'Iterate while curr pointer is not NULL.',
          branch: 'Branch left if both targets are smaller, branch right if both are larger.',
          pointer: 'Advance curr pointer along the split path.',
          return: 'Return split point node as the lowest common ancestor.',
          comment: 'Structure and function prototypes in standard C.'
        },
        notes: 'Takes advantage of BST sorted property to locate LCA iteratively in O(H) time and O(1) auxiliary space without recursion.'
      })
    ],

    go: [
      buildQuestionItem({
        id: 'tree-node-create',
        code: `package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func NewTreeNode(val int) *TreeNode {
	return &TreeNode{Val: val, Left: nil, Right: nil}
}

func main() {
	root := NewTreeNode(1)
	root.Left = NewTreeNode(2)
	root.Right = NewTreeNode(3)
	fmt.Printf("Root: %d, Left: %d, Right: %d\\n", root.Val, root.Left.Val, root.Right.Val)
}`,
        explanations: {
          def: 'Define TreeNode struct with pointer fields and constructor function.',
          alloc: 'Construct struct literal &TreeNode{} on heap via Go escape analysis.',
          init: 'Assign Left and Right pointers using constructor.',
          pointer: 'Access and assign child pointers with automatic pointer dereferencing in Go.',
          exec: 'Format and print tree structure to standard output.',
          return: 'Return pointer reference to freshly allocated struct.',
          comment: 'Package main and fmt package imports.'
        },
        notes: 'Go compiler escapes heap-allocated struct pointers automatically, and Go garbage collector reclaims unreferenced nodes without manual free().'
      }),

      buildQuestionItem({
        id: 'tree-inorder-traversal',
        code: `package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func inorderTraversal(root *TreeNode) []int {
	res := []int{}
	var dfs func(node *TreeNode)
	dfs = func(node *TreeNode) {
		if node == nil {
			return
		}
		dfs(node.Left)
		res = append(res, node.Val)
		dfs(node.Right)
	}
	dfs(root)
	return res
}`,
        explanations: {
          def: 'Define inorderTraversal function and recursive closure dfs.',
          init: 'Initialize empty slice res using []int{}.',
          branch: 'Check if current node is nil and terminate branch.',
          exec: 'Traverse left child before reading current node.',
          mutate: 'Append node.Val to slice dynamically via built-in append().',
          return: 'Return completed integer slice.',
          comment: 'Go struct declaration and package header.'
        },
        notes: 'Go slices dynamically reallocate capacity when appended; closures capture outer slice reference by lexical scoping.'
      }),

      buildQuestionItem({
        id: 'tree-level-order',
        code: `package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func levelOrder(root *TreeNode) [][]int {
	if root == nil {
		return [][]int{}
	}
	res := [][]int{}
	queue := []*TreeNode{root}
	for len(queue) > 0 {
		levelSize := len(queue)
		level := []int{}
		for i := 0; i < levelSize; i++ {
			node := queue[0]
			queue = queue[1:]
			level = append(level, node.Val)
			if node.Left != nil {
				queue = append(queue, node.Left)
			}
			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}
		res = append(res, level)
	}
	return res
}`,
        explanations: {
          def: 'Define levelOrder BFS function taking *TreeNode and returning [][]int.',
          branch: 'Verify root is non-nil and check child nodes before enqueueing.',
          init: 'Initialize queue slice with root element.',
          loop: 'Iterate while len(queue) > 0 and loop across current level size.',
          mutate: 'Slice queue[1:] to dequeue and append() to add child nodes.',
          return: 'Return 2D slice of level order values.',
          comment: 'Package header and struct type definitions.'
        },
        notes: 'In Go, queue[1:] reslices in O(1) time without copying backing array; garbage collector cleans unreferenced elements.'
      }),

      buildQuestionItem({
        id: 'tree-max-depth',
        code: `package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func maxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}
	left := maxDepth(root.Left)
	right := maxDepth(root.Right)
	if left > right {
		return left + 1
	}
	return right + 1
}`,
        explanations: {
          def: 'Define maxDepth recursive function.',
          branch: 'Return 0 if root is nil, and compare left vs right subtree heights.',
          init: 'Recursively compute heights of left and right subtrees.',
          return: 'Return greater height plus 1.',
          comment: 'Go type definitions.'
        },
        notes: 'Go handles recursion efficiently with dynamic goroutine stack segments starting at 2KB and expanding as needed.'
      }),

      buildQuestionItem({
        id: 'tree-invert',
        code: `package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func invertTree(root *TreeNode) *TreeNode {
	if root == nil {
		return nil
	}
	root.Left, root.Right = root.Right, root.Left
	invertTree(root.Left)
	invertTree(root.Right)
	return root
}`,
        explanations: {
          def: 'Define invertTree function returning *TreeNode.',
          branch: 'Base case: return nil if current node is empty.',
          pointer: 'Perform simultaneous tuple swap: root.Left, root.Right = root.Right, root.Left.',
          exec: 'Recursively invert subtrees.',
          return: 'Return inverted root pointer.',
          comment: 'TreeNode struct declaration.'
        },
        notes: 'Go supports simultaneous multiple assignments (a, b = b, a) which cleanly swaps child pointers without a temporary variable.'
      }),

      buildQuestionItem({
        id: 'tree-validate-bst',
        code: `package main

import "math"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func isValidBST(root *TreeNode) bool {
	var validate func(node *TreeNode, minVal, maxVal int64) bool
	validate = func(node *TreeNode, minVal, maxVal int64) bool {
		if node == nil {
			return true
		}
		val := int64(node.Val)
		if val <= minVal || val >= maxVal {
			return false
		}
		return validate(node.Left, minVal, val) && validate(node.Right, val, maxVal)
	}
	return validate(root, math.MinInt64, math.MaxInt64)
}`,
        explanations: {
          def: 'Define isValidBST with nested validate closure using int64 bounds.',
          branch: 'Test if node value violates strict minVal or maxVal threshold.',
          init: 'Cast node.Val to int64 to avoid overflow.',
          return: 'Return boolean conjunction of left and right validations.',
          comment: 'Import math package for MinInt64 and MaxInt64 constants.'
        },
        notes: 'Using int64 bounds ensures correct validation even when node values equal math.MinInt32 or math.MaxInt32.'
      }),

      buildQuestionItem({
        id: 'tree-lca-bst',
        code: `package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
	curr := root
	for curr != nil {
		if p.Val < curr.Val && q.Val < curr.Val {
			curr = curr.Left
		} else if p.Val > curr.Val && q.Val > curr.Val {
			curr = curr.Right
		} else {
			return curr
		}
	}
	return nil
}`,
        explanations: {
          def: 'Define lowestCommonAncestor function traversing BST iteratively.',
          init: 'Initialize curr pointer to root.',
          loop: 'Loop while curr pointer is not nil.',
          branch: 'Compare target values to current node value to decide branch direction.',
          pointer: 'Update curr pointer to Left or Right child.',
          return: 'Return curr node once targets diverge on opposite sides.',
          comment: 'TreeNode struct definition.'
        },
        notes: 'Iterative approach in Go runs in O(H) time and uses zero heap allocations and O(1) stack space.'
      })
    ],

    rust: [
      buildQuestionItem({
        id: 'tree-node-create',
        code: `use std::rc::Rc;
use std::cell::RefCell;

#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
    pub fn new(val: i32) -> Self {
        TreeNode { val, left: None, right: None }
    }
}

fn main() {
    let root = Rc::new(RefCell::new(TreeNode::new(1)));
    let left = Rc::new(RefCell::new(TreeNode::new(2)));
    let right = Rc::new(RefCell::new(TreeNode::new(3)));
    root.borrow_mut().left = Some(left);
    root.borrow_mut().right = Some(right);
    println!("Root: {:?}", root.borrow().val);
}`,
        explanations: {
          def: 'Declare TreeNode struct using Option<Rc<RefCell<TreeNode>>> and impl constructor.',
          alloc: 'Allocate shared node on heap using Rc::new(RefCell::new(...)).',
          init: 'Construct leaf node using TreeNode::new(val).',
          pointer: 'Borrow mutable reference via .borrow_mut() to assign left/right child pointers.',
          exec: 'Print root value by borrowing inner value.',
          return: 'Construct and return Self instance.',
          comment: 'Import Rc and RefCell from std lib for shared mutable ownership.'
        },
        notes: 'In safe Rust, multiple ownership with mutation requires Rc<RefCell<TreeNode>> or Option<Box<TreeNode>> because the borrow checker prevents aliased mutable pointers.'
      }),

      buildQuestionItem({
        id: 'tree-inorder-traversal',
        code: `use std::rc::Rc;
use std::cell::RefCell;

pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

pub fn inorder_traversal(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
    let mut res = Vec::new();
    fn dfs(node: Option<Rc<RefCell<TreeNode>>>, res: &mut Vec<i32>) {
        if let Some(n) = node {
            let n_ref = n.borrow();
            dfs(n_ref.left.clone(), res);
            res.push(n_ref.val);
            dfs(n_ref.right.clone(), res);
        }
    }
    dfs(root, &mut res);
    res
}`,
        explanations: {
          def: 'Define inorder_traversal function taking Option<Rc<RefCell<TreeNode>>> and returning Vec<i32>.',
          init: 'Initialize mutable vector res with Vec::new().',
          branch: 'Pattern match on Option with if let Some(n) = node.',
          pointer: 'Borrow node immutably via n.borrow() to read children.',
          mutate: 'Push current node val onto results vector.',
          exec: 'Recursively traverse left and right subtrees with cloned smart pointers.',
          return: 'Return collected vector result.',
          comment: 'Standard library smart pointer imports.'
        },
        notes: 'Cloning an Rc increments the reference count; borrowing ensures runtime borrow-checker safety without data races.'
      }),

      buildQuestionItem({
        id: 'tree-level-order',
        code: `use std::rc::Rc;
use std::cell::RefCell;
use std::collections::VecDeque;

pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

pub fn level_order(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {
    let mut res = Vec::new();
    let Some(root_node) = root else { return res; };
    let mut queue = VecDeque::new();
    queue.push_back(root_node);

    while !queue.is_empty() {
        let level_size = queue.len();
        let mut level = Vec::with_capacity(level_size);
        for _ in 0..level_size {
            let node = queue.pop_front().unwrap();
            let n_borrow = node.borrow();
            level.push(n_borrow.val);
            if let Some(left) = &n_borrow.left { queue.push_back(left.clone()); }
            if let Some(right) = &n_borrow.right { queue.push_back(right.clone()); }
        }
        res.push(level);
    }
    res
}`,
        explanations: {
          def: 'Define level_order BFS using VecDeque ring buffer.',
          branch: 'Guard clause using let-else syntax to return early if root is None.',
          init: 'Instantiate queue with VecDeque::new() and push root.',
          loop: 'Loop while queue is not empty and iterate over level_size.',
          mutate: 'Pop front node, append value to level vector, and push children to queue.',
          alloc: 'Allocate level vector with exact capacity using Vec::with_capacity().',
          return: 'Return accumulated 2D vector.',
          comment: 'Import VecDeque from std::collections for double-ended queue.'
        },
        notes: 'VecDeque provides O(1) amortized push_back and pop_front, avoiding expensive vector memory shifts.'
      }),

      buildQuestionItem({
        id: 'tree-max-depth',
        code: `use std::rc::Rc;
use std::cell::RefCell;

pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

pub fn max_depth(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
    match root {
        None => 0,
        Some(node) => {
            let n = node.borrow();
            let left = max_depth(n.left.clone());
            let right = max_depth(n.right.clone());
            1 + std::cmp::max(left, right)
        }
    }
}`,
        explanations: {
          def: 'Define max_depth returning i32 depth value.',
          branch: 'Exhaustive pattern matching via match root against None and Some(node).',
          pointer: 'Borrow node immutably to access child fields.',
          init: 'Recursively evaluate max depth of left and right subtrees.',
          return: 'Return 1 plus maximum depth computed using std::cmp::max.',
          comment: 'Type declarations for TreeNode.'
        },
        notes: 'Rust compiler guarantees exhaustive pattern matching at compile time; no null pointer exceptions are possible.'
      }),

      buildQuestionItem({
        id: 'tree-invert',
        code: `use std::rc::Rc;
use std::cell::RefCell;

pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

pub fn invert_tree(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
    if let Some(ref node) = root {
        let mut n = node.borrow_mut();
        let left = n.left.take();
        let right = n.right.take();
        n.left = invert_tree(right);
        n.right = invert_tree(left);
    }
    root
}`,
        explanations: {
          def: 'Define invert_tree function returning Option<Rc<RefCell<TreeNode>>>.',
          branch: 'Pattern match on root using if let Some(ref node).',
          pointer: 'Acquire mutable borrow with borrow_mut() to modify child options.',
          mutate: 'Use Option::take() to take ownership of children leaving None behind.',
          exec: 'Recursively invert swapped children and assign to opposite fields.',
          return: 'Return original root Option.',
          comment: 'Standard smart pointer type imports.'
        },
        notes: 'Option::take() extracts the value out of the Option, leaving None in its place without violating Rust ownership rules.'
      }),

      buildQuestionItem({
        id: 'tree-validate-bst',
        code: `use std::rc::Rc;
use std::cell::RefCell;

pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

pub fn is_valid_bst(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
    fn validate(node: Option<Rc<RefCell<TreeNode>>>, min_val: Option<i64>, max_val: Option<i64>) -> bool {
        if let Some(n) = node {
            let n_borrow = n.borrow();
            let val = n_borrow.val as i64;
            if let Some(min) = min_val { if val <= min { return false; } }
            if let Some(max) = max_val { if val >= max { return false; } }
            validate(n_borrow.left.clone(), min_val, Some(val)) &&
            validate(n_borrow.right.clone(), Some(val), max_val)
        } else {
            true
        }
    }
    validate(root, None, None)
}`,
        explanations: {
          def: 'Define is_valid_bst with nested validate helper using Option<i64> bounds.',
          branch: 'Check bounds against Some(min) and Some(max) and return false on violation.',
          init: 'Cast node value to i64 to prevent integer overflow.',
          pointer: 'Borrow node immutably to access values and children.',
          return: 'Return true when reaching None leaf, or combine subtree results.',
          comment: 'Type declarations and smart pointer handling.'
        },
        notes: 'Using Option<i64> for bounds cleanly represents unbounded roots without needing arbitrary sentinel values like i64::MIN or i64::MAX.'
      }),

      buildQuestionItem({
        id: 'tree-lca-bst',
        code: `use std::rc::Rc;
use std::cell::RefCell;

pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

pub fn lowest_common_ancestor(
    root: Option<Rc<RefCell<TreeNode>>>,
    p: Option<Rc<RefCell<TreeNode>>>,
    q: Option<Rc<RefCell<TreeNode>>>
) -> Option<Rc<RefCell<TreeNode>>> {
    let p_val = p.as_ref().unwrap().borrow().val;
    let q_val = q.as_ref().unwrap().borrow().val;
    let mut curr = root;

    while let Some(node) = curr {
        let val = node.borrow().val;
        if p_val < val && q_val < val {
            let next = node.borrow().left.clone();
            curr = next;
        } else if p_val > val && q_val > val {
            let next = node.borrow().right.clone();
            curr = next;
        } else {
            return Some(node);
        }
    }
    None
}`,
        explanations: {
          def: 'Define lowest_common_ancestor accepting smart pointer options.',
          init: 'Extract target values p_val and q_val and initialize curr.',
          loop: 'Traverse down the tree using while let Some(node) = curr.',
          branch: 'Compare target values to current node value to decide traversal path.',
          pointer: 'Clone child Option<Rc<RefCell<TreeNode>>> to advance traversal pointer.',
          return: 'Return Some(node) when targets diverge on opposite subtrees.',
          comment: 'TreeNode struct definition.'
        },
        notes: 'Iterative BST LCA traversal avoids recursion and clone only creates a shallow pointer increment without copying node heap memory.'
      })
    ]
  };
}

module.exports = {
  getTreesQuestions
};
