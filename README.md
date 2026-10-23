# SynapseCS | Interactive Computer Science Learning Lab

SynapseCS is a production-ready, interactive web application engineered to teach multiple core Computer Science disciplines through real-time physical mental models, simulated hardware memory layouts, audio frequency sonification, and multi-language Rosetta Stone code synchronization.

---

## 🚀 Live Demo & Canvas Preview

The platform is built as a zero-dependency, self-contained single-page application (`index.html` / `synapse_cs.html`). You can preview it immediately in the side Canvas panel or open `index.html` in any modern web browser.

---

## 🌟 Key Features & Pedagogical Architecture

### 1. Data Structures & Memory Pointer Visualizer
- **Supported Data Structures**: Singly Linked List, Doubly Linked List, Stack & Queue, Binary Search Tree (BST), Binary Heap (Min/Max Heap), Hash Table (Chaining vs Open Addressing), Graph (BFS/DFS), and Trie (Prefix Tree).
- **Physical Memory Model**: Nodes display simulated 64-bit hexadecimal heap addresses (`0x1000`, `0x1020`), null terminator indicators, and pointer re-linking animations.
- **Multi-Language Rosetta Stone**: Side-by-side idiomatic implementations and memory semantics across 6 languages:
  - **C++**: Raw pointers (`Node*`), heap allocations (`new`/`delete`), smart pointers, and cache characteristics.
  - **Python**: Dynamic object references, `PyObject` header overhead, and `collections.deque` mechanics.
  - **Java**: Managed heap references, JVM GC behavior, and `ArrayDeque`/`TreeMap` Red-Black treeification.
  - **JavaScript / TypeScript**: V8 hidden classes (`Shapes`) and pointer-hopping performance.
  - **Rust**: `Option<Box<Node>>`, compile-time borrow checker rules, and ownership mechanics.
  - **Go**: Struct pointers (`*Node`), slice backing arrays, and escape analysis.
- **Systems Context**: Real-world kernel and production architecture citations (e.g., Linux kernel intrusive lists, Git DAGs, Redis skip lists, database B-trees).

### 2. Algorithms Arena (Sorting Duel & Pathfinding)
- **Sorting Duel**: Race two sorting algorithms head-to-head (QuickSort, MergeSort, HeapSort, InsertionSort, BubbleSort) on identical data arrays.
- **Audio Sonification**: Web Audio API generates distinct frequency pitch tones mapped to bar heights during comparisons and swaps.
- **Interactive Pathfinding**: 20×12 interactive grid supporting A* (Manhattan heuristic), Dijkstra, BFS, and DFS with obstacle drawing, random maze generation, and optimal path reconstruction.

### 3. Computer Architecture & Memory Hierarchy
- **CPU Cache Latency Ladder**: Realistic nanosecond scale visualizer comparing Registers (0.5 ns), L1 (1 ns), L2 (4 ns), L3 (15 ns), and RAM (100 ns).
- **Memory Traversal Simulator**: Compare sequential access (contiguous cache line prefetching) vs random access (pointer chasing / cache thrashing).
- **Interactive 8-Bit Register**: Click individual bits to toggle and observe real-time conversions between Unsigned `uint8`, Signed Two's Complement `int8`, Hexadecimal, and ASCII, with bitwise shift (`<<`, `>>`) and `NOT` operations.
- **Endianness Visualizer**: Little-Endian (x86/ARM) vs Big-Endian (Network Byte Order) byte arrangement in memory.

### 4. Operating Systems Process Scheduler
- **Process Table & Scheduler Policies**: Simulate Round Robin (with dynamic time quantum), First-Come First-Served (FCFS), Shortest Job First (SJF), and Priority Scheduling.
- **Dynamic Gantt Chart**: Visual execution timeline with CPU utilization, average waiting time, and average turnaround time calculations.

### 5. Bug Hunter (Active Assessment)
- Scenario-based diagnostic questions testing pointer safety, cache locality, hash collisions, tree balance degeneration, and kernel context-switch overhead with instant explanatory feedback.

---

## 📦 How to Deploy

Because SynapseCS requires **zero build steps** and no server backend, deployment takes less than 60 seconds:

### Option A: Vercel
1. Install the Vercel CLI (`npm i -g vercel`) or visit [vercel.com](https://vercel.com).
2. Run `vercel` inside the folder containing `index.html`.
3. Your site is instantly deployed with global CDN distribution and SSL.

### Option B: Netlify Drop (Drag & Drop)
1. Navigate to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the folder containing `index.html` (or upload `synapse_cs_deployable.zip`).
3. Netlify will assign a live URL immediately.

### Option C: GitHub Pages
1. Push `index.html` and `README.md` to a GitHub repository (e.g. `your-username/synapse-cs`).
2. Go to **Settings** → **Pages** → Source: **Deploy from a branch** (`main` / root).
3. Live in 1-2 minutes at `https://your-username.github.io/synapse-cs/`.

---

## 🛠 Extending SynapseCS

To add additional CS topics or subjects (e.g. Computer Networks, Cryptography, Database Query Engines):

1. **Add a Nav Tab**: Add a button inside `<nav>` in the top header with `onclick="switchSubject('your-topic')"`.
2. **Add a Section View**: Create `<section id="section-your-topic" class="space-y-6 hidden">`.
3. **Add Routing State**: Add `'your-topic'` to the array in `switchSubject(subject)` in the `<script>` tag.
4. **Data Structures**: Add new entries to `const dsDatabase = { ... }` with language code snippets and complexity metadata.

---

## 📄 License
MIT License. Free to use, adapt, and deploy.
