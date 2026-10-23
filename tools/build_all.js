/**
 * SynapseCS - Master Language Content Builder
 * Generates all 62 questions across all 6 topics for C, Go, and Rust.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { getArraysStringsQuestions } = require('./generators/arrays_strings');
const { getHashingQuestions } = require('./generators/hashing');
const { getLinkedListQuestions } = require('./generators/linked_list');
const { getQueueQuestions } = require('./generators/queue');
const { getStackQuestions } = require('./generators/stack');
const { getTreesQuestions } = require('./generators/trees');

const workspaceDir = path.resolve(__dirname, '..');
const languagesDir = path.join(workspaceDir, 'data', 'languages');

const topicsData = {
  'arrays-strings': getArraysStringsQuestions(),
  'hashing': getHashingQuestions(),
  'linked-list': getLinkedListQuestions(),
  'queue': getQueueQuestions(),
  'stack': getStackQuestions(),
  'trees': getTreesQuestions()
};

const languages = ['c', 'go', 'rust'];

console.log('Building language topics for C, Go, and Rust...');

languages.forEach(lang => {
  const langDir = path.join(languagesDir, lang);
  if (!fs.existsSync(langDir)) fs.mkdirSync(langDir, { recursive: true });

  let totalQuestions = 0;
  for (const topicKey in topicsData) {
    const qList = topicsData[topicKey][lang] || [];
    totalQuestions += qList.length;

    const fileContent = `/**
 * SynapseCS Language-Specific Implementation: ${lang.toUpperCase()} - ${topicKey}
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['${lang}'] = window.DSA_LANG_CODE['${lang}'] || {};
  window.DSA_LANG_CODE['${lang}']['${topicKey}'] = ${JSON.stringify(qList, null, 2)};
})(typeof window !== 'undefined' ? window : global);
`;

    fs.writeFileSync(path.join(langDir, `${topicKey}.js`), fileContent, 'utf-8');
    console.log(` • [${lang}] Wrote ${qList.length} questions to ${topicKey}.js`);
  }
  console.log(` => Total ${lang} questions: ${totalQuestions}/62`);
});

// Update meta.js for C, Go, and Rust to set available: true
const metaConfigs = {
  c: {
    id: 'c',
    name: 'C',
    icon: 'logos:c',
    extension: '.c',
    color: '#a8b9cc',
    available: true,
    description: "Manual heap management, raw pointer arithmetic, and bare-metal performance.",
    helloWorld: {
      code: "#include <stdio.h>\\n\\nint main() {\\n    printf(\\\"Hello, SynapseCS!\\\\n\\\");\\n    return 0;\\n}",
      howToRun: "gcc main.c -o main && ./main"
    }
  },
  go: {
    id: 'go',
    name: 'Go',
    icon: 'logos:go',
    extension: '.go',
    color: '#00add8',
    available: true,
    description: "Simple, blazing-fast concurrent language with lightweight goroutines and garbage collection.",
    helloWorld: {
      code: "package main\\nimport \\\"fmt\\\"\\n\\nfunc main() {\\n    fmt.Println(\\\"Hello, SynapseCS!\\\")\\n}",
      howToRun: "go run main.go"
    }
  },
  rust: {
    id: 'rust',
    name: 'Rust',
    icon: 'logos:rust',
    extension: '.rs',
    color: '#dea584',
    available: true,
    description: "Fearless concurrency and guaranteed memory safety without garbage collection via ownership & borrow checker.",
    helloWorld: {
      code: "fn main() {\\n    println!(\\\"Hello, SynapseCS!\\\");\\n}",
      howToRun: "cargo run (or rustc main.rs && ./main)"
    }
  }
};

for (const lang of languages) {
  const meta = metaConfigs[lang];
  const metaContent = `/**
 * SynapseCS Language Metadata: ${meta.name}
 */
(function(window) {
  'use strict';
  window.DSA_LANG_META = window.DSA_LANG_META || {};
  window.DSA_LANG_META['${lang}'] = ${JSON.stringify(meta, null, 2)};
})(typeof window !== 'undefined' ? window : global);
`;
  fs.writeFileSync(path.join(languagesDir, lang, 'meta.js'), metaContent, 'utf-8');
  console.log(` • Updated data/languages/${lang}/meta.js with available: true`);
}

console.log('\\nAll files written successfully!');
