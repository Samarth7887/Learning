const { buildQuestionItem } = require('./helper');

function getHashingQuestions() {
  return {
    c: [
      buildQuestionItem({
        id: 'hash-map-chaining',
        code: `#include <stdio.h>
#include <stdlib.h>

#define TABLE_SIZE 1000

struct HashNode {
    int key;
    int val;
    struct HashNode* next;
};

struct MyHashMap {
    struct HashNode* buckets[TABLE_SIZE];
};

struct MyHashMap* myHashMapCreate() {
    struct MyHashMap* map = (struct MyHashMap*)malloc(sizeof(struct MyHashMap));
    for (int i = 0; i < TABLE_SIZE; i++) map->buckets[i] = NULL;
    return map;
}

void myHashMapPut(struct MyHashMap* obj, int key, int value) {
    int idx = key % TABLE_SIZE;
    struct HashNode* curr = obj->buckets[idx];
    while (curr) {
        if (curr->key == key) {
            curr->val = value;
            return;
        }
        curr = curr->next;
    }
    struct HashNode* newNode = (struct HashNode*)malloc(sizeof(struct HashNode));
    newNode->key = key;
    newNode->val = value;
    newNode->next = obj->buckets[idx];
    obj->buckets[idx] = newNode;
}

int myHashMapGet(struct MyHashMap* obj, int key) {
    int idx = key % TABLE_SIZE;
    struct HashNode* curr = obj->buckets[idx];
    while (curr) {
        if (curr->key == key) return curr->val;
        curr = curr->next;
    }
    return -1;
}`,
        explanations: {
          def: 'Define HashNode struct, MyHashMap struct, and constructor/put/get prototypes.',
          alloc: 'Allocate hash map struct and collision chain nodes using malloc().',
          init: 'Initialize bucket pointers to NULL and compute bucket index idx = key % TABLE_SIZE.',
          loop: 'Iterate through linked list collision chain at obj->buckets[idx].',
          branch: 'If matching key is found, update value and return.',
          pointer: 'Prepend new node to bucket head by wiring newNode->next = obj->buckets[idx].',
          mutate: 'Update node value or prepend new node to the bucket.',
          return: 'Return found value or -1 if key does not exist.',
          comment: 'Pre-processor macro for table size and header includes.'
        },
        notes: 'In C, separate chaining resolves hash collisions by maintaining a singly linked list in each bucket; memory must be freed when removing entries or destroying the map.'
      }),

      buildQuestionItem({
        id: 'hash-set-impl',
        code: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define SET_SIZE 1000

struct SetNode {
    int key;
    struct SetNode* next;
};

struct MyHashSet {
    struct SetNode* buckets[SET_SIZE];
};

struct MyHashSet* myHashSetCreate() {
    struct MyHashSet* set = (struct MyHashSet*)malloc(sizeof(struct MyHashSet));
    for (int i = 0; i < SET_SIZE; i++) set->buckets[i] = NULL;
    return set;
}

void myHashSetAdd(struct MyHashSet* obj, int key) {
    int idx = key % SET_SIZE;
    struct SetNode* curr = obj->buckets[idx];
    while (curr) {
        if (curr->key == key) return;
        curr = curr->next;
    }
    struct SetNode* newNode = (struct SetNode*)malloc(sizeof(struct SetNode));
    newNode->key = key;
    newNode->next = obj->buckets[idx];
    obj->buckets[idx] = newNode;
}

bool myHashSetContains(struct MyHashSet* obj, int key) {
    int idx = key % SET_SIZE;
    struct SetNode* curr = obj->buckets[idx];
    while (curr) {
        if (curr->key == key) return true;
        curr = curr->next;
    }
    return false;
}`,
        explanations: {
          def: 'Define SetNode struct and MyHashSet operations.',
          alloc: 'Allocate dynamic memory for hash set and new set nodes using malloc().',
          init: 'Zero out bucket pointers and compute hash index.',
          loop: 'Traverse bucket collision chain checking for existing key.',
          branch: 'If key already exists, return immediately without duplicate insertion.',
          pointer: 'Link new node at the front of bucket collision chain.',
          return: 'Return boolean indicating whether key exists in the set.',
          comment: 'Standard C definitions and macros.'
        },
        notes: 'A hash set in C stores unique keys in separate chaining buckets without storing associated values.'
      }),

      buildQuestionItem({
        id: 'two-sum',
        code: `#include <stdio.h>
#include <stdlib.h>

struct HashEntry {
    int key;
    int val;
    struct HashEntry* next;
};

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    int tableSize = 10007;
    struct HashEntry** table = (struct HashEntry**)calloc(tableSize, sizeof(struct HashEntry*));
    int* res = (int*)malloc(2 * sizeof(int));
    *returnSize = 2;

    for (int i = 0; i < numsSize; i++) {
        int complement = target - nums[i];
        int h = abs(complement) % tableSize;
        struct HashEntry* curr = table[h];
        while (curr) {
            if (curr->key == complement) {
                res[0] = curr->val;
                res[1] = i;
                return res;
            }
            curr = curr->next;
        }
        int selfH = abs(nums[i]) % tableSize;
        struct HashEntry* entry = (struct HashEntry*)malloc(sizeof(struct HashEntry));
        entry->key = nums[i];
        entry->val = i;
        entry->next = table[selfH];
        table[selfH] = entry;
    }
    *returnSize = 0;
    return NULL;
}`,
        explanations: {
          def: 'Define twoSum with separate chaining hash table.',
          alloc: 'Allocate hash table buckets with calloc() and result array with malloc().',
          init: 'Compute complement = target - nums[i] and hash index h.',
          loop: 'Iterate over nums and search bucket collision list.',
          branch: 'If complement is found, populate res indices and return.',
          pointer: 'Prepend current number and index into hash table bucket.',
          mutate: 'Store complement match into res[0] and res[1].',
          return: 'Return result pointer.',
          comment: 'Struct and header inclusions.'
        },
        notes: 'Using abs() when computing hash buckets prevents negative array index bounds in C.'
      }),

      buildQuestionItem({
        id: 'group-anagrams',
        code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int compareChars(const void* a, const void* b) {
    return (*(char*)a - *(char*)b);
}

void sortString(char* str) {
    qsort(str, strlen(str), sizeof(char), compareChars);
}

// Full C solution groups strings by matching sorted character keys`,
        explanations: {
          def: 'Define character comparison callback and string sorting helper.',
          exec: 'Sort string in-place using qsort().',
          return: 'Return integer comparison difference.',
          comment: 'Sorting helper for anagram grouping.'
        },
        notes: 'In C, sorting strings produces canonical anagram keys: words with identical character counts sort to identical strings.'
      }),

      buildQuestionItem({
        id: 'valid-anagram',
        code: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool isAnagram(char* s, char* t) {
    int lenS = strlen(s);
    int lenT = strlen(t);
    if (lenS != lenT) return false;

    int counts[26] = {0};
    for (int i = 0; i < lenS; i++) {
        counts[s[i] - 'a']++;
        counts[t[i] - 'a']--;
    }
    for (int i = 0; i < 26; i++) {
        if (counts[i] != 0) return false;
    }
    return true;
}`,
        explanations: {
          def: 'Define isAnagram using fixed 26-element frequency array.',
          branch: 'Return false if string lengths differ, or if character count is non-zero.',
          init: 'Initialize counts array of 26 integers to 0.',
          loop: 'Iterate over string characters incrementing and decrementing counts simultaneously.',
          mutate: 'Update frequency counts for characters in s and t.',
          return: 'Return true if all 26 character balance counters equal zero.',
          comment: 'Header inclusions.'
        },
        notes: 'A fixed 26-element array provides O(1) space and direct indexing via s[i] - \'a\', operating in linear O(N) time.'
      }),

      buildQuestionItem({
        id: 'longest-consecutive-sequence',
        code: `#include <stdio.h>
#include <stdlib.h>

int compareInts(const void* a, const void* b) {
    int diff = (*(int*)a - *(int*)b);
    return (diff > 0) - (diff < 0);
}

int longestConsecutive(int* nums, int numsSize) {
    if (numsSize <= 1) return numsSize;
    qsort(nums, numsSize, sizeof(int), compareInts);

    int longest = 1;
    int current = 1;

    for (int i = 1; i < numsSize; i++) {
        if (nums[i] == nums[i - 1]) continue;
        if (nums[i] == nums[i - 1] + 1) {
            current++;
        } else {
            if (current > longest) longest = current;
            current = 1;
        }
    }
    return current > longest ? current : longest;
}`,
        explanations: {
          def: 'Define longestConsecutive using in-place qsort() sorting.',
          branch: 'Ignore duplicates (nums[i] == nums[i-1]); check if elements are consecutive.',
          init: 'Initialize longest streak and current streak to 1.',
          loop: 'Iterate through sorted elements from index 1 to numsSize - 1.',
          mutate: 'Increment current streak counter or reset to 1 on gap.',
          return: 'Return maximum consecutive streak length.',
          comment: 'Standard C prototypes.'
        },
        notes: 'Sorting eliminates hash table overhead in C, achieving O(N log N) time with O(1) auxiliary space.'
      }),

      buildQuestionItem({
        id: 'subarray-sum-equals-k',
        code: `#include <stdio.h>

int subarraySum(int* nums, int numsSize, int k) {
    int count = 0;
    for (int start = 0; start < numsSize; start++) {
        int sum = 0;
        for (int end = start; end < numsSize; end++) {
            sum += nums[end];
            if (sum == k) count++;
        }
    }
    return count;
}`,
        explanations: {
          def: 'Define subarraySum calculating contiguous subarrays totaling k.',
          init: 'Initialize count of matching subarrays to 0.',
          loop: 'Outer loop iterates starting index, inner loop accumulates running sum.',
          branch: 'If running sum equals target k, increment count.',
          mutate: 'Accumulate sum += nums[end] and increment count.',
          return: 'Return total matching subarray count.',
          comment: 'Standard C function.'
        },
        notes: 'Contiguous subarray sum accumulates prefix sums; hash map can optimize to O(N) by storing prefix frequencies.'
      }),

      buildQuestionItem({
        id: 'contains-duplicate-ii',
        code: `#include <stdio.h>
#include <stdbool.h>

bool containsNearbyDuplicate(int* nums, int numsSize, int k) {
    for (int i = 0; i < numsSize; i++) {
        int limit = (i + k < numsSize) ? i + k : numsSize - 1;
        for (int j = i + 1; j <= limit; j++) {
            if (nums[i] == nums[j]) return true;
        }
    }
    return false;
}`,
        explanations: {
          def: 'Define containsNearbyDuplicate checking sliding window boundary.',
          init: 'Calculate window search limit min(i + k, numsSize - 1).',
          loop: 'Search window from i + 1 up to limit.',
          branch: 'If duplicate element nums[i] == nums[j] is found, return true.',
          return: 'Return true on nearby duplicate, or false if no pair found within distance k.',
          comment: 'Function signature and includes.'
        },
        notes: 'Checks indices satisfying |i - j| <= k; sliding window hash set maintains maximum k active elements.'
      }),

      buildQuestionItem({
        id: 'insert-delete-getrandom',
        code: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_ITEMS 1000

struct RandomizedSet {
    int data[MAX_ITEMS];
    int size;
};

struct RandomizedSet* randomizedSetCreate() {
    struct RandomizedSet* set = (struct RandomizedSet*)malloc(sizeof(struct RandomizedSet));
    set->size = 0;
    return set;
}

bool randomizedSetInsert(struct RandomizedSet* obj, int val) {
    for (int i = 0; i < obj->size; i++) {
        if (obj->data[i] == val) return false;
    }
    obj->data[obj->size++] = val;
    return true;
}

int randomizedSetGetRandom(struct RandomizedSet* obj) {
    int r = rand() % obj->size;
    return obj->data[r];
}`,
        explanations: {
          def: 'Define RandomizedSet struct with backing data array and size field.',
          alloc: 'Allocate RandomizedSet struct instance via malloc().',
          init: 'Initialize size to 0.',
          loop: 'Scan existing elements to ensure uniqueness.',
          branch: 'Return false if value already exists in the set.',
          mutate: 'Append new value to data array and increment size.',
          return: 'Return random element selected by rand() % obj->size.',
          comment: 'Randomized set header and structs.'
        },
        notes: 'In C, combining an array with a hash map enables O(1) random access via rand() % size while maintaining constant time inserts.'
      })
    ],

    go: [
      buildQuestionItem({
        id: 'hash-map-chaining',
        code: `package main

type Entry struct {
	Key int
	Val int
}

type MyHashMap struct {
	buckets [][]Entry
	size    int
}

func Constructor() MyHashMap {
	return MyHashMap{
		buckets: make([][]Entry, 1000),
		size:    1000,
	}
}

func (m *MyHashMap) Put(key int, value int) {
	idx := key % m.size
	for i, entry := range m.buckets[idx] {
		if entry.Key == key {
			m.buckets[idx][i].Val = value
			return
		}
	}
	m.buckets[idx] = append(m.buckets[idx], Entry{Key: key, Val: value})
}

func (m *MyHashMap) Get(key int) int {
	idx := key % m.size
	for _, entry := range m.buckets[idx] {
		if entry.Key == key {
			return entry.Val
		}
	}
	return -1
}`,
        explanations: {
          def: 'Define Entry and MyHashMap types along with Constructor, Put, and Get methods.',
          alloc: 'Allocate slice of buckets via make([][]Entry, 1000).',
          init: 'Compute bucket index idx := key % m.size.',
          loop: 'Iterate over bucket slice checking for matching key.',
          branch: 'If key exists, overwrite value and return.',
          mutate: 'Append new Entry to bucket slice via append().',
          return: 'Return found value or -1 if key does not exist.',
          comment: 'Package header.'
        },
        notes: 'Go slices serve as dynamic collision buckets, automatically expanding capacity as entries are appended.'
      }),

      buildQuestionItem({
        id: 'hash-set-impl',
        code: `package main

type MyHashSet struct {
	data map[int]struct{}
}

func HashSetConstructor() MyHashSet {
	return MyHashSet{data: make(map[int]struct{})}
}

func (s *MyHashSet) Add(key int) {
	s.data[key] = struct{}{}
}

func (s *MyHashSet) Remove(key int) {
	delete(s.data, key)
}

func (s *MyHashSet) Contains(key int) bool {
	_, exists := s.data[key]
	return exists
}`,
        explanations: {
          def: 'Define MyHashSet struct wrapping Go map[int]struct{}.',
          alloc: 'Initialize hash map via make(map[int]struct{}).',
          mutate: 'Insert empty struct literal struct{}{} or remove via built-in delete().',
          return: 'Return boolean indicating whether key exists in set.',
          comment: 'Package declaration.'
        },
        notes: 'Using struct{}{} as map values in Go consumes 0 bytes of memory per key, creating an idiomatic, zero-overhead hash set.'
      }),

      buildQuestionItem({
        id: 'two-sum',
        code: `package main

func twoSum(nums []int, target int) []int {
	seen := make(map[int]int)
	for i, num := range nums {
		complement := target - num
		if idx, exists := seen[complement]; exists {
			return []int{idx, i}
		}
		seen[num] = i
	}
	return []int{}
}`,
        explanations: {
          def: 'Define twoSum accepting slice nums and target int.',
          alloc: 'Allocate lookup map with make(map[int]int).',
          init: 'Compute complement := target - num.',
          loop: 'Iterate over numbers and indices via for i, num := range nums.',
          branch: 'Check if complement exists in seen map via comma-ok idiom.',
          mutate: 'Store seen[num] = i.',
          return: 'Return slice []int{idx, i}.',
          comment: 'Go package declaration.'
        },
        notes: 'In Go, the comma-ok idiom if val, ok := map[key]; ok tests for key existence in O(1) average time.'
      }),

      buildQuestionItem({
        id: 'group-anagrams',
        code: `package main

import "sort"

func groupAnagrams(strs []string) [][]string {
	groups := make(map[string][]string)
	for _, s := range strs {
		bytes := []byte(s)
		sort.Slice(bytes, func(i, j int) bool {
			return bytes[i] < bytes[j]
		})
		sortedStr := string(bytes)
		groups[sortedStr] = append(groups[sortedStr], s)
	}

	res := make([][]string, 0, len(groups))
	for _, group := range groups {
		res = append(res, group)
	}
	return res
}`,
        explanations: {
          def: 'Define groupAnagrams returning 2D slice of anagram groups.',
          alloc: 'Allocate map and pre-allocate result slice capacity.',
          loop: 'Iterate through input strings, and iterate through map values.',
          exec: 'Sort byte slice to create canonical anagram key string.',
          mutate: 'Append string to map slice and append groups to result.',
          return: 'Return grouped 2D string slice.',
          comment: 'Import sort package.'
        },
        notes: 'Converting a string to []byte creates a mutable byte slice suitable for in-place sorting.'
      }),

      buildQuestionItem({
        id: 'valid-anagram',
        code: `package main

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}
	counts := [26]int{}
	for i := 0; i < len(s); i++ {
		counts[s[i]-'a']++
		counts[t[i]-'a']--
	}
	for _, count := range counts {
		if count != 0 {
			return false
		}
	}
	return true
}`,
        explanations: {
          def: 'Define isAnagram accepting two strings.',
          branch: 'Early exit if lengths differ or if character count is non-zero.',
          init: 'Initialize fixed-size array counts := [26]int{}.',
          loop: 'Simultaneously count characters in s and decrement for t.',
          mutate: 'Update frequency counts in fixed array.',
          return: 'Return true if all character balances are zero.',
          comment: 'Go package main.'
        },
        notes: '[26]int is a value-type fixed array allocated on the stack with zero heap allocation overhead.'
      }),

      buildQuestionItem({
        id: 'longest-consecutive-sequence',
        code: `package main

func longestConsecutive(nums []int) int {
	set := make(map[int]bool)
	for _, num := range nums {
		set[num] = true
	}

	longest := 0
	for num := range set {
		if !set[num-1] {
			currNum := num
			streak := 1
			for set[currNum+1] {
				currNum++
				streak++
			}
			if streak > longest {
				longest = streak
			}
		}
	}
	return longest
}`,
        explanations: {
          def: 'Define longestConsecutive using hash set.',
          alloc: 'Populate hash set using make(map[int]bool).',
          init: 'Initialize longest streak counter to 0.',
          loop: 'Loop through set keys and expand consecutive streak.',
          branch: 'Only start streak if num - 1 is not in the set (streak beginning).',
          mutate: 'Increment currNum and streak.',
          return: 'Return longest streak found.',
          comment: 'Go package declaration.'
        },
        notes: 'Checking !set[num-1] ensures only the start of each sequence is explored, yielding overall O(N) linear time.'
      }),

      buildQuestionItem({
        id: 'subarray-sum-equals-k',
        code: `package main

func subarraySum(nums []int, k int) int {
	prefixCounts := map[int]int{0: 1}
	currentSum := 0
	totalCount := 0

	for _, num := range nums {
		currentSum += num
		if count, exists := prefixCounts[currentSum-k]; exists {
			totalCount += count
		}
		prefixCounts[currentSum]++
	}
	return totalCount
}`,
        explanations: {
          def: 'Define subarraySum using prefix sum hash map.',
          init: 'Initialize prefixCounts map with base case {0: 1}.',
          loop: 'Iterate over numbers in slice.',
          branch: 'If currentSum - k exists in prefix map, add its frequency to totalCount.',
          mutate: 'Increment currentSum and increment prefixCounts[currentSum].',
          return: 'Return totalCount.',
          comment: 'Go package main.'
        },
        notes: 'Prefix sum hash map solves the subarray sum problem in O(N) time by recording how many previous prefixes equal currentSum - k.'
      }),

      buildQuestionItem({
        id: 'contains-duplicate-ii',
        code: `package main

func containsNearbyDuplicate(nums []int, k int) bool {
	window := make(map[int]int)
	for i, num := range nums {
		if prevIdx, exists := window[num]; exists && i-prevIdx <= k {
			return true
		}
		window[num] = i
	}
	return false
}`,
        explanations: {
          def: 'Define containsNearbyDuplicate with index map.',
          alloc: 'Create sliding window position map make(map[int]int).',
          loop: 'Iterate over nums recording element indices.',
          branch: 'If element exists in window and i - prevIdx <= k, return true.',
          mutate: 'Update window[num] = i.',
          return: 'Return false if no nearby duplicate is found.',
          comment: 'Go package declaration.'
        },
        notes: 'Storing the most recent index for each number checks the minimum index difference in O(N) time.'
      }),

      buildQuestionItem({
        id: 'insert-delete-getrandom',
        code: `package main

import "math/rand"

type RandomizedSet struct {
	nums []int
	idxMap map[int]int
}

func RandomizedSetConstructor() RandomizedSet {
	return RandomizedSet{
		nums: []int{},
		idxMap: make(map[int]int),
	}
}

func (r *RandomizedSet) Insert(val int) bool {
	if _, exists := r.idxMap[val]; exists {
		return false
	}
	r.idxMap[val] = len(r.nums)
	r.nums = append(r.nums, val)
	return true
}

func (r *RandomizedSet) GetRandom() int {
	return r.nums[rand.Intn(len(r.nums))]
}`,
        explanations: {
          def: 'Define RandomizedSet struct with slice and index map.',
          init: 'Instantiate slice and map in constructor.',
          branch: 'Return false if val already exists in idxMap.',
          mutate: 'Append val to slice and store index in idxMap.',
          return: 'Return random element using rand.Intn(len(r.nums)).',
          comment: 'Import math/rand for random selection.'
        },
        notes: 'Pairing a slice with a hash map allows O(1) random index selection via rand.Intn() while maintaining constant-time operations.'
      })
    ],

    rust: [
      buildQuestionItem({
        id: 'hash-map-chaining',
        code: `pub struct MyHashMap {
    buckets: Vec<Vec<(i32, i32)>>,
    size: usize,
}

impl MyHashMap {
    pub fn new() -> Self {
        MyHashMap {
            buckets: vec![Vec::new(); 1000],
            size: 1000,
        }
    }

    pub fn put(&mut self, key: i32, value: i32) {
        let idx = (key as usize) % self.size;
        for pair in &mut self.buckets[idx] {
            if pair.0 == key {
                pair.1 = value;
                return;
            }
        }
        self.buckets[idx].push((key, value));
    }

    pub fn get(&self, key: i32) -> i32 {
        let idx = (key as usize) % self.size;
        for pair in &self.buckets[idx] {
            if pair.0 == key {
                return pair.1;
            }
        }
        -1
    }
}`,
        explanations: {
          def: 'Define MyHashMap struct with 2D vector buckets and methods.',
          alloc: 'Allocate buckets using vec![Vec::new(); 1000].',
          init: 'Compute hash bucket index (key as usize) % self.size.',
          loop: 'Iterate over mutable reference &mut self.buckets[idx].',
          branch: 'If pair.0 == key, update value and return.',
          mutate: 'Push new (key, value) tuple to bucket vector.',
          return: 'Return found value or -1 if not found.',
          comment: 'Struct implementation block.'
        },
        notes: 'Vec<Vec<(i32, i32)>> implements separate chaining where each bucket is an independently allocated vector.'
      }),

      buildQuestionItem({
        id: 'hash-set-impl',
        code: `use std::collections::HashSet;

pub struct MyHashSet {
    set: HashSet<i32>,
}

impl MyHashSet {
    pub fn new() -> Self {
        MyHashSet { set: HashSet::new() }
    }

    pub fn add(&mut self, key: i32) {
        self.set.insert(key);
    }

    pub fn remove(&mut self, key: i32) {
        self.set.remove(&key);
    }

    pub fn contains(&self, key: i32) -> bool {
        self.set.contains(&key)
    }
}`,
        explanations: {
          def: 'Define MyHashSet struct wrapping standard HashSet<i32>.',
          init: 'Instantiate HashSet::new() in constructor.',
          mutate: 'Insert or remove key from inner hash set.',
          return: 'Return boolean result of self.set.contains(&key).',
          comment: 'Import HashSet from std::collections.'
        },
        notes: 'Rust HashSet uses Google SwissTable algorithm (via hashbrown) for high performance and low collision overhead.'
      }),

      buildQuestionItem({
        id: 'two-sum',
        code: `use std::collections::HashMap;

pub fn two_sum(nums: &[i32], target: i32) -> Vec<i32> {
    let mut seen = HashMap::new();
    for (i, &num) in nums.iter().enumerate() {
        let complement = target - num;
        if let Some(&prev_idx) = seen.get(&complement) {
            return vec![prev_idx as i32, i as i32];
        }
        seen.insert(num, i);
    }
    vec![]
}`,
        explanations: {
          def: 'Define two_sum function borrowing &[i32] slice.',
          init: 'Instantiate HashMap::new() to track seen numbers.',
          loop: 'Iterate with .iter().enumerate() destructuring (i, &num).',
          branch: 'Pattern match on seen.get(&complement) with if let Some(&prev_idx).',
          mutate: 'Insert current number into seen map.',
          return: 'Return vec![prev_idx, i].',
          comment: 'Import HashMap.'
        },
        notes: 'Pattern matching on Option<&usize> avoids sentinel values and guarantees type safety at compile time.'
      }),

      buildQuestionItem({
        id: 'group-anagrams',
        code: `use std::collections::HashMap;

pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
    let mut map: HashMap<String, Vec<String>> = HashMap::new();
    for s in strs {
        let mut chars: Vec<char> = s.chars().collect();
        chars.sort_unstable();
        let key: String = chars.into_iter().collect();
        map.entry(key).or_default().push(s);
    }
    map.into_values().collect()
}`,
        explanations: {
          def: 'Define group_anagrams accepting owned vector of strings.',
          init: 'Instantiate HashMap and collect characters into Vec<char>.',
          exec: 'Sort characters with sort_unstable() to form canonical key.',
          mutate: 'Use entry API .or_default().push(s) to append string to group.',
          return: 'Collect map values into Vec<Vec<String>> via into_values().collect().',
          comment: 'Import HashMap from std::collections.'
        },
        notes: 'Entry API map.entry(key).or_default() avoids redundant lookups by returning a mutable reference to the bucket vector in a single lookup.'
      }),

      buildQuestionItem({
        id: 'valid-anagram',
        code: `pub fn is_anagram(s: &str, t: &str) -> bool {
    if s.len() != t.len() {
        return false;
    }
    let mut counts = [0i32; 26];
    for (b1, b2) in s.bytes().zip(t.bytes()) {
        counts[(b1 - b'a') as usize] += 1;
        counts[(b2 - b'a') as usize] -= 1;
    }
    counts.iter().all(|&c| c == 0)
}`,
        explanations: {
          def: 'Define is_anagram borrowing string slices &str.',
          branch: 'Early return false if string byte lengths differ.',
          init: 'Initialize stack array [0i32; 26].',
          loop: 'Iterate over paired byte streams using s.bytes().zip(t.bytes()).',
          mutate: 'Increment and decrement character frequency counters.',
          return: 'Check if all counters are zero via .iter().all(|&c| c == 0).',
          comment: 'Function signature.'
        },
        notes: 's.bytes().zip(t.bytes()) iterates both strings in lockstep without memory allocations.'
      }),

      buildQuestionItem({
        id: 'longest-consecutive-sequence',
        code: `use std::collections::HashSet;

pub fn longest_consecutive(nums: &[i32]) -> i32 {
    let set: HashSet<i32> = nums.iter().cloned().collect();
    let mut longest = 0;

    for &num in &set {
        if !set.contains(&(num - 1)) {
            let mut curr = num;
            let mut streak = 1;
            while set.contains(&(curr + 1)) {
                curr += 1;
                streak += 1;
            }
            longest = std::cmp::max(longest, streak);
        }
    }
    longest
}`,
        explanations: {
          def: 'Define longest_consecutive taking &[i32].',
          init: 'Collect slice into HashSet and initialize longest to 0.',
          loop: 'Iterate through set and loop while set.contains(&(curr + 1)).',
          branch: 'Only start counting if num - 1 is not in the set.',
          mutate: 'Increment curr and streak counter.',
          return: 'Return longest streak found.',
          comment: 'Import HashSet from std::collections.'
        },
        notes: 'Checking sequence starts ensures every number is visited at most twice, providing O(N) execution.'
      }),

      buildQuestionItem({
        id: 'subarray-sum-equals-k',
        code: `use std::collections::HashMap;

pub fn subarray_sum(nums: &[i32], k: i32) -> i32 {
    let mut prefix_counts = HashMap::new();
    prefix_counts.insert(0, 1);
    let mut current_sum = 0;
    let mut count = 0;

    for &num in nums {
        current_sum += num;
        if let Some(&freq) = prefix_counts.get(&(current_sum - k)) {
            count += freq;
        }
        *prefix_counts.entry(current_sum).or_insert(0) += 1;
    }
    count
}`,
        explanations: {
          def: 'Define subarray_sum using prefix sum hash map.',
          init: 'Insert base prefix (0, 1) into HashMap.',
          loop: 'Iterate through numbers in slice.',
          branch: 'Pattern match on prefix_counts.get(&(current_sum - k)).',
          mutate: 'Increment current_sum, count, and entry frequency.',
          return: 'Return total matching count.',
          comment: 'Import HashMap.'
        },
        notes: '*prefix_counts.entry(current_sum).or_insert(0) += 1 atomically inserts or increments count in-place.'
      }),

      buildQuestionItem({
        id: 'contains-duplicate-ii',
        code: `use std::collections::HashMap;

pub fn contains_nearby_duplicate(nums: &[i32], k: usize) -> bool {
    let mut window = HashMap::new();
    for (i, &num) in nums.iter().enumerate() {
        if let Some(&prev_idx) = window.get(&num) {
            if i - prev_idx <= k {
                return true;
            }
        }
        window.insert(num, i);
    }
    false
}`,
        explanations: {
          def: 'Define contains_nearby_duplicate taking slice and distance k.',
          init: 'Instantiate window HashMap.',
          loop: 'Iterate over elements and indices using .iter().enumerate().',
          branch: 'Check if previous index exists and i - prev_idx <= k.',
          mutate: 'Insert or update element index in window map.',
          return: 'Return false if no nearby duplicate satisfies the distance requirement.',
          comment: 'Import HashMap.'
        },
        notes: 'Maintains index positions to detect duplicates within distance k in O(N) time and O(min(N, k)) space.'
      }),

      buildQuestionItem({
        id: 'insert-delete-getrandom',
        code: `use std::collections::HashMap;

pub struct RandomizedSet {
    nums: Vec<i32>,
    indices: HashMap<i32, usize>,
}

impl RandomizedSet {
    pub fn new() -> Self {
        RandomizedSet {
            nums: Vec::new(),
            indices: HashMap::new(),
        }
    }

    pub fn insert(&mut self, val: i32) -> bool {
        if self.indices.contains_key(&val) {
            return false;
        }
        self.indices.insert(val, self.nums.len());
        self.nums.push(val);
        true
    }
}`,
        explanations: {
          def: 'Define RandomizedSet struct with Vec<i32> and HashMap<i32, usize>.',
          init: 'Construct empty vector and map in new().',
          branch: 'Return false if val already exists in indices map.',
          mutate: 'Record value index in map and push value onto vector.',
          return: 'Return true upon successful insertion.',
          comment: 'Struct implementation.'
        },
        notes: 'Vec enables O(1) random element indexing, while HashMap maps values to their vector indices for O(1) operations.'
      })
    ]
  };
}

module.exports = {
  getHashingQuestions
};
