# SynapseCS Language Content & Unlock Rule Audit (LANGUAGE_AUDIT.md)

**Audit Timestamp:** 2026-10-23T18:25:00Z  
**Target Directory:** `/data/languages/`  
**Total Catalog Questions:** 62 questions across 6 core topics

---

## 📊 1. Language Content Audit Summary

| Language | Folder | Available Flag in `meta.js` | Topic Code Files Present | Questions with Code | Total Line Explanations | Status | Root Cause for Locked State |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **JavaScript** | `data/languages/javascript/` | `true` | 6 / 6 | **62 / 62** | 374 | 🟢 **Unlocked** | Fully implemented and unlocked. |
| **Python** | `data/languages/python/` | `true` | 6 / 6 | **62 / 62** | 374 | 🟢 **Unlocked** | Fully implemented and unlocked. |
| **Java** | `data/languages/java/` | `true` | 6 / 6 | **62 / 62** | 374 | 🟢 **Unlocked** | Fully implemented and unlocked. |
| **C++** | `data/languages/cpp/` | `true` | 6 / 6 | **62 / 62** | 374 | 🟢 **Unlocked** | Fully implemented and unlocked. |
| **C** | `data/languages/c/` | `false` | 0 / 6 | **0 / 62** | 0 | 🔴 **Locked** | 1. Missing all 6 topic code files (`arrays-strings.js`, `linked-list.js`, `stack.js`, `queue.js`, `hashing.js`, `trees.js`).<br>2. Hardcoded `available: false` in `c/meta.js`.<br>3. Hardcoded "Locked" / "Scaffolded syntax preview" in `LanguageCard`. |
| **Go** | `data/languages/go/` | `false` | 0 / 6 | **0 / 62** | 0 | 🔴 **Locked** | 1. Missing all 6 topic code files.<br>2. Hardcoded `available: false` in `go/meta.js`.<br>3. Hardcoded "Locked" / "Scaffolded syntax preview" in `LanguageCard`. |
| **Rust** | `data/languages/rust/` | `false` | 0 / 6 | **0 / 62** | 0 | 🔴 **Locked** | 1. Missing all 6 topic code files.<br>2. Hardcoded `available: false` in `rust/meta.js`.<br>3. Hardcoded "Locked" / "Scaffolded syntax preview" in `LanguageCard`. |

---

## 🔍 2. Audit of Picker Unlock Rules & Hardcoded Limitations

1. **Hardcoded Flag Dependency (`lang.available`):**
   - In `js/components.js`, `LanguageCard` currently determines unlock status via:
     ```javascript
     const isAvail = lang.available;
     ```
   - In `js/app.js`, `renderLanguagesPicker` currently calculates available questions via:
     ```javascript
     let qCount = 0;
     if (lang.available) {
       for (const tKey in this.catalog) {
         qCount += (this.catalog[tKey].questions || []).length;
       }
     }
     ```
   - *Defect:* Even if content exists or changes, languages with `available: false` in `meta.js` are forced locked. Conversely, question counts were assumed rather than verified against `window.DSA_LANG_CODE`.

2. **Hardcoded UI Placeholders in Card Component:**
   - In `js/components.js`, the card footer displays:
     ```javascript
     ${isAvail ? `${questionCount} questions available` : 'Scaffolded syntax preview'}
     ${isAvail ? 'Select Language →' : 'Locked'}
     ```
   - *Defect:* Non-dynamic text placeholders instead of showing real data counts.

3. **Required Automatic Unlock Rule (Spec Alignment):**
   - A language must unlock **automatically** when it contains at least one valid question with code (`questionCount > 0`).
   - `questionCount` must be computed by counting entries in `window.DSA_LANG_CODE[lang.id]`.
   - When unlocked:
     - Uses standard Neo-Brutalist card styling (solid 2px black border, `#ffffff` card background, hard shadow).
     - Yellow button: `"SELECT LANGUAGE →"`.
     - Displays real counts: `"62 questions available / 0 solved"`.
     - Fully keyboard-focusable (`tabindex="0"`) with visible focus ring.
   - When `questionCount === 0`:
     - Renders dashed border, muted style, `"Coming Soon"`, `tabindex="-1"` (not focusable as a dead link).

---

## 📋 3. Incomplete Languages & Build Plan

To achieve full 62-question parity with JavaScript, Python, Java, and C++, the following files must be authored:

### C (`data/languages/c/`)
- `arrays-strings.js` (9 questions: pointer arithmetic, memory bounds, contiguous buffers)
- `linked-list.js` (18 questions: `malloc`, explicit pointer dereferencing, `free()`)
- `stack.js` (10 questions: struct stack, capacity doubling, dynamic array / linked list)
- `queue.js` (9 questions: circular FIFO array, linked queue, `free()` cleanup)
- `hashing.js` (9 questions: separate chaining struct nodes, hash functions, collision chains)
- `trees.js` (7 questions: binary tree structs, DFS/BFS, recursion)
- Update `meta.js` with `available: true`, GCC compile instructions (`gcc main.c -o main && ./main`).

### Go (`data/languages/go/`)
- `arrays-strings.js` (9 questions: slices, capacity, two pointers)
- `linked-list.js` (18 questions: `type ListNode struct`, pointer semantics, garbage collector)
- `stack.js` (10 questions: slice-based LIFO, top pointer, error handling)
- `queue.js` (9 questions: slice-based FIFO, front/rear indices, amortized reallocation)
- `hashing.js` (9 questions: built-in `map[K]V`, custom bucket tracking for separate chaining)
- `trees.js` (7 questions: `type TreeNode struct`, recursive traversals)
- Update `meta.js` with `available: true`, Go run instructions (`go run main.go`).

### Rust (`data/languages/rust/`)
- `arrays-strings.js` (9 questions: `Vec<T>`, slices, in-place mutability)
- `linked-list.js` (18 questions: `Option<Box<ListNode>>`, ownership, pattern matching)
- `stack.js` (10 questions: `Vec<T>` LIFO, `.push()`, `.pop()`, monotonic stack)
- `queue.js` (9 questions: `VecDeque<T>`, circular queue index wrapping)
- `hashing.js` (9 questions: `HashMap<K, V>`, custom bucket representation)
- `trees.js` (7 questions: `Rc<RefCell<TreeNode>>` or `Option<Box<TreeNode>>`)
- Update `meta.js` with `available: true`, Cargo run instructions (`cargo run`).

---

## 🛠️ 4. Compiler Verification Pre-Flight Check

Running on current host:
- `gcc.exe (MinGW.org GCC-6.3.0-1)`: **INSTALLED & VERIFIED**
- `go`: **NOT FOUND** (Instructions to be documented: install via `winget install GoLang.Go` or `golang.org`)
- `rustc`: **NOT FOUND** (Instructions to be documented: install via `rustup` from `rust-lang.org`)
