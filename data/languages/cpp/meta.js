/**
 * SynapseCS Language Metadata: C++
 */
(function(window) {
  'use strict';
  window.DSA_LANG_META = window.DSA_LANG_META || {};
  window.DSA_LANG_META['cpp'] = {
    id: 'cpp',
    name: 'C++',
    icon: 'logos:c-plusplus',
    extension: '.cpp',
    color: '#00599c',
    available: true,
    description: "Ultra-fast low-level memory control with pointers and STL algorithms.",
    helloWorld: {
      code: "#include <iostream>\n\nint main() {\n    std.cout << \"Hello, SynapseCS!\" << std::endl;\n    return 0;\n}",
      howToRun: "g++ -O3 main.cpp -o main && ./main"
    }
  };
})(typeof window !== 'undefined' ? window : global);
