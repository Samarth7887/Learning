const { buildQuestionItem } = require('./helper');

function getLinkedListQuestions() {
  return {
    c: [
      buildQuestionItem({
        id: 'll-create',
        code: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* createNode(int val) {
    struct ListNode* node = (struct ListNode*)malloc(sizeof(struct ListNode));
    node->val = val;
    node->next = NULL;
    return node;
}

int main() {
    struct ListNode* head = createNode(10);
    head->next = createNode(20);
    head->next->next = createNode(30);
    return 0;
}`,
        explanations: {
          def: 'Declare ListNode struct containing integer val and next pointer.',
          alloc: 'Allocate node memory dynamically via malloc().',
          init: 'Set node value and initialize next pointer to NULL.',
          pointer: 'Link nodes using pointer arrow notation: head->next = createNode(20).',
          return: 'Return allocated node pointer from constructor.',
          comment: 'Header inclusions.'
        },
        notes: 'In C, linked lists require explicit heap allocation via malloc() and manual traversal; failing to free() allocated nodes causes memory leaks.'
      }),

      buildQuestionItem({
        id: 'll-insert-head',
        code: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* insertHead(struct ListNode* head, int val) {
    struct ListNode* newNode = (struct ListNode*)malloc(sizeof(struct ListNode));
    newNode->val = val;
    newNode->next = head;
    return newNode;
}`,
        explanations: {
          def: 'Define insertHead taking head pointer and integer value.',
          alloc: 'Allocate memory for new node with malloc().',
          init: 'Set newNode->val = val.',
          pointer: 'Set newNode->next = head to point to previous head.',
          return: 'Return newNode as the updated head pointer.',
          comment: 'Prototypes.'
        },
        notes: 'Inserting at head is an O(1) operation requiring only one allocation and pointer reassignment.'
      }),

      buildQuestionItem({
        id: 'll-insert-tail',
        code: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* insertTail(struct ListNode* head, int val) {
    struct ListNode* newNode = (struct ListNode*)malloc(sizeof(struct ListNode));
    newNode->val = val;
    newNode->next = NULL;
    if (head == NULL) return newNode;

    struct ListNode* curr = head;
    while (curr->next != NULL) {
        curr = curr->next;
    }
    curr->next = newNode;
    return head;
}`,
        explanations: {
          def: 'Define insertTail appending new node at list end.',
          alloc: 'Allocate memory for new tail node via malloc().',
          init: 'Set newNode->val and initialize next pointer to NULL.',
          branch: 'If head is NULL, return newNode as the new head.',
          loop: 'Traverse list until reaching last node (curr->next == NULL).',
          pointer: 'Attach newNode to curr->next.',
          return: 'Return head of the list.',
          comment: 'Function header.'
        },
        notes: 'Appending to tail takes O(N) time without a tail pointer, or O(1) if a tail pointer is maintained.'
      }),

      buildQuestionItem({
        id: 'll-insert-kth',
        code: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* insertKth(struct ListNode* head, int index, int val) {
    if (index == 0) {
        struct ListNode* newNode = (struct ListNode*)malloc(sizeof(struct ListNode));
        newNode->val = val;
        newNode->next = head;
        return newNode;
    }
    struct ListNode* curr = head;
    for (int i = 0; i < index - 1 && curr != NULL; i++) {
        curr = curr->next;
    }
    if (curr == NULL) return head;

    struct ListNode* newNode = (struct ListNode*)malloc(sizeof(struct ListNode));
    newNode->val = val;
    newNode->next = curr->next;
    curr->next = newNode;
    return head;
}`,
        explanations: {
          def: 'Define insertKth inserting element at 0-indexed position.',
          branch: 'Check if index is 0 or if traversal reached out of bounds.',
          alloc: 'Allocate new node memory via malloc().',
          init: 'Assign node value and link into chain.',
          loop: 'Iterate index - 1 times to find predecessor node.',
          pointer: 'Splice node by setting newNode->next = curr->next and curr->next = newNode.',
          return: 'Return head pointer.',
          comment: 'Definitions.'
        },
        notes: 'Splicing into a linked list requires updating predecessor pointer curr->next; order of assignments is critical to avoid dropping the rest of the list.'
      }),

      buildQuestionItem({
        id: 'll-delete-head',
        code: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* deleteHead(struct ListNode* head) {
    if (head == NULL) return NULL;
    struct ListNode* newHead = head->next;
    free(head);
    return newHead;
}`,
        explanations: {
          def: 'Define deleteHead removing the first node of the list.',
          branch: 'Return NULL if list is already empty.',
          init: 'Save second node reference newHead = head->next.',
          mutate: 'Deallocate old head node using free(head).',
          return: 'Return newHead.',
          comment: 'Function declaration.'
        },
        notes: 'Always save head->next into a temporary variable before calling free(head) to avoid accessing freed memory (use-after-free).'
      }),

      buildQuestionItem({
        id: 'll-delete-tail',
        code: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* deleteTail(struct ListNode* head) {
    if (head == NULL) return NULL;
    if (head->next == NULL) {
        free(head);
        return NULL;
    }
    struct ListNode* curr = head;
    while (curr->next->next != NULL) {
        curr = curr->next;
    }
    free(curr->next);
    curr->next = NULL;
    return head;
}`,
        explanations: {
          def: 'Define deleteTail removing last node in linked list.',
          branch: 'Handle empty list or single-node list cases.',
          loop: 'Traverse until reaching second-to-last node (curr->next->next == NULL).',
          mutate: 'Free tail node with free(curr->next).',
          pointer: 'Set curr->next = NULL to mark new tail.',
          return: 'Return list head.',
          comment: 'Standard C prototypes.'
        },
        notes: 'Deleting the tail requires locating the second-to-last node so its next pointer can be set to NULL after freeing the tail.'
      }),

      buildQuestionItem({
        id: 'll-delete-val',
        code: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* deleteVal(struct ListNode* head, int target) {
    struct ListNode dummy;
    dummy.next = head;
    struct ListNode* curr = &dummy;

    while (curr->next != NULL) {
        if (curr->next->val == target) {
            struct ListNode* temp = curr->next;
            curr->next = curr->next->next;
            free(temp);
            break;
        }
        curr = curr->next;
    }
    return dummy.next;
}`,
        explanations: {
          def: 'Define deleteVal removing first occurrence of target value.',
          init: 'Stack-allocate dummy sentinel node dummy.next = head.',
          loop: 'Traverse list while curr->next is non-NULL.',
          branch: 'If curr->next->val == target, unlink and free target node.',
          pointer: 'Bypass node by updating curr->next = curr->next->next.',
          mutate: 'Deallocate deleted node memory via free(temp).',
          return: 'Return dummy.next as modified head pointer.',
          comment: 'Dummy node pattern in C.'
        },
        notes: 'Stack-allocating a dummy sentinel node eliminates special-casing for head node deletion and avoids extra heap allocation.'
      }),

      buildQuestionItem({
        id: 'll-search',
        code: `#include <stdio.h>
#include <stdbool.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

bool search(struct ListNode* head, int target) {
    struct ListNode* curr = head;
    while (curr != NULL) {
        if (curr->val == target) return true;
        curr = curr->next;
    }
    return false;
}`,
        explanations: {
          def: 'Define search returning boolean.',
          init: 'Initialize current traversal pointer curr = head.',
          loop: 'Iterate while curr != NULL.',
          branch: 'If curr->val == target, return true.',
          pointer: 'Advance pointer: curr = curr->next.',
          return: 'Return false if target not found.',
          comment: 'Include stdbool.h.'
        },
        notes: 'Linear traversal in linked lists runs in O(N) time because nodes cannot be accessed via constant-time random indexing.'
      }),

      buildQuestionItem({
        id: 'll-traverse',
        code: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

void traverse(struct ListNode* head) {
    struct ListNode* curr = head;
    while (curr != NULL) {
        printf("%d -> ", curr->val);
        curr = curr->next;
    }
    printf("NULL\\n");
}`,
        explanations: {
          def: 'Define traverse printing all node values.',
          init: 'Set curr = head.',
          loop: 'Loop until curr becomes NULL.',
          exec: 'Print node value followed by arrow symbol.',
          pointer: 'Advance pointer curr = curr->next.',
          comment: 'Function header.'
        },
        notes: 'Traversing a linked list follows heap pointers sequentially from head to the terminating NULL pointer.'
      }),

      buildQuestionItem({
        id: 'll-update',
        code: `#include <stdio.h>
#include <stdbool.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

bool updateAt(struct ListNode* head, int index, int newVal) {
    struct ListNode* curr = head;
    for (int i = 0; i < index && curr != NULL; i++) {
        curr = curr->next;
    }
    if (curr == NULL) return false;
    curr->val = newVal;
    return true;
}`,
        explanations: {
          def: 'Define updateAt modifying node value at index.',
          init: 'Initialize curr pointer to head.',
          loop: 'Advance curr index times.',
          branch: 'Return false if index is out of bounds (curr == NULL).',
          mutate: 'Assign curr->val = newVal.',
          return: 'Return true upon successful value update.',
          comment: 'Headers.'
        },
        notes: 'Updating a linked list node takes O(K) traversal time to reach the index followed by an O(1) in-place value assignment.'
      }),

      buildQuestionItem({
        id: 'll-size',
        code: `#include <stdio.h>
#include <stdbool.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

int getLength(struct ListNode* head) {
    int count = 0;
    struct ListNode* curr = head;
    while (curr != NULL) {
        count++;
        curr = curr->next;
    }
    return count;
}

bool isEmpty(struct ListNode* head) {
    return head == NULL;
}`,
        explanations: {
          def: 'Define getLength and isEmpty functions.',
          init: 'Initialize count = 0 and curr = head.',
          loop: 'While curr != NULL, increment count and advance pointer.',
          mutate: 'Increment count counter.',
          return: 'Return count or boolean check (head == NULL).',
          comment: 'C declarations.'
        },
        notes: 'Calculating length takes O(N) time by traversing all nodes, while checking if the list is empty takes O(1) time.'
      }),

      buildQuestionItem({
        id: 'll-reverse',
        code: `#include <stdio.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* reverseList(struct ListNode* head) {
    struct ListNode* prev = NULL;
    struct ListNode* curr = head;
    while (curr != NULL) {
        struct ListNode* nextNode = curr->next;
        curr->next = prev;
        prev = curr;
        curr = nextNode;
    }
    return prev;
}`,
        explanations: {
          def: 'Define reverseList returning reversed head.',
          init: 'Initialize prev = NULL and curr = head.',
          loop: 'Iterate while curr is not NULL.',
          pointer: 'Save curr->next, reverse pointer curr->next = prev, and advance prev and curr.',
          return: 'Return prev as the new head of the reversed list.',
          comment: 'Three-pointer linked list reversal.'
        },
        notes: 'In-place linked list reversal uses 3 pointers (prev, curr, nextNode) to reverse link directions in O(N) time and O(1) space.'
      }),

      buildQuestionItem({
        id: 'll-middle',
        code: `#include <stdio.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* middleNode(struct ListNode* head) {
    struct ListNode* slow = head;
    struct ListNode* fast = head;
    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
    }
    return slow;
}`,
        explanations: {
          def: 'Define middleNode using fast and slow pointers.',
          init: 'Initialize slow = head and fast = head.',
          loop: 'Iterate while fast and fast->next are non-NULL.',
          pointer: 'Advance slow by 1 node and fast by 2 nodes.',
          return: 'Return slow pointer pointing to the middle node.',
          comment: 'Tortoise and hare algorithm.'
        },
        notes: 'Fast/slow two-pointer technique finds the middle node in a single O(N) pass without counting total list length.'
      }),

      buildQuestionItem({
        id: 'll-cycle',
        code: `#include <stdio.h>
#include <stdbool.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

bool hasCycle(struct ListNode* head) {
    struct ListNode* slow = head;
    struct ListNode* fast = head;
    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;
    }
    return false;
}`,
        explanations: {
          def: 'Define hasCycle implementing Floyd Cycle Detection.',
          init: 'Initialize slow = head and fast = head.',
          loop: 'Loop while fast and fast->next are valid.',
          pointer: 'Advance slow by 1 step and fast by 2 steps.',
          branch: 'If slow == fast, pointers have met in a cycle; return true.',
          return: 'Return false if fast reaches NULL tail.',
          comment: 'Floyd cycle finding algorithm.'
        },
        notes: 'Floyd cycle detection algorithm runs in O(N) time and O(1) space; if a cycle exists, fast pointer catches up to slow pointer.'
      }),

      buildQuestionItem({
        id: 'll-merge',
        code: `#include <stdio.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2) {
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* tail = &dummy;

    while (list1 != NULL && list2 != NULL) {
        if (list1->val <= list2->val) {
            tail->next = list1;
            list1 = list1->next;
        } else {
            tail->next = list2;
            list2 = list2->next;
        }
        tail = tail->next;
    }
    tail->next = (list1 != NULL) ? list1 : list2;
    return dummy.next;
}`,
        explanations: {
          def: 'Define mergeTwoLists merging sorted chains.',
          init: 'Stack-allocate dummy node and point tail to &dummy.',
          loop: 'While both list1 and list2 are non-NULL, compare values.',
          branch: 'Link node with smaller value to tail->next and advance that list pointer.',
          pointer: 'Attach remaining non-empty list directly to tail->next.',
          return: 'Return dummy.next.',
          comment: 'Sorted merge.'
        },
        notes: 'Splicing existing node pointers avoids allocating any new heap nodes, operating in O(N + M) time and O(1) space.'
      }),

      buildQuestionItem({
        id: 'll-remove-nth-end',
        code: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* removeNthFromEnd(struct ListNode* head, int n) {
    struct ListNode dummy;
    dummy.next = head;
    struct ListNode* fast = &dummy;
    struct ListNode* slow = &dummy;

    for (int i = 0; i < n; i++) {
        fast = fast->next;
    }
    while (fast->next != NULL) {
        fast = fast->next;
        slow = slow->next;
    }
    struct ListNode* toDelete = slow->next;
    slow->next = slow->next->next;
    free(toDelete);
    return dummy.next;
}`,
        explanations: {
          def: 'Define removeNthFromEnd using offset two-pointer method.',
          init: 'Stack-allocate dummy node and initialize fast and slow to &dummy.',
          loop: 'Advance fast by n steps, then move fast and slow in tandem.',
          pointer: 'Bypass target node slow->next = slow->next->next.',
          mutate: 'Free removed node memory via free(toDelete).',
          return: 'Return dummy.next.',
          comment: 'Offset pointers.'
        },
        notes: 'Advancing fast by n nodes creates a gap of n between fast and slow, allowing single-pass removal of the nth node from the end.'
      }),

      buildQuestionItem({
        id: 'll-palindrome',
        code: `#include <stdio.h>
#include <stdbool.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

bool isPalindrome(struct ListNode* head) {
    if (head == NULL || head->next == NULL) return true;
    struct ListNode* slow = head;
    struct ListNode* fast = head;
    while (fast->next != NULL && fast->next->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
    }
    struct ListNode* prev = NULL;
    struct ListNode* curr = slow->next;
    while (curr != NULL) {
        struct ListNode* nextNode = curr->next;
        curr->next = prev;
        prev = curr;
        curr = nextNode;
    }
    struct ListNode* p1 = head;
    struct ListNode* p2 = prev;
    while (p2 != NULL) {
        if (p1->val != p2->val) return false;
        p1 = p1->next;
        p2 = p2->next;
    }
    return true;
}`,
        explanations: {
          def: 'Define isPalindrome validating symmetry of linked list.',
          branch: 'Base check for short lists, and return false on value mismatch.',
          init: 'Find middle node with fast and slow pointers.',
          loop: 'Reverse second half of list and compare halves element by element.',
          pointer: 'Reverse links and advance pointers p1 and p2.',
          return: 'Return true if all symmetric pairs match.',
          comment: 'In-place palindrome check.'
        },
        notes: 'Finding the middle and reversing the second half in-place checks palindrome validity in O(N) time and O(1) space.'
      }),

      buildQuestionItem({
        id: 'll-lru-cache',
        code: `#include <stdio.h>
#include <stdlib.h>

struct DNode {
    int key;
    int val;
    struct DNode* prev;
    struct DNode* next;
};

struct LRUCache {
    int capacity;
    int size;
    struct DNode* head;
    struct DNode* tail;
};

struct LRUCache* lruCacheCreate(int capacity) {
    struct LRUCache* cache = (struct LRUCache*)malloc(sizeof(struct LRUCache));
    cache->capacity = capacity;
    cache->size = 0;
    cache->head = (struct DNode*)malloc(sizeof(struct DNode));
    cache->tail = (struct DNode*)malloc(sizeof(struct DNode));
    cache->head->next = cache->tail;
    cache->tail->prev = cache->head;
    return cache;
}`,
        explanations: {
          def: 'Define DNode and LRUCache structs and constructor.',
          alloc: 'Allocate cache and dummy head/tail sentinel nodes via malloc().',
          init: 'Initialize capacity, size = 0, and wire dummy head and tail together.',
          pointer: 'Wire cache->head->next = cache->tail and cache->tail->prev = cache->head.',
          return: 'Return initialized cache pointer.',
          comment: 'LRU Cache architecture.'
        },
        notes: 'Doubly linked list with dummy head and tail sentinels guarantees O(1) removal and insertion without null check branching.'
      })
    ],

    go: [
      buildQuestionItem({
        id: 'll-create',
        code: `package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func main() {
	head := &ListNode{Val: 10}
	head.Next = &ListNode{Val: 20}
	head.Next.Next = &ListNode{Val: 30}
}`,
        explanations: {
          def: 'Define ListNode struct with Val int and Next *ListNode.',
          init: 'Instantiate node literal &ListNode{Val: 10}.',
          pointer: 'Wire head.Next and head.Next.Next pointers.',
          comment: 'Go package main.'
        },
        notes: 'Go automatically allocates &ListNode{} on the heap when its pointer escapes function scope, and garbage-collects it when unreferenced.'
      }),

      buildQuestionItem({
        id: 'll-insert-head',
        code: `package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func insertHead(head *ListNode, val int) *ListNode {
	return &ListNode{Val: val, Next: head}
}`,
        explanations: {
          def: 'Define insertHead taking head pointer and integer value.',
          init: 'Construct &ListNode literal with Next pointing to old head.',
          return: 'Return new node as updated head.',
          comment: 'Package declaration.'
        },
        notes: 'Creating a new head node in Go is a concise 1-line expression with O(1) runtime.'
      }),

      buildQuestionItem({
        id: 'll-insert-tail',
        code: `package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func insertTail(head *ListNode, val int) *ListNode {
	newNode := &ListNode{Val: val, Next: nil}
	if head == nil {
		return newNode
	}
	curr := head
	for curr.Next != nil {
		curr = curr.Next
	}
	curr.Next = newNode
	return head
}`,
        explanations: {
          def: 'Define insertTail appending node to list end.',
          init: 'Instantiate newNode and initialize curr := head.',
          branch: 'If head is nil, return newNode directly.',
          loop: 'Traverse list while curr.Next != nil.',
          pointer: 'Attach newNode to curr.Next.',
          return: 'Return head of list.',
          comment: 'Go package declaration.'
        },
        notes: 'Traversing to tail takes O(N) time; updating curr.Next re-anchors the tail pointer.'
      }),

      buildQuestionItem({
        id: 'll-insert-kth',
        code: `package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func insertKth(head *ListNode, index int, val int) *ListNode {
	if index == 0 {
		return &ListNode{Val: val, Next: head}
	}
	curr := head
	for i := 0; i < index-1 && curr != nil; i++ {
		curr = curr.Next
	}
	if curr == nil {
		return head
	}
	curr.Next = &ListNode{Val: val, Next: curr.Next}
	return head
}`,
        explanations: {
          def: 'Define insertKth inserting element at index.',
          branch: 'Handle index 0 head insertion or out-of-bounds check.',
          loop: 'Traverse index - 1 nodes to find insertion anchor.',
          pointer: 'Instantiate and link new node between curr and curr.Next.',
          return: 'Return list head.',
          comment: 'Go package declaration.'
        },
        notes: 'In Go, curr.Next = &ListNode{Val: val, Next: curr.Next} atomically captures curr.Next before updating it.'
      }),

      buildQuestionItem({
        id: 'll-delete-head',
        code: `package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func deleteHead(head *ListNode) *ListNode {
	if head == nil {
		return nil
	}
	return head.Next
}`,
        explanations: {
          def: 'Define deleteHead returning second node.',
          branch: 'Check if head is nil.',
          return: 'Return head.Next.',
          comment: 'Package header.'
        },
        notes: 'Go garbage collector automatically reclaims the unlinked head node once no references point to it.'
      }),

      buildQuestionItem({
        id: 'll-delete-tail',
        code: `package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func deleteTail(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return nil
	}
	curr := head
	for curr.Next.Next != nil {
		curr = curr.Next
	}
	curr.Next = nil
	return head
}`,
        explanations: {
          def: 'Define deleteTail function.',
          branch: 'Guard check for empty or single-node lists.',
          loop: 'Iterate until reaching second-to-last node.',
          pointer: 'Set curr.Next = nil to drop old tail.',
          return: 'Return list head.',
          comment: 'Go package declaration.'
        },
        notes: 'Setting curr.Next = nil detaches the tail node, making it eligible for GC collection.'
      }),

      buildQuestionItem({
        id: 'll-delete-val',
        code: `package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func deleteVal(head *ListNode, target int) *ListNode {
	dummy := &ListNode{Next: head}
	curr := dummy
	for curr.Next != nil {
		if curr.Next.Val == target {
			curr.Next = curr.Next.Next
			break
		}
		curr = curr.Next
	}
	return dummy.Next
}`,
        explanations: {
          def: 'Define deleteVal removing first node matching target.',
          init: 'Create dummy sentinel node pointing to head.',
          loop: 'Traverse while curr.Next is non-nil.',
          branch: 'If curr.Next.Val == target, splice out matching node.',
          pointer: 'Bypass node: curr.Next = curr.Next.Next.',
          return: 'Return dummy.Next.',
          comment: 'Dummy node idiom.'
        },
        notes: 'Dummy sentinel node simplifies boundary logic by treating the head node identically to interior nodes.'
      }),

      buildQuestionItem({
        id: 'll-search',
        code: `package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func search(head *ListNode, target int) bool {
	curr := head
	for curr != nil {
		if curr.Val == target {
			return true
		}
		curr = curr.Next
	}
	return false
}`,
        explanations: {
          def: 'Define search returning boolean.',
          init: 'Initialize curr pointer to head.',
          loop: 'Traverse list with for curr != nil.',
          branch: 'If curr.Val == target, return true.',
          pointer: 'Advance curr = curr.Next.',
          return: 'Return false if target is not found.',
          comment: 'Package declaration.'
        },
        notes: 'Searching in a singly linked list requires linear O(N) pointer traversal.'
      }),

      buildQuestionItem({
        id: 'll-traverse',
        code: `package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func traverse(head *ListNode) {
	curr := head
	for curr != nil {
		fmt.Printf("%d -> ", curr.Val)
		curr = curr.Next
	}
	fmt.Println("nil")
}`,
        explanations: {
          def: 'Define traverse printing list nodes.',
          init: 'Initialize curr := head.',
          loop: 'Loop until curr == nil.',
          exec: 'Print node value followed by pointer arrow.',
          pointer: 'Advance curr = curr.Next.',
          comment: 'Package and fmt import.'
        },
        notes: 'Traversing follows heap references sequentially until reaching nil.'
      }),

      buildQuestionItem({
        id: 'll-update',
        code: `package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func updateAt(head *ListNode, index int, newVal int) bool {
	curr := head
	for i := 0; i < index && curr != nil; i++ {
		curr = curr.Next
	}
	if curr == nil {
		return false
	}
	curr.Val = newVal
	return true
}`,
        explanations: {
          def: 'Define updateAt updating node value at index.',
          init: 'Initialize curr := head.',
          loop: 'Advance curr by index steps.',
          branch: 'Return false if index out of bounds.',
          mutate: 'Assign curr.Val = newVal in-place.',
          return: 'Return true upon successful mutation.',
          comment: 'Go package declaration.'
        },
        notes: 'Modifying struct field curr.Val updates memory directly through the pointer reference.'
      }),

      buildQuestionItem({
        id: 'll-size',
        code: `package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func getLength(head *ListNode) int {
	count := 0
	curr := head
	for curr != nil {
		count++
		curr = curr.Next
	}
	return count
}`,
        explanations: {
          def: 'Define getLength returning integer node count.',
          init: 'Initialize count := 0 and curr := head.',
          loop: 'Iterate while curr != nil.',
          mutate: 'Increment count.',
          pointer: 'Advance curr = curr.Next.',
          return: 'Return accumulated count.',
          comment: 'Package header.'
        },
        notes: 'Counting nodes requires O(N) operations without an external length tracking wrapper.'
      }),

      buildQuestionItem({
        id: 'll-reverse',
        code: `package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func reverseList(head *ListNode) *ListNode {
	var prev *ListNode
	curr := head
	for curr != nil {
		next := curr.Next
		curr.Next = prev
		prev = curr
		curr = next
	}
	return prev
}`,
        explanations: {
          def: 'Define reverseList returning reversed head pointer.',
          init: 'Declare var prev *ListNode and curr := head.',
          loop: 'Loop while curr != nil.',
          pointer: 'Cache next, reverse link curr.Next = prev, and advance pointers.',
          return: 'Return prev as new head.',
          comment: 'In-place linked list reversal.'
        },
        notes: 'Pointer reversal in Go executes in O(N) time and requires zero additional heap allocations.'
      }),

      buildQuestionItem({
        id: 'll-middle',
        code: `package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func middleNode(head *ListNode) *ListNode {
	slow, fast := head, head
	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
	}
	return slow
}`,
        explanations: {
          def: 'Define middleNode using fast and slow pointers.',
          init: 'Initialize slow, fast := head, head.',
          loop: 'Loop while fast and fast.Next are non-nil.',
          pointer: 'Advance slow by 1 step and fast by 2 steps.',
          return: 'Return slow pointer.',
          comment: 'Two-pointer technique.'
        },
        notes: 'When fast pointer reaches end of list, slow pointer is positioned precisely at the midpoint.'
      }),

      buildQuestionItem({
        id: 'll-cycle',
        code: `package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func hasCycle(head *ListNode) bool {
	slow, fast := head, head
	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
		if slow == fast {
			return true
		}
	}
	return false
}`,
        explanations: {
          def: 'Define hasCycle detecting loops.',
          init: 'Initialize slow, fast := head, head.',
          loop: 'Iterate while fast and fast.Next are non-nil.',
          pointer: 'Advance slow by 1 and fast by 2 nodes.',
          branch: 'If slow == fast pointer address, return true.',
          return: 'Return false if fast reaches nil.',
          comment: 'Floyd cycle detection in Go.'
        },
        notes: 'Comparing struct pointers (slow == fast) in Go checks memory identity, not value equality.'
      }),

      buildQuestionItem({
        id: 'll-merge',
        code: `package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
	dummy := &ListNode{}
	tail := dummy

	for list1 != nil && list2 != nil {
		if list1.Val <= list2.Val {
			tail.Next = list1
			list1 = list1.Next
		} else {
			tail.Next = list2
			list2 = list2.Next
		}
		tail = tail.Next
	}
	if list1 != nil {
		tail.Next = list1
	} else {
		tail.Next = list2
	}
	return dummy.Next
}`,
        explanations: {
          def: 'Define mergeTwoLists merging sorted lists.',
          init: 'Initialize dummy sentinel node and tail pointer.',
          loop: 'Loop while both lists have remaining elements.',
          branch: 'Compare node values and attach smaller node to tail.Next.',
          pointer: 'Splice remaining nodes directly onto tail.Next.',
          return: 'Return dummy.Next.',
          comment: 'Go sorted merge.'
        },
        notes: 'Re-linking existing nodes avoids allocating new memory and executes in O(N + M) time.'
      }),

      buildQuestionItem({
        id: 'll-remove-nth-end',
        code: `package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func removeNthFromEnd(head *ListNode, n int) *ListNode {
	dummy := &ListNode{Next: head}
	fast, slow := dummy, dummy

	for i := 0; i < n; i++ {
		fast = fast.Next
	}
	for fast.Next != nil {
		fast = fast.Next
		slow = slow.Next
	}
	slow.Next = slow.Next.Next
	return dummy.Next
}`,
        explanations: {
          def: 'Define removeNthFromEnd with offset pointers.',
          init: 'Create dummy sentinel and initialize fast, slow := dummy, dummy.',
          loop: 'Advance fast n times, then slide fast and slow simultaneously.',
          pointer: 'Unlink target node: slow.Next = slow.Next.Next.',
          return: 'Return dummy.Next.',
          comment: 'Go two-pointer technique.'
        },
        notes: 'The gap of n between fast and slow ensures slow reaches the predecessor of the node to remove.'
      }),

      buildQuestionItem({
        id: 'll-palindrome',
        code: `package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func isPalindrome(head *ListNode) bool {
	if head == nil || head.Next == nil {
		return true
	}
	slow, fast := head, head
	for fast.Next != nil && fast.Next.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
	}

	var prev *ListNode
	curr := slow.Next
	for curr != nil {
		next := curr.Next
		curr.Next = prev
		prev = curr
		curr = next
	}

	p1, p2 := head, prev
	for p2 != nil {
		if p1.Val != p2.Val {
			return false
		}
		p1 = p1.Next
		p2 = p2.Next
	}
	return true
}`,
        explanations: {
          def: 'Define isPalindrome validating list symmetry.',
          branch: 'Early return true for empty or single node lists, and check val equality.',
          init: 'Locate middle with fast/slow pointers.',
          loop: 'Reverse second half and compare node values from both ends.',
          pointer: 'Reverse links and advance comparison pointers.',
          return: 'Return true if all symmetric pairs match.',
          comment: 'In-place palindrome check.'
        },
        notes: 'In-place reversal of the second half achieves O(N) time with O(1) auxiliary memory.'
      }),

      buildQuestionItem({
        id: 'll-lru-cache',
        code: `package main

