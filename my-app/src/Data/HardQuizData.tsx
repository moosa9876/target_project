export interface Question {
    questionText: string;
    answerOptions: { answerText: string; isCorrect: boolean }[];
  }
  
  export const quizData: Question[] = [
    {
      questionText: 'Given a string, find the length of the longest substring without repeating characters. What is the length for the string "abcabcbb"?',
      answerOptions: [
        { answerText: '2', isCorrect: false },
        { answerText: '3', isCorrect: true },
        { answerText: '4', isCorrect: false },
        { answerText: '5', isCorrect: false },
      ],
    },
    {
      questionText: 'Given two sorted arrays, find the median of the two sorted arrays. What is the median for nums1 = [1, 3] and nums2 = [2]?',
      answerOptions: [
        { answerText: '1.0', isCorrect: false },
        { answerText: '2.0', isCorrect: true },
        { answerText: '2.5', isCorrect: false },
        { answerText: '3.0', isCorrect: false },
      ],
    },
    {
      questionText: 'Find all the shortest transformation sequences from "hit" to "cog" using the dictionary ["hot","dot","dog","lot","log","cog"]. What is one valid sequence?',
      answerOptions: [
        { answerText: '["hit","hot","dot","dog","cog"]', isCorrect: true },
        { answerText: '["hit","hot","lot","log","cog"]', isCorrect: true },
        { answerText: '["hit","dot","dog","cog"]', isCorrect: false },
        { answerText: '["hit","hot","dog","cog"]', isCorrect: false },
      ],
    },
    {
      questionText: 'Implement regular expression matching with support for "." and "*". What is the result of matching s = "aab" with p = "c*a*b"?',
      answerOptions: [
        { answerText: 'false', isCorrect: false },
        { answerText: 'true', isCorrect: true },
        { answerText: 'true, but requires extra steps', isCorrect: false },
        { answerText: 'false, due to extra characters', isCorrect: false },
      ],
    },
    {
      questionText: 'Given an array of non-negative integers representing the height of bars in a histogram, how much water can be trapped after raining for the heights [0,1,0,2,1,0,1,3,2,1,2,1]?',
      answerOptions: [
        { answerText: '4', isCorrect: false },
        { answerText: '5', isCorrect: false },
        { answerText: '6', isCorrect: true },
        { answerText: '7', isCorrect: false },
      ],
    },
    {
      questionText: 'Return the longest palindromic substring in the string "babad". What is one possible answer?',
      answerOptions: [
        { answerText: '"bab"', isCorrect: true },
        { answerText: '"aba"', isCorrect: true },
        { answerText: '"babab"', isCorrect: false },
        { answerText: '"bad"', isCorrect: false },
      ],
    },
    {
      questionText: 'Find the kth largest element in the array [3,2,1,5,6,4] with k = 2. What is the kth largest element?',
      answerOptions: [
        { answerText: '4', isCorrect: false },
        { answerText: '5', isCorrect: true },
        { answerText: '6', isCorrect: false },
        { answerText: '3', isCorrect: false },
      ],
    },
    {
      questionText: 'Reverse the nodes of a linked list [1,2,3,4,5] k at a time with k = 3. What is the modified list?',
      answerOptions: [
        { answerText: '[1,2,3,4,5]', isCorrect: false },
        { answerText: '[3,2,1,4,5]', isCorrect: true },
        { answerText: '[2,1,4,3,5]', isCorrect: false },
        { answerText: '[1,4,3,2,5]', isCorrect: false },
      ],
    },
    {
      questionText: 'Find all the start indices of "abc"’s anagrams in the string "cbaebabacd". What are the start indices?',
      answerOptions: [
        { answerText: '[1, 6]', isCorrect: false },
        { answerText: '[0, 6]', isCorrect: true },
        { answerText: '[2, 4]', isCorrect: false },
        { answerText: '[1, 3]', isCorrect: false },
      ],
    },
    {
      questionText: 'Given two strings "ADOBECODEBANC" and "ABC", find the minimum window in "ADOBECODEBANC" which will contain all the characters in "ABC". What is the minimum window?',
      answerOptions: [
        { answerText: '"ADOBE"', isCorrect: false },
        { answerText: '"BANC"', isCorrect: true },
        { answerText: '"CODEBANC"', isCorrect: false },
        { answerText: '"DOBECODEBANC"', isCorrect: false },
      ],
    },
  ];
  