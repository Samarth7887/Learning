/**
 * SynapseCS Language-Specific Implementation: GO - queue
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['go'] = window.DSA_LANG_CODE['go'] || {};
  window.DSA_LANG_CODE['go']['queue'] = [
  {
    "id": "queue-array-impl",
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
        "text": "type Queue struct {",
        "code": "type Queue struct {",
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
        "text": "func NewQueue() *Queue {",
        "code": "func NewQueue() *Queue {",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "\treturn &Queue{data: []int{}}",
        "code": "\treturn &Queue{data: []int{}}",
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
        "text": "func (q *Queue) Enqueue(val int) {",
        "code": "func (q *Queue) Enqueue(val int) {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "\tq.data = append(q.data, val)",
        "code": "\tq.data = append(q.data, val)",
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
        "text": "func (q *Queue) Dequeue() int {",
        "code": "func (q *Queue) Dequeue() int {",
        "tag": "def",
        "lineNum": 15
      },
      {
        "text": "\tif len(q.data) == 0 {",
        "code": "\tif len(q.data) == 0 {",
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
        "text": "\tval := q.data[0]",
        "code": "\tval := q.data[0]",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "\tq.data = q.data[1:]",
        "code": "\tq.data = q.data[1:]",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "\treturn val",
        "code": "\treturn val",
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
    "rawCode": "package main\n\ntype Queue struct {\n\tdata []int\n}\n\nfunc NewQueue() *Queue {\n\treturn &Queue{data: []int{}}\n}\n\nfunc (q *Queue) Enqueue(val int) {\n\tq.data = append(q.data, val)\n}\n\nfunc (q *Queue) Dequeue() int {\n\tif len(q.data) == 0 {\n\t\treturn -1\n\t}\n\tval := q.data[0]\n\tq.data = q.data[1:]\n\treturn val\n}",
    "explanations": {
      "def": "Define Queue struct and methods NewQueue, Enqueue, and Dequeue.",
      "mutate": "Append to slice via append() or reslice q.data[1:] on dequeue.",
      "return": "Return dequeued element.",
      "comment": "Go queue.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Reslicing q.data[1:] in Go adjusts the slice pointer in O(1) time without moving elements."
  },
  {
    "id": "queue-linkedlist-impl",
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
        "text": "type QNode struct {",
        "code": "type QNode struct {",
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
        "text": "\tnext *QNode",
        "code": "\tnext *QNode",
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
        "text": "type LinkedQueue struct {",
        "code": "type LinkedQueue struct {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "\tfront *QNode",
        "code": "\tfront *QNode",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "\trear  *QNode",
        "code": "\trear  *QNode",
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
        "text": "func NewLinkedQueue() *LinkedQueue {",
        "code": "func NewLinkedQueue() *LinkedQueue {",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "\treturn &LinkedQueue{}",
        "code": "\treturn &LinkedQueue{}",
        "tag": "return",
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
        "text": "func (q *LinkedQueue) Enqueue(val int) {",
        "code": "func (q *LinkedQueue) Enqueue(val int) {",
        "tag": "def",
        "lineNum": 17
      },
      {
        "text": "\tnode := &QNode{val: val}",
        "code": "\tnode := &QNode{val: val}",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "\tif q.rear == nil {",
        "code": "\tif q.rear == nil {",
        "tag": "branch",
        "lineNum": 19
      },
      {
        "text": "\t\tq.front = node",
        "code": "\t\tq.front = node",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "\t\tq.rear = node",
        "code": "\t\tq.rear = node",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "\t\treturn",
        "code": "\t\treturn",
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
        "text": "\tq.rear.next = node",
        "code": "\tq.rear.next = node",
        "tag": "pointer",
        "lineNum": 24
      },
      {
        "text": "\tq.rear = node",
        "code": "\tq.rear = node",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "func (q *LinkedQueue) Dequeue() int {",
        "code": "func (q *LinkedQueue) Dequeue() int {",
        "tag": "def",
        "lineNum": 28
      },
      {
        "text": "\tif q.front == nil {",
        "code": "\tif q.front == nil {",
        "tag": "branch",
        "lineNum": 29
      },
      {
        "text": "\t\treturn -1",
        "code": "\t\treturn -1",
        "tag": "return",
        "lineNum": 30
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 31
      },
      {
        "text": "\tval := q.front.val",
        "code": "\tval := q.front.val",
        "tag": "exec",
        "lineNum": 32
      },
      {
        "text": "\tq.front = q.front.next",
        "code": "\tq.front = q.front.next",
        "tag": "pointer",
        "lineNum": 33
      },
      {
        "text": "\tif q.front == nil {",
        "code": "\tif q.front == nil {",
        "tag": "branch",
        "lineNum": 34
      },
      {
        "text": "\t\tq.rear = nil",
        "code": "\t\tq.rear = nil",
        "tag": "init",
        "lineNum": 35
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 36
      },
      {
        "text": "\treturn val",
        "code": "\treturn val",
        "tag": "return",
        "lineNum": 37
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 38
      }
    ],
    "rawCode": "package main\n\ntype QNode struct {\n\tval  int\n\tnext *QNode\n}\n\ntype LinkedQueue struct {\n\tfront *QNode\n\trear  *QNode\n}\n\nfunc NewLinkedQueue() *LinkedQueue {\n\treturn &LinkedQueue{}\n}\n\nfunc (q *LinkedQueue) Enqueue(val int) {\n\tnode := &QNode{val: val}\n\tif q.rear == nil {\n\t\tq.front = node\n\t\tq.rear = node\n\t\treturn\n\t}\n\tq.rear.next = node\n\tq.rear = node\n}\n\nfunc (q *LinkedQueue) Dequeue() int {\n\tif q.front == nil {\n\t\treturn -1\n\t}\n\tval := q.front.val\n\tq.front = q.front.next\n\tif q.front == nil {\n\t\tq.rear = nil\n\t}\n\treturn val\n}",
    "explanations": {
      "def": "Define QNode and LinkedQueue structs and methods.",
      "init": "Instantiate node literal &QNode{val: val}.",
      "branch": "Handle empty queue boundary conditions.",
      "pointer": "Update rear.next = node and front = front.next.",
      "return": "Return dequeued val.",
      "comment": "Linked queue in Go.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Linked queue provides unbounded capacity with garbage collection reclaiming unlinked nodes."
  },
  {
    "id": "queue-circular-array",
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
        "text": "type MyCircularQueue struct {",
        "code": "type MyCircularQueue struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tdata     []int",
        "code": "\tdata     []int",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tfront    int",
        "code": "\tfront    int",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "\trear     int",
        "code": "\trear     int",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "\tsize     int",
        "code": "\tsize     int",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "\tcapacity int",
        "code": "\tcapacity int",
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
        "text": "func CircularQueueConstructor(k int) MyCircularQueue {",
        "code": "func CircularQueueConstructor(k int) MyCircularQueue {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "\treturn MyCircularQueue{",
        "code": "\treturn MyCircularQueue{",
        "tag": "return",
        "lineNum": 12
      },
      {
        "text": "\t\tdata:     make([]int, k),",
        "code": "\t\tdata:     make([]int, k),",
        "tag": "alloc",
        "lineNum": 13
      },
      {
        "text": "\t\tfront:    0,",
        "code": "\t\tfront:    0,",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "\t\trear:     -1,",
        "code": "\t\trear:     -1,",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\t\tsize:     0,",
        "code": "\t\tsize:     0,",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "\t\tcapacity: k,",
        "code": "\t\tcapacity: k,",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "func (q *MyCircularQueue) EnQueue(value int) bool {",
        "code": "func (q *MyCircularQueue) EnQueue(value int) bool {",
        "tag": "def",
        "lineNum": 21
      },
      {
        "text": "\tif q.size == q.capacity {",
        "code": "\tif q.size == q.capacity {",
        "tag": "branch",
        "lineNum": 22
      },
      {
        "text": "\t\treturn false",
        "code": "\t\treturn false",
        "tag": "return",
        "lineNum": 23
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "\tq.rear = (q.rear + 1) % q.capacity",
        "code": "\tq.rear = (q.rear + 1) % q.capacity",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "\tq.data[q.rear] = value",
        "code": "\tq.data[q.rear] = value",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "\tq.size++",
        "code": "\tq.size++",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "\treturn true",
        "code": "\treturn true",
        "tag": "return",
        "lineNum": 28
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 29
      }
    ],
    "rawCode": "package main\n\ntype MyCircularQueue struct {\n\tdata     []int\n\tfront    int\n\trear     int\n\tsize     int\n\tcapacity int\n}\n\nfunc CircularQueueConstructor(k int) MyCircularQueue {\n\treturn MyCircularQueue{\n\t\tdata:     make([]int, k),\n\t\tfront:    0,\n\t\trear:     -1,\n\t\tsize:     0,\n\t\tcapacity: k,\n\t}\n}\n\nfunc (q *MyCircularQueue) EnQueue(value int) bool {\n\tif q.size == q.capacity {\n\t\treturn false\n\t}\n\tq.rear = (q.rear + 1) % q.capacity\n\tq.data[q.rear] = value\n\tq.size++\n\treturn true\n}",
    "explanations": {
      "def": "Define MyCircularQueue struct and constructor.",
      "alloc": "Allocate slice via make([]int, k).",
      "branch": "Return false if queue is full.",
      "return": "Return true on successful enqueue.",
      "comment": "Circular queue.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Ring buffer avoids memory shifts by wrapping indices with modulo arithmetic."
  },
  {
    "id": "queue-circular-deque",
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
        "text": "type MyCircularDeque struct {",
        "code": "type MyCircularDeque struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tdata     []int",
        "code": "\tdata     []int",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tfront    int",
        "code": "\tfront    int",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "\trear     int",
        "code": "\trear     int",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "\tsize     int",
        "code": "\tsize     int",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "\tcapacity int",
        "code": "\tcapacity int",
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
        "text": "func DequeConstructor(k int) MyCircularDeque {",
        "code": "func DequeConstructor(k int) MyCircularDeque {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "\treturn MyCircularDeque{",
        "code": "\treturn MyCircularDeque{",
        "tag": "return",
        "lineNum": 12
      },
      {
        "text": "\t\tdata:     make([]int, k),",
        "code": "\t\tdata:     make([]int, k),",
        "tag": "alloc",
        "lineNum": 13
      },
      {
        "text": "\t\tfront:    0,",
        "code": "\t\tfront:    0,",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "\t\trear:     0,",
        "code": "\t\trear:     0,",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\t\tsize:     0,",
        "code": "\t\tsize:     0,",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "\t\tcapacity: k,",
        "code": "\t\tcapacity: k,",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "func (d *MyCircularDeque) InsertFront(value int) bool {",
        "code": "func (d *MyCircularDeque) InsertFront(value int) bool {",
        "tag": "def",
        "lineNum": 21
      },
      {
        "text": "\tif d.size == d.capacity {",
        "code": "\tif d.size == d.capacity {",
        "tag": "branch",
        "lineNum": 22
      },
      {
        "text": "\t\treturn false",
        "code": "\t\treturn false",
        "tag": "return",
        "lineNum": 23
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "\td.front = (d.front - 1 + d.capacity) % d.capacity",
        "code": "\td.front = (d.front - 1 + d.capacity) % d.capacity",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "\td.data[d.front] = value",
        "code": "\td.data[d.front] = value",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "\td.size++",
        "code": "\td.size++",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "\treturn true",
        "code": "\treturn true",
        "tag": "return",
        "lineNum": 28
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 29
      }
    ],
    "rawCode": "package main\n\ntype MyCircularDeque struct {\n\tdata     []int\n\tfront    int\n\trear     int\n\tsize     int\n\tcapacity int\n}\n\nfunc DequeConstructor(k int) MyCircularDeque {\n\treturn MyCircularDeque{\n\t\tdata:     make([]int, k),\n\t\tfront:    0,\n\t\trear:     0,\n\t\tsize:     0,\n\t\tcapacity: k,\n\t}\n}\n\nfunc (d *MyCircularDeque) InsertFront(value int) bool {\n\tif d.size == d.capacity {\n\t\treturn false\n\t}\n\td.front = (d.front - 1 + d.capacity) % d.capacity\n\td.data[d.front] = value\n\td.size++\n\treturn true\n}",
    "explanations": {
      "def": "Define MyCircularDeque struct and InsertFront method.",
      "alloc": "Allocate slice using make([]int, k).",
      "branch": "Guard against full capacity.",
      "return": "Return true.",
      "comment": "Circular deque.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Adding capacity prevents negative index values when wrapping backwards."
  },
  {
    "id": "stack-using-queues",
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
        "text": "type MyStack struct {",
        "code": "type MyStack struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tq []int",
        "code": "\tq []int",
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
        "text": "func StackConstructor() MyStack {",
        "code": "func StackConstructor() MyStack {",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "\treturn MyStack{q: []int{}}",
        "code": "\treturn MyStack{q: []int{}}",
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
        "text": "func (s *MyStack) Push(x int) {",
        "code": "func (s *MyStack) Push(x int) {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "\ts.q = append(s.q, x)",
        "code": "\ts.q = append(s.q, x)",
        "tag": "mutate",
        "lineNum": 12
      },
      {
        "text": "\tfor i := 0; i < len(s.q)-1; i++ {",
        "code": "\tfor i := 0; i < len(s.q)-1; i++ {",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "\t\tval := s.q[0]",
        "code": "\t\tval := s.q[0]",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "\t\ts.q = s.q[1:]",
        "code": "\t\ts.q = s.q[1:]",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\t\ts.q = append(s.q, val)",
        "code": "\t\ts.q = append(s.q, val)",
        "tag": "mutate",
        "lineNum": 16
      },
      {
        "text": "\t}",
        "code": "\t}",
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
        "text": "func (s *MyStack) Pop() int {",
        "code": "func (s *MyStack) Pop() int {",
        "tag": "def",
        "lineNum": 20
      },
      {
        "text": "\tval := s.q[0]",
        "code": "\tval := s.q[0]",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "\ts.q = s.q[1:]",
        "code": "\ts.q = s.q[1:]",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "\treturn val",
        "code": "\treturn val",
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
    "rawCode": "package main\n\ntype MyStack struct {\n\tq []int\n}\n\nfunc StackConstructor() MyStack {\n\treturn MyStack{q: []int{}}\n}\n\nfunc (s *MyStack) Push(x int) {\n\ts.q = append(s.q, x)\n\tfor i := 0; i < len(s.q)-1; i++ {\n\t\tval := s.q[0]\n\t\ts.q = s.q[1:]\n\t\ts.q = append(s.q, val)\n\t}\n}\n\nfunc (s *MyStack) Pop() int {\n\tval := s.q[0]\n\ts.q = s.q[1:]\n\treturn val\n}",
    "explanations": {
      "def": "Define MyStack struct with single queue slice.",
      "mutate": "Append to slice and reslice s.q[1:].",
      "return": "Return popped value.",
      "comment": "Stack using queues.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Rotating the queue upon each push guarantees LIFO ordering at index 0."
  },
  {
    "id": "sliding-window-max",
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
        "text": "func maxSlidingWindow(nums []int, k int) []int {",
        "code": "func maxSlidingWindow(nums []int, k int) []int {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tif len(nums) == 0 || k == 0 {",
        "code": "\tif len(nums) == 0 || k == 0 {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "\t\treturn []int{}",
        "code": "\t\treturn []int{}",
        "tag": "return",
        "lineNum": 5
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "\tdeque := []int{}",
        "code": "\tdeque := []int{}",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "\tres := make([]int, 0, len(nums)-k+1)",
        "code": "\tres := make([]int, 0, len(nums)-k+1)",
        "tag": "alloc",
        "lineNum": 8
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "\tfor i, num := range nums {",
        "code": "\tfor i, num := range nums {",
        "tag": "loop",
        "lineNum": 10
      },
      {
        "text": "\t\tfor len(deque) > 0 && deque[0] < i-k+1 {",
        "code": "\t\tfor len(deque) > 0 && deque[0] < i-k+1 {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "\t\t\tdeque = deque[1:]",
        "code": "\t\t\tdeque = deque[1:]",
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
        "text": "\t\tfor len(deque) > 0 && nums[deque[len(deque)-1]] < num {",
        "code": "\t\tfor len(deque) > 0 && nums[deque[len(deque)-1]] < num {",
        "tag": "def",
        "lineNum": 14
      },
      {
        "text": "\t\t\tdeque = deque[:len(deque)-1]",
        "code": "\t\t\tdeque = deque[:len(deque)-1]",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "\t\tdeque = append(deque, i)",
        "code": "\t\tdeque = append(deque, i)",
        "tag": "mutate",
        "lineNum": 17
      },
      {
        "text": "\t\tif i >= k-1 {",
        "code": "\t\tif i >= k-1 {",
        "tag": "branch",
        "lineNum": 18
      },
      {
        "text": "\t\t\tres = append(res, nums[deque[0]])",
        "code": "\t\t\tres = append(res, nums[deque[0]])",
        "tag": "mutate",
        "lineNum": 19
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "\treturn res",
        "code": "\treturn res",
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
    "rawCode": "package main\n\nfunc maxSlidingWindow(nums []int, k int) []int {\n\tif len(nums) == 0 || k == 0 {\n\t\treturn []int{}\n\t}\n\tdeque := []int{}\n\tres := make([]int, 0, len(nums)-k+1)\n\n\tfor i, num := range nums {\n\t\tfor len(deque) > 0 && deque[0] < i-k+1 {\n\t\t\tdeque = deque[1:]\n\t\t}\n\t\tfor len(deque) > 0 && nums[deque[len(deque)-1]] < num {\n\t\t\tdeque = deque[:len(deque)-1]\n\t\t}\n\t\tdeque = append(deque, i)\n\t\tif i >= k-1 {\n\t\t\tres = append(res, nums[deque[0]])\n\t\t}\n\t}\n\treturn res\n}",
    "explanations": {
      "def": "Define maxSlidingWindow function.",
      "alloc": "Pre-allocate result slice capacity.",
      "loop": "Iterate over array and maintain monotonic deque.",
      "branch": "Evict indices outside sliding window: deque[0] < i - k + 1.",
      "mutate": "Pop smaller elements, append index, and append window maximum.",
      "return": "Return result slice res.",
      "comment": "Monotonic deque in Go.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Each index enters and leaves the deque at most once, yielding O(N) linear time complexity."
  },
  {
    "id": "first-unique-char",
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
        "text": "func firstUniqChar(s string) int {",
        "code": "func firstUniqChar(s string) int {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tcounts := [26]int{}",
        "code": "\tcounts := [26]int{}",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tfor _, ch := range s {",
        "code": "\tfor _, ch := range s {",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "\t\tcounts[ch-'a']++",
        "code": "\t\tcounts[ch-'a']++",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "\tfor i, ch := range s {",
        "code": "\tfor i, ch := range s {",
        "tag": "loop",
        "lineNum": 8
      },
      {
        "text": "\t\tif counts[ch-'a'] == 1 {",
        "code": "\t\tif counts[ch-'a'] == 1 {",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "\t\t\treturn i",
        "code": "\t\t\treturn i",
        "tag": "return",
        "lineNum": 10
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
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
        "text": "\treturn -1",
        "code": "\treturn -1",
        "tag": "return",
        "lineNum": 13
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 14
      }
    ],
    "rawCode": "package main\n\nfunc firstUniqChar(s string) int {\n\tcounts := [26]int{}\n\tfor _, ch := range s {\n\t\tcounts[ch-'a']++\n\t}\n\tfor i, ch := range s {\n\t\tif counts[ch-'a'] == 1 {\n\t\t\treturn i\n\t\t}\n\t}\n\treturn -1\n}",
    "explanations": {
      "def": "Define firstUniqChar taking string s.",
      "loop": "First loop counts frequencies, second loop finds first unique character.",
      "branch": "Check if character count equals 1.",
      "return": "Return index i or -1.",
      "comment": "Character counting.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Using a fixed-size 26-element array allocates on the stack with zero heap overhead."
  },
  {
    "id": "recent-counter",
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
        "text": "type RecentCounter struct {",
        "code": "type RecentCounter struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tcalls []int",
        "code": "\tcalls []int",
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
        "text": "func RecentCounterConstructor() RecentCounter {",
        "code": "func RecentCounterConstructor() RecentCounter {",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "\treturn RecentCounter{calls: []int{}}",
        "code": "\treturn RecentCounter{calls: []int{}}",
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
        "text": "func (r *RecentCounter) Ping(t int) int {",
        "code": "func (r *RecentCounter) Ping(t int) int {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "\tr.calls = append(r.calls, t)",
        "code": "\tr.calls = append(r.calls, t)",
        "tag": "mutate",
        "lineNum": 12
      },
      {
        "text": "\tfor len(r.calls) > 0 && r.calls[0] < t-3000 {",
        "code": "\tfor len(r.calls) > 0 && r.calls[0] < t-3000 {",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "\t\tr.calls = r.calls[1:]",
        "code": "\t\tr.calls = r.calls[1:]",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\treturn len(r.calls)",
        "code": "\treturn len(r.calls)",
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
    "rawCode": "package main\n\ntype RecentCounter struct {\n\tcalls []int\n}\n\nfunc RecentCounterConstructor() RecentCounter {\n\treturn RecentCounter{calls: []int{}}\n}\n\nfunc (r *RecentCounter) Ping(t int) int {\n\tr.calls = append(r.calls, t)\n\tfor len(r.calls) > 0 && r.calls[0] < t-3000 {\n\t\tr.calls = r.calls[1:]\n\t}\n\treturn len(r.calls)\n}",
    "explanations": {
      "def": "Define RecentCounter struct and Ping method.",
      "mutate": "Append new timestamp t.",
      "return": "Return len(r.calls).",
      "comment": "Rate limiter queue.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Reslicing discards outdated timestamps, keeping only the active window."
  },
  {
    "id": "rotting-oranges",
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
        "text": "type Point struct {",
        "code": "type Point struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tr, c int",
        "code": "\tr, c int",
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
        "text": "func orangesRotting(grid [][]int) int {",
        "code": "func orangesRotting(grid [][]int) int {",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "\trows, cols := len(grid), len(grid[0])",
        "code": "\trows, cols := len(grid), len(grid[0])",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "\tqueue := []Point{}",
        "code": "\tqueue := []Point{}",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "\tfresh := 0",
        "code": "\tfresh := 0",
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
        "text": "\tfor r := 0; r < rows; r++ {",
        "code": "\tfor r := 0; r < rows; r++ {",
        "tag": "loop",
        "lineNum": 12
      },
      {
        "text": "\t\tfor c := 0; c < cols; c++ {",
        "code": "\t\tfor c := 0; c < cols; c++ {",
        "tag": "loop",
        "lineNum": 13
      },
      {
        "text": "\t\t\tif grid[r][c] == 2 {",
        "code": "\t\t\tif grid[r][c] == 2 {",
        "tag": "branch",
        "lineNum": 14
      },
      {
        "text": "\t\t\t\tqueue = append(queue, Point{r, c})",
        "code": "\t\t\t\tqueue = append(queue, Point{r, c})",
        "tag": "mutate",
        "lineNum": 15
      },
      {
        "text": "\t\t\t} else if grid[r][c] == 1 {",
        "code": "\t\t\t} else if grid[r][c] == 1 {",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "\t\t\t\tfresh++",
        "code": "\t\t\t\tfresh++",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "\t\t\t}",
        "code": "\t\t\t}",
        "tag": "exec",
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
        "text": "\tif fresh == 0 {",
        "code": "\tif fresh == 0 {",
        "tag": "branch",
        "lineNum": 21
      },
      {
        "text": "\t\treturn 0",
        "code": "\t\treturn 0",
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
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "\tminutes := 0",
        "code": "\tminutes := 0",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "\tdirs := [][]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}",
        "code": "\tdirs := [][]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "\tfor len(queue) > 0 && fresh > 0 {",
        "code": "\tfor len(queue) > 0 && fresh > 0 {",
        "tag": "def",
        "lineNum": 27
      },
      {
        "text": "\t\tlevelSize := len(queue)",
        "code": "\t\tlevelSize := len(queue)",
        "tag": "exec",
        "lineNum": 28
      },
      {
        "text": "\t\tfor i := 0; i < levelSize; i++ {",
        "code": "\t\tfor i := 0; i < levelSize; i++ {",
        "tag": "loop",
        "lineNum": 29
      },
      {
        "text": "\t\t\tp := queue[0]",
        "code": "\t\t\tp := queue[0]",
        "tag": "exec",
        "lineNum": 30
      },
      {
        "text": "\t\t\tqueue = queue[1:]",
        "code": "\t\t\tqueue = queue[1:]",
        "tag": "exec",
        "lineNum": 31
      },
      {
        "text": "\t\t\tfor _, d := range dirs {",
        "code": "\t\t\tfor _, d := range dirs {",
        "tag": "loop",
        "lineNum": 32
      },
      {
        "text": "\t\t\t\tnr, nc := p.r+d[0], p.c+d[1]",
        "code": "\t\t\t\tnr, nc := p.r+d[0], p.c+d[1]",
        "tag": "exec",
        "lineNum": 33
      },
      {
        "text": "\t\t\t\tif nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == 1 {",
        "code": "\t\t\t\tif nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == 1 {",
        "tag": "branch",
        "lineNum": 34
      },
      {
        "text": "\t\t\t\t\tgrid[nr][nc] = 2",
        "code": "\t\t\t\t\tgrid[nr][nc] = 2",
        "tag": "exec",
        "lineNum": 35
      },
      {
        "text": "\t\t\t\t\tfresh--",
        "code": "\t\t\t\t\tfresh--",
        "tag": "exec",
        "lineNum": 36
      },
      {
        "text": "\t\t\t\t\tqueue = append(queue, Point{nr, nc})",
        "code": "\t\t\t\t\tqueue = append(queue, Point{nr, nc})",
        "tag": "mutate",
        "lineNum": 37
      },
      {
        "text": "\t\t\t\t}",
        "code": "\t\t\t\t}",
        "tag": "exec",
        "lineNum": 38
      },
      {
        "text": "\t\t\t}",
        "code": "\t\t\t}",
        "tag": "exec",
        "lineNum": 39
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 40
      },
      {
        "text": "\t\tminutes++",
        "code": "\t\tminutes++",
        "tag": "exec",
        "lineNum": 41
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 42
      },
      {
        "text": "\tif fresh == 0 {",
        "code": "\tif fresh == 0 {",
        "tag": "branch",
        "lineNum": 43
      },
      {
        "text": "\t\treturn minutes",
        "code": "\t\treturn minutes",
        "tag": "return",
        "lineNum": 44
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 45
      },
      {
        "text": "\treturn -1",
        "code": "\treturn -1",
        "tag": "return",
        "lineNum": 46
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 47
      }
    ],
    "rawCode": "package main\n\ntype Point struct {\n\tr, c int\n}\n\nfunc orangesRotting(grid [][]int) int {\n\trows, cols := len(grid), len(grid[0])\n\tqueue := []Point{}\n\tfresh := 0\n\n\tfor r := 0; r < rows; r++ {\n\t\tfor c := 0; c < cols; c++ {\n\t\t\tif grid[r][c] == 2 {\n\t\t\t\tqueue = append(queue, Point{r, c})\n\t\t\t} else if grid[r][c] == 1 {\n\t\t\t\tfresh++\n\t\t\t}\n\t\t}\n\t}\n\tif fresh == 0 {\n\t\treturn 0\n\t}\n\n\tminutes := 0\n\tdirs := [][]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}\n\tfor len(queue) > 0 && fresh > 0 {\n\t\tlevelSize := len(queue)\n\t\tfor i := 0; i < levelSize; i++ {\n\t\t\tp := queue[0]\n\t\t\tqueue = queue[1:]\n\t\t\tfor _, d := range dirs {\n\t\t\t\tnr, nc := p.r+d[0], p.c+d[1]\n\t\t\t\tif nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == 1 {\n\t\t\t\t\tgrid[nr][nc] = 2\n\t\t\t\t\tfresh--\n\t\t\t\t\tqueue = append(queue, Point{nr, nc})\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tminutes++\n\t}\n\tif fresh == 0 {\n\t\treturn minutes\n\t}\n\treturn -1\n}",
    "explanations": {
      "def": "Define orangesRotting using multi-source BFS.",
      "loop": "Traverse grid, and process BFS queue levels.",
      "branch": "Check grid boundaries and verify orange is fresh.",
      "mutate": "Mark orange rotten (grid[nr][nc] = 2), decrement fresh, append to queue.",
      "return": "Return minutes elapsed or -1.",
      "comment": "Multi-source BFS in Go.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Multi-source BFS explores rotten orange propagation concurrently level by level."
  }
];
})(typeof window !== 'undefined' ? window : global);