type DNode struct {
	key, val   int
	prev, next *DNode
}

type LRUCache struct {
	capacity   int
	cache      map[int]*DNode
	head, tail *DNode
}

func LRUConstructor(capacity int) LRUCache {
	head := &DNode{}
	tail := &DNode{}
	head.next = tail
	tail.prev = head
	return LRUCache{
		capacity: capacity,
		cache:    make(map[int]*DNode),
		head:     head,
		tail:     tail,
	}
}`,
        explanations: {
          def: 'Define DNode and LRUCache structs along with constructor.',
          init: 'Instantiate dummy head and tail sentinels and map.',
          pointer: 'Link dummy head.next = tail and tail.prev = head.',
          return: 'Return initialized LRUCache struct.',
          comment: 'LRU Cache architecture.'
        },
        notes: 'Combining a hash map with a doubly linked list delivers O(1) gets, puts, and evictions.'
      })
    ],

    rust: [
      buildQuestionItem({
        id: 'll-create',
        code: `#[derive(Debug, PartialEq, Eq)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    pub fn new(val: i32) -> Self {
        ListNode { val, next: None }
    }
}

fn main() {
    let mut head = Box::new(ListNode::new(10));
    head.next = Some(Box::new(ListNode::new(20)));
}`,
        explanations: {
          def: 'Define ListNode struct with Option<Box<ListNode>> and impl constructor.',
          alloc: 'Allocate node on heap using Box::new(ListNode::new(val)).',
          init: 'Instantiate head node and attach next child.',
          pointer: 'Assign head.next = Some(Box::new(...)).',
          return: 'Return Self instance from new().',
          comment: 'Rust struct definition and traits.'
        },
        notes: 'In Rust, Option<Box<ListNode>> provides recursive heap-allocated single ownership with compile-time null safety.'
      }),

      buildQuestionItem({
        id: 'll-insert-head',
        code: `pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

