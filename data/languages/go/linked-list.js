/**
 * SynapseCS Language-Specific Implementation: GO - linked-list
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['go'] = window.DSA_LANG_CODE['go'] || {};
  window.DSA_LANG_CODE['go']['linked-list'] = [
  {
    "id": "ll-create",
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
        "text": "type ListNode struct {",
        "code": "type ListNode struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tVal  int",
        "code": "\tVal  int",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tNext *ListNode",
        "code": "\tNext *ListNode",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "func main() {",
        "code": "func main() {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "\thead := &ListNode{Val: 10}",
        "code": "\thead := &ListNode{Val: 10}",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "\thead.Next = &ListNode{Val: 20}",
        "code": "\thead.Next = &ListNode{Val: 20}",
        "tag": "pointer",
        "lineNum": 10
      },
      {
        "text": "\thead.Next.Next = &ListNode{Val: 30}",
        "code": "\thead.Next.Next = &ListNode{Val: 30}",
        "tag": "pointer",
        "lineNum": 11
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 12
      }
    ],
    "rawCode": "package main\n\ntype ListNode struct {\n\tVal  int\n\tNext *ListNode\n}\n\nfunc main() {\n\thead := &ListNode{Val: 10}\n\thead.Next = &ListNode{Val: 20}\n\thead.Next.Next = &ListNode{Val: 30}\n}",
    "explanations": {
      "def": "Define ListNode struct with Val int and Next *ListNode.",
      "pointer": "Wire head.Next and head.Next.Next pointers.",
      "comment": "Go package main.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Go automatically allocates &ListNode{} on the heap when its pointer escapes function scope, and garbage-collects it when unreferenced."
  },
  {
    "id": "ll-insert-head",
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
        "text": "type ListNode struct {",
        "code": "type ListNode struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tVal  int",
        "code": "\tVal  int",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tNext *ListNode",
        "code": "\tNext *ListNode",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "func insertHead(head *ListNode, val int) *ListNode {",
        "code": "func insertHead(head *ListNode, val int) *ListNode {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "\treturn &ListNode{Val: val, Next: head}",
        "code": "\treturn &ListNode{Val: val, Next: head}",
        "tag": "return",
        "lineNum": 9
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 10
      }
    ],
    "rawCode": "package main\n\ntype ListNode struct {\n\tVal  int\n\tNext *ListNode\n}\n\nfunc insertHead(head *ListNode, val int) *ListNode {\n\treturn &ListNode{Val: val, Next: head}\n}",
    "explanations": {
      "def": "Define insertHead taking head pointer and integer value.",
      "return": "Return new node as updated head.",
      "comment": "Package declaration.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Creating a new head node in Go is a concise 1-line expression with O(1) runtime."
  },
  {
    "id": "ll-insert-tail",
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
        "text": "type ListNode struct {",
        "code": "type ListNode struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tVal  int",
        "code": "\tVal  int",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tNext *ListNode",
        "code": "\tNext *ListNode",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "func insertTail(head *ListNode, val int) *ListNode {",
        "code": "func insertTail(head *ListNode, val int) *ListNode {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "\tnewNode := &ListNode{Val: val, Next: nil}",
        "code": "\tnewNode := &ListNode{Val: val, Next: nil}",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "\tif head == nil {",
        "code": "\tif head == nil {",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "\t\treturn newNode",
        "code": "\t\treturn newNode",
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
        "text": "\tcurr := head",
        "code": "\tcurr := head",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "\tfor curr.Next != nil {",
        "code": "\tfor curr.Next != nil {",
        "tag": "loop",
        "lineNum": 14
      },
      {
        "text": "\t\tcurr = curr.Next",
        "code": "\t\tcurr = curr.Next",
        "tag": "pointer",
        "lineNum": 15
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "\tcurr.Next = newNode",
        "code": "\tcurr.Next = newNode",
        "tag": "pointer",
        "lineNum": 17
      },
      {
        "text": "\treturn head",
        "code": "\treturn head",
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
    "rawCode": "package main\n\ntype ListNode struct {\n\tVal  int\n\tNext *ListNode\n}\n\nfunc insertTail(head *ListNode, val int) *ListNode {\n\tnewNode := &ListNode{Val: val, Next: nil}\n\tif head == nil {\n\t\treturn newNode\n\t}\n\tcurr := head\n\tfor curr.Next != nil {\n\t\tcurr = curr.Next\n\t}\n\tcurr.Next = newNode\n\treturn head\n}",
    "explanations": {
      "def": "Define insertTail appending node to list end.",
      "branch": "If head is nil, return newNode directly.",
      "loop": "Traverse list while curr.Next != nil.",
      "pointer": "Attach newNode to curr.Next.",
      "return": "Return head of list.",
      "comment": "Go package declaration.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Traversing to tail takes O(N) time; updating curr.Next re-anchors the tail pointer."
  },
  {
    "id": "ll-insert-kth",
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
        "text": "type ListNode struct {",
        "code": "type ListNode struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tVal  int",
        "code": "\tVal  int",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tNext *ListNode",
        "code": "\tNext *ListNode",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "func insertKth(head *ListNode, index int, val int) *ListNode {",
        "code": "func insertKth(head *ListNode, index int, val int) *ListNode {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "\tif index == 0 {",
        "code": "\tif index == 0 {",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "\t\treturn &ListNode{Val: val, Next: head}",
        "code": "\t\treturn &ListNode{Val: val, Next: head}",
        "tag": "return",
        "lineNum": 10
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "\tcurr := head",
        "code": "\tcurr := head",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "\tfor i := 0; i < index-1 && curr != nil; i++ {",
        "code": "\tfor i := 0; i < index-1 && curr != nil; i++ {",
        "tag": "loop",
        "lineNum": 13
      },
      {
        "text": "\t\tcurr = curr.Next",
        "code": "\t\tcurr = curr.Next",
        "tag": "pointer",
        "lineNum": 14
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\tif curr == nil {",
        "code": "\tif curr == nil {",
        "tag": "branch",
        "lineNum": 16
      },
      {
        "text": "\t\treturn head",
        "code": "\t\treturn head",
        "tag": "return",
        "lineNum": 17
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "\tcurr.Next = &ListNode{Val: val, Next: curr.Next}",
        "code": "\tcurr.Next = &ListNode{Val: val, Next: curr.Next}",
        "tag": "pointer",
        "lineNum": 19
      },
      {
        "text": "\treturn head",
        "code": "\treturn head",
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
    "rawCode": "package main\n\ntype ListNode struct {\n\tVal  int\n\tNext *ListNode\n}\n\nfunc insertKth(head *ListNode, index int, val int) *ListNode {\n\tif index == 0 {\n\t\treturn &ListNode{Val: val, Next: head}\n\t}\n\tcurr := head\n\tfor i := 0; i < index-1 && curr != nil; i++ {\n\t\tcurr = curr.Next\n\t}\n\tif curr == nil {\n\t\treturn head\n\t}\n\tcurr.Next = &ListNode{Val: val, Next: curr.Next}\n\treturn head\n}",
    "explanations": {
      "def": "Define insertKth inserting element at index.",
      "branch": "Handle index 0 head insertion or out-of-bounds check.",
      "loop": "Traverse index - 1 nodes to find insertion anchor.",
      "pointer": "Instantiate and link new node between curr and curr.Next.",
      "return": "Return list head.",
      "comment": "Go package declaration.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "In Go, curr.Next = &ListNode{Val: val, Next: curr.Next} atomically captures curr.Next before updating it."
  },
  {
    "id": "ll-delete-head",
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
        "text": "type ListNode struct {",
        "code": "type ListNode struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tVal  int",
        "code": "\tVal  int",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tNext *ListNode",
        "code": "\tNext *ListNode",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "func deleteHead(head *ListNode) *ListNode {",
        "code": "func deleteHead(head *ListNode) *ListNode {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "\tif head == nil {",
        "code": "\tif head == nil {",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "\t\treturn nil",
        "code": "\t\treturn nil",
        "tag": "return",
        "lineNum": 10
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "\treturn head.Next",
        "code": "\treturn head.Next",
        "tag": "return",
        "lineNum": 12
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 13
      }
    ],
    "rawCode": "package main\n\ntype ListNode struct {\n\tVal  int\n\tNext *ListNode\n}\n\nfunc deleteHead(head *ListNode) *ListNode {\n\tif head == nil {\n\t\treturn nil\n\t}\n\treturn head.Next\n}",
    "explanations": {
      "def": "Define deleteHead returning second node.",
      "branch": "Check if head is nil.",
      "return": "Return head.Next.",
      "comment": "Package header.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Go garbage collector automatically reclaims the unlinked head node once no references point to it."
  },
  {
    "id": "ll-delete-tail",
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
        "text": "type ListNode struct {",
        "code": "type ListNode struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tVal  int",
        "code": "\tVal  int",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tNext *ListNode",
        "code": "\tNext *ListNode",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "func deleteTail(head *ListNode) *ListNode {",
        "code": "func deleteTail(head *ListNode) *ListNode {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "\tif head == nil || head.Next == nil {",
        "code": "\tif head == nil || head.Next == nil {",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "\t\treturn nil",
        "code": "\t\treturn nil",
        "tag": "return",
        "lineNum": 10
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "\tcurr := head",
        "code": "\tcurr := head",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "\tfor curr.Next.Next != nil {",
        "code": "\tfor curr.Next.Next != nil {",
        "tag": "loop",
        "lineNum": 13
      },
      {
        "text": "\t\tcurr = curr.Next",
        "code": "\t\tcurr = curr.Next",
        "tag": "pointer",
        "lineNum": 14
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\tcurr.Next = nil",
        "code": "\tcurr.Next = nil",
        "tag": "pointer",
        "lineNum": 16
      },
      {
        "text": "\treturn head",
        "code": "\treturn head",
        "tag": "return",
        "lineNum": 17
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 18
      }
    ],
    "rawCode": "package main\n\ntype ListNode struct {\n\tVal  int\n\tNext *ListNode\n}\n\nfunc deleteTail(head *ListNode) *ListNode {\n\tif head == nil || head.Next == nil {\n\t\treturn nil\n\t}\n\tcurr := head\n\tfor curr.Next.Next != nil {\n\t\tcurr = curr.Next\n\t}\n\tcurr.Next = nil\n\treturn head\n}",
    "explanations": {
      "def": "Define deleteTail function.",
      "branch": "Guard check for empty or single-node lists.",
      "loop": "Iterate until reaching second-to-last node.",
      "pointer": "Set curr.Next = nil to drop old tail.",
      "return": "Return list head.",
      "comment": "Go package declaration.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Setting curr.Next = nil detaches the tail node, making it eligible for GC collection."
  },
  {
    "id": "ll-delete-val",
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
        "text": "type ListNode struct {",
        "code": "type ListNode struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tVal  int",
        "code": "\tVal  int",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tNext *ListNode",
        "code": "\tNext *ListNode",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "func deleteVal(head *ListNode, target int) *ListNode {",
        "code": "func deleteVal(head *ListNode, target int) *ListNode {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "\tdummy := &ListNode{Next: head}",
        "code": "\tdummy := &ListNode{Next: head}",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "\tcurr := dummy",
        "code": "\tcurr := dummy",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "\tfor curr.Next != nil {",
        "code": "\tfor curr.Next != nil {",
        "tag": "loop",
        "lineNum": 11
      },
      {
        "text": "\t\tif curr.Next.Val == target {",
        "code": "\t\tif curr.Next.Val == target {",
        "tag": "branch",
        "lineNum": 12
      },
      {
        "text": "\t\t\tcurr.Next = curr.Next.Next",
        "code": "\t\t\tcurr.Next = curr.Next.Next",
        "tag": "pointer",
        "lineNum": 13
      },
      {
        "text": "\t\t\tbreak",
        "code": "\t\t\tbreak",
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
        "text": "\t\tcurr = curr.Next",
        "code": "\t\tcurr = curr.Next",
        "tag": "pointer",
        "lineNum": 16
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "\treturn dummy.Next",
        "code": "\treturn dummy.Next",
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
    "rawCode": "package main\n\ntype ListNode struct {\n\tVal  int\n\tNext *ListNode\n}\n\nfunc deleteVal(head *ListNode, target int) *ListNode {\n\tdummy := &ListNode{Next: head}\n\tcurr := dummy\n\tfor curr.Next != nil {\n\t\tif curr.Next.Val == target {\n\t\t\tcurr.Next = curr.Next.Next\n\t\t\tbreak\n\t\t}\n\t\tcurr = curr.Next\n\t}\n\treturn dummy.Next\n}",
    "explanations": {
      "def": "Define deleteVal removing first node matching target.",
      "loop": "Traverse while curr.Next is non-nil.",
      "branch": "If curr.Next.Val == target, splice out matching node.",
      "pointer": "Bypass node: curr.Next = curr.Next.Next.",
      "return": "Return dummy.Next.",
      "comment": "Dummy node idiom.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Dummy sentinel node simplifies boundary logic by treating the head node identically to interior nodes."
  },
  {
    "id": "ll-search",
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
        "text": "type ListNode struct {",
        "code": "type ListNode struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tVal  int",
        "code": "\tVal  int",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tNext *ListNode",
        "code": "\tNext *ListNode",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "func search(head *ListNode, target int) bool {",
        "code": "func search(head *ListNode, target int) bool {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "\tcurr := head",
        "code": "\tcurr := head",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "\tfor curr != nil {",
        "code": "\tfor curr != nil {",
        "tag": "loop",
        "lineNum": 10
      },
      {
        "text": "\t\tif curr.Val == target {",
        "code": "\t\tif curr.Val == target {",
        "tag": "branch",
        "lineNum": 11
      },
      {
        "text": "\t\t\treturn true",
        "code": "\t\t\treturn true",
        "tag": "return",
        "lineNum": 12
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "\t\tcurr = curr.Next",
        "code": "\t\tcurr = curr.Next",
        "tag": "pointer",
        "lineNum": 14
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\treturn false",
        "code": "\treturn false",
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
    "rawCode": "package main\n\ntype ListNode struct {\n\tVal  int\n\tNext *ListNode\n}\n\nfunc search(head *ListNode, target int) bool {\n\tcurr := head\n\tfor curr != nil {\n\t\tif curr.Val == target {\n\t\t\treturn true\n\t\t}\n\t\tcurr = curr.Next\n\t}\n\treturn false\n}",
    "explanations": {
      "def": "Define search returning boolean.",
      "loop": "Traverse list with for curr != nil.",
      "branch": "If curr.Val == target, return true.",
      "pointer": "Advance curr = curr.Next.",
      "return": "Return false if target is not found.",
      "comment": "Package declaration.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Searching in a singly linked list requires linear O(N) pointer traversal."
  },
  {
    "id": "ll-traverse",
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
        "text": "type ListNode struct {",
        "code": "type ListNode struct {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "\tVal  int",
        "code": "\tVal  int",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "\tNext *ListNode",
        "code": "\tNext *ListNode",
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
        "text": "func traverse(head *ListNode) {",
        "code": "func traverse(head *ListNode) {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "\tcurr := head",
        "code": "\tcurr := head",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "\tfor curr != nil {",
        "code": "\tfor curr != nil {",
        "tag": "loop",
        "lineNum": 12
      },
      {
        "text": "\t\tfmt.Printf(\"%d -> \", curr.Val)",
        "code": "\t\tfmt.Printf(\"%d -> \", curr.Val)",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "\t\tcurr = curr.Next",
        "code": "\t\tcurr = curr.Next",
        "tag": "pointer",
        "lineNum": 14
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\tfmt.Println(\"nil\")",
        "code": "\tfmt.Println(\"nil\")",
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
    "rawCode": "package main\n\nimport \"fmt\"\n\ntype ListNode struct {\n\tVal  int\n\tNext *ListNode\n}\n\nfunc traverse(head *ListNode) {\n\tcurr := head\n\tfor curr != nil {\n\t\tfmt.Printf(\"%d -> \", curr.Val)\n\t\tcurr = curr.Next\n\t}\n\tfmt.Println(\"nil\")\n}",
    "explanations": {
      "def": "Define traverse printing list nodes.",
      "loop": "Loop until curr == nil.",
      "exec": "Print node value followed by pointer arrow.",
      "pointer": "Advance curr = curr.Next.",
      "comment": "Package and fmt import."
    },
    "notes": "Traversing follows heap references sequentially until reaching nil."
  },
  {
    "id": "ll-update",
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
        "text": "type ListNode struct {",
        "code": "type ListNode struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tVal  int",
        "code": "\tVal  int",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tNext *ListNode",
        "code": "\tNext *ListNode",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "func updateAt(head *ListNode, index int, newVal int) bool {",
        "code": "func updateAt(head *ListNode, index int, newVal int) bool {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "\tcurr := head",
        "code": "\tcurr := head",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "\tfor i := 0; i < index && curr != nil; i++ {",
        "code": "\tfor i := 0; i < index && curr != nil; i++ {",
        "tag": "loop",
        "lineNum": 10
      },
      {
        "text": "\t\tcurr = curr.Next",
        "code": "\t\tcurr = curr.Next",
        "tag": "pointer",
        "lineNum": 11
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "\tif curr == nil {",
        "code": "\tif curr == nil {",
        "tag": "branch",
        "lineNum": 13
      },
      {
        "text": "\t\treturn false",
        "code": "\t\treturn false",
        "tag": "return",
        "lineNum": 14
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\tcurr.Val = newVal",
        "code": "\tcurr.Val = newVal",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "\treturn true",
        "code": "\treturn true",
        "tag": "return",
        "lineNum": 17
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 18
      }
    ],
    "rawCode": "package main\n\ntype ListNode struct {\n\tVal  int\n\tNext *ListNode\n}\n\nfunc updateAt(head *ListNode, index int, newVal int) bool {\n\tcurr := head\n\tfor i := 0; i < index && curr != nil; i++ {\n\t\tcurr = curr.Next\n\t}\n\tif curr == nil {\n\t\treturn false\n\t}\n\tcurr.Val = newVal\n\treturn true\n}",
    "explanations": {
      "def": "Define updateAt updating node value at index.",
      "loop": "Advance curr by index steps.",
      "branch": "Return false if index out of bounds.",
      "return": "Return true upon successful mutation.",
      "comment": "Go package declaration.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "pointer": "Executes [pointer] operation in this algorithm step."
    },
    "notes": "Modifying struct field curr.Val updates memory directly through the pointer reference."
  },
  {
    "id": "ll-size",
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
        "text": "type ListNode struct {",
        "code": "type ListNode struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tVal  int",
        "code": "\tVal  int",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tNext *ListNode",
        "code": "\tNext *ListNode",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "func getLength(head *ListNode) int {",
        "code": "func getLength(head *ListNode) int {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "\tcount := 0",
        "code": "\tcount := 0",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "\tcurr := head",
        "code": "\tcurr := head",
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
        "text": "\t\tcount++",
        "code": "\t\tcount++",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "\t\tcurr = curr.Next",
        "code": "\t\tcurr = curr.Next",
        "tag": "pointer",
        "lineNum": 13
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "\treturn count",
        "code": "\treturn count",
        "tag": "return",
        "lineNum": 15
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 16
      }
    ],
    "rawCode": "package main\n\ntype ListNode struct {\n\tVal  int\n\tNext *ListNode\n}\n\nfunc getLength(head *ListNode) int {\n\tcount := 0\n\tcurr := head\n\tfor curr != nil {\n\t\tcount++\n\t\tcurr = curr.Next\n\t}\n\treturn count\n}",
    "explanations": {
      "def": "Define getLength returning integer node count.",
      "loop": "Iterate while curr != nil.",
      "pointer": "Advance curr = curr.Next.",
      "return": "Return accumulated count.",
      "comment": "Package header.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Counting nodes requires O(N) operations without an external length tracking wrapper."
  },
  {
    "id": "ll-reverse",
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
        "text": "type ListNode struct {",
        "code": "type ListNode struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tVal  int",
        "code": "\tVal  int",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tNext *ListNode",
        "code": "\tNext *ListNode",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "func reverseList(head *ListNode) *ListNode {",
        "code": "func reverseList(head *ListNode) *ListNode {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "\tvar prev *ListNode",
        "code": "\tvar prev *ListNode",
        "tag": "init",
        "lineNum": 9
      },
      {
        "text": "\tcurr := head",
        "code": "\tcurr := head",
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
        "text": "\t\tnext := curr.Next",
        "code": "\t\tnext := curr.Next",
        "tag": "pointer",
        "lineNum": 12
      },
      {
        "text": "\t\tcurr.Next = prev",
        "code": "\t\tcurr.Next = prev",
        "tag": "pointer",
        "lineNum": 13
      },
      {
        "text": "\t\tprev = curr",
        "code": "\t\tprev = curr",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "\t\tcurr = next",
        "code": "\t\tcurr = next",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "\treturn prev",
        "code": "\treturn prev",
        "tag": "return",
        "lineNum": 17
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 18
      }
    ],
    "rawCode": "package main\n\ntype ListNode struct {\n\tVal  int\n\tNext *ListNode\n}\n\nfunc reverseList(head *ListNode) *ListNode {\n\tvar prev *ListNode\n\tcurr := head\n\tfor curr != nil {\n\t\tnext := curr.Next\n\t\tcurr.Next = prev\n\t\tprev = curr\n\t\tcurr = next\n\t}\n\treturn prev\n}",
    "explanations": {
      "def": "Define reverseList returning reversed head pointer.",
      "init": "Declare var prev *ListNode and curr := head.",
      "loop": "Loop while curr != nil.",
      "pointer": "Cache next, reverse link curr.Next = prev, and advance pointers.",
      "return": "Return prev as new head.",
      "comment": "In-place linked list reversal.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Pointer reversal in Go executes in O(N) time and requires zero additional heap allocations."
  },
  {
    "id": "ll-middle",
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
        "text": "type ListNode struct {",
        "code": "type ListNode struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tVal  int",
        "code": "\tVal  int",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tNext *ListNode",
        "code": "\tNext *ListNode",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "func middleNode(head *ListNode) *ListNode {",
        "code": "func middleNode(head *ListNode) *ListNode {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "\tslow, fast := head, head",
        "code": "\tslow, fast := head, head",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "\tfor fast != nil && fast.Next != nil {",
        "code": "\tfor fast != nil && fast.Next != nil {",
        "tag": "loop",
        "lineNum": 10
      },
      {
        "text": "\t\tslow = slow.Next",
        "code": "\t\tslow = slow.Next",
        "tag": "pointer",
        "lineNum": 11
      },
      {
        "text": "\t\tfast = fast.Next.Next",
        "code": "\t\tfast = fast.Next.Next",
        "tag": "pointer",
        "lineNum": 12
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "\treturn slow",
        "code": "\treturn slow",
        "tag": "return",
        "lineNum": 14
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 15
      }
    ],
    "rawCode": "package main\n\ntype ListNode struct {\n\tVal  int\n\tNext *ListNode\n}\n\nfunc middleNode(head *ListNode) *ListNode {\n\tslow, fast := head, head\n\tfor fast != nil && fast.Next != nil {\n\t\tslow = slow.Next\n\t\tfast = fast.Next.Next\n\t}\n\treturn slow\n}",
    "explanations": {
      "def": "Define middleNode using fast and slow pointers.",
      "loop": "Loop while fast and fast.Next are non-nil.",
      "pointer": "Advance slow by 1 step and fast by 2 steps.",
      "return": "Return slow pointer.",
      "comment": "Two-pointer technique.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "When fast pointer reaches end of list, slow pointer is positioned precisely at the midpoint."
  },
  {
    "id": "ll-cycle",
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
        "text": "type ListNode struct {",
        "code": "type ListNode struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tVal  int",
        "code": "\tVal  int",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tNext *ListNode",
        "code": "\tNext *ListNode",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "func hasCycle(head *ListNode) bool {",
        "code": "func hasCycle(head *ListNode) bool {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "\tslow, fast := head, head",
        "code": "\tslow, fast := head, head",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "\tfor fast != nil && fast.Next != nil {",
        "code": "\tfor fast != nil && fast.Next != nil {",
        "tag": "loop",
        "lineNum": 10
      },
      {
        "text": "\t\tslow = slow.Next",
        "code": "\t\tslow = slow.Next",
        "tag": "pointer",
        "lineNum": 11
      },
      {
        "text": "\t\tfast = fast.Next.Next",
        "code": "\t\tfast = fast.Next.Next",
        "tag": "pointer",
        "lineNum": 12
      },
      {
        "text": "\t\tif slow == fast {",
        "code": "\t\tif slow == fast {",
        "tag": "branch",
        "lineNum": 13
      },
      {
        "text": "\t\t\treturn true",
        "code": "\t\t\treturn true",
        "tag": "return",
        "lineNum": 14
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "\treturn false",
        "code": "\treturn false",
        "tag": "return",
        "lineNum": 17
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 18
      }
    ],
    "rawCode": "package main\n\ntype ListNode struct {\n\tVal  int\n\tNext *ListNode\n}\n\nfunc hasCycle(head *ListNode) bool {\n\tslow, fast := head, head\n\tfor fast != nil && fast.Next != nil {\n\t\tslow = slow.Next\n\t\tfast = fast.Next.Next\n\t\tif slow == fast {\n\t\t\treturn true\n\t\t}\n\t}\n\treturn false\n}",
    "explanations": {
      "def": "Define hasCycle detecting loops.",
      "loop": "Iterate while fast and fast.Next are non-nil.",
      "pointer": "Advance slow by 1 and fast by 2 nodes.",
      "branch": "If slow == fast pointer address, return true.",
      "return": "Return false if fast reaches nil.",
      "comment": "Floyd cycle detection in Go.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Comparing struct pointers (slow == fast) in Go checks memory identity, not value equality."
  },
  {
    "id": "ll-merge",
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
        "text": "type ListNode struct {",
        "code": "type ListNode struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tVal  int",
        "code": "\tVal  int",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tNext *ListNode",
        "code": "\tNext *ListNode",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {",
        "code": "func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "\tdummy := &ListNode{}",
        "code": "\tdummy := &ListNode{}",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "\ttail := dummy",
        "code": "\ttail := dummy",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "\tfor list1 != nil && list2 != nil {",
        "code": "\tfor list1 != nil && list2 != nil {",
        "tag": "loop",
        "lineNum": 12
      },
      {
        "text": "\t\tif list1.Val <= list2.Val {",
        "code": "\t\tif list1.Val <= list2.Val {",
        "tag": "branch",
        "lineNum": 13
      },
      {
        "text": "\t\t\ttail.Next = list1",
        "code": "\t\t\ttail.Next = list1",
        "tag": "pointer",
        "lineNum": 14
      },
      {
        "text": "\t\t\tlist1 = list1.Next",
        "code": "\t\t\tlist1 = list1.Next",
        "tag": "pointer",
        "lineNum": 15
      },
      {
        "text": "\t\t} else {",
        "code": "\t\t} else {",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "\t\t\ttail.Next = list2",
        "code": "\t\t\ttail.Next = list2",
        "tag": "pointer",
        "lineNum": 17
      },
      {
        "text": "\t\t\tlist2 = list2.Next",
        "code": "\t\t\tlist2 = list2.Next",
        "tag": "pointer",
        "lineNum": 18
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "\t\ttail = tail.Next",
        "code": "\t\ttail = tail.Next",
        "tag": "pointer",
        "lineNum": 20
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "\tif list1 != nil {",
        "code": "\tif list1 != nil {",
        "tag": "branch",
        "lineNum": 22
      },
      {
        "text": "\t\ttail.Next = list1",
        "code": "\t\ttail.Next = list1",
        "tag": "pointer",
        "lineNum": 23
      },
      {
        "text": "\t} else {",
        "code": "\t} else {",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "\t\ttail.Next = list2",
        "code": "\t\ttail.Next = list2",
        "tag": "pointer",
        "lineNum": 25
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "\treturn dummy.Next",
        "code": "\treturn dummy.Next",
        "tag": "return",
        "lineNum": 27
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 28
      }
    ],
    "rawCode": "package main\n\ntype ListNode struct {\n\tVal  int\n\tNext *ListNode\n}\n\nfunc mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {\n\tdummy := &ListNode{}\n\ttail := dummy\n\n\tfor list1 != nil && list2 != nil {\n\t\tif list1.Val <= list2.Val {\n\t\t\ttail.Next = list1\n\t\t\tlist1 = list1.Next\n\t\t} else {\n\t\t\ttail.Next = list2\n\t\t\tlist2 = list2.Next\n\t\t}\n\t\ttail = tail.Next\n\t}\n\tif list1 != nil {\n\t\ttail.Next = list1\n\t} else {\n\t\ttail.Next = list2\n\t}\n\treturn dummy.Next\n}",
    "explanations": {
      "def": "Define mergeTwoLists merging sorted lists.",
      "loop": "Loop while both lists have remaining elements.",
      "branch": "Compare node values and attach smaller node to tail.Next.",
      "pointer": "Splice remaining nodes directly onto tail.Next.",
      "return": "Return dummy.Next.",
      "comment": "Go sorted merge.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Re-linking existing nodes avoids allocating new memory and executes in O(N + M) time."
  },
  {
    "id": "ll-remove-nth-end",
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
        "text": "type ListNode struct {",
        "code": "type ListNode struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tVal  int",
        "code": "\tVal  int",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tNext *ListNode",
        "code": "\tNext *ListNode",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "func removeNthFromEnd(head *ListNode, n int) *ListNode {",
        "code": "func removeNthFromEnd(head *ListNode, n int) *ListNode {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "\tdummy := &ListNode{Next: head}",
        "code": "\tdummy := &ListNode{Next: head}",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "\tfast, slow := dummy, dummy",
        "code": "\tfast, slow := dummy, dummy",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "\tfor i := 0; i < n; i++ {",
        "code": "\tfor i := 0; i < n; i++ {",
        "tag": "loop",
        "lineNum": 12
      },
      {
        "text": "\t\tfast = fast.Next",
        "code": "\t\tfast = fast.Next",
        "tag": "pointer",
        "lineNum": 13
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "\tfor fast.Next != nil {",
        "code": "\tfor fast.Next != nil {",
        "tag": "loop",
        "lineNum": 15
      },
      {
        "text": "\t\tfast = fast.Next",
        "code": "\t\tfast = fast.Next",
        "tag": "pointer",
        "lineNum": 16
      },
      {
        "text": "\t\tslow = slow.Next",
        "code": "\t\tslow = slow.Next",
        "tag": "pointer",
        "lineNum": 17
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "\tslow.Next = slow.Next.Next",
        "code": "\tslow.Next = slow.Next.Next",
        "tag": "pointer",
        "lineNum": 19
      },
      {
        "text": "\treturn dummy.Next",
        "code": "\treturn dummy.Next",
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
    "rawCode": "package main\n\ntype ListNode struct {\n\tVal  int\n\tNext *ListNode\n}\n\nfunc removeNthFromEnd(head *ListNode, n int) *ListNode {\n\tdummy := &ListNode{Next: head}\n\tfast, slow := dummy, dummy\n\n\tfor i := 0; i < n; i++ {\n\t\tfast = fast.Next\n\t}\n\tfor fast.Next != nil {\n\t\tfast = fast.Next\n\t\tslow = slow.Next\n\t}\n\tslow.Next = slow.Next.Next\n\treturn dummy.Next\n}",
    "explanations": {
      "def": "Define removeNthFromEnd with offset pointers.",
      "loop": "Advance fast n times, then slide fast and slow simultaneously.",
      "pointer": "Unlink target node: slow.Next = slow.Next.Next.",
      "return": "Return dummy.Next.",
      "comment": "Go two-pointer technique.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "The gap of n between fast and slow ensures slow reaches the predecessor of the node to remove."
  },
  {
    "id": "ll-palindrome",
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
        "text": "type ListNode struct {",
        "code": "type ListNode struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tVal  int",
        "code": "\tVal  int",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tNext *ListNode",
        "code": "\tNext *ListNode",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "func isPalindrome(head *ListNode) bool {",
        "code": "func isPalindrome(head *ListNode) bool {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "\tif head == nil || head.Next == nil {",
        "code": "\tif head == nil || head.Next == nil {",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "\t\treturn true",
        "code": "\t\treturn true",
        "tag": "return",
        "lineNum": 10
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "\tslow, fast := head, head",
        "code": "\tslow, fast := head, head",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "\tfor fast.Next != nil && fast.Next.Next != nil {",
        "code": "\tfor fast.Next != nil && fast.Next.Next != nil {",
        "tag": "loop",
        "lineNum": 13
      },
      {
        "text": "\t\tslow = slow.Next",
        "code": "\t\tslow = slow.Next",
        "tag": "pointer",
        "lineNum": 14
      },
      {
        "text": "\t\tfast = fast.Next.Next",
        "code": "\t\tfast = fast.Next.Next",
        "tag": "pointer",
        "lineNum": 15
      },
      {
        "text": "\t}",
        "code": "\t}",
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
        "text": "\tvar prev *ListNode",
        "code": "\tvar prev *ListNode",
        "tag": "init",
        "lineNum": 18
      },
      {
        "text": "\tcurr := slow.Next",
        "code": "\tcurr := slow.Next",
        "tag": "pointer",
        "lineNum": 19
      },
      {
        "text": "\tfor curr != nil {",
        "code": "\tfor curr != nil {",
        "tag": "loop",
        "lineNum": 20
      },
      {
        "text": "\t\tnext := curr.Next",
        "code": "\t\tnext := curr.Next",
        "tag": "pointer",
        "lineNum": 21
      },
      {
        "text": "\t\tcurr.Next = prev",
        "code": "\t\tcurr.Next = prev",
        "tag": "pointer",
        "lineNum": 22
      },
      {
        "text": "\t\tprev = curr",
        "code": "\t\tprev = curr",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "\t\tcurr = next",
        "code": "\t\tcurr = next",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "\tp1, p2 := head, prev",
        "code": "\tp1, p2 := head, prev",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "\tfor p2 != nil {",
        "code": "\tfor p2 != nil {",
        "tag": "loop",
        "lineNum": 28
      },
      {
        "text": "\t\tif p1.Val != p2.Val {",
        "code": "\t\tif p1.Val != p2.Val {",
        "tag": "branch",
        "lineNum": 29
      },
      {
        "text": "\t\t\treturn false",
        "code": "\t\t\treturn false",
        "tag": "return",
        "lineNum": 30
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 31
      },
      {
        "text": "\t\tp1 = p1.Next",
        "code": "\t\tp1 = p1.Next",
        "tag": "pointer",
        "lineNum": 32
      },
      {
        "text": "\t\tp2 = p2.Next",
        "code": "\t\tp2 = p2.Next",
        "tag": "pointer",
        "lineNum": 33
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 34
      },
      {
        "text": "\treturn true",
        "code": "\treturn true",
        "tag": "return",
        "lineNum": 35
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 36
      }
    ],
    "rawCode": "package main\n\ntype ListNode struct {\n\tVal  int\n\tNext *ListNode\n}\n\nfunc isPalindrome(head *ListNode) bool {\n\tif head == nil || head.Next == nil {\n\t\treturn true\n\t}\n\tslow, fast := head, head\n\tfor fast.Next != nil && fast.Next.Next != nil {\n\t\tslow = slow.Next\n\t\tfast = fast.Next.Next\n\t}\n\n\tvar prev *ListNode\n\tcurr := slow.Next\n\tfor curr != nil {\n\t\tnext := curr.Next\n\t\tcurr.Next = prev\n\t\tprev = curr\n\t\tcurr = next\n\t}\n\n\tp1, p2 := head, prev\n\tfor p2 != nil {\n\t\tif p1.Val != p2.Val {\n\t\t\treturn false\n\t\t}\n\t\tp1 = p1.Next\n\t\tp2 = p2.Next\n\t}\n\treturn true\n}",
    "explanations": {
      "def": "Define isPalindrome validating list symmetry.",
      "branch": "Early return true for empty or single node lists, and check val equality.",
      "init": "Locate middle with fast/slow pointers.",
      "loop": "Reverse second half and compare node values from both ends.",
      "pointer": "Reverse links and advance comparison pointers.",
      "return": "Return true if all symmetric pairs match.",
      "comment": "In-place palindrome check.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "In-place reversal of the second half achieves O(N) time with O(1) auxiliary memory."
  },
  {
    "id": "ll-lru-cache",
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
        "text": "type DNode struct {",
        "code": "type DNode struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tkey, val   int",
        "code": "\tkey, val   int",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tprev, next *DNode",
        "code": "\tprev, next *DNode",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "type LRUCache struct {",
        "code": "type LRUCache struct {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "\tcapacity   int",
        "code": "\tcapacity   int",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "\tcache      map[int]*DNode",
        "code": "\tcache      map[int]*DNode",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "\thead, tail *DNode",
        "code": "\thead, tail *DNode",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "func LRUConstructor(capacity int) LRUCache {",
        "code": "func LRUConstructor(capacity int) LRUCache {",
        "tag": "def",
        "lineNum": 14
      },
      {
        "text": "\thead := &DNode{}",
        "code": "\thead := &DNode{}",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\ttail := &DNode{}",
        "code": "\ttail := &DNode{}",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "\thead.next = tail",
        "code": "\thead.next = tail",
        "tag": "pointer",
        "lineNum": 17
      },
      {
        "text": "\ttail.prev = head",
        "code": "\ttail.prev = head",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "\treturn LRUCache{",
        "code": "\treturn LRUCache{",
        "tag": "return",
        "lineNum": 19
      },
      {
        "text": "\t\tcapacity: capacity,",
        "code": "\t\tcapacity: capacity,",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "\t\tcache:    make(map[int]*DNode),",
        "code": "\t\tcache:    make(map[int]*DNode),",
        "tag": "alloc",
        "lineNum": 21
      },
      {
        "text": "\t\thead:     head,",
        "code": "\t\thead:     head,",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "\t\ttail:     tail,",
        "code": "\t\ttail:     tail,",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "\t}",
        "code": "\t}",
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
    "rawCode": "package main\n\ntype DNode struct {\n\tkey, val   int\n\tprev, next *DNode\n}\n\ntype LRUCache struct {\n\tcapacity   int\n\tcache      map[int]*DNode\n\thead, tail *DNode\n}\n\nfunc LRUConstructor(capacity int) LRUCache {\n\thead := &DNode{}\n\ttail := &DNode{}\n\thead.next = tail\n\ttail.prev = head\n\treturn LRUCache{\n\t\tcapacity: capacity,\n\t\tcache:    make(map[int]*DNode),\n\t\thead:     head,\n\t\ttail:     tail,\n\t}\n}",
    "explanations": {
      "def": "Define DNode and LRUCache structs along with constructor.",
      "pointer": "Link dummy head.next = tail and tail.prev = head.",
      "return": "Return initialized LRUCache struct.",
      "comment": "LRU Cache architecture.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "alloc": "Executes [alloc] operation in this algorithm step."
    },
    "notes": "Combining a hash map with a doubly linked list delivers O(1) gets, puts, and evictions."
  }
];
})(typeof window !== 'undefined' ? window : global);
