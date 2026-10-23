const fs = require('fs');
const path = require('path');
const vm = require('vm');

const langs = ['javascript', 'python', 'java', 'cpp'];
const languagesDir = path.join(__dirname, '..', 'data', 'languages');

for (const lang of langs) {
  const langDir = path.join(languagesDir, lang);
  const files = fs.readdirSync(langDir).filter(f => f.endsWith('.js') && f !== 'meta.js');

  for (const file of files) {
    const filePath = path.join(langDir, file);
    const sandbox = { window: {} };
    vm.createContext(sandbox);
    vm.runInContext(fs.readFileSync(filePath, 'utf-8'), sandbox);

    const topicKey = file.replace('.js', '');
    const qList = (sandbox.window.DSA_LANG_CODE && sandbox.window.DSA_LANG_CODE[lang] && sandbox.window.DSA_LANG_CODE[lang][topicKey]) || [];

    qList.forEach(q => {
      const codeTags = new Set((q.code || []).map(l => l.tag));
      const filtered = {};
      for (const t in (q.explanations || {})) {
        if (codeTags.has(t)) {
          filtered[t] = q.explanations[t];
        }
      }
      codeTags.forEach(t => {
        if (!filtered[t]) {
          filtered[t] = `Executes tagged statement [${t}] in ${lang}.`;
        }
      });
      q.explanations = filtered;
    });

    const newContent = `/**
 * SynapseCS Language-Specific Implementation: ${lang.toUpperCase()} - ${topicKey}
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['${lang}'] = window.DSA_LANG_CODE['${lang}'] || {};
  window.DSA_LANG_CODE['${lang}']['${topicKey}'] = ${JSON.stringify(qList, null, 2)};
})(typeof window !== 'undefined' ? window : global);
`;
    fs.writeFileSync(filePath, newContent, 'utf-8');
  }
}
console.log('Successfully aligned tags across all languages!');