pub fn insert_head(head: Option<Box<ListNode>>, val: i32) -> Option<Box<ListNode>> {
    Some(Box::new(ListNode { val, next: head }))
}`,
        explanations: {
          def: 'Define insert_head taking ownership of head Option and returning updated head.',
          alloc: 'Allocate new node on heap using Box::new.',
          init: 'Set next: head moving previous head into the new node.',
          return: 'Return Some(Box::new(...)).',
          comment: 'Single ownership node transfer.'
        },
        notes: 'Moving head transfers ownership cleanly into the new node next field in O(1) time without borrow checker conflicts.'
      }),

      buildQuestionItem({
        id: 'll-insert-tail',
        code: `pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

pub fn insert_tail(mut head: Option<Box<ListNode>>, val: i32) -> Option<Box<ListNode>> {
    let new_node = Some(Box::new(ListNode { val, next: None }));
    if head.is_none() {
        return new_node;
    }
    let mut curr = head.as_mut();
    while let Some(node) = curr {
        if node.next.is_none() {
            node.next = new_node;
            break;
        }
        curr = node.next.as_mut();
    }
    head
}`,
        explanations: {
          def: 'Define insert_tail function.',
          init: 'Instantiate new_node and curr mutable borrow.',
          branch: 'Return new_node if head is None.',
          loop: 'Traverse using while let Some(node) = curr.',
          pointer: 'Borrow next field mutably via node.next.as_mut().',
          mutate: 'Attach node.next = new_node.',
          return: 'Return modified head.',
          comment: 'Traversal via as_mut().'
        },
        notes: '.as_mut() converts Option<Box<T>> to Option<&mut Box<T>>, allowing traversal without consuming ownership.'
      }),

      buildQuestionItem({
        id: 'll-insert-kth',
        code: `pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

