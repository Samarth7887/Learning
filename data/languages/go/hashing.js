/**
 * SynapseCS Language-Specific Implementation: GO - hashing
 */
(function(window) {
  'use strict';
  window.DSA_LANG_CODE = window.DSA_LANG_CODE || {};
  window.DSA_LANG_CODE['go'] = window.DSA_LANG_CODE['go'] || {};
  window.DSA_LANG_CODE['go']['hashing'] = [
  {
    "id": "hash-map-chaining",
    "code": [
      {
        "text": "package main",
        "code": "package main",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "type Entry struct {",
        "code": "type Entry struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tKey int",
        "code": "\tKey int",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tVal int",
        "code": "\tVal int",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "type MyHashMap struct {",
        "code": "type MyHashMap struct {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "\tbuckets [][]Entry",
        "code": "\tbuckets [][]Entry",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "\tsize    int",
        "code": "\tsize    int",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "func Constructor() MyHashMap {",
        "code": "func Constructor() MyHashMap {",
        "tag": "def",
        "lineNum": 13
      },
      {
        "text": "\treturn MyHashMap{",
        "code": "\treturn MyHashMap{",
        "tag": "return",
        "lineNum": 14
      },
      {
        "text": "\t\tbuckets: make([][]Entry, 1000),",
        "code": "\t\tbuckets: make([][]Entry, 1000),",
        "tag": "alloc",
        "lineNum": 15
      },
      {
        "text": "\t\tsize:    1000,",
        "code": "\t\tsize:    1000,",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "func (m *MyHashMap) Put(key int, value int) {",
        "code": "func (m *MyHashMap) Put(key int, value int) {",
        "tag": "def",
        "lineNum": 20
      },
      {
        "text": "\tidx := key % m.size",
        "code": "\tidx := key % m.size",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "\tfor i, entry := range m.buckets[idx] {",
        "code": "\tfor i, entry := range m.buckets[idx] {",
        "tag": "loop",
        "lineNum": 22
      },
      {
        "text": "\t\tif entry.Key == key {",
        "code": "\t\tif entry.Key == key {",
        "tag": "branch",
        "lineNum": 23
      },
      {
        "text": "\t\t\tm.buckets[idx][i].Val = value",
        "code": "\t\t\tm.buckets[idx][i].Val = value",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "\t\t\treturn",
        "code": "\t\t\treturn",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 26
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 27
      },
      {
        "text": "\tm.buckets[idx] = append(m.buckets[idx], Entry{Key: key, Val: value})",
        "code": "\tm.buckets[idx] = append(m.buckets[idx], Entry{Key: key, Val: value})",
        "tag": "mutate",
        "lineNum": 28
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 29
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 30
      },
      {
        "text": "func (m *MyHashMap) Get(key int) int {",
        "code": "func (m *MyHashMap) Get(key int) int {",
        "tag": "def",
        "lineNum": 31
      },
      {
        "text": "\tidx := key % m.size",
        "code": "\tidx := key % m.size",
        "tag": "exec",
        "lineNum": 32
      },
      {
        "text": "\tfor _, entry := range m.buckets[idx] {",
        "code": "\tfor _, entry := range m.buckets[idx] {",
        "tag": "loop",
        "lineNum": 33
      },
      {
        "text": "\t\tif entry.Key == key {",
        "code": "\t\tif entry.Key == key {",
        "tag": "branch",
        "lineNum": 34
      },
      {
        "text": "\t\t\treturn entry.Val",
        "code": "\t\t\treturn entry.Val",
        "tag": "return",
        "lineNum": 35
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 36
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 37
      },
      {
        "text": "\treturn -1",
        "code": "\treturn -1",
        "tag": "return",
        "lineNum": 38
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 39
      }
    ],
    "rawCode": "package main\n\ntype Entry struct {\n\tKey int\n\tVal int\n}\n\ntype MyHashMap struct {\n\tbuckets [][]Entry\n\tsize    int\n}\n\nfunc Constructor() MyHashMap {\n\treturn MyHashMap{\n\t\tbuckets: make([][]Entry, 1000),\n\t\tsize:    1000,\n\t}\n}\n\nfunc (m *MyHashMap) Put(key int, value int) {\n\tidx := key % m.size\n\tfor i, entry := range m.buckets[idx] {\n\t\tif entry.Key == key {\n\t\t\tm.buckets[idx][i].Val = value\n\t\t\treturn\n\t\t}\n\t}\n\tm.buckets[idx] = append(m.buckets[idx], Entry{Key: key, Val: value})\n}\n\nfunc (m *MyHashMap) Get(key int) int {\n\tidx := key % m.size\n\tfor _, entry := range m.buckets[idx] {\n\t\tif entry.Key == key {\n\t\t\treturn entry.Val\n\t\t}\n\t}\n\treturn -1\n}",
    "explanations": {
      "def": "Define Entry and MyHashMap types along with Constructor, Put, and Get methods.",
      "alloc": "Allocate slice of buckets via make([][]Entry, 1000).",
      "loop": "Iterate over bucket slice checking for matching key.",
      "branch": "If key exists, overwrite value and return.",
      "mutate": "Append new Entry to bucket slice via append().",
      "return": "Return found value or -1 if key does not exist.",
      "comment": "Package header.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Go slices serve as dynamic collision buckets, automatically expanding capacity as entries are appended."
  },
  {
    "id": "hash-set-impl",
    "code": [
      {
        "text": "package main",
        "code": "package main",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "type MyHashSet struct {",
        "code": "type MyHashSet struct {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tdata map[int]struct{}",
        "code": "\tdata map[int]struct{}",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "func HashSetConstructor() MyHashSet {",
        "code": "func HashSetConstructor() MyHashSet {",
        "tag": "def",
        "lineNum": 7
      },
      {
        "text": "\treturn MyHashSet{data: make(map[int]struct{})}",
        "code": "\treturn MyHashSet{data: make(map[int]struct{})}",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "func (s *MyHashSet) Add(key int) {",
        "code": "func (s *MyHashSet) Add(key int) {",
        "tag": "def",
        "lineNum": 11
      },
      {
        "text": "\ts.data[key] = struct{}{}",
        "code": "\ts.data[key] = struct{}{}",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "func (s *MyHashSet) Remove(key int) {",
        "code": "func (s *MyHashSet) Remove(key int) {",
        "tag": "def",
        "lineNum": 15
      },
      {
        "text": "\tdelete(s.data, key)",
        "code": "\tdelete(s.data, key)",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 18
      },
      {
        "text": "func (s *MyHashSet) Contains(key int) bool {",
        "code": "func (s *MyHashSet) Contains(key int) bool {",
        "tag": "def",
        "lineNum": 19
      },
      {
        "text": "\t_, exists := s.data[key]",
        "code": "\t_, exists := s.data[key]",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "\treturn exists",
        "code": "\treturn exists",
        "tag": "return",
        "lineNum": 21
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 22
      }
    ],
    "rawCode": "package main\n\ntype MyHashSet struct {\n\tdata map[int]struct{}\n}\n\nfunc HashSetConstructor() MyHashSet {\n\treturn MyHashSet{data: make(map[int]struct{})}\n}\n\nfunc (s *MyHashSet) Add(key int) {\n\ts.data[key] = struct{}{}\n}\n\nfunc (s *MyHashSet) Remove(key int) {\n\tdelete(s.data, key)\n}\n\nfunc (s *MyHashSet) Contains(key int) bool {\n\t_, exists := s.data[key]\n\treturn exists\n}",
    "explanations": {
      "def": "Define MyHashSet struct wrapping Go map[int]struct{}.",
      "return": "Return boolean indicating whether key exists in set.",
      "comment": "Package declaration.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Using struct{}{} as map values in Go consumes 0 bytes of memory per key, creating an idiomatic, zero-overhead hash set."
  },
  {
    "id": "two-sum",
    "code": [
      {
        "text": "package main",
        "code": "package main",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "func twoSum(nums []int, target int) []int {",
        "code": "func twoSum(nums []int, target int) []int {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tseen := make(map[int]int)",
        "code": "\tseen := make(map[int]int)",
        "tag": "alloc",
        "lineNum": 4
      },
      {
        "text": "\tfor i, num := range nums {",
        "code": "\tfor i, num := range nums {",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "\t\tcomplement := target - num",
        "code": "\t\tcomplement := target - num",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "\t\tif idx, exists := seen[complement]; exists {",
        "code": "\t\tif idx, exists := seen[complement]; exists {",
        "tag": "branch",
        "lineNum": 7
      },
      {
        "text": "\t\t\treturn []int{idx, i}",
        "code": "\t\t\treturn []int{idx, i}",
        "tag": "return",
        "lineNum": 8
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "\t\tseen[num] = i",
        "code": "\t\tseen[num] = i",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "\treturn []int{}",
        "code": "\treturn []int{}",
        "tag": "return",
        "lineNum": 12
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 13
      }
    ],
    "rawCode": "package main\n\nfunc twoSum(nums []int, target int) []int {\n\tseen := make(map[int]int)\n\tfor i, num := range nums {\n\t\tcomplement := target - num\n\t\tif idx, exists := seen[complement]; exists {\n\t\t\treturn []int{idx, i}\n\t\t}\n\t\tseen[num] = i\n\t}\n\treturn []int{}\n}",
    "explanations": {
      "def": "Define twoSum accepting slice nums and target int.",
      "alloc": "Allocate lookup map with make(map[int]int).",
      "loop": "Iterate over numbers and indices via for i, num := range nums.",
      "branch": "Check if complement exists in seen map via comma-ok idiom.",
      "return": "Return slice []int{idx, i}.",
      "comment": "Go package declaration.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "In Go, the comma-ok idiom if val, ok := map[key]; ok tests for key existence in O(1) average time."
  },
  {
    "id": "group-anagrams",
    "code": [
      {
        "text": "package main",
        "code": "package main",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "import \"sort\"",
        "code": "import \"sort\"",
        "tag": "comment",
        "lineNum": 3
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "func groupAnagrams(strs []string) [][]string {",
        "code": "func groupAnagrams(strs []string) [][]string {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "\tgroups := make(map[string][]string)",
        "code": "\tgroups := make(map[string][]string)",
        "tag": "alloc",
        "lineNum": 6
      },
      {
        "text": "\tfor _, s := range strs {",
        "code": "\tfor _, s := range strs {",
        "tag": "loop",
        "lineNum": 7
      },
      {
        "text": "\t\tbytes := []byte(s)",
        "code": "\t\tbytes := []byte(s)",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "\t\tsort.Slice(bytes, func(i, j int) bool {",
        "code": "\t\tsort.Slice(bytes, func(i, j int) bool {",
        "tag": "def",
        "lineNum": 9
      },
      {
        "text": "\t\t\treturn bytes[i] < bytes[j]",
        "code": "\t\t\treturn bytes[i] < bytes[j]",
        "tag": "return",
        "lineNum": 10
      },
      {
        "text": "\t\t})",
        "code": "\t\t})",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "\t\tsortedStr := string(bytes)",
        "code": "\t\tsortedStr := string(bytes)",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "\t\tgroups[sortedStr] = append(groups[sortedStr], s)",
        "code": "\t\tgroups[sortedStr] = append(groups[sortedStr], s)",
        "tag": "mutate",
        "lineNum": 13
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\tres := make([][]string, 0, len(groups))",
        "code": "\tres := make([][]string, 0, len(groups))",
        "tag": "alloc",
        "lineNum": 16
      },
      {
        "text": "\tfor _, group := range groups {",
        "code": "\tfor _, group := range groups {",
        "tag": "loop",
        "lineNum": 17
      },
      {
        "text": "\t\tres = append(res, group)",
        "code": "\t\tres = append(res, group)",
        "tag": "mutate",
        "lineNum": 18
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "\treturn res",
        "code": "\treturn res",
        "tag": "return",
        "lineNum": 20
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 21
      }
    ],
    "rawCode": "package main\n\nimport \"sort\"\n\nfunc groupAnagrams(strs []string) [][]string {\n\tgroups := make(map[string][]string)\n\tfor _, s := range strs {\n\t\tbytes := []byte(s)\n\t\tsort.Slice(bytes, func(i, j int) bool {\n\t\t\treturn bytes[i] < bytes[j]\n\t\t})\n\t\tsortedStr := string(bytes)\n\t\tgroups[sortedStr] = append(groups[sortedStr], s)\n\t}\n\n\tres := make([][]string, 0, len(groups))\n\tfor _, group := range groups {\n\t\tres = append(res, group)\n\t}\n\treturn res\n}",
    "explanations": {
      "def": "Define groupAnagrams returning 2D slice of anagram groups.",
      "alloc": "Allocate map and pre-allocate result slice capacity.",
      "loop": "Iterate through input strings, and iterate through map values.",
      "exec": "Sort byte slice to create canonical anagram key string.",
      "mutate": "Append string to map slice and append groups to result.",
      "return": "Return grouped 2D string slice.",
      "comment": "Import sort package."
    },
    "notes": "Converting a string to []byte creates a mutable byte slice suitable for in-place sorting."
  },
  {
    "id": "valid-anagram",
    "code": [
      {
        "text": "package main",
        "code": "package main",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "func isAnagram(s string, t string) bool {",
        "code": "func isAnagram(s string, t string) bool {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tif len(s) != len(t) {",
        "code": "\tif len(s) != len(t) {",
        "tag": "def",
        "lineNum": 4
      },
      {
        "text": "\t\treturn false",
        "code": "\t\treturn false",
        "tag": "return",
        "lineNum": 5
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "\tcounts := [26]int{}",
        "code": "\tcounts := [26]int{}",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "\tfor i := 0; i < len(s); i++ {",
        "code": "\tfor i := 0; i < len(s); i++ {",
        "tag": "def",
        "lineNum": 8
      },
      {
        "text": "\t\tcounts[s[i]-'a']++",
        "code": "\t\tcounts[s[i]-'a']++",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "\t\tcounts[t[i]-'a']--",
        "code": "\t\tcounts[t[i]-'a']--",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "\tfor _, count := range counts {",
        "code": "\tfor _, count := range counts {",
        "tag": "loop",
        "lineNum": 12
      },
      {
        "text": "\t\tif count != 0 {",
        "code": "\t\tif count != 0 {",
        "tag": "branch",
        "lineNum": 13
      },
      {
        "text": "\t\t\treturn false",
        "code": "\t\t\treturn false",
        "tag": "return",
        "lineNum": 14
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "\treturn true",
        "code": "\treturn true",
        "tag": "return",
        "lineNum": 17
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 18
      }
    ],
    "rawCode": "package main\n\nfunc isAnagram(s string, t string) bool {\n\tif len(s) != len(t) {\n\t\treturn false\n\t}\n\tcounts := [26]int{}\n\tfor i := 0; i < len(s); i++ {\n\t\tcounts[s[i]-'a']++\n\t\tcounts[t[i]-'a']--\n\t}\n\tfor _, count := range counts {\n\t\tif count != 0 {\n\t\t\treturn false\n\t\t}\n\t}\n\treturn true\n}",
    "explanations": {
      "def": "Define isAnagram accepting two strings.",
      "branch": "Early exit if lengths differ or if character count is non-zero.",
      "loop": "Simultaneously count characters in s and decrement for t.",
      "return": "Return true if all character balances are zero.",
      "comment": "Go package main.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "[26]int is a value-type fixed array allocated on the stack with zero heap allocation overhead."
  },
  {
    "id": "longest-consecutive-sequence",
    "code": [
      {
        "text": "package main",
        "code": "package main",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "func longestConsecutive(nums []int) int {",
        "code": "func longestConsecutive(nums []int) int {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tset := make(map[int]bool)",
        "code": "\tset := make(map[int]bool)",
        "tag": "alloc",
        "lineNum": 4
      },
      {
        "text": "\tfor _, num := range nums {",
        "code": "\tfor _, num := range nums {",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "\t\tset[num] = true",
        "code": "\t\tset[num] = true",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "\tlongest := 0",
        "code": "\tlongest := 0",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "\tfor num := range set {",
        "code": "\tfor num := range set {",
        "tag": "loop",
        "lineNum": 10
      },
      {
        "text": "\t\tif !set[num-1] {",
        "code": "\t\tif !set[num-1] {",
        "tag": "branch",
        "lineNum": 11
      },
      {
        "text": "\t\t\tcurrNum := num",
        "code": "\t\t\tcurrNum := num",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "\t\t\tstreak := 1",
        "code": "\t\t\tstreak := 1",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "\t\t\tfor set[currNum+1] {",
        "code": "\t\t\tfor set[currNum+1] {",
        "tag": "loop",
        "lineNum": 14
      },
      {
        "text": "\t\t\t\tcurrNum++",
        "code": "\t\t\t\tcurrNum++",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "\t\t\t\tstreak++",
        "code": "\t\t\t\tstreak++",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "\t\t\t}",
        "code": "\t\t\t}",
        "tag": "exec",
        "lineNum": 17
      },
      {
        "text": "\t\t\tif streak > longest {",
        "code": "\t\t\tif streak > longest {",
        "tag": "branch",
        "lineNum": 18
      },
      {
        "text": "\t\t\t\tlongest = streak",
        "code": "\t\t\t\tlongest = streak",
        "tag": "exec",
        "lineNum": 19
      },
      {
        "text": "\t\t\t}",
        "code": "\t\t\t}",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 22
      },
      {
        "text": "\treturn longest",
        "code": "\treturn longest",
        "tag": "return",
        "lineNum": 23
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 24
      }
    ],
    "rawCode": "package main\n\nfunc longestConsecutive(nums []int) int {\n\tset := make(map[int]bool)\n\tfor _, num := range nums {\n\t\tset[num] = true\n\t}\n\n\tlongest := 0\n\tfor num := range set {\n\t\tif !set[num-1] {\n\t\t\tcurrNum := num\n\t\t\tstreak := 1\n\t\t\tfor set[currNum+1] {\n\t\t\t\tcurrNum++\n\t\t\t\tstreak++\n\t\t\t}\n\t\t\tif streak > longest {\n\t\t\t\tlongest = streak\n\t\t\t}\n\t\t}\n\t}\n\treturn longest\n}",
    "explanations": {
      "def": "Define longestConsecutive using hash set.",
      "alloc": "Populate hash set using make(map[int]bool).",
      "loop": "Loop through set keys and expand consecutive streak.",
      "branch": "Only start streak if num - 1 is not in the set (streak beginning).",
      "return": "Return longest streak found.",
      "comment": "Go package declaration.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Checking !set[num-1] ensures only the start of each sequence is explored, yielding overall O(N) linear time."
  },
  {
    "id": "subarray-sum-equals-k",
    "code": [
      {
        "text": "package main",
        "code": "package main",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "func subarraySum(nums []int, k int) int {",
        "code": "func subarraySum(nums []int, k int) int {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\tprefixCounts := map[int]int{0: 1}",
        "code": "\tprefixCounts := map[int]int{0: 1}",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "\tcurrentSum := 0",
        "code": "\tcurrentSum := 0",
        "tag": "exec",
        "lineNum": 5
      },
      {
        "text": "\ttotalCount := 0",
        "code": "\ttotalCount := 0",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "\tfor _, num := range nums {",
        "code": "\tfor _, num := range nums {",
        "tag": "loop",
        "lineNum": 8
      },
      {
        "text": "\t\tcurrentSum += num",
        "code": "\t\tcurrentSum += num",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "\t\tif count, exists := prefixCounts[currentSum-k]; exists {",
        "code": "\t\tif count, exists := prefixCounts[currentSum-k]; exists {",
        "tag": "branch",
        "lineNum": 10
      },
      {
        "text": "\t\t\ttotalCount += count",
        "code": "\t\t\ttotalCount += count",
        "tag": "exec",
        "lineNum": 11
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "\t\tprefixCounts[currentSum]++",
        "code": "\t\tprefixCounts[currentSum]++",
        "tag": "exec",
        "lineNum": 13
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "\treturn totalCount",
        "code": "\treturn totalCount",
        "tag": "return",
        "lineNum": 15
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 16
      }
    ],
    "rawCode": "package main\n\nfunc subarraySum(nums []int, k int) int {\n\tprefixCounts := map[int]int{0: 1}\n\tcurrentSum := 0\n\ttotalCount := 0\n\n\tfor _, num := range nums {\n\t\tcurrentSum += num\n\t\tif count, exists := prefixCounts[currentSum-k]; exists {\n\t\t\ttotalCount += count\n\t\t}\n\t\tprefixCounts[currentSum]++\n\t}\n\treturn totalCount\n}",
    "explanations": {
      "def": "Define subarraySum using prefix sum hash map.",
      "loop": "Iterate over numbers in slice.",
      "branch": "If currentSum - k exists in prefix map, add its frequency to totalCount.",
      "return": "Return totalCount.",
      "comment": "Go package main.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Prefix sum hash map solves the subarray sum problem in O(N) time by recording how many previous prefixes equal currentSum - k."
  },
  {
    "id": "contains-duplicate-ii",
    "code": [
      {
        "text": "package main",
        "code": "package main",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "func containsNearbyDuplicate(nums []int, k int) bool {",
        "code": "func containsNearbyDuplicate(nums []int, k int) bool {",
        "tag": "def",
        "lineNum": 3
      },
      {
        "text": "\twindow := make(map[int]int)",
        "code": "\twindow := make(map[int]int)",
        "tag": "alloc",
        "lineNum": 4
      },
      {
        "text": "\tfor i, num := range nums {",
        "code": "\tfor i, num := range nums {",
        "tag": "loop",
        "lineNum": 5
      },
      {
        "text": "\t\tif prevIdx, exists := window[num]; exists && i-prevIdx <= k {",
        "code": "\t\tif prevIdx, exists := window[num]; exists && i-prevIdx <= k {",
        "tag": "branch",
        "lineNum": 6
      },
      {
        "text": "\t\t\treturn true",
        "code": "\t\t\treturn true",
        "tag": "return",
        "lineNum": 7
      },
      {
        "text": "\t\t}",
        "code": "\t\t}",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "\t\twindow[num] = i",
        "code": "\t\twindow[num] = i",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 10
      },
      {
        "text": "\treturn false",
        "code": "\treturn false",
        "tag": "return",
        "lineNum": 11
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 12
      }
    ],
    "rawCode": "package main\n\nfunc containsNearbyDuplicate(nums []int, k int) bool {\n\twindow := make(map[int]int)\n\tfor i, num := range nums {\n\t\tif prevIdx, exists := window[num]; exists && i-prevIdx <= k {\n\t\t\treturn true\n\t\t}\n\t\twindow[num] = i\n\t}\n\treturn false\n}",
    "explanations": {
      "def": "Define containsNearbyDuplicate with index map.",
      "alloc": "Create sliding window position map make(map[int]int).",
      "loop": "Iterate over nums recording element indices.",
      "branch": "If element exists in window and i - prevIdx <= k, return true.",
      "return": "Return false if no nearby duplicate is found.",
      "comment": "Go package declaration.",
      "exec": "Executes [exec] operation in this algorithm step."
    },
    "notes": "Storing the most recent index for each number checks the minimum index difference in O(N) time."
  },
  {
    "id": "insert-delete-getrandom",
    "code": [
      {
        "text": "package main",
        "code": "package main",
        "tag": "comment",
        "lineNum": 1
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 2
      },
      {
        "text": "import \"math/rand\"",
        "code": "import \"math/rand\"",
        "tag": "comment",
        "lineNum": 3
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 4
      },
      {
        "text": "type RandomizedSet struct {",
        "code": "type RandomizedSet struct {",
        "tag": "def",
        "lineNum": 5
      },
      {
        "text": "\tnums []int",
        "code": "\tnums []int",
        "tag": "exec",
        "lineNum": 6
      },
      {
        "text": "\tidxMap map[int]int",
        "code": "\tidxMap map[int]int",
        "tag": "exec",
        "lineNum": 7
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 8
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 9
      },
      {
        "text": "func RandomizedSetConstructor() RandomizedSet {",
        "code": "func RandomizedSetConstructor() RandomizedSet {",
        "tag": "def",
        "lineNum": 10
      },
      {
        "text": "\treturn RandomizedSet{",
        "code": "\treturn RandomizedSet{",
        "tag": "return",
        "lineNum": 11
      },
      {
        "text": "\t\tnums: []int{},",
        "code": "\t\tnums: []int{},",
        "tag": "exec",
        "lineNum": 12
      },
      {
        "text": "\t\tidxMap: make(map[int]int),",
        "code": "\t\tidxMap: make(map[int]int),",
        "tag": "alloc",
        "lineNum": 13
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 14
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 15
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 16
      },
      {
        "text": "func (r *RandomizedSet) Insert(val int) bool {",
        "code": "func (r *RandomizedSet) Insert(val int) bool {",
        "tag": "def",
        "lineNum": 17
      },
      {
        "text": "\tif _, exists := r.idxMap[val]; exists {",
        "code": "\tif _, exists := r.idxMap[val]; exists {",
        "tag": "branch",
        "lineNum": 18
      },
      {
        "text": "\t\treturn false",
        "code": "\t\treturn false",
        "tag": "return",
        "lineNum": 19
      },
      {
        "text": "\t}",
        "code": "\t}",
        "tag": "exec",
        "lineNum": 20
      },
      {
        "text": "\tr.idxMap[val] = len(r.nums)",
        "code": "\tr.idxMap[val] = len(r.nums)",
        "tag": "exec",
        "lineNum": 21
      },
      {
        "text": "\tr.nums = append(r.nums, val)",
        "code": "\tr.nums = append(r.nums, val)",
        "tag": "mutate",
        "lineNum": 22
      },
      {
        "text": "\treturn true",
        "code": "\treturn true",
        "tag": "return",
        "lineNum": 23
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 24
      },
      {
        "text": "",
        "code": "",
        "tag": "exec",
        "lineNum": 25
      },
      {
        "text": "func (r *RandomizedSet) GetRandom() int {",
        "code": "func (r *RandomizedSet) GetRandom() int {",
        "tag": "def",
        "lineNum": 26
      },
      {
        "text": "\treturn r.nums[rand.Intn(len(r.nums))]",
        "code": "\treturn r.nums[rand.Intn(len(r.nums))]",
        "tag": "return",
        "lineNum": 27
      },
      {
        "text": "}",
        "code": "}",
        "tag": "exec",
        "lineNum": 28
      }
    ],
    "rawCode": "package main\n\nimport \"math/rand\"\n\ntype RandomizedSet struct {\n\tnums []int\n\tidxMap map[int]int\n}\n\nfunc RandomizedSetConstructor() RandomizedSet {\n\treturn RandomizedSet{\n\t\tnums: []int{},\n\t\tidxMap: make(map[int]int),\n\t}\n}\n\nfunc (r *RandomizedSet) Insert(val int) bool {\n\tif _, exists := r.idxMap[val]; exists {\n\t\treturn false\n\t}\n\tr.idxMap[val] = len(r.nums)\n\tr.nums = append(r.nums, val)\n\treturn true\n}\n\nfunc (r *RandomizedSet) GetRandom() int {\n\treturn r.nums[rand.Intn(len(r.nums))]\n}",
    "explanations": {
      "def": "Define RandomizedSet struct with slice and index map.",
      "branch": "Return false if val already exists in idxMap.",
      "mutate": "Append val to slice and store index in idxMap.",
      "return": "Return random element using rand.Intn(len(r.nums)).",
      "comment": "Import math/rand for random selection.",
      "exec": "Executes [exec] operation in this algorithm step.",
      "alloc": "Executes [alloc] operation in this algorithm step."
    },
    "notes": "Pairing a slice with a hash map allows O(1) random index selection via rand.Intn() while maintaining constant-time operations."
  }
];
})(typeof window !== 'undefined' ? window : global);
