// Create the variable that contains all the questions and answers -- array of objects
const questions = [
    {
        question : 'What does HTML stand for?',
        answers: [
            {content: 'Hyper Text Markup Language' , correct: true},
            {content: 'Home Tool Markup Language' , correct: false},
            {content: 'Hyperlinks and Text Markup Language' , correct: false},
            {content: 'Hyperlinks Markup Language' , correct: false},
        ]
    },
    {
        question : 'Choose the correct HTML element for the largest heading:',
        answers: [
            {content: "<plaintext><h1>" , correct: true},
            {content: "<plaintext><h6>" , correct: false},
            {content: "<plaintext><heading>" , correct: false},
            {content: "<plaintext><head>" , correct: false},
        ]
    },
    {
        question : 'What is the correct HTML element for inserting a line break?',
        answers: [
            {content: `<plaintext><break>` , correct: false},
            {content: `<plaintext><lb>` , correct: false},
            {content: `<plaintext><br>` , correct: true},
            {content: `<plaintext><b>` , correct: false},
        ]
    },
    {
        question : 'Which character is used to indicate an end tag?',
        answers: [
            {content: '*' , correct: false},
            {content: '<' , correct: false},
            {content: '/' , correct: true},
            {content: ']' , correct: false},
        ]
    },
    {
        question : 'How can you make a numbered list?',
        answers: [
            {content: '<plaintext><ol>' , correct: true},
            {content: '<plaintext><dl>' , correct: false},
            {content: '<plaintext><ul>' , correct: false},
            {content: '<plaintext><list>' , correct: false},

        ]
    },
];

// export { questions };
// link all the questions/answers to html 
    // answers are button elements
// const questionElement = document.getElementById('questions');
// const questionTitle = document.getElementById('question-title');
// const answersElement = document.getElementById('choices');
// if start quiz button is pressed questionElement appears with first question
// const startBtn = document.getElementById('start');

