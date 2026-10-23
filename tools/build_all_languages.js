/**
 * SynapseCS - High-Fidelity Language Content Builder for C, Go, and Rust
 * Builds complete, idiomatic 62-question implementations for C, Go, and Rust
 * with tagged code lines, genuine explanations, and language-specific notes.
 */

const fs = require('fs');
const path = require('path');

const workspaceDir = path.resolve(__dirname, '..');
const languagesDir = path.join(workspaceDir, 'data', 'languages');

// Helper to tag lines automatically with custom overrides
function createTaggedCode(codeStr, overrides = {}) {
  const lines = codeStr.trim().split('\n');
  return lines.map((line, idx) => {
    const trimmed = line.trim();
    let tag = overrides[idx + 1] || 'exec';

    if (!overrides[idx + 1]) {
      if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*') || trimmed.startsWith('#include')) {
        tag = 'comment';
      } else if (trimmed.startsWith('struct ') || trimmed.startsWith('typedef struct') || trimmed.startsWith('type ') || trimmed.includes('ListNode* ') || trimmed.includes('func ') || trimmed.startsWith('fn ') || trimmed.startsWith('impl ')) {
        tag = 'def';
      } else if (trimmed.startsWith('return ') || trimmed === 'return;' || trimmed.startsWith('return;')) {
        tag = 'return';
      } else if (trimmed.startsWith('while ') || trimmed.startsWith('for ') || trimmed.startsWith('while(') || trimmed.startsWith('for(') || trimmed.startsWith('loop {')) {
        tag = 'loop';
      } else if (trimmed.startsWith('if ') || trimmed.startsWith('else if ') || trimmed.startsWith('if(') || trimmed.startsWith('else') || trimmed.startsWith('match ')) {
        tag = 'branch';
      } else if (trimmed.includes('malloc(') || trimmed.includes('new(') || trimmed.includes('Box::new') || trimmed.includes('make(')) {
        tag = 'alloc';
      } else if (trimmed.includes('->next') || trimmed.includes('.next') || trimmed.includes('.Next') || trimmed.includes('*head') || trimmed.includes('&mut ')) {
        tag = 'pointer';
      } else if (trimmed.includes(' = NULL') || trimmed.includes(' = nil') || trimmed.includes(' = None') || trimmed.includes(' = 0') || trimmed.includes('let mut ') || trimmed.includes('var ')) {
        tag = 'init';
      } else if (trimmed.includes('free(') || trimmed.includes('.push(') || trimmed.includes('append(') || trimmed.includes('pop()')) {
        tag = 'mutate';
      }
    }

    return { text: line, tag: tag, lineNum: idx + 1 };
  });
}

function writeLangTopic(lang, topicKey, questions) {
  const targetDir = path.join(languagesDir, lang);
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

  const content = `/**
 * SynapseCS Language-Specific Implementation: ${lang.toUpperCase()} - ${topicKey}
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['${lang}'] = window.DSA_LANG_CODE['${lang}'] || {};
  window.DSA_LANG_CODE['${lang}']['${topicKey}'] = ${JSON.stringify(questions, null, 2)};
})(typeof window !== 'undefined' ? window : global);
`;

  fs.writeFileSync(path.join(targetDir, `${topicKey}.js`), content, 'utf-8');
}

module.exports = {
  createTaggedCode,
  writeLangTopic
};
