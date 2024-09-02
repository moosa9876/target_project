export interface Question {
    questionText: string;
    answerOptions: { answerText: string; isCorrect: boolean }[];
  }
  
  export const quizData: Question[] = [
    {
        questionText: 'What is the correct syntax to declare a variable in C?',
        answerOptions: [
          { answerText: 'int x;', isCorrect: true },
          { answerText: 'declare x;', isCorrect: false },
          { answerText: 'var x = 0;', isCorrect: false },
          { answerText: 'x: int;', isCorrect: false },
        ],
      },
      {
        questionText: 'Which of the following is a valid comment in C?',
        answerOptions: [
          { answerText: '/* This is a comment */', isCorrect: true },
          { answerText: '// This is a comment', isCorrect: true },
          { answerText: '# This is a comment', isCorrect: false },
          { answerText: '<!-- This is a comment -->', isCorrect: false },
        ],
      },
      {
        questionText: 'Which of the following data types is used to store a character in C?',
        answerOptions: [
          { answerText: 'char', isCorrect: true },
          { answerText: 'string', isCorrect: false },
          { answerText: 'int', isCorrect: false },
          { answerText: 'float', isCorrect: false },
        ],
      },
      {
        questionText: 'What will be the output of the following code: printf("%d", 5 + 3 * 2);?',
        answerOptions: [
          { answerText: '16', isCorrect: false },
          { answerText: '11', isCorrect: false },
          { answerText: '10', isCorrect: true },
          { answerText: '13', isCorrect: false },
        ],
      },
      {
        questionText: 'Which operator is used to access the address of a variable in C?',
        answerOptions: [
          { answerText: '*', isCorrect: false },
          { answerText: '&', isCorrect: true },
          { answerText: '@', isCorrect: false },
          { answerText: '%', isCorrect: false },
        ],
      },
      {
        questionText: 'Which of the following is used to create a loop in C?',
        answerOptions: [
          { answerText: 'for', isCorrect: true },
          { answerText: 'while', isCorrect: true },
          { answerText: 'repeat', isCorrect: false },
          { answerText: 'loop', isCorrect: false },
        ],
      },
      {
        questionText: 'What does the "break" statement do in a loop?',
        answerOptions: [
          { answerText: 'Exits the loop', isCorrect: true },
          { answerText: 'Skips the current iteration', isCorrect: false },
          { answerText: 'Continues to the next iteration', isCorrect: false },
          { answerText: 'Restarts the loop', isCorrect: false },
        ],
      },
      {
        questionText: 'Which of the following is the correct way to define a constant in C?',
        answerOptions: [
          { answerText: '#define PI 3.14', isCorrect: true },
          { answerText: 'const PI = 3.14;', isCorrect: false },
          { answerText: 'constant PI = 3.14;', isCorrect: false },
          { answerText: 'define constant PI 3.14;', isCorrect: false },
        ],
      },
      {
        questionText: 'Which of the following function is used to read a string in C?',
        answerOptions: [
          { answerText: 'gets()', isCorrect: true },
          { answerText: 'scanf()', isCorrect: true },
          { answerText: 'read()', isCorrect: false },
          { answerText: 'fgets()', isCorrect: true },
        ],
      },
      {
        questionText: 'Which header file is required to use the "malloc" function in C?',
        answerOptions: [
          { answerText: '<stdio.h>', isCorrect: false },
          { answerText: '<stdlib.h>', isCorrect: true },
          { answerText: '<string.h>', isCorrect: false },
          { answerText: '<math.h>', isCorrect: false },
        ],
      },
    ];
