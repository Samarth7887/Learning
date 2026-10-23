/**
 * SynapseCS Language-Specific Implementation: RUST - trees
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['rust'] = window.DSA_LANG_CODE['rust'] || {};
  window.DSA_LANG_CODE['rust']['trees'] = [
  {
    "id": "tree-node-create",
    "code": [
      {
        "text": "use std::rc::Rc;",
        "code": "use std::rc::Rc;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "use std::cell::RefCell;",
        "code": "use std::cell::RefCell;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "#[derive(Debug, PartialEq, Eq)]",
        "code": "#[derive(Debug, PartialEq, Eq)]",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "pub struct TreeNode {",
        "code": "pub struct TreeNode {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "    pub val: i32,",
        "code": "    pub val: i32,",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    pub left: Option<Rc<RefCell<TreeNode>>>,",
        "code": "    pub left: Option<Rc<RefCell<TreeNode>>>,",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    pub right: Option<Rc<RefCell<TreeNode>>>,",
        "code": "    pub right: Option<Rc<RefCell<TreeNode>>>,",
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
        "text": "impl TreeNode {",
        "code": "impl TreeNode {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "    pub fn new(val: i32) -> Self {",
        "code": "    pub fn new(val: i32) -> Self {",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "        TreeNode { val, left: None, right: None }",
        "code": "        TreeNode { val, left: None, right: None }",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    }",
        "code": "    }",
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
        "text": "fn main() {",
        "code": "fn main() {",
        "tag": "def",
        "lineNum": 17
      },
      {
        "text": "    let root = Rc::new(RefCell::new(TreeNode::new(1)));",
        "code": "    let root = Rc::new(RefCell::new(TreeNode::new(1)));",
        "tag": "alloc",
        "lineNum": 18
      },
      {
        "text": "    let left = Rc::new(RefCell::new(TreeNode::new(2)));",
        "code": "    let left = Rc::new(RefCell::new(TreeNode::new(2)));",
        "tag": "alloc",
        "lineNum": 19
      },
      {
        "text": "    let right = Rc::new(RefCell::new(TreeNode::new(3)));",
        "code": "    let right = Rc::new(RefCell::new(TreeNode::new(3)));",
        "tag": "alloc",
        "lineNum": 20
      },
      {
        "text": "    root.borrow_mut().left = Some(left);",
        "code": "    root.borrow_mut().left = Some(left);",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "    root.borrow_mut().right = Some(right);",
        "code": "    root.borrow_mut().right = Some(right);",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "    println!(\"Root: {:?}\", root.borrow().val);",
        "code": "    println!(\"Root: {:?}\", root.borrow().val);",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 24
      }
    ],
    "rawCode": "use std::rc::Rc;\nuse std::cell::RefCell;\n\n#[derive(Debug, PartialEq, Eq)]\npub struct TreeNode {\n    pub val: i32,\n    pub left: Option<Rc<RefCell<TreeNode>>>,\n    pub right: Option<Rc<RefCell<TreeNode>>>,\n}\n\nimpl TreeNode {\n    pub fn new(val: i32) -> Self {\n        TreeNode { val, left: None, right: None }\n    }\n}\n\nfn main() {\n    let root = Rc::new(RefCell::new(TreeNode::new(1)));\n    let left = Rc::new(RefCell::new(TreeNode::new(2)));\n    let right = Rc::new(RefCell::new(TreeNode::new(3)));\n    root.borrow_mut().left = Some(left);\n    root.borrow_mut().right = Some(right);\n    println!(\"Root: {:?}\", root.borrow().val);\n}",
    "explanations": {
      "def": "Declare TreeNode struct using Option<Rc<RefCell<TreeNode>>> and impl constructor.",
      "alloc": "Allocate shared node on heap using Rc::new(RefCell::new(...)).",
      "exec": "Print root value by borrowing inner value."
    },
    "notes": "In safe Rust, multiple ownership with mutation requires Rc<RefCell<TreeNode>> or Option<Box<TreeNode>> because the borrow checker prevents aliased mutable pointers."
  },
  {
    "id": "tree-inorder-traversal",
    "code": [
      {
        "text": "use std::rc::Rc;",
        "code": "use std::rc::Rc;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "use std::cell::RefCell;",
        "code": "use std::cell::RefCell;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "pub struct TreeNode {",
        "code": "pub struct TreeNode {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    pub val: i32,",
        "code": "    pub val: i32,",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    pub left: Option<Rc<RefCell<TreeNode>>>,",
        "code": "    pub left: Option<Rc<RefCell<TreeNode>>>,",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    pub right: Option<Rc<RefCell<TreeNode>>>,",
        "code": "    pub right: Option<Rc<RefCell<TreeNode>>>,",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "}",
        "code": "}",
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
        "text": "pub fn inorder_traversal(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {",
        "code": "pub fn inorder_traversal(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "    let mut res = Vec::new();",
        "code": "    let mut res = Vec::new();",
        "tag": "alloc",
        "lineNum": 11
      },
      {
        "text": "    fn dfs(node: Option<Rc<RefCell<TreeNode>>>, res: &mut Vec<i32>) {",
        "code": "    fn dfs(node: Option<Rc<RefCell<TreeNode>>>, res: &mut Vec<i32>) {",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "        if let Some(n) = node {",
        "code": "        if let Some(n) = node {",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "            let n_ref = n.borrow();",
        "code": "            let n_ref = n.borrow();",
        "tag": "init",
        "lineNum": 14
      },
      {
        "text": "            dfs(n_ref.left.clone(), res);",
        "code": "            dfs(n_ref.left.clone(), res);",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "            res.push(n_ref.val);",
        "code": "            res.push(n_ref.val);",
        "tag": "mutate",
        "lineNum": 16
      },
      {
        "text": "            dfs(n_ref.right.clone(), res);",
        "code": "            dfs(n_ref.right.clone(), res);",
        "tag": "exec",
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
        "text": "    dfs(root, &mut res);",
        "code": "    dfs(root, &mut res);",
        "tag": "pointer",
        "lineNum": 20
      },
      {
        "text": "    res",
        "code": "    res",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 22
      }
    ],
    "rawCode": "use std::rc::Rc;\nuse std::cell::RefCell;\n\npub struct TreeNode {\n    pub val: i32,\n    pub left: Option<Rc<RefCell<TreeNode>>>,\n    pub right: Option<Rc<RefCell<TreeNode>>>,\n}\n\npub fn inorder_traversal(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {\n    let mut res = Vec::new();\n    fn dfs(node: Option<Rc<RefCell<TreeNode>>>, res: &mut Vec<i32>) {\n        if let Some(n) = node {\n            let n_ref = n.borrow();\n            dfs(n_ref.left.clone(), res);\n            res.push(n_ref.val);\n            dfs(n_ref.right.clone(), res);\n        }\n    }\n    dfs(root, &mut res);\n    res\n}",
    "explanations": {
      "def": "Define inorder_traversal function taking Option<Rc<RefCell<TreeNode>>> and returning Vec<i32>.",
      "init": "Initialize mutable vector res with Vec::new().",
      "pointer": "Borrow node immutably via n.borrow() to read children.",
      "mutate": "Push current node val onto results vector.",
      "exec": "Recursively traverse left and right subtrees with cloned smart pointers.",
      "alloc": "Executes [alloc] operation in this algorithm step."
    },
    "notes": "Cloning an Rc increments the reference count; borrowing ensures runtime borrow-checker safety without data races."
  },
  {
    "id": "tree-level-order",
    "code": [
      {
        "text": "use std::rc::Rc;",
        "code": "use std::rc::Rc;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "use std::cell::RefCell;",
        "code": "use std::cell::RefCell;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "use std::collections::VecDeque;",
        "code": "use std::collections::VecDeque;",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "pub struct TreeNode {",
        "code": "pub struct TreeNode {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "    pub val: i32,",
        "code": "    pub val: i32,",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    pub left: Option<Rc<RefCell<TreeNode>>>,",
        "code": "    pub left: Option<Rc<RefCell<TreeNode>>>,",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    pub right: Option<Rc<RefCell<TreeNode>>>,",
        "code": "    pub right: Option<Rc<RefCell<TreeNode>>>,",
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
        "text": "pub fn level_order(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {",
        "code": "pub fn level_order(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "    let mut res = Vec::new();",
        "code": "    let mut res = Vec::new();",
        "tag": "alloc",
        "lineNum": 12
      },
      {
        "text": "    let Some(root_node) = root else { return res; };",
        "code": "    let Some(root_node) = root else { return res; };",
        "tag": "init",
        "lineNum": 13
      },
      {
        "text": "    let mut queue = VecDeque::new();",
        "code": "    let mut queue = VecDeque::new();",
        "tag": "alloc",
        "lineNum": 14
      },
      {
        "text": "    queue.push_back(root_node);",
        "code": "    queue.push_back(root_node);",
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
        "text": "    while !queue.is_empty() {",
        "code": "    while !queue.is_empty() {",
        "tag": "def",
        "lineNum": 17
      },
      {
        "text": "        let level_size = queue.len();",
        "code": "        let level_size = queue.len();",
        "tag": "init",
        "lineNum": 18
      },
      {
        "text": "        let mut level = Vec::with_capacity(level_size);",
        "code": "        let mut level = Vec::with_capacity(level_size);",
        "tag": "alloc",
        "lineNum": 19
      },
      {
        "text": "        for _ in 0..level_size {",
        "code": "        for _ in 0..level_size {",
        "tag": "loop",
        "lineNum": 20
      },
      {
        "text": "            let node = queue.pop_front().unwrap();",
        "code": "            let node = queue.pop_front().unwrap();",
        "tag": "init",
        "lineNum": 21
      },
      {
        "text": "            let n_borrow = node.borrow();",
        "code": "            let n_borrow = node.borrow();",
        "tag": "init",
        "lineNum": 22
      },
      {
        "text": "            level.push(n_borrow.val);",
        "code": "            level.push(n_borrow.val);",
        "tag": "mutate",
        "lineNum": 23
      },
      {
        "text": "            if let Some(left) = &n_borrow.left { queue.push_back(left.clone()); }",
        "code": "            if let Some(left) = &n_borrow.left { queue.push_back(left.clone()); }",
        "tag": "branch",
        "lineNum": 24
      },
      {
        "text": "            if let Some(right) = &n_borrow.right { queue.push_back(right.clone()); }",
        "code": "            if let Some(right) = &n_borrow.right { queue.push_back(right.clone()); }",
        "tag": "branch",
        "lineNum": 25
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "        res.push(level);",
        "code": "        res.push(level);",
        "tag": "mutate",
        "lineNum": 27
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 28
      },
      {
        "text": "    res",
        "code": "    res",
        "tag": "exec",
        "lineNum": 29
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 30
      }
    ],
    "rawCode": "use std::rc::Rc;\nuse std::cell::RefCell;\nuse std::collections::VecDeque;\n\npub struct TreeNode {\n    pub val: i32,\n    pub left: Option<Rc<RefCell<TreeNode>>>,\n    pub right: Option<Rc<RefCell<TreeNode>>>,\n}\n\npub fn level_order(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {\n    let mut res = Vec::new();\n    let Some(root_node) = root else { return res; };\n    let mut queue = VecDeque::new();\n    queue.push_back(root_node);\n\n    while !queue.is_empty() {\n        let level_size = queue.len();\n        let mut level = Vec::with_capacity(level_size);\n        for _ in 0..level_size {\n            let node = queue.pop_front().unwrap();\n            let n_borrow = node.borrow();\n            level.push(n_borrow.val);\n            if let Some(left) = &n_borrow.left { queue.push_back(left.clone()); }\n            if let Some(right) = &n_borrow.right { queue.push_back(right.clone()); }\n        }\n        res.push(level);\n    }\n    res\n}",
    "explanations": {
      "def": "Define level_order BFS using VecDeque ring buffer.",
      "branch": "Guard clause using let-else syntax to return early if root is None.",
      "init": "Instantiate queue with VecDeque::new() and push root.",
      "loop": "Loop while queue is not empty and iterate over level_size.",
      "mutate": "Pop front node, append value to level vector, and push children to queue.",
      "alloc": "Allocate level vector with exact capacity using Vec::with_capacity().",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "VecDeque provides O(1) amortized push_back and pop_front, avoiding expensive vector memory shifts."
  },
  {
    "id": "tree-max-depth",
    "code": [
      {
        "text": "use std::rc::Rc;",
        "code": "use std::rc::Rc;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "use std::cell::RefCell;",
        "code": "use std::cell::RefCell;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "pub struct TreeNode {",
        "code": "pub struct TreeNode {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    pub val: i32,",
        "code": "    pub val: i32,",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    pub left: Option<Rc<RefCell<TreeNode>>>,",
        "code": "    pub left: Option<Rc<RefCell<TreeNode>>>,",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    pub right: Option<Rc<RefCell<TreeNode>>>,",
        "code": "    pub right: Option<Rc<RefCell<TreeNode>>>,",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "}",
        "code": "}",
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
        "text": "pub fn max_depth(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {",
        "code": "pub fn max_depth(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "    match root {",
        "code": "    match root {",
        "tag": "branch",
        "lineNum": 11
      },
      {
        "text": "        None => 0,",
        "code": "        None => 0,",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "        Some(node) => {",
        "code": "        Some(node) => {",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "            let n = node.borrow();",
        "code": "            let n = node.borrow();",
        "tag": "init",
        "lineNum": 14
      },
      {
        "text": "            let left = max_depth(n.left.clone());",
        "code": "            let left = max_depth(n.left.clone());",
        "tag": "init",
        "lineNum": 15
      },
      {
        "text": "            let right = max_depth(n.right.clone());",
        "code": "            let right = max_depth(n.right.clone());",
        "tag": "init",
        "lineNum": 16
      },
      {
        "text": "            1 + std::cmp::max(left, right)",
        "code": "            1 + std::cmp::max(left, right)",
        "tag": "exec",
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
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 20
      }
    ],
    "rawCode": "use std::rc::Rc;\nuse std::cell::RefCell;\n\npub struct TreeNode {\n    pub val: i32,\n    pub left: Option<Rc<RefCell<TreeNode>>>,\n    pub right: Option<Rc<RefCell<TreeNode>>>,\n}\n\npub fn max_depth(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {\n    match root {\n        None => 0,\n        Some(node) => {\n            let n = node.borrow();\n            let left = max_depth(n.left.clone());\n            let right = max_depth(n.right.clone());\n            1 + std::cmp::max(left, right)\n        }\n    }\n}",
    "explanations": {
      "def": "Define max_depth returning i32 depth value.",
      "branch": "Exhaustive pattern matching via match root against None and Some(node).",
      "init": "Recursively evaluate max depth of left and right subtrees.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Rust compiler guarantees exhaustive pattern matching at compile time; no null pointer exceptions are possible."
  },
  {
    "id": "tree-invert",
    "code": [
      {
        "text": "use std::rc::Rc;",
        "code": "use std::rc::Rc;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "use std::cell::RefCell;",
        "code": "use std::cell::RefCell;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "pub struct TreeNode {",
        "code": "pub struct TreeNode {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    pub val: i32,",
        "code": "    pub val: i32,",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    pub left: Option<Rc<RefCell<TreeNode>>>,",
        "code": "    pub left: Option<Rc<RefCell<TreeNode>>>,",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    pub right: Option<Rc<RefCell<TreeNode>>>,",
        "code": "    pub right: Option<Rc<RefCell<TreeNode>>>,",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "}",
        "code": "}",
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
        "text": "pub fn invert_tree(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {",
        "code": "pub fn invert_tree(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "    if let Some(ref node) = root {",
        "code": "    if let Some(ref node) = root {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "        let mut n = node.borrow_mut();",
        "code": "        let mut n = node.borrow_mut();",
        "tag": "init",
        "lineNum": 12
      },
      {
        "text": "        let left = n.left.take();",
        "code": "        let left = n.left.take();",
        "tag": "init",
        "lineNum": 13
      },
      {
        "text": "        let right = n.right.take();",
        "code": "        let right = n.right.take();",
        "tag": "init",
        "lineNum": 14
      },
      {
        "text": "        n.left = invert_tree(right);",
        "code": "        n.left = invert_tree(right);",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "        n.right = invert_tree(left);",
        "code": "        n.right = invert_tree(left);",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "    root",
        "code": "    root",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 19
      }
    ],
    "rawCode": "use std::rc::Rc;\nuse std::cell::RefCell;\n\npub struct TreeNode {\n    pub val: i32,\n    pub left: Option<Rc<RefCell<TreeNode>>>,\n    pub right: Option<Rc<RefCell<TreeNode>>>,\n}\n\npub fn invert_tree(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {\n    if let Some(ref node) = root {\n        let mut n = node.borrow_mut();\n        let left = n.left.take();\n        let right = n.right.take();\n        n.left = invert_tree(right);\n        n.right = invert_tree(left);\n    }\n    root\n}",
    "explanations": {
      "def": "Define invert_tree function returning Option<Rc<RefCell<TreeNode>>>.",
      "exec": "Recursively invert swapped children and assign to opposite fields.",
      "init": "Executes [init] operation in this algorithm step."
    },
    "notes": "Option::take() extracts the value out of the Option, leaving None in its place without violating Rust ownership rules."
  },
  {
    "id": "tree-validate-bst",
    "code": [
      {
        "text": "use std::rc::Rc;",
        "code": "use std::rc::Rc;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "use std::cell::RefCell;",
        "code": "use std::cell::RefCell;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "pub struct TreeNode {",
        "code": "pub struct TreeNode {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    pub val: i32,",
        "code": "    pub val: i32,",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    pub left: Option<Rc<RefCell<TreeNode>>>,",
        "code": "    pub left: Option<Rc<RefCell<TreeNode>>>,",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    pub right: Option<Rc<RefCell<TreeNode>>>,",
        "code": "    pub right: Option<Rc<RefCell<TreeNode>>>,",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "}",
        "code": "}",
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
        "text": "pub fn is_valid_bst(root: Option<Rc<RefCell<TreeNode>>>) -> bool {",
        "code": "pub fn is_valid_bst(root: Option<Rc<RefCell<TreeNode>>>) -> bool {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "    fn validate(node: Option<Rc<RefCell<TreeNode>>>, min_val: Option<i64>, max_val: Option<i64>) -> bool {",
        "code": "    fn validate(node: Option<Rc<RefCell<TreeNode>>>, min_val: Option<i64>, max_val: Option<i64>) -> bool {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "        if let Some(n) = node {",
        "code": "        if let Some(n) = node {",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "            let n_borrow = n.borrow();",
        "code": "            let n_borrow = n.borrow();",
        "tag": "init",
        "lineNum": 13
      },
      {
        "text": "            let val = n_borrow.val as i64;",
        "code": "            let val = n_borrow.val as i64;",
        "tag": "init",
        "lineNum": 14
      },
      {
        "text": "            if let Some(min) = min_val { if val <= min { return false; } }",
        "code": "            if let Some(min) = min_val { if val <= min { return false; } }",
        "tag": "branch",
        "lineNum": 15
      },
      {
        "text": "            if let Some(max) = max_val { if val >= max { return false; } }",
        "code": "            if let Some(max) = max_val { if val >= max { return false; } }",
        "tag": "branch",
        "lineNum": 16
      },
      {
        "text": "            validate(n_borrow.left.clone(), min_val, Some(val)) &&",
        "code": "            validate(n_borrow.left.clone(), min_val, Some(val)) &&",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "            validate(n_borrow.right.clone(), Some(val), max_val)",
        "code": "            validate(n_borrow.right.clone(), Some(val), max_val)",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "        } else {",
        "code": "        } else {",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "            true",
        "code": "            true",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "    validate(root, None, None)",
        "code": "    validate(root, None, None)",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 24
      }
    ],
    "rawCode": "use std::rc::Rc;\nuse std::cell::RefCell;\n\npub struct TreeNode {\n    pub val: i32,\n    pub left: Option<Rc<RefCell<TreeNode>>>,\n    pub right: Option<Rc<RefCell<TreeNode>>>,\n}\n\npub fn is_valid_bst(root: Option<Rc<RefCell<TreeNode>>>) -> bool {\n    fn validate(node: Option<Rc<RefCell<TreeNode>>>, min_val: Option<i64>, max_val: Option<i64>) -> bool {\n        if let Some(n) = node {\n            let n_borrow = n.borrow();\n            let val = n_borrow.val as i64;\n            if let Some(min) = min_val { if val <= min { return false; } }\n            if let Some(max) = max_val { if val >= max { return false; } }\n            validate(n_borrow.left.clone(), min_val, Some(val)) &&\n            validate(n_borrow.right.clone(), Some(val), max_val)\n        } else {\n            true\n        }\n    }\n    validate(root, None, None)\n}",
    "explanations": {
      "def": "Define is_valid_bst with nested validate helper using Option<i64> bounds.",
      "branch": "Check bounds against Some(min) and Some(max) and return false on violation.",
      "init": "Cast node value to i64 to prevent integer overflow.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Using Option<i64> for bounds cleanly represents unbounded roots without needing arbitrary sentinel values like i64::MIN or i64::MAX."
  },
  {
    "id": "tree-lca-bst",
    "code": [
      {
        "text": "use std::rc::Rc;",
        "code": "use std::rc::Rc;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "use std::cell::RefCell;",
        "code": "use std::cell::RefCell;",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "pub struct TreeNode {",
        "code": "pub struct TreeNode {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    pub val: i32,",
        "code": "    pub val: i32,",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    pub left: Option<Rc<RefCell<TreeNode>>>,",
        "code": "    pub left: Option<Rc<RefCell<TreeNode>>>,",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    pub right: Option<Rc<RefCell<TreeNode>>>,",
        "code": "    pub right: Option<Rc<RefCell<TreeNode>>>,",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "}",
        "code": "}",
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
        "text": "pub fn lowest_common_ancestor(",
        "code": "pub fn lowest_common_ancestor(",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    root: Option<Rc<RefCell<TreeNode>>>,",
        "code": "    root: Option<Rc<RefCell<TreeNode>>>,",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    p: Option<Rc<RefCell<TreeNode>>>,",
        "code": "    p: Option<Rc<RefCell<TreeNode>>>,",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    q: Option<Rc<RefCell<TreeNode>>>",
        "code": "    q: Option<Rc<RefCell<TreeNode>>>",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": ") -> Option<Rc<RefCell<TreeNode>>> {",
        "code": ") -> Option<Rc<RefCell<TreeNode>>> {",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    let p_val = p.as_ref().unwrap().borrow().val;",
        "code": "    let p_val = p.as_ref().unwrap().borrow().val;",
        "tag": "init",
        "lineNum": 15
      },
      {
        "text": "    let q_val = q.as_ref().unwrap().borrow().val;",
        "code": "    let q_val = q.as_ref().unwrap().borrow().val;",
        "tag": "init",
        "lineNum": 16
      },
      {
        "text": "    let mut curr = root;",
        "code": "    let mut curr = root;",
        "tag": "init",
        "lineNum": 17
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "    while let Some(node) = curr {",
        "code": "    while let Some(node) = curr {",
        "tag": "def",
        "lineNum": 19
      },
      {
        "text": "        let val = node.borrow().val;",
        "code": "        let val = node.borrow().val;",
        "tag": "init",
        "lineNum": 20
      },
      {
        "text": "        if p_val < val && q_val < val {",
        "code": "        if p_val < val && q_val < val {",
        "tag": "branch",
        "lineNum": 21
      },
      {
        "text": "            let next = node.borrow().left.clone();",
        "code": "            let next = node.borrow().left.clone();",
        "tag": "init",
        "lineNum": 22
      },
      {
        "text": "            curr = next;",
        "code": "            curr = next;",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "        } else if p_val > val && q_val > val {",
        "code": "        } else if p_val > val && q_val > val {",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "            let next = node.borrow().right.clone();",
        "code": "            let next = node.borrow().right.clone();",
        "tag": "init",
        "lineNum": 25
      },
      {
        "text": "            curr = next;",
        "code": "            curr = next;",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "        } else {",
        "code": "        } else {",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "            return Some(node);",
        "code": "            return Some(node);",
        "tag": "return",
        "lineNum": 28
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 29
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 30
      },
      {
        "text": "    None",
        "code": "    None",
        "tag": "exec",
        "lineNum": 31
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 32
      }
    ],
    "rawCode": "use std::rc::Rc;\nuse std::cell::RefCell;\n\npub struct TreeNode {\n    pub val: i32,\n    pub left: Option<Rc<RefCell<TreeNode>>>,\n    pub right: Option<Rc<RefCell<TreeNode>>>,\n}\n\npub fn lowest_common_ancestor(\n    root: Option<Rc<RefCell<TreeNode>>>,\n    p: Option<Rc<RefCell<TreeNode>>>,\n    q: Option<Rc<RefCell<TreeNode>>>\n) -> Option<Rc<RefCell<TreeNode>>> {\n    let p_val = p.as_ref().unwrap().borrow().val;\n    let q_val = q.as_ref().unwrap().borrow().val;\n    let mut curr = root;\n\n    while let Some(node) = curr {\n        let val = node.borrow().val;\n        if p_val < val && q_val < val {\n            let next = node.borrow().left.clone();\n            curr = next;\n        } else if p_val > val && q_val > val {\n            let next = node.borrow().right.clone();\n            curr = next;\n        } else {\n            return Some(node);\n        }\n    }\n    None\n}",
    "explanations": {
      "def": "Define lowest_common_ancestor accepting smart pointer options.",
      "init": "Extract target values p_val and q_val and initialize curr.",
      "branch": "Compare target values to current node value to decide traversal path.",
      "return": "Return Some(node) when targets diverge on opposite subtrees.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Iterative BST LCA traversal avoids recursion and clone only creates a shallow pointer increment without copying node heap memory."
  }
];
})(typeof window !== 'undefined' ? window : global);
