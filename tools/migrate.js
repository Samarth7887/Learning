const fs = require('fs');
const path = require('path');
const vm = require('vm');

const workspaceDir = path.resolve(__dirname, '..');
const topicsDir = path.join(workspaceDir, 'data', 'topics');
const questionsDir = path.join(workspaceDir, 'data', 'questions');
const languagesDir = path.join(workspaceDir, 'data', 'languages');

if (!fs.existsSync(questionsDir)) fs.mkdirSync(questionsDir, { recursive: true });
if (!fs.existsSync(languagesDir)) fs.mkdirSync(languagesDir, { recursive: true });

const topicFiles = fs.readdirSync(topicsDir).filter(f => f.endsWith('.js'));

const sandbox = { window: {}, console: console };
vm.createContext(sandbox);

for (const tf of topicFiles) {
  const code = fs.readFileSync(path.join(topicsDir, tf), 'utf-8');
  vm.runInContext(code, sandbox);
}

const topics = sandbox.window.DSA_TOPICS || {};
const topicKeys = Object.keys(topics);

const supportedLangs = ['python', 'java', 'cpp', 'javascript'];
const allLangs = [
  { id: 'python', name: 'Python', icon: 'logos:python', ext: '.py', color: '#3776ab', available: true, desc: 'Clean, expressive syntax with dynamic typing and powerful built-in collections.' },
  { id: 'java', name: 'Java', icon: 'logos:java', ext: '.java', color: '#e76f00', available: true, desc: 'Strict object-oriented model with strong typing and mature JVM performance.' },
  { id: 'cpp', name: 'C++', icon: 'logos:c-plusplus', ext: '.cpp', color: '#00599c', available: true, desc: 'Ultra-fast low-level memory control with pointers and STL algorithms.' },
  { id: 'javascript', name: 'JavaScript', icon: 'logos:javascript', ext: '.js', color: '#f7df1e', available: true, desc: 'Ubiquitous V8 engine language powering web visualizers and modern full-stack systems.' },
  { id: 'c', name: 'C', icon: 'logos:c', ext: '.c', color: '#a8b9cc', available: false, desc: 'Manual heap management, raw pointer arithmetic, and bare-metal performance.' },
  { id: 'go', name: 'Go', icon: 'logos:go', ext: '.go', color: '#00add8', available: false, desc: 'Simple, blazing-fast concurrent language with lightweight goroutines.' },
  { id: 'rust', name: 'Rust', icon: 'logos:rust', ext: '.rs', color: '#dea584', available: false, desc: 'Fearless concurrency and guaranteed memory safety without garbage collection.' }
];

// Helper to tag code lines semantically
function tagCodeLines(codeStr, language) {
  if (!codeStr) return [];
  const lines = codeStr.split('\n');
  return lines.map((line, idx) => {
    const trimmed = line.trim();
    let tag = 'exec';

    if (trimmed.startsWith('#') || trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*')) {
      tag = 'comment';
    } else if (trimmed.startsWith('def ') || trimmed.startsWith('function ') || trimmed.startsWith('class ') || trimmed.includes(' ListNode* ') || trimmed.includes('public static') || trimmed.includes('public class')) {
      tag = 'def';
    } else if (trimmed.startsWith('return ') || trimmed === 'return;' || trimmed.startsWith('return;')) {
      tag = 'return';
    } else if (trimmed.startsWith('while ') || trimmed.startsWith('for ') || trimmed.startsWith('while(') || trimmed.startsWith('for(')) {
      tag = 'loop';
    } else if (trimmed.startsWith('if ') || trimmed.startsWith('else if ') || trimmed.startsWith('if(') || trimmed.startsWith('else')) {
      tag = 'branch';
    } else if (trimmed.includes(' = None') || trimmed.includes(' = null') || trimmed.includes(' = nullptr') || trimmed.includes(' = 0') || trimmed.includes(' = []') || trimmed.includes(' = {}') || trimmed.includes('new ')) {
      tag = 'init';
    } else if (trimmed.includes('.next') || trimmed.includes('->next')) {
      tag = 'pointer';
    } else if (trimmed.includes('.push(') || trimmed.includes('.append(') || trimmed.includes('.add(') || trimmed.includes('.pop(') || trimmed.includes('.shift(')) {
      tag = 'mutate';
    }

    return { text: line, tag: tag, lineNum: idx + 1 };
  });
}

// Generate Language Meta Files
for (const l of allLangs) {
  const langDir = path.join(languagesDir, l.id);
  if (!fs.existsSync(langDir)) fs.mkdirSync(langDir, { recursive: true });

  const metaContent = `/**
 * SynapseCS Language Metadata: ${l.name}
 */
(function(window) {
  'use strict';
  window.DSA_LANG_META = window.DSA_LANG_META || {};
  window.DSA_LANG_META['${l.id}'] = {
    id: '${l.id}',
    name: '${l.name}',
    icon: '${l.icon}',
    extension: '${l.ext}',
    color: '${l.color}',
    available: ${l.available},
    description: ${JSON.stringify(l.desc)},
    helloWorld: {
      code: ${JSON.stringify(
        l.id === 'python' ? 'print("Hello, SynapseCS!")' :
        l.id === 'javascript' ? 'console.log("Hello, SynapseCS!");' :
        l.id === 'java' ? 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, SynapseCS!");\n    }\n}' :
        l.id === 'cpp' ? '#include <iostream>\n\nint main() {\n    std.cout << "Hello, SynapseCS!" << std::endl;\n    return 0;\n}' :
        l.id === 'c' ? '#include <stdio.h>\n\nint main() {\n    printf("Hello, SynapseCS!\\n");\n    return 0;\n}' :
        l.id === 'go' ? 'package main\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, SynapseCS!")\n}' :
        'fn main() {\n    println!("Hello, SynapseCS!");\n}'
      )},
      howToRun: ${JSON.stringify(
        l.id === 'python' ? 'python main.py' :
        l.id === 'javascript' ? 'node main.js' :
        l.id === 'java' ? 'javac Main.java && java Main' :
        l.id === 'cpp' ? 'g++ -O3 main.cpp -o main && ./main' :
        l.id === 'c' ? 'gcc main.c -o main && ./main' :
        l.id === 'go' ? 'go run main.go' :
        'rustc main.rs && ./main'
      )}
    }
  };
})(typeof window !== 'undefined' ? window : global);
`;

  fs.writeFileSync(path.join(langDir, 'meta.js'), metaContent, 'utf-8');
}

