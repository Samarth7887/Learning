# SynapseCS - Codebase Audit & Modernization Blueprint

**Audit Date:** October 2026  
**Auditor:** Senior Full-Stack Engineer & CS Educator  
**Project:** SynapseCS (Interactive Data Structures & Algorithms Lab)

---

## 1. What Exists

The codebase originally consisted of a monolithic single-page application and its exact clones:

| File | Status | Hash / Description |
| :--- | :--- | :--- |
| `index.html` | **Canonical App** | ~163 KB monolithic HTML file containing Tailwind CDN, custom CSS variables/tokens, inline SVG animations, complete DOM trees for both Landing Page and Workspace, and ~1,700 lines of inline JavaScript. |
| `synapse_cs.html` | **Exact Duplicate** | Identical SHA256 checksum to `index.html`. Created as a standalone deployment alias. |
| `lab.html` | **Exact Duplicate** | Identical SHA256 checksum to `index.html`. Created as a lab route alias. |
| `landing.html` | **Exact Duplicate** | Identical SHA256 checksum to `index.html`. Created as a preview route alias. |
| `synapse_cs_deployable (3).zip` | **Archive** | Compressed snapshot of the files above. |
| `README.md` | **Documentation** | High-level summary of features and theoretical concepts. |

### Functional Capabilities Already Present
1. **Physical Memory Model**: Visual node allocation with simulated 64-bit hexadecimal addresses (`0x7F10`, `0x1000`), animated SVG Bezier pointer links, and live RAM hex map.
2. **Rosetta Stone Concept**: Multi-language code viewers showing language-specific memory semantics across C, C++, Rust, Python, Java, Go, and TypeScript.
3. **Web Audio Synthesizer**: Pitch sonification for algorithms and operations using browser `AudioContext`.
4. **Hardware Telemetry**: Simulated CPU cache latency ladder (L1/L2/L3/RAM) and 8-bit register ALU bit toggling.

---

## 2. What Is Broken, Duplicated, or Limiting

1. **Monolithic Anti-Pattern**: All styles, layouts, data structures, and algorithms were hardcoded into a single HTML file. Adding or updating a single problem or topic required surgical edits across thousands of lines of intertwined DOM and JS.
2. **File Duplication**: `lab.html`, `landing.html`, and `synapse_cs.html` duplicate `index.html` completely, causing divergence risk.
3. **Double-Click / Local Disk Constraint (`file://`)**: 
   - Non-technical learners open the app by double-clicking `index.html`.
   - Modern browser security blocks `fetch()` and ES module `import`/`export` across `file://` URIs due to CORS.
   - **Resolution**: Use classic `<script>` tags that register each topic into a global namespace `window.DSA_TOPICS = window.DSA_TOPICS || {}`.
4. **Hardcoded Animation Logic**: Previous animations were tied to bespoke DOM manipulation functions (`renderStage()`, `stepHistory()`). There was no universal, data-driven animation engine capable of stepping through arbitrary algorithms step-by-step.
5. **No Structured DSA Curriculum**: The original app only had interactive playground mutations for 10 basic structures without graded problems, difficulty badges, LeetCode references, multi-approach analysis (Brute Force, Better, Optimal), or line-by-line beginner explanations.

---

## 3. What to Keep & Elevate

* **Tactile Design System & Aesthetics**: Keep the Dark Cyber Precision (`#080a0f`), Archive Studio (`#f8fafc`), and Obsidian Matrix palettes, subtle glassmorphic toolbars, crisp borders, and clean typography (`Plus Jakarta Sans` and `JetBrains Mono`).
* **Hardware Memory Address Visualization**: Retain 64-bit hex pointers, memory layout boxes, and animated pointer link transitions.
* **Rosetta Stone Multi-Language Synchronizer**: Expand to 4 primary coding interview languages: **Python, Java, C++, and JavaScript**, with synchronized line highlighting.
* **Beginner-Friendly Pedagogical Tone**: Plain-English explanations for every line of code without unexplained jargon.

---

## 4. Target Architecture & Folder Structure

```
Learning/
├── index.html                  # Clean application shell (Navigation, Sidebar, Problem view, Animation canvas)
├── AUDIT.md                    # This audit and architectural plan
├── TESTS.md                    # Automated verification report of all code solutions
├── README.md                   # User guide and curriculum progress overview
├── css/
│   └── styles.css              # Consolidated stylesheet (tokens, layout, components, code & animation themes)
├── js/
│   ├── app.js                  # Main UI controller (router, accordion dropdowns, search, filter, progress persistence)
│   └── animator.js             # Reusable data-driven animation engine (steps, scrubber, custom inputs, multi-renderer)
└── data/
    └── topics/
        ├── linked-list.js      # Linked List topic (Basics + Easy/Medium/Hard classic problems)
        ├── stack.js            # Stack topic (Basics + Easy/Medium/Hard classic problems)
        └── ...                 # Modular topic files for subsequent phases
```

### Global Data Registry Pattern
Each topic file in `/data/topics/*.js` registers itself onto `window.DSA_TOPICS`:
```javascript
window.DSA_TOPICS = window.DSA_TOPICS || {};
window.DSA_TOPICS['linked-list'] = {
  id: 'linked-list',
  title: 'Linked List',
  description: '...',
  subtopics: [ ... ],
  questions: [ ... ]
};
```
This guarantees zero build step, instant local double-click execution, and clean separation where adding a problem requires editing only one topic data file.
