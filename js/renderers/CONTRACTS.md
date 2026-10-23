# SynapseCS Renderer State Contracts Specification

This document defines the strict, normative data contract for each visualizer renderer supported by SynapseCS. Every animation step produced by reference tracers or custom executions MUST conform to these schemas.

---

## 1. Array (`type: "array"`)
Visualizes 1D contiguous arrays, sliding windows, and pointer sweeps.

```json
{
  "type": "array",
  "array": [10, 20, 30, 40],
  "pointers": {
    "left": 0,
    "right": 3
  },
  "highlights": [1, 2]
}
```
- `array`: `Array<number | string | boolean>` (non-empty, max recommended items: 25)
- `pointers`: Optional map of `{ [pointerName: string]: number }` where index must satisfy `0 <= index < array.length`.
- `highlights`: Optional `Array<number>` of indices to highlight.

---

## 2. Linked List (`type: "linked-list"`)
Visualizes singly linked lists with nodes, values, pointers, and memory addresses.

```json
{
  "type": "linked-list",
  "nodes": [
    { "val": 10, "addr": "0x1000", "next": 1 },
    { "val": 20, "addr": "0x1020", "next": 2 },
    { "val": 30, "addr": "0x1040", "next": null }
  ],
  "pointers": {
    "head": 0,
    "curr": 1
  },
  "highlights": [1]
}
```
- `nodes`: `Array<{ val: any, addr?: string, next?: number | null }>`
- `pointers`: Optional map `{ [pointerName: string]: number }` referencing node index `0 <= idx < nodes.length`.
- `highlights`: Optional array of node indices.

---

## 3. Doubly Linked List (`type: "doubly-linked-list"`)
Visualizes bidirectional linked lists with `next` and `prev` pointers.

```json
{
  "type": "doubly-linked-list",
  "nodes": [
    { "val": 10, "addr": "0x1000", "prev": null, "next": 1 },
    { "val": 20, "addr": "0x1020", "prev": 0, "next": null }
  ],
  "pointers": { "head": 0, "tail": 1 },
  "highlights": [0]
}
```
- `nodes`: `Array<{ val: any, addr?: string, prev?: number | null, next?: number | null }>`
- `pointers`: Optional map of pointer names to node indices.

---

## 4. Stack (`type: "stack"`)
Visualizes Last-In First-Out (LIFO) stacks rendered vertically with the top element exposed.

```json
{
  "type": "stack",
  "stack": ["(", "{", "["],
  "pointers": {
    "top": 2
  },
  "highlights": [2]
}
```
- `stack`: `Array<any>` where index `length - 1` is the stack top.
- `pointers`: Optional map `{ top: number, ... }`.
- `highlights`: Optional array of element indices.

---

## 5. Queue (`type: "queue"`)
Visualizes First-In First-Out (FIFO) queues with explicit `front` (dequeue) and `rear` (enqueue) pointers.

```json
{
  "type": "queue",
  "queue": [10, 20, 30],
  "pointers": {
    "front": 0,
    "rear": 2
  },
  "highlights": [0]
}
```
- `queue`: `Array<any>`
- `pointers`: Optional map `{ front?: number, rear?: number, [name: string]: number }`. Indices must be valid queue indices `0 <= idx < queue.length`.
- `highlights`: Optional array of queue element indices.

---

## 6. Binary Tree / BST (`type: "tree"`)
Visualizes hierarchical binary trees or general trees.

```json
{
  "type": "tree",
  "root": {
    "val": 4,
    "left": { "val": 2, "left": { "val": 1 }, "right": { "val": 3 } },
    "right": { "val": 7, "left": { "val": 6 }, "right": { "val": 9 } }
  },
  "pointers": {
    "curr": 4
  },
  "highlights": [4]
}
```
- `root`: Root node object `{ val: any, left?: Node | null, right?: Node | null, id?: string }` OR an array representation `nodes: [...]`.
- `pointers`: Map of `{ [name: string]: valueOrId }`.
- `highlights`: Array of highlighted values or node IDs.

---

## 7. Graph (`type: "graph"`)
Visualizes vertices and directed or undirected edges.

```json
{
  "type": "graph",
  "nodes": [
    { "id": "A", "val": "A" },
    { "id": "B", "val": "B" },
    { "id": "C", "val": "C" }
  ],
  "edges": [
    { "from": "A", "to": "B", "weight": 1 },
    { "from": "B", "to": "C", "weight": 2 }
  ],
  "pointers": { "active": "B" },
  "highlights": ["A", "B"]
}
```

---

## 8. Hash Table / Hash Map (`type: "hash-table"`)
Visualizes hash buckets and collision resolution chains (separate chaining or open addressing).

```json
{
  "type": "hash-table",
  "bucketCount": 4,
  "buckets": [
    [{ "key": "cat", "val": 1 }],
    [],
    [{ "key": "dog", "val": 2 }, { "key": "bird", "val": 5 }],
    []
  ],
  "pointers": { "targetBucket": 2 },
  "highlights": [2]
}
```
- `buckets`: `Array<Array<{ key: any, val: any }>>`
- `pointers`: Map of bucket indices.

---

## 9. Grid / 2D Matrix (`type: "grid"`)
Visualizes 2D grids for BFS/DFS (e.g., Rotting Oranges, Island Counter).

```json
{
  "type": "grid",
  "rows": 3,
  "cols": 3,
  "grid": [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
  ],
  "pointers": { "curr": [0, 0] },
  "highlights": [[0, 0], [0, 1]]
}
```
- `grid`: 2D `Array<Array<any>>`.
- `pointers`: Map of coordinate pairs `[row, col]`.

---

## 10. DP Table (`type: "dp-table"`)
Visualizes memoization tables and dynamic programming 1D/2D arrays.

```json
{
  "type": "dp-table",
  "rowLabels": ["0", "1", "2"],
  "colLabels": ["0", "1", "2", "3"],
  "table": [
    [0, 0, 0, 0],
    [0, 1, 1, 1],
    [0, 1, 2, 2]
  ],
  "pointers": { "curr": [1, 2] },
  "highlights": [[1, 2]]
}
```

---

## 11. Heap / Priority Queue (`type: "heap"`)
Visualizes binary min-heaps / max-heaps as an array and corresponding tree representation.

```json
{
  "type": "heap",
  "heapType": "min",
  "heap": [1, 3, 2, 6, 5, 8, 4],
  "pointers": { "curr": 0, "child": 1 },
  "highlights": [0, 1]
}
```

---

## 12. Trie / Prefix Tree (`type: "trie"`)
Visualizes character transitions and terminal end-of-word markers.

```json
{
  "type": "trie",
  "root": {
    "isEnd": false,
    "children": {
      "c": {
        "isEnd": false,
        "children": {
          "a": { "isEnd": false, "children": { "t": { "isEnd": true, "children": {} } } }
        }
      }
    }
  },
  "pointers": { "activeChar": "a" }
}
```

---

## Renderer Validation & Error Handling Contract
If an animation step does not satisfy the specified contract:
1. The renderer MUST NOT crash or show a blank panel.
2. The renderer MUST intercept the failure and display an on-screen error banner:
   - Error Title: `ANIMATION STATE CONTRACT VIOLATION`
   - Detailed reason: field missing, pointer out of bounds, etc.
   - Raw invalid state payload formatted in JSON for developer debugging.