pub fn insert_kth(mut head: Option<Box<ListNode>>, index: usize, val: i32) -> Option<Box<ListNode>> {
    if index == 0 {
        return Some(Box::new(ListNode { val, next: head }));
    }
    let mut curr = head.as_mut();
    for _ in 0..index - 1 {
        if let Some(node) = curr {
            curr = node.next.as_mut();
        } else {
            return head;
        }
    }
    if let Some(node) = curr {
        let old_next = node.next.take();
        node.next = Some(Box::new(ListNode { val, next: old_next }));
    }
    head
}`,
        explanations: {
          def: 'Define insert_kth taking owned head and index.',
          branch: 'Handle index 0 head insertion or out-of-bounds.',
          loop: 'Iterate index - 1 times with for loop.',
          pointer: 'Use .take() to extract old_next while leaving None temporarily.',
          mutate: 'Assign node.next = Some(Box::new(ListNode { val, next: old_next })).',
          return: 'Return modified head.',
          comment: 'Node splicing in safe Rust.'
        },
        notes: 'node.next.take() extracts the value out of the Option, satisfying Rust borrow checker during link reassignments.'
      }),

      buildQuestionItem({
        id: 'll-delete-head',
        code: `pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

pub fn delete_head(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
    head.and_then(|node| node.next)
}`,
        explanations: {
          def: 'Define delete_head taking ownership of head.',
          return: 'Use .and_then() combinator to return inner node.next.',
          comment: 'Idiomatic Rust combinator.'
        },
        notes: 'head.and_then(|node| node.next) consumes the old head node; Rust automatically deallocates the boxed head memory.'
      }),

      buildQuestionItem({
        id: 'll-delete-tail',
        code: `pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

