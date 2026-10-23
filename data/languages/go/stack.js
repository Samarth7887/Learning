/**
 * SynapseCS Language-Specific Implementation: GO - stack
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['go'] = window.DSA_LANG_CODE['go'] || {};
  window.DSA_LANG_CODE['go']['stack'] = [
  {
    "id": "stack-array-impl",
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
        "text": "type Stack struct {",
        "code": "type Stack struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tdata []int",
        "code": "\tdata []int",
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
        "text": "func NewStack() *Stack {",
        "code": "func NewStack() *Stack {",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "\treturn &Stack{data: []int{}}",
        "code": "\treturn &Stack{data: []int{}}",
        "tag": "return",
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
        "text": "func (s *Stack) Push(val int) {",
        "code": "func (s *Stack) Push(val int) {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "\ts.data = append(s.data, val)",
        "code": "\ts.data = append(s.data, val)",
        "tag": "mutate",
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
        "text": "func (s *Stack) Pop() int {",
        "code": "func (s *Stack) Pop() int {",
        "tag": "def",
        "lineNum": 15
      },
      {
        "text": "\tif len(s.data) == 0 {",
        "code": "\tif len(s.data) == 0 {",
        "tag": "def",
        "lineNum": 16
      },
      {
        "text": "\t\treturn -1",
        "code": "\t\treturn -1",
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
        "text": "\tidx := len(s.data) - 1",
        "code": "\tidx := len(s.data) - 1",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "\tval := s.data[idx]",
        "code": "\tval := s.data[idx]",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "\ts.data = s.data[:idx]",
        "code": "\ts.data = s.data[:idx]",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "\treturn val",
        "code": "\treturn val",
        "tag": "return",
        "lineNum": 22
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 23
      }
    ],
    "rawCode": "package main\n\ntype Stack struct {\n\tdata []int\n}\n\nfunc NewStack() *Stack {\n\treturn &Stack{data: []int{}}\n}\n\nfunc (s *Stack) Push(val int) {\n\ts.data = append(s.data, val)\n}\n\nfunc (s *Stack) Pop() int {\n\tif len(s.data) == 0 {\n\t\treturn -1\n\t}\n\tidx := len(s.data) - 1\n\tval := s.data[idx]\n\ts.data = s.data[:idx]\n\treturn val\n}",
    "explanations": {
      "def": "Define Stack struct and NewStack, Push, Pop methods.",
      "mutate": "Append to slice via append() or shrink slice via s.data[:idx].",
      "return": "Return popped value.",
      "comment": "Array stack in Go.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Go slice append() and reslicing provide amortized O(1) stack operations."
  },
  {
    "id": "stack-ll-impl",
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
        "text": "type SNode struct {",
        "code": "type SNode struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tval  int",
        "code": "\tval  int",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tnext *SNode",
        "code": "\tnext *SNode",
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
        "text": "type LinkedStack struct {",
        "code": "type LinkedStack struct {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "\ttop *SNode",
        "code": "\ttop *SNode",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "}",
        "code": "}",
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
        "text": "func NewLinkedStack() *LinkedStack {",
        "code": "func NewLinkedStack() *LinkedStack {",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "\treturn &LinkedStack{}",
        "code": "\treturn &LinkedStack{}",
        "tag": "return",
        "lineNum": 13
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "func (s *LinkedStack) Push(val int) {",
        "code": "func (s *LinkedStack) Push(val int) {",
        "tag": "def",
        "lineNum": 16
      },
      {
        "text": "\ts.top = &SNode{val: val, next: s.top}",
        "code": "\ts.top = &SNode{val: val, next: s.top}",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "func (s *LinkedStack) Pop() int {",
        "code": "func (s *LinkedStack) Pop() int {",
        "tag": "def",
        "lineNum": 20
      },
      {
        "text": "\tif s.top == nil {",
        "code": "\tif s.top == nil {",
        "tag": "branch",
        "lineNum": 21
      },
      {
        "text": "\t\treturn -1",
        "code": "\t\treturn -1",
        "tag": "return",
        "lineNum": 22
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "\tval := s.top.val",
        "code": "\tval := s.top.val",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "\ts.top = s.top.next",
        "code": "\ts.top = s.top.next",
        "tag": "pointer",
        "lineNum": 25
      },
      {
        "text": "\treturn val",
        "code": "\treturn val",
        "tag": "return",
        "lineNum": 26
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 27
      }
    ],
    "rawCode": "package main\n\ntype SNode struct {\n\tval  int\n\tnext *SNode\n}\n\ntype LinkedStack struct {\n\ttop *SNode\n}\n\nfunc NewLinkedStack() *LinkedStack {\n\treturn &LinkedStack{}\n}\n\nfunc (s *LinkedStack) Push(val int) {\n\ts.top = &SNode{val: val, next: s.top}\n}\n\nfunc (s *LinkedStack) Pop() int {\n\tif s.top == nil {\n\t\treturn -1\n\t}\n\tval := s.top.val\n\ts.top = s.top.next\n\treturn val\n}",
    "explanations": {
      "def": "Define SNode and LinkedStack structs.",
      "branch": "Check if s.top == nil.",
      "pointer": "Advance s.top = s.top.next.",
      "return": "Return popped integer val.",
      "comment": "Linked stack.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Pushing prepends a new node to the linked chain in O(1) time."
  },
  {
    "id": "stack-valid-parens",
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
        "text": "func isValid(s string) bool {",
        "code": "func isValid(s string) bool {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tstack := []rune{}",
        "code": "\tstack := []rune{}",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tpairs := map[rune]rune{",
        "code": "\tpairs := map[rune]rune{",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "\t\t')': '(',",
        "code": "\t\t')': '(',",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "\t\t'}': '{',",
        "code": "\t\t'}': '{',",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "\t\t']': '[',",
        "code": "\t\t']': '[',",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "\t}",
        "code": "\t}",
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
        "text": "\tfor _, ch := range s {",
        "code": "\tfor _, ch := range s {",
        "tag": "loop",
        "lineNum": 11
      },
      {
        "text": "\t\tif open, isClosing := pairs[ch]; isClosing {",
        "code": "\t\tif open, isClosing := pairs[ch]; isClosing {",
        "tag": "branch",
        "lineNum": 12
      },
      {
        "text": "\t\t\tif len(stack) == 0 || stack[len(stack)-1] != open {",
        "code": "\t\t\tif len(stack) == 0 || stack[len(stack)-1] != open {",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "\t\t\t\treturn false",
        "code": "\t\t\t\treturn false",
        "tag": "return",
        "lineNum": 14
      },
      {
        "text": "\t\t\t}",
        "code": "\t\t\t}",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\t\t\tstack = stack[:len(stack)-1]",
        "code": "\t\t\tstack = stack[:len(stack)-1]",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "\t\t} else {",
        "code": "\t\t} else {",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "\t\t\tstack = append(stack, ch)",
        "code": "\t\t\tstack = append(stack, ch)",
        "tag": "mutate",
        "lineNum": 18
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "\treturn len(stack) == 0",
        "code": "\treturn len(stack) == 0",
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
    "rawCode": "package main\n\nfunc isValid(s string) bool {\n\tstack := []rune{}\n\tpairs := map[rune]rune{\n\t\t')': '(',\n\t\t'}': '{',\n\t\t']': '[',\n\t}\n\n\tfor _, ch := range s {\n\t\tif open, isClosing := pairs[ch]; isClosing {\n\t\t\tif len(stack) == 0 || stack[len(stack)-1] != open {\n\t\t\t\treturn false\n\t\t\t}\n\t\t\tstack = stack[:len(stack)-1]\n\t\t} else {\n\t\t\tstack = append(stack, ch)\n\t\t}\n\t}\n\treturn len(stack) == 0\n}",
    "explanations": {
      "def": "Define isValid validating balanced brackets.",
      "loop": "Iterate over string runes using range.",
      "branch": "If closing bracket, verify match with top of stack; else push.",
      "mutate": "Slice stack[:len-1] to pop or append() to push.",
      "return": "Return boolean indicating whether stack is empty.",
      "comment": "Parentheses validation.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Using map lookup neatly handles opening vs closing bracket validation in O(N) time."
  },
  {
    "id": "stack-min",
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
        "text": "type MinStack struct {",
        "code": "type MinStack struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tstack    []int",
        "code": "\tstack    []int",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tminStack []int",
        "code": "\tminStack []int",
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
        "text": "func MinStackConstructor() MinStack {",
        "code": "func MinStackConstructor() MinStack {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "\treturn MinStack{",
        "code": "\treturn MinStack{",
        "tag": "return",
        "lineNum": 9
      },
      {
        "text": "\t\tstack:    []int{},",
        "code": "\t\tstack:    []int{},",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "\t\tminStack: []int{},",
        "code": "\t\tminStack: []int{},",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
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
        "text": "func (m *MinStack) Push(val int) {",
        "code": "func (m *MinStack) Push(val int) {",
        "tag": "def",
        "lineNum": 15
      },
      {
        "text": "\tm.stack = append(m.stack, val)",
        "code": "\tm.stack = append(m.stack, val)",
        "tag": "mutate",
        "lineNum": 16
      },
      {
        "text": "\tif len(m.minStack) == 0 || val <= m.minStack[len(m.minStack)-1] {",
        "code": "\tif len(m.minStack) == 0 || val <= m.minStack[len(m.minStack)-1] {",
        "tag": "def",
        "lineNum": 17
      },
      {
        "text": "\t\tm.minStack = append(m.minStack, val)",
        "code": "\t\tm.minStack = append(m.minStack, val)",
        "tag": "mutate",
        "lineNum": 18
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "func (m *MinStack) GetMin() int {",
        "code": "func (m *MinStack) GetMin() int {",
        "tag": "def",
        "lineNum": 22
      },
      {
        "text": "\treturn m.minStack[len(m.minStack)-1]",
        "code": "\treturn m.minStack[len(m.minStack)-1]",
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
    "rawCode": "package main\n\ntype MinStack struct {\n\tstack    []int\n\tminStack []int\n}\n\nfunc MinStackConstructor() MinStack {\n\treturn MinStack{\n\t\tstack:    []int{},\n\t\tminStack: []int{},\n\t}\n}\n\nfunc (m *MinStack) Push(val int) {\n\tm.stack = append(m.stack, val)\n\tif len(m.minStack) == 0 || val <= m.minStack[len(m.minStack)-1] {\n\t\tm.minStack = append(m.minStack, val)\n\t}\n}\n\nfunc (m *MinStack) GetMin() int {\n\treturn m.minStack[len(m.minStack)-1]\n}",
    "explanations": {
      "def": "Define MinStack struct with primary and minimum slices.",
      "mutate": "Append to stack and minStack.",
      "return": "Return last element of minStack in O(1) time.",
      "comment": "Min stack in Go.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "minStack keeps track of minimum values, allowing O(1) retrieval without scanning the stack."
  },
  {
    "id": "stack-next-greater",
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
        "text": "func nextGreaterElement(nums1 []int, nums2 []int) []int {",
        "code": "func nextGreaterElement(nums1 []int, nums2 []int) []int {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tnextMap := make(map[int]int)",
        "code": "\tnextMap := make(map[int]int)",
        "tag": "alloc",
        "lineNum": 4
      },
      {
        "text": "\tstack := []int{}",
        "code": "\tstack := []int{}",
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
        "text": "\tfor _, num := range nums2 {",
        "code": "\tfor _, num := range nums2 {",
        "tag": "loop",
        "lineNum": 7
      },
      {
        "text": "\t\tfor len(stack) > 0 && stack[len(stack)-1] < num {",
        "code": "\t\tfor len(stack) > 0 && stack[len(stack)-1] < num {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "\t\t\tprev := stack[len(stack)-1]",
        "code": "\t\t\tprev := stack[len(stack)-1]",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "\t\t\tstack = stack[:len(stack)-1]",
        "code": "\t\t\tstack = stack[:len(stack)-1]",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "\t\t\tnextMap[prev] = num",
        "code": "\t\t\tnextMap[prev] = num",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "\t\tstack = append(stack, num)",
        "code": "\t\tstack = append(stack, num)",
        "tag": "mutate",
        "lineNum": 13
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\tres := make([]int, len(nums1))",
        "code": "\tres := make([]int, len(nums1))",
        "tag": "alloc",
        "lineNum": 16
      },
      {
        "text": "\tfor i, num := range nums1 {",
        "code": "\tfor i, num := range nums1 {",
        "tag": "loop",
        "lineNum": 17
      },
      {
        "text": "\t\tif next, exists := nextMap[num]; exists {",
        "code": "\t\tif next, exists := nextMap[num]; exists {",
        "tag": "branch",
        "lineNum": 18
      },
      {
        "text": "\t\t\tres[i] = next",
        "code": "\t\t\tres[i] = next",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "\t\t} else {",
        "code": "\t\t} else {",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "\t\t\tres[i] = -1",
        "code": "\t\t\tres[i] = -1",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "\treturn res",
        "code": "\treturn res",
        "tag": "return",
        "lineNum": 24
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 25
      }
    ],
    "rawCode": "package main\n\nfunc nextGreaterElement(nums1 []int, nums2 []int) []int {\n\tnextMap := make(map[int]int)\n\tstack := []int{}\n\n\tfor _, num := range nums2 {\n\t\tfor len(stack) > 0 && stack[len(stack)-1] < num {\n\t\t\tprev := stack[len(stack)-1]\n\t\t\tstack = stack[:len(stack)-1]\n\t\t\tnextMap[prev] = num\n\t\t}\n\t\tstack = append(stack, num)\n\t}\n\n\tres := make([]int, len(nums1))\n\tfor i, num := range nums1 {\n\t\tif next, exists := nextMap[num]; exists {\n\t\t\tres[i] = next\n\t\t} else {\n\t\t\tres[i] = -1\n\t\t}\n\t}\n\treturn res\n}",
    "explanations": {
      "def": "Define nextGreaterElement using monotonic stack and map.",
      "alloc": "Allocate nextMap and res slice.",
      "loop": "Iterate through nums2 with monotonic stack, then map to nums1.",
      "mutate": "Pop smaller numbers and record nextMap[prev] = num.",
      "return": "Return res slice.",
      "comment": "Monotonic stack.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "branch": "Executes [branch] operation in this algorithm step."
    },
    "notes": "Monotonic stack pre-computes next greater values for nums2 in O(N) time."
  },
  {
    "id": "stack-daily-temperatures",
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
        "text": "func dailyTemperatures(temperatures []int) []int {",
        "code": "func dailyTemperatures(temperatures []int) []int {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tn := len(temperatures)",
        "code": "\tn := len(temperatures)",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tres := make([]int, n)",
        "code": "\tres := make([]int, n)",
        "tag": "alloc",
        "lineNum": 5
      },
      {
        "text": "\tstack := []int{}",
        "code": "\tstack := []int{}",
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
        "text": "\tfor i, temp := range temperatures {",
        "code": "\tfor i, temp := range temperatures {",
        "tag": "loop",
        "lineNum": 8
      },
      {
        "text": "\t\tfor len(stack) > 0 && temperatures[stack[len(stack)-1]] < temp {",
        "code": "\t\tfor len(stack) > 0 && temperatures[stack[len(stack)-1]] < temp {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "\t\t\tprevIdx := stack[len(stack)-1]",
        "code": "\t\t\tprevIdx := stack[len(stack)-1]",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "\t\t\tstack = stack[:len(stack)-1]",
        "code": "\t\t\tstack = stack[:len(stack)-1]",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "\t\t\tres[prevIdx] = i - prevIdx",
        "code": "\t\t\tres[prevIdx] = i - prevIdx",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "\t\tstack = append(stack, i)",
        "code": "\t\tstack = append(stack, i)",
        "tag": "mutate",
        "lineNum": 14
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\treturn res",
        "code": "\treturn res",
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
    "rawCode": "package main\n\nfunc dailyTemperatures(temperatures []int) []int {\n\tn := len(temperatures)\n\tres := make([]int, n)\n\tstack := []int{}\n\n\tfor i, temp := range temperatures {\n\t\tfor len(stack) > 0 && temperatures[stack[len(stack)-1]] < temp {\n\t\t\tprevIdx := stack[len(stack)-1]\n\t\t\tstack = stack[:len(stack)-1]\n\t\t\tres[prevIdx] = i - prevIdx\n\t\t}\n\t\tstack = append(stack, i)\n\t}\n\treturn res\n}",
    "explanations": {
      "def": "Define dailyTemperatures function.",
      "alloc": "Allocate zero-initialized result slice.",
      "loop": "Iterate over temperatures while popping cooler day indices.",
      "mutate": "Calculate days delta: res[prevIdx] = i - prevIdx.",
      "return": "Return res.",
      "comment": "Daily temperatures in Go.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Indices in stack represent days awaiting warmer temperatures; resolved in O(N) total time."
  },
  {
    "id": "stack-eval-rpn",
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
        "text": "import \"strconv\"",
        "code": "import \"strconv\"",
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
        "text": "func evalRPN(tokens []string) int {",
        "code": "func evalRPN(tokens []string) int {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "\tstack := []int{}",
        "code": "\tstack := []int{}",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "\tfor _, t := range tokens {",
        "code": "\tfor _, t := range tokens {",
        "tag": "loop",
        "lineNum": 7
      },
      {
        "text": "\t\tswitch t {",
        "code": "\t\tswitch t {",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "\t\tcase \"+\":",
        "code": "\t\tcase \"+\":",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "\t\t\tb, a := stack[len(stack)-1], stack[len(stack)-2]",
        "code": "\t\t\tb, a := stack[len(stack)-1], stack[len(stack)-2]",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "\t\t\tstack = stack[:len(stack)-2]",
        "code": "\t\t\tstack = stack[:len(stack)-2]",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "\t\t\tstack = append(stack, a+b)",
        "code": "\t\t\tstack = append(stack, a+b)",
        "tag": "mutate",
        "lineNum": 12
      },
      {
        "text": "\t\tcase \"-\":",
        "code": "\t\tcase \"-\":",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "\t\t\tb, a := stack[len(stack)-1], stack[len(stack)-2]",
        "code": "\t\t\tb, a := stack[len(stack)-1], stack[len(stack)-2]",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "\t\t\tstack = stack[:len(stack)-2]",
        "code": "\t\t\tstack = stack[:len(stack)-2]",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\t\t\tstack = append(stack, a-b)",
        "code": "\t\t\tstack = append(stack, a-b)",
        "tag": "mutate",
        "lineNum": 16
      },
      {
        "text": "\t\tcase \"*\":",
        "code": "\t\tcase \"*\":",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "\t\t\tb, a := stack[len(stack)-1], stack[len(stack)-2]",
        "code": "\t\t\tb, a := stack[len(stack)-1], stack[len(stack)-2]",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "\t\t\tstack = stack[:len(stack)-2]",
        "code": "\t\t\tstack = stack[:len(stack)-2]",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "\t\t\tstack = append(stack, a*b)",
        "code": "\t\t\tstack = append(stack, a*b)",
        "tag": "mutate",
        "lineNum": 20
      },
      {
        "text": "\t\tcase \"/\":",
        "code": "\t\tcase \"/\":",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "\t\t\tb, a := stack[len(stack)-1], stack[len(stack)-2]",
        "code": "\t\t\tb, a := stack[len(stack)-1], stack[len(stack)-2]",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "\t\t\tstack = stack[:len(stack)-2]",
        "code": "\t\t\tstack = stack[:len(stack)-2]",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "\t\t\tstack = append(stack, a/b)",
        "code": "\t\t\tstack = append(stack, a/b)",
        "tag": "mutate",
        "lineNum": 24
      },
      {
        "text": "\t\tdefault:",
        "code": "\t\tdefault:",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "\t\t\tval, _ := strconv.Atoi(t)",
        "code": "\t\t\tval, _ := strconv.Atoi(t)",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "\t\t\tstack = append(stack, val)",
        "code": "\t\t\tstack = append(stack, val)",
        "tag": "mutate",
        "lineNum": 27
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 28
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 29
      },
      {
        "text": "\treturn stack[0]",
        "code": "\treturn stack[0]",
        "tag": "return",
        "lineNum": 30
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 31
      }
    ],
    "rawCode": "package main\n\nimport \"strconv\"\n\nfunc evalRPN(tokens []string) int {\n\tstack := []int{}\n\tfor _, t := range tokens {\n\t\tswitch t {\n\t\tcase \"+\":\n\t\t\tb, a := stack[len(stack)-1], stack[len(stack)-2]\n\t\t\tstack = stack[:len(stack)-2]\n\t\t\tstack = append(stack, a+b)\n\t\tcase \"-\":\n\t\t\tb, a := stack[len(stack)-1], stack[len(stack)-2]\n\t\t\tstack = stack[:len(stack)-2]\n\t\t\tstack = append(stack, a-b)\n\t\tcase \"*\":\n\t\t\tb, a := stack[len(stack)-1], stack[len(stack)-2]\n\t\t\tstack = stack[:len(stack)-2]\n\t\t\tstack = append(stack, a*b)\n\t\tcase \"/\":\n\t\t\tb, a := stack[len(stack)-1], stack[len(stack)-2]\n\t\t\tstack = stack[:len(stack)-2]\n\t\t\tstack = append(stack, a/b)\n\t\tdefault:\n\t\t\tval, _ := strconv.Atoi(t)\n\t\t\tstack = append(stack, val)\n\t\t}\n\t}\n\treturn stack[0]\n}",
    "explanations": {
      "def": "Define evalRPN evaluating postfix expressions.",
      "loop": "Iterate over tokens via range.",
      "mutate": "Pop two operands, apply operator, and append result.",
      "return": "Return evaluated result: stack[0].",
      "comment": "Reverse Polish Notation.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "In Go, switch statement cleanly handles operators and strconv.Atoi parses integers."
  },
  {
    "id": "stack-queue-using-stacks",
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
        "text": "type MyQueue struct {",
        "code": "type MyQueue struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tinStack  []int",
        "code": "\tinStack  []int",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\toutStack []int",
        "code": "\toutStack []int",
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
        "text": "func QueueConstructor() MyQueue {",
        "code": "func QueueConstructor() MyQueue {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "\treturn MyQueue{",
        "code": "\treturn MyQueue{",
        "tag": "return",
        "lineNum": 9
      },
      {
        "text": "\t\tinStack:  []int{},",
        "code": "\t\tinStack:  []int{},",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "\t\toutStack: []int{},",
        "code": "\t\toutStack: []int{},",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
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
        "text": "func (q *MyQueue) Push(x int) {",
        "code": "func (q *MyQueue) Push(x int) {",
        "tag": "def",
        "lineNum": 15
      },
      {
        "text": "\tq.inStack = append(q.inStack, x)",
        "code": "\tq.inStack = append(q.inStack, x)",
        "tag": "mutate",
        "lineNum": 16
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "func (q *MyQueue) Pop() int {",
        "code": "func (q *MyQueue) Pop() int {",
        "tag": "def",
        "lineNum": 19
      },
      {
        "text": "\tif len(q.outStack) == 0 {",
        "code": "\tif len(q.outStack) == 0 {",
        "tag": "def",
        "lineNum": 20
      },
      {
        "text": "\t\tfor len(q.inStack) > 0 {",
        "code": "\t\tfor len(q.inStack) > 0 {",
        "tag": "def",
        "lineNum": 21
      },
      {
        "text": "\t\t\tlast := q.inStack[len(q.inStack)-1]",
        "code": "\t\t\tlast := q.inStack[len(q.inStack)-1]",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "\t\t\tq.inStack = q.inStack[:len(q.inStack)-1]",
        "code": "\t\t\tq.inStack = q.inStack[:len(q.inStack)-1]",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "\t\t\tq.outStack = append(q.outStack, last)",
        "code": "\t\t\tq.outStack = append(q.outStack, last)",
        "tag": "mutate",
        "lineNum": 24
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "\tval := q.outStack[len(q.outStack)-1]",
        "code": "\tval := q.outStack[len(q.outStack)-1]",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "\tq.outStack = q.outStack[:len(q.outStack)-1]",
        "code": "\tq.outStack = q.outStack[:len(q.outStack)-1]",
        "tag": "exec",
        "lineNum": 28
      },
      {
        "text": "\treturn val",
        "code": "\treturn val",
        "tag": "return",
        "lineNum": 29
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 30
      }
    ],
    "rawCode": "package main\n\ntype MyQueue struct {\n\tinStack  []int\n\toutStack []int\n}\n\nfunc QueueConstructor() MyQueue {\n\treturn MyQueue{\n\t\tinStack:  []int{},\n\t\toutStack: []int{},\n\t}\n}\n\nfunc (q *MyQueue) Push(x int) {\n\tq.inStack = append(q.inStack, x)\n}\n\nfunc (q *MyQueue) Pop() int {\n\tif len(q.outStack) == 0 {\n\t\tfor len(q.inStack) > 0 {\n\t\t\tlast := q.inStack[len(q.inStack)-1]\n\t\t\tq.inStack = q.inStack[:len(q.inStack)-1]\n\t\t\tq.outStack = append(q.outStack, last)\n\t\t}\n\t}\n\tval := q.outStack[len(q.outStack)-1]\n\tq.outStack = q.outStack[:len(q.outStack)-1]\n\treturn val\n}",
    "explanations": {
      "def": "Define MyQueue using two stack slices.",
      "mutate": "Append to inStack, and pop from outStack.",
      "return": "Return popped value.",
      "comment": "Queue using stacks.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Elements are transferred only when outStack is empty, giving O(1) amortized cost per operation."
  },
  {
    "id": "stack-simplify-path",
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
        "text": "import \"strings\"",
        "code": "import \"strings\"",
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
        "text": "func simplifyPath(path string) string {",
        "code": "func simplifyPath(path string) string {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "\tparts := strings.Split(path, \"/\")",
        "code": "\tparts := strings.Split(path, \"/\")",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "\tstack := []string{}",
        "code": "\tstack := []string{}",
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
        "text": "\tfor _, part := range parts {",
        "code": "\tfor _, part := range parts {",
        "tag": "loop",
        "lineNum": 9
      },
      {
        "text": "\t\tif part == \"\" || part == \".\" {",
        "code": "\t\tif part == \"\" || part == \".\" {",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "\t\t\tcontinue",
        "code": "\t\t\tcontinue",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "\t\t} else if part == \"..\" {",
        "code": "\t\t} else if part == \"..\" {",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "\t\t\tif len(stack) > 0 {",
        "code": "\t\t\tif len(stack) > 0 {",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "\t\t\t\tstack = stack[:len(stack)-1]",
        "code": "\t\t\t\tstack = stack[:len(stack)-1]",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "\t\t\t}",
        "code": "\t\t\t}",
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
        "text": "\t\t\tstack = append(stack, part)",
        "code": "\t\t\tstack = append(stack, part)",
        "tag": "mutate",
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
        "text": "\treturn \"/\" + strings.Join(stack, \"/\")",
        "code": "\treturn \"/\" + strings.Join(stack, \"/\")",
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
    "rawCode": "package main\n\nimport \"strings\"\n\nfunc simplifyPath(path string) string {\n\tparts := strings.Split(path, \"/\")\n\tstack := []string{}\n\n\tfor _, part := range parts {\n\t\tif part == \"\" || part == \".\" {\n\t\t\tcontinue\n\t\t} else if part == \"..\" {\n\t\t\tif len(stack) > 0 {\n\t\t\t\tstack = stack[:len(stack)-1]\n\t\t\t}\n\t\t} else {\n\t\t\tstack = append(stack, part)\n\t\t}\n\t}\n\treturn \"/\" + strings.Join(stack, \"/\")\n}",
    "explanations": {
      "def": "Define simplifyPath processing path segments.",
      "loop": "Iterate over path segments.",
      "branch": "Ignore empty and \".\" components; pop stack on \"..\"; otherwise push component.",
      "mutate": "Pop from stack or append directory name.",
      "return": "Return \"/\" + strings.Join(stack, \"/\").",
      "comment": "Unix path simplification.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "strings.Join cleanly formats canonical path segments separated by slashes."
  },
  {
    "id": "stack-histogram",
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
        "text": "func largestRectangleArea(heights []int) int {",
        "code": "func largestRectangleArea(heights []int) int {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tstack := []int{}",
        "code": "\tstack := []int{}",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tmaxArea := 0",
        "code": "\tmaxArea := 0",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "\textended := append(heights, 0)",
        "code": "\textended := append(heights, 0)",
        "tag": "mutate",
        "lineNum": 6
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "\tfor i, h := range extended {",
        "code": "\tfor i, h := range extended {",
        "tag": "loop",
        "lineNum": 8
      },
      {
        "text": "\t\tfor len(stack) > 0 && extended[stack[len(stack)-1]] > h {",
        "code": "\t\tfor len(stack) > 0 && extended[stack[len(stack)-1]] > h {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "\t\t\theight := extended[stack[len(stack)-1]]",
        "code": "\t\t\theight := extended[stack[len(stack)-1]]",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "\t\t\tstack = stack[:len(stack)-1]",
        "code": "\t\t\tstack = stack[:len(stack)-1]",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "\t\t\twidth := i",
        "code": "\t\t\twidth := i",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "\t\t\tif len(stack) > 0 {",
        "code": "\t\t\tif len(stack) > 0 {",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "\t\t\t\twidth = i - stack[len(stack)-1] - 1",
        "code": "\t\t\t\twidth = i - stack[len(stack)-1] - 1",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "\t\t\t}",
        "code": "\t\t\t}",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\t\t\tarea := height * width",
        "code": "\t\t\tarea := height * width",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "\t\t\tif area > maxArea {",
        "code": "\t\t\tif area > maxArea {",
        "tag": "branch",
        "lineNum": 17
      },
      {
        "text": "\t\t\t\tmaxArea = area",
        "code": "\t\t\t\tmaxArea = area",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "\t\t\t}",
        "code": "\t\t\t}",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "\t\tstack = append(stack, i)",
        "code": "\t\tstack = append(stack, i)",
        "tag": "mutate",
        "lineNum": 21
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "\treturn maxArea",
        "code": "\treturn maxArea",
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
    "rawCode": "package main\n\nfunc largestRectangleArea(heights []int) int {\n\tstack := []int{}\n\tmaxArea := 0\n\textended := append(heights, 0)\n\n\tfor i, h := range extended {\n\t\tfor len(stack) > 0 && extended[stack[len(stack)-1]] > h {\n\t\t\theight := extended[stack[len(stack)-1]]\n\t\t\tstack = stack[:len(stack)-1]\n\t\t\twidth := i\n\t\t\tif len(stack) > 0 {\n\t\t\t\twidth = i - stack[len(stack)-1] - 1\n\t\t\t}\n\t\t\tarea := height * width\n\t\t\tif area > maxArea {\n\t\t\t\tmaxArea = area\n\t\t\t}\n\t\t}\n\t\tstack = append(stack, i)\n\t}\n\treturn maxArea\n}",
    "explanations": {
      "def": "Define largestRectangleArea using monotonic stack.",
      "loop": "Iterate through heights maintaining increasing order.",
      "mutate": "Pop bar, calculate rectangle area = height * width, update maxArea.",
      "return": "Return maxArea.",
      "comment": "Histogram calculation.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "branch": "Executes [branch] operation in this algorithm step."
    },
    "notes": "Sentinel 0 at the end flushes all remaining bars from the stack without an extra post-loop."
  }
];
})(typeof window !== 'undefined' ? window : global);
