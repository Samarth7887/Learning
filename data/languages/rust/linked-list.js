/**
 * SynapseCS Language-Specific Implementation: RUST - linked-list
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['rust'] = window.DSA_LANG_CODE['rust'] || {};
  window.DSA_LANG_CODE['rust']['linked-list'] = [
  {
    "id": "ll-create",
    "code": [
      {
        "text": "#[derive(Debug, PartialEq, Eq)]",
        "code": "#[derive(Debug, PartialEq, Eq)]",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "pub struct ListNode {",
        "code": "pub struct ListNode {",
        "tag": "def",
        "lineNum": 2
      },
      {
        "text": "    pub val: i32,",
        "code": "    pub val: i32,",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    pub next: Option<Box<ListNode>>,",
        "code": "    pub next: Option<Box<ListNode>>,",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "impl ListNode {",
        "code": "impl ListNode {",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "    pub fn new(val: i32) -> Self {",
        "code": "    pub fn new(val: i32) -> Self {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "        ListNode { val, next: None }",
        "code": "        ListNode { val, next: None }",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "fn main() {",
        "code": "fn main() {",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "    let mut head = Box::new(ListNode::new(10));",
        "code": "    let mut head = Box::new(ListNode::new(10));",
        "tag": "alloc",
        "lineNum": 14
      },
      {
        "text": "    head.next = Some(Box::new(ListNode::new(20)));",
        "code": "    head.next = Some(Box::new(ListNode::new(20)));",
        "tag": "alloc",
        "lineNum": 15
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 16
      }
    ],
    "rawCode": "#[derive(Debug, PartialEq, Eq)]\npub struct ListNode {\n    pub val: i32,\n    pub next: Option<Box<ListNode>>,\n}\n\nimpl ListNode {\n    pub fn new(val: i32) -> Self {\n        ListNode { val, next: None }\n    }\n}\n\nfn main() {\n    let mut head = Box::new(ListNode::new(10));\n    head.next = Some(Box::new(ListNode::new(20)));\n}",
    "explanations": {
      "def": "Define ListNode struct with Option<Box<ListNode>> and impl constructor.",
      "alloc": "Allocate node on heap using Box::new(ListNode::new(val)).",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "In Rust, Option<Box<ListNode>> provides recursive heap-allocated single ownership with compile-time null safety."
  },
  {
    "id": "ll-insert-head",
    "code": [
      {
        "text": "pub struct ListNode {",
        "code": "pub struct ListNode {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    pub val: i32,",
        "code": "    pub val: i32,",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    pub next: Option<Box<ListNode>>,",
        "code": "    pub next: Option<Box<ListNode>>,",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "pub fn insert_head(head: Option<Box<ListNode>>, val: i32) -> Option<Box<ListNode>> {",
        "code": "pub fn insert_head(head: Option<Box<ListNode>>, val: i32) -> Option<Box<ListNode>> {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "    Some(Box::new(ListNode { val, next: head }))",
        "code": "    Some(Box::new(ListNode { val, next: head }))",
        "tag": "alloc",
        "lineNum": 7
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 8
      }
    ],
    "rawCode": "pub struct ListNode {\n    pub val: i32,\n    pub next: Option<Box<ListNode>>,\n}\n\npub fn insert_head(head: Option<Box<ListNode>>, val: i32) -> Option<Box<ListNode>> {\n    Some(Box::new(ListNode { val, next: head }))\n}",
    "explanations": {
      "def": "Define insert_head taking ownership of head Option and returning updated head.",
      "alloc": "Allocate new node on heap using Box::new.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Moving head transfers ownership cleanly into the new node next field in O(1) time without borrow checker conflicts."
  },
  {
    "id": "ll-insert-tail",
    "code": [
      {
        "text": "pub struct ListNode {",
        "code": "pub struct ListNode {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    pub val: i32,",
        "code": "    pub val: i32,",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    pub next: Option<Box<ListNode>>,",
        "code": "    pub next: Option<Box<ListNode>>,",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "pub fn insert_tail(mut head: Option<Box<ListNode>>, val: i32) -> Option<Box<ListNode>> {",
        "code": "pub fn insert_tail(mut head: Option<Box<ListNode>>, val: i32) -> Option<Box<ListNode>> {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "    let new_node = Some(Box::new(ListNode { val, next: None }));",
        "code": "    let new_node = Some(Box::new(ListNode { val, next: None }));",
        "tag": "alloc",
        "lineNum": 7
      },
      {
        "text": "    if head.is_none() {",
        "code": "    if head.is_none() {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "        return new_node;",
        "code": "        return new_node;",
        "tag": "return",
        "lineNum": 9
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    let mut curr = head.as_mut();",
        "code": "    let mut curr = head.as_mut();",
        "tag": "init",
        "lineNum": 11
      },
      {
        "text": "    while let Some(node) = curr {",
        "code": "    while let Some(node) = curr {",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "        if node.next.is_none() {",
        "code": "        if node.next.is_none() {",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "            node.next = new_node;",
        "code": "            node.next = new_node;",
        "tag": "pointer",
        "lineNum": 14
      },
      {
        "text": "            break;",
        "code": "            break;",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "        curr = node.next.as_mut();",
        "code": "        curr = node.next.as_mut();",
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
        "text": "    head",
        "code": "    head",
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
    "rawCode": "pub struct ListNode {\n    pub val: i32,\n    pub next: Option<Box<ListNode>>,\n}\n\npub fn insert_tail(mut head: Option<Box<ListNode>>, val: i32) -> Option<Box<ListNode>> {\n    let new_node = Some(Box::new(ListNode { val, next: None }));\n    if head.is_none() {\n        return new_node;\n    }\n    let mut curr = head.as_mut();\n    while let Some(node) = curr {\n        if node.next.is_none() {\n            node.next = new_node;\n            break;\n        }\n        curr = node.next.as_mut();\n    }\n    head\n}",
    "explanations": {
      "def": "Define insert_tail function.",
      "init": "Instantiate new_node and curr mutable borrow.",
      "pointer": "Borrow next field mutably via node.next.as_mut().",
      "return": "Return modified head.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "alloc": "Executes [alloc] operation in this algorithm step."
    },
    "notes": ".as_mut() converts Option<Box<T>> to Option<&mut Box<T>>, allowing traversal without consuming ownership."
  },
  {
    "id": "ll-insert-kth",
    "code": [
      {
        "text": "pub struct ListNode {",
        "code": "pub struct ListNode {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    pub val: i32,",
        "code": "    pub val: i32,",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    pub next: Option<Box<ListNode>>,",
        "code": "    pub next: Option<Box<ListNode>>,",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "pub fn insert_kth(mut head: Option<Box<ListNode>>, index: usize, val: i32) -> Option<Box<ListNode>> {",
        "code": "pub fn insert_kth(mut head: Option<Box<ListNode>>, index: usize, val: i32) -> Option<Box<ListNode>> {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "    if index == 0 {",
        "code": "    if index == 0 {",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "        return Some(Box::new(ListNode { val, next: head }));",
        "code": "        return Some(Box::new(ListNode { val, next: head }));",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    let mut curr = head.as_mut();",
        "code": "    let mut curr = head.as_mut();",
        "tag": "init",
        "lineNum": 10
      },
      {
        "text": "    for _ in 0..index - 1 {",
        "code": "    for _ in 0..index - 1 {",
        "tag": "loop",
        "lineNum": 11
      },
      {
        "text": "        if let Some(node) = curr {",
        "code": "        if let Some(node) = curr {",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "            curr = node.next.as_mut();",
        "code": "            curr = node.next.as_mut();",
        "tag": "pointer",
        "lineNum": 13
      },
      {
        "text": "        } else {",
        "code": "        } else {",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "            return head;",
        "code": "            return head;",
        "tag": "return",
        "lineNum": 15
      },
      {
        "text": "        }",
        "code": "        }",
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
        "text": "    if let Some(node) = curr {",
        "code": "    if let Some(node) = curr {",
        "tag": "def",
        "lineNum": 18
      },
      {
        "text": "        let old_next = node.next.take();",
        "code": "        let old_next = node.next.take();",
        "tag": "pointer",
        "lineNum": 19
      },
      {
        "text": "        node.next = Some(Box::new(ListNode { val, next: old_next }));",
        "code": "        node.next = Some(Box::new(ListNode { val, next: old_next }));",
        "tag": "alloc",
        "lineNum": 20
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "    head",
        "code": "    head",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 23
      }
    ],
    "rawCode": "pub struct ListNode {\n    pub val: i32,\n    pub next: Option<Box<ListNode>>,\n}\n\npub fn insert_kth(mut head: Option<Box<ListNode>>, index: usize, val: i32) -> Option<Box<ListNode>> {\n    if index == 0 {\n        return Some(Box::new(ListNode { val, next: head }));\n    }\n    let mut curr = head.as_mut();\n    for _ in 0..index - 1 {\n        if let Some(node) = curr {\n            curr = node.next.as_mut();\n        } else {\n            return head;\n        }\n    }\n    if let Some(node) = curr {\n        let old_next = node.next.take();\n        node.next = Some(Box::new(ListNode { val, next: old_next }));\n    }\n    head\n}",
    "explanations": {
      "def": "Define insert_kth taking owned head and index.",
      "branch": "Handle index 0 head insertion or out-of-bounds.",
      "loop": "Iterate index - 1 times with for loop.",
      "pointer": "Use .take() to extract old_next while leaving None temporarily.",
      "return": "Return modified head.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "init": "Executes [init] operation in this algorithm step.",
      "alloc": "Executes [alloc] operation in this algorithm step."
    },
    "notes": "node.next.take() extracts the value out of the Option, satisfying Rust borrow checker during link reassignments."
  },
  {
    "id": "ll-delete-head",
    "code": [
      {
        "text": "pub struct ListNode {",
        "code": "pub struct ListNode {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    pub val: i32,",
        "code": "    pub val: i32,",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    pub next: Option<Box<ListNode>>,",
        "code": "    pub next: Option<Box<ListNode>>,",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "pub fn delete_head(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {",
        "code": "pub fn delete_head(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "    head.and_then(|node| node.next)",
        "code": "    head.and_then(|node| node.next)",
        "tag": "pointer",
        "lineNum": 7
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 8
      }
    ],
    "rawCode": "pub struct ListNode {\n    pub val: i32,\n    pub next: Option<Box<ListNode>>,\n}\n\npub fn delete_head(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {\n    head.and_then(|node| node.next)\n}",
    "explanations": {
      "def": "Define delete_head taking ownership of head.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "pointer": "Executes [pointer] operation in this algorithm step."
    },
    "notes": "head.and_then(|node| node.next) consumes the old head node; Rust automatically deallocates the boxed head memory."
  },
  {
    "id": "ll-delete-tail",
    "code": [
      {
        "text": "pub struct ListNode {",
        "code": "pub struct ListNode {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    pub val: i32,",
        "code": "    pub val: i32,",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    pub next: Option<Box<ListNode>>,",
        "code": "    pub next: Option<Box<ListNode>>,",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "pub fn delete_tail(mut head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {",
        "code": "pub fn delete_tail(mut head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "    if head.is_none() || head.as_ref().unwrap().next.is_none() {",
        "code": "    if head.is_none() || head.as_ref().unwrap().next.is_none() {",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "        return None;",
        "code": "        return None;",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    let mut curr = head.as_mut().unwrap();",
        "code": "    let mut curr = head.as_mut().unwrap();",
        "tag": "init",
        "lineNum": 10
      },
      {
        "text": "    while curr.next.as_ref().unwrap().next.is_some() {",
        "code": "    while curr.next.as_ref().unwrap().next.is_some() {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "        curr = curr.next.as_mut().unwrap();",
        "code": "        curr = curr.next.as_mut().unwrap();",
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
        "text": "    curr.next = None;",
        "code": "    curr.next = None;",
        "tag": "pointer",
        "lineNum": 14
      },
      {
        "text": "    head",
        "code": "    head",
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
    "rawCode": "pub struct ListNode {\n    pub val: i32,\n    pub next: Option<Box<ListNode>>,\n}\n\npub fn delete_tail(mut head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {\n    if head.is_none() || head.as_ref().unwrap().next.is_none() {\n        return None;\n    }\n    let mut curr = head.as_mut().unwrap();\n    while curr.next.as_ref().unwrap().next.is_some() {\n        curr = curr.next.as_mut().unwrap();\n    }\n    curr.next = None;\n    head\n}",
    "explanations": {
      "def": "Define delete_tail function.",
      "pointer": "Advance mutable borrow curr = curr.next.as_mut().unwrap().",
      "return": "Return modified head.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "init": "Executes [init] operation in this algorithm step."
    },
    "notes": "Setting curr.next = None drops the tail Box<ListNode>, automatically triggering its memory deallocation."
  },
  {
    "id": "ll-delete-val",
    "code": [
      {
        "text": "pub struct ListNode {",
        "code": "pub struct ListNode {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    pub val: i32,",
        "code": "    pub val: i32,",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    pub next: Option<Box<ListNode>>,",
        "code": "    pub next: Option<Box<ListNode>>,",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "pub fn delete_val(mut head: Option<Box<ListNode>>, target: i32) -> Option<Box<ListNode>> {",
        "code": "pub fn delete_val(mut head: Option<Box<ListNode>>, target: i32) -> Option<Box<ListNode>> {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "    let mut curr = &mut head;",
        "code": "    let mut curr = &mut head;",
        "tag": "pointer",
        "lineNum": 7
      },
      {
        "text": "    while let Some(node) = curr {",
        "code": "    while let Some(node) = curr {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "        if node.val == target {",
        "code": "        if node.val == target {",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "            *curr = node.next.take();",
        "code": "            *curr = node.next.take();",
        "tag": "comment",
        "lineNum": 10
      },
      {
        "text": "            break;",
        "code": "            break;",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "        curr = &mut node.next;",
        "code": "        curr = &mut node.next;",
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
        "text": "    head",
        "code": "    head",
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
    "rawCode": "pub struct ListNode {\n    pub val: i32,\n    pub next: Option<Box<ListNode>>,\n}\n\npub fn delete_val(mut head: Option<Box<ListNode>>, target: i32) -> Option<Box<ListNode>> {\n    let mut curr = &mut head;\n    while let Some(node) = curr {\n        if node.val == target {\n            *curr = node.next.take();\n            break;\n        }\n        curr = &mut node.next;\n    }\n    head\n}",
    "explanations": {
      "def": "Define delete_val using pointer-to-pointer idiom.",
      "branch": "If node.val == target, replace current Option with node.next.take().",
      "pointer": "Advance curr = &mut node.next.",
      "comment": "Idiomatic &mut Option traversal.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Using &mut Option<Box<ListNode>> implements double-pointer traversal in safe Rust, seamlessly handling head and interior deletions."
  },
  {
    "id": "ll-search",
    "code": [
      {
        "text": "pub struct ListNode {",
        "code": "pub struct ListNode {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    pub val: i32,",
        "code": "    pub val: i32,",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    pub next: Option<Box<ListNode>>,",
        "code": "    pub next: Option<Box<ListNode>>,",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "pub fn search(head: &Option<Box<ListNode>>, target: i32) -> bool {",
        "code": "pub fn search(head: &Option<Box<ListNode>>, target: i32) -> bool {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "    let mut curr = head.as_ref();",
        "code": "    let mut curr = head.as_ref();",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "    while let Some(node) = curr {",
        "code": "    while let Some(node) = curr {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "        if node.val == target {",
        "code": "        if node.val == target {",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "            return true;",
        "code": "            return true;",
        "tag": "return",
        "lineNum": 10
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "        curr = node.next.as_ref();",
        "code": "        curr = node.next.as_ref();",
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
        "text": "    false",
        "code": "    false",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 15
      }
    ],
    "rawCode": "pub struct ListNode {\n    pub val: i32,\n    pub next: Option<Box<ListNode>>,\n}\n\npub fn search(head: &Option<Box<ListNode>>, target: i32) -> bool {\n    let mut curr = head.as_ref();\n    while let Some(node) = curr {\n        if node.val == target {\n            return true;\n        }\n        curr = node.next.as_ref();\n    }\n    false\n}",
    "explanations": {
      "def": "Define search borrowing &Option<Box<ListNode>>.",
      "init": "Borrow head via as_ref().",
      "branch": "If node.val == target, return true.",
      "pointer": "Advance borrow curr = node.next.as_ref().",
      "return": "Return false if target is not found.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "head.as_ref() borrows the list immutably without copying or moving node memory."
  },
  {
    "id": "ll-traverse",
    "code": [
      {
        "text": "pub struct ListNode {",
        "code": "pub struct ListNode {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    pub val: i32,",
        "code": "    pub val: i32,",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    pub next: Option<Box<ListNode>>,",
        "code": "    pub next: Option<Box<ListNode>>,",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "pub fn traverse(head: &Option<Box<ListNode>>) {",
        "code": "pub fn traverse(head: &Option<Box<ListNode>>) {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "    let mut curr = head.as_ref();",
        "code": "    let mut curr = head.as_ref();",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "    while let Some(node) = curr {",
        "code": "    while let Some(node) = curr {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "        print!(\"{} -> \", node.val);",
        "code": "        print!(\"{} -> \", node.val);",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "        curr = node.next.as_ref();",
        "code": "        curr = node.next.as_ref();",
        "tag": "pointer",
        "lineNum": 10
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    println!(\"None\");",
        "code": "    println!(\"None\");",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 13
      }
    ],
    "rawCode": "pub struct ListNode {\n    pub val: i32,\n    pub next: Option<Box<ListNode>>,\n}\n\npub fn traverse(head: &Option<Box<ListNode>>) {\n    let mut curr = head.as_ref();\n    while let Some(node) = curr {\n        print!(\"{} -> \", node.val);\n        curr = node.next.as_ref();\n    }\n    println!(\"None\");\n}",
    "explanations": {
      "def": "Define traverse printing list nodes.",
      "init": "Borrow reference curr = head.as_ref().",
      "exec": "Print node value followed by pointer arrow.",
      "pointer": "Advance borrow curr = node.next.as_ref()."
    },
    "notes": "Immutable traversal avoids any heap reallocation and guarantees no unintended side effects."
  },
  {
    "id": "ll-update",
    "code": [
      {
        "text": "pub struct ListNode {",
        "code": "pub struct ListNode {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    pub val: i32,",
        "code": "    pub val: i32,",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    pub next: Option<Box<ListNode>>,",
        "code": "    pub next: Option<Box<ListNode>>,",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "pub fn update_at(head: &mut Option<Box<ListNode>>, index: usize, new_val: i32) -> bool {",
        "code": "pub fn update_at(head: &mut Option<Box<ListNode>>, index: usize, new_val: i32) -> bool {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "    let mut curr = head.as_mut();",
        "code": "    let mut curr = head.as_mut();",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "    for _ in 0..index {",
        "code": "    for _ in 0..index {",
        "tag": "loop",
        "lineNum": 8
      },
      {
        "text": "        if let Some(node) = curr {",
        "code": "        if let Some(node) = curr {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "            curr = node.next.as_mut();",
        "code": "            curr = node.next.as_mut();",
        "tag": "pointer",
        "lineNum": 10
      },
      {
        "text": "        } else {",
        "code": "        } else {",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "            return false;",
        "code": "            return false;",
        "tag": "return",
        "lineNum": 12
      },
      {
        "text": "        }",
        "code": "        }",
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
        "text": "    if let Some(node) = curr {",
        "code": "    if let Some(node) = curr {",
        "tag": "def",
        "lineNum": 15
      },
      {
        "text": "        node.val = new_val;",
        "code": "        node.val = new_val;",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "        true",
        "code": "        true",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "    } else {",
        "code": "    } else {",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "        false",
        "code": "        false",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 21
      }
    ],
    "rawCode": "pub struct ListNode {\n    pub val: i32,\n    pub next: Option<Box<ListNode>>,\n}\n\npub fn update_at(head: &mut Option<Box<ListNode>>, index: usize, new_val: i32) -> bool {\n    let mut curr = head.as_mut();\n    for _ in 0..index {\n        if let Some(node) = curr {\n            curr = node.next.as_mut();\n        } else {\n            return false;\n        }\n    }\n    if let Some(node) = curr {\n        node.val = new_val;\n        true\n    } else {\n        false\n    }\n}",
    "explanations": {
      "def": "Define update_at taking mutable borrow &mut Option.",
      "init": "Borrow head mutably via as_mut().",
      "loop": "Advance curr through index steps.",
      "return": "Return boolean indicating success.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "pointer": "Executes [pointer] operation in this algorithm step."
    },
    "notes": "Rust allows in-place mutation of node fields while borrowing the struct mutably."
  },
  {
    "id": "ll-size",
    "code": [
      {
        "text": "pub struct ListNode {",
        "code": "pub struct ListNode {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    pub val: i32,",
        "code": "    pub val: i32,",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    pub next: Option<Box<ListNode>>,",
        "code": "    pub next: Option<Box<ListNode>>,",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "pub fn get_length(head: &Option<Box<ListNode>>) -> usize {",
        "code": "pub fn get_length(head: &Option<Box<ListNode>>) -> usize {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "    let mut count = 0;",
        "code": "    let mut count = 0;",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "    let mut curr = head.as_ref();",
        "code": "    let mut curr = head.as_ref();",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "    while let Some(node) = curr {",
        "code": "    while let Some(node) = curr {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "        count += 1;",
        "code": "        count += 1;",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        curr = node.next.as_ref();",
        "code": "        curr = node.next.as_ref();",
        "tag": "pointer",
        "lineNum": 11
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    count",
        "code": "    count",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 14
      }
    ],
    "rawCode": "pub struct ListNode {\n    pub val: i32,\n    pub next: Option<Box<ListNode>>,\n}\n\npub fn get_length(head: &Option<Box<ListNode>>) -> usize {\n    let mut count = 0;\n    let mut curr = head.as_ref();\n    while let Some(node) = curr {\n        count += 1;\n        curr = node.next.as_ref();\n    }\n    count\n}",
    "explanations": {
      "def": "Define get_length returning usize count.",
      "init": "Initialize count = 0 and borrow curr = head.as_ref().",
      "pointer": "Advance curr = node.next.as_ref().",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Traversing &Option<Box<ListNode>> to count elements takes O(N) time and zero memory allocation."
  },
  {
    "id": "ll-reverse",
    "code": [
      {
        "text": "pub struct ListNode {",
        "code": "pub struct ListNode {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    pub val: i32,",
        "code": "    pub val: i32,",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    pub next: Option<Box<ListNode>>,",
        "code": "    pub next: Option<Box<ListNode>>,",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "pub fn reverse_list(mut head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {",
        "code": "pub fn reverse_list(mut head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "    let mut prev = None;",
        "code": "    let mut prev = None;",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "    let mut curr = head;",
        "code": "    let mut curr = head;",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    while let Some(mut node) = curr {",
        "code": "    while let Some(mut node) = curr {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "        let next = node.next.take();",
        "code": "        let next = node.next.take();",
        "tag": "pointer",
        "lineNum": 11
      },
      {
        "text": "        node.next = prev;",
        "code": "        node.next = prev;",
        "tag": "pointer",
        "lineNum": 12
      },
      {
        "text": "        prev = Some(node);",
        "code": "        prev = Some(node);",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        curr = next;",
        "code": "        curr = next;",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    prev",
        "code": "    prev",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 17
      }
    ],
    "rawCode": "pub struct ListNode {\n    pub val: i32,\n    pub next: Option<Box<ListNode>>,\n}\n\npub fn reverse_list(mut head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {\n    let mut prev = None;\n    let mut curr = head;\n\n    while let Some(mut node) = curr {\n        let next = node.next.take();\n        node.next = prev;\n        prev = Some(node);\n        curr = next;\n    }\n    prev\n}",
    "explanations": {
      "def": "Define reverse_list transferring ownership.",
      "init": "Initialize prev = None and curr = head.",
      "pointer": "Extract next via node.next.take() and reassign node.next = prev.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "node.next.take() takes ownership of the next node without unsafe code or pointer copying."
  },
  {
    "id": "ll-middle",
    "code": [
      {
        "text": "pub struct ListNode {",
        "code": "pub struct ListNode {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    pub val: i32,",
        "code": "    pub val: i32,",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    pub next: Option<Box<ListNode>>,",
        "code": "    pub next: Option<Box<ListNode>>,",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "pub fn middle_node(head: &Option<Box<ListNode>>) -> &Option<Box<ListNode>> {",
        "code": "pub fn middle_node(head: &Option<Box<ListNode>>) -> &Option<Box<ListNode>> {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "    let mut slow = head;",
        "code": "    let mut slow = head;",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "    let mut fast = head;",
        "code": "    let mut fast = head;",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    while let Some(fast_node) = fast {",
        "code": "    while let Some(fast_node) = fast {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "        if let Some(next_fast) = &fast_node.next {",
        "code": "        if let Some(next_fast) = &fast_node.next {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "            slow = &slow.as_ref().unwrap().next;",
        "code": "            slow = &slow.as_ref().unwrap().next;",
        "tag": "pointer",
        "lineNum": 12
      },
      {
        "text": "            fast = &next_fast.next;",
        "code": "            fast = &next_fast.next;",
        "tag": "pointer",
        "lineNum": 13
      },
      {
        "text": "        } else {",
        "code": "        } else {",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "            break;",
        "code": "            break;",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "        }",
        "code": "        }",
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
        "text": "    slow",
        "code": "    slow",
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
    "rawCode": "pub struct ListNode {\n    pub val: i32,\n    pub next: Option<Box<ListNode>>,\n}\n\npub fn middle_node(head: &Option<Box<ListNode>>) -> &Option<Box<ListNode>> {\n    let mut slow = head;\n    let mut fast = head;\n\n    while let Some(fast_node) = fast {\n        if let Some(next_fast) = &fast_node.next {\n            slow = &slow.as_ref().unwrap().next;\n            fast = &next_fast.next;\n        } else {\n            break;\n        }\n    }\n    slow\n}",
    "explanations": {
      "def": "Define middle_node borrowing reference to list.",
      "init": "Initialize borrowed references slow = head and fast = head.",
      "pointer": "Advance slow by 1 step and fast by 2 steps.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Borrowing references (&Option) permits two concurrent immutable pointers without violating Rust aliasing rules."
  },
  {
    "id": "ll-cycle",
    "code": [
      {
        "text": "// Cycle detection in safe Rust typically uses node indices in a Vec or Rc<RefCell<Node>>",
        "code": "// Cycle detection in safe Rust typically uses node indices in a Vec or Rc<RefCell<Node>>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "pub fn has_cycle_indices(next_ptrs: &[Option<usize>]) -> bool {",
        "code": "pub fn has_cycle_indices(next_ptrs: &[Option<usize>]) -> bool {",
        "tag": "def",
        "lineNum": 2
      },
      {
        "text": "    let mut slow = 0;",
        "code": "    let mut slow = 0;",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    let mut fast = 0;",
        "code": "    let mut fast = 0;",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "    while let Some(f1) = next_ptrs[fast] {",
        "code": "    while let Some(f1) = next_ptrs[fast] {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "        if let Some(f2) = next_ptrs[f1] {",
        "code": "        if let Some(f2) = next_ptrs[f1] {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "            slow = next_ptrs[slow].unwrap();",
        "code": "            slow = next_ptrs[slow].unwrap();",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "            fast = f2;",
        "code": "            fast = f2;",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "            if slow == fast {",
        "code": "            if slow == fast {",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "                return true;",
        "code": "                return true;",
        "tag": "return",
        "lineNum": 10
      },
      {
        "text": "            }",
        "code": "            }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "        } else {",
        "code": "        } else {",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "            break;",
        "code": "            break;",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    false",
        "code": "    false",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 17
      }
    ],
    "rawCode": "// Cycle detection in safe Rust typically uses node indices in a Vec or Rc<RefCell<Node>>\npub fn has_cycle_indices(next_ptrs: &[Option<usize>]) -> bool {\n    let mut slow = 0;\n    let mut fast = 0;\n    while let Some(f1) = next_ptrs[fast] {\n        if let Some(f2) = next_ptrs[f1] {\n            slow = next_ptrs[slow].unwrap();\n            fast = f2;\n            if slow == fast {\n                return true;\n            }\n        } else {\n            break;\n        }\n    }\n    false\n}",
    "explanations": {
      "def": "Define has_cycle_indices modeling cyclical graphs with vector indices.",
      "init": "Initialize slow = 0 and fast = 0.",
      "branch": "If slow == fast index, cycle detected; return true.",
      "return": "Return false if fast reaches None end.",
      "comment": "Arena-allocated graph model in Rust.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Box<Node> cannot represent cyclical graphs in safe Rust because ownership cannot be cyclic; the idiomatic pattern uses indices into an arena Vec or Rc<RefCell<Node>>."
  },
  {
    "id": "ll-merge",
    "code": [
      {
        "text": "pub struct ListNode {",
        "code": "pub struct ListNode {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    pub val: i32,",
        "code": "    pub val: i32,",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    pub next: Option<Box<ListNode>>,",
        "code": "    pub next: Option<Box<ListNode>>,",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "pub fn merge_two_lists(",
        "code": "pub fn merge_two_lists(",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    mut list1: Option<Box<ListNode>>,",
        "code": "    mut list1: Option<Box<ListNode>>,",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    mut list2: Option<Box<ListNode>>",
        "code": "    mut list2: Option<Box<ListNode>>",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": ") -> Option<Box<ListNode>> {",
        "code": ") -> Option<Box<ListNode>> {",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    let mut dummy = ListNode { val: 0, next: None };",
        "code": "    let mut dummy = ListNode { val: 0, next: None };",
        "tag": "init",
        "lineNum": 10
      },
      {
        "text": "    let mut curr = &mut dummy;",
        "code": "    let mut curr = &mut dummy;",
        "tag": "pointer",
        "lineNum": 11
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    while list1.is_some() && list2.is_some() {",
        "code": "    while list1.is_some() && list2.is_some() {",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "        if list1.as_ref().unwrap().val <= list2.as_ref().unwrap().val {",
        "code": "        if list1.as_ref().unwrap().val <= list2.as_ref().unwrap().val {",
        "tag": "def",
        "lineNum": 14
      },
      {
        "text": "            let next = list1.as_mut().unwrap().next.take();",
        "code": "            let next = list1.as_mut().unwrap().next.take();",
        "tag": "pointer",
        "lineNum": 15
      },
      {
        "text": "            curr.next = list1;",
        "code": "            curr.next = list1;",
        "tag": "pointer",
        "lineNum": 16
      },
      {
        "text": "            list1 = next;",
        "code": "            list1 = next;",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "        } else {",
        "code": "        } else {",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "            let next = list2.as_mut().unwrap().next.take();",
        "code": "            let next = list2.as_mut().unwrap().next.take();",
        "tag": "pointer",
        "lineNum": 19
      },
      {
        "text": "            curr.next = list2;",
        "code": "            curr.next = list2;",
        "tag": "pointer",
        "lineNum": 20
      },
      {
        "text": "            list2 = next;",
        "code": "            list2 = next;",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "        curr = curr.next.as_mut().unwrap();",
        "code": "        curr = curr.next.as_mut().unwrap();",
        "tag": "pointer",
        "lineNum": 23
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "    curr.next = if list1.is_some() { list1 } else { list2 };",
        "code": "    curr.next = if list1.is_some() { list1 } else { list2 };",
        "tag": "pointer",
        "lineNum": 25
      },
      {
        "text": "    dummy.next",
        "code": "    dummy.next",
        "tag": "pointer",
        "lineNum": 26
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 27
      }
    ],
    "rawCode": "pub struct ListNode {\n    pub val: i32,\n    pub next: Option<Box<ListNode>>,\n}\n\npub fn merge_two_lists(\n    mut list1: Option<Box<ListNode>>,\n    mut list2: Option<Box<ListNode>>\n) -> Option<Box<ListNode>> {\n    let mut dummy = ListNode { val: 0, next: None };\n    let mut curr = &mut dummy;\n\n    while list1.is_some() && list2.is_some() {\n        if list1.as_ref().unwrap().val <= list2.as_ref().unwrap().val {\n            let next = list1.as_mut().unwrap().next.take();\n            curr.next = list1;\n            list1 = next;\n        } else {\n            let next = list2.as_mut().unwrap().next.take();\n            curr.next = list2;\n            list2 = next;\n        }\n        curr = curr.next.as_mut().unwrap();\n    }\n    curr.next = if list1.is_some() { list1 } else { list2 };\n    dummy.next\n}",
    "explanations": {
      "def": "Define merge_two_lists taking ownership of two lists.",
      "init": "Instantiate dummy sentinel node and curr mutable reference.",
      "pointer": "Splice remaining list onto curr.next.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Using take() detaches nodes safely, satisfying the borrow checker during in-place splicing."
  },
  {
    "id": "ll-remove-nth-end",
    "code": [
      {
        "text": "pub struct ListNode {",
        "code": "pub struct ListNode {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    pub val: i32,",
        "code": "    pub val: i32,",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    pub next: Option<Box<ListNode>>,",
        "code": "    pub next: Option<Box<ListNode>>,",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "pub fn remove_nth_from_end(head: Option<Box<ListNode>>, n: usize) -> Option<Box<ListNode>> {",
        "code": "pub fn remove_nth_from_end(head: Option<Box<ListNode>>, n: usize) -> Option<Box<ListNode>> {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "    let mut vals = Vec::new();",
        "code": "    let mut vals = Vec::new();",
        "tag": "alloc",
        "lineNum": 7
      },
      {
        "text": "    let mut curr = head.as_ref();",
        "code": "    let mut curr = head.as_ref();",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "    while let Some(node) = curr {",
        "code": "    while let Some(node) = curr {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "        vals.push(node.val);",
        "code": "        vals.push(node.val);",
        "tag": "mutate",
        "lineNum": 10
      },
      {
        "text": "        curr = node.next.as_ref();",
        "code": "        curr = node.next.as_ref();",
        "tag": "pointer",
        "lineNum": 11
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    let target_idx = vals.len() - n;",
        "code": "    let target_idx = vals.len() - n;",
        "tag": "init",
        "lineNum": 13
      },
      {
        "text": "    vals.remove(target_idx);",
        "code": "    vals.remove(target_idx);",
        "tag": "mutate",
        "lineNum": 14
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    let mut new_head = None;",
        "code": "    let mut new_head = None;",
        "tag": "init",
        "lineNum": 16
      },
      {
        "text": "    for &val in vals.iter().rev() {",
        "code": "    for &val in vals.iter().rev() {",
        "tag": "def",
        "lineNum": 17
      },
      {
        "text": "        new_head = Some(Box::new(ListNode { val, next: new_head }));",
        "code": "        new_head = Some(Box::new(ListNode { val, next: new_head }));",
        "tag": "alloc",
        "lineNum": 18
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "    new_head",
        "code": "    new_head",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 21
      }
    ],
    "rawCode": "pub struct ListNode {\n    pub val: i32,\n    pub next: Option<Box<ListNode>>,\n}\n\npub fn remove_nth_from_end(head: Option<Box<ListNode>>, n: usize) -> Option<Box<ListNode>> {\n    let mut vals = Vec::new();\n    let mut curr = head.as_ref();\n    while let Some(node) = curr {\n        vals.push(node.val);\n        curr = node.next.as_ref();\n    }\n    let target_idx = vals.len() - n;\n    vals.remove(target_idx);\n\n    let mut new_head = None;\n    for &val in vals.iter().rev() {\n        new_head = Some(Box::new(ListNode { val, next: new_head }));\n    }\n    new_head\n}",
    "explanations": {
      "def": "Define remove_nth_from_end function.",
      "init": "Collect node values into Vec::new().",
      "mutate": "Remove target element at target_idx via vals.remove().",
      "pointer": "Rebuild linked list in reverse by wrapping in Some(Box::new(...)).",
      "exec": "Executes [exec] operation in this algorithm step.",
      "alloc": "Executes [alloc] operation in this algorithm step."
    },
    "notes": "Reconstructing the list from a vector is a common, safe, idiomatic Rust technique that avoids complex two-pointer mutable borrowing."
  },
  {
    "id": "ll-palindrome",
    "code": [
      {
        "text": "pub struct ListNode {",
        "code": "pub struct ListNode {",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    pub val: i32,",
        "code": "    pub val: i32,",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    pub next: Option<Box<ListNode>>,",
        "code": "    pub next: Option<Box<ListNode>>,",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "pub fn is_palindrome(head: &Option<Box<ListNode>>) -> bool {",
        "code": "pub fn is_palindrome(head: &Option<Box<ListNode>>) -> bool {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "    let mut vals = Vec::new();",
        "code": "    let mut vals = Vec::new();",
        "tag": "alloc",
        "lineNum": 7
      },
      {
        "text": "    let mut curr = head.as_ref();",
        "code": "    let mut curr = head.as_ref();",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "    while let Some(node) = curr {",
        "code": "    while let Some(node) = curr {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "        vals.push(node.val);",
        "code": "        vals.push(node.val);",
        "tag": "mutate",
        "lineNum": 10
      },
      {
        "text": "        curr = node.next.as_ref();",
        "code": "        curr = node.next.as_ref();",
        "tag": "pointer",
        "lineNum": 11
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    let mut l = 0;",
        "code": "    let mut l = 0;",
        "tag": "init",
        "lineNum": 13
      },
      {
        "text": "    let mut r = vals.len().saturating_sub(1);",
        "code": "    let mut r = vals.len().saturating_sub(1);",
        "tag": "init",
        "lineNum": 14
      },
      {
        "text": "    while l < r {",
        "code": "    while l < r {",
        "tag": "loop",
        "lineNum": 15
      },
      {
        "text": "        if vals[l] != vals[r] {",
        "code": "        if vals[l] != vals[r] {",
        "tag": "branch",
        "lineNum": 16
      },
      {
        "text": "            return false;",
        "code": "            return false;",
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
        "text": "        l += 1;",
        "code": "        l += 1;",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "        r -= 1;",
        "code": "        r -= 1;",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "    true",
        "code": "    true",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 23
      }
    ],
    "rawCode": "pub struct ListNode {\n    pub val: i32,\n    pub next: Option<Box<ListNode>>,\n}\n\npub fn is_palindrome(head: &Option<Box<ListNode>>) -> bool {\n    let mut vals = Vec::new();\n    let mut curr = head.as_ref();\n    while let Some(node) = curr {\n        vals.push(node.val);\n        curr = node.next.as_ref();\n    }\n    let mut l = 0;\n    let mut r = vals.len().saturating_sub(1);\n    while l < r {\n        if vals[l] != vals[r] {\n            return false;\n        }\n        l += 1;\n        r -= 1;\n    }\n    true\n}",
    "explanations": {
      "def": "Define is_palindrome borrowing list reference.",
      "init": "Collect values into vector vals.",
      "loop": "Traverse list nodes, then run two pointers inwards on vector.",
      "branch": "Return false if symmetric values do not match.",
      "mutate": "Increment l and decrement r.",
      "return": "Return true if all pairs match.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "alloc": "Executes [alloc] operation in this algorithm step.",
      "pointer": "Executes [pointer] operation in this algorithm step."
    },
    "notes": "Collecting values into a Vec allows standard two-pointer comparison without mutating or reversing the original linked list."
  },
  {
    "id": "ll-lru-cache",
    "code": [
      {
        "text": "use std::collections::HashMap;",
        "code": "use std::collections::HashMap;",
        "tag": "exec",
        "lineNum": 1
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "pub struct LRUCache {",
        "code": "pub struct LRUCache {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    capacity: usize,",
        "code": "    capacity: usize,",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    map: HashMap<i32, i32>,",
        "code": "    map: HashMap<i32, i32>,",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    order: Vec<i32>,",
        "code": "    order: Vec<i32>,",
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
        "text": "impl LRUCache {",
        "code": "impl LRUCache {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    pub fn new(capacity: i32) -> Self {",
        "code": "    pub fn new(capacity: i32) -> Self {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "        LRUCache {",
        "code": "        LRUCache {",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "            capacity: capacity as usize,",
        "code": "            capacity: capacity as usize,",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "            map: HashMap::new(),",
        "code": "            map: HashMap::new(),",
        "tag": "alloc",
        "lineNum": 13
      },
      {
        "text": "            order: Vec::new(),",
        "code": "            order: Vec::new(),",
        "tag": "alloc",
        "lineNum": 14
      },
      {
        "text": "        }",
        "code": "        }",
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
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "    pub fn get(&mut self, key: i32) -> i32 {",
        "code": "    pub fn get(&mut self, key: i32) -> i32 {",
        "tag": "def",
        "lineNum": 18
      },
      {
        "text": "        if let Some(&val) = self.map.get(&key) {",
        "code": "        if let Some(&val) = self.map.get(&key) {",
        "tag": "def",
        "lineNum": 19
      },
      {
        "text": "            self.order.retain(|&k| k != key);",
        "code": "            self.order.retain(|&k| k != key);",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "            self.order.push(key);",
        "code": "            self.order.push(key);",
        "tag": "mutate",
        "lineNum": 21
      },
      {
        "text": "            val",
        "code": "            val",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "        } else {",
        "code": "        } else {",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "            -1",
        "code": "            -1",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 27
      }
    ],
    "rawCode": "use std::collections::HashMap;\n\npub struct LRUCache {\n    capacity: usize,\n    map: HashMap<i32, i32>,\n    order: Vec<i32>,\n}\n\nimpl LRUCache {\n    pub fn new(capacity: i32) -> Self {\n        LRUCache {\n            capacity: capacity as usize,\n            map: HashMap::new(),\n            order: Vec::new(),\n        }\n    }\n\n    pub fn get(&mut self, key: i32) -> i32 {\n        if let Some(&val) = self.map.get(&key) {\n            self.order.retain(|&k| k != key);\n            self.order.push(key);\n            val\n        } else {\n            -1\n        }\n    }\n}",
    "explanations": {
      "def": "Define LRUCache struct with capacity, HashMap, and order Vec.",
      "mutate": "Re-order key to most recently used position via retain() and push().",
      "exec": "Executes [exec] operation in this algorithm step.",
      "alloc": "Executes [alloc] operation in this algorithm step."
    },
    "notes": "In safe Rust, combining a HashMap with an order Vec provides an idiomatic, easily-reasoned LRU cache without doubly-linked list pointer aliasing."
  }
];
})(typeof window !== 'undefined' ? window : global);
