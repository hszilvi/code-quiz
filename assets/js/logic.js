
// link all the questions/answers to html 
    // answers are button elements
    const questionElement = document.getElementById('questions');
    const questionTitle = document.getElementById('question-title');
    const answersElement = document.getElementById('choices');
    // if start quiz button is pressed questionElement appears with first question
    const startBtn = document.getElementById('start');
    
// create variable to store the index of current question
// create variable to store the scores
let currentQuestionIndex = 0;
let score = 0;


// console.log(questions);

// function that start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}
// function to make the questions + answers appear - answers should be buttons
function showQuestion() {
    // show question
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.className = 'appear';
    questionTitle.innerHTML = currentQuestion.question;
    startBtn.className = 'hide';
    // increase index to get next question 
    currentQuestionIndex++;
    console.log('currentquestionindex ' + currentQuestionIndex);

    // add answers as buttons
    console.log(currentQuestion); // this works
    console.log(currentQuestion.answers) // this is undefined
    currentQuestion.answers.forEach(answer => {
        let answerBtns = document.createElement('button');
        answerBtns.innerHTML = answer.content;
        console.log('answers ' +answerBtns.innerHTML);
        answersElement.appendChild(answerBtns);
        // add eventlistener to buttons to get the correct and wrong answers
        // using dataset to get correct boolean element.dataset['keyname']
        // if (answer.correct) {
        //     answerBtns.dataset.correct = answer.correct;


        // }
        // answerBtns.addEventListener('click', selectAnswer);
    })
}

// add click eventlistener to start button to show the first question
startBtn.addEventListener('click', showQuestion);


function selectAnswer(e) {
    // target property return the element on which the event occured
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct;
    const displayCorrect = document.createElement('h3');
    if (isCorrect === 'true') {
        console.log('correct answer')
        displayCorrect.innerHTML = 'Correct!';
        questionElement.appendChild(displayCorrect);
        // add scores + timer
        // display the next question, increase question index
        // currentQuestionIndex++;
        console.log(currentQuestionIndex);
        // add click eventlistener to correct answer to show next question
        selectedBtn.addEventListener('click', showQuestion);
        // to check how it worked with to do list
        // hideQuestion();
        // showQuestion();
    } else {
        console.log('wrong answer');
        displayCorrect.innerHTML = 'Wrong!';
        questionElement.appendChild(displayCorrect);
    }
}
// hide current question / remove first child if answer is correct function
function hideQuestion() {
    console.log('hideq works');
    // console.log(answerBtns.firstChild);

    //     answerBtns.removeChild(answerBtns.firstChild);
    
    showQuestion();

}