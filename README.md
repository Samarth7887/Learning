# SynapseCS | Complete Interactive Data Structures & Algorithms Lab

SynapseCS is an interactive, zero-build Data Structures & Algorithms (DSA) learning application engineered to teach CS fundamentals through real-time memory-address mental models, multi-language code synchronization (Python, Java, C++, JavaScript), line-by-line beginner explanations, and a universal animation engine.

---

## ⚡ Quick Start (No Install, No Build Step)

SynapseCS has **zero dependencies, no npm requirements, and no build pipeline**.

### Method 1: Direct Double-Click (Offline Desktop)
1. Double-click `index.html` in your file explorer.
2. The entire platform runs directly in your default browser via the `file://` protocol. All topics, animations, and code samples load offline.

### Method 2: Local HTTP Server (Optional)
If you prefer running a local server:
```bash
python -m http.server 3000
```
Then visit `http://localhost:3000/index.html`.

---

## 🏗 Modular, Data-Driven Architecture

The codebase has been refactored from a monolithic file into a clean, decoupled, data-driven architecture:

```text
├── index.html                  # Shell layout & topic script loaders
├── css/
│   └── styles.css              # Consolidated design tokens, animations & UI styles
├── js/
│   ├── app.js                  # Controller: sidebar navigation, search, filters & progress
│   └── animator.js             # Universal step-driven animation engine
├── data/
│   └── topics/                 # One standalone data file per DSA topic
│       ├── linked-list.js      # Singly/doubly linked list basics & classic LC questions
│       └── stack.js            # Array/LL stacks, monotonic stacks, evaluation
├── AUDIT.md                    # Technical debt audit & file redundancy report
├── TESTS.md                    # Test harness report verifying 100% passing solutions
└── README.md                   # Project overview & progress roadmap
```

### 🧩 Global Registry Pattern
To ensure `index.html` works when double-clicked from disk (where browser CORS security blocks `fetch()` and `import`), every topic file registers onto a safe global registry:
```javascript
window.DSA_TOPICS = window.DSA_TOPICS || {};
window.DSA_TOPICS["topic-id"] = { ... };
```
Adding a new question requires **zero UI code changes**—simply append a question object to the respective data file following the schema.

---

## 📊 Topic & Question Progress Checklist

| Phase | Topic | Questions | Status | Key Highlights |
| :--- | :--- | :---: | :---: | :--- |
| **Phase 1** | **Linked List** | 18 | ✅ **Complete** | 11 Basics (Node, insert/delete head/tail/kth, search, traverse, update, size) + 7 Classics (Reverse, Cycle, Merge, Middle, Nth from end, Palindrome, LRU Cache) |
| **Phase 1** | **Stack** | 10 | ✅ **Complete** | Array & LL implementations, Valid Parentheses, Min Stack, Monotonic Stack (NGE, Daily Temps), RPN, Queue using Stacks, Largest Rectangle |
| Phase 2 | Arrays & Strings | Target: 20+ | ⏳ Queued | Two pointers, Sliding window, Prefix sum, Kadane's |
| Phase 2 | Queue & Deque | Target: 10+ | ⏳ Queued | Circular queue, Deque, Sliding window maximum |
| Phase 2 | Hashing | Target: 15+ | ⏳ Queued | Hash map/set, Two sum, Group anagrams, Subarray sum = k |
| Phase 2 | Binary Trees & BST | Target: 20+ | ⏳ Queued | Traversals, Height, LCA, Validate BST, Level order, Serialize |
| Phase 3 | Heaps & Priority Queues| Target: 12+ | ⏳ Queued | Heapify, Top-K, Merge K sorted, Median of stream |
| Phase 3 | Graphs | Target: 20+ | ⏳ Queued | BFS, DFS, Dijkstra, Topo Sort, Union-Find, MST, Islands |
| Phase 3 | Tries | Target: 10+ | ⏳ Queued | Prefix tree, autocomplete, Word Search II |
| Phase 3 | Sorting & Searching | Target: 15+ | ⏳ Queued | Binary search variants, QuickSort, MergeSort |
| Phase 4 | Recursion & Backtracking| Target: 15+ | ⏳ Queued | Subsets, Permutations, N-Queens, Sudoku |
| Phase 4 | Dynamic Programming | Target: 25+ | ⏳ Queued | 1D, 2D, Knapsack, LIS, LCS, Edit Distance, Coin Change |
| Phase 4 | Greedy & Bit Manipulation| Target: 15+ | ⏳ Queued | Interval scheduling, Bitwise tricks, Segment Tree |

**Current Total:** 28 questions verified across 2 completed topics.

---

## 🧪 Automated Testing & Verification

Every algorithm solution is validated using an automated test harness across multiple programming languages.
- **Python 3.14**: 28 / 28 test suites passed (100%)
- **JavaScript (Node.js)**: 28 / 28 test suites passed (100%)

Full test outputs, expected values, and actual execution results are documented in [TESTS.md](file:///c:/Users/Samartha/OneDrive/Desktop/Repo/LEARNING/Learning/TESTS.md).

---

## 🖥️ UI & Educational Features

1. **Physical Memory Addresses**: Linked lists display simulated 64-bit hexadecimal heap addresses (`0x1000`, `0x1020`), null terminators, and dynamic SVG pointer arrows.
2. **Rosetta Stone Code Panel**: Instant switching between **Python**, **Java**, **C++**, and **JavaScript** for every problem.
3. **Interactive Line Explanations**: Hover or click any line of code to see an instant beginner-friendly explanation.
4. **"Explain All Lines (Beginner Mode)"**: A one-click detailed breakdown walking through every line of code without unexplained jargon.
5. **Universal Animation Engine (`animator.js`)**: Play, pause, step forward/backward, scrub timeline, and adjust playback speed with synchronized code highlighting.
6. **Live User Input**: Type custom input arrays and re-run the animation in real-time.
7. **Progress Persistence**: Checkboxes remember solved problems across browser sessions using `localStorage`.

---

## 📄 License
MIT License. Free to use, adapt, and deploy.

