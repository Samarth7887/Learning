/**
 * SynapseCS Language Metadata: JavaScript
 */
(function(window) {
  'use strict';
  window.DSA_LANG_META = window.DSA_LANG_META || {};
  window.DSA_LANG_META['javascript'] = {
    id: 'javascript',
    name: 'JavaScript',
    icon: 'logos:javascript',
    extension: '.js',
    color: '#f7df1e',
    available: true,
    description: "Ubiquitous V8 engine language powering web visualizers and modern full-stack systems.",
    helloWorld: {
      code: "console.log(\"Hello, SynapseCS!\");",
      howToRun: "node main.js"
    }
  };
})(typeof window !== 'undefined' ? window : global);
