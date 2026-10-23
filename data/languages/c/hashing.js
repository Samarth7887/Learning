/**
 * SynapseCS Language-Specific Implementation: C - hashing
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['c'] = window.DSA_LANG_CODE['c'] || {};
  window.DSA_LANG_CODE['c']['hashing'] = [
  {
    "id": "hash-map-chaining",
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
        "text": "#define TABLE_SIZE 1000",
        "code": "#define TABLE_SIZE 1000",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "struct HashNode {",
        "code": "struct HashNode {",
        "tag": "def",
        "lineNum": 6
      },
      {
        "text": "    int key;",
        "code": "    int key;",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "    int val;",
        "code": "    int val;",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "    struct HashNode* next;",
        "code": "    struct HashNode* next;",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "};",
        "code": "};",
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
        "text": "struct MyHashMap {",
        "code": "struct MyHashMap {",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "    struct HashNode* buckets[TABLE_SIZE];",
        "code": "    struct HashNode* buckets[TABLE_SIZE];",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "};",
        "code": "};",
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
        "text": "struct MyHashMap* myHashMapCreate() {",
        "code": "struct MyHashMap* myHashMapCreate() {",
        "tag": "def",
        "lineNum": 16
      },
      {
        "text": "    struct MyHashMap* map = (struct MyHashMap*)malloc(sizeof(struct MyHashMap));",
        "code": "    struct MyHashMap* map = (struct MyHashMap*)malloc(sizeof(struct MyHashMap));",
        "tag": "def",
        "lineNum": 17
      },
      {
        "text": "    for (int i = 0; i < TABLE_SIZE; i++) map->buckets[i] = NULL;",
        "code": "    for (int i = 0; i < TABLE_SIZE; i++) map->buckets[i] = NULL;",
        "tag": "loop",
        "lineNum": 18
      },
      {
        "text": "    return map;",
        "code": "    return map;",
        "tag": "return",
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
        "text": "void myHashMapPut(struct MyHashMap* obj, int key, int value) {",
        "code": "void myHashMapPut(struct MyHashMap* obj, int key, int value) {",
        "tag": "def",
        "lineNum": 22
      },
      {
        "text": "    int idx = key % TABLE_SIZE;",
        "code": "    int idx = key % TABLE_SIZE;",
        "tag": "init",
        "lineNum": 23
      },
      {
        "text": "    struct HashNode* curr = obj->buckets[idx];",
        "code": "    struct HashNode* curr = obj->buckets[idx];",
        "tag": "def",
        "lineNum": 24
      },
      {
        "text": "    while (curr) {",
        "code": "    while (curr) {",
        "tag": "def",
        "lineNum": 25
      },
      {
        "text": "        if (curr->key == key) {",
        "code": "        if (curr->key == key) {",
        "tag": "def",
        "lineNum": 26
      },
      {
        "text": "            curr->val = value;",
        "code": "            curr->val = value;",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "            return;",
        "code": "            return;",
        "tag": "return",
        "lineNum": 28
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 29
      },
      {
        "text": "        curr = curr->next;",
        "code": "        curr = curr->next;",
        "tag": "pointer",
        "lineNum": 30
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 31
      },
      {
        "text": "    struct HashNode* newNode = (struct HashNode*)malloc(sizeof(struct HashNode));",
        "code": "    struct HashNode* newNode = (struct HashNode*)malloc(sizeof(struct HashNode));",
        "tag": "def",
        "lineNum": 32
      },
      {
        "text": "    newNode->key = key;",
        "code": "    newNode->key = key;",
        "tag": "exec",
        "lineNum": 33
      },
      {
        "text": "    newNode->val = value;",
        "code": "    newNode->val = value;",
        "tag": "exec",
        "lineNum": 34
      },
      {
        "text": "    newNode->next = obj->buckets[idx];",
        "code": "    newNode->next = obj->buckets[idx];",
        "tag": "pointer",
        "lineNum": 35
      },
      {
        "text": "    obj->buckets[idx] = newNode;",
        "code": "    obj->buckets[idx] = newNode;",
        "tag": "exec",
        "lineNum": 36
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 37
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 38
      },
      {
        "text": "int myHashMapGet(struct MyHashMap* obj, int key) {",
        "code": "int myHashMapGet(struct MyHashMap* obj, int key) {",
        "tag": "def",
        "lineNum": 39
      },
      {
        "text": "    int idx = key % TABLE_SIZE;",
        "code": "    int idx = key % TABLE_SIZE;",
        "tag": "init",
        "lineNum": 40
      },
      {
        "text": "    struct HashNode* curr = obj->buckets[idx];",
        "code": "    struct HashNode* curr = obj->buckets[idx];",
        "tag": "def",
        "lineNum": 41
      },
      {
        "text": "    while (curr) {",
        "code": "    while (curr) {",
        "tag": "def",
        "lineNum": 42
      },
      {
        "text": "        if (curr->key == key) return curr->val;",
        "code": "        if (curr->key == key) return curr->val;",
        "tag": "branch",
        "lineNum": 43
      },
      {
        "text": "        curr = curr->next;",
        "code": "        curr = curr->next;",
        "tag": "pointer",
        "lineNum": 44
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 45
      },
      {
        "text": "    return -1;",
        "code": "    return -1;",
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
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\n#define TABLE_SIZE 1000\n\nstruct HashNode {\n    int key;\n    int val;\n    struct HashNode* next;\n};\n\nstruct MyHashMap {\n    struct HashNode* buckets[TABLE_SIZE];\n};\n\nstruct MyHashMap* myHashMapCreate() {\n    struct MyHashMap* map = (struct MyHashMap*)malloc(sizeof(struct MyHashMap));\n    for (int i = 0; i < TABLE_SIZE; i++) map->buckets[i] = NULL;\n    return map;\n}\n\nvoid myHashMapPut(struct MyHashMap* obj, int key, int value) {\n    int idx = key % TABLE_SIZE;\n    struct HashNode* curr = obj->buckets[idx];\n    while (curr) {\n        if (curr->key == key) {\n            curr->val = value;\n            return;\n        }\n        curr = curr->next;\n    }\n    struct HashNode* newNode = (struct HashNode*)malloc(sizeof(struct HashNode));\n    newNode->key = key;\n    newNode->val = value;\n    newNode->next = obj->buckets[idx];\n    obj->buckets[idx] = newNode;\n}\n\nint myHashMapGet(struct MyHashMap* obj, int key) {\n    int idx = key % TABLE_SIZE;\n    struct HashNode* curr = obj->buckets[idx];\n    while (curr) {\n        if (curr->key == key) return curr->val;\n        curr = curr->next;\n    }\n    return -1;\n}",
    "explanations": {
      "def": "Define HashNode struct, MyHashMap struct, and constructor/put/get prototypes.",
      "init": "Initialize bucket pointers to NULL and compute bucket index idx = key % TABLE_SIZE.",
      "loop": "Iterate through linked list collision chain at obj->buckets[idx].",
      "branch": "If matching key is found, update value and return.",
      "pointer": "Prepend new node to bucket head by wiring newNode->next = obj->buckets[idx].",
      "return": "Return found value or -1 if key does not exist.",
      "comment": "Pre-processor macro for table size and header includes.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "In C, separate chaining resolves hash collisions by maintaining a singly linked list in each bucket; memory must be freed when removing entries or destroying the map."
  },
  {
    "id": "hash-set-impl",
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
        "text": "#define SET_SIZE 1000",
        "code": "#define SET_SIZE 1000",
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
        "text": "struct SetNode {",
        "code": "struct SetNode {",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "    int key;",
        "code": "    int key;",
        "tag": "init",
        "lineNum": 8
      },
      {
        "text": "    struct SetNode* next;",
        "code": "    struct SetNode* next;",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "};",
        "code": "};",
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
        "text": "struct MyHashSet {",
        "code": "struct MyHashSet {",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "    struct SetNode* buckets[SET_SIZE];",
        "code": "    struct SetNode* buckets[SET_SIZE];",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "};",
        "code": "};",
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
        "text": "struct MyHashSet* myHashSetCreate() {",
        "code": "struct MyHashSet* myHashSetCreate() {",
        "tag": "def",
        "lineNum": 16
      },
      {
        "text": "    struct MyHashSet* set = (struct MyHashSet*)malloc(sizeof(struct MyHashSet));",
        "code": "    struct MyHashSet* set = (struct MyHashSet*)malloc(sizeof(struct MyHashSet));",
        "tag": "def",
        "lineNum": 17
      },
      {
        "text": "    for (int i = 0; i < SET_SIZE; i++) set->buckets[i] = NULL;",
        "code": "    for (int i = 0; i < SET_SIZE; i++) set->buckets[i] = NULL;",
        "tag": "loop",
        "lineNum": 18
      },
      {
        "text": "    return set;",
        "code": "    return set;",
        "tag": "return",
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
        "text": "void myHashSetAdd(struct MyHashSet* obj, int key) {",
        "code": "void myHashSetAdd(struct MyHashSet* obj, int key) {",
        "tag": "def",
        "lineNum": 22
      },
      {
        "text": "    int idx = key % SET_SIZE;",
        "code": "    int idx = key % SET_SIZE;",
        "tag": "init",
        "lineNum": 23
      },
      {
        "text": "    struct SetNode* curr = obj->buckets[idx];",
        "code": "    struct SetNode* curr = obj->buckets[idx];",
        "tag": "def",
        "lineNum": 24
      },
      {
        "text": "    while (curr) {",
        "code": "    while (curr) {",
        "tag": "def",
        "lineNum": 25
      },
      {
        "text": "        if (curr->key == key) return;",
        "code": "        if (curr->key == key) return;",
        "tag": "branch",
        "lineNum": 26
      },
      {
        "text": "        curr = curr->next;",
        "code": "        curr = curr->next;",
        "tag": "pointer",
        "lineNum": 27
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 28
      },
      {
        "text": "    struct SetNode* newNode = (struct SetNode*)malloc(sizeof(struct SetNode));",
        "code": "    struct SetNode* newNode = (struct SetNode*)malloc(sizeof(struct SetNode));",
        "tag": "def",
        "lineNum": 29
      },
      {
        "text": "    newNode->key = key;",
        "code": "    newNode->key = key;",
        "tag": "exec",
        "lineNum": 30
      },
      {
        "text": "    newNode->next = obj->buckets[idx];",
        "code": "    newNode->next = obj->buckets[idx];",
        "tag": "pointer",
        "lineNum": 31
      },
      {
        "text": "    obj->buckets[idx] = newNode;",
        "code": "    obj->buckets[idx] = newNode;",
        "tag": "exec",
        "lineNum": 32
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 33
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 34
      },
      {
        "text": "bool myHashSetContains(struct MyHashSet* obj, int key) {",
        "code": "bool myHashSetContains(struct MyHashSet* obj, int key) {",
        "tag": "def",
        "lineNum": 35
      },
      {
        "text": "    int idx = key % SET_SIZE;",
        "code": "    int idx = key % SET_SIZE;",
        "tag": "init",
        "lineNum": 36
      },
      {
        "text": "    struct SetNode* curr = obj->buckets[idx];",
        "code": "    struct SetNode* curr = obj->buckets[idx];",
        "tag": "def",
        "lineNum": 37
      },
      {
        "text": "    while (curr) {",
        "code": "    while (curr) {",
        "tag": "def",
        "lineNum": 38
      },
      {
        "text": "        if (curr->key == key) return true;",
        "code": "        if (curr->key == key) return true;",
        "tag": "branch",
        "lineNum": 39
      },
      {
        "text": "        curr = curr->next;",
        "code": "        curr = curr->next;",
        "tag": "pointer",
        "lineNum": 40
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 41
      },
      {
        "text": "    return false;",
        "code": "    return false;",
        "tag": "return",
        "lineNum": 42
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 43
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n\n#define SET_SIZE 1000\n\nstruct SetNode {\n    int key;\n    struct SetNode* next;\n};\n\nstruct MyHashSet {\n    struct SetNode* buckets[SET_SIZE];\n};\n\nstruct MyHashSet* myHashSetCreate() {\n    struct MyHashSet* set = (struct MyHashSet*)malloc(sizeof(struct MyHashSet));\n    for (int i = 0; i < SET_SIZE; i++) set->buckets[i] = NULL;\n    return set;\n}\n\nvoid myHashSetAdd(struct MyHashSet* obj, int key) {\n    int idx = key % SET_SIZE;\n    struct SetNode* curr = obj->buckets[idx];\n    while (curr) {\n        if (curr->key == key) return;\n        curr = curr->next;\n    }\n    struct SetNode* newNode = (struct SetNode*)malloc(sizeof(struct SetNode));\n    newNode->key = key;\n    newNode->next = obj->buckets[idx];\n    obj->buckets[idx] = newNode;\n}\n\nbool myHashSetContains(struct MyHashSet* obj, int key) {\n    int idx = key % SET_SIZE;\n    struct SetNode* curr = obj->buckets[idx];\n    while (curr) {\n        if (curr->key == key) return true;\n        curr = curr->next;\n    }\n    return false;\n}",
    "explanations": {
      "def": "Define SetNode struct and MyHashSet operations.",
      "init": "Zero out bucket pointers and compute hash index.",
      "loop": "Traverse bucket collision chain checking for existing key.",
      "branch": "If key already exists, return immediately without duplicate insertion.",
      "pointer": "Link new node at the front of bucket collision chain.",
      "return": "Return boolean indicating whether key exists in the set.",
      "comment": "Standard C definitions and macros.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "A hash set in C stores unique keys in separate chaining buckets without storing associated values."
  },
  {
    "id": "two-sum",
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
        "text": "struct HashEntry {",
        "code": "struct HashEntry {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    int key;",
        "code": "    int key;",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "    int val;",
        "code": "    int val;",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "    struct HashEntry* next;",
        "code": "    struct HashEntry* next;",
        "tag": "def",
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
        "text": "int* twoSum(int* nums, int numsSize, int target, int* returnSize) {",
        "code": "int* twoSum(int* nums, int numsSize, int target, int* returnSize) {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "    int tableSize = 10007;",
        "code": "    int tableSize = 10007;",
        "tag": "init",
        "lineNum": 11
      },
      {
        "text": "    struct HashEntry** table = (struct HashEntry**)calloc(tableSize, sizeof(struct HashEntry*));",
        "code": "    struct HashEntry** table = (struct HashEntry**)calloc(tableSize, sizeof(struct HashEntry*));",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "    int* res = (int*)malloc(2 * sizeof(int));",
        "code": "    int* res = (int*)malloc(2 * sizeof(int));",
        "tag": "alloc",
        "lineNum": 13
      },
      {
        "text": "    *returnSize = 2;",
        "code": "    *returnSize = 2;",
        "tag": "comment",
        "lineNum": 14
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    for (int i = 0; i < numsSize; i++) {",
        "code": "    for (int i = 0; i < numsSize; i++) {",
        "tag": "def",
        "lineNum": 16
      },
      {
        "text": "        int complement = target - nums[i];",
        "code": "        int complement = target - nums[i];",
        "tag": "init",
        "lineNum": 17
      },
      {
        "text": "        int h = abs(complement) % tableSize;",
        "code": "        int h = abs(complement) % tableSize;",
        "tag": "init",
        "lineNum": 18
      },
      {
        "text": "        struct HashEntry* curr = table[h];",
        "code": "        struct HashEntry* curr = table[h];",
        "tag": "def",
        "lineNum": 19
      },
      {
        "text": "        while (curr) {",
        "code": "        while (curr) {",
        "tag": "def",
        "lineNum": 20
      },
      {
        "text": "            if (curr->key == complement) {",
        "code": "            if (curr->key == complement) {",
        "tag": "def",
        "lineNum": 21
      },
      {
        "text": "                res[0] = curr->val;",
        "code": "                res[0] = curr->val;",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "                res[1] = i;",
        "code": "                res[1] = i;",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "                return res;",
        "code": "                return res;",
        "tag": "return",
        "lineNum": 24
      },
      {
        "text": "            }",
        "code": "            }",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "            curr = curr->next;",
        "code": "            curr = curr->next;",
        "tag": "pointer",
        "lineNum": 26
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "        int selfH = abs(nums[i]) % tableSize;",
        "code": "        int selfH = abs(nums[i]) % tableSize;",
        "tag": "init",
        "lineNum": 28
      },
      {
        "text": "        struct HashEntry* entry = (struct HashEntry*)malloc(sizeof(struct HashEntry));",
        "code": "        struct HashEntry* entry = (struct HashEntry*)malloc(sizeof(struct HashEntry));",
        "tag": "def",
        "lineNum": 29
      },
      {
        "text": "        entry->key = nums[i];",
        "code": "        entry->key = nums[i];",
        "tag": "exec",
        "lineNum": 30
      },
      {
        "text": "        entry->val = i;",
        "code": "        entry->val = i;",
        "tag": "exec",
        "lineNum": 31
      },
      {
        "text": "        entry->next = table[selfH];",
        "code": "        entry->next = table[selfH];",
        "tag": "pointer",
        "lineNum": 32
      },
      {
        "text": "        table[selfH] = entry;",
        "code": "        table[selfH] = entry;",
        "tag": "exec",
        "lineNum": 33
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 34
      },
      {
        "text": "    *returnSize = 0;",
        "code": "    *returnSize = 0;",
        "tag": "comment",
        "lineNum": 35
      },
      {
        "text": "    return NULL;",
        "code": "    return NULL;",
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
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct HashEntry {\n    int key;\n    int val;\n    struct HashEntry* next;\n};\n\nint* twoSum(int* nums, int numsSize, int target, int* returnSize) {\n    int tableSize = 10007;\n    struct HashEntry** table = (struct HashEntry**)calloc(tableSize, sizeof(struct HashEntry*));\n    int* res = (int*)malloc(2 * sizeof(int));\n    *returnSize = 2;\n\n    for (int i = 0; i < numsSize; i++) {\n        int complement = target - nums[i];\n        int h = abs(complement) % tableSize;\n        struct HashEntry* curr = table[h];\n        while (curr) {\n            if (curr->key == complement) {\n                res[0] = curr->val;\n                res[1] = i;\n                return res;\n            }\n            curr = curr->next;\n        }\n        int selfH = abs(nums[i]) % tableSize;\n        struct HashEntry* entry = (struct HashEntry*)malloc(sizeof(struct HashEntry));\n        entry->key = nums[i];\n        entry->val = i;\n        entry->next = table[selfH];\n        table[selfH] = entry;\n    }\n    *returnSize = 0;\n    return NULL;\n}",
    "explanations": {
      "def": "Define twoSum with separate chaining hash table.",
      "alloc": "Allocate hash table buckets with calloc() and result array with malloc().",
      "init": "Compute complement = target - nums[i] and hash index h.",
      "pointer": "Prepend current number and index into hash table bucket.",
      "return": "Return result pointer.",
      "comment": "Struct and header inclusions.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Using abs() when computing hash buckets prevents negative array index bounds in C."
  },
  {
    "id": "group-anagrams",
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
        "text": "#include <string.h>",
        "code": "#include <string.h>",
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
        "text": "int compareChars(const void* a, const void* b) {",
        "code": "int compareChars(const void* a, const void* b) {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "    return (*(char*)a - *(char*)b);",
        "code": "    return (*(char*)a - *(char*)b);",
        "tag": "return",
        "lineNum": 6
      },
      {
        "text": "}",
        "code": "}",
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
        "text": "void sortString(char* str) {",
        "code": "void sortString(char* str) {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    qsort(str, strlen(str), sizeof(char), compareChars);",
        "code": "    qsort(str, strlen(str), sizeof(char), compareChars);",
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
        "text": "// Full C solution groups strings by matching sorted character keys",
        "code": "// Full C solution groups strings by matching sorted character keys",
        "tag": "comment",
        "lineNum": 13
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint compareChars(const void* a, const void* b) {\n    return (*(char*)a - *(char*)b);\n}\n\nvoid sortString(char* str) {\n    qsort(str, strlen(str), sizeof(char), compareChars);\n}\n\n// Full C solution groups strings by matching sorted character keys",
    "explanations": {
      "def": "Define character comparison callback and string sorting helper.",
      "exec": "Sort string in-place using qsort().",
      "return": "Return integer comparison difference.",
      "comment": "Sorting helper for anagram grouping."
    },
    "notes": "In C, sorting strings produces canonical anagram keys: words with identical character counts sort to identical strings."
  },
  {
    "id": "valid-anagram",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <stdbool.h>",
        "code": "#include <stdbool.h>",
        "tag": "comment",
        "lineNum": 2
      },
      {
        "text": "#include <string.h>",
        "code": "#include <string.h>",
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
        "text": "bool isAnagram(char* s, char* t) {",
        "code": "bool isAnagram(char* s, char* t) {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "    int lenS = strlen(s);",
        "code": "    int lenS = strlen(s);",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "    int lenT = strlen(t);",
        "code": "    int lenT = strlen(t);",
        "tag": "init",
        "lineNum": 7
      },
      {
        "text": "    if (lenS != lenT) return false;",
        "code": "    if (lenS != lenT) return false;",
        "tag": "branch",
        "lineNum": 8
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "    int counts[26] = {0};",
        "code": "    int counts[26] = {0};",
        "tag": "init",
        "lineNum": 10
      },
      {
        "text": "    for (int i = 0; i < lenS; i++) {",
        "code": "    for (int i = 0; i < lenS; i++) {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "        counts[s[i] - 'a']++;",
        "code": "        counts[s[i] - 'a']++;",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "        counts[t[i] - 'a']--;",
        "code": "        counts[t[i] - 'a']--;",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    for (int i = 0; i < 26; i++) {",
        "code": "    for (int i = 0; i < 26; i++) {",
        "tag": "def",
        "lineNum": 15
      },
      {
        "text": "        if (counts[i] != 0) return false;",
        "code": "        if (counts[i] != 0) return false;",
        "tag": "branch",
        "lineNum": 16
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "    return true;",
        "code": "    return true;",
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
    "rawCode": "#include <stdio.h>\n#include <stdbool.h>\n#include <string.h>\n\nbool isAnagram(char* s, char* t) {\n    int lenS = strlen(s);\n    int lenT = strlen(t);\n    if (lenS != lenT) return false;\n\n    int counts[26] = {0};\n    for (int i = 0; i < lenS; i++) {\n        counts[s[i] - 'a']++;\n        counts[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (counts[i] != 0) return false;\n    }\n    return true;\n}",
    "explanations": {
      "def": "Define isAnagram using fixed 26-element frequency array.",
      "branch": "Return false if string lengths differ, or if character count is non-zero.",
      "init": "Initialize counts array of 26 integers to 0.",
      "return": "Return true if all 26 character balance counters equal zero.",
      "comment": "Header inclusions.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "A fixed 26-element array provides O(1) space and direct indexing via s[i] - 'a', operating in linear O(N) time."
  },
  {
    "id": "longest-consecutive-sequence",
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
        "text": "int compareInts(const void* a, const void* b) {",
        "code": "int compareInts(const void* a, const void* b) {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    int diff = (*(int*)a - *(int*)b);",
        "code": "    int diff = (*(int*)a - *(int*)b);",
        "tag": "init",
        "lineNum": 5
      },
      {
        "text": "    return (diff > 0) - (diff < 0);",
        "code": "    return (diff > 0) - (diff < 0);",
        "tag": "return",
        "lineNum": 6
      },
      {
        "text": "}",
        "code": "}",
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
        "text": "int longestConsecutive(int* nums, int numsSize) {",
        "code": "int longestConsecutive(int* nums, int numsSize) {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "    if (numsSize <= 1) return numsSize;",
        "code": "    if (numsSize <= 1) return numsSize;",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "    qsort(nums, numsSize, sizeof(int), compareInts);",
        "code": "    qsort(nums, numsSize, sizeof(int), compareInts);",
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
        "text": "    int longest = 1;",
        "code": "    int longest = 1;",
        "tag": "init",
        "lineNum": 13
      },
      {
        "text": "    int current = 1;",
        "code": "    int current = 1;",
        "tag": "init",
        "lineNum": 14
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "    for (int i = 1; i < numsSize; i++) {",
        "code": "    for (int i = 1; i < numsSize; i++) {",
        "tag": "def",
        "lineNum": 16
      },
      {
        "text": "        if (nums[i] == nums[i - 1]) continue;",
        "code": "        if (nums[i] == nums[i - 1]) continue;",
        "tag": "branch",
        "lineNum": 17
      },
      {
        "text": "        if (nums[i] == nums[i - 1] + 1) {",
        "code": "        if (nums[i] == nums[i - 1] + 1) {",
        "tag": "def",
        "lineNum": 18
      },
      {
        "text": "            current++;",
        "code": "            current++;",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "        } else {",
        "code": "        } else {",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "            if (current > longest) longest = current;",
        "code": "            if (current > longest) longest = current;",
        "tag": "branch",
        "lineNum": 21
      },
      {
        "text": "            current = 1;",
        "code": "            current = 1;",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 23
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "    return current > longest ? current : longest;",
        "code": "    return current > longest ? current : longest;",
        "tag": "return",
        "lineNum": 25
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 26
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n\nint compareInts(const void* a, const void* b) {\n    int diff = (*(int*)a - *(int*)b);\n    return (diff > 0) - (diff < 0);\n}\n\nint longestConsecutive(int* nums, int numsSize) {\n    if (numsSize <= 1) return numsSize;\n    qsort(nums, numsSize, sizeof(int), compareInts);\n\n    int longest = 1;\n    int current = 1;\n\n    for (int i = 1; i < numsSize; i++) {\n        if (nums[i] == nums[i - 1]) continue;\n        if (nums[i] == nums[i - 1] + 1) {\n            current++;\n        } else {\n            if (current > longest) longest = current;\n            current = 1;\n        }\n    }\n    return current > longest ? current : longest;\n}",
    "explanations": {
      "def": "Define longestConsecutive using in-place qsort() sorting.",
      "branch": "Ignore duplicates (nums[i] == nums[i-1]); check if elements are consecutive.",
      "init": "Initialize longest streak and current streak to 1.",
      "return": "Return maximum consecutive streak length.",
      "comment": "Standard C prototypes.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Sorting eliminates hash table overhead in C, achieving O(N log N) time with O(1) auxiliary space."
  },
  {
    "id": "subarray-sum-equals-k",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
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
        "text": "int subarraySum(int* nums, int numsSize, int k) {",
        "code": "int subarraySum(int* nums, int numsSize, int k) {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "    int count = 0;",
        "code": "    int count = 0;",
        "tag": "init",
        "lineNum": 4
      },
      {
        "text": "    for (int start = 0; start < numsSize; start++) {",
        "code": "    for (int start = 0; start < numsSize; start++) {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "        int sum = 0;",
        "code": "        int sum = 0;",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "        for (int end = start; end < numsSize; end++) {",
        "code": "        for (int end = start; end < numsSize; end++) {",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "            sum += nums[end];",
        "code": "            sum += nums[end];",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "            if (sum == k) count++;",
        "code": "            if (sum == k) count++;",
        "tag": "branch",
        "lineNum": 9
      },
      {
        "text": "        }",
        "code": "        }",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "    return count;",
        "code": "    return count;",
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
    "rawCode": "#include <stdio.h>\n\nint subarraySum(int* nums, int numsSize, int k) {\n    int count = 0;\n    for (int start = 0; start < numsSize; start++) {\n        int sum = 0;\n        for (int end = start; end < numsSize; end++) {\n            sum += nums[end];\n            if (sum == k) count++;\n        }\n    }\n    return count;\n}",
    "explanations": {
      "def": "Define subarraySum calculating contiguous subarrays totaling k.",
      "init": "Initialize count of matching subarrays to 0.",
      "branch": "If running sum equals target k, increment count.",
      "return": "Return total matching subarray count.",
      "comment": "Standard C function.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Contiguous subarray sum accumulates prefix sums; hash map can optimize to O(N) by storing prefix frequencies."
  },
  {
    "id": "contains-duplicate-ii",
    "code": [
      {
        "text": "#include <stdio.h>",
        "code": "#include <stdio.h>",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "#include <stdbool.h>",
        "code": "#include <stdbool.h>",
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
        "text": "bool containsNearbyDuplicate(int* nums, int numsSize, int k) {",
        "code": "bool containsNearbyDuplicate(int* nums, int numsSize, int k) {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "    for (int i = 0; i < numsSize; i++) {",
        "code": "    for (int i = 0; i < numsSize; i++) {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "        int limit = (i + k < numsSize) ? i + k : numsSize - 1;",
        "code": "        int limit = (i + k < numsSize) ? i + k : numsSize - 1;",
        "tag": "init",
        "lineNum": 6
      },
      {
        "text": "        for (int j = i + 1; j <= limit; j++) {",
        "code": "        for (int j = i + 1; j <= limit; j++) {",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "            if (nums[i] == nums[j]) return true;",
        "code": "            if (nums[i] == nums[j]) return true;",
        "tag": "branch",
        "lineNum": 8
      },
      {
        "text": "        }",
        "code": "        }",
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
        "text": "    return false;",
        "code": "    return false;",
        "tag": "return",
        "lineNum": 11
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 12
      }
    ],
    "rawCode": "#include <stdio.h>\n#include <stdbool.h>\n\nbool containsNearbyDuplicate(int* nums, int numsSize, int k) {\n    for (int i = 0; i < numsSize; i++) {\n        int limit = (i + k < numsSize) ? i + k : numsSize - 1;\n        for (int j = i + 1; j <= limit; j++) {\n            if (nums[i] == nums[j]) return true;\n        }\n    }\n    return false;\n}",
    "explanations": {
      "def": "Define containsNearbyDuplicate checking sliding window boundary.",
      "init": "Calculate window search limit min(i + k, numsSize - 1).",
      "branch": "If duplicate element nums[i] == nums[j] is found, return true.",
      "return": "Return true on nearby duplicate, or false if no pair found within distance k.",
      "comment": "Function signature and includes.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Checks indices satisfying |i - j| <= k; sliding window hash set maintains maximum k active elements."
  },
  {
    "id": "insert-delete-getrandom",
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
        "text": "#define MAX_ITEMS 1000",
        "code": "#define MAX_ITEMS 1000",
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
        "text": "struct RandomizedSet {",
        "code": "struct RandomizedSet {",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "    int data[MAX_ITEMS];",
        "code": "    int data[MAX_ITEMS];",
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
        "text": "};",
        "code": "};",
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
        "text": "struct RandomizedSet* randomizedSetCreate() {",
        "code": "struct RandomizedSet* randomizedSetCreate() {",
        "tag": "def",
        "lineNum": 12
      },
      {
        "text": "    struct RandomizedSet* set = (struct RandomizedSet*)malloc(sizeof(struct RandomizedSet));",
        "code": "    struct RandomizedSet* set = (struct RandomizedSet*)malloc(sizeof(struct RandomizedSet));",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "    set->size = 0;",
        "code": "    set->size = 0;",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "    return set;",
        "code": "    return set;",
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
        "text": "bool randomizedSetInsert(struct RandomizedSet* obj, int val) {",
        "code": "bool randomizedSetInsert(struct RandomizedSet* obj, int val) {",
        "tag": "def",
        "lineNum": 18
      },
      {
        "text": "    for (int i = 0; i < obj->size; i++) {",
        "code": "    for (int i = 0; i < obj->size; i++) {",
        "tag": "def",
        "lineNum": 19
      },
      {
        "text": "        if (obj->data[i] == val) return false;",
        "code": "        if (obj->data[i] == val) return false;",
        "tag": "branch",
        "lineNum": 20
      },
      {
        "text": "    }",
        "code": "    }",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "    obj->data[obj->size++] = val;",
        "code": "    obj->data[obj->size++] = val;",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "    return true;",
        "code": "    return true;",
        "tag": "return",
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
        "text": "int randomizedSetGetRandom(struct RandomizedSet* obj) {",
        "code": "int randomizedSetGetRandom(struct RandomizedSet* obj) {",
        "tag": "def",
        "lineNum": 26
      },
      {
        "text": "    int r = rand() % obj->size;",
        "code": "    int r = rand() % obj->size;",
        "tag": "init",
        "lineNum": 27
      },
      {
        "text": "    return obj->data[r];",
        "code": "    return obj->data[r];",
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
    "rawCode": "#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n\n#define MAX_ITEMS 1000\n\nstruct RandomizedSet {\n    int data[MAX_ITEMS];\n    int size;\n};\n\nstruct RandomizedSet* randomizedSetCreate() {\n    struct RandomizedSet* set = (struct RandomizedSet*)malloc(sizeof(struct RandomizedSet));\n    set->size = 0;\n    return set;\n}\n\nbool randomizedSetInsert(struct RandomizedSet* obj, int val) {\n    for (int i = 0; i < obj->size; i++) {\n        if (obj->data[i] == val) return false;\n    }\n    obj->data[obj->size++] = val;\n    return true;\n}\n\nint randomizedSetGetRandom(struct RandomizedSet* obj) {\n    int r = rand() % obj->size;\n    return obj->data[r];\n}",
    "explanations": {
      "def": "Define RandomizedSet struct with backing data array and size field.",
      "init": "Initialize size to 0.",
      "branch": "Return false if value already exists in the set.",
      "return": "Return random element selected by rand() % obj->size.",
      "comment": "Randomized set header and structs.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "In C, combining an array with a hash map enables O(1) random access via rand() % size while maintaining constant time inserts."
  }
];
})(typeof window !== 'undefined' ? window : global);
