/**
 * SynapseCS Language-Specific Implementation: C - queue
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['c'] = window.DSA_LANG_CODE['c'] || {};
  window.DSA_LANG_CODE['c']['queue'] = [
  {
    "id": "queue-array-impl",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <stdlib.h>",
        "code": "#include <stdlib.h>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "#include <stdbool.h>",
        "code": "#include <stdbool.h>",
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
        "text": "#define MAX_CAPACITY 100",
        "code": "#define MAX_CAPACITY 100",
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
        "text": "struct ArrayQueue {",
        "code": "struct ArrayQueue {",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "    int data[MAX_CAPACITY];",
        "code": "    int data[MAX_CAPACITY];",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "    int front;",
        "code": "    int front;",
        "tag": "init",
        "lineNum": 9
      },
      {
        "text": "    int rear;",
        "code": "    int rear;",
        "tag": "init",
        "lineNum": 10
      },
      {
        "text": "};",
        "code": "};",
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
        "text": "struct ArrayQueue* createQueue() {",
        "code": "struct ArrayQueue* createQueue() {",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "    struct ArrayQueue* q = (struct ArrayQueue*)malloc(sizeof(struct ArrayQueue));",
        "code": "    struct ArrayQueue* q = (struct ArrayQueue*)malloc(sizeof(struct ArrayQueue));",
        "tag": "def",
        "lineNum": 14
      },
      {
        "text": "    q->front = 0;",
        "code": "    q->front = 0;",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    q->rear = 0;",
        "code": "    q->rear = 0;",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "    return q;",
        "code": "    return q;",
        "tag": "return",
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
        "text": "void enqueue(struct ArrayQueue* q, int val) {",
        "code": "void enqueue(struct ArrayQueue* q, int val) {",
        "tag": "def",
        "lineNum": 20
      },
      {
        "text": "    if (q->rear < MAX_CAPACITY) {",
        "code": "    if (q->rear < MAX_CAPACITY) {",
        "tag": "def",
        "lineNum": 21
      },
      {
        "text": "        q->data[q->rear++] = val;",
        "code": "        q->data[q->rear++] = val;",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "int dequeue(struct ArrayQueue* q) {",
        "code": "int dequeue(struct ArrayQueue* q) {",
        "tag": "def",
        "lineNum": 26
      },
      {
        "text": "    if (q->front < q->rear) {",
        "code": "    if (q->front < q->rear) {",
        "tag": "def",
        "lineNum": 27
      },
      {
        "text": "        return q->data[q->front++];",
        "code": "        return q->data[q->front++];",
        "tag": "return",
        "lineNum": 28
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 29
      },
      {
        "text": "    return -1;",
        "code": "    return -1;",
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
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n\n#define MAX_CAPACITY 100\n\nstruct ArrayQueue {\n    int data[MAX_CAPACITY];\n    int front;\n    int rear;\n};\n\nstruct ArrayQueue* createQueue() {\n    struct ArrayQueue* q = (struct ArrayQueue*)malloc(sizeof(struct ArrayQueue));\n    q->front = 0;\n    q->rear = 0;\n    return q;\n}\n\nvoid enqueue(struct ArrayQueue* q, int val) {\n    if (q->rear < MAX_CAPACITY) {\n        q->data[q->rear++] = val;\n    }\n}\n\nint dequeue(struct ArrayQueue* q) {\n    if (q->front < q->rear) {\n        return q->data[q->front++];\n    }\n    return -1;\n}",
    "explanations": {
      "def": "Define ArrayQueue struct and operations createQueue, enqueue, and dequeue.",
      "init": "Initialize front and rear index pointers to 0.",
      "return": "Return dequeued element or -1 if queue is empty.",
      "comment": "Array-based queue definitions.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Fixed array queue with front and rear pointers provides O(1) enqueue and dequeue operations."
  },
  {
    "id": "queue-linkedlist-impl",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <stdlib.h>",
        "code": "#include <stdlib.h>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "struct QNode {",
        "code": "struct QNode {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    int val;",
        "code": "    int val;",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "    struct QNode* next;",
        "code": "    struct QNode* next;",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "};",
        "code": "};",
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
        "text": "struct LinkedQueue {",
        "code": "struct LinkedQueue {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    struct QNode* front;",
        "code": "    struct QNode* front;",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "    struct QNode* rear;",
        "code": "    struct QNode* rear;",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "};",
        "code": "};",
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
        "text": "struct LinkedQueue* createLinkedQueue() {",
        "code": "struct LinkedQueue* createLinkedQueue() {",
        "tag": "def",
        "lineNum": 14
      },
      {
        "text": "    struct LinkedQueue* q = (struct LinkedQueue*)malloc(sizeof(struct LinkedQueue));",
        "code": "    struct LinkedQueue* q = (struct LinkedQueue*)malloc(sizeof(struct LinkedQueue));",
        "tag": "def",
        "lineNum": 15
      },
      {
        "text": "    q->front = NULL;",
        "code": "    q->front = NULL;",
        "tag": "init",
        "lineNum": 16
      },
      {
        "text": "    q->rear = NULL;",
        "code": "    q->rear = NULL;",
        "tag": "init",
        "lineNum": 17
      },
      {
        "text": "    return q;",
        "code": "    return q;",
        "tag": "return",
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
        "text": "void enqueueLinked(struct LinkedQueue* q, int val) {",
        "code": "void enqueueLinked(struct LinkedQueue* q, int val) {",
        "tag": "def",
        "lineNum": 21
      },
      {
        "text": "    struct QNode* node = (struct QNode*)malloc(sizeof(struct QNode));",
        "code": "    struct QNode* node = (struct QNode*)malloc(sizeof(struct QNode));",
        "tag": "def",
        "lineNum": 22
      },
      {
        "text": "    node->val = val;",
        "code": "    node->val = val;",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "    node->next = NULL;",
        "code": "    node->next = NULL;",
        "tag": "pointer",
        "lineNum": 24
      },
      {
        "text": "    if (q->rear == NULL) {",
        "code": "    if (q->rear == NULL) {",
        "tag": "def",
        "lineNum": 25
      },
      {
        "text": "        q->front = node;",
        "code": "        q->front = node;",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "        q->rear = node;",
        "code": "        q->rear = node;",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "        return;",
        "code": "        return;",
        "tag": "return",
        "lineNum": 28
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 29
      },
      {
        "text": "    q->rear->next = node;",
        "code": "    q->rear->next = node;",
        "tag": "pointer",
        "lineNum": 30
      },
      {
        "text": "    q->rear = node;",
        "code": "    q->rear = node;",
        "tag": "exec",
        "lineNum": 31
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 32
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 33
      },
      {
        "text": "int dequeueLinked(struct LinkedQueue* q) {",
        "code": "int dequeueLinked(struct LinkedQueue* q) {",
        "tag": "def",
        "lineNum": 34
      },
      {
        "text": "    if (q->front == NULL) return -1;",
        "code": "    if (q->front == NULL) return -1;",
        "tag": "branch",
        "lineNum": 35
      },
      {
        "text": "    struct QNode* temp = q->front;",
        "code": "    struct QNode* temp = q->front;",
        "tag": "def",
        "lineNum": 36
      },
      {
        "text": "    int val = temp->val;",
        "code": "    int val = temp->val;",
        "tag": "init",
        "lineNum": 37
      },
      {
        "text": "    q->front = q->front->next;",
        "code": "    q->front = q->front->next;",
        "tag": "pointer",
        "lineNum": 38
      },
      {
        "text": "    if (q->front == NULL) q->rear = NULL;",
        "code": "    if (q->front == NULL) q->rear = NULL;",
        "tag": "branch",
        "lineNum": 39
      },
      {
        "text": "    free(temp);",
        "code": "    free(temp);",
        "tag": "mutate",
        "lineNum": 40
      },
      {
        "text": "    return val;",
        "code": "    return val;",
        "tag": "return",
        "lineNum": 41
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 42
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct QNode {\n    int val;\n    struct QNode* next;\n};\n\nstruct LinkedQueue {\n    struct QNode* front;\n    struct QNode* rear;\n};\n\nstruct LinkedQueue* createLinkedQueue() {\n    struct LinkedQueue* q = (struct LinkedQueue*)malloc(sizeof(struct LinkedQueue));\n    q->front = NULL;\n    q->rear = NULL;\n    return q;\n}\n\nvoid enqueueLinked(struct LinkedQueue* q, int val) {\n    struct QNode* node = (struct QNode*)malloc(sizeof(struct QNode));\n    node->val = val;\n    node->next = NULL;\n    if (q->rear == NULL) {\n        q->front = node;\n        q->rear = node;\n        return;\n    }\n    q->rear->next = node;\n    q->rear = node;\n}\n\nint dequeueLinked(struct LinkedQueue* q) {\n    if (q->front == NULL) return -1;\n    struct QNode* temp = q->front;\n    int val = temp->val;\n    q->front = q->front->next;\n    if (q->front == NULL) q->rear = NULL;\n    free(temp);\n    return val;\n}",
    "explanations": {
      "def": "Define QNode and LinkedQueue structs and methods.",
      "init": "Set front and rear to NULL.",
      "branch": "Handle empty queue insertion and removal.",
      "pointer": "Update q->rear->next = node and q->front = q->front->next.",
      "mutate": "Deallocate removed node memory using free(temp).",
      "return": "Return dequeued integer value.",
      "comment": "Linked queue declarations.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Linked queue has no maximum capacity limit; memory must be freed explicitly on dequeue to prevent leaks."
  },
  {
    "id": "queue-circular-array",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <stdlib.h>",
        "code": "#include <stdlib.h>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "#include <stdbool.h>",
        "code": "#include <stdbool.h>",
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
        "text": "struct MyCircularQueue {",
        "code": "struct MyCircularQueue {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "    int* data;",
        "code": "    int* data;",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    int front;",
        "code": "    int front;",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "    int rear;",
        "code": "    int rear;",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "    int size;",
        "code": "    int size;",
        "tag": "init",
        "lineNum": 9
      },
      {
        "text": "    int capacity;",
        "code": "    int capacity;",
        "tag": "init",
        "lineNum": 10
      },
      {
        "text": "};",
        "code": "};",
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
        "text": "struct MyCircularQueue* myCircularQueueCreate(int k) {",
        "code": "struct MyCircularQueue* myCircularQueueCreate(int k) {",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "    struct MyCircularQueue* obj = (struct MyCircularQueue*)malloc(sizeof(struct MyCircularQueue));",
        "code": "    struct MyCircularQueue* obj = (struct MyCircularQueue*)malloc(sizeof(struct MyCircularQueue));",
        "tag": "def",
        "lineNum": 14
      },
      {
        "text": "    obj->capacity = k;",
        "code": "    obj->capacity = k;",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    obj->data = (int*)malloc(k * sizeof(int));",
        "code": "    obj->data = (int*)malloc(k * sizeof(int));",
        "tag": "alloc",
        "lineNum": 16
      },
      {
        "text": "    obj->front = 0;",
        "code": "    obj->front = 0;",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "    obj->rear = -1;",
        "code": "    obj->rear = -1;",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "    obj->size = 0;",
        "code": "    obj->size = 0;",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "    return obj;",
        "code": "    return obj;",
        "tag": "return",
        "lineNum": 20
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "bool myCircularQueueEnQueue(struct MyCircularQueue* obj, int value) {",
        "code": "bool myCircularQueueEnQueue(struct MyCircularQueue* obj, int value) {",
        "tag": "def",
        "lineNum": 23
      },
      {
        "text": "    if (obj->size == obj->capacity) return false;",
        "code": "    if (obj->size == obj->capacity) return false;",
        "tag": "branch",
        "lineNum": 24
      },
      {
        "text": "    obj->rear = (obj->rear + 1) % obj->capacity;",
        "code": "    obj->rear = (obj->rear + 1) % obj->capacity;",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "    obj->data[obj->rear] = value;",
        "code": "    obj->data[obj->rear] = value;",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "    obj->size++;",
        "code": "    obj->size++;",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "    return true;",
        "code": "    return true;",
        "tag": "return",
        "lineNum": 28
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 29
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 30
      },
      {
        "text": "bool myCircularQueueDeQueue(struct MyCircularQueue* obj) {",
        "code": "bool myCircularQueueDeQueue(struct MyCircularQueue* obj) {",
        "tag": "def",
        "lineNum": 31
      },
      {
        "text": "    if (obj->size == 0) return false;",
        "code": "    if (obj->size == 0) return false;",
        "tag": "branch",
        "lineNum": 32
      },
      {
        "text": "    obj->front = (obj->front + 1) % obj->capacity;",
        "code": "    obj->front = (obj->front + 1) % obj->capacity;",
        "tag": "exec",
        "lineNum": 33
      },
      {
        "text": "    obj->size--;",
        "code": "    obj->size--;",
        "tag": "exec",
        "lineNum": 34
      },
      {
        "text": "    return true;",
        "code": "    return true;",
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
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n\nstruct MyCircularQueue {\n    int* data;\n    int front;\n    int rear;\n    int size;\n    int capacity;\n};\n\nstruct MyCircularQueue* myCircularQueueCreate(int k) {\n    struct MyCircularQueue* obj = (struct MyCircularQueue*)malloc(sizeof(struct MyCircularQueue));\n    obj->capacity = k;\n    obj->data = (int*)malloc(k * sizeof(int));\n    obj->front = 0;\n    obj->rear = -1;\n    obj->size = 0;\n    return obj;\n}\n\nbool myCircularQueueEnQueue(struct MyCircularQueue* obj, int value) {\n    if (obj->size == obj->capacity) return false;\n    obj->rear = (obj->rear + 1) % obj->capacity;\n    obj->data[obj->rear] = value;\n    obj->size++;\n    return true;\n}\n\nbool myCircularQueueDeQueue(struct MyCircularQueue* obj) {\n    if (obj->size == 0) return false;\n    obj->front = (obj->front + 1) % obj->capacity;\n    obj->size--;\n    return true;\n}",
    "explanations": {
      "def": "Define MyCircularQueue struct and ring buffer methods.",
      "alloc": "Allocate circular queue struct and buffer using malloc().",
      "init": "Initialize front = 0, rear = -1, and size = 0.",
      "branch": "Check full/empty boundary conditions.",
      "return": "Return boolean indicating operation success.",
      "comment": "Circular queue implementation.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Ring buffer uses modulo arithmetic ((rear + 1) % capacity) to reuse freed slots without shifting elements."
  },
  {
    "id": "queue-circular-deque",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <stdlib.h>",
        "code": "#include <stdlib.h>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "#include <stdbool.h>",
        "code": "#include <stdbool.h>",
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
        "text": "struct MyCircularDeque {",
        "code": "struct MyCircularDeque {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "    int* data;",
        "code": "    int* data;",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    int front;",
        "code": "    int front;",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "    int rear;",
        "code": "    int rear;",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "    int size;",
        "code": "    int size;",
        "tag": "init",
        "lineNum": 9
      },
      {
        "text": "    int capacity;",
        "code": "    int capacity;",
        "tag": "init",
        "lineNum": 10
      },
      {
        "text": "};",
        "code": "};",
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
        "text": "struct MyCircularDeque* myCircularDequeCreate(int k) {",
        "code": "struct MyCircularDeque* myCircularDequeCreate(int k) {",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "    struct MyCircularDeque* obj = (struct MyCircularDeque*)malloc(sizeof(struct MyCircularDeque));",
        "code": "    struct MyCircularDeque* obj = (struct MyCircularDeque*)malloc(sizeof(struct MyCircularDeque));",
        "tag": "def",
        "lineNum": 14
      },
      {
        "text": "    obj->capacity = k;",
        "code": "    obj->capacity = k;",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    obj->data = (int*)malloc(k * sizeof(int));",
        "code": "    obj->data = (int*)malloc(k * sizeof(int));",
        "tag": "alloc",
        "lineNum": 16
      },
      {
        "text": "    obj->front = 0;",
        "code": "    obj->front = 0;",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "    obj->rear = 0;",
        "code": "    obj->rear = 0;",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "    obj->size = 0;",
        "code": "    obj->size = 0;",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "    return obj;",
        "code": "    return obj;",
        "tag": "return",
        "lineNum": 20
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "bool myCircularDequeInsertFront(struct MyCircularDeque* obj, int value) {",
        "code": "bool myCircularDequeInsertFront(struct MyCircularDeque* obj, int value) {",
        "tag": "def",
        "lineNum": 23
      },
      {
        "text": "    if (obj->size == obj->capacity) return false;",
        "code": "    if (obj->size == obj->capacity) return false;",
        "tag": "branch",
        "lineNum": 24
      },
      {
        "text": "    obj->front = (obj->front - 1 + obj->capacity) % obj->capacity;",
        "code": "    obj->front = (obj->front - 1 + obj->capacity) % obj->capacity;",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "    obj->data[obj->front] = value;",
        "code": "    obj->data[obj->front] = value;",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "    obj->size++;",
        "code": "    obj->size++;",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "    return true;",
        "code": "    return true;",
        "tag": "return",
        "lineNum": 28
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 29
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 30
      },
      {
        "text": "bool myCircularDequeInsertLast(struct MyCircularDeque* obj, int value) {",
        "code": "bool myCircularDequeInsertLast(struct MyCircularDeque* obj, int value) {",
        "tag": "def",
        "lineNum": 31
      },
      {
        "text": "    if (obj->size == obj->capacity) return false;",
        "code": "    if (obj->size == obj->capacity) return false;",
        "tag": "branch",
        "lineNum": 32
      },
      {
        "text": "    obj->data[obj->rear] = value;",
        "code": "    obj->data[obj->rear] = value;",
        "tag": "exec",
        "lineNum": 33
      },
      {
        "text": "    obj->rear = (obj->rear + 1) % obj->capacity;",
        "code": "    obj->rear = (obj->rear + 1) % obj->capacity;",
        "tag": "exec",
        "lineNum": 34
      },
      {
        "text": "    obj->size++;",
        "code": "    obj->size++;",
        "tag": "exec",
        "lineNum": 35
      },
      {
        "text": "    return true;",
        "code": "    return true;",
        "tag": "return",
        "lineNum": 36
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 37
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n\nstruct MyCircularDeque {\n    int* data;\n    int front;\n    int rear;\n    int size;\n    int capacity;\n};\n\nstruct MyCircularDeque* myCircularDequeCreate(int k) {\n    struct MyCircularDeque* obj = (struct MyCircularDeque*)malloc(sizeof(struct MyCircularDeque));\n    obj->capacity = k;\n    obj->data = (int*)malloc(k * sizeof(int));\n    obj->front = 0;\n    obj->rear = 0;\n    obj->size = 0;\n    return obj;\n}\n\nbool myCircularDequeInsertFront(struct MyCircularDeque* obj, int value) {\n    if (obj->size == obj->capacity) return false;\n    obj->front = (obj->front - 1 + obj->capacity) % obj->capacity;\n    obj->data[obj->front] = value;\n    obj->size++;\n    return true;\n}\n\nbool myCircularDequeInsertLast(struct MyCircularDeque* obj, int value) {\n    if (obj->size == obj->capacity) return false;\n    obj->data[obj->rear] = value;\n    obj->rear = (obj->rear + 1) % obj->capacity;\n    obj->size++;\n    return true;\n}",
    "explanations": {
      "def": "Define MyCircularDeque struct supporting double-ended operations.",
      "alloc": "Allocate deque and backing array via malloc().",
      "init": "Initialize front, rear, and size to 0.",
      "branch": "Guard against overflow when size == capacity.",
      "return": "Return boolean indicating success.",
      "comment": "Double-ended queue.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Adding capacity before applying modulo prevents negative numbers in C when wrapping backwards."
  },
  {
    "id": "stack-using-queues",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <stdlib.h>",
        "code": "#include <stdlib.h>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "#include <stdbool.h>",
        "code": "#include <stdbool.h>",
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
        "text": "struct MyStack {",
        "code": "struct MyStack {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "    int q[100];",
        "code": "    int q[100];",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "    int front;",
        "code": "    int front;",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "    int rear;",
        "code": "    int rear;",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "};",
        "code": "};",
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
        "text": "struct MyStack* myStackCreate() {",
        "code": "struct MyStack* myStackCreate() {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "    struct MyStack* s = (struct MyStack*)malloc(sizeof(struct MyStack));",
        "code": "    struct MyStack* s = (struct MyStack*)malloc(sizeof(struct MyStack));",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "    s->front = 0;",
        "code": "    s->front = 0;",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    s->rear = 0;",
        "code": "    s->rear = 0;",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    return s;",
        "code": "    return s;",
        "tag": "return",
        "lineNum": 15
      },
      {
        "text": "}",
        "code": "}",
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
        "text": "void myStackPush(struct MyStack* obj, int x) {",
        "code": "void myStackPush(struct MyStack* obj, int x) {",
        "tag": "def",
        "lineNum": 18
      },
      {
        "text": "    obj->q[obj->rear++] = x;",
        "code": "    obj->q[obj->rear++] = x;",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "    int count = obj->rear - obj->front - 1;",
        "code": "    int count = obj->rear - obj->front - 1;",
        "tag": "init",
        "lineNum": 20
      },
      {
        "text": "    for (int i = 0; i < count; i++) {",
        "code": "    for (int i = 0; i < count; i++) {",
        "tag": "def",
        "lineNum": 21
      },
      {
        "text": "        obj->q[obj->rear++] = obj->q[obj->front++];",
        "code": "        obj->q[obj->rear++] = obj->q[obj->front++];",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "int myStackPop(struct MyStack* obj) {",
        "code": "int myStackPop(struct MyStack* obj) {",
        "tag": "def",
        "lineNum": 26
      },
      {
        "text": "    return obj->q[obj->front++];",
        "code": "    return obj->q[obj->front++];",
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
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n\nstruct MyStack {\n    int q[100];\n    int front;\n    int rear;\n};\n\nstruct MyStack* myStackCreate() {\n    struct MyStack* s = (struct MyStack*)malloc(sizeof(struct MyStack));\n    s->front = 0;\n    s->rear = 0;\n    return s;\n}\n\nvoid myStackPush(struct MyStack* obj, int x) {\n    obj->q[obj->rear++] = x;\n    int count = obj->rear - obj->front - 1;\n    for (int i = 0; i < count; i++) {\n        obj->q[obj->rear++] = obj->q[obj->front++];\n    }\n}\n\nint myStackPop(struct MyStack* obj) {\n    return obj->q[obj->front++];\n}",
    "explanations": {
      "def": "Define MyStack using a single FIFO queue.",
      "init": "Initialize queue indices.",
      "return": "Return dequeued element.",
      "comment": "Stack using single queue.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Rotating the queue on push takes O(N) time but allows O(1) top/pop operations."
  },
  {
    "id": "sliding-window-max",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <stdlib.h>",
        "code": "#include <stdlib.h>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "int* maxSlidingWindow(int* nums, int numsSize, int k, int* returnSize) {",
        "code": "int* maxSlidingWindow(int* nums, int numsSize, int k, int* returnSize) {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    if (numsSize == 0 || k == 0) {",
        "code": "    if (numsSize == 0 || k == 0) {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "        *returnSize = 0;",
        "code": "        *returnSize = 0;",
        "tag": "comment",
        "lineNum": 6
      },
      {
        "text": "        return NULL;",
        "code": "        return NULL;",
        "tag": "return",
        "lineNum": 7
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    int* res = (int*)malloc((numsSize - k + 1) * sizeof(int));",
        "code": "    int* res = (int*)malloc((numsSize - k + 1) * sizeof(int));",
        "tag": "alloc",
        "lineNum": 9
      },
      {
        "text": "    int* deque = (int*)malloc(numsSize * sizeof(int));",
        "code": "    int* deque = (int*)malloc(numsSize * sizeof(int));",
        "tag": "alloc",
        "lineNum": 10
      },
      {
        "text": "    int head = 0, tail = 0;",
        "code": "    int head = 0, tail = 0;",
        "tag": "init",
        "lineNum": 11
      },
      {
        "text": "    int resIdx = 0;",
        "code": "    int resIdx = 0;",
        "tag": "init",
        "lineNum": 12
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    for (int i = 0; i < numsSize; i++) {",
        "code": "    for (int i = 0; i < numsSize; i++) {",
        "tag": "def",
        "lineNum": 14
      },
      {
        "text": "        while (tail > head && deque[head] < i - k + 1) {",
        "code": "        while (tail > head && deque[head] < i - k + 1) {",
        "tag": "def",
        "lineNum": 15
      },
      {
        "text": "            head++;",
        "code": "            head++;",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "        while (tail > head && nums[deque[tail - 1]] < nums[i]) {",
        "code": "        while (tail > head && nums[deque[tail - 1]] < nums[i]) {",
        "tag": "def",
        "lineNum": 18
      },
      {
        "text": "            tail--;",
        "code": "            tail--;",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "        deque[tail++] = i;",
        "code": "        deque[tail++] = i;",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "        if (i >= k - 1) {",
        "code": "        if (i >= k - 1) {",
        "tag": "def",
        "lineNum": 22
      },
      {
        "text": "            res[resIdx++] = nums[deque[head]];",
        "code": "            res[resIdx++] = nums[deque[head]];",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "    *returnSize = resIdx;",
        "code": "    *returnSize = resIdx;",
        "tag": "comment",
        "lineNum": 26
      },
      {
        "text": "    free(deque);",
        "code": "    free(deque);",
        "tag": "mutate",
        "lineNum": 27
      },
      {
        "text": "    return res;",
        "code": "    return res;",
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
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nint* maxSlidingWindow(int* nums, int numsSize, int k, int* returnSize) {\n    if (numsSize == 0 || k == 0) {\n        *returnSize = 0;\n        return NULL;\n    }\n    int* res = (int*)malloc((numsSize - k + 1) * sizeof(int));\n    int* deque = (int*)malloc(numsSize * sizeof(int));\n    int head = 0, tail = 0;\n    int resIdx = 0;\n\n    for (int i = 0; i < numsSize; i++) {\n        while (tail > head && deque[head] < i - k + 1) {\n            head++;\n        }\n        while (tail > head && nums[deque[tail - 1]] < nums[i]) {\n            tail--;\n        }\n        deque[tail++] = i;\n        if (i >= k - 1) {\n            res[resIdx++] = nums[deque[head]];\n        }\n    }\n    *returnSize = resIdx;\n    free(deque);\n    return res;\n}",
    "explanations": {
      "def": "Define maxSlidingWindow using monotonic deque.",
      "alloc": "Allocate result array and index deque buffer via malloc().",
      "init": "Initialize deque head/tail pointers and result index.",
      "mutate": "Pop smaller elements from deque tail, push i, and record window maximum.",
      "return": "Return result array and free temporary deque buffer.",
      "comment": "Monotonic deque.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Monotonic deque maintains decreasing order of elements, enabling O(N) overall runtime for sliding window maximum."
  },
  {
    "id": "first-unique-char",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <string.h>",
        "code": "#include <string.h>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "int firstUniqChar(char* s) {",
        "code": "int firstUniqChar(char* s) {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    int counts[26] = {0};",
        "code": "    int counts[26] = {0};",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "    int n = strlen(s);",
        "code": "    int n = strlen(s);",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    for (int i = 0; i < n; i++) {",
        "code": "    for (int i = 0; i < n; i++) {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "        counts[s[i] - 'a']++;",
        "code": "        counts[s[i] - 'a']++;",
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
        "text": "    for (int i = 0; i < n; i++) {",
        "code": "    for (int i = 0; i < n; i++) {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "        if (counts[s[i] - 'a'] == 1) {",
        "code": "        if (counts[s[i] - 'a'] == 1) {",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "            return i;",
        "code": "            return i;",
        "tag": "return",
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
        "text": "    return -1;",
        "code": "    return -1;",
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
    "rawCode": "#include <stdio.h>\n#include <string.h>\n\nint firstUniqChar(char* s) {\n    int counts[26] = {0};\n    int n = strlen(s);\n\n    for (int i = 0; i < n; i++) {\n        counts[s[i] - 'a']++;\n    }\n    for (int i = 0; i < n; i++) {\n        if (counts[s[i] - 'a'] == 1) {\n            return i;\n        }\n    }\n    return -1;\n}",
    "explanations": {
      "def": "Define firstUniqChar taking C string.",
      "init": "Zero-initialize 26-element integer frequency array.",
      "return": "Return index of first unique character or -1.",
      "comment": "ASCII counting.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Two linear passes with a fixed 26-element array run in O(N) time and O(1) space."
  },
  {
    "id": "recent-counter",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <stdlib.h>",
        "code": "#include <stdlib.h>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "struct RecentCounter {",
        "code": "struct RecentCounter {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    int calls[10000];",
        "code": "    int calls[10000];",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "    int front;",
        "code": "    int front;",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "    int rear;",
        "code": "    int rear;",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "};",
        "code": "};",
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
        "text": "struct RecentCounter* recentCounterCreate() {",
        "code": "struct RecentCounter* recentCounterCreate() {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "    struct RecentCounter* obj = (struct RecentCounter*)malloc(sizeof(struct RecentCounter));",
        "code": "    struct RecentCounter* obj = (struct RecentCounter*)malloc(sizeof(struct RecentCounter));",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "    obj->front = 0;",
        "code": "    obj->front = 0;",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    obj->rear = 0;",
        "code": "    obj->rear = 0;",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    return obj;",
        "code": "    return obj;",
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
        "text": "int recentCounterPing(struct RecentCounter* obj, int t) {",
        "code": "int recentCounterPing(struct RecentCounter* obj, int t) {",
        "tag": "def",
        "lineNum": 17
      },
      {
        "text": "    obj->calls[obj->rear++] = t;",
        "code": "    obj->calls[obj->rear++] = t;",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "    while (obj->calls[obj->front] < t - 3000) {",
        "code": "    while (obj->calls[obj->front] < t - 3000) {",
        "tag": "def",
        "lineNum": 19
      },
      {
        "text": "        obj->front++;",
        "code": "        obj->front++;",
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
        "text": "    return obj->rear - obj->front;",
        "code": "    return obj->rear - obj->front;",
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
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct RecentCounter {\n    int calls[10000];\n    int front;\n    int rear;\n};\n\nstruct RecentCounter* recentCounterCreate() {\n    struct RecentCounter* obj = (struct RecentCounter*)malloc(sizeof(struct RecentCounter));\n    obj->front = 0;\n    obj->rear = 0;\n    return obj;\n}\n\nint recentCounterPing(struct RecentCounter* obj, int t) {\n    obj->calls[obj->rear++] = t;\n    while (obj->calls[obj->front] < t - 3000) {\n        obj->front++;\n    }\n    return obj->rear - obj->front;\n}",
    "explanations": {
      "def": "Define RecentCounter struct and methods create/ping.",
      "init": "Initialize front and rear index pointers to 0.",
      "return": "Return active call count: rear - front.",
      "comment": "Rate limiter queue.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Queue maintains active timestamps within the sliding [t - 3000, t] time window."
  },
  {
    "id": "rotting-oranges",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <stdlib.h>",
        "code": "#include <stdlib.h>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "struct Point {",
        "code": "struct Point {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    int r;",
        "code": "    int r;",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "    int c;",
        "code": "    int c;",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "};",
        "code": "};",
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
        "text": "int orangesRotting(int** grid, int gridSize, int* gridColSize) {",
        "code": "int orangesRotting(int** grid, int gridSize, int* gridColSize) {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    int rows = gridSize, cols = gridColSize[0];",
        "code": "    int rows = gridSize, cols = gridColSize[0];",
        "tag": "init",
        "lineNum": 10
      },
      {
        "text": "    struct Point queue[100];",
        "code": "    struct Point queue[100];",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "    int front = 0, rear = 0;",
        "code": "    int front = 0, rear = 0;",
        "tag": "init",
        "lineNum": 12
      },
      {
        "text": "    int fresh = 0;",
        "code": "    int fresh = 0;",
        "tag": "init",
        "lineNum": 13
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    for (int r = 0; r < rows; r++) {",
        "code": "    for (int r = 0; r < rows; r++) {",
        "tag": "def",
        "lineNum": 15
      },
      {
        "text": "        for (int c = 0; c < cols; c++) {",
        "code": "        for (int c = 0; c < cols; c++) {",
        "tag": "def",
        "lineNum": 16
      },
      {
        "text": "            if (grid[r][c] == 2) queue[rear++] = (struct Point){r, c};",
        "code": "            if (grid[r][c] == 2) queue[rear++] = (struct Point){r, c};",
        "tag": "branch",
        "lineNum": 17
      },
      {
        "text": "            else if (grid[r][c] == 1) fresh++;",
        "code": "            else if (grid[r][c] == 1) fresh++;",
        "tag": "branch",
        "lineNum": 18
      },
      {
        "text": "        }",
        "code": "        }",
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
        "text": "    if (fresh == 0) return 0;",
        "code": "    if (fresh == 0) return 0;",
        "tag": "branch",
        "lineNum": 21
      },
      {
        "text": "    int minutes = 0;",
        "code": "    int minutes = 0;",
        "tag": "init",
        "lineNum": 22
      },
      {
        "text": "    int dirs[4][2] = {{-1,0},{1,0},{0,-1},{0,1}};",
        "code": "    int dirs[4][2] = {{-1,0},{1,0},{0,-1},{0,1}};",
        "tag": "init",
        "lineNum": 23
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "    while (front < rear && fresh > 0) {",
        "code": "    while (front < rear && fresh > 0) {",
        "tag": "def",
        "lineNum": 25
      },
      {
        "text": "        int levelSize = rear - front;",
        "code": "        int levelSize = rear - front;",
        "tag": "init",
        "lineNum": 26
      },
      {
        "text": "        for (int i = 0; i < levelSize; i++) {",
        "code": "        for (int i = 0; i < levelSize; i++) {",
        "tag": "def",
        "lineNum": 27
      },
      {
        "text": "            struct Point p = queue[front++];",
        "code": "            struct Point p = queue[front++];",
        "tag": "def",
        "lineNum": 28
      },
      {
        "text": "            for (int d = 0; d < 4; d++) {",
        "code": "            for (int d = 0; d < 4; d++) {",
        "tag": "def",
        "lineNum": 29
      },
      {
        "text": "                int nr = p.r + dirs[d][0], nc = p.c + dirs[d][1];",
        "code": "                int nr = p.r + dirs[d][0], nc = p.c + dirs[d][1];",
        "tag": "init",
        "lineNum": 30
      },
      {
        "text": "                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == 1) {",
        "code": "                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == 1) {",
        "tag": "def",
        "lineNum": 31
      },
      {
        "text": "                    grid[nr][nc] = 2;",
        "code": "                    grid[nr][nc] = 2;",
        "tag": "exec",
        "lineNum": 32
      },
      {
        "text": "                    fresh--;",
        "code": "                    fresh--;",
        "tag": "exec",
        "lineNum": 33
      },
      {
        "text": "                    queue[rear++] = (struct Point){nr, nc};",
        "code": "                    queue[rear++] = (struct Point){nr, nc};",
        "tag": "exec",
        "lineNum": 34
      },
      {
        "text": "                }",
        "code": "                }",
        "tag": "exec",
        "lineNum": 35
      },
      {
        "text": "            }",
        "code": "            }",
        "tag": "exec",
        "lineNum": 36
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 37
      },
      {
        "text": "        minutes++;",
        "code": "        minutes++;",
        "tag": "exec",
        "lineNum": 38
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 39
      },
      {
        "text": "    return fresh == 0 ? minutes : -1;",
        "code": "    return fresh == 0 ? minutes : -1;",
        "tag": "return",
        "lineNum": 40
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 41
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Point {\n    int r;\n    int c;\n};\n\nint orangesRotting(int** grid, int gridSize, int* gridColSize) {\n    int rows = gridSize, cols = gridColSize[0];\n    struct Point queue[100];\n    int front = 0, rear = 0;\n    int fresh = 0;\n\n    for (int r = 0; r < rows; r++) {\n        for (int c = 0; c < cols; c++) {\n            if (grid[r][c] == 2) queue[rear++] = (struct Point){r, c};\n            else if (grid[r][c] == 1) fresh++;\n        }\n    }\n    if (fresh == 0) return 0;\n    int minutes = 0;\n    int dirs[4][2] = {{-1,0},{1,0},{0,-1},{0,1}};\n\n    while (front < rear && fresh > 0) {\n        int levelSize = rear - front;\n        for (int i = 0; i < levelSize; i++) {\n            struct Point p = queue[front++];\n            for (int d = 0; d < 4; d++) {\n                int nr = p.r + dirs[d][0], nc = p.c + dirs[d][1];\n                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == 1) {\n                    grid[nr][nc] = 2;\n                    fresh--;\n                    queue[rear++] = (struct Point){nr, nc};\n                }\n            }\n        }\n        minutes++;\n    }\n    return fresh == 0 ? minutes : -1;\n}",
    "explanations": {
      "def": "Define orangesRotting implementing multi-source BFS.",
      "init": "Initialize queue, fresh count, and 4-directional offsets.",
      "branch": "Check grid boundaries and verify orange is fresh (grid[nr][nc] == 1).",
      "return": "Return minutes elapsed or -1 if unreachable fresh oranges remain.",
      "comment": "Multi-source BFS in C.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Multi-source BFS processes all initially rotten oranges concurrently level by level to compute minimal rotting time."
  }
];
})(typeof window !== 'undefined' ? window : global);