pub fn delete_tail(mut head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
    if head.is_none() || head.as_ref().unwrap().next.is_none() {
        return None;
    }
    let mut curr = head.as_mut().unwrap();
    while curr.next.as_ref().unwrap().next.is_some() {
        curr = curr.next.as_mut().unwrap();
    }
    curr.next = None;
    head
}`,
        explanations: {
          def: 'Define delete_tail function.',
          branch: 'Return None for empty or single-element lists.',
          loop: 'Traverse until next node next is None.',
          pointer: 'Advance mutable borrow curr = curr.next.as_mut().unwrap().',
          mutate: 'Drop tail node by setting curr.next = None.',
          return: 'Return modified head.',
          comment: 'Rust tail deletion.'
        },
        notes: 'Setting curr.next = None drops the tail Box<ListNode>, automatically triggering its memory deallocation.'
      }),

      buildQuestionItem({
        id: 'll-delete-val',
        code: `pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

pub fn delete_val(mut head: Option<Box<ListNode>>, target: i32) -> Option<Box<ListNode>> {
    let mut curr = &mut head;
    while let Some(node) = curr {
        if node.val == target {
            *curr = node.next.take();
            break;
        }
        curr = &mut node.next;
    }
    head
}`,
        explanations: {
          def: 'Define delete_val using pointer-to-pointer idiom.',
          init: 'Initialize mutable pointer-to-option let mut curr = &mut head.',
          loop: 'While let Some(node) = curr.',
          branch: 'If node.val == target, replace current Option with node.next.take().',
          pointer: 'Advance curr = &mut node.next.',
          return: 'Return updated head.',
          comment: 'Idiomatic &mut Option traversal.'
        },
        notes: 'Using &mut Option<Box<ListNode>> implements double-pointer traversal in safe Rust, seamlessly handling head and interior deletions.'
      }),

      buildQuestionItem({
        id: 'll-search',
        code: `pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

