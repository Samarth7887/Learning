const { buildQuestionItem } = require('./helper');

function getQueueQuestions() {
  return {
    c: [
      buildQuestionItem({
        id: 'queue-array-impl',
        code: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_CAPACITY 100

struct ArrayQueue {
    int data[MAX_CAPACITY];
    int front;
    int rear;
};

struct ArrayQueue* createQueue() {
    struct ArrayQueue* q = (struct ArrayQueue*)malloc(sizeof(struct ArrayQueue));
    q->front = 0;
    q->rear = 0;
    return q;
}

void enqueue(struct ArrayQueue* q, int val) {
    if (q->rear < MAX_CAPACITY) {
        q->data[q->rear++] = val;
    }
}

int dequeue(struct ArrayQueue* q) {
    if (q->front < q->rear) {
        return q->data[q->front++];
    }
    return -1;
}`,
        explanations: {
          def: 'Define ArrayQueue struct and operations createQueue, enqueue, and dequeue.',
          alloc: 'Allocate queue struct dynamically via malloc().',
          init: 'Initialize front and rear index pointers to 0.',
          branch: 'Check boundary conditions before enqueueing or dequeueing.',
          mutate: 'Enqueue element by assigning q->data[q->rear++] or dequeue via q->data[q->front++].',
          return: 'Return dequeued element or -1 if queue is empty.',
          comment: 'Array-based queue definitions.'
        },
        notes: 'Fixed array queue with front and rear pointers provides O(1) enqueue and dequeue operations.'
      }),

      buildQuestionItem({
        id: 'queue-linkedlist-impl',
        code: `#include <stdio.h>
#include <stdlib.h>

struct QNode {
    int val;
    struct QNode* next;
};

struct LinkedQueue {
    struct QNode* front;
    struct QNode* rear;
};

struct LinkedQueue* createLinkedQueue() {
    struct LinkedQueue* q = (struct LinkedQueue*)malloc(sizeof(struct LinkedQueue));
    q->front = NULL;
    q->rear = NULL;
    return q;
}

void enqueueLinked(struct LinkedQueue* q, int val) {
    struct QNode* node = (struct QNode*)malloc(sizeof(struct QNode));
    node->val = val;
    node->next = NULL;
    if (q->rear == NULL) {
        q->front = node;
        q->rear = node;
        return;
    }
    q->rear->next = node;
    q->rear = node;
}

int dequeueLinked(struct LinkedQueue* q) {
    if (q->front == NULL) return -1;
    struct QNode* temp = q->front;
    int val = temp->val;
    q->front = q->front->next;
    if (q->front == NULL) q->rear = NULL;
    free(temp);
    return val;
}`,
        explanations: {
          def: 'Define QNode and LinkedQueue structs and methods.',
          alloc: 'Allocate dynamic memory for queue and nodes via malloc().',
          init: 'Set front and rear to NULL.',
          branch: 'Handle empty queue insertion and removal.',
          pointer: 'Update q->rear->next = node and q->front = q->front->next.',
          mutate: 'Deallocate removed node memory using free(temp).',
          return: 'Return dequeued integer value.',
          comment: 'Linked queue declarations.'
        },
        notes: 'Linked queue has no maximum capacity limit; memory must be freed explicitly on dequeue to prevent leaks.'
      }),

      buildQuestionItem({
        id: 'queue-circular-array',
        code: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

struct MyCircularQueue {
    int* data;
    int front;
    int rear;
    int size;
    int capacity;
};

struct MyCircularQueue* myCircularQueueCreate(int k) {
    struct MyCircularQueue* obj = (struct MyCircularQueue*)malloc(sizeof(struct MyCircularQueue));
    obj->capacity = k;
    obj->data = (int*)malloc(k * sizeof(int));
    obj->front = 0;
    obj->rear = -1;
    obj->size = 0;
    return obj;
}

bool myCircularQueueEnQueue(struct MyCircularQueue* obj, int value) {
    if (obj->size == obj->capacity) return false;
    obj->rear = (obj->rear + 1) % obj->capacity;
    obj->data[obj->rear] = value;
    obj->size++;
    return true;
}

bool myCircularQueueDeQueue(struct MyCircularQueue* obj) {
    if (obj->size == 0) return false;
    obj->front = (obj->front + 1) % obj->capacity;
    obj->size--;
    return true;
}`,
        explanations: {
          def: 'Define MyCircularQueue struct and ring buffer methods.',
          alloc: 'Allocate circular queue struct and buffer using malloc().',
          init: 'Initialize front = 0, rear = -1, and size = 0.',
          branch: 'Check full/empty boundary conditions.',
          mutate: 'Wrap indices with modulo: (rear + 1) % capacity and increment size.',
          return: 'Return boolean indicating operation success.',
          comment: 'Circular queue implementation.'
        },
        notes: 'Ring buffer uses modulo arithmetic ((rear + 1) % capacity) to reuse freed slots without shifting elements.'
      }),

      buildQuestionItem({
        id: 'queue-circular-deque',
        code: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

struct MyCircularDeque {
    int* data;
    int front;
    int rear;
    int size;
    int capacity;
};

struct MyCircularDeque* myCircularDequeCreate(int k) {
    struct MyCircularDeque* obj = (struct MyCircularDeque*)malloc(sizeof(struct MyCircularDeque));
    obj->capacity = k;
    obj->data = (int*)malloc(k * sizeof(int));
    obj->front = 0;
    obj->rear = 0;
    obj->size = 0;
    return obj;
}

bool myCircularDequeInsertFront(struct MyCircularDeque* obj, int value) {
    if (obj->size == obj->capacity) return false;
    obj->front = (obj->front - 1 + obj->capacity) % obj->capacity;
    obj->data[obj->front] = value;
    obj->size++;
    return true;
}

bool myCircularDequeInsertLast(struct MyCircularDeque* obj, int value) {
    if (obj->size == obj->capacity) return false;
    obj->data[obj->rear] = value;
    obj->rear = (obj->rear + 1) % obj->capacity;
    obj->size++;
    return true;
}`,
        explanations: {
          def: 'Define MyCircularDeque struct supporting double-ended operations.',
          alloc: 'Allocate deque and backing array via malloc().',
          init: 'Initialize front, rear, and size to 0.',
          branch: 'Guard against overflow when size == capacity.',
          mutate: 'Wrap front backwards: (front - 1 + capacity) % capacity and rear forward.',
          return: 'Return boolean indicating success.',
          comment: 'Double-ended queue.'
        },
        notes: 'Adding capacity before applying modulo prevents negative numbers in C when wrapping backwards.'
      }),

      buildQuestionItem({
        id: 'stack-using-queues',
        code: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

struct MyStack {
    int q[100];
    int front;
    int rear;
};

struct MyStack* myStackCreate() {
    struct MyStack* s = (struct MyStack*)malloc(sizeof(struct MyStack));
    s->front = 0;
    s->rear = 0;
    return s;
}

void myStackPush(struct MyStack* obj, int x) {
    obj->q[obj->rear++] = x;
    int count = obj->rear - obj->front - 1;
    for (int i = 0; i < count; i++) {
        obj->q[obj->rear++] = obj->q[obj->front++];
    }
}

int myStackPop(struct MyStack* obj) {
    return obj->q[obj->front++];
}`,
        explanations: {
          def: 'Define MyStack using a single FIFO queue.',
          alloc: 'Allocate stack struct via malloc().',
          init: 'Initialize queue indices.',
          loop: 'Rotate existing elements behind the newly enqueued element.',
          mutate: 'Enqueue x and cycle previous elements to maintain LIFO order at front.',
          return: 'Return dequeued element.',
          comment: 'Stack using single queue.'
        },
        notes: 'Rotating the queue on push takes O(N) time but allows O(1) top/pop operations.'
      }),

      buildQuestionItem({
        id: 'sliding-window-max',
        code: `#include <stdio.h>
#include <stdlib.h>

int* maxSlidingWindow(int* nums, int numsSize, int k, int* returnSize) {
    if (numsSize == 0 || k == 0) {
        *returnSize = 0;
        return NULL;
    }
    int* res = (int*)malloc((numsSize - k + 1) * sizeof(int));
    int* deque = (int*)malloc(numsSize * sizeof(int));
    int head = 0, tail = 0;
    int resIdx = 0;

    for (int i = 0; i < numsSize; i++) {
        while (tail > head && deque[head] < i - k + 1) {
            head++;
        }
        while (tail > head && nums[deque[tail - 1]] < nums[i]) {
            tail--;
        }
        deque[tail++] = i;
        if (i >= k - 1) {
            res[resIdx++] = nums[deque[head]];
        }
    }
    *returnSize = resIdx;
    free(deque);
    return res;
}`,
        explanations: {
          def: 'Define maxSlidingWindow using monotonic deque.',
          alloc: 'Allocate result array and index deque buffer via malloc().',
          init: 'Initialize deque head/tail pointers and result index.',
          loop: 'Iterate through array while maintaining decreasing deque order.',
          branch: 'Evict indices falling outside current window (deque[head] < i - k + 1).',
          mutate: 'Pop smaller elements from deque tail, push i, and record window maximum.',
          return: 'Return result array and free temporary deque buffer.',
          comment: 'Monotonic deque.'
        },
        notes: 'Monotonic deque maintains decreasing order of elements, enabling O(N) overall runtime for sliding window maximum.'
      }),

      buildQuestionItem({
        id: 'first-unique-char',
        code: `#include <stdio.h>
#include <string.h>

int firstUniqChar(char* s) {
    int counts[26] = {0};
    int n = strlen(s);

    for (int i = 0; i < n; i++) {
        counts[s[i] - 'a']++;
    }
    for (int i = 0; i < n; i++) {
        if (counts[s[i] - 'a'] == 1) {
            return i;
        }
    }
    return -1;
}`,
        explanations: {
          def: 'Define firstUniqChar taking C string.',
          init: 'Zero-initialize 26-element integer frequency array.',
          loop: 'Two passes: first counts character frequencies, second finds first unique character.',
          mutate: 'Increment character frequency counts.',
          branch: 'Check if character count equals 1.',
          return: 'Return index of first unique character or -1.',
          comment: 'ASCII counting.'
        },
        notes: 'Two linear passes with a fixed 26-element array run in O(N) time and O(1) space.'
      }),

      buildQuestionItem({
        id: 'recent-counter',
        code: `#include <stdio.h>
#include <stdlib.h>

struct RecentCounter {
    int calls[10000];
    int front;
    int rear;
};

struct RecentCounter* recentCounterCreate() {
    struct RecentCounter* obj = (struct RecentCounter*)malloc(sizeof(struct RecentCounter));
    obj->front = 0;
    obj->rear = 0;
    return obj;
}

int recentCounterPing(struct RecentCounter* obj, int t) {
    obj->calls[obj->rear++] = t;
    while (obj->calls[obj->front] < t - 3000) {
        obj->front++;
    }
    return obj->rear - obj->front;
}`,
        explanations: {
          def: 'Define RecentCounter struct and methods create/ping.',
          alloc: 'Allocate counter struct with malloc().',
          init: 'Initialize front and rear index pointers to 0.',
          loop: 'Evict timestamps older than t - 3000 by advancing front pointer.',
          mutate: 'Enqueue new timestamp t at obj->calls[obj->rear++].',
          return: 'Return active call count: rear - front.',
          comment: 'Rate limiter queue.'
        },
        notes: 'Queue maintains active timestamps within the sliding [t - 3000, t] time window.'
      }),

      buildQuestionItem({
        id: 'rotting-oranges',
        code: `#include <stdio.h>
#include <stdlib.h>

struct Point {
    int r;
    int c;
};

int orangesRotting(int** grid, int gridSize, int* gridColSize) {
    int rows = gridSize, cols = gridColSize[0];
    struct Point queue[100];
    int front = 0, rear = 0;
    int fresh = 0;

    for (int r = 0; r < rows; r++) {
        for (int c = 0; c < cols; c++) {
            if (grid[r][c] == 2) queue[rear++] = (struct Point){r, c};
            else if (grid[r][c] == 1) fresh++;
        }
    }
    if (fresh == 0) return 0;
    int minutes = 0;
    int dirs[4][2] = {{-1,0},{1,0},{0,-1},{0,1}};

    while (front < rear && fresh > 0) {
        int levelSize = rear - front;
        for (int i = 0; i < levelSize; i++) {
            struct Point p = queue[front++];
            for (int d = 0; d < 4; d++) {
                int nr = p.r + dirs[d][0], nc = p.c + dirs[d][1];
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == 1) {
                    grid[nr][nc] = 2;
                    fresh--;
                    queue[rear++] = (struct Point){nr, nc};
                }
            }
        }
        minutes++;
    }
    return fresh == 0 ? minutes : -1;
}`,
        explanations: {
          def: 'Define orangesRotting implementing multi-source BFS.',
          init: 'Initialize queue, fresh count, and 4-directional offsets.',
          loop: 'Scan grid for initial rotten/fresh oranges, and loop over BFS levels.',
          branch: 'Check grid boundaries and verify orange is fresh (grid[nr][nc] == 1).',
          mutate: 'Rot orange: grid[nr][nc] = 2, decrement fresh, enqueue neighbor.',
          return: 'Return minutes elapsed or -1 if unreachable fresh oranges remain.',
          comment: 'Multi-source BFS in C.'
        },
        notes: 'Multi-source BFS processes all initially rotten oranges concurrently level by level to compute minimal rotting time.'
      })
    ],

    go: [
      buildQuestionItem({
        id: 'queue-array-impl',
        code: `package main

type Queue struct {
	data []int
}

func NewQueue() *Queue {
	return &Queue{data: []int{}}
}

func (q *Queue) Enqueue(val int) {
	q.data = append(q.data, val)
}

func (q *Queue) Dequeue() int {
	if len(q.data) == 0 {
		return -1
	}
	val := q.data[0]
	q.data = q.data[1:]
	return val
}`,
        explanations: {
          def: 'Define Queue struct and methods NewQueue, Enqueue, and Dequeue.',
          alloc: 'Initialize queue with slice literal &Queue{data: []int{}}.',
          branch: 'Check if slice is empty: len(q.data) == 0.',
          mutate: 'Append to slice via append() or reslice q.data[1:] on dequeue.',
          return: 'Return dequeued element.',
          comment: 'Go queue.'
        },
        notes: 'Reslicing q.data[1:] in Go adjusts the slice pointer in O(1) time without moving elements.'
      }),

      buildQuestionItem({
        id: 'queue-linkedlist-impl',
        code: `package main

type QNode struct {
	val  int
	next *QNode
}

type LinkedQueue struct {
	front *QNode
	rear  *QNode
}

func NewLinkedQueue() *LinkedQueue {
	return &LinkedQueue{}
}

func (q *LinkedQueue) Enqueue(val int) {
	node := &QNode{val: val}
	if q.rear == nil {
		q.front = node
		q.rear = node
		return
	}
	q.rear.next = node
	q.rear = node
}

func (q *LinkedQueue) Dequeue() int {
	if q.front == nil {
		return -1
	}
	val := q.front.val
	q.front = q.front.next
	if q.front == nil {
		q.rear = nil
	}
	return val
}`,
        explanations: {
          def: 'Define QNode and LinkedQueue structs and methods.',
          init: 'Instantiate node literal &QNode{val: val}.',
          branch: 'Handle empty queue boundary conditions.',
          pointer: 'Update rear.next = node and front = front.next.',
          return: 'Return dequeued val.',
          comment: 'Linked queue in Go.'
        },
        notes: 'Linked queue provides unbounded capacity with garbage collection reclaiming unlinked nodes.'
      }),

      buildQuestionItem({
        id: 'queue-circular-array',
        code: `package main

type MyCircularQueue struct {
	data     []int
	front    int
	rear     int
	size     int
	capacity int
}

func CircularQueueConstructor(k int) MyCircularQueue {
	return MyCircularQueue{
		data:     make([]int, k),
		front:    0,
		rear:     -1,
		size:     0,
		capacity: k,
	}
}

func (q *MyCircularQueue) EnQueue(value int) bool {
	if q.size == q.capacity {
		return false
	}
	q.rear = (q.rear + 1) % q.capacity
	q.data[q.rear] = value
	q.size++
	return true
}`,
        explanations: {
          def: 'Define MyCircularQueue struct and constructor.',
          alloc: 'Allocate slice via make([]int, k).',
          branch: 'Return false if queue is full.',
          mutate: 'Update rear with modulo: (rear + 1) % capacity and increment size.',
          return: 'Return true on successful enqueue.',
          comment: 'Circular queue.'
        },
        notes: 'Ring buffer avoids memory shifts by wrapping indices with modulo arithmetic.'
      }),

      buildQuestionItem({
        id: 'queue-circular-deque',
        code: `package main

type MyCircularDeque struct {
	data     []int
	front    int
	rear     int
	size     int
	capacity int
}

func DequeConstructor(k int) MyCircularDeque {
	return MyCircularDeque{
		data:     make([]int, k),
		front:    0,
		rear:     0,
		size:     0,
		capacity: k,
	}
}

func (d *MyCircularDeque) InsertFront(value int) bool {
	if d.size == d.capacity {
		return false
	}
	d.front = (d.front - 1 + d.capacity) % d.capacity
	d.data[d.front] = value
	d.size++
	return true
}`,
        explanations: {
          def: 'Define MyCircularDeque struct and InsertFront method.',
          alloc: 'Allocate slice using make([]int, k).',
          branch: 'Guard against full capacity.',
          mutate: 'Wrap front backwards: (front - 1 + capacity) % capacity.',
          return: 'Return true.',
          comment: 'Circular deque.'
        },
        notes: 'Adding capacity prevents negative index values when wrapping backwards.'
      }),

      buildQuestionItem({
        id: 'stack-using-queues',
        code: `package main

type MyStack struct {
	q []int
}

func StackConstructor() MyStack {
	return MyStack{q: []int{}}
}

func (s *MyStack) Push(x int) {
	s.q = append(s.q, x)
	for i := 0; i < len(s.q)-1; i++ {
		val := s.q[0]
		s.q = s.q[1:]
		s.q = append(s.q, val)
	}
}

func (s *MyStack) Pop() int {
	val := s.q[0]
	s.q = s.q[1:]
	return val
}`,
        explanations: {
          def: 'Define MyStack struct with single queue slice.',
          init: 'Instantiate empty slice in constructor.',
          loop: 'Rotate queue elements len(q) - 1 times on push.',
          mutate: 'Append to slice and reslice s.q[1:].',
          return: 'Return popped value.',
          comment: 'Stack using queues.'
        },
        notes: 'Rotating the queue upon each push guarantees LIFO ordering at index 0.'
      }),

      buildQuestionItem({
        id: 'sliding-window-max',
        code: `package main

func maxSlidingWindow(nums []int, k int) []int {
	if len(nums) == 0 || k == 0 {
		return []int{}
	}
	deque := []int{}
	res := make([]int, 0, len(nums)-k+1)

	for i, num := range nums {
		for len(deque) > 0 && deque[0] < i-k+1 {
			deque = deque[1:]
		}
		for len(deque) > 0 && nums[deque[len(deque)-1]] < num {
			deque = deque[:len(deque)-1]
		}
		deque = append(deque, i)
		if i >= k-1 {
			res = append(res, nums[deque[0]])
		}
	}
	return res
}`,
        explanations: {
          def: 'Define maxSlidingWindow function.',
          alloc: 'Pre-allocate result slice capacity.',
          loop: 'Iterate over array and maintain monotonic deque.',
          branch: 'Evict indices outside sliding window: deque[0] < i - k + 1.',
          mutate: 'Pop smaller elements, append index, and append window maximum.',
          return: 'Return result slice res.',
          comment: 'Monotonic deque in Go.'
        },
        notes: 'Each index enters and leaves the deque at most once, yielding O(N) linear time complexity.'
      }),

      buildQuestionItem({
        id: 'first-unique-char',
        code: `package main

func firstUniqChar(s string) int {
	counts := [26]int{}
	for _, ch := range s {
		counts[ch-'a']++
	}
	for i, ch := range s {
		if counts[ch-'a'] == 1 {
			return i
		}
	}
	return -1
}`,
        explanations: {
          def: 'Define firstUniqChar taking string s.',
          init: 'Initialize fixed array [26]int{}.',
          loop: 'First loop counts frequencies, second loop finds first unique character.',
          branch: 'Check if character count equals 1.',
          mutate: 'Increment counts[ch-\'a\'].',
          return: 'Return index i or -1.',
          comment: 'Character counting.'
        },
        notes: 'Using a fixed-size 26-element array allocates on the stack with zero heap overhead.'
      }),

      buildQuestionItem({
        id: 'recent-counter',
        code: `package main

type RecentCounter struct {
	calls []int
}

func RecentCounterConstructor() RecentCounter {
	return RecentCounter{calls: []int{}}
}

func (r *RecentCounter) Ping(t int) int {
	r.calls = append(r.calls, t)
	for len(r.calls) > 0 && r.calls[0] < t-3000 {
		r.calls = r.calls[1:]
	}
	return len(r.calls)
}`,
        explanations: {
          def: 'Define RecentCounter struct and Ping method.',
          init: 'Initialize empty calls slice in constructor.',
          loop: 'Evict timestamps older than t - 3000 via r.calls = r.calls[1:].',
          mutate: 'Append new timestamp t.',
          return: 'Return len(r.calls).',
          comment: 'Rate limiter queue.'
        },
        notes: 'Reslicing discards outdated timestamps, keeping only the active window.'
      }),

      buildQuestionItem({
        id: 'rotting-oranges',
        code: `package main

type Point struct {
	r, c int
}

func orangesRotting(grid [][]int) int {
	rows, cols := len(grid), len(grid[0])
	queue := []Point{}
	fresh := 0

	for r := 0; r < rows; r++ {
		for c := 0; c < cols; c++ {
			if grid[r][c] == 2 {
				queue = append(queue, Point{r, c})
			} else if grid[r][c] == 1 {
				fresh++
			}
		}
	}
	if fresh == 0 {
		return 0
	}

	minutes := 0
	dirs := [][]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}
	for len(queue) > 0 && fresh > 0 {
		levelSize := len(queue)
		for i := 0; i < levelSize; i++ {
			p := queue[0]
			queue = queue[1:]
			for _, d := range dirs {
				nr, nc := p.r+d[0], p.c+d[1]
				if nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == 1 {
					grid[nr][nc] = 2
					fresh--
					queue = append(queue, Point{nr, nc})
				}
			}
		}
		minutes++
	}
	if fresh == 0 {
		return minutes
	}
	return -1
}`,
        explanations: {
          def: 'Define orangesRotting using multi-source BFS.',
          init: 'Initialize queue slice and fresh count.',
          loop: 'Traverse grid, and process BFS queue levels.',
          branch: 'Check grid boundaries and verify orange is fresh.',
          mutate: 'Mark orange rotten (grid[nr][nc] = 2), decrement fresh, append to queue.',
          return: 'Return minutes elapsed or -1.',
          comment: 'Multi-source BFS in Go.'
        },
        notes: 'Multi-source BFS explores rotten orange propagation concurrently level by level.'
      })
    ],

    rust: [
      buildQuestionItem({
        id: 'queue-array-impl',
        code: `pub struct Queue {
    data: Vec<i32>,
}

impl Queue {
    pub fn new() -> Self {
        Queue { data: Vec::new() }
    }

    pub fn enqueue(&mut self, val: i32) {
        self.data.push(val);
    }

    pub fn dequeue(&mut self) -> Option<i32> {
        if self.data.is_empty() {
            None
        } else {
            Some(self.data.remove(0))
        }
    }
}`,
        explanations: {
          def: 'Define Queue struct and methods.',
          init: 'Instantiate empty vector in new().',
          branch: 'Check if self.data.is_empty().',
          mutate: 'Push element via push() and remove head element via remove(0).',
          return: 'Return Option<i32>.',
          comment: 'Queue implementation in Rust.'
        },
        notes: 'Vec::remove(0) shifts subsequent elements; using VecDeque is preferable for O(1) removals.'
      }),

      buildQuestionItem({
        id: 'queue-linkedlist-impl',
        code: `use std::collections::VecDeque;

pub struct LinkedQueue {
    deque: VecDeque<i32>,
}

impl LinkedQueue {
    pub fn new() -> Self {
        LinkedQueue { deque: VecDeque::new() }
    }

    pub fn enqueue(&mut self, val: i32) {
        self.deque.push_back(val);
    }

    pub fn dequeue(&mut self) -> Option<i32> {
        self.deque.pop_front()
    }
}`,
        explanations: {
          def: 'Define LinkedQueue using VecDeque ring buffer.',
          init: 'Instantiate VecDeque::new().',
          mutate: 'Call push_back() and pop_front().',
          return: 'Return Option<i32>.',
          comment: 'Ring buffer queue.'
        },
        notes: 'VecDeque provides O(1) amortized double-ended push and pop operations.'
      }),

      buildQuestionItem({
        id: 'queue-circular-array',
        code: `pub struct MyCircularQueue {
    data: Vec<i32>,
    front: usize,
    rear: usize,
    size: usize,
    capacity: usize,
}

impl MyCircularQueue {
    pub fn new(k: i32) -> Self {
        let cap = k as usize;
        MyCircularQueue {
            data: vec![0; cap],
            front: 0,
            rear: 0,
            size: 0,
            capacity: cap,
        }
    }

    pub fn en_queue(&mut self, value: i32) -> bool {
        if self.size == self.capacity {
            return false;
        }
        self.data[self.rear] = value;
        self.rear = (self.rear + 1) % self.capacity;
        self.size += 1;
        true
    }
}`,
        explanations: {
          def: 'Define MyCircularQueue struct and methods.',
          alloc: 'Allocate fixed buffer vec![0; cap].',
          branch: 'Return false if queue is full.',
          mutate: 'Update rear with modulo: (self.rear + 1) % self.capacity.',
          return: 'Return true.',
          comment: 'Circular queue.'
        },
        notes: 'Modulo indexing enables reusing vacated positions without moving memory.'
      }),

      buildQuestionItem({
        id: 'queue-circular-deque',
        code: `pub struct MyCircularDeque {
    data: Vec<i32>,
    front: usize,
    rear: usize,
    size: usize,
    capacity: usize,
}

impl MyCircularDeque {
    pub fn new(k: i32) -> Self {
        let cap = k as usize;
        MyCircularDeque {
            data: vec![0; cap],
            front: 0,
            rear: 0,
            size: 0,
            capacity: cap,
        }
    }

    pub fn insert_front(&mut self, value: i32) -> bool {
        if self.size == self.capacity {
            return false;
        }
        self.front = (self.front + self.capacity - 1) % self.capacity;
        self.data[self.front] = value;
        self.size += 1;
        true
    }
}`,
        explanations: {
          def: 'Define MyCircularDeque struct and insert_front method.',
          alloc: 'Initialize vector with vec![0; cap].',
          branch: 'Guard against full capacity.',
          mutate: 'Wrap front backwards: (front + capacity - 1) % capacity.',
          return: 'Return true.',
          comment: 'Circular deque.'
        },
        notes: 'Adding capacity prevents underflow when wrapping unsigned usize backwards.'
      }),

      buildQuestionItem({
        id: 'stack-using-queues',
        code: `use std::collections::VecDeque;

pub struct MyStack {
    q: VecDeque<i32>,
}

impl MyStack {
    pub fn new() -> Self {
        MyStack { q: VecDeque::new() }
    }

    pub fn push(&mut self, x: i32) {
        self.q.push_back(x);
        for _ in 0..self.q.len() - 1 {
            let val = self.q.pop_front().unwrap();
            self.q.push_back(val);
        }
    }

    pub fn pop(&mut self) -> i32 {
        self.q.pop_front().unwrap()
    }
}`,
        explanations: {
          def: 'Define MyStack using VecDeque.',
          init: 'Instantiate VecDeque::new().',
          loop: 'Rotate queue elements length - 1 times on push.',
          mutate: 'Call push_back() and pop_front().',
          return: 'Return popped integer.',
          comment: 'Stack using queue.'
        },
        notes: 'Rotating elements after insertion places the newly added element at the front of the queue.'
      }),

      buildQuestionItem({
        id: 'sliding-window-max',
        code: `use std::collections::VecDeque;

pub fn max_sliding_window(nums: &[i32], k: usize) -> Vec<i32> {
    if nums.is_empty() || k == 0 {
        return vec![];
    }
    let mut deque: VecDeque<usize> = VecDeque::new();
    let mut res = Vec::with_capacity(nums.len() - k + 1);

    for (i, &num) in nums.iter().enumerate() {
        while let Some(&front_idx) = deque.front() {
            if front_idx + k <= i {
                deque.pop_front();
            } else {
                break;
            }
        }
        while let Some(&back_idx) = deque.back() {
            if nums[back_idx] < num {
                deque.pop_back();
            } else {
                break;
            }
        }
        deque.push_back(i);
        if i >= k - 1 {
            res.push(nums[*deque.front().unwrap()]);
        }
    }
    res
}`,
        explanations: {
          def: 'Define max_sliding_window using monotonic deque.',
          init: 'Instantiate VecDeque and pre-allocate result vector.',
          loop: 'Iterate over numbers while maintaining decreasing deque.',
          branch: 'Evict indices outside window: front_idx + k <= i.',
          mutate: 'Pop smaller elements from back and push current index.',
          return: 'Return result vector.',
          comment: 'Monotonic deque in Rust.'
        },
        notes: 'Monotonic deque guarantees each index is pushed and popped at most once, running in O(N) linear time.'
      }),

      buildQuestionItem({
        id: 'first-unique-char',
        code: `pub fn first_uniq_char(s: &str) -> i32 {
    let mut counts = [0i32; 26];
    for b in s.bytes() {
        counts[(b - b'a') as usize] += 1;
    }
    for (i, b) in s.bytes().enumerate() {
        if counts[(b - b'a') as usize] == 1 {
            return i as i32;
        }
    }
    -1
}`,
        explanations: {
          def: 'Define first_uniq_char accepting string slice &str.',
          init: 'Stack-allocate fixed array [0i32; 26].',
          loop: 'First pass counts byte frequencies, second pass locates unique character.',
          mutate: 'Increment counts array.',
          branch: 'Check if character count equals 1.',
          return: 'Return index cast to i32 or -1.',
          comment: 'Byte-level counting.'
        },
        notes: 's.bytes() avoids UTF-8 validation overhead when processing ASCII alphanumeric strings.'
      }),

      buildQuestionItem({
        id: 'recent-counter',
        code: `use std::collections::VecDeque;

pub struct RecentCounter {
    calls: VecDeque<i32>,
}

impl RecentCounter {
    pub fn new() -> Self {
        RecentCounter { calls: VecDeque::new() }
    }

    pub fn ping(&mut self, t: i32) -> i32 {
        self.calls.push_back(t);
        while let Some(&front) = self.calls.front() {
            if front < t - 3000 {
                self.calls.pop_front();
            } else {
                break;
            }
        }
        self.calls.len() as i32
    }
}`,
        explanations: {
          def: 'Define RecentCounter struct with VecDeque.',
          init: 'Instantiate VecDeque in constructor.',
          loop: 'Evict timestamps older than t - 3000.',
          mutate: 'Push timestamp and pop outdated entries.',
          return: 'Return active count cast to i32.',
          comment: 'Rate limiter queue.'
        },
        notes: 'VecDeque provides O(1) push_back and pop_front operations to maintain the sliding time window.'
      }),

      buildQuestionItem({
        id: 'rotting-oranges',
        code: `use std::collections::VecDeque;

pub fn oranges_rotting(mut grid: Vec<Vec<i32>>) -> i32 {
    let rows = grid.len();
    let cols = grid[0].len();
    let mut queue = VecDeque::new();
    let mut fresh = 0;

    for r in 0..rows {
        for c in 0..cols {
            if grid[r][c] == 2 {
                queue.push_back((r, c));
            } else if grid[r][c] == 1 {
                fresh += 1;
            }
        }
    }
    if fresh == 0 { return 0; }

    let mut minutes = 0;
    let dirs = [(-1, 0), (1, 0), (0, -1), (0, 1)];

    while !queue.is_empty() && fresh > 0 {
        let level_size = queue.len();
        for _ in 0..level_size {
            let (r, c) = queue.pop_front().unwrap();
            for (dr, dc) in dirs {
                let nr = r as i32 + dr;
                let nc = c as i32 + dc;
                if nr >= 0 && nr < rows as i32 && nc >= 0 && nc < cols as i32 {
                    let ur = nr as usize;
                    let uc = nc as usize;
                    if grid[ur][uc] == 1 {
                        grid[ur][uc] = 2;
                        fresh -= 1;
                        queue.push_back((ur, uc));
                    }
                }
            }
        }
        minutes += 1;
    }

    if fresh == 0 { minutes } else { -1 }
}`,
        explanations: {
          def: 'Define oranges_rotting implementing multi-source BFS.',
          init: 'Initialize VecDeque and count fresh oranges.',
          loop: 'Grid scan and BFS level-by-level queue traversal.',
          branch: 'Check coordinate bounds and verify orange is fresh.',
          mutate: 'Mark orange rotten (grid[ur][uc] = 2), decrement fresh, push neighbor.',
          return: 'Return minutes elapsed or -1.',
          comment: 'Multi-source BFS in Rust.'
        },
        notes: 'VecDeque processes BFS queue levels with O(1) amortized queue operations.'
      })
    ]
  };
}

module.exports = {
  getQueueQuestions
};
