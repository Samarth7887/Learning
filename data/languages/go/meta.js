/**
 * SynapseCS Language Metadata: Go
 */
(function(window) {
  'use strict';
  window.DSA_LANG_META = window.DSA_LANG_META || {};
  window.DSA_LANG_META['go'] = {
  "id": "go",
  "name": "Go",
  "icon": "logos:go",
  "extension": ".go",
  "color": "#00add8",
  "available": true,
  "description": "Simple, blazing-fast concurrent language with lightweight goroutines and garbage collection.",
  "helloWorld": {
    "code": "package main\\nimport \\\"fmt\\\"\\n\\nfunc main() {\\n    fmt.Println(\\\"Hello, SynapseCS!\\\")\\n}",
    "howToRun": "go run main.go"
  }
};
})(typeof window !== 'undefined' ? window : global);