pub fn search(head: &Option<Box<ListNode>>, target: i32) -> bool {
    let mut curr = head.as_ref();
    while let Some(node) = curr {
        if node.val == target {
            return true;
        }
        curr = node.next.as_ref();
    }
    false
}`,
        explanations: {
          def: 'Define search borrowing &Option<Box<ListNode>>.',
          init: 'Borrow head via as_ref().',
          loop: 'Iterate while let Some(node) = curr.',
          branch: 'If node.val == target, return true.',
          pointer: 'Advance borrow curr = node.next.as_ref().',
          return: 'Return false if target is not found.',
          comment: 'Immutable traversal.'
        },
        notes: 'head.as_ref() borrows the list immutably without copying or moving node memory.'
      }),

      buildQuestionItem({
        id: 'll-traverse',
        code: `pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

pub fn traverse(head: &Option<Box<ListNode>>) {
    let mut curr = head.as_ref();
    while let Some(node) = curr {
        print!("{} -> ", node.val);
        curr = node.next.as_ref();
    }
    println!("None");
}`,
        explanations: {
          def: 'Define traverse printing list nodes.',
          init: 'Borrow reference curr = head.as_ref().',
          loop: 'Loop while let Some(node) = curr.',
          exec: 'Print node value followed by pointer arrow.',
          pointer: 'Advance borrow curr = node.next.as_ref().',
          comment: 'Standard traversal.'
        },
        notes: 'Immutable traversal avoids any heap reallocation and guarantees no unintended side effects.'
      }),

      buildQuestionItem({
        id: 'll-update',
        code: `pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

