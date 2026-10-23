/**
 * SynapseCS - Binary Trees & BST Algorithmic Tracers
 * Reference implementations with deep-cloned execution steps.
 */

(function(window) {
  'use strict';

  const Tracers = window.Tracers = window.Tracers || {};
  const Tracer = window.Tracer;

  // 1. tree-node-create
  Tracers['tree-node-create'] = function() {
    const t = new Tracer('tree');

    t.step({
      tag: 'root',
      description: 'Allocate root node with value 1.',
      state: { type: 'tree', tree: [1] },
      pointers: { root: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'left',
      description: 'Allocate left child node with value 2. Link root.left = 2.',
      state: { type: 'tree', tree: [1, 2] },
      pointers: { root: 0, left: 1 },
      highlights: [1]
    });

    t.step({
      tag: 'right',
      description: 'Allocate right child node with value 3. Link root.right = 3. Binary tree initialized.',
      state: { type: 'tree', tree: [1, 2, 3] },
      pointers: { root: 0, right: 2 },
      highlights: [0, 1, 2]
    });

    return t.getSteps();
  };

  // 2. tree-inorder-traversal
  Tracers['tree-inorder-traversal'] = function() {
    const t = new Tracer('tree');

    t.step({
      tag: 'traverse_left',
      description: 'Inorder (Left -> Root -> Right): Recurse to leftmost leaf node (val 4).',
      state: { type: 'tree', tree: [1, 2, 3, 4, 5] },
      pointers: { curr: 3 },
      highlights: [3]
    });

    t.step({
      tag: 'visit_root',
      description: 'Visit subtree root (val 2), then right child (val 5). Output so far: [4, 2, 5].',
      state: { type: 'tree', tree: [1, 2, 3, 4, 5] },
      pointers: { curr: 1 },
      highlights: [1, 4]
    });

    t.step({
      tag: 'visit_main_root',
      description: 'Visit tree root (val 1) and right child (val 3). Complete Inorder: [4, 2, 5, 1, 3].',
      state: { type: 'tree', tree: [1, 2, 3, 4, 5] },
      pointers: { curr: 0 },
      highlights: [0, 2]
    });

    return t.getSteps();
  };

  // 3. tree-level-order
  Tracers['tree-level-order'] = function() {
    const t = new Tracer('tree');

    t.step({
      tag: 'level1',
      description: 'Level 1: BFS Queue dequeues root node [3]. Output: [[3]].',
      state: { type: 'tree', tree: [3, 9, 20, null, null, 15, 7] },
      pointers: { level: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'level2',
      description: 'Level 2: Queue processes children [9, 20]. Output: [[3], [9, 20]].',
      state: { type: 'tree', tree: [3, 9, 20, null, null, 15, 7] },
      pointers: { level: 1 },
      highlights: [1, 2]
    });

    t.step({
      tag: 'level3',
      description: 'Level 3: Queue processes leaves [15, 7]. Final output: [[3], [9, 20], [15, 7]].',
      state: { type: 'tree', tree: [3, 9, 20, null, null, 15, 7] },
      pointers: { level: 5 },
      highlights: [5, 6]
    });

    return t.getSteps();
  };

  // 4. tree-max-depth
  Tracers['tree-max-depth'] = function() {
    const t = new Tracer('tree');

    t.step({
      tag: 'recurse',
      description: 'MaxDepth(root) = 1 + max(MaxDepth(left), MaxDepth(right)).',
      state: { type: 'tree', tree: [3, 9, 20, null, null, 15, 7] },
      pointers: { root: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'left_depth',
      description: 'Left subtree (node 9) has depth 1.',
      state: { type: 'tree', tree: [3, 9, 20, null, null, 15, 7] },
      pointers: { leftBranch: 1 },
      highlights: [1]
    });

    t.step({
      tag: 'max_depth',
      description: 'Right subtree has depth 2. Total tree maximum depth = 1 + 2 = 3.',
      state: { type: 'tree', tree: [3, 9, 20, null, null, 15, 7] },
      pointers: { maxLeaf: 5 },
      highlights: [0, 2, 5]
    });

    return t.getSteps();
  };

  // 5. tree-invert
  Tracers['tree-invert'] = function() {
    const t = new Tracer('tree');

    t.step({
      tag: 'before',
      description: 'Original Binary Tree: root 4, left child 2, right child 7.',
      state: { type: 'tree', tree: [4, 2, 7, 1, 3, 6, 9] },
      pointers: { root: 0 },
      highlights: [0, 1, 2]
    });

    t.step({
      tag: 'swap',
      description: 'Swap left and right children recursively: root.left = 7, root.right = 2. Tree inverted!',
      state: { type: 'tree', tree: [4, 7, 2, 9, 6, 3, 1] },
      pointers: { root: 0 },
      highlights: [0, 1, 2, 3, 4, 5, 6]
    });

    return t.getSteps();
  };

  // 6. tree-validate-bst
  Tracers['tree-validate-bst'] = function() {
    const t = new Tracer('tree');

    t.step({
      tag: 'root',
      description: 'Validate root 2 with bounds (-∞, +∞). Valid BST node.',
      state: { type: 'tree', tree: [2, 1, 3] },
      pointers: { curr: 0 },
      highlights: [0]
    });

    t.step({
      tag: 'left',
      description: 'Check left child 1: satisfies (-∞, 2). Valid BST node.',
      state: { type: 'tree', tree: [2, 1, 3] },
      pointers: { curr: 1 },
      highlights: [1]
    });

    t.step({
      tag: 'right',
      description: 'Check right child 3: satisfies (2, +∞). All nodes strictly valid BST!',
      state: { type: 'tree', tree: [2, 1, 3] },
      pointers: { curr: 2 },
      highlights: [0, 1, 2]
    });

    return t.getSteps();
  };

  // 7. tree-lca-bst
  Tracers['tree-lca-bst'] = function() {
    const t = new Tracer('tree');

    t.step({
      tag: 'split',
      description: 'LCA for p=2 and q=8: at root 6, 2 < 6 and 8 > 6. Pointers diverge here, so LCA is root 6!',
      state: { type: 'tree', tree: [6, 2, 8, 0, 4, 7, 9] },
      pointers: { lca: 0 },
      highlights: [0, 1, 2]
    });

    return t.getSteps();
  };

})(typeof window !== 'undefined' ? window : global);
