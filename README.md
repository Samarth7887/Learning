# SynapseCS | Complete Interactive Data Structures & Algorithms Lab

SynapseCS is an interactive, zero-build Data Structures & Algorithms (DSA) learning application engineered to teach CS fundamentals through real-time memory-address mental models, multi-language code synchronization (Python, Java, C++, JavaScript), line-by-line beginner explanations, dynamic algorithmic tracers, and a universal animation engine.

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

### Diagnostic Self-Test
Open `debug.html` or run `node tools/validate.js` to inspect all 62 questions and tracers.

---

## 🏗 Modular, Data-Driven Architecture

The codebase follows a decoupled, data-driven Neo-Brutalist architecture:

```text
├── index.html                  # Neo-Brutalist single-page shell (Home, Languages, Topics, Progress, 404)
├── debug.html                  # Automated self-test harness verifying all animation steps & renderers
├── css/
│   └── styles.css              # Neo-Brutalist design tokens (#ffe17c, #171e19, #b7c6c2), hard shadows & tactile CSS
├── js/
│   ├── components.js           # Reusable HTML component factory (Navbar, LanguageCard, TopicCard, etc.)
│   ├── app.js                  # Hash router (#/languages, #/learn/:lang), state controller & keyboard navigation
│   ├── animator.js             # Universal step-driven animation engine with CONTRACTS validation
│   ├── renderers/
│   │   └── CONTRACTS.md        # Formal data contracts for all 12 visualizer data structure renderers
│   └── tracers/                # Executable algorithmic reference tracers generating validated snapshots
│       ├── tracer-core.js      # Tracer base class (immutable deep-cloning, step recording)
│       ├── linked-list.js      # Reference tracers for 18 linked list questions
│       ├── stack.js            # Reference tracers for 10 stack questions
│       ├── queue.js            # Reference tracers for 9 queue questions
│       ├── arrays-strings.js   # Reference tracers for 9 array & string questions
│       ├── hashing.js          # Reference tracers for 9 hash table questions
│       └── trees.js            # Reference tracers for 7 binary tree & BST questions
├── data/
│   ├── questions/              # Language-neutral question catalog (statements, examples, complexities, tracer keys)
│   │   ├── arrays-strings.js
│   │   ├── linked-list.js
│   │   ├── stack.js
│   │   ├── queue.js
│   │   ├── hashing.js
│   │   └── trees.js
│   └── languages/              # Language-specific code implementations, line tags & idiomatic notes
│       ├── python/             # (meta.js, topic code files)
│       ├── java/               # (meta.js, topic code files)
│       ├── cpp/                # (meta.js, topic code files)
│       ├── javascript/         # (meta.js, topic code files)
│       ├── c/                  # (meta.js, coming soon)
│       ├── go/                 # (meta.js, coming soon)
│       └── rust/               # (meta.js, coming soon)
├── tools/
│   ├── validate.js             # Plain Node test suite (contracts, tracers, parity, code parsing)
│   └── migrate.js              # Data extraction & code tagging migration tool
├── ANIMATION_REPORT.md         # Diagnostic report with 100% pass verification (62/62)
├── CHANGES.md                  # Detailed plain-English summary of architectural upgrades
├── AUDIT.md                    # Technical debt audit & file redundancy report
├── TESTS.md                    # Test harness report verifying 100% passing solutions (62/62)
└── README.md                   # Project overview & documentation
```

---

## 🌐 How to Add a New Programming Language

Adding a new programming language requires **zero UI changes**:

1. Create a directory in `data/languages/<lang_id>/` (e.g., `data/languages/go/`).
2. Add `meta.js` defining language details and a Hello World quickstart:
```javascript
window.DSA_LANG_META['go'] = {
  id: 'go',
  name: 'Go',
  icon: 'logos:go',
  extension: '.go',
  color: '#00add8',
  available: true,
  description: 'Fast, concurrent, compiled language with lightweight goroutines.',
  helloWorld: {
    code: 'package main\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, SynapseCS!")\n}',
    howToRun: 'go run main.go'
  }
};
```
3. Add topic files in `data/languages/<lang_id>/<topic>.js` containing tagged lines:
```javascript
window.DSA_LANG_CODE['go']['linked-list'] = [
  {
    id: 'll-reverse',
    code: [
      { text: 'func reverseList(head *ListNode) *ListNode {', tag: 'def' },
      { text: '    var prev *ListNode', tag: 'init' },
      { text: '    curr := head', tag: 'init' },
      ...
    ],
    explanations: {
      'init': 'Initialize prev pointer to nil and curr pointer to head.',
      'flip': 'Point curr.Next backwards to prev.',
      'return': 'Return prev as updated head pointer.'
    },
    notes: 'In Go, pointer mechanics use explicit asterisks and nil pointers without pointer arithmetic.'
  }
];
```
4. Include the scripts in `index.html`. The Language Picker automatically generates a card with real question counts.

