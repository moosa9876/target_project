// src/data/quizData.ts
export interface Question {
    questionText: string;
    answerOptions: { answerText: string; isCorrect: boolean }[];
  }
  
  export const quizData: Question[] = [
    {
      questionText: 'What is a correct syntax to output "Hello World" in Python?',
      answerOptions: [
        { answerText: 'p("Hello World")', isCorrect: false },
        { answerText: 'echo "Hello World"', isCorrect: false },
        { answerText: 'print("Hello Wrold")', isCorrect: true },
        { answerText: 'echo("Hello World");', isCorrect: false },
      ],
    },
    {
        questionText: 'Which of the following is a mutable data type in Python?',
        answerOptions: [
          { answerText: 'tuple', isCorrect: false },
          { answerText: 'list', isCorrect: true },
          { answerText: 'string', isCorrect: false },
          { answerText: 'frozenset', isCorrect: false },
        ],
    },
    {
        questionText: 'How do you create a virtual environment in Python?',
        answerOptions: [
          { answerText: 'python -m venv myenv', isCorrect: true },
          { answerText: 'python --create-virtual-env myenv', isCorrect: false },
          { answerText: 'virtualenv myenv', isCorrect: true },
          { answerText: 'python env create myenv', isCorrect: false },
        ],
    },
    {
        questionText: 'Which of the following is a Python framework used for web development?',
        answerOptions: [
          { answerText: 'Django', isCorrect: true },
          { answerText: 'React', isCorrect: false },
          { answerText: 'Flask', isCorrect: true },
          { answerText: 'Angular', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the output of the following code: print(2 ** 3)?',
        answerOptions: [
          { answerText: '5', isCorrect: false },
          { answerText: '8', isCorrect: true },
          { answerText: '6', isCorrect: false },
          { answerText: '9', isCorrect: false },
        ],
      },
      {
        questionText: 'Which keyword is used to define a function in Python?',
        answerOptions: [
          { answerText: 'func', isCorrect: false },
          { answerText: 'define', isCorrect: false },
          { answerText: 'def', isCorrect: true },
          { answerText: 'function', isCorrect: false },
        ],
    },
    {
        questionText: 'How do you start a comment in Python?',
        answerOptions: [
          { answerText: '// This is a comment', isCorrect: false },
          { answerText: '# This is a comment', isCorrect: true },
          { answerText: '/* This is a comment */', isCorrect: false },
          { answerText: '<!-- This is a comment -->', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the purpose of the "self" keyword in Python classes?',
        answerOptions: [
          { answerText: 'It is used to refer to the current class itself', isCorrect: false },
          { answerText: 'It is used to refer to the parent class', isCorrect: false },
          { answerText: 'It is used to refer to the instance of the class', isCorrect: true },
          { answerText: 'It is used to refer to global variables', isCorrect: false },
        ],
    },
    {
        questionText: 'Which of the following is used to handle exceptions in Python?',
        answerOptions: [
          { answerText: 'try-except', isCorrect: true },
          { answerText: 'try-catch', isCorrect: false },
          { answerText: 'do-catch', isCorrect: false },
          { answerText: 'catch-exception', isCorrect: false },
        ],
    },
    {
        questionText: 'What does the function range(5) return in Python?',
        answerOptions: [
          { answerText: 'A list of numbers from 1 to 5', isCorrect: false },
          { answerText: 'A list of numbers from 0 to 5', isCorrect: false },
          { answerText: 'A range object representing numbers from 0 to 4', isCorrect: true },
          { answerText: 'A range object representing numbers from 1 to 5', isCorrect: false },
        ],
    },
    // Add more questions as needed
  ];
  