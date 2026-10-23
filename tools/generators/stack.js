const { buildQuestionItem } = require('./helper');

function getStackQuestions() {
  return {
    c: [
      buildQuestionItem({
        id: 'stack-array-impl',
        code: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_SIZE 100

struct ArrayStack {
    int data[MAX_SIZE];
    int top;
};

struct ArrayStack* createStack() {
    struct ArrayStack* s = (struct ArrayStack*)malloc(sizeof(struct ArrayStack));
    s->top = -1;
    return s;
}

void push(struct ArrayStack* s, int val) {
    if (s->top < MAX_SIZE - 1) {
        s->data[++s->top] = val;
    }
}

int pop(struct ArrayStack* s) {
    if (s->top >= 0) {
        return s->data[s->top--];
    }
    return -1;
}`,
        explanations: {
          def: 'Define ArrayStack struct and operations push, pop, createStack.',
          alloc: 'Allocate stack struct on heap via malloc().',
          init: 'Initialize top pointer to -1.',
          branch: 'Check overflow/underflow boundaries.',
          mutate: 'Push value s->data[++s->top] = val or pop value s->data[s->top--].',
          return: 'Return popped integer or -1 on empty stack.',
          comment: 'Array stack in C.'
        },
        notes: 'Stack uses LIFO (last-in, first-out) order; fixed array implementation provides O(1) push and pop.'
      }),

      buildQuestionItem({
        id: 'stack-ll-impl',
        code: `#include <stdio.h>
#include <stdlib.h>

struct StackNode {
    int val;
    struct StackNode* next;
};

struct LinkedStack {
    struct StackNode* top;
};

struct LinkedStack* createLinkedStack() {
    struct LinkedStack* s = (struct LinkedStack*)malloc(sizeof(struct LinkedStack));
    s->top = NULL;
    return s;
}

void pushLinked(struct LinkedStack* s, int val) {
    struct StackNode* node = (struct StackNode*)malloc(sizeof(struct StackNode));
    node->val = val;
    node->next = s->top;
    s->top = node;
}

int popLinked(struct LinkedStack* s) {
    if (s->top == NULL) return -1;
    struct StackNode* temp = s->top;
    int val = temp->val;
    s->top = s->top->next;
    free(temp);
    return val;
}`,
        explanations: {
          def: 'Define StackNode and LinkedStack structs.',
          alloc: 'Allocate dynamic memory via malloc().',
          init: 'Set s->top = NULL.',
          branch: 'Check if stack is empty (s->top == NULL).',
          pointer: 'Update node->next = s->top and s->top = node.',
          mutate: 'Deallocate popped node with free(temp).',
          return: 'Return popped value.',
          comment: 'Linked stack implementation.'
        },
        notes: 'Linked stack grows dynamically without size limit; memory must be freed on pop to prevent memory leaks.'
      }),

      buildQuestionItem({
        id: 'stack-valid-parens',
        code: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool isValid(char* s) {
    int n = strlen(s);
    char stack[1000];
    int top = -1;

    for (int i = 0; i < n; i++) {
        char c = s[i];
        if (c == '(' || c == '{' || c == '[') {
            stack[++top] = c;
        } else {
            if (top == -1) return false;
            char open = stack[top--];
            if (c == ')' && open != '(') return false;
            if (c == '}' && open != '{') return false;
            if (c == ']' && open != '[') return false;
        }
    }
    return top == -1;
}`,
        explanations: {
          def: 'Define isValid validating balanced brackets.',
          init: 'Initialize character stack array and top = -1.',
          loop: 'Iterate over string characters with for loop.',
          branch: 'Push opening bracket, or verify matching closing bracket.',
          mutate: 'Push to stack[++top] or pop open = stack[top--].',
          return: 'Return true if all brackets matched (top == -1).',
          comment: 'Parentheses validation.'
        },
        notes: 'Stack holds unmatched opening brackets; encountering a mismatched closing bracket invalidates the string immediately.'
      }),

      buildQuestionItem({
        id: 'stack-min',
        code: `#include <stdio.h>
#include <stdlib.h>

struct MinStack {
    int stack[1000];
    int minStack[1000];
    int top;
};

struct MinStack* minStackCreate() {
    struct MinStack* s = (struct MinStack*)malloc(sizeof(struct MinStack));
    s->top = -1;
    return s;
}

void minStackPush(struct MinStack* obj, int val) {
    obj->stack[++obj->top] = val;
    if (obj->top == 0 || val < obj->minStack[obj->top - 1]) {
        obj->minStack[obj->top] = val;
    } else {
        obj->minStack[obj->top] = obj->minStack[obj->top - 1];
    }
}

int minStackGetMin(struct MinStack* obj) {
    return obj->minStack[obj->top];
}`,
        explanations: {
          def: 'Define MinStack struct with primary and minimum tracking stacks.',
          alloc: 'Allocate MinStack struct with malloc().',
          init: 'Initialize top = -1.',
          branch: 'Track minimum: store smaller of val and previous min.',
          mutate: 'Push val to stack and running minimum to minStack.',
          return: 'Return current minimum in O(1) time.',
          comment: 'Min stack.'
        },
        notes: 'Auxiliary minStack tracks the minimum value up to each stack height, supporting getMin() in O(1) time.'
      }),

      buildQuestionItem({
        id: 'stack-next-greater',
        code: `#include <stdio.h>
#include <stdlib.h>

int* nextGreaterElement(int* nums1, int nums1Size, int* nums2, int nums2Size, int* returnSize) {
    int* res = (int*)malloc(nums1Size * sizeof(int));
    *returnSize = nums1Size;

    for (int i = 0; i < nums1Size; i++) {
        int target = nums1[i];
        int foundIdx = -1;
        res[i] = -1;
        for (int j = 0; j < nums2Size; j++) {
            if (nums2[j] == target) {
                foundIdx = j;
                break;
            }
        }
        for (int j = foundIdx + 1; j < nums2Size; j++) {
            if (nums2[j] > target) {
                res[i] = nums2[j];
                break;
            }
        }
    }
    return res;
}`,
        explanations: {
          def: 'Define nextGreaterElement function.',
          alloc: 'Allocate result array buffer with malloc().',
          init: 'Set default res[i] = -1.',
          loop: 'Iterate over nums1, locate element in nums2, and search for greater element.',
          branch: 'If nums2[j] > target, record next greater element and break.',
          mutate: 'Assign res[i] = nums2[j].',
          return: 'Return result array pointer.',
          comment: 'Next greater element.'
        },
        notes: 'Monotonic stack finds next greater elements in O(N) time by maintaining elements in decreasing order.'
      }),

      buildQuestionItem({
        id: 'stack-daily-temperatures',
        code: `#include <stdio.h>
#include <stdlib.h>

int* dailyTemperatures(int* temperatures, int temperaturesSize, int* returnSize) {
    int* res = (int*)calloc(temperaturesSize, sizeof(int));
    int* stack = (int*)malloc(temperaturesSize * sizeof(int));
    int top = -1;
    *returnSize = temperaturesSize;

    for (int i = 0; i < temperaturesSize; i++) {
        while (top >= 0 && temperatures[i] > temperatures[stack[top]]) {
            int prevIdx = stack[top--];
            res[prevIdx] = i - prevIdx;
        }
        stack[++top] = i;
    }
    free(stack);
    return res;
}`,
        explanations: {
          def: 'Define dailyTemperatures using monotonic stack.',
          alloc: 'Allocate zero-initialized result array via calloc() and stack buffer.',
          init: 'Initialize top = -1 and returnSize.',
          loop: 'Iterate over temperatures while popping cooler day indices.',
          mutate: 'Record days delta: res[prevIdx] = i - prevIdx, and push i.',
          return: 'Free stack buffer and return res.',
          comment: 'Daily temperatures in C.'
        },
        notes: 'Monotonic decreasing stack stores unresolved day indices; popping computes distance to the warmer day in O(N) overall time.'
      }),

      buildQuestionItem({
        id: 'stack-eval-rpn',
        code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int evalRPN(char** tokens, int tokensSize) {
    int stack[1000];
    int top = -1;

    for (int i = 0; i < tokensSize; i++) {
        char* t = tokens[i];
        if (strcmp(t, "+") == 0) {
            int b = stack[top--], a = stack[top--];
            stack[++top] = a + b;
        } else if (strcmp(t, "-") == 0) {
            int b = stack[top--], a = stack[top--];
            stack[++top] = a - b;
        } else if (strcmp(t, "*") == 0) {
            int b = stack[top--], a = stack[top--];
            stack[++top] = a * b;
        } else if (strcmp(t, "/") == 0) {
            int b = stack[top--], a = stack[top--];
            stack[++top] = a / b;
        } else {
            stack[++top] = atoi(t);
        }
    }
    return stack[top];
}`,
        explanations: {
          def: 'Define evalRPN evaluating postfix expressions.',
          init: 'Initialize operand stack array and top = -1.',
          loop: 'Iterate over tokens.',
          branch: 'Compare token string against operators (+, -, *, /) via strcmp().',
          mutate: 'Pop operands b and a, compute arithmetic result, and push back.',
          return: 'Return final evaluated expression result: stack[top].',
          comment: 'Reverse Polish Notation.'
        },
        notes: 'In RPN, operators act on the two most recently pushed operands; popping b then a preserves non-commutative order (a - b and a / b).'
      }),

      buildQuestionItem({
        id: 'stack-queue-using-stacks',
        code: `#include <stdio.h>
#include <stdlib.h>

struct MyQueue {
    int inStack[100];
    int outStack[100];
    int inTop;
    int outTop;
};

struct MyQueue* myQueueCreate() {
    struct MyQueue* q = (struct MyQueue*)malloc(sizeof(struct MyQueue));
    q->inTop = -1;
    q->outTop = -1;
    return q;
}

void myQueuePush(struct MyQueue* obj, int x) {
    obj->inStack[++obj->inTop] = x;
}

int myQueuePop(struct MyQueue* obj) {
    if (obj->outTop == -1) {
        while (obj->inTop >= 0) {
            obj->outStack[++obj->outTop] = obj->inStack[obj->inTop--];
        }
    }
    return obj->outStack[obj->outTop--];
}`,
        explanations: {
          def: 'Define MyQueue using two stacks.',
          alloc: 'Allocate queue struct via malloc().',
          init: 'Initialize inTop = -1 and outTop = -1.',
          loop: 'Transfer elements from inStack to outStack when outStack is empty.',
          mutate: 'Push to inStack or pop from outStack.',
          return: 'Return dequeued value.',
          comment: 'Queue using stacks.'
        },
        notes: 'Transferring elements from inStack to outStack reverses order, transforming LIFO into FIFO with O(1) amortized time per operation.'
      }),

      buildQuestionItem({
        id: 'stack-simplify-path',
        code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* simplifyPath(char* path) {
    char* stack[100];
    int top = -1;
    char* token = strtok(path, "/");

    while (token != NULL) {
        if (strcmp(token, "..") == 0) {
            if (top >= 0) top--;
        } else if (strcmp(token, ".") != 0 && strlen(token) > 0) {
            stack[++top] = token;
        }
        token = strtok(NULL, "/");
    }

    char* res = (char*)malloc(1000 * sizeof(char));
    res[0] = '\\0';
    if (top == -1) {
        strcpy(res, "/");
        return res;
    }
    for (int i = 0; i <= top; i++) {
        strcat(res, "/");
        strcat(res, stack[i]);
    }
    return res;
}`,
        explanations: {
          def: 'Define simplifyPath tokenizing Unix path.',
          alloc: 'Allocate canonical path result string with malloc().',
          init: 'Tokenize path using strtok(path, "/").',
          loop: 'Process tokens with while loop.',
          branch: 'If "..", pop directory; if non-empty and not ".", push directory.',
          mutate: 'Concatenate directories with strcat().',
          return: 'Return simplified canonical path.',
          comment: 'Unix path simplification.'
        },
        notes: 'Stack naturally represents directory hierarchy: ".." pops the parent directory while "." preserves current position.'
      }),

      buildQuestionItem({
        id: 'stack-histogram',
        code: `#include <stdio.h>
#include <stdlib.h>

int largestRectangleArea(int* heights, int heightsSize) {
    int* stack = (int*)malloc((heightsSize + 1) * sizeof(int));
    int top = -1;
    int maxArea = 0;

    for (int i = 0; i <= heightsSize; i++) {
        int h = (i == heightsSize) ? 0 : heights[i];
        while (top >= 0 && h < heights[stack[top]]) {
            int height = heights[stack[top--]];
            int width = (top == -1) ? i : i - stack[top] - 1;
            int area = height * width;
            if (area > maxArea) maxArea = area;
        }
        stack[++top] = i;
    }
    free(stack);
    return maxArea;
}`,
        explanations: {
          def: 'Define largestRectangleArea using monotonic stack.',
          alloc: 'Allocate stack buffer with malloc().',
          init: 'Initialize top = -1 and maxArea = 0.',
          loop: 'Iterate up to heightsSize using sentinel 0 height at end.',
          mutate: 'Pop bar, compute area = height * width, and update maxArea.',
          return: 'Free stack buffer and return maxArea.',
          comment: 'Histogram rectangle calculation.'
        },
        notes: 'Monotonic increasing stack computes maximum rectangle in O(N) time; sentinel height 0 flushes all remaining bars.'
      })
    ],

    go: [
      buildQuestionItem({
        id: 'stack-array-impl',
        code: `package main

type Stack struct {
	data []int
}

func NewStack() *Stack {
	return &Stack{data: []int{}}
}

func (s *Stack) Push(val int) {
	s.data = append(s.data, val)
}

func (s *Stack) Pop() int {
	if len(s.data) == 0 {
		return -1
	}
	idx := len(s.data) - 1
	val := s.data[idx]
	s.data = s.data[:idx]
	return val
}`,
        explanations: {
          def: 'Define Stack struct and NewStack, Push, Pop methods.',
          init: 'Initialize empty slice in constructor.',
          branch: 'Check if stack is empty: len(s.data) == 0.',
          mutate: 'Append to slice via append() or shrink slice via s.data[:idx].',
          return: 'Return popped value.',
          comment: 'Array stack in Go.'
        },
        notes: 'Go slice append() and reslicing provide amortized O(1) stack operations.'
      }),

      buildQuestionItem({
        id: 'stack-ll-impl',
        code: `package main

type SNode struct {
	val  int
	next *SNode
}

type LinkedStack struct {
	top *SNode
}

func NewLinkedStack() *LinkedStack {
	return &LinkedStack{}
}

func (s *LinkedStack) Push(val int) {
	s.top = &SNode{val: val, next: s.top}
}

func (s *LinkedStack) Pop() int {
	if s.top == nil {
		return -1
	}
	val := s.top.val
	s.top = s.top.next
	return val
}`,
        explanations: {
          def: 'Define SNode and LinkedStack structs.',
          init: 'Instantiate new top node: s.top = &SNode{val: val, next: s.top}.',
          branch: 'Check if s.top == nil.',
          pointer: 'Advance s.top = s.top.next.',
          return: 'Return popped integer val.',
          comment: 'Linked stack.'
        },
        notes: 'Pushing prepends a new node to the linked chain in O(1) time.'
      }),

      buildQuestionItem({
        id: 'stack-valid-parens',
        code: `package main

func isValid(s string) bool {
	stack := []rune{}
	pairs := map[rune]rune{
		')': '(',
		'}': '{',
		']': '[',
	}

	for _, ch := range s {
		if open, isClosing := pairs[ch]; isClosing {
			if len(stack) == 0 || stack[len(stack)-1] != open {
				return false
			}
			stack = stack[:len(stack)-1]
		} else {
			stack = append(stack, ch)
		}
	}
	return len(stack) == 0
}`,
        explanations: {
          def: 'Define isValid validating balanced brackets.',
          init: 'Initialize rune slice stack and matching pairs map.',
          loop: 'Iterate over string runes using range.',
          branch: 'If closing bracket, verify match with top of stack; else push.',
          mutate: 'Slice stack[:len-1] to pop or append() to push.',
          return: 'Return boolean indicating whether stack is empty.',
          comment: 'Parentheses validation.'
        },
        notes: 'Using map lookup neatly handles opening vs closing bracket validation in O(N) time.'
      }),

      buildQuestionItem({
        id: 'stack-min',
        code: `package main

type MinStack struct {
	stack    []int
	minStack []int
}

func MinStackConstructor() MinStack {
	return MinStack{
		stack:    []int{},
		minStack: []int{},
	}
}

func (m *MinStack) Push(val int) {
	m.stack = append(m.stack, val)
	if len(m.minStack) == 0 || val <= m.minStack[len(m.minStack)-1] {
		m.minStack = append(m.minStack, val)
	}
}

func (m *MinStack) GetMin() int {
	return m.minStack[len(m.minStack)-1]
}`,
        explanations: {
          def: 'Define MinStack struct with primary and minimum slices.',
          init: 'Instantiate empty slices in constructor.',
          branch: 'Check if val is less than or equal to current minimum.',
          mutate: 'Append to stack and minStack.',
          return: 'Return last element of minStack in O(1) time.',
          comment: 'Min stack in Go.'
        },
        notes: 'minStack keeps track of minimum values, allowing O(1) retrieval without scanning the stack.'
      }),

      buildQuestionItem({
        id: 'stack-next-greater',
        code: `package main

func nextGreaterElement(nums1 []int, nums2 []int) []int {
	nextMap := make(map[int]int)
	stack := []int{}

	for _, num := range nums2 {
		for len(stack) > 0 && stack[len(stack)-1] < num {
			prev := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			nextMap[prev] = num
		}
		stack = append(stack, num)
	}

	res := make([]int, len(nums1))
	for i, num := range nums1 {
		if next, exists := nextMap[num]; exists {
			res[i] = next
		} else {
			res[i] = -1
		}
	}
	return res
}`,
        explanations: {
          def: 'Define nextGreaterElement using monotonic stack and map.',
          alloc: 'Allocate nextMap and res slice.',
          loop: 'Iterate through nums2 with monotonic stack, then map to nums1.',
          mutate: 'Pop smaller numbers and record nextMap[prev] = num.',
          return: 'Return res slice.',
          comment: 'Monotonic stack.'
        },
        notes: 'Monotonic stack pre-computes next greater values for nums2 in O(N) time.'
      }),

      buildQuestionItem({
        id: 'stack-daily-temperatures',
        code: `package main

func dailyTemperatures(temperatures []int) []int {
	n := len(temperatures)
	res := make([]int, n)
	stack := []int{}

	for i, temp := range temperatures {
		for len(stack) > 0 && temperatures[stack[len(stack)-1]] < temp {
			prevIdx := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			res[prevIdx] = i - prevIdx
		}
		stack = append(stack, i)
	}
	return res
}`,
        explanations: {
          def: 'Define dailyTemperatures function.',
          alloc: 'Allocate zero-initialized result slice.',
          loop: 'Iterate over temperatures while popping cooler day indices.',
          mutate: 'Calculate days delta: res[prevIdx] = i - prevIdx.',
          return: 'Return res.',
          comment: 'Daily temperatures in Go.'
        },
        notes: 'Indices in stack represent days awaiting warmer temperatures; resolved in O(N) total time.'
      }),

      buildQuestionItem({
        id: 'stack-eval-rpn',
        code: `package main

import "strconv"

func evalRPN(tokens []string) int {
	stack := []int{}
	for _, t := range tokens {
		switch t {
		case "+":
			b, a := stack[len(stack)-1], stack[len(stack)-2]
			stack = stack[:len(stack)-2]
			stack = append(stack, a+b)
		case "-":
			b, a := stack[len(stack)-1], stack[len(stack)-2]
			stack = stack[:len(stack)-2]
			stack = append(stack, a-b)
		case "*":
			b, a := stack[len(stack)-1], stack[len(stack)-2]
			stack = stack[:len(stack)-2]
			stack = append(stack, a*b)
		case "/":
			b, a := stack[len(stack)-1], stack[len(stack)-2]
			stack = stack[:len(stack)-2]
			stack = append(stack, a/b)
		default:
			val, _ := strconv.Atoi(t)
			stack = append(stack, val)
		}
	}
	return stack[0]
}`,
        explanations: {
          def: 'Define evalRPN evaluating postfix expressions.',
          init: 'Initialize integer operand slice stack.',
          loop: 'Iterate over tokens via range.',
          branch: 'Switch on token operator (+, -, *, /) or parse operand.',
          mutate: 'Pop two operands, apply operator, and append result.',
          return: 'Return evaluated result: stack[0].',
          comment: 'Reverse Polish Notation.'
        },
        notes: 'In Go, switch statement cleanly handles operators and strconv.Atoi parses integers.'
      }),

      buildQuestionItem({
        id: 'stack-queue-using-stacks',
        code: `package main

type MyQueue struct {
	inStack  []int
	outStack []int
}

func QueueConstructor() MyQueue {
	return MyQueue{
		inStack:  []int{},
		outStack: []int{},
	}
}

func (q *MyQueue) Push(x int) {
	q.inStack = append(q.inStack, x)
}

func (q *MyQueue) Pop() int {
	if len(q.outStack) == 0 {
		for len(q.inStack) > 0 {
			last := q.inStack[len(q.inStack)-1]
			q.inStack = q.inStack[:len(q.inStack)-1]
			q.outStack = append(q.outStack, last)
		}
	}
	val := q.outStack[len(q.outStack)-1]
	q.outStack = q.outStack[:len(q.outStack)-1]
	return val
}`,
        explanations: {
          def: 'Define MyQueue using two stack slices.',
          init: 'Instantiate empty slices in constructor.',
          loop: 'Transfer elements from inStack to outStack when outStack is empty.',
          mutate: 'Append to inStack, and pop from outStack.',
          return: 'Return popped value.',
          comment: 'Queue using stacks.'
        },
        notes: 'Elements are transferred only when outStack is empty, giving O(1) amortized cost per operation.'
      }),

      buildQuestionItem({
        id: 'stack-simplify-path',
        code: `package main

import "strings"

func simplifyPath(path string) string {
	parts := strings.Split(path, "/")
	stack := []string{}

	for _, part := range parts {
		if part == "" || part == "." {
			continue
		} else if part == ".." {
			if len(stack) > 0 {
				stack = stack[:len(stack)-1]
			}
		} else {
			stack = append(stack, part)
		}
	}
	return "/" + strings.Join(stack, "/")
}`,
        explanations: {
          def: 'Define simplifyPath processing path segments.',
          init: 'Split path using strings.Split(path, "/").',
          loop: 'Iterate over path segments.',
          branch: 'Ignore empty and "." components; pop stack on ".."; otherwise push component.',
          mutate: 'Pop from stack or append directory name.',
          return: 'Return "/" + strings.Join(stack, "/").',
          comment: 'Unix path simplification.'
        },
        notes: 'strings.Join cleanly formats canonical path segments separated by slashes.'
      }),

      buildQuestionItem({
        id: 'stack-histogram',
        code: `package main

func largestRectangleArea(heights []int) int {
	stack := []int{}
	maxArea := 0
	extended := append(heights, 0)

	for i, h := range extended {
		for len(stack) > 0 && extended[stack[len(stack)-1]] > h {
			height := extended[stack[len(stack)-1]]
			stack = stack[:len(stack)-1]
			width := i
			if len(stack) > 0 {
				width = i - stack[len(stack)-1] - 1
			}
			area := height * width
			if area > maxArea {
				maxArea = area
			}
		}
		stack = append(stack, i)
	}
	return maxArea
}`,
        explanations: {
          def: 'Define largestRectangleArea using monotonic stack.',
          init: 'Append sentinel 0 to extended heights slice.',
          loop: 'Iterate through heights maintaining increasing order.',
          mutate: 'Pop bar, calculate rectangle area = height * width, update maxArea.',
          return: 'Return maxArea.',
          comment: 'Histogram calculation.'
        },
        notes: 'Sentinel 0 at the end flushes all remaining bars from the stack without an extra post-loop.'
      })
    ],

    rust: [
      buildQuestionItem({
        id: 'stack-array-impl',
        code: `pub struct Stack {
    data: Vec<i32>,
}

impl Stack {
    pub fn new() -> Self {
        Stack { data: Vec::new() }
    }

    pub fn push(&mut self, val: i32) {
        self.data.push(val);
    }

    pub fn pop(&mut self) -> Option<i32> {
        self.data.pop()
    }
}`,
        explanations: {
          def: 'Define Stack struct and methods new, push, pop.',
          init: 'Instantiate empty vector in new().',
          mutate: 'Call self.data.push(val) and self.data.pop().',
          return: 'Return Option<i32>.',
          comment: 'Vector-based stack in Rust.'
        },
        notes: 'Vec::push and Vec::pop execute in O(1) amortized time, making Vec the standard idiomatic stack in Rust.'
      }),

      buildQuestionItem({
        id: 'stack-ll-impl',
        code: `pub struct Node {
    val: i32,
    next: Option<Box<Node>>,
}

pub struct LinkedStack {
    top: Option<Box<Node>>,
}

impl LinkedStack {
    pub fn new() -> Self {
        LinkedStack { top: None }
    }

    pub fn push(&mut self, val: i32) {
        let new_node = Box::new(Node {
            val,
            next: self.top.take(),
        });
        self.top = Some(new_node);
    }

    pub fn pop(&mut self) -> Option<i32> {
        self.top.take().map(|node| {
            self.top = node.next;
            node.val
        })
    }
}`,
        explanations: {
          def: 'Define Node and LinkedStack structs.',
          alloc: 'Allocate Box::new(Node { val, next }).',
          init: 'Set top = None in constructor.',
          pointer: 'Use self.top.take() to detach previous top node.',
          mutate: 'Update self.top to new node or next node.',
          return: 'Return Option<i32>.',
          comment: 'Linked stack in safe Rust.'
        },
        notes: 'self.top.take() extracts the node ownership without violating the borrow checker.'
      }),

      buildQuestionItem({
        id: 'stack-valid-parens',
        code: `pub fn is_valid(s: &str) -> bool {
    let mut stack = Vec::new();
    for ch in s.chars() {
        match ch {
            '(' => stack.push(')'),
            '{' => stack.push('}'),
            '[' => stack.push(']'),
            ')' | '}' | ']' => {
                if stack.pop() != Some(ch) {
                    return false;
                }
            }
            _ => {}
        }
    }
    stack.is_empty()
}`,
        explanations: {
          def: 'Define is_valid borrowing string slice &str.',
          init: 'Initialize mutable vector stack = Vec::new().',
          loop: 'Iterate over characters via s.chars().',
          branch: 'Pattern match on character pushing expected closing bracket or validating match.',
          mutate: 'Push expected closing bracket or pop from stack.',
          return: 'Check if stack is empty via stack.is_empty().',
          comment: 'Parentheses validation.'
        },
        notes: 'Pushing the expected closing bracket simplifies matching into a single comparison: stack.pop() != Some(ch).'
      }),

      buildQuestionItem({
        id: 'stack-min',
        code: `pub struct MinStack {
    stack: Vec<i32>,
    min_stack: Vec<i32>,
}

impl MinStack {
    pub fn new() -> Self {
        MinStack {
            stack: Vec::new(),
            min_stack: Vec::new(),
        }
    }

    pub fn push(&mut self, val: i32) {
        self.stack.push(val);
        let min = match self.min_stack.last() {
            Some(&curr_min) => std::cmp::min(curr_min, val),
            None => val,
        };
        self.min_stack.push(min);
    }

    pub fn get_min(&self) -> i32 {
        *self.min_stack.last().unwrap()
    }
}`,
        explanations: {
          def: 'Define MinStack struct and push/get_min methods.',
          init: 'Instantiate empty vectors in constructor.',
          branch: 'Pattern match on last minimum value using match self.min_stack.last().',
          mutate: 'Push value and running minimum to respective vectors.',
          return: 'Dereference last element of min_stack in O(1) time.',
          comment: 'Min stack in Rust.'
        },
        notes: 'Parallel min_stack tracks minimum at each depth, enabling O(1) get_min() without scanning.'
      }),

      buildQuestionItem({
        id: 'stack-next-greater',
        code: `use std::collections::HashMap;

pub fn next_greater_element(nums1: &[i32], nums2: &[i32]) -> Vec<i32> {
    let mut map = HashMap::new();
    let mut stack = Vec::new();

    for &num in nums2 {
        while let Some(&top) = stack.last() {
            if top < num {
                map.insert(stack.pop().unwrap(), num);
            } else {
                break;
            }
        }
        stack.push(num);
    }

    nums1.iter().map(|num| *map.get(num).unwrap_or(&-1)).collect()
}`,
        explanations: {
          def: 'Define next_greater_element function.',
          init: 'Instantiate map and stack vectors.',
          loop: 'Iterate over nums2 while maintaining monotonic stack.',
          branch: 'Compare top of stack against current number.',
          mutate: 'Pop smaller numbers and record mapping in HashMap.',
          return: 'Map nums1 elements to their answers via .unwrap_or(&-1).',
          comment: 'Monotonic stack in Rust.'
        },
        notes: 'Iterators and .unwrap_or(&-1) provide concise, idiomatic translation from map to result vector.'
      }),

      buildQuestionItem({
        id: 'stack-daily-temperatures',
        code: `pub fn daily_temperatures(temperatures: &[i32]) -> Vec<i32> {
    let mut res = vec![0; temperatures.len()];
    let mut stack: Vec<usize> = Vec::new();

    for (i, &temp) in temperatures.iter().enumerate() {
        while let Some(&prev_idx) = stack.last() {
            if temperatures[prev_idx] < temp {
                stack.pop();
                res[prev_idx] = (i - prev_idx) as i32;
            } else {
                break;
            }
        }
        stack.push(i);
    }
    res
}`,
        explanations: {
          def: 'Define daily_temperatures taking &[i32].',
          alloc: 'Allocate zero-initialized result vector vec![0; len].',
          loop: 'Iterate with .iter().enumerate() while popping cooler days.',
          mutate: 'Calculate delta (i - prev_idx) as i32 and push index.',
          return: 'Return result vector res.',
          comment: 'Daily temperatures.'
        },
        notes: 'Stack stores usize indices; elements enter and leave stack at most once, yielding O(N) time.'
      }),

      buildQuestionItem({
        id: 'stack-eval-rpn',
        code: `pub fn eval_rpn(tokens: &[String]) -> i32 {
    let mut stack = Vec::new();
    for token in tokens {
        match token.as_str() {
            "+" => {
                let (b, a) = (stack.pop().unwrap(), stack.pop().unwrap());
                stack.push(a + b);
            }
            "-" => {
                let (b, a) = (stack.pop().unwrap(), stack.pop().unwrap());
                stack.push(a - b);
            }
            "*" => {
                let (b, a) = (stack.pop().unwrap(), stack.pop().unwrap());
                stack.push(a * b);
            }
            "/" => {
                let (b, a) = (stack.pop().unwrap(), stack.pop().unwrap());
                stack.push(a / b);
            }
            num => stack.push(num.parse::<i32>().unwrap()),
        }
    }
    stack[0]
}`,
        explanations: {
          def: 'Define eval_rpn taking slice of strings.',
          init: 'Instantiate integer stack vector.',
          loop: 'Iterate over tokens.',
          branch: 'Pattern match on token.as_str() across operators or parse number.',
          mutate: 'Pop operands, evaluate arithmetic, and push result.',
          return: 'Return final evaluated answer stack[0].',
          comment: 'RPN evaluation in Rust.'
        },
        notes: 'match token.as_str() provides clean pattern matching, and num.parse::<i32>() parses string digits.'
      }),

      buildQuestionItem({
        id: 'stack-queue-using-stacks',
        code: `pub struct MyQueue {
    in_stack: Vec<i32>,
    out_stack: Vec<i32>,
}

impl MyQueue {
    pub fn new() -> Self {
        MyQueue {
            in_stack: Vec::new(),
            out_stack: Vec::new(),
        }
    }

    pub fn push(&mut self, x: i32) {
        self.in_stack.push(x);
    }

    pub fn pop(&mut self) -> i32 {
        if self.out_stack.is_empty() {
            while let Some(val) = self.in_stack.pop() {
                self.out_stack.push(val);
            }
        }
        self.out_stack.pop().unwrap()
    }
}`,
        explanations: {
          def: 'Define MyQueue using two vectors.',
          init: 'Instantiate vectors in constructor.',
          loop: 'Transfer elements from in_stack to out_stack when out_stack is empty.',
          mutate: 'Push to in_stack or pop from out_stack.',
          return: 'Return popped integer.',
          comment: 'Queue using stacks.'
        },
        notes: 'Amortized cost per operation is O(1) since each element moves between stacks at most once.'
      }),

      buildQuestionItem({
        id: 'stack-simplify-path',
        code: `pub fn simplify_path(path: &str) -> String {
    let mut stack = Vec::new();
    for part in path.split('/') {
        match part {
            "" | "." => {}
            ".." => { stack.pop(); }
            dir => stack.push(dir),
        }
    }
    format!("/{}", stack.join("/"))
}`,
        explanations: {
          def: 'Define simplify_path taking &str and returning String.',
          init: 'Instantiate stack vector.',
          loop: 'Iterate over path.split(\'/\').',
          branch: 'Pattern match: ignore empty/".", pop on "..", push directory.',
          mutate: 'Pop from stack or push directory.',
          return: 'Format canonical path via format!("/{}", stack.join("/")).',
          comment: 'Path simplification in Rust.'
        },
        notes: 'path.split(\'/\') avoids allocating intermediate strings, and stack.join("/") formats the result.'
      }),

      buildQuestionItem({
        id: 'stack-histogram',
        code: `pub fn largest_rectangle_area(heights: &[i32]) -> i32 {
    let mut stack: Vec<usize> = Vec::new();
    let mut max_area = 0;
    let n = heights.len();

    for i in 0..=n {
        let h = if i == n { 0 } else { heights[i] };
        while let Some(&top_idx) = stack.last() {
            if heights[top_idx] > h {
                stack.pop();
                let height = heights[top_idx];
                let width = match stack.last() {
                    Some(&prev) => (i - prev - 1) as i32,
                    None => i as i32,
                };
                max_area = std::cmp::max(max_area, height * width);
            } else {
                break;
            }
        }
        stack.push(i);
    }
    max_area
}`,
        explanations: {
          def: 'Define largest_rectangle_area using monotonic stack.',
          init: 'Instantiate stack vector and initialize max_area = 0.',
          loop: 'Iterate over 0..=n using sentinel 0 height at end.',
          mutate: 'Pop bar, compute area = height * width, update max_area.',
          return: 'Return max_area.',
          comment: 'Histogram calculation.'
        },
        notes: 'Monotonic increasing stack evaluates largest rectangle in single O(N) pass.'
      })
    ]
  };
}

module.exports = {
  getStackQuestions
};