pub fn update_at(head: &mut Option<Box<ListNode>>, index: usize, new_val: i32) -> bool {
    let mut curr = head.as_mut();
    for _ in 0..index {
        if let Some(node) = curr {
            curr = node.next.as_mut();
        } else {
            return false;
        }
    }
    if let Some(node) = curr {
        node.val = new_val;
        true
    } else {
        false
    }
}`,
        explanations: {
          def: 'Define update_at taking mutable borrow &mut Option.',
          init: 'Borrow head mutably via as_mut().',
          loop: 'Advance curr through index steps.',
          branch: 'Return false on out-of-bounds.',
          mutate: 'Assign node.val = new_val.',
          return: 'Return boolean indicating success.',
          comment: 'Mutable traversal.'
        },
        notes: 'Rust allows in-place mutation of node fields while borrowing the struct mutably.'
      }),

      buildQuestionItem({
        id: 'll-size',
        code: `pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

pub fn get_length(head: &Option<Box<ListNode>>) -> usize {
    let mut count = 0;
    let mut curr = head.as_ref();
    while let Some(node) = curr {
        count += 1;
        curr = node.next.as_ref();
    }
    count
}`,
        explanations: {
          def: 'Define get_length returning usize count.',
          init: 'Initialize count = 0 and borrow curr = head.as_ref().',
          loop: 'Iterate while let Some(node) = curr.',
          mutate: 'Increment count.',
          pointer: 'Advance curr = node.next.as_ref().',
          return: 'Return count.',
          comment: 'Counting length in Rust.'
        },
        notes: 'Traversing &Option<Box<ListNode>> to count elements takes O(N) time and zero memory allocation.'
      }),

      buildQuestionItem({
        id: 'll-reverse',
        code: `pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

pub fn reverse_list(mut head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
    let mut prev = None;
    let mut curr = head;

    while let Some(mut node) = curr {
        let next = node.next.take();
        node.next = prev;
        prev = Some(node);
        curr = next;
    }
    prev
}`,
        explanations: {
          def: 'Define reverse_list transferring ownership.',
          init: 'Initialize prev = None and curr = head.',
          loop: 'While let Some(mut node) = curr.',
          pointer: 'Extract next via node.next.take() and reassign node.next = prev.',
          mutate: 'Move node into prev = Some(node) and advance curr = next.',
          return: 'Return prev as new head.',
          comment: 'Idiomatic safe Rust list reversal.'
        },
        notes: 'node.next.take() takes ownership of the next node without unsafe code or pointer copying.'
      }),

      buildQuestionItem({
        id: 'll-middle',
        code: `pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

pub fn middle_node(head: &Option<Box<ListNode>>) -> &Option<Box<ListNode>> {
    let mut slow = head;
    let mut fast = head;

    while let Some(fast_node) = fast {
        if let Some(next_fast) = &fast_node.next {
            slow = &slow.as_ref().unwrap().next;
            fast = &next_fast.next;
        } else {
            break;
        }
    }
    slow
}`,
        explanations: {
          def: 'Define middle_node borrowing reference to list.',
          init: 'Initialize borrowed references slow = head and fast = head.',
          loop: 'Iterate while fast pointer has two valid forward hops.',
          pointer: 'Advance slow by 1 step and fast by 2 steps.',
          return: 'Return borrowed reference slow pointing to middle node.',
          comment: 'Two-pointer borrow in Rust.'
        },
        notes: 'Borrowing references (&Option) permits two concurrent immutable pointers without violating Rust aliasing rules.'
      }),

      buildQuestionItem({
        id: 'll-cycle',
        code: `// Cycle detection in safe Rust typically uses node indices in a Vec or Rc<RefCell<Node>>
