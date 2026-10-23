/**
 * SynapseCS Language Metadata: C
 */
(function(window) {
  'use strict';
  window.DSA_LANG_META = window.DSA_LANG_META || {};
  window.DSA_LANG_META['c'] = {
    id: 'c',
    name: 'C',
    icon: 'logos:c',
    extension: '.c',
    color: '#a8b9cc',
    available: false,
    description: "Manual heap management, raw pointer arithmetic, and bare-metal performance.",
    helloWorld: {
      code: "#include <stdio.h>\n\nint main() {\n    printf(\"Hello, SynapseCS!\\n\");\n    return 0;\n}",
      howToRun: "gcc main.c -o main && ./main"
    }
  };
})(typeof window !== 'undefined' ? window : global);