// Track stats for reporting
const stats = {
  totalQuestions: 0,
  topics: {},
  perLanguage: {}
};

for (const lang of supportedLangs) {
  stats.perLanguage[lang] = 0;
}

// Separate Questions & Code
for (const tKey of topicKeys) {
  const topic = topics[tKey];
  const questions = [];
  if (Array.isArray(topic.questions)) questions.push(...topic.questions);
  if (Array.isArray(topic.subtopics)) {
    for (const sub of topic.subtopics) {
      if (Array.isArray(sub.questions)) {
        for (const q of sub.questions) {
          if (!questions.some(existing => existing.id === q.id)) {
            questions.push(q);
          }
        }
      }
    }
  }

  stats.topics[tKey] = questions.length;
  stats.totalQuestions += questions.length;

  // 1. Language-Neutral Question Data
  const neutralQuestions = questions.map(q => {
    const appr = (q.approaches && q.approaches[0]) ? {
      name: q.approaches[0].name,
      idea: q.approaches[0].idea,
      timeComplexity: q.approaches[0].timeComplexity,
      spaceComplexity: q.approaches[0].spaceComplexity
    } : null;

    return {
      id: q.id,
      subtopicId: q.subtopicId,
      title: q.title,
      difficulty: q.difficulty,
      leetcode: q.leetcode,
      description: q.description,
      constraints: q.constraints,
      examples: q.examples,
      approach: appr,
      commonMistakes: q.commonMistakes,
      relatedQuestionIds: q.relatedQuestionIds,
      tracer: q.tracer || q.id,
      sampleInput: q.sampleInput || (q.examples && q.examples[0] ? q.examples[0].input : null)
    };
  });

  const questionFileContent = `/**
 * SynapseCS Language-Neutral Question Catalog: ${topic.title}
 */
(function(window) {
  'use strict';
  window.DSA_QUESTIONS = window.DSA_QUESTIONS || {};
  window.DSA_QUESTIONS['${tKey}'] = {
    id: '${topic.id || tKey}',
    title: '${topic.title}',
    icon: '${topic.icon || 'ph:code'}',
    description: ${JSON.stringify(topic.description || '')},
    subtopics: ${JSON.stringify(topic.subtopics || [])},
    questions: ${JSON.stringify(neutralQuestions, null, 2)}
  };
})(typeof window !== 'undefined' ? window : global);
`;

  fs.writeFileSync(path.join(questionsDir, `${tKey}.js`), questionFileContent, 'utf-8');

  // 2. Language-Specific Code Files
  for (const lang of supportedLangs) {
    const langQuestions = [];

    questions.forEach(q => {
      const appr = q.approaches && q.approaches[0];
      const rawCode = appr && appr.code ? appr.code[lang] : null;

      if (rawCode) {
        stats.perLanguage[lang]++;
        const taggedLines = tagCodeLines(rawCode, lang);
        const explanations = {};
        if (appr.lineExplanations && Array.isArray(appr.lineExplanations)) {
          appr.lineExplanations.forEach((le, idx) => {
            explanations[`step_${idx + 1}`] = le.text;
          });
        }
        explanations['init'] = 'Initialize pointers and variables.';
        explanations['loop'] = 'Loop across elements or until condition terminates.';
        explanations['return'] = 'Return computed solution result.';

        langQuestions.push({
          id: q.id,
          code: taggedLines,
          rawCode: rawCode,
          explanations: explanations,
          notes: lang === 'python' ? 'Python utilizes reference binding without manual memory deallocation.' :
                 lang === 'java' ? 'Java garbage collector manages object lifecycles on the JVM heap.' :
                 lang === 'cpp' ? 'Fast explicit memory layout with direct value semantics or pointer references.' :
                 'V8 engine optimizes execution via hidden classes and just-in-time compilation.'
        });
      }
    });

    const langTopicContent = `/**
 * SynapseCS Language-Specific Implementation: ${lang.toUpperCase()} - ${topic.title}
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['${lang}'] = window.DSA_LANG_CODE['${lang}'] || {};
  window.DSA_LANG_CODE['${lang}']['${tKey}'] = ${JSON.stringify(langQuestions, null, 2)};
})(typeof window !== 'undefined' ? window : global);
`;

    fs.writeFileSync(path.join(languagesDir, lang, `${tKey}.js`), langTopicContent, 'utf-8');
  }
}

console.log('MIGRATION COMPLETE!');
console.log('Total Questions Migrated:', stats.totalQuestions);
console.log('Per Topic Counts:', stats.topics);
console.log('Per Language Counts:', stats.perLanguage);
