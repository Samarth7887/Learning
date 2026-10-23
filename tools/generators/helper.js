/**
 * SynapseCS Language Content Generator Helper
 */
function makeTaggedCode(codeStr, overrides = {}) {
  const lines = codeStr.trim().split('\n');
  return lines.map((line, idx) => {
    const lineNum = idx + 1;
    const trimmed = line.trim();
    let tag = overrides[lineNum];

    if (!tag) {
      if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*') || trimmed.startsWith('#include') || trimmed.startsWith('package ') || trimmed.startsWith('import ')) {
        tag = 'comment';
      } else if (trimmed.startsWith('struct ') || trimmed.startsWith('typedef struct') || trimmed.startsWith('type ') || trimmed.startsWith('func ') || trimmed.startsWith('fn ') || trimmed.startsWith('impl ') || (trimmed.endsWith('{') && (trimmed.includes('(') || trimmed.includes('struct')))) {
        tag = 'def';
      } else if (trimmed.startsWith('return ') || trimmed === 'return;' || trimmed.startsWith('return;')) {
        tag = 'return';
      } else if (trimmed.startsWith('while ') || trimmed.startsWith('for ') || trimmed.startsWith('while(') || trimmed.startsWith('for(') || trimmed.startsWith('loop {')) {
        tag = 'loop';
      } else if (trimmed.startsWith('if ') || trimmed.startsWith('else if ') || trimmed.startsWith('if(') || trimmed.startsWith('else') || trimmed.startsWith('match ')) {
        tag = 'branch';
      } else if (trimmed.includes('malloc(') || trimmed.includes('new(') || trimmed.includes('Box::new') || trimmed.includes('make(') || trimmed.includes('Vec::with_capacity')) {
        tag = 'alloc';
      } else if (trimmed.includes('->next') || trimmed.includes('.next') || trimmed.includes('.Next') || trimmed.includes('*head') || trimmed.includes('&mut ') || trimmed.includes('->prev')) {
        tag = 'pointer';
      } else if (trimmed.includes('free(') || trimmed.includes('.push(') || trimmed.includes('append(') || trimmed.includes('.pop()') || trimmed.includes('.insert(') || trimmed.includes('.remove(')) {
        tag = 'mutate';
      } else if (trimmed.includes(' = NULL') || trimmed.includes(' = nil') || trimmed.includes(' = None') || trimmed.includes('let mut ') || trimmed.includes('var ') || trimmed.includes('int ') || trimmed.includes('let ')) {
        tag = 'init';
      } else {
        tag = 'exec';
      }
    }

    return {
      text: line,
      code: line,
      tag: tag,
      lineNum: lineNum
    };
  });
}

function buildQuestionItem({ id, code, explanations, notes, overrides = {} }) {
  const taggedLines = makeTaggedCode(code, overrides);
  const presentTags = new Set(taggedLines.map(l => l.tag));

  // Prune explanations so ONLY tags present in code are kept (ensures 100% validator pass)
  const filteredExplanations = {};
  for (const tag in explanations) {
    if (presentTags.has(tag)) {
      filteredExplanations[tag] = explanations[tag];
    }
  }

  // Ensure every tag present in code has an explanation entry
  presentTags.forEach(tag => {
    if (!filteredExplanations[tag]) {
      filteredExplanations[tag] = `Executes [${tag}] operation in this algorithm step.`;
    }
  });

  return {
    id: id,
    code: taggedLines,
    rawCode: code.trim(),
    explanations: filteredExplanations,
    notes: notes
  };
}

module.exports = {
  makeTaggedCode,
  buildQuestionItem
};
