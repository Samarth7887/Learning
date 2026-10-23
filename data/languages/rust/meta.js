/**
 * SynapseCS Language Metadata: Rust
 */
(function(window) {
  'use strict';
  window.DSA_LANG_META = window.DSA_LANG_META || {};
  window.DSA_LANG_META['rust'] = {
    id: 'rust',
    name: 'Rust',
    icon: 'logos:rust',
    extension: '.rs',
    color: '#dea584',
    available: false,
    description: "Fearless concurrency and guaranteed memory safety without garbage collection.",
    helloWorld: {
      code: "fn main() {\n    println!(\"Hello, SynapseCS!\");\n}",
      howToRun: "rustc main.rs && ./main"
    }
  };
})(typeof window !== 'undefined' ? window : global);
