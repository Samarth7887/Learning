/**
 * SynapseCS Language-Specific Implementation: PYTHON - linked-list
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['python'] = window.DSA_LANG_CODE['python'] || {};
  window.DSA_LANG_CODE['python']['linked-list'] = [
  {
    "id": "ll-create",
    "code": [
      {
        "text": "class ListNode:",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    def __init__(self, val=0, next=None):",
        "tag": "def",
        "lineNum": 2
      },
      {
        "text": "        self.val = val",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "        self.next = next",
        "tag": "pointer",
        "lineNum": 4
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "def create_list():",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "    head = ListNode(10)",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    second = ListNode(20)",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    third = ListNode(30)",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    head.next = second",
        "tag": "pointer",
        "lineNum": 10
      },
      {
        "text": "    second.next = third",
        "tag": "pointer",
        "lineNum": 11
      },
      {
        "text": "    return head",
        "tag": "return",
        "lineNum": 12
      }
    ],
    "rawCode": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef create_list():\n    head = ListNode(10)\n    second = ListNode(20)\n    third = ListNode(30)\n    head.next = second\n    second.next = third\n    return head",
    "explanations": {
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in python.",
      "exec": "Executes tagged statement [exec] in python.",
      "pointer": "Executes tagged statement [pointer] in python."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "ll-insert-head",
    "code": [
      {
        "text": "def insert_at_head(head, val):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    new_node = ListNode(val)",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    new_node.next = head",
        "tag": "pointer",
        "lineNum": 3
      },
      {
        "text": "    return new_node",
        "tag": "return",
        "lineNum": 4
      }
    ],
    "rawCode": "def insert_at_head(head, val):\n    new_node = ListNode(val)\n    new_node.next = head\n    return new_node",
    "explanations": {
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in python.",
      "exec": "Executes tagged statement [exec] in python.",
      "pointer": "Executes tagged statement [pointer] in python."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "ll-insert-tail",
    "code": [
      {
        "text": "def insert_at_tail(head, val):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    new_node = ListNode(val)",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    if not head:",
        "tag": "branch",
        "lineNum": 3
      },
      {
        "text": "        return new_node",
        "tag": "return",
        "lineNum": 4
      },
      {
        "text": "    curr = head",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "    while curr.next:",
        "tag": "loop",
        "lineNum": 6
      },
      {
        "text": "        curr = curr.next",
        "tag": "pointer",
        "lineNum": 7
      },
      {
        "text": "    curr.next = new_node",
        "tag": "pointer",
        "lineNum": 8
      },
      {
        "text": "    return head",
        "tag": "return",
        "lineNum": 9
      }
    ],
    "rawCode": "def insert_at_tail(head, val):\n    new_node = ListNode(val)\n    if not head:\n        return new_node\n    curr = head\n    while curr.next:\n        curr = curr.next\n    curr.next = new_node\n    return head",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in python.",
      "exec": "Executes tagged statement [exec] in python.",
      "branch": "Executes tagged statement [branch] in python.",
      "pointer": "Executes tagged statement [pointer] in python."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "ll-insert-kth",
    "code": [
      {
        "text": "def insert_at_k(head, index, val):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    if index == 0:",
        "tag": "branch",
        "lineNum": 2
      },
      {
        "text": "        node = ListNode(val)",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "        node.next = head",
        "tag": "pointer",
        "lineNum": 4
      },
      {
        "text": "        return node",
        "tag": "return",
        "lineNum": 5
      },
      {
        "text": "    curr = head",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "    for _ in range(index - 1):",
        "tag": "loop",
        "lineNum": 7
      },
      {
        "text": "        if not curr: return head",
        "tag": "branch",
        "lineNum": 8
      },
      {
        "text": "        curr = curr.next",
        "tag": "pointer",
        "lineNum": 9
      },
      {
        "text": "    node = ListNode(val)",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    node.next = curr.next",
        "tag": "pointer",
        "lineNum": 11
      },
      {
        "text": "    curr.next = node",
        "tag": "pointer",
        "lineNum": 12
      },
      {
        "text": "    return head",
        "tag": "return",
        "lineNum": 13
      }
    ],
    "rawCode": "def insert_at_k(head, index, val):\n    if index == 0:\n        node = ListNode(val)\n        node.next = head\n        return node\n    curr = head\n    for _ in range(index - 1):\n        if not curr: return head\n        curr = curr.next\n    node = ListNode(val)\n    node.next = curr.next\n    curr.next = node\n    return head",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in python.",
      "branch": "Executes tagged statement [branch] in python.",
      "exec": "Executes tagged statement [exec] in python.",
      "pointer": "Executes tagged statement [pointer] in python."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "ll-delete-head",
    "code": [
      {
        "text": "def delete_head(head):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    if not head:",
        "tag": "branch",
        "lineNum": 2
      },
      {
        "text": "        return None",
        "tag": "return",
        "lineNum": 3
      },
      {
        "text": "    return head.next",
        "tag": "return",
        "lineNum": 4
      }
    ],
    "rawCode": "def delete_head(head):\n    if not head:\n        return None\n    return head.next",
    "explanations": {
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in python.",
      "branch": "Executes tagged statement [branch] in python."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "ll-delete-tail",
    "code": [
      {
        "text": "def delete_tail(head):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    if not head or not head.next:",
        "tag": "branch",
        "lineNum": 2
      },
      {
        "text": "        return None",
        "tag": "return",
        "lineNum": 3
      },
      {
        "text": "    curr = head",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    while curr.next.next:",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "        curr = curr.next",
        "tag": "pointer",
        "lineNum": 6
      },
      {
        "text": "    curr.next = None",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "    return head",
        "tag": "return",
        "lineNum": 8
      }
    ],
    "rawCode": "def delete_tail(head):\n    if not head or not head.next:\n        return None\n    curr = head\n    while curr.next.next:\n        curr = curr.next\n    curr.next = None\n    return head",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in python.",
      "branch": "Executes tagged statement [branch] in python.",
      "exec": "Executes tagged statement [exec] in python.",
      "pointer": "Executes tagged statement [pointer] in python."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "ll-delete-val",
    "code": [
      {
        "text": "def remove_elements(head, val):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    dummy = ListNode(0, head)",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    curr = dummy",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    while curr.next:",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        if curr.next.val == val:",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "            curr.next = curr.next.next",
        "tag": "pointer",
        "lineNum": 6
      },
      {
        "text": "        else:",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "            curr = curr.next",
        "tag": "pointer",
        "lineNum": 8
      },
      {
        "text": "    return dummy.next",
        "tag": "return",
        "lineNum": 9
      }
    ],
    "rawCode": "def remove_elements(head, val):\n    dummy = ListNode(0, head)\n    curr = dummy\n    while curr.next:\n        if curr.next.val == val:\n            curr.next = curr.next.next\n        else:\n            curr = curr.next\n    return dummy.next",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in python.",
      "exec": "Executes tagged statement [exec] in python.",
      "branch": "Executes tagged statement [branch] in python.",
      "pointer": "Executes tagged statement [pointer] in python."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "ll-search",
    "code": [
      {
        "text": "def search_list(head, target):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    curr = head",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    idx = 0",
        "tag": "init",
        "lineNum": 3
      },
      {
        "text": "    while curr:",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        if curr.val == target:",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "            return idx",
        "tag": "return",
        "lineNum": 6
      },
      {
        "text": "        curr = curr.next",
        "tag": "pointer",
        "lineNum": 7
      },
      {
        "text": "        idx += 1",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    return -1",
        "tag": "return",
        "lineNum": 9
      }
    ],
    "rawCode": "def search_list(head, target):\n    curr = head\n    idx = 0\n    while curr:\n        if curr.val == target:\n            return idx\n        curr = curr.next\n        idx += 1\n    return -1",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in python.",
      "exec": "Executes tagged statement [exec] in python.",
      "branch": "Executes tagged statement [branch] in python.",
      "pointer": "Executes tagged statement [pointer] in python."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "ll-traverse",
    "code": [
      {
        "text": "def traverse(head):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    res = []",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    curr = head",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    while curr:",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        res.append(curr.val)",
        "tag": "mutate",
        "lineNum": 5
      },
      {
        "text": "        curr = curr.next",
        "tag": "pointer",
        "lineNum": 6
      },
      {
        "text": "    return res",
        "tag": "return",
        "lineNum": 7
      }
    ],
    "rawCode": "def traverse(head):\n    res = []\n    curr = head\n    while curr:\n        res.append(curr.val)\n        curr = curr.next\n    return res",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in python.",
      "exec": "Executes tagged statement [exec] in python.",
      "mutate": "Executes tagged statement [mutate] in python.",
      "pointer": "Executes tagged statement [pointer] in python."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "ll-update",
    "code": [
      {
        "text": "def update_val(head, index, new_val):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    curr = head",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    for _ in range(index):",
        "tag": "loop",
        "lineNum": 3
      },
      {
        "text": "        if not curr: return False",
        "tag": "branch",
        "lineNum": 4
      },
      {
        "text": "        curr = curr.next",
        "tag": "pointer",
        "lineNum": 5
      },
      {
        "text": "    if not curr: return False",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "    curr.val = new_val",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "    return True",
        "tag": "return",
        "lineNum": 8
      }
    ],
    "rawCode": "def update_val(head, index, new_val):\n    curr = head\n    for _ in range(index):\n        if not curr: return False\n        curr = curr.next\n    if not curr: return False\n    curr.val = new_val\n    return True",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in python.",
      "exec": "Executes tagged statement [exec] in python.",
      "branch": "Executes tagged statement [branch] in python.",
      "pointer": "Executes tagged statement [pointer] in python."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "ll-size",
    "code": [
      {
        "text": "def get_size(head):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    count = 0",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    curr = head",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    while curr:",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        count += 1",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "        curr = curr.next",
        "tag": "pointer",
        "lineNum": 6
      },
      {
        "text": "    return count, count == 0",
        "tag": "return",
        "lineNum": 7
      }
    ],
    "rawCode": "def get_size(head):\n    count = 0\n    curr = head\n    while curr:\n        count += 1\n        curr = curr.next\n    return count, count == 0",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in python.",
      "exec": "Executes tagged statement [exec] in python.",
      "pointer": "Executes tagged statement [pointer] in python."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "ll-reverse",
    "code": [
      {
        "text": "def reverse_list(head):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    prev = None",
        "tag": "init",
        "lineNum": 2
      },
      {
        "text": "    curr = head",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    while curr:",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        next_temp = curr.next",
        "tag": "pointer",
        "lineNum": 5
      },
      {
        "text": "        curr.next = prev",
        "tag": "pointer",
        "lineNum": 6
      },
      {
        "text": "        prev = curr",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "        curr = next_temp",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "    return prev",
        "tag": "return",
        "lineNum": 9
      }
    ],
    "rawCode": "def reverse_list(head):\n    prev = None\n    curr = head\n    while curr:\n        next_temp = curr.next\n        curr.next = prev\n        prev = curr\n        curr = next_temp\n    return prev",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in python.",
      "exec": "Executes tagged statement [exec] in python.",
      "pointer": "Executes tagged statement [pointer] in python."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "ll-middle",
    "code": [
      {
        "text": "def middle_node(head):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    slow = head",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    fast = head",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    while fast and fast.next:",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        slow = slow.next",
        "tag": "pointer",
        "lineNum": 5
      },
      {
        "text": "        fast = fast.next.next",
        "tag": "pointer",
        "lineNum": 6
      },
      {
        "text": "    return slow",
        "tag": "return",
        "lineNum": 7
      }
    ],
    "rawCode": "def middle_node(head):\n    slow = head\n    fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n    return slow",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in python.",
      "exec": "Executes tagged statement [exec] in python.",
      "pointer": "Executes tagged statement [pointer] in python."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "ll-cycle",
    "code": [
      {
        "text": "def has_cycle(head):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    slow = head",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    fast = head",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    while fast and fast.next:",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        slow = slow.next",
        "tag": "pointer",
        "lineNum": 5
      },
      {
        "text": "        fast = fast.next.next",
        "tag": "pointer",
        "lineNum": 6
      },
      {
        "text": "        if slow == fast:",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "            return True",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "    return False",
        "tag": "return",
        "lineNum": 9
      }
    ],
    "rawCode": "def has_cycle(head):\n    slow = head\n    fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        if slow == fast:\n            return True\n    return False",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in python.",
      "exec": "Executes tagged statement [exec] in python.",
      "pointer": "Executes tagged statement [pointer] in python.",
      "branch": "Executes tagged statement [branch] in python."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "ll-merge",
    "code": [
      {
        "text": "def merge_two_lists(l1, l2):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    dummy = ListNode(0)",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    tail = dummy",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    while l1 and l2:",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        if l1.val <= l2.val:",
        "tag": "branch",
        "lineNum": 5
      },
      {
        "text": "            tail.next = l1",
        "tag": "pointer",
        "lineNum": 6
      },
      {
        "text": "            l1 = l1.next",
        "tag": "pointer",
        "lineNum": 7
      },
      {
        "text": "        else:",
        "tag": "branch",
        "lineNum": 8
      },
      {
        "text": "            tail.next = l2",
        "tag": "pointer",
        "lineNum": 9
      },
      {
        "text": "            l2 = l2.next",
        "tag": "pointer",
        "lineNum": 10
      },
      {
        "text": "        tail = tail.next",
        "tag": "pointer",
        "lineNum": 11
      },
      {
        "text": "    tail.next = l1 if l1 else l2",
        "tag": "pointer",
        "lineNum": 12
      },
      {
        "text": "    return dummy.next",
        "tag": "return",
        "lineNum": 13
      }
    ],
    "rawCode": "def merge_two_lists(l1, l2):\n    dummy = ListNode(0)\n    tail = dummy\n    while l1 and l2:\n        if l1.val <= l2.val:\n            tail.next = l1\n            l1 = l1.next\n        else:\n            tail.next = l2\n            l2 = l2.next\n        tail = tail.next\n    tail.next = l1 if l1 else l2\n    return dummy.next",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in python.",
      "exec": "Executes tagged statement [exec] in python.",
      "branch": "Executes tagged statement [branch] in python.",
      "pointer": "Executes tagged statement [pointer] in python."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "ll-remove-nth-end",
    "code": [
      {
        "text": "def remove_nth_from_end(head, n):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    dummy = ListNode(0, head)",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "    fast = dummy",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    slow = dummy",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "    for _ in range(n + 1):",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "        fast = fast.next",
        "tag": "pointer",
        "lineNum": 6
      },
      {
        "text": "    while fast:",
        "tag": "loop",
        "lineNum": 7
      },
      {
        "text": "        fast = fast.next",
        "tag": "pointer",
        "lineNum": 8
      },
      {
        "text": "        slow = slow.next",
        "tag": "pointer",
        "lineNum": 9
      },
      {
        "text": "    slow.next = slow.next.next",
        "tag": "pointer",
        "lineNum": 10
      },
      {
        "text": "    return dummy.next",
        "tag": "return",
        "lineNum": 11
      }
    ],
    "rawCode": "def remove_nth_from_end(head, n):\n    dummy = ListNode(0, head)\n    fast = dummy\n    slow = dummy\n    for _ in range(n + 1):\n        fast = fast.next\n    while fast:\n        fast = fast.next\n        slow = slow.next\n    slow.next = slow.next.next\n    return dummy.next",
    "explanations": {
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in python.",
      "exec": "Executes tagged statement [exec] in python.",
      "pointer": "Executes tagged statement [pointer] in python."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "ll-palindrome",
    "code": [
      {
        "text": "def is_palindrome(head):",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    # 1. Find midpoint",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "    slow = fast = head",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "    while fast and fast.next:",
        "tag": "loop",
        "lineNum": 4
      },
      {
        "text": "        slow = slow.next",
        "tag": "pointer",
        "lineNum": 5
      },
      {
        "text": "        fast = fast.next.next",
        "tag": "pointer",
        "lineNum": 6
      },
      {
        "text": "    # 2. Reverse second half",
        "tag": "comment",
        "lineNum": 7
      },
      {
        "text": "    prev = None",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "    while slow:",
        "tag": "loop",
        "lineNum": 9
      },
      {
        "text": "        nxt = slow.next",
        "tag": "pointer",
        "lineNum": 10
      },
      {
        "text": "        slow.next = prev",
        "tag": "pointer",
        "lineNum": 11
      },
      {
        "text": "        prev = slow",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "        slow = nxt",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    # 3. Compare first & second halves",
        "tag": "comment",
        "lineNum": 14
      },
      {
        "text": "    left, right = head, prev",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    while right:",
        "tag": "loop",
        "lineNum": 16
      },
      {
        "text": "        if left.val != right.val:",
        "tag": "branch",
        "lineNum": 17
      },
      {
        "text": "            return False",
        "tag": "return",
        "lineNum": 18
      },
      {
        "text": "        left = left.next",
        "tag": "pointer",
        "lineNum": 19
      },
      {
        "text": "        right = right.next",
        "tag": "pointer",
        "lineNum": 20
      },
      {
        "text": "    return True",
        "tag": "return",
        "lineNum": 21
      }
    ],
    "rawCode": "def is_palindrome(head):\n    # 1. Find midpoint\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n    # 2. Reverse second half\n    prev = None\n    while slow:\n        nxt = slow.next\n        slow.next = prev\n        prev = slow\n        slow = nxt\n    # 3. Compare first & second halves\n    left, right = head, prev\n    while right:\n        if left.val != right.val:\n            return False\n        left = left.next\n        right = right.next\n    return True",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "loop": "Loop across elements or until condition terminates.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in python.",
      "comment": "Executes tagged statement [comment] in python.",
      "exec": "Executes tagged statement [exec] in python.",
      "pointer": "Executes tagged statement [pointer] in python.",
      "branch": "Executes tagged statement [branch] in python."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  },
  {
    "id": "ll-lru-cache",
    "code": [
      {
        "text": "class DNode:",
        "tag": "def",
        "lineNum": 1
      },
      {
        "text": "    def __init__(self, k=0, v=0):",
        "tag": "def",
        "lineNum": 2
      },
      {
        "text": "        self.k, self.v = k, v",
        "tag": "exec",
        "lineNum": 3
      },
      {
        "text": "        self.prev = self.next = None",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "class LRUCache:",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "    def __init__(self, capacity: int):",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "        self.cap = capacity",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "        self.cache = {}",
        "tag": "init",
        "lineNum": 9
      },
      {
        "text": "        self.head, self.tail = DNode(), DNode()",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "        self.head.next, self.tail.prev = self.tail, self.head",
        "tag": "pointer",
        "lineNum": 11
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "    def _remove(self, node):",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "        node.prev.next = node.next",
        "tag": "pointer",
        "lineNum": 14
      },
      {
        "text": "        node.next.prev = node.prev",
        "tag": "pointer",
        "lineNum": 15
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "    def _add(self, node):",
        "tag": "def",
        "lineNum": 17
      },
      {
        "text": "        node.next = self.head.next",
        "tag": "pointer",
        "lineNum": 18
      },
      {
        "text": "        node.prev = self.head",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "        self.head.next.prev = node",
        "tag": "pointer",
        "lineNum": 20
      },
      {
        "text": "        self.head.next = node",
        "tag": "pointer",
        "lineNum": 21
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "    def get(self, key: int) -> int:",
        "tag": "def",
        "lineNum": 23
      },
      {
        "text": "        if key in self.cache:",
        "tag": "branch",
        "lineNum": 24
      },
      {
        "text": "            node = self.cache[key]",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "            self._remove(node)",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "            self._add(node)",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "            return node.v",
        "tag": "return",
        "lineNum": 28
      },
      {
        "text": "        return -1",
        "tag": "return",
        "lineNum": 29
      },
      {
        "text": "",
        "tag": "exec",
        "lineNum": 30
      },
      {
        "text": "    def put(self, key: int, value: int) -> None:",
        "tag": "def",
        "lineNum": 31
      },
      {
        "text": "        if key in self.cache:",
        "tag": "branch",
        "lineNum": 32
      },
      {
        "text": "            self._remove(self.cache[key])",
        "tag": "exec",
        "lineNum": 33
      },
      {
        "text": "        node = DNode(key, value)",
        "tag": "exec",
        "lineNum": 34
      },
      {
        "text": "        self._add(node)",
        "tag": "exec",
        "lineNum": 35
      },
      {
        "text": "        self.cache[key] = node",
        "tag": "exec",
        "lineNum": 36
      },
      {
        "text": "        if len(self.cache) > self.cap:",
        "tag": "branch",
        "lineNum": 37
      },
      {
        "text": "            lru = self.tail.prev",
        "tag": "exec",
        "lineNum": 38
      },
      {
        "text": "            self._remove(lru)",
        "tag": "exec",
        "lineNum": 39
      },
      {
        "text": "            del self.cache[lru.k]",
        "tag": "exec",
        "lineNum": 40
      }
    ],
    "rawCode": "class DNode:\n    def __init__(self, k=0, v=0):\n        self.k, self.v = k, v\n        self.prev = self.next = None\n\nclass LRUCache:\n    def __init__(self, capacity: int):\n        self.cap = capacity\n        self.cache = {}\n        self.head, self.tail = DNode(), DNode()\n        self.head.next, self.tail.prev = self.tail, self.head\n\n    def _remove(self, node):\n        node.prev.next = node.next\n        node.next.prev = node.prev\n\n    def _add(self, node):\n        node.next = self.head.next\n        node.prev = self.head\n        self.head.next.prev = node\n        self.head.next = node\n\n    def get(self, key: int) -> int:\n        if key in self.cache:\n            node = self.cache[key]\n            self._remove(node)\n            self._add(node)\n            return node.v\n        return -1\n\n    def put(self, key: int, value: int) -> None:\n        if key in self.cache:\n            self._remove(self.cache[key])\n        node = DNode(key, value)\n        self._add(node)\n        self.cache[key] = node\n        if len(self.cache) > self.cap:\n            lru = self.tail.prev\n            self._remove(lru)\n            del self.cache[lru.k]",
    "explanations": {
      "init": "Initialize pointers and variables.",
      "return": "Return computed solution result.",
      "def": "Executes tagged statement [def] in python.",
      "exec": "Executes tagged statement [exec] in python.",
      "pointer": "Executes tagged statement [pointer] in python.",
      "branch": "Executes tagged statement [branch] in python."
    },
    "notes": "Python utilizes reference binding without manual memory deallocation."
  }
];
})(typeof window !== 'undefined' ? window : global);
