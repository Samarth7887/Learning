
/**
 * SynapseCS Data Module - Linked List
 * Schema compliant, zero-fetch, global namespace registry.
 */
window.DSA_TOPICS = window.DSA_TOPICS || {};

window.DSA_TOPICS['linked-list'] = {
  id: 'linked-list',
  title: 'Linked List',
  description: 'Linear collection of data elements where order is governed by 64-bit pointers in dynamic heap memory rather than contiguous physical placement.',
  subtopics: [
    { id: 'll-basics', title: 'Basics & Fundamental Operations' },
    { id: 'll-traversal', title: 'Two Pointers & Traversal Patterns' },
    { id: 'll-mutation', title: 'Reversal, Splicing & Merge' },
    { id: 'll-advanced', title: 'Advanced Cycles & System Caches' }
  ],
  questions: [
    // -------------------------------------------------------------------------
    // 1. CREATE LINKED LIST
    // -------------------------------------------------------------------------
    {
      id: 'll-create',
      subtopicId: 'll-basics',
      title: 'Define Node & Initialize Linked List',
      difficulty: 'Basic',
      leetcode: null,
      description: 'Define a Node structure containing an integer value and a next pointer. Instantiate a chain of 3 nodes holding values 10, 20, and 30, returning the head pointer.',
      constraints: '0 <= Number of nodes <= 10^4. Node values between -10^5 and 10^5.',
      examples: [
        { input: '[10, 20, 30]', output: '10 -> 20 -> 30 -> NULL', why: 'A head pointer points to node 10, which references node 20, which references node 30 whose next pointer points to NULL.' }
      ],
      approaches: [
        {
          name: 'Manual Node Instantiation',
          idea: 'Allocate Node instances on the heap and wire the next reference of each predecessor to the memory address of the successor.',
          timeComplexity: 'O(1) per node creation, O(n) total for n nodes',
          spaceComplexity: 'O(n) auxiliary heap memory for n nodes',
          code: {
            python: `class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef create_list():\n    head = ListNode(10)\n    second = ListNode(20)\n    third = ListNode(30)\n    head.next = second\n    second.next = third\n    return head`,
            java: `class ListNode {\n    int val;\n    ListNode next;\n    ListNode(int val) { this.val = val; this.next = null; }\n}\npublic class Solution {\n    public static ListNode createList() {\n        ListNode head = new ListNode(10);\n        ListNode second = new ListNode(20);\n        ListNode third = new ListNode(30);\n        head.next = second;\n        second.next = third;\n        return head;\n    }\n}`,
            cpp: `struct ListNode {\n    int val;\n    ListNode* next;\n    ListNode(int x) : val(x), next(nullptr) {}\n};\nListNode* createList() {\n    ListNode* head = new ListNode(10);\n    ListNode* second = new ListNode(20);\n    ListNode* third = new ListNode(30);\n    head->next = second;\n    second->next = third;\n    return head;\n}`,
            javascript: `function ListNode(val, next = null) {\n    this.val = val;\n    this.next = next;\n}\nfunction createList() {\n    const head = new ListNode(10);\n    const second = new ListNode(20);\n    const third = new ListNode(30);\n    head.next = second;\n    second.next = third;\n    return head;\n}`
          },
          lineExplanations: [
            { lines: [1, 4], text: "Define the fundamental Node constructor storing the element value and a pointer reference." },
            { lines: [6, 9], text: "Instantiate 3 individual nodes with values 10, 20, and 30 in heap memory." },
            { lines: [10, 11], text: "Link node 10 to node 20, and node 20 to node 30 via forward next pointers." },
            { lines: [12, 12], text: "Return the head pointer pointing to the first node in the sequence." }
          ],
          animationSteps: [
            { codeLine: 7, description: "Allocate head node with value 10 at heap address 0x1000.", state: { type: 'linked-list', nodes: [{ val: 10, addr: '0x1000' }] }, highlights: [0], pointers: { head: 0 } },
            { codeLine: 8, description: "Allocate second node with value 20 at heap address 0x1020.", state: { type: 'linked-list', nodes: [{ val: 10, addr: '0x1000' }, { val: 20, addr: '0x1020' }] }, highlights: [1], pointers: { head: 0, second: 1 } },
            { codeLine: 9, description: "Allocate third node with value 30 at heap address 0x1040.", state: { type: 'linked-list', nodes: [{ val: 10, addr: '0x1000' }, { val: 20, addr: '0x1020' }, { val: 30, addr: '0x1040' }] }, highlights: [2], pointers: { head: 0, second: 1, third: 2 } },
            { codeLine: 10, description: "Wire head.next = second (0x1000 -> 0x1020) and second.next = third (0x1020 -> 0x1040). Chain complete.", state: { type: 'linked-list', nodes: [{ val: 10, addr: '0x1000' }, { val: 20, addr: '0x1020' }, { val: 30, addr: '0x1040' }] }, highlights: [0, 1, 2], pointers: { head: 0 } }
          ]
        }
      ],
      commonMistakes: "Forgetting to initialize next to NULL/nullptr in C/C++, causing dangling pointer crashes when traversing.",
      relatedQuestionIds: ['ll-insert-head', 'll-traverse']
    },

    // -------------------------------------------------------------------------
    // 2. INSERT AT HEAD
    // -------------------------------------------------------------------------
    {
      id: 'll-insert-head',
      subtopicId: 'll-basics',
      title: 'Insert Node at Beginning (Head)',
      difficulty: 'Basic',
      leetcode: null,
      description: 'Given the head pointer of a singly linked list and an integer val, insert a new node with value val before the head, returning the new head.',
      constraints: 'List length 0 to 10^4. Node values -10^5 to 10^5.',
      examples: [
        { input: 'head = [20, 30], val = 5', output: '[5, 20, 30]', why: 'A new node with value 5 points to the former head 20, becoming the new head.' }
      ],
      approaches: [
        {
          name: 'Pointer Re-anchoring',
          idea: 'Create the new node, point its next reference to the current head, and re-assign head to the new node.',
          timeComplexity: 'O(1) constant time since only 2 pointer assignments are performed',
          spaceComplexity: 'O(1) auxiliary space beyond the newly allocated node',
          code: {
            python: `def insert_at_head(head, val):\n    new_node = ListNode(val)\n    new_node.next = head\n    return new_node`,
            java: `public static ListNode insertAtHead(ListNode head, int val) {\n    ListNode newNode = new ListNode(val);\n    newNode.next = head;\n    return newNode;\n}`,
            cpp: `ListNode* insertAtHead(ListNode* head, int val) {\n    ListNode* newNode = new ListNode(val);\n    newNode->next = head;\n    return newNode;\n}`,
            javascript: `function insertAtHead(head, val) {\n    const newNode = new ListNode(val);\n    newNode.next = head;\n    return newNode;\n}`
          },
          lineExplanations: [
            { lines: [2, 2], text: "Allocate a new heap node holding the target insertion value." },
            { lines: [3, 3], text: "Point the new node's next link to the existing head node." },
            { lines: [4, 4], text: "Return the new node as the updated head of the entire list." }
          ],
          animationSteps: [
            { codeLine: 1, description: "Initial list with head pointing to node 20.", state: { type: 'linked-list', nodes: [{ val: 20, addr: '0x1020' }, { val: 30, addr: '0x1040' }] }, highlights: [0], pointers: { head: 0 } },
            { codeLine: 2, description: "Allocate new node 5 at address 0x1000.", state: { type: 'linked-list', nodes: [{ val: 5, addr: '0x1000' }, { val: 20, addr: '0x1020' }, { val: 30, addr: '0x1040' }] }, highlights: [0], pointers: { newNode: 0, head: 1 } },
            { codeLine: 3, description: "Point newNode.next to head (0x1000 -> 0x1020).", state: { type: 'linked-list', nodes: [{ val: 5, addr: '0x1000' }, { val: 20, addr: '0x1020' }, { val: 30, addr: '0x1040' }] }, highlights: [0, 1], pointers: { newNode: 0, head: 1 } },
            { codeLine: 4, description: "Re-anchor head to newNode. Insertion complete in O(1) time.", state: { type: 'linked-list', nodes: [{ val: 5, addr: '0x1000' }, { val: 20, addr: '0x1020' }, { val: 30, addr: '0x1040' }] }, highlights: [0], pointers: { head: 0 } }
          ]
        }
      ],
      commonMistakes: "Updating head = new_node before linking new_node.next = head, permanently losing the original list in memory.",
      relatedQuestionIds: ['ll-insert-tail', 'll-delete-head']
    },

    // -------------------------------------------------------------------------
    // 3. INSERT AT TAIL
    // -------------------------------------------------------------------------
    {
      id: 'll-insert-tail',
      subtopicId: 'll-basics',
      title: 'Insert Node at End (Tail)',
      difficulty: 'Basic',
      leetcode: null,
      description: 'Given the head of a linked list and an integer val, traverse to the terminal node and attach a new node with value val.',
      constraints: 'List length 0 to 10^4. Node values -10^5 to 10^5.',
      examples: [
        { input: 'head = [10, 20], val = 30', output: '[10, 20, 30]', why: 'Node 20 which previously pointed to NULL now points to new node 30.' }
      ],
      approaches: [
        {
          name: 'Linear Traversal to Terminal Node',
          idea: 'If head is empty, new node is the head. Otherwise traverse until curr.next is null, then attach curr.next = new_node.',
          timeComplexity: 'O(n) time to walk across all n nodes to locate the tail',
          spaceComplexity: 'O(1) auxiliary space',
          code: {
            python: `def insert_at_tail(head, val):\n    new_node = ListNode(val)\n    if not head:\n        return new_node\n    curr = head\n    while curr.next:\n        curr = curr.next\n    curr.next = new_node\n    return head`,
            java: `public static ListNode insertAtTail(ListNode head, int val) {\n    ListNode newNode = new ListNode(val);\n    if (head == null) return newNode;\n    ListNode curr = head;\n    while (curr.next != null) curr = curr.next;\n    curr.next = newNode;\n    return head;\n}`,
            cpp: `ListNode* insertAtTail(ListNode* head, int val) {\n    ListNode* newNode = new ListNode(val);\n    if (!head) return newNode;\n    ListNode* curr = head;\n    while (curr->next) curr = curr->next;\n    curr->next = newNode;\n    return head;\n}`,
            javascript: `function insertAtTail(head, val) {\n    const newNode = new ListNode(val);\n    if (!head) return newNode;\n    let curr = head;\n    while (curr.next) curr = curr.next;\n    curr.next = newNode;\n    return head;\n}`
          },
          lineExplanations: [
            { lines: [2, 4], text: "Handle edge case: if list is empty, newly allocated node is returned as head." },
            { lines: [5, 7], text: "Step through the chain with pointer curr until reaching the node where curr.next is null." },
            { lines: [8, 9], text: "Link the final node to the new node and return the unchanged head pointer." }
          ],
          animationSteps: [
            { codeLine: 5, description: "Start curr at head (Node 10).", state: { type: 'linked-list', nodes: [{ val: 10, addr: '0x1000' }, { val: 20, addr: '0x1020' }] }, highlights: [0], pointers: { head: 0, curr: 0 } },
            { codeLine: 7, description: "Advance curr to next node (Node 20). Next is NULL, found tail.", state: { type: 'linked-list', nodes: [{ val: 10, addr: '0x1000' }, { val: 20, addr: '0x1020' }] }, highlights: [1], pointers: { head: 0, curr: 1 } },
            { codeLine: 8, description: "Allocate Node 30 and link curr.next = newNode (0x1020 -> 0x1040).", state: { type: 'linked-list', nodes: [{ val: 10, addr: '0x1000' }, { val: 20, addr: '0x1020' }, { val: 30, addr: '0x1040' }] }, highlights: [2], pointers: { head: 0, curr: 1, newNode: 2 } }
          ]
        }
      ],
      commonMistakes: "Writing while (curr) instead of while (curr.next), causing curr to advance to NULL and triggering null pointer dereference on curr.next.",
      relatedQuestionIds: ['ll-insert-head', 'll-insert-kth']
    },

    // -------------------------------------------------------------------------
    // 4. INSERT AT K-TH POSITION
    // -------------------------------------------------------------------------
    {
      id: 'll-insert-kth',
      subtopicId: 'll-basics',
      title: 'Insert Node at Given Index',
      difficulty: 'Easy',
      leetcode: null,
      description: 'Insert a new node with value val at zero-indexed position index. If index is 0, insert at head.',
      constraints: '0 <= index <= list size <= 10^4.',
      examples: [
        { input: 'head = [10, 30], index = 1, val = 20', output: '[10, 20, 30]', why: 'Node 20 is spliced between index 0 (node 10) and index 1 (node 30).' }
      ],
      approaches: [
        {
          name: 'Pointer Splice Ordering',
          idea: 'Advance index-1 times to the predecessor node. Set newNode.next = predecessor.next, then predecessor.next = newNode.',
          timeComplexity: 'O(k) where k is the target insertion index',
          spaceComplexity: 'O(1) auxiliary space',
          code: {
            python: `def insert_at_k(head, index, val):\n    if index == 0:\n        node = ListNode(val)\n        node.next = head\n        return node\n    curr = head\n    for _ in range(index - 1):\n        if not curr: return head\n        curr = curr.next\n    node = ListNode(val)\n    node.next = curr.next\n    curr.next = node\n    return head`,
            java: `public static ListNode insertAtK(ListNode head, int index, int val) {\n    if (index == 0) {\n        ListNode n = new ListNode(val);\n        n.next = head;\n        return n;\n    }\n    ListNode curr = head;\n    for (int i = 0; i < index - 1 && curr != null; i++) curr = curr.next;\n    if (curr == null) return head;\n    ListNode n = new ListNode(val);\n    n.next = curr.next;\n    curr.next = n;\n    return head;\n}`,
            cpp: `ListNode* insertAtK(ListNode* head, int index, int val) {\n    if (index == 0) {\n        ListNode* n = new ListNode(val);\n        n->next = head;\n        return n;\n    }\n    ListNode* curr = head;\n    for (int i = 0; i < index - 1 && curr; i++) curr = curr->next;\n    if (!curr) return head;\n    ListNode* n = new ListNode(val);\n    n->next = curr->next;\n    curr->next = n;\n    return head;\n}`,
            javascript: `function insertAtK(head, index, val) {\n    if (index === 0) {\n        const n = new ListNode(val);\n        n.next = head;\n        return n;\n    }\n    let curr = head;\n    for (let i = 0; i < index - 1 && curr; i++) curr = curr.next;\n    if (!curr) return head;\n    const n = new ListNode(val);\n    n.next = curr.next;\n    curr.next = n;\n    return head;\n}`
          },
          lineExplanations: [
            { lines: [2, 5], text: "Handle zero index: delegates directly to O(1) head insertion." },
            { lines: [6, 9], text: "Traverse index-1 steps to stand on the predecessor node right before insertion point." },
            { lines: [10, 12], text: "Crucial order: connect new node to successor first, then connect predecessor to new node." }
          ],
          animationSteps: [
            { codeLine: 6, description: "Navigate to predecessor node 10 at index 0.", state: { type: 'linked-list', nodes: [{ val: 10, addr: '0x1000' }, { val: 30, addr: '0x1040' }] }, highlights: [0], pointers: { head: 0, curr: 0 } },
            { codeLine: 10, description: "Allocate new node 20. Wire node.next = curr.next (points to node 30).", state: { type: 'linked-list', nodes: [{ val: 10, addr: '0x1000' }, { val: 20, addr: '0x1020' }, { val: 30, addr: '0x1040' }] }, highlights: [1], pointers: { head: 0, curr: 0, node: 1 } },
            { codeLine: 12, description: "Wire curr.next = node (10 -> 20 -> 30). Splice complete.", state: { type: 'linked-list', nodes: [{ val: 10, addr: '0x1000' }, { val: 20, addr: '0x1020' }, { val: 30, addr: '0x1040' }] }, highlights: [0, 1, 2], pointers: { head: 0 } }
          ]
        }
      ],
      commonMistakes: "Setting curr.next = node before node.next = curr.next, which overwrites the link to the remainder of the list and drops it.",
      relatedQuestionIds: ['ll-insert-head', 'll-insert-tail']
    },

    // -------------------------------------------------------------------------
    // 5. DELETE HEAD
    // -------------------------------------------------------------------------
    {
      id: 'll-delete-head',
      subtopicId: 'll-basics',
      title: 'Delete Node from Beginning (Head)',
      difficulty: 'Basic',
      leetcode: null,
      description: 'Remove the first node from a linked list and return the new head pointer.',
      constraints: 'List length 0 to 10^4.',
      examples: [
        { input: 'head = [10, 20, 30]', output: '[20, 30]', why: 'The head reference is advanced from node 10 to node 20.' }
      ],
      approaches: [
        {
          name: 'Head Pointer Advance',
          idea: 'Check if head is null. If not, capture head.next and advance head.',
          timeComplexity: 'O(1) constant time operation',
          spaceComplexity: 'O(1) space',
          code: {
            python: `def delete_head(head):\n    if not head:\n        return None\n    return head.next`,
            java: `public static ListNode deleteHead(ListNode head) {\n    if (head == null) return null;\n    return head.next;\n}`,
            cpp: `ListNode* deleteHead(ListNode* head) {\n    if (!head) return nullptr;\n    ListNode* temp = head->next;\n    delete head; // Free heap memory in C++\n    return temp;\n}`,
            javascript: `function deleteHead(head) {\n    if (!head) return null;\n    return head.next;\n}`
          },
          lineExplanations: [
            { lines: [2, 3], text: "Verify non-empty boundary condition to prevent accessing null." },
            { lines: [4, 5], text: "Advance head to head.next, deallocating the evicted node where manual memory management applies." }
          ],
          animationSteps: [
            { codeLine: 1, description: "List with head pointing to node 10.", state: { type: 'linked-list', nodes: [{ val: 10, addr: '0x1000' }, { val: 20, addr: '0x1020' }, { val: 30, addr: '0x1040' }] }, highlights: [0], pointers: { head: 0 } },
            { codeLine: 4, description: "Head advances to node 20 (0x1020). Node 10 is detached.", state: { type: 'linked-list', nodes: [{ val: 20, addr: '0x1020' }, { val: 30, addr: '0x1040' }] }, highlights: [0], pointers: { head: 0 } }
          ]
        }
      ],
      commonMistakes: "Failing to check if head is already null, triggering null pointer exception.",
      relatedQuestionIds: ['ll-insert-head', 'll-delete-tail']
    },

    // -------------------------------------------------------------------------
    // 6. DELETE TAIL
    // -------------------------------------------------------------------------
    {
      id: 'll-delete-tail',
      subtopicId: 'll-basics',
      title: 'Delete Node from End (Tail)',
      difficulty: 'Basic',
      leetcode: null,
      description: 'Remove the terminal node from a linked list and return the head pointer.',
      constraints: 'List length 0 to 10^4.',
      examples: [
        { input: 'head = [10, 20, 30]', output: '[10, 20]', why: 'Node 20 next pointer is re-assigned to NULL, severing node 30.' }
      ],
      approaches: [
        {
          name: 'Second-to-Last Pointer Traversal',
          idea: 'Traverse until curr.next.next is null. Then set curr.next = null.',
          timeComplexity: 'O(n) time to walk to the penultimate node',
          spaceComplexity: 'O(1) auxiliary space',
          code: {
            python: `def delete_tail(head):\n    if not head or not head.next:\n        return None\n    curr = head\n    while curr.next.next:\n        curr = curr.next\n    curr.next = None\n    return head`,
            java: `public static ListNode deleteTail(ListNode head) {\n    if (head == null || head.next == null) return null;\n    ListNode curr = head;\n    while (curr.next.next != null) curr = curr.next;\n    curr.next = null;\n    return head;\n}`,
            cpp: `ListNode* deleteTail(ListNode* head) {\n    if (!head || !head->next) { delete head; return nullptr; }\n    ListNode* curr = head;\n    while (curr->next->next) curr = curr->next;\n    delete curr->next; curr->next = nullptr;\n    return head;\n}`,
            javascript: `function deleteTail(head) {\n    if (!head || !head.next) return null;\n    let curr = head;\n    while (curr.next.next) curr = curr.next;\n    curr.next = null;\n    return head;\n}`
          },
          lineExplanations: [
            { lines: [2, 3], text: "If list has 0 or 1 node, deleting tail leaves the list empty (NULL)." },
            { lines: [4, 6], text: "Scan forward while looking two steps ahead (curr.next.next) to stop on the penultimate node." },
            { lines: [7, 8], text: "Sever the terminal link by setting curr.next to NULL." }
          ],
          animationSteps: [
            { codeLine: 4, description: "Inspect curr at node 10. curr.next.next is node 30 (not null).", state: { type: 'linked-list', nodes: [{ val: 10, addr: '0x1000' }, { val: 20, addr: '0x1020' }, { val: 30, addr: '0x1040' }] }, highlights: [0], pointers: { head: 0, curr: 0 } },
            { codeLine: 6, description: "Advance curr to node 20. curr.next.next is NULL. Penultimate node reached.", state: { type: 'linked-list', nodes: [{ val: 10, addr: '0x1000' }, { val: 20, addr: '0x1020' }, { val: 30, addr: '0x1040' }] }, highlights: [1], pointers: { head: 0, curr: 1 } },
            { codeLine: 7, description: "Set curr.next = NULL. Node 30 detached. Tail deleted.", state: { type: 'linked-list', nodes: [{ val: 10, addr: '0x1000' }, { val: 20, addr: '0x1020' }] }, highlights: [1], pointers: { head: 0, curr: 1 } }
          ]
        }
      ],
      commonMistakes: "Traversing until curr.next is null instead of curr.next.next, leaving no way to update the previous node's link in a singly linked list.",
      relatedQuestionIds: ['ll-delete-head', 'll-delete-val']
    },

    // -------------------------------------------------------------------------
    // 7. DELETE BY VALUE
    // -------------------------------------------------------------------------
    {
      id: 'll-delete-val',
      subtopicId: 'll-basics',
      title: 'Delete Node by Target Value',
      difficulty: 'Easy',
      leetcode: { number: 203, url: 'https://leetcode.com/problems/remove-linked-list-elements/' },
      description: 'Given the head of a linked list and an integer val, remove all nodes of the linked list that have Node.val == val.',
      constraints: '0 <= list length <= 10^4. Node values -50 <= val <= 50.',
      examples: [
        { input: 'head = [1, 2, 6, 3, 4, 5, 6], val = 6', output: '[1, 2, 3, 4, 5]', why: 'Both instances of node 6 are bypassed and removed.' }
      ],
      approaches: [
        {
          name: 'Sentinel / Dummy Head Pattern',
          idea: 'Use a sentinel dummy node before head so deleting the head node is identical to deleting an internal node.',
          timeComplexity: 'O(n) single pass through all nodes',
          spaceComplexity: 'O(1) auxiliary space using one sentinel node',
          code: {
            python: `def remove_elements(head, val):\n    dummy = ListNode(0, head)\n    curr = dummy\n    while curr.next:\n        if curr.next.val == val:\n            curr.next = curr.next.next\n        else:\n            curr = curr.next\n    return dummy.next`,
            java: `public static ListNode removeElements(ListNode head, int val) {\n    ListNode dummy = new ListNode(0);\n    dummy.next = head;\n    ListNode curr = dummy;\n    while (curr.next != null) {\n        if (curr.next.val == val) curr.next = curr.next.next;\n        else curr = curr.next;\n    }\n    return dummy.next;\n}`,
            cpp: `ListNode* removeElements(ListNode* head, int val) {\n    ListNode dummy(0);\n    dummy.next = head;\n    ListNode* curr = &dummy;\n    while (curr->next) {\n        if (curr->next->val == val) {\n            ListNode* toDel = curr->next;\n            curr->next = curr->next->next;\n            delete toDel;\n        } else {\n            curr = curr->next;\n        }\n    }\n    return dummy.next;\n}`,
            javascript: `function removeElements(head, val) {\n    const dummy = new ListNode(0, head);\n    let curr = dummy;\n    while (curr.next) {\n        if (curr.next.val === val) {\n            curr.next = curr.next.next;\n        } else {\n            curr = curr.next;\n        }\n    }\n    return dummy.next;\n}`
          },
          lineExplanations: [
            { lines: [2, 3], text: "Initialize dummy node pointing to head, eliminating special-casing when head itself matches target." },
            { lines: [4, 7], text: "If curr.next matches target val, bypass it via curr.next = curr.next.next without advancing curr." },
            { lines: [8, 9], text: "Only advance curr when no deletion occurred, ensuring consecutive duplicates are caught." }
          ],
          animationSteps: [
            { codeLine: 3, description: "Initialize dummy node before Node 1. curr points to dummy.", state: { type: 'linked-list', nodes: [{ val: 1, addr: '0x1000' }, { val: 6, addr: '0x1020' }, { val: 3, addr: '0x1040' }] }, highlights: [0], pointers: { dummy: 0, curr: 0 } },
            { codeLine: 5, description: "curr.next has value 6 (target match!).", state: { type: 'linked-list', nodes: [{ val: 1, addr: '0x1000' }, { val: 6, addr: '0x1020' }, { val: 3, addr: '0x1040' }] }, highlights: [1], pointers: { curr: 0 } },
            { codeLine: 6, description: "Bypass node 6: set curr.next = curr.next.next (1 -> 3).", state: { type: 'linked-list', nodes: [{ val: 1, addr: '0x1000' }, { val: 3, addr: '0x1040' }] }, highlights: [1], pointers: { curr: 0 } }
          ]
        }
      ],
      commonMistakes: "Advancing curr = curr.next even when deleting a node, which skips checking consecutive target values.",
      relatedQuestionIds: ['ll-delete-head', 'll-delete-tail']
    },

    // -------------------------------------------------------------------------
    // 8. SEARCH ELEMENT
    // -------------------------------------------------------------------------
    {
      id: 'll-search',
      subtopicId: 'll-basics',
      title: 'Search for an Element in Linked List',
      difficulty: 'Basic',
      leetcode: null,
      description: 'Search for a target value in a linked list. Return true and its zero-indexed position if present, or -1 if absent.',
      constraints: '0 <= list length <= 10^4.',
      examples: [
        { input: 'head = [10, 20, 30, 40], target = 30', output: '2', why: 'Node 30 is at index 2 (0-indexed).' }
      ],
      approaches: [
        {
          name: 'Linear Pointer Search',
          idea: 'Walk node-by-node while incrementing an index counter until a value match occurs or null is reached.',
          timeComplexity: 'O(n) worst-case time to inspect each node sequentially',
          spaceComplexity: 'O(1) memory',
          code: {
            python: `def search_list(head, target):\n    curr = head\n    idx = 0\n    while curr:\n        if curr.val == target:\n            return idx\n        curr = curr.next\n        idx += 1\n    return -1`,
            java: `public static int searchList(ListNode head, int target) {\n    ListNode curr = head;\n    int idx = 0;\n    while (curr != null) {\n        if (curr.val == target) return idx;\n        curr = curr.next;\n        idx++;\n    }\n    return -1;\n}`,
            cpp: `int searchList(ListNode* head, int target) {\n    ListNode* curr = head;\n    int idx = 0;\n    while (curr) {\n        if (curr->val == target) return idx;\n        curr = curr->next;\n        idx++;\n    }\n    return -1;\n}`,
            javascript: `function searchList(head, target) {\n    let curr = head;\n    let idx = 0;\n    while (curr) {\n        if (curr.val === target) return idx;\n        curr = curr.next;\n        idx++;\n    }\n    return -1;\n}`
          },
          lineExplanations: [
            { lines: [2, 3], text: "Set current pointer to head and initialize zero-based index counter." },
            { lines: [4, 6], text: "Check node value against target; if matched, return the index immediately." },
            { lines: [7, 9], text: "Advance pointer and increment counter. If end of list reached, return -1." }
          ],
          animationSteps: [
            { codeLine: 4, description: "Check node 0 (val 10). 10 != 30. Advance.", state: { type: 'linked-list', nodes: [{ val: 10, addr: '0x1000' }, { val: 20, addr: '0x1020' }, { val: 30, addr: '0x1040' }] }, highlights: [0], pointers: { curr: 0 } },
            { codeLine: 4, description: "Check node 1 (val 20). 20 != 30. Advance.", state: { type: 'linked-list', nodes: [{ val: 10, addr: '0x1000' }, { val: 20, addr: '0x1020' }, { val: 30, addr: '0x1040' }] }, highlights: [1], pointers: { curr: 1 } },
            { codeLine: 5, description: "Check node 2 (val 30). 30 == 30! Match found at index 2.", state: { type: 'linked-list', nodes: [{ val: 10, addr: '0x1000' }, { val: 20, addr: '0x1020' }, { val: 30, addr: '0x1040' }] }, highlights: [2], pointers: { curr: 2 } }
          ]
        }
      ],
      commonMistakes: "Expecting O(1) random binary search access, which is impossible without contiguous memory array indexing.",
      relatedQuestionIds: ['ll-traverse', 'll-update']
    },

    // -------------------------------------------------------------------------
    // 9. TRAVERSE & DISPLAY
    // -------------------------------------------------------------------------
    {
      id: 'll-traverse',
      subtopicId: 'll-basics',
      title: 'Traverse and Collect Values',
      difficulty: 'Basic',
      leetcode: null,
      description: 'Traverse the linked list and collect all node values into an array/list sequence.',
      constraints: '0 <= list length <= 10^4.',
      examples: [
        { input: 'head = [4, 8, 15, 16]', output: '[4, 8, 15, 16]', why: 'Nodes visited from head to tail in order.' }
      ],
      approaches: [
        {
          name: 'Pointer Walk',
          idea: 'Initialize output array, traverse from head to NULL appending each node value.',
          timeComplexity: 'O(n) time',
          spaceComplexity: 'O(n) to store the result array',
          code: {
            python: `def traverse(head):\n    res = []\n    curr = head\n    while curr:\n        res.append(curr.val)\n        curr = curr.next\n    return res`,
            java: `public static List<Integer> traverse(ListNode head) {\n    List<Integer> res = new ArrayList<>();\n    ListNode curr = head;\n    while (curr != null) {\n        res.add(curr.val);\n        curr = curr.next;\n    }\n    return res;\n}`,
            cpp: `vector<int> traverse(ListNode* head) {\n    vector<int> res;\n    ListNode* curr = head;\n    while (curr) {\n        res.push_back(curr->val);\n        curr = curr->next;\n    }\n    return res;\n}`,
            javascript: `function traverse(head) {\n    const res = [];\n    let curr = head;\n    while (curr) {\n        res.push(curr.val);\n        curr = curr.next;\n    }\n    return res;\n}`
          },
          lineExplanations: [
            { lines: [2, 3], text: "Allocate dynamic array buffer and set traversal pointer curr = head." },
            { lines: [4, 6], text: "Loop while curr is non-null, appending curr.val and advancing curr to curr.next." }
          ],
          animationSteps: [
            { codeLine: 4, description: "curr at node 4. Collect 4.", state: { type: 'linked-list', nodes: [{ val: 4, addr: '0x1000' }, { val: 8, addr: '0x1020' }, { val: 15, addr: '0x1040' }] }, highlights: [0], pointers: { curr: 0 } },
            { codeLine: 5, description: "curr at node 8. Collect 8.", state: { type: 'linked-list', nodes: [{ val: 4, addr: '0x1000' }, { val: 8, addr: '0x1020' }, { val: 15, addr: '0x1040' }] }, highlights: [1], pointers: { curr: 1 } },
            { codeLine: 6, description: "curr at node 15. Collect 15. Traversal complete.", state: { type: 'linked-list', nodes: [{ val: 4, addr: '0x1000' }, { val: 8, addr: '0x1020' }, { val: 15, addr: '0x1040' }] }, highlights: [2], pointers: { curr: 2 } }
          ]
        }
      ],
      commonMistakes: "Modifying the original head variable during traversal instead of using a temporary cursor pointer curr.",
      relatedQuestionIds: ['ll-search', 'll-size']
    },

    // -------------------------------------------------------------------------
    // 10. UPDATE NODE VALUE
    // -------------------------------------------------------------------------
    {
      id: 'll-update',
      subtopicId: 'll-basics',
      title: 'Update Node Value at Index',
      difficulty: 'Basic',
      leetcode: null,
      description: 'Update the value of the node at given index to newVal. Return true if successful, false if index is out of bounds.',
      constraints: '0 <= list length <= 10^4.',
      examples: [
        { input: 'head = [10, 20, 30], index = 1, newVal = 99', output: '[10, 99, 30]', why: 'Node at index 1 mutated from 20 to 99.' }
      ],
      approaches: [
        {
          name: 'Direct In-Place Mutation',
          idea: 'Advance to the node at position index and update its val field.',
          timeComplexity: 'O(k) where k is the index',
          spaceComplexity: 'O(1)',
          code: {
            python: `def update_val(head, index, new_val):\n    curr = head\n    for _ in range(index):\n        if not curr: return False\n        curr = curr.next\n    if not curr: return False\n    curr.val = new_val\n    return True`,
            java: `public static boolean updateVal(ListNode head, int index, int newVal) {\n    ListNode curr = head;\n    for (int i = 0; i < index && curr != null; i++) curr = curr.next;\n    if (curr == null) return false;\n    curr.val = newVal;\n    return true;\n}`,
            cpp: `bool updateVal(ListNode* head, int index, int newVal) {\n    ListNode* curr = head;\n    for (int i = 0; i < index && curr; i++) curr = curr->next;\n    if (!curr) return false;\n    curr->val = newVal;\n    return true;\n}`,
            javascript: `function updateVal(head, index, newVal) {\n    let curr = head;\n    for (let i = 0; i < index && curr; i++) curr = curr.next;\n    if (!curr) return false;\n    curr.val = newVal;\n    return true;\n}`
          },
          lineExplanations: [
            { lines: [2, 5], text: "Walk forward index times, checking boundary safety." },
            { lines: [6, 8], text: "Mutate node's val directly in memory." }
          ],
          animationSteps: [
            { codeLine: 4, description: "Navigate to index 1 (node 20).", state: { type: 'linked-list', nodes: [{ val: 10, addr: '0x1000' }, { val: 20, addr: '0x1020' }, { val: 30, addr: '0x1040' }] }, highlights: [1], pointers: { curr: 1 } },
            { codeLine: 7, description: "Mutate value 20 -> 99 in place at address 0x1020.", state: { type: 'linked-list', nodes: [{ val: 10, addr: '0x1000' }, { val: 99, addr: '0x1020' }, { val: 30, addr: '0x1040' }] }, highlights: [1], pointers: { curr: 1 } }
          ]
        }
      ],
      commonMistakes: "Assuming O(1) index write like array[i] = val. Linked list requires sequential O(k) pointer traversal.",
      relatedQuestionIds: ['ll-search', 'll-insert-kth']
    },

    // -------------------------------------------------------------------------
    // 11. CALCULATE SIZE & CHECK EMPTY
    // -------------------------------------------------------------------------
    {
      id: 'll-size',
      subtopicId: 'll-basics',
      title: 'Calculate Length & Check If Empty',
      difficulty: 'Basic',
      leetcode: null,
      description: 'Compute the total number of nodes in a singly linked list and return whether the list is empty.',
      constraints: '0 <= list length <= 10^5.',
      examples: [
        { input: 'head = [10, 20, 30]', output: 'size = 3, isEmpty = false', why: '3 nodes traversed until reaching NULL.' }
      ],
      approaches: [
        {
          name: 'Pointer Count Loop',
          idea: 'Count iterations while advancing curr until curr becomes null.',
          timeComplexity: 'O(n) time',
          spaceComplexity: 'O(1) memory',
          code: {
            python: `def get_size(head):\n    count = 0\n    curr = head\n    while curr:\n        count += 1\n        curr = curr.next\n    return count, count == 0`,
            java: `public static int getSize(ListNode head) {\n    int count = 0;\n    ListNode curr = head;\n    while (curr != null) {\n        count++;\n        curr = curr.next;\n    }\n    return count;\n}`,
            cpp: `int getSize(ListNode* head) {\n    int count = 0;\n    ListNode* curr = head;\n    while (curr) {\n        count++;\n        curr = curr->next;\n    }\n    return count;\n}`,
            javascript: `function getSize(head) {\n    let count = 0;\n    let curr = head;\n    while (curr) {\n        count++;\n        curr = curr.next;\n    }\n    return count;\n}`
          },
          lineExplanations: [
            { lines: [2, 3], text: "Initialize accumulator count to 0 and cursor to head." },
            { lines: [4, 6], text: "Increment count on every node visit until curr becomes null." }
          ],
          animationSteps: [
            { codeLine: 4, description: "Visit node 10. count = 1.", state: { type: 'linked-list', nodes: [{ val: 10, addr: '0x1000' }, { val: 20, addr: '0x1020' }] }, highlights: [0], pointers: { curr: 0 } },
            { codeLine: 5, description: "Visit node 20. count = 2. curr.next is null, final length = 2.", state: { type: 'linked-list', nodes: [{ val: 10, addr: '0x1000' }, { val: 20, addr: '0x1020' }] }, highlights: [1], pointers: { curr: 1 } }
          ]
        }
      ],
      commonMistakes: "Trying to call len(head) directly without traversing, as linked lists do not store implicit length like dynamic arrays.",
      relatedQuestionIds: ['ll-traverse']
    },

    // -------------------------------------------------------------------------
    // 12. REVERSE A LINKED LIST (LEETCODE 206)
    // -------------------------------------------------------------------------
    {
      id: 'll-reverse',
      subtopicId: 'll-mutation',
      title: 'Reverse Linked List',
      difficulty: 'Easy',
      leetcode: { number: 206, url: 'https://leetcode.com/problems/reverse-linked-list/' },
      description: 'Given the head of a singly linked list, reverse the list, and return the reversed list.',
      constraints: 'The number of nodes in the list is the range [0, 5000]. -5000 <= Node.val <= 5000.',
      examples: [
        { input: 'head = [1, 2, 3, 4, 5]', output: '[5, 4, 3, 2, 1]', why: 'All directional pointer arrows inverted.' }
      ],
      approaches: [
        {
          name: 'Three-Pointer Iterative Reversal',
          idea: 'Maintain prev (initially null), curr (at head), and next_temp. In each step, capture next node, flip curr.next = prev, advance prev to curr, and advance curr to next_temp.',
          timeComplexity: 'O(n) time for a single linear pass',
          spaceComplexity: 'O(1) auxiliary space (reverses pointers in place without allocating new nodes)',
          code: {
            python: `def reverse_list(head):\n    prev = None\n    curr = head\n    while curr:\n        next_temp = curr.next\n        curr.next = prev\n        prev = curr\n        curr = next_temp\n    return prev`,
            java: `public static ListNode reverseList(ListNode head) {\n    ListNode prev = null;\n    ListNode curr = head;\n    while (curr != null) {\n        ListNode nextTemp = curr.next;\n        curr.next = prev;\n        prev = curr;\n        curr = nextTemp;\n    }\n    return prev;\n}`,
            cpp: `ListNode* reverseList(ListNode* head) {\n    ListNode* prev = nullptr;\n    ListNode* curr = head;\n    while (curr) {\n        ListNode* nextTemp = curr->next;\n        curr->next = prev;\n        prev = curr;\n        curr = nextTemp;\n    }\n    return prev;\n}`,
            javascript: `function reverseList(head) {\n    let prev = null;\n    let curr = head;\n    while (curr) {\n        const nextTemp = curr.next;\n        curr.next = prev;\n        prev = curr;\n        curr = nextTemp;\n    }\n    return prev;\n}`
          },
          lineExplanations: [
            { lines: [2, 3], text: "Initialize prev = null (which will become the new tail's next pointer) and curr = head." },
            { lines: [5, 5], text: "Save the forward node reference (next_temp = curr.next) before breaking the link." },
            { lines: [6, 6], text: "Point current node backwards: curr.next = prev." },
            { lines: [7, 8], text: "Shift both pointers forward: prev becomes curr, and curr becomes next_temp." }
          ],
          animationSteps: [
            { codeLine: 3, description: "Start: prev = null, curr = Node 1.", state: { type: 'linked-list', nodes: [{ val: 1, addr: '0x1000' }, { val: 2, addr: '0x1020' }, { val: 3, addr: '0x1040' }] }, highlights: [0], pointers: { curr: 0 } },
            { codeLine: 6, description: "Flip Node 1 next to null. Advance prev = 1, curr = 2.", state: { type: 'linked-list', nodes: [{ val: 1, addr: '0x1000', nextAddr: 'NULL' }, { val: 2, addr: '0x1020' }, { val: 3, addr: '0x1040' }] }, highlights: [1], pointers: { prev: 0, curr: 1 } },
            { codeLine: 6, description: "Flip Node 2 next to Node 1 (0x1020 -> 0x1000). Advance prev = 2, curr = 3.", state: { type: 'linked-list', nodes: [{ val: 2, addr: '0x1020', nextAddr: '0x1000' }, { val: 1, addr: '0x1000', nextAddr: 'NULL' }, { val: 3, addr: '0x1040' }] }, highlights: [2], pointers: { prev: 0, curr: 2 } },
            { codeLine: 6, description: "Flip Node 3 next to Node 2 (0x1040 -> 0x1020). curr becomes null. prev is new head (Node 3).", state: { type: 'linked-list', nodes: [{ val: 3, addr: '0x1040', nextAddr: '0x1020' }, { val: 2, addr: '0x1020', nextAddr: '0x1000' }, { val: 1, addr: '0x1000', nextAddr: 'NULL' }] }, highlights: [0], pointers: { prev: 0 } }
          ]
        }
      ],
      commonMistakes: "Flipping curr.next before saving next_temp, stranding the rest of the list and causing an infinite loop or premature termination.",
      relatedQuestionIds: ['ll-palindrome', 'll-middle']
    },

    // -------------------------------------------------------------------------
    // 13. MIDDLE OF THE LINKED LIST (LEETCODE 876)
    // -------------------------------------------------------------------------
    {
      id: 'll-middle',
      subtopicId: 'll-traversal',
      title: 'Middle of the Linked List',
      difficulty: 'Easy',
      leetcode: { number: 876, url: 'https://leetcode.com/problems/middle-of-the-linked-list/' },
      description: 'Given the head of a singly linked list, return the middle node. If there are two middle nodes, return the second middle node.',
      constraints: 'The number of nodes in the list is in the range [1, 100]. 1 <= Node.val <= 100.',
      examples: [
        { input: 'head = [1, 2, 3, 4, 5]', output: '[3, 4, 5]', why: 'The middle node is 3.' },
        { input: 'head = [1, 2, 3, 4, 5, 6]', output: '[4, 5, 6]', why: 'Even count, return second middle node 4.' }
      ],
      approaches: [
        {
          name: 'Fast & Slow Two-Pointer (Tortoise and Hare)',
          idea: 'Advance slow by 1 step and fast by 2 steps. When fast reaches the end (or null), slow is standing precisely on the middle node.',
          timeComplexity: 'O(n) time for a single pass (fast takes n/2 steps)',
          spaceComplexity: 'O(1) auxiliary space',
          code: {
            python: `def middle_node(head):\n    slow = head\n    fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n    return slow`,
            java: `public static ListNode middleNode(ListNode head) {\n    ListNode slow = head, fast = head;\n    while (fast != null && fast.next != null) {\n        slow = slow.next;\n        fast = fast.next.next;\n    }\n    return slow;\n}`,
            cpp: `ListNode* middleNode(ListNode* head) {\n    ListNode* slow = head;\n    ListNode* fast = head;\n    while (fast && fast->next) {\n        slow = slow->next;\n        fast = fast->next->next;\n    }\n    return slow;\n}`,
            javascript: `function middleNode(head) {\n    let slow = head;\n    let fast = head;\n    while (fast && fast.next) {\n        slow = slow.next;\n        fast = fast.next.next;\n    }\n    return slow;\n}`
          },
          lineExplanations: [
            { lines: [2, 3], text: "Initialize both slow and fast pointers to the head node." },
            { lines: [4, 6], text: "Loop while fast and fast.next are valid: advance slow by 1 step and fast by 2 steps." },
            { lines: [7, 7], text: "When fast reaches the end, slow is exactly at the midpoint." }
          ],
          animationSteps: [
            { codeLine: 3, description: "Start: slow and fast both at Node 1.", state: { type: 'linked-list', nodes: [{ val: 1, addr: '0x1000' }, { val: 2, addr: '0x1020' }, { val: 3, addr: '0x1040' }, { val: 4, addr: '0x1060' }, { val: 5, addr: '0x1080' }] }, highlights: [0], pointers: { slow: 0, fast: 0 } },
            { codeLine: 5, description: "Step 1: slow moves to Node 2, fast leaps to Node 3.", state: { type: 'linked-list', nodes: [{ val: 1, addr: '0x1000' }, { val: 2, addr: '0x1020' }, { val: 3, addr: '0x1040' }, { val: 4, addr: '0x1060' }, { val: 5, addr: '0x1080' }] }, highlights: [1, 2], pointers: { slow: 1, fast: 2 } },
            { codeLine: 6, description: "Step 2: slow moves to Node 3, fast leaps to Node 5 (tail). fast.next is null, loop finishes.", state: { type: 'linked-list', nodes: [{ val: 1, addr: '0x1000' }, { val: 2, addr: '0x1020' }, { val: 3, addr: '0x1040' }, { val: 4, addr: '0x1060' }, { val: 5, addr: '0x1080' }] }, highlights: [2, 4], pointers: { slow: 2, fast: 4 } },
            { codeLine: 7, description: "Return slow pointer referencing Node 3 (middle node).", state: { type: 'linked-list', nodes: [{ val: 3, addr: '0x1040' }, { val: 4, addr: '0x1060' }, { val: 5, addr: '0x1080' }] }, highlights: [0], pointers: { middle: 0 } }
          ]
        }
      ],
      commonMistakes: "Writing while (fast.next) without checking while (fast and fast.next), causing null pointer errors when list has an even number of nodes.",
      relatedQuestionIds: ['ll-cycle', 'll-palindrome']
    },

    // -------------------------------------------------------------------------
    // 14. LINKED LIST CYCLE DETECTION (LEETCODE 141)
    // -------------------------------------------------------------------------
    {
      id: 'll-cycle',
      subtopicId: 'll-advanced',
      title: 'Linked List Cycle Detection',
      difficulty: 'Easy',
      leetcode: { number: 141, url: 'https://leetcode.com/problems/linked-list-cycle/' },
      description: 'Given head, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle if some node can be reached again by continuously following next.',
      constraints: 'Number of nodes in the list is [0, 10^4]. -10^5 <= Node.val <= 10^5.',
      examples: [
        { input: 'head = [3, 2, 0, -4], pos = 1 (tail connects to node 1)', output: 'true', why: 'Tail connects to node index 1, creating an endless loop.' }
      ],
      approaches: [
        {
          name: "Floyd's Tortoise and Hare Cycle Finding",
          idea: 'Advance slow by 1 and fast by 2. If a cycle exists, fast will lap and collide with slow inside the loop. If fast hits NULL, no cycle exists.',
          timeComplexity: 'O(n) time (in a loop of length K, fast catches slow in <= K steps)',
          spaceComplexity: 'O(1) memory (zero extra hash sets required)',
          code: {
            python: `def has_cycle(head):\n    slow = head\n    fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        if slow == fast:\n            return True\n    return False`,
            java: `public static boolean hasCycle(ListNode head) {\n    ListNode slow = head, fast = head;\n    while (fast != null && fast.next != null) {\n        slow = slow.next;\n        fast = fast.next.next;\n        if (slow == fast) return true;\n    }\n    return false;\n}`,
            cpp: `bool hasCycle(ListNode* head) {\n    ListNode* slow = head;\n    ListNode* fast = head;\n    while (fast && fast->next) {\n        slow = slow->next;\n        fast = fast->next->next;\n        if (slow == fast) return true;\n    }\n    return false;\n}`,
            javascript: `function hasCycle(head) {\n    let slow = head;\n    let fast = head;\n    while (fast && fast.next) {\n        slow = slow.next;\n        fast = fast.next.next;\n        if (slow === fast) return true;\n    }\n    return false;\n}`
          },
          lineExplanations: [
            { lines: [2, 3], text: "Set both pointers to head." },
            { lines: [4, 6], text: "Advance slow by 1 step and fast by 2 steps." },
            { lines: [7, 8], text: "If memory addresses collide (slow == fast), cycle is confirmed. If fast hits null, return false." }
          ],
          animationSteps: [
            { codeLine: 3, description: "Start: slow and fast at head (Node 3). Cycle loops tail to Node 2.", state: { type: 'linked-list', cycleToIndex: 1, nodes: [{ val: 3, addr: '0x1000' }, { val: 2, addr: '0x1020' }, { val: 0, addr: '0x1040' }, { val: -4, addr: '0x1060' }] }, highlights: [0], pointers: { slow: 0, fast: 0 } },
            { codeLine: 5, description: "Iteration 1: slow at Node 2, fast at Node 0.", state: { type: 'linked-list', cycleToIndex: 1, nodes: [{ val: 3, addr: '0x1000' }, { val: 2, addr: '0x1020' }, { val: 0, addr: '0x1040' }, { val: -4, addr: '0x1060' }] }, highlights: [1, 2], pointers: { slow: 1, fast: 2 } },
            { codeLine: 5, description: "Iteration 2: slow at Node 0, fast loops around back to Node 2.", state: { type: 'linked-list', cycleToIndex: 1, nodes: [{ val: 3, addr: '0x1000' }, { val: 2, addr: '0x1020' }, { val: 0, addr: '0x1040' }, { val: -4, addr: '0x1060' }] }, highlights: [2, 1], pointers: { slow: 2, fast: 1 } },
            { codeLine: 7, description: "Iteration 3: slow advances to Node -4, fast advances to Node -4. Collision! slow == fast.", state: { type: 'linked-list', cycleToIndex: 1, nodes: [{ val: 3, addr: '0x1000' }, { val: 2, addr: '0x1020' }, { val: 0, addr: '0x1040' }, { val: -4, addr: '0x1060' }] }, highlights: [3], pointers: { collide: 3 } }
          ]
        }
      ],
      commonMistakes: "Comparing node values (slow.val == fast.val) instead of reference memory addresses (slow == fast). Different nodes can have identical values.",
      relatedQuestionIds: ['ll-middle', 'll-reverse']
    },

    // -------------------------------------------------------------------------
    // 15. MERGE TWO SORTED LISTS (LEETCODE 21)
    // -------------------------------------------------------------------------
    {
      id: 'll-merge',
      subtopicId: 'll-mutation',
      title: 'Merge Two Sorted Lists',
      difficulty: 'Easy',
      leetcode: { number: 21, url: 'https://leetcode.com/problems/merge-two-sorted-lists/' },
      description: 'You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list by splicing together existing nodes.',
      constraints: 'Number of nodes in both lists is [0, 50]. -100 <= Node.val <= 100.',
      examples: [
        { input: 'list1 = [1, 2, 4], list2 = [1, 3, 4]', output: '[1, 1, 2, 3, 4, 4]', why: 'Nodes spliced in non-decreasing order.' }
      ],
      approaches: [
        {
          name: 'Dummy Sentinel Node & Iterative Splice',
          idea: 'Compare the heads of list1 and list2. Attach the smaller node to tail.next, advance that list pointer and tail. Attach remainder when one list empties.',
          timeComplexity: 'O(n + m) time where n and m are the lengths of the two lists',
          spaceComplexity: 'O(1) space (splices original nodes in place)',
          code: {
            python: `def merge_two_lists(l1, l2):\n    dummy = ListNode(0)\n    tail = dummy\n    while l1 and l2:\n        if l1.val <= l2.val:\n            tail.next = l1\n            l1 = l1.next\n        else:\n            tail.next = l2\n            l2 = l2.next\n        tail = tail.next\n    tail.next = l1 if l1 else l2\n    return dummy.next`,
            java: `public static ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n    ListNode dummy = new ListNode(0);\n    ListNode tail = dummy;\n    while (l1 != null && l2 != null) {\n        if (l1.val <= l2.val) {\n            tail.next = l1; l1 = l1.next;\n        } else {\n            tail.next = l2; l2 = l2.next;\n        }\n        tail = tail.next;\n    }\n    tail.next = (l1 != null) ? l1 : l2;\n    return dummy.next;\n}`,
            cpp: `ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {\n    ListNode dummy(0);\n    ListNode* tail = &dummy;\n    while (l1 && l2) {\n        if (l1->val <= l2->val) {\n            tail->next = l1; l1 = l1->next;\n        } else {\n            tail->next = l2; l2 = l2->next;\n        }\n        tail = tail->next;\n    }\n    tail->next = l1 ? l1 : l2;\n    return dummy.next;\n}`,
            javascript: `function mergeTwoLists(l1, l2) {\n    const dummy = new ListNode(0);\n    let tail = dummy;\n    while (l1 && l2) {\n        if (l1.val <= l2.val) {\n            tail.next = l1; l1 = l1.next;\n        } else {\n            tail.next = l2; l2 = l2.next;\n        }\n        tail = tail.next;\n    }\n    tail.next = l1 || l2;\n    return dummy.next;\n}`
          },
          lineExplanations: [
            { lines: [2, 3], text: "Create dummy anchor node to build the merged list cleanly." },
            { lines: [4, 11], text: "Compare values: wire tail.next to the smaller node and advance that input pointer." },
            { lines: [12, 13], text: "Attach whichever non-empty list remains in O(1) time and return dummy.next." }
          ],
          animationSteps: [
            { codeLine: 4, description: "Compare l1 (val 1) vs l2 (val 1). Equal: attach l1 to merged list.", state: { type: 'linked-list', nodes: [{ val: 1, addr: '0x1000' }, { val: 1, addr: '0x2000' }, { val: 2, addr: '0x1020' }] }, highlights: [0], pointers: { l1: 0 } },
            { codeLine: 8, description: "Attach l2 (val 1). Merged: [1, 1].", state: { type: 'linked-list', nodes: [{ val: 1, addr: '0x1000' }, { val: 1, addr: '0x2000' }, { val: 2, addr: '0x1020' }] }, highlights: [1], pointers: { l2: 1 } },
            { codeLine: 12, description: "Continue splicing remainder. Output: [1, 1, 2, 3, 4, 4].", state: { type: 'linked-list', nodes: [{ val: 1, addr: '0x1000' }, { val: 1, addr: '0x2000' }, { val: 2, addr: '0x1020' }, { val: 3, addr: '0x2020' }, { val: 4, addr: '0x1040' }] }, highlights: [0, 1, 2, 3, 4], pointers: { head: 0 } }
          ]
        }
      ],
      commonMistakes: "Allocating brand new nodes instead of re-wiring existing next pointers, wasting O(n+m) unnecessary heap memory.",
      relatedQuestionIds: ['ll-reverse', 'll-insert-kth']
    },

    // -------------------------------------------------------------------------
    // 16. REMOVE NTH NODE FROM END OF LIST (LEETCODE 19)
    // -------------------------------------------------------------------------
    {
      id: 'll-remove-nth-end',
      subtopicId: 'll-traversal',
      title: 'Remove Nth Node From End of List',
      difficulty: 'Medium',
      leetcode: { number: 19, url: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/' },
      description: 'Given the head of a linked list, remove the nth node from the end of the list and return its head in a single pass.',
      constraints: 'List length is [1, 30]. 0 <= Node.val <= 100. 1 <= n <= list size.',
      examples: [
        { input: 'head = [1, 2, 3, 4, 5], n = 2', output: '[1, 2, 3, 5]', why: 'The 2nd node from the end is 4. Removing it yields [1, 2, 3, 5].' }
      ],
      approaches: [
        {
          name: 'Two-Pointer Sliding Window Gap (Fast & Slow)',
          idea: 'Place dummy before head. Advance fast pointer n+1 steps ahead. Then move both fast and slow together until fast is null. slow will stop directly on the predecessor of the node to remove.',
          timeComplexity: 'O(L) time where L is the total length of the list, achieved in a single pass',
          spaceComplexity: 'O(1) memory',
          code: {
            python: `def remove_nth_from_end(head, n):\n    dummy = ListNode(0, head)\n    fast = dummy\n    slow = dummy\n    for _ in range(n + 1):\n        fast = fast.next\n    while fast:\n        fast = fast.next\n        slow = slow.next\n    slow.next = slow.next.next\n    return dummy.next`,
            java: `public static ListNode removeNthFromEnd(ListNode head, int n) {\n    ListNode dummy = new ListNode(0);\n    dummy.next = head;\n    ListNode fast = dummy, slow = dummy;\n    for (int i = 0; i <= n; i++) fast = fast.next;\n    while (fast != null) {\n        fast = fast.next;\n        slow = slow.next;\n    }\n    slow.next = slow.next.next;\n    return dummy.next;\n}`,
            cpp: `ListNode* removeNthFromEnd(ListNode* head, int n) {\n    ListNode dummy(0);\n    dummy.next = head;\n    ListNode* fast = &dummy;\n    ListNode* slow = &dummy;\n    for (int i = 0; i <= n; i++) fast = fast->next;\n    while (fast) {\n        fast = fast->next;\n        slow = slow->next;\n    }\n    slow->next = slow->next->next;\n    return dummy.next;\n}`,
            javascript: `function removeNthFromEnd(head, n) {\n    const dummy = new ListNode(0, head);\n    let fast = dummy;\n    let slow = dummy;\n    for (let i = 0; i <= n; i++) fast = fast.next;\n    while (fast) {\n        fast = fast.next;\n        slow = slow.next;\n    }\n    slow.next = slow.next.next;\n    return dummy.next;\n}`
          },
          lineExplanations: [
            { lines: [2, 4], text: "Set dummy node before head so deleting the first element requires no special case." },
            { lines: [5, 6], text: "Advance fast n+1 steps ahead to create a fixed gap between fast and slow." },
            { lines: [7, 9], text: "Slide both pointers forward until fast reaches null. slow is now at predecessor." },
            { lines: [10, 11], text: "Bypass the target node: slow.next = slow.next.next." }
          ],
          animationSteps: [
            { codeLine: 5, description: "Advance fast 3 steps (n+1 where n=2). fast is at Node 3, slow is at dummy.", state: { type: 'linked-list', nodes: [{ val: 1, addr: '0x1000' }, { val: 2, addr: '0x1020' }, { val: 3, addr: '0x1040' }, { val: 4, addr: '0x1060' }, { val: 5, addr: '0x1080' }] }, highlights: [0, 2], pointers: { slow: 0, fast: 2 } },
            { codeLine: 8, description: "Slide pointers until fast reaches end. slow stands on Node 3 (predecessor of 4).", state: { type: 'linked-list', nodes: [{ val: 1, addr: '0x1000' }, { val: 2, addr: '0x1020' }, { val: 3, addr: '0x1040' }, { val: 4, addr: '0x1060' }, { val: 5, addr: '0x1080' }] }, highlights: [2, 3], pointers: { slow: 2, fast: 4 } },
            { codeLine: 10, description: "Execute slow.next = slow.next.next (3 -> 5). Node 4 removed in 1 pass.", state: { type: 'linked-list', nodes: [{ val: 1, addr: '0x1000' }, { val: 2, addr: '0x1020' }, { val: 3, addr: '0x1040' }, { val: 5, addr: '0x1080' }] }, highlights: [2, 3], pointers: { head: 0 } }
          ]
        }
      ],
      commonMistakes: "Running two passes (first to count total length L, second to reach L-n). The two-pointer gap achieves this in a single pass.",
      relatedQuestionIds: ['ll-middle', 'll-delete-val']
    },

    // -------------------------------------------------------------------------
    // 17. PALINDROME LINKED LIST (LEETCODE 234)
    // -------------------------------------------------------------------------
    {
      id: 'll-palindrome',
      subtopicId: 'll-traversal',
      title: 'Palindrome Linked List',
      difficulty: 'Easy',
      leetcode: { number: 234, url: 'https://leetcode.com/problems/palindrome-linked-list/' },
      description: 'Given the head of a singly linked list, return true if it is a palindrome or false otherwise, in O(n) time and O(1) space.',
      constraints: 'The number of nodes in the list is in the range [1, 10^5]. 0 <= Node.val <= 9.',
      examples: [
        { input: 'head = [1, 2, 2, 1]', output: 'true', why: 'Reads 1 -> 2 -> 2 -> 1 in both directions.' }
      ],
      approaches: [
        {
          name: 'Find Midpoint + Reverse Second Half + Compare',
          idea: 'Use slow/fast pointers to find midpoint. Reverse the second half in place. Walk from head and reversed second half comparing values. Restore list.',
          timeComplexity: 'O(n) time across 3 half-passes',
          spaceComplexity: 'O(1) auxiliary space (no array or stack)',
          code: {
            python: `def is_palindrome(head):\n    # 1. Find midpoint\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n    # 2. Reverse second half\n    prev = None\n    while slow:\n        nxt = slow.next\n        slow.next = prev\n        prev = slow\n        slow = nxt\n    # 3. Compare first & second halves\n    left, right = head, prev\n    while right:\n        if left.val != right.val:\n            return False\n        left = left.next\n        right = right.next\n    return True`,
            java: `public static boolean isPalindrome(ListNode head) {\n    ListNode slow = head, fast = head;\n    while (fast != null && fast.next != null) {\n        slow = slow.next; fast = fast.next.next;\n    }\n    ListNode prev = null;\n    while (slow != null) {\n        ListNode nxt = slow.next;\n        slow.next = prev;\n        prev = slow;\n        slow = nxt;\n    }\n    ListNode left = head, right = prev;\n    while (right != null) {\n        if (left.val != right.val) return false;\n        left = left.next; right = right.next;\n    }\n    return true;\n}`,
            cpp: `bool isPalindrome(ListNode* head) {\n    ListNode* slow = head;\n    ListNode* fast = head;\n    while (fast && fast->next) {\n        slow = slow->next;\n        fast = fast->next->next;\n    }\n    ListNode* prev = nullptr;\n    while (slow) {\n        ListNode* nxt = slow->next;\n        slow->next = prev;\n        prev = slow;\n        slow = nxt;\n    }\n    ListNode* left = head;\n    ListNode* right = prev;\n    while (right) {\n        if (left->val != right->val) return false;\n        left = left->next;\n        right = right->next;\n    }\n    return true;\n}`,
            javascript: `function isPalindrome(head) {\n    let slow = head, fast = head;\n    while (fast && fast.next) {\n        slow = slow.next; fast = fast.next.next;\n    }\n    let prev = null;\n    while (slow) {\n        const nxt = slow.next;\n        slow.next = prev;\n        prev = slow;\n        slow = nxt;\n    }\n    let left = head, right = prev;\n    while (right) {\n        if (left.val !== right.val) return false;\n        left = left.next; right = right.next;\n    }\n    return true;\n}`
          },
          lineExplanations: [
            { lines: [3, 6], text: "Find middle node using slow and fast pointers." },
            { lines: [8, 13], text: "Reverse the second half of the list in-place starting from slow." },
            { lines: [15, 20], text: "Compare front half against reversed tail half. If all match, return true." }
          ],
          animationSteps: [
            { codeLine: 4, description: "Midpoint found at node 2.", state: { type: 'linked-list', nodes: [{ val: 1, addr: '0x1000' }, { val: 2, addr: '0x1020' }, { val: 2, addr: '0x1040' }, { val: 1, addr: '0x1060' }] }, highlights: [1], pointers: { slow: 1 } },
            { codeLine: 12, description: "Reverse second half: [2, 1] becomes [1, 2].", state: { type: 'linked-list', nodes: [{ val: 1, addr: '0x1000' }, { val: 2, addr: '0x1020' }, { val: 1, addr: '0x1060' }, { val: 2, addr: '0x1040' }] }, highlights: [2, 3], pointers: { left: 0, right: 2 } },
            { codeLine: 18, description: "Compare: left(1) == right(1) and left(2) == right(2). Palindrome confirmed!", state: { type: 'linked-list', nodes: [{ val: 1, addr: '0x1000' }, { val: 2, addr: '0x1020' }, { val: 2, addr: '0x1040' }, { val: 1, addr: '0x1060' }] }, highlights: [0, 1, 2, 3], pointers: { matched: 0 } }
          ]
        }
      ],
      commonMistakes: "Converting linked list to an array/list, violating the O(1) auxiliary space constraint.",
      relatedQuestionIds: ['ll-reverse', 'll-middle']
    },

    // -------------------------------------------------------------------------
    // 18. LRU CACHE (LEETCODE 146)
    // -------------------------------------------------------------------------
    {
      id: 'll-lru-cache',
      subtopicId: 'll-advanced',
      title: 'LRU Cache (Doubly Linked List + Hash Map)',
      difficulty: 'Medium',
      leetcode: { number: 146, url: 'https://leetcode.com/problems/lru-cache/' },
      description: 'Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement LRUCache with get(key) and put(key, value) in O(1) average time complexity.',
      constraints: '1 <= capacity <= 3000. 0 <= key, value <= 10^4. At most 2 * 10^5 calls to get and put.',
      examples: [
        { input: 'LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2);', output: '[null, null, null, 1, null, -1]', why: 'put(3,3) evicts key 2 because key 1 was recently accessed via get(1).' }
      ],
      approaches: [
        {
          name: 'Doubly Linked List + Hash Map',
          idea: 'Use a Hash Map for O(1) key-to-node lookups and a Doubly Linked List with head/tail sentinels for O(1) node detachment and moving to most-recent front position.',
          timeComplexity: 'O(1) for both get() and put()',
          spaceComplexity: 'O(capacity) auxiliary memory for stored nodes',
          code: {
            python: `class DNode:\n    def __init__(self, k=0, v=0):\n        self.k, self.v = k, v\n        self.prev = self.next = None\n\nclass LRUCache:\n    def __init__(self, capacity: int):\n        self.cap = capacity\n        self.cache = {}\n        self.head, self.tail = DNode(), DNode()\n        self.head.next, self.tail.prev = self.tail, self.head\n\n    def _remove(self, node):\n        node.prev.next = node.next\n        node.next.prev = node.prev\n\n    def _add(self, node):\n        node.next = self.head.next\n        node.prev = self.head\n        self.head.next.prev = node\n        self.head.next = node\n\n    def get(self, key: int) -> int:\n        if key in self.cache:\n            node = self.cache[key]\n            self._remove(node)\n            self._add(node)\n            return node.v\n        return -1\n\n    def put(self, key: int, value: int) -> None:\n        if key in self.cache:\n            self._remove(self.cache[key])\n        node = DNode(key, value)\n        self._add(node)\n        self.cache[key] = node\n        if len(self.cache) > self.cap:\n            lru = self.tail.prev\n            self._remove(lru)\n            del self.cache[lru.k]`,
            java: `class LRUCache {\n    class DNode { int k, v; DNode prev, next; DNode(int k, int v) { this.k = k; this.v = v; } }\n    private int cap;\n    private Map<Integer, DNode> map = new HashMap<>();\n    private DNode head = new DNode(0, 0), tail = new DNode(0, 0);\n\n    public LRUCache(int capacity) {\n        this.cap = capacity;\n        head.next = tail; tail.prev = head;\n    }\n    private void remove(DNode n) { n.prev.next = n.next; n.next.prev = n.prev; }\n    private void add(DNode n) { n.next = head.next; n.prev = head; head.next.prev = n; head.next = n; }\n\n    public int get(int key) {\n        if (!map.containsKey(key)) return -1;\n        DNode n = map.get(key);\n        remove(n); add(n);\n        return n.v;\n    }\n    public void put(int key, int value) {\n        if (map.containsKey(key)) remove(map.get(key));\n        DNode n = new DNode(key, value);\n        add(n); map.put(key, n);\n        if (map.size() > cap) {\n            DNode lru = tail.prev;\n            remove(lru); map.remove(lru.k);\n        }\n    }\n}`,
            cpp: `struct DNode { int k, v; DNode* prev; DNode* next; DNode(int k, int v) : k(k), v(v), prev(nullptr), next(nullptr) {} };\nclass LRUCache {\n    int cap;\n    unordered_map<int, DNode*> map;\n    DNode* head; DNode* tail;\n    void remove(DNode* n) { n->prev->next = n->next; n->next->prev = n->prev; }\n    void add(DNode* n) { n->next = head->next; n->prev = head; head->next->prev = n; head->next = n; }\npublic:\n    LRUCache(int capacity) : cap(capacity) {\n        head = new DNode(0, 0); tail = new DNode(0, 0);\n        head->next = tail; tail->prev = head;\n    }\n    int get(int key) {\n        if (!map.count(key)) return -1;\n        DNode* n = map[key]; remove(n); add(n); return n->v;\n    }\n    void put(int key, int value) {\n        if (map.count(key)) remove(map[key]);\n        DNode* n = new DNode(key, value);\n        add(n); map[key] = n;\n        if (map.size() > cap) {\n            DNode* lru = tail->prev;\n            remove(lru); map.erase(lru->k); delete lru;\n        }\n    }\n};`,
            javascript: `class LRUCache {\n    constructor(capacity) {\n        this.cap = capacity;\n        this.map = new Map();\n    }\n    get(key) {\n        if (!this.map.has(key)) return -1;\n        const val = this.map.get(key);\n        this.map.delete(key);\n        this.map.set(key, val);\n        return val;\n    }\n    put(key, value) {\n        if (this.map.has(key)) this.map.delete(key);\n        this.map.set(key, value);\n        if (this.map.size > this.cap) {\n            const oldestKey = this.map.keys().next().value;\n            this.map.delete(oldestKey);\n        }\n    }\n}`
          },
          lineExplanations: [
            { lines: [6, 12], text: "Maintain dummy head (most recently used) and dummy tail (least recently used)." },
            { lines: [13, 20], text: "_remove detaches node in O(1); _add splices node right after head in O(1)." },
            { lines: [22, 28], text: "get(key): lookup node in hash map, promote to head, return value in O(1)." },
            { lines: [30, 40], text: "put(key, val): insert/update node, promote to front, and evict tail.prev if capacity exceeded." }
          ],
          animationSteps: [
            { codeLine: 7, description: "Initialize LRU Cache with capacity 2. Head & Tail sentinels linked.", state: { type: 'linked-list', nodes: [{ val: 'HEAD', addr: '0x0000' }, { val: 'TAIL', addr: '0xFFFF' }] }, highlights: [0, 1], pointers: { head: 0, tail: 1 } },
            { codeLine: 35, description: "put(1, 1) and put(2, 2). Cache has [2, 1]. Most recent is 2.", state: { type: 'linked-list', nodes: [{ val: '2:2', addr: '0x1020' }, { val: '1:1', addr: '0x1000' }] }, highlights: [0], pointers: { MRU: 0, LRU: 1 } },
            { codeLine: 26, description: "get(1): Key 1 accessed! Promote key 1 to front. Cache: [1, 2].", state: { type: 'linked-list', nodes: [{ val: '1:1', addr: '0x1000' }, { val: '2:2', addr: '0x1020' }] }, highlights: [0], pointers: { MRU: 0, LRU: 1 } },
            { codeLine: 38, description: "put(3, 3): Capacity 2 exceeded! Evict least recently used key 2. Cache: [3, 1].", state: { type: 'linked-list', nodes: [{ val: '3:3', addr: '0x1040' }, { val: '1:1', addr: '0x1000' }] }, highlights: [0], pointers: { MRU: 0, LRU: 1 } }
          ]
        }
      ],
      commonMistakes: "Using a singly linked list for LRU, which prevents O(1) node deletion because finding the predecessor requires an O(n) walk.",
      relatedQuestionIds: ['ll-reverse', 'll-delete-val']
    }
  ]
};
