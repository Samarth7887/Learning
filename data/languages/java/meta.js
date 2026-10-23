/**
 * SynapseCS Language Metadata: Java
 */
(function(window) {
  'use strict';
  window.DSA_LANG_META = window.DSA_LANG_META || {};
  window.DSA_LANG_META['java'] = {
    id: 'java',
    name: 'Java',
    icon: 'logos:java',
    extension: '.java',
    color: '#e76f00',
    available: true,
    description: "Strict object-oriented model with strong typing and mature JVM performance.",
    helloWorld: {
      code: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, SynapseCS!\");\n    }\n}",
      howToRun: "javac Main.java && java Main"
    }
  };
})(typeof window !== 'undefined' ? window : global);