---

## ❓ How to Add a New Question

1. **Add Language-Neutral Metadata:**  
   In `data/questions/<topic>.js`, add the question object:
   ```javascript
   {
     id: "my-question",
     title: "My New Question",
     difficulty: "Medium",
     description: "Problem statement...",
     constraints: "1 <= N <= 10^5",
     examples: [{ input: "[1, 2, 3]", output: "[3, 2, 1]" }],
     approach: { name: "Optimal Two Pointers", timeComplexity: "O(N)", spaceComplexity: "O(1)" },
     tracer: "my-question",
     sampleInput: [1, 2, 3]
   }
   ```

2. **Add Algorithmic Reference Tracer:**  
   In `js/tracers/<topic>.js`, write the executable reference algorithm:
   ```javascript
   Tracers['my-question'] = function(input) {
     const t = new Tracer('array');
     t.step({
       tag: 'init',
       description: 'Initialize pointers at array boundaries.',
       state: { type: 'array', array: [...input] },
       pointers: { left: 0, right: input.length - 1 }
     });
     // execute algorithm and record steps...
     return t.getSteps();
   };
   ```

3. **Add Language Code Implementations:**  
   In `data/languages/<lang>/<topic>.js`, add the tagged lines and explanations for each supported language.

4. **Verify:**  
   Run `node tools/validate.js` to ensure 100% pass across contracts, tracers, and syntax parsing.

---

## 🧪 How to Run Tests

### Command Line Verification (Node.js)
```bash
node tools/validate.js
```
Checks:
- All 62 questions and animation state contracts
- Pointer bounds and non-empty steps
- 100% ID parity across question catalogs and language tracks
- Real code sample parsing via `ast.parse` (Python) and `vm.Script` (JavaScript)
- Compiler availability checks for Java (`javac`), C++ (`g++`), C (`gcc`), Go, and Rust

### In-Browser Diagnostic Self-Test
Open `debug.html` in any browser or visit `http://localhost:3000/debug.html`. It simulates each animation from start to finish with live status badges.

---

## 📊 Topic & Question Progress Checklist

| Phase | Topic | Questions | Status | Key Highlights |
| :--- | :--- | :---: | :---: | :--- |
| **Phase 1** | **Linked List** | 18 | ✅ **Complete** | 11 Basics (Node, insert/delete head/tail/kth, search, traverse, update, size) + 7 Classics (Reverse, Cycle, Merge, Middle, Nth from end, Palindrome, LRU Cache) |
| **Phase 1** | **Stack** | 10 | ✅ **Complete** | Array & LL implementations, Valid Parentheses, Min Stack, Monotonic Stack (NGE, Daily Temps), RPN, Queue using Stacks, Largest Rectangle |
| **Phase 2** | **Arrays & Strings** | 9 | ✅ **Complete** | Memory layout, 3-reversal rotation, Two Sum II, Most Water, Longest Substring, Trapping Rain Water, Kadane's algorithm, Product Except Self, Merge Intervals |
| **Phase 2** | **Queue & Deque** | 9 | ✅ **Complete** | Array queue, Linked list queue, Circular Queue, Circular Deque, Stack using Queues, Sliding Window Maximum, First Unique Char, Rate Limiter, Rotting Oranges |
| **Phase 2** | **Hashing** | 9 | ✅ **Complete** | Separate Chaining HashMap, HashSet, Two Sum, Group Anagrams, Valid Anagram, Longest Consecutive Sequence, Subarray Sum = K, Nearby Duplicate, RandomizedSet O(1) |
| **Phase 2** | **Binary Trees & BST** | 7 | ✅ **Complete** | Tree Node linking, Inorder DFS, Level Order BFS, Max Depth, Invert Tree, Validate BST (Min/Max ranges), Lowest Common Ancestor (BST split) |

**Total:** 62 questions verified with 100% pass rate across Python, Java, C++, and JavaScript.