pub fn has_cycle_indices(next_ptrs: &[Option<usize>]) -> bool {
    let mut slow = 0;
    let mut fast = 0;
    while let Some(f1) = next_ptrs[fast] {
        if let Some(f2) = next_ptrs[f1] {
            slow = next_ptrs[slow].unwrap();
            fast = f2;
            if slow == fast {
                return true;
            }
        } else {
            break;
        }
    }
    false
}`,
        explanations: {
          def: 'Define has_cycle_indices modeling cyclical graphs with vector indices.',
          init: 'Initialize slow = 0 and fast = 0.',
          loop: 'While fast pointer has valid forward indices.',
          branch: 'If slow == fast index, cycle detected; return true.',
          pointer: 'Advance slow index by 1 step and fast index by 2 steps.',
          return: 'Return false if fast reaches None end.',
          comment: 'Arena-allocated graph model in Rust.'
        },
        notes: 'Box<Node> cannot represent cyclical graphs in safe Rust because ownership cannot be cyclic; the idiomatic pattern uses indices into an arena Vec or Rc<RefCell<Node>>.'
      }),

      buildQuestionItem({
        id: 'll-merge',
        code: `pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

pub fn merge_two_lists(
    mut list1: Option<Box<ListNode>>,
    mut list2: Option<Box<ListNode>>
) -> Option<Box<ListNode>> {
    let mut dummy = ListNode { val: 0, next: None };
    let mut curr = &mut dummy;

    while list1.is_some() && list2.is_some() {
        if list1.as_ref().unwrap().val <= list2.as_ref().unwrap().val {
            let next = list1.as_mut().unwrap().next.take();
            curr.next = list1;
            list1 = next;
        } else {
            let next = list2.as_mut().unwrap().next.take();
            curr.next = list2;
            list2 = next;
        }
        curr = curr.next.as_mut().unwrap();
    }
    curr.next = if list1.is_some() { list1 } else { list2 };
    dummy.next
}`,
        explanations: {
          def: 'Define merge_two_lists taking ownership of two lists.',
          init: 'Instantiate dummy sentinel node and curr mutable reference.',
          loop: 'Loop while both lists are non-empty.',
          branch: 'Compare node values and attach smaller node to curr.next.',
          pointer: 'Splice remaining list onto curr.next.',
          return: 'Return dummy.next.',
          comment: 'Merge lists in safe Rust.'
        },
        notes: 'Using take() detaches nodes safely, satisfying the borrow checker during in-place splicing.'
      }),

      buildQuestionItem({
        id: 'll-remove-nth-end',
        code: `pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

pub fn remove_nth_from_end(head: Option<Box<ListNode>>, n: usize) -> Option<Box<ListNode>> {
    let mut vals = Vec::new();
    let mut curr = head.as_ref();
    while let Some(node) = curr {
        vals.push(node.val);
        curr = node.next.as_ref();
    }
    let target_idx = vals.len() - n;
    vals.remove(target_idx);

    let mut new_head = None;
    for &val in vals.iter().rev() {
        new_head = Some(Box::new(ListNode { val, next: new_head }));
    }
    new_head
}`,
        explanations: {
          def: 'Define remove_nth_from_end function.',
          init: 'Collect node values into Vec::new().',
          loop: 'Iterate over list nodes to extract values.',
          mutate: 'Remove target element at target_idx via vals.remove().',
          pointer: 'Rebuild linked list in reverse by wrapping in Some(Box::new(...)).',
          return: 'Return rebuilt new_head.',
          comment: 'Vector reconstruction pattern.'
        },
        notes: 'Reconstructing the list from a vector is a common, safe, idiomatic Rust technique that avoids complex two-pointer mutable borrowing.'
      }),

      buildQuestionItem({
        id: 'll-palindrome',
        code: `pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

pub fn is_palindrome(head: &Option<Box<ListNode>>) -> bool {
    let mut vals = Vec::new();
    let mut curr = head.as_ref();
    while let Some(node) = curr {
        vals.push(node.val);
        curr = node.next.as_ref();
    }
    let mut l = 0;
    let mut r = vals.len().saturating_sub(1);
    while l < r {
        if vals[l] != vals[r] {
            return false;
        }
        l += 1;
        r -= 1;
    }
    true
}`,
        explanations: {
          def: 'Define is_palindrome borrowing list reference.',
          init: 'Collect values into vector vals.',
          loop: 'Traverse list nodes, then run two pointers inwards on vector.',
          branch: 'Return false if symmetric values do not match.',
          mutate: 'Increment l and decrement r.',
          return: 'Return true if all pairs match.',
          comment: 'Palindrome validation.'
        },
        notes: 'Collecting values into a Vec allows standard two-pointer comparison without mutating or reversing the original linked list.'
      }),

      buildQuestionItem({
        id: 'll-lru-cache',
        code: `use std::collections::HashMap;

pub struct LRUCache {
    capacity: usize,
    map: HashMap<i32, i32>,
    order: Vec<i32>,
}

impl LRUCache {
    pub fn new(capacity: i32) -> Self {
        LRUCache {
            capacity: capacity as usize,
            map: HashMap::new(),
            order: Vec::new(),
        }
    }

    pub fn get(&mut self, key: i32) -> i32 {
        if let Some(&val) = self.map.get(&key) {
            self.order.retain(|&k| k != key);
            self.order.push(key);
            val
        } else {
            -1
        }
    }
}`,
        explanations: {
          def: 'Define LRUCache struct with capacity, HashMap, and order Vec.',
          init: 'Instantiate cache struct in new().',
          branch: 'Pattern match on key existence via if let Some(&val).',
          mutate: 'Re-order key to most recently used position via retain() and push().',
          return: 'Return cached value or -1.',
          comment: 'Vector-backed LRU implementation.'
        },
        notes: 'In safe Rust, combining a HashMap with an order Vec provides an idiomatic, easily-reasoned LRU cache without doubly-linked list pointer aliasing.'
      })
    ]
  };
}

module.exports = {
  getLinkedListQuestions
};
