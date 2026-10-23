/**
 * SynapseCS Language-Neutral Question Catalog: Linked List
 */
(function(window) {
  'use strict';
  window.DSA_QUESTIONS = window.DSA_QUESTIONS || {};
  window.DSA_QUESTIONS['linked-list'] = {
    id: 'linked-list',
    title: 'Linked List',
    icon: 'ph:code',
    description: "Linear collection of data elements where order is governed by 64-bit pointers in dynamic heap memory rather than contiguous physical placement.",
    subtopics: [{"id":"ll-basics","title":"Basics & Fundamental Operations"},{"id":"ll-traversal","title":"Two Pointers & Traversal Patterns"},{"id":"ll-mutation","title":"Reversal, Splicing & Merge"},{"id":"ll-advanced","title":"Advanced Cycles & System Caches"}],
    questions: [
  {
    "id": "ll-create",
    "subtopicId": "ll-basics",
    "title": "Define Node & Initialize Linked List",
    "difficulty": "Basic",
    "leetcode": null,
    "description": "Define a Node structure containing an integer value and a next pointer. Instantiate a chain of 3 nodes holding values 10, 20, and 30, returning the head pointer.",
    "constraints": "0 <= Number of nodes <= 10^4. Node values between -10^5 and 10^5.",
    "examples": [
      {
        "input": "[10, 20, 30]",
        "output": "10 -> 20 -> 30 -> NULL",
        "why": "A head pointer points to node 10, which references node 20, which references node 30 whose next pointer points to NULL."
      }
    ],
    "approach": {
      "name": "Manual Node Instantiation",
      "idea": "Allocate Node instances on the heap and wire the next reference of each predecessor to the memory address of the successor.",
      "timeComplexity": "O(1) per node creation, O(n) total for n nodes",
      "spaceComplexity": "O(n) auxiliary heap memory for n nodes"
    },
    "commonMistakes": "Forgetting to initialize next to NULL/nullptr in C/C++, causing dangling pointer crashes when traversing.",
    "relatedQuestionIds": [
      "ll-insert-head",
      "ll-traverse"
    ],
    "tracer": "ll-create",
    "sampleInput": "[10, 20, 30]"
  },
  {
    "id": "ll-insert-head",
    "subtopicId": "ll-basics",
    "title": "Insert Node at Beginning (Head)",
    "difficulty": "Basic",
    "leetcode": null,
    "description": "Given the head pointer of a singly linked list and an integer val, insert a new node with value val before the head, returning the new head.",
    "constraints": "List length 0 to 10^4. Node values -10^5 to 10^5.",
    "examples": [
      {
        "input": "head = [20, 30], val = 5",
        "output": "[5, 20, 30]",
        "why": "A new node with value 5 points to the former head 20, becoming the new head."
      }
    ],
    "approach": {
      "name": "Pointer Re-anchoring",
      "idea": "Create the new node, point its next reference to the current head, and re-assign head to the new node.",
      "timeComplexity": "O(1) constant time since only 2 pointer assignments are performed",
      "spaceComplexity": "O(1) auxiliary space beyond the newly allocated node"
    },
    "commonMistakes": "Updating head = new_node before linking new_node.next = head, permanently losing the original list in memory.",
    "relatedQuestionIds": [
      "ll-insert-tail",
      "ll-delete-head"
    ],
    "tracer": "ll-insert-head",
    "sampleInput": "head = [20, 30], val = 5"
  },
  {
    "id": "ll-insert-tail",
    "subtopicId": "ll-basics",
    "title": "Insert Node at End (Tail)",
    "difficulty": "Basic",
    "leetcode": null,
    "description": "Given the head of a linked list and an integer val, traverse to the terminal node and attach a new node with value val.",
    "constraints": "List length 0 to 10^4. Node values -10^5 to 10^5.",
    "examples": [
      {
        "input": "head = [10, 20], val = 30",
        "output": "[10, 20, 30]",
        "why": "Node 20 which previously pointed to NULL now points to new node 30."
      }
    ],
    "approach": {
      "name": "Linear Traversal to Terminal Node",
      "idea": "If head is empty, new node is the head. Otherwise traverse until curr.next is null, then attach curr.next = new_node.",
      "timeComplexity": "O(n) time to walk across all n nodes to locate the tail",
      "spaceComplexity": "O(1) auxiliary space"
    },
    "commonMistakes": "Writing while (curr) instead of while (curr.next), causing curr to advance to NULL and triggering null pointer dereference on curr.next.",
    "relatedQuestionIds": [
      "ll-insert-head",
      "ll-insert-kth"
    ],
    "tracer": "ll-insert-tail",
    "sampleInput": "head = [10, 20], val = 30"
  },
  {
    "id": "ll-insert-kth",
    "subtopicId": "ll-basics",
    "title": "Insert Node at Given Index",
    "difficulty": "Easy",
    "leetcode": null,
    "description": "Insert a new node with value val at zero-indexed position index. If index is 0, insert at head.",
    "constraints": "0 <= index <= list size <= 10^4.",
    "examples": [
      {
        "input": "head = [10, 30], index = 1, val = 20",
        "output": "[10, 20, 30]",
        "why": "Node 20 is spliced between index 0 (node 10) and index 1 (node 30)."
      }
    ],
    "approach": {
      "name": "Pointer Splice Ordering",
      "idea": "Advance index-1 times to the predecessor node. Set newNode.next = predecessor.next, then predecessor.next = newNode.",
      "timeComplexity": "O(k) where k is the target insertion index",
      "spaceComplexity": "O(1) auxiliary space"
    },
    "commonMistakes": "Setting curr.next = node before node.next = curr.next, which overwrites the link to the remainder of the list and drops it.",
    "relatedQuestionIds": [
      "ll-insert-head",
      "ll-insert-tail"
    ],
    "tracer": "ll-insert-kth",
    "sampleInput": "head = [10, 30], index = 1, val = 20"
  },
  {
    "id": "ll-delete-head",
    "subtopicId": "ll-basics",
    "title": "Delete Node from Beginning (Head)",
    "difficulty": "Basic",
    "leetcode": null,
    "description": "Remove the first node from a linked list and return the new head pointer.",
    "constraints": "List length 0 to 10^4.",
    "examples": [
      {
        "input": "head = [10, 20, 30]",
        "output": "[20, 30]",
        "why": "The head reference is advanced from node 10 to node 20."
      }
    ],
    "approach": {
      "name": "Head Pointer Advance",
      "idea": "Check if head is null. If not, capture head.next and advance head.",
      "timeComplexity": "O(1) constant time operation",
      "spaceComplexity": "O(1) space"
    },
    "commonMistakes": "Failing to check if head is already null, triggering null pointer exception.",
    "relatedQuestionIds": [
      "ll-insert-head",
      "ll-delete-tail"
    ],
    "tracer": "ll-delete-head",
    "sampleInput": "head = [10, 20, 30]"
  },
  {
    "id": "ll-delete-tail",
    "subtopicId": "ll-basics",
    "title": "Delete Node from End (Tail)",
    "difficulty": "Basic",
    "leetcode": null,
    "description": "Remove the terminal node from a linked list and return the head pointer.",
    "constraints": "List length 0 to 10^4.",
    "examples": [
      {
        "input": "head = [10, 20, 30]",
        "output": "[10, 20]",
        "why": "Node 20 next pointer is re-assigned to NULL, severing node 30."
      }
    ],
    "approach": {
      "name": "Second-to-Last Pointer Traversal",
      "idea": "Traverse until curr.next.next is null. Then set curr.next = null.",
      "timeComplexity": "O(n) time to walk to the penultimate node",
      "spaceComplexity": "O(1) auxiliary space"
    },
    "commonMistakes": "Traversing until curr.next is null instead of curr.next.next, leaving no way to update the previous node's link in a singly linked list.",
    "relatedQuestionIds": [
      "ll-delete-head",
      "ll-delete-val"
    ],
    "tracer": "ll-delete-tail",
    "sampleInput": "head = [10, 20, 30]"
  },
  {
    "id": "ll-delete-val",
    "subtopicId": "ll-basics",
    "title": "Delete Node by Target Value",
    "difficulty": "Easy",
    "leetcode": {
      "number": 203,
      "url": "https://leetcode.com/problems/remove-linked-list-elements/"
    },
    "description": "Given the head of a linked list and an integer val, remove all nodes of the linked list that have Node.val == val.",
    "constraints": "0 <= list length <= 10^4. Node values -50 <= val <= 50.",
    "examples": [
      {
        "input": "head = [1, 2, 6, 3, 4, 5, 6], val = 6",
        "output": "[1, 2, 3, 4, 5]",
        "why": "Both instances of node 6 are bypassed and removed."
      }
    ],
    "approach": {
      "name": "Sentinel / Dummy Head Pattern",
      "idea": "Use a sentinel dummy node before head so deleting the head node is identical to deleting an internal node.",
      "timeComplexity": "O(n) single pass through all nodes",
      "spaceComplexity": "O(1) auxiliary space using one sentinel node"
    },
    "commonMistakes": "Advancing curr = curr.next even when deleting a node, which skips checking consecutive target values.",
    "relatedQuestionIds": [
      "ll-delete-head",
      "ll-delete-tail"
    ],
    "tracer": "ll-delete-val",
    "sampleInput": "head = [1, 2, 6, 3, 4, 5, 6], val = 6"
  },
  {
    "id": "ll-search",
    "subtopicId": "ll-basics",
    "title": "Search for an Element in Linked List",
    "difficulty": "Basic",
    "leetcode": null,
    "description": "Search for a target value in a linked list. Return true and its zero-indexed position if present, or -1 if absent.",
    "constraints": "0 <= list length <= 10^4.",
    "examples": [
      {
        "input": "head = [10, 20, 30, 40], target = 30",
        "output": "2",
        "why": "Node 30 is at index 2 (0-indexed)."
      }
    ],
    "approach": {
      "name": "Linear Pointer Search",
      "idea": "Walk node-by-node while incrementing an index counter until a value match occurs or null is reached.",
      "timeComplexity": "O(n) worst-case time to inspect each node sequentially",
      "spaceComplexity": "O(1) memory"
    },
    "commonMistakes": "Expecting O(1) random binary search access, which is impossible without contiguous memory array indexing.",
    "relatedQuestionIds": [
      "ll-traverse",
      "ll-update"
    ],
    "tracer": "ll-search",
    "sampleInput": "head = [10, 20, 30, 40], target = 30"
  },
  {
    "id": "ll-traverse",
    "subtopicId": "ll-basics",
    "title": "Traverse and Collect Values",
    "difficulty": "Basic",
    "leetcode": null,
    "description": "Traverse the linked list and collect all node values into an array/list sequence.",
    "constraints": "0 <= list length <= 10^4.",
    "examples": [
      {
        "input": "head = [4, 8, 15, 16]",
        "output": "[4, 8, 15, 16]",
        "why": "Nodes visited from head to tail in order."
      }
    ],
    "approach": {
      "name": "Pointer Walk",
      "idea": "Initialize output array, traverse from head to NULL appending each node value.",
      "timeComplexity": "O(n) time",
      "spaceComplexity": "O(n) to store the result array"
    },
    "commonMistakes": "Modifying the original head variable during traversal instead of using a temporary cursor pointer curr.",
    "relatedQuestionIds": [
      "ll-search",
      "ll-size"
    ],
    "tracer": "ll-traverse",
    "sampleInput": "head = [4, 8, 15, 16]"
  },
  {
    "id": "ll-update",
    "subtopicId": "ll-basics",
    "title": "Update Node Value at Index",
    "difficulty": "Basic",
    "leetcode": null,
    "description": "Update the value of the node at given index to newVal. Return true if successful, false if index is out of bounds.",
    "constraints": "0 <= list length <= 10^4.",
    "examples": [
      {
        "input": "head = [10, 20, 30], index = 1, newVal = 99",
        "output": "[10, 99, 30]",
        "why": "Node at index 1 mutated from 20 to 99."
      }
    ],
    "approach": {
      "name": "Direct In-Place Mutation",
      "idea": "Advance to the node at position index and update its val field.",
      "timeComplexity": "O(k) where k is the index",
      "spaceComplexity": "O(1)"
    },
    "commonMistakes": "Assuming O(1) index write like array[i] = val. Linked list requires sequential O(k) pointer traversal.",
    "relatedQuestionIds": [
      "ll-search",
      "ll-insert-kth"
    ],
    "tracer": "ll-update",
    "sampleInput": "head = [10, 20, 30], index = 1, newVal = 99"
  },
  {
    "id": "ll-size",
    "subtopicId": "ll-basics",
    "title": "Calculate Length & Check If Empty",
    "difficulty": "Basic",
    "leetcode": null,
    "description": "Compute the total number of nodes in a singly linked list and return whether the list is empty.",
    "constraints": "0 <= list length <= 10^5.",
    "examples": [
      {
        "input": "head = [10, 20, 30]",
        "output": "size = 3, isEmpty = false",
        "why": "3 nodes traversed until reaching NULL."
      }
    ],
    "approach": {
      "name": "Pointer Count Loop",
      "idea": "Count iterations while advancing curr until curr becomes null.",
      "timeComplexity": "O(n) time",
      "spaceComplexity": "O(1) memory"
    },
    "commonMistakes": "Trying to call len(head) directly without traversing, as linked lists do not store implicit length like dynamic arrays.",
    "relatedQuestionIds": [
      "ll-traverse"
    ],
    "tracer": "ll-size",
    "sampleInput": "head = [10, 20, 30]"
  },
  {
    "id": "ll-reverse",
    "subtopicId": "ll-mutation",
    "title": "Reverse Linked List",
    "difficulty": "Easy",
    "leetcode": {
      "number": 206,
      "url": "https://leetcode.com/problems/reverse-linked-list/"
    },
    "description": "Given the head of a singly linked list, reverse the list, and return the reversed list.",
    "constraints": "The number of nodes in the list is the range [0, 5000]. -5000 <= Node.val <= 5000.",
    "examples": [
      {
        "input": "head = [1, 2, 3, 4, 5]",
        "output": "[5, 4, 3, 2, 1]",
        "why": "All directional pointer arrows inverted."
      }
    ],
    "approach": {
      "name": "Three-Pointer Iterative Reversal",
      "idea": "Maintain prev (initially null), curr (at head), and next_temp. In each step, capture next node, flip curr.next = prev, advance prev to curr, and advance curr to next_temp.",
      "timeComplexity": "O(n) time for a single linear pass",
      "spaceComplexity": "O(1) auxiliary space (reverses pointers in place without allocating new nodes)"
    },
    "commonMistakes": "Flipping curr.next before saving next_temp, stranding the rest of the list and causing an infinite loop or premature termination.",
    "relatedQuestionIds": [
      "ll-palindrome",
      "ll-middle"
    ],
    "tracer": "ll-reverse",
    "sampleInput": "head = [1, 2, 3, 4, 5]"
  },
  {
    "id": "ll-middle",
    "subtopicId": "ll-traversal",
    "title": "Middle of the Linked List",
    "difficulty": "Easy",
    "leetcode": {
      "number": 876,
      "url": "https://leetcode.com/problems/middle-of-the-linked-list/"
    },
    "description": "Given the head of a singly linked list, return the middle node. If there are two middle nodes, return the second middle node.",
    "constraints": "The number of nodes in the list is in the range [1, 100]. 1 <= Node.val <= 100.",
    "examples": [
      {
        "input": "head = [1, 2, 3, 4, 5]",
        "output": "[3, 4, 5]",
        "why": "The middle node is 3."
      },
      {
        "input": "head = [1, 2, 3, 4, 5, 6]",
        "output": "[4, 5, 6]",
        "why": "Even count, return second middle node 4."
      }
    ],
    "approach": {
      "name": "Fast & Slow Two-Pointer (Tortoise and Hare)",
      "idea": "Advance slow by 1 step and fast by 2 steps. When fast reaches the end (or null), slow is standing precisely on the middle node.",
      "timeComplexity": "O(n) time for a single pass (fast takes n/2 steps)",
      "spaceComplexity": "O(1) auxiliary space"
    },
    "commonMistakes": "Writing while (fast.next) without checking while (fast and fast.next), causing null pointer errors when list has an even number of nodes.",
    "relatedQuestionIds": [
      "ll-cycle",
      "ll-palindrome"
    ],
    "tracer": "ll-middle",
    "sampleInput": "head = [1, 2, 3, 4, 5]"
  },
  {
    "id": "ll-cycle",
    "subtopicId": "ll-advanced",
    "title": "Linked List Cycle Detection",
    "difficulty": "Easy",
    "leetcode": {
      "number": 141,
      "url": "https://leetcode.com/problems/linked-list-cycle/"
    },
    "description": "Given head, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle if some node can be reached again by continuously following next.",
    "constraints": "Number of nodes in the list is [0, 10^4]. -10^5 <= Node.val <= 10^5.",
    "examples": [
      {
        "input": "head = [3, 2, 0, -4], pos = 1 (tail connects to node 1)",
        "output": "true",
        "why": "Tail connects to node index 1, creating an endless loop."
      }
    ],
    "approach": {
      "name": "Floyd's Tortoise and Hare Cycle Finding",
      "idea": "Advance slow by 1 and fast by 2. If a cycle exists, fast will lap and collide with slow inside the loop. If fast hits NULL, no cycle exists.",
      "timeComplexity": "O(n) time (in a loop of length K, fast catches slow in <= K steps)",
      "spaceComplexity": "O(1) memory (zero extra hash sets required)"
    },
    "commonMistakes": "Comparing node values (slow.val == fast.val) instead of reference memory addresses (slow == fast). Different nodes can have identical values.",
    "relatedQuestionIds": [
      "ll-middle",
      "ll-reverse"
    ],
    "tracer": "ll-cycle",
    "sampleInput": "head = [3, 2, 0, -4], pos = 1 (tail connects to node 1)"
  },
  {
    "id": "ll-merge",
    "subtopicId": "ll-mutation",
    "title": "Merge Two Sorted Lists",
    "difficulty": "Easy",
    "leetcode": {
      "number": 21,
      "url": "https://leetcode.com/problems/merge-two-sorted-lists/"
    },
    "description": "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list by splicing together existing nodes.",
    "constraints": "Number of nodes in both lists is [0, 50]. -100 <= Node.val <= 100.",
    "examples": [
      {
        "input": "list1 = [1, 2, 4], list2 = [1, 3, 4]",
        "output": "[1, 1, 2, 3, 4, 4]",
        "why": "Nodes spliced in non-decreasing order."
      }
    ],
    "approach": {
      "name": "Dummy Sentinel Node & Iterative Splice",
      "idea": "Compare the heads of list1 and list2. Attach the smaller node to tail.next, advance that list pointer and tail. Attach remainder when one list empties.",
      "timeComplexity": "O(n + m) time where n and m are the lengths of the two lists",
      "spaceComplexity": "O(1) space (splices original nodes in place)"
    },
    "commonMistakes": "Allocating brand new nodes instead of re-wiring existing next pointers, wasting O(n+m) unnecessary heap memory.",
    "relatedQuestionIds": [
      "ll-reverse",
      "ll-insert-kth"
    ],
    "tracer": "ll-merge",
    "sampleInput": "list1 = [1, 2, 4], list2 = [1, 3, 4]"
  },
  {
    "id": "ll-remove-nth-end",
    "subtopicId": "ll-traversal",
    "title": "Remove Nth Node From End of List",
    "difficulty": "Medium",
    "leetcode": {
      "number": 19,
      "url": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"
    },
    "description": "Given the head of a linked list, remove the nth node from the end of the list and return its head in a single pass.",
    "constraints": "List length is [1, 30]. 0 <= Node.val <= 100. 1 <= n <= list size.",
    "examples": [
      {
        "input": "head = [1, 2, 3, 4, 5], n = 2",
        "output": "[1, 2, 3, 5]",
        "why": "The 2nd node from the end is 4. Removing it yields [1, 2, 3, 5]."
      }
    ],
    "approach": {
      "name": "Two-Pointer Sliding Window Gap (Fast & Slow)",
      "idea": "Place dummy before head. Advance fast pointer n+1 steps ahead. Then move both fast and slow together until fast is null. slow will stop directly on the predecessor of the node to remove.",
      "timeComplexity": "O(L) time where L is the total length of the list, achieved in a single pass",
      "spaceComplexity": "O(1) memory"
    },
    "commonMistakes": "Running two passes (first to count total length L, second to reach L-n). The two-pointer gap achieves this in a single pass.",
    "relatedQuestionIds": [
      "ll-middle",
      "ll-delete-val"
    ],
    "tracer": "ll-remove-nth-end",
    "sampleInput": "head = [1, 2, 3, 4, 5], n = 2"
  },
  {
    "id": "ll-palindrome",
    "subtopicId": "ll-traversal",
    "title": "Palindrome Linked List",
    "difficulty": "Easy",
    "leetcode": {
      "number": 234,
      "url": "https://leetcode.com/problems/palindrome-linked-list/"
    },
    "description": "Given the head of a singly linked list, return true if it is a palindrome or false otherwise, in O(n) time and O(1) space.",
    "constraints": "The number of nodes in the list is in the range [1, 10^5]. 0 <= Node.val <= 9.",
    "examples": [
      {
        "input": "head = [1, 2, 2, 1]",
        "output": "true",
        "why": "Reads 1 -> 2 -> 2 -> 1 in both directions."
      }
    ],
    "approach": {
      "name": "Find Midpoint + Reverse Second Half + Compare",
      "idea": "Use slow/fast pointers to find midpoint. Reverse the second half in place. Walk from head and reversed second half comparing values. Restore list.",
      "timeComplexity": "O(n) time across 3 half-passes",
      "spaceComplexity": "O(1) auxiliary space (no array or stack)"
    },
    "commonMistakes": "Converting linked list to an array/list, violating the O(1) auxiliary space constraint.",
    "relatedQuestionIds": [
      "ll-reverse",
      "ll-middle"
    ],
    "tracer": "ll-palindrome",
    "sampleInput": "head = [1, 2, 2, 1]"
  },
  {
    "id": "ll-lru-cache",
    "subtopicId": "ll-advanced",
    "title": "LRU Cache (Doubly Linked List + Hash Map)",
    "difficulty": "Medium",
    "leetcode": {
      "number": 146,
      "url": "https://leetcode.com/problems/lru-cache/"
    },
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement LRUCache with get(key) and put(key, value) in O(1) average time complexity.",
    "constraints": "1 <= capacity <= 3000. 0 <= key, value <= 10^4. At most 2 * 10^5 calls to get and put.",
    "examples": [
      {
        "input": "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2);",
        "output": "[null, null, null, 1, null, -1]",
        "why": "put(3,3) evicts key 2 because key 1 was recently accessed via get(1)."
      }
    ],
    "approach": {
      "name": "Doubly Linked List + Hash Map",
      "idea": "Use a Hash Map for O(1) key-to-node lookups and a Doubly Linked List with head/tail sentinels for O(1) node detachment and moving to most-recent front position.",
      "timeComplexity": "O(1) for both get() and put()",
      "spaceComplexity": "O(capacity) auxiliary memory for stored nodes"
    },
    "commonMistakes": "Using a singly linked list for LRU, which prevents O(1) node deletion because finding the predecessor requires an O(n) walk.",
    "relatedQuestionIds": [
      "ll-reverse",
      "ll-delete-val"
    ],
    "tracer": "ll-lru-cache",
    "sampleInput": "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2);"
  }
]
  };
})(typeof window !== 'undefined' ? window : global);
