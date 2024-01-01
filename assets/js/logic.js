
// link all the questions/answers to html 
    // answers are button elements
    const questionElement = document.getElementById('questions');
    const questionTitle = document.getElementById('question-title');
    const answersElement = document.getElementById('choices');
    // if start quiz button is pressed questionElement appears with first question
    const startBtn = document.getElementById('start');
    // display timer
    const displayTimer = document.getElementById('time');
    
// create variable to store the index of current question
// create variable to store the scores
// set timer to 75 as start value
let currentQuestionIndex = 0;
let score = 0;
let timer = 75;


// function that start the quiz by clicking start button
function startQuiz() {
    // hide start button 
    startBtn.className = 'hide';
    // display timer

    // increase question index
    // currentQuestionIndex++;
    // show question and increase question index
    // let currentQuestion = questions[currentQuestionIndex];
    // questionElement.className = 'appear';
    // questionTitle.innerHTML = currentQuestion.question;

    // show answers 

    // score = 0;
    showQuestion();
    displayTimer.innerHTML = timer;
    // start timer
    countDown();
}




// function to make the questions + answers appear - answers should be buttons
function showQuestion() {
    console.log('show q works')
    // clear questions

    // show question
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.className = 'appear';
    questionTitle.innerHTML = currentQuestion.question;

    // show answers as buttons
    console.log(currentQuestion); // this works
    console.log(currentQuestion.answers) // this is undefined
    currentQuestion.answers.forEach(answer => {
        let answerBtns = document.createElement('button');
        answerBtns.innerHTML = answer.content;
        console.log('answers ' +answerBtns.innerHTML);
        answersElement.appendChild(answerBtns);
        // add eventlistener to buttons to get the correct and wrong answers
        // using dataset to get correct boolean element.dataset['keyname']
        if (answer.correct) {
            answerBtns.dataset.correct = answer.correct;


        }
        answerBtns.addEventListener('click', selectAnswer);
    })

}

// add click eventlistener to start button to show the first question
startBtn.addEventListener('click', startQuiz);

// function to select answers
    // if answer is wrong display 'wrong' and decrease timer by 15
    // if answer is correct display 'correct' and show next question
function selectAnswer(e) {
    // target property return the element on which the event occured
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct;
    const displayCorrect = document.createElement('h3');
    
    // correct condition
    if (isCorrect === 'true') {
        console.log('correct answer')
        displayCorrect.innerHTML = 'Correct!';

        // add scores + timer
        // add click eventlistener to correct answer to show next question
        // selectedBtn.addEventListener('click', showQuestion);
        // to check how it worked with to do list
        // hideQuestion();
        // showQuestion();
    } else {
        console.log('wrong answer');
        displayCorrect.innerHTML = 'Wrong!';
        timer = timer - 15;
        displayTimer.innerHTML = timer;

        // questionElement.appendChild(displayCorrect);
    }
    questionElement.appendChild(displayCorrect);
}
// hide current question / remove first child if answer is correct function
// function hideQuestion() {
    // console.log('hideq works');
    // console.log(answerBtns.firstChild);

    //     answerBtns.removeChild(answerBtns.firstChild);
    
    // showQuestion();

// }

// create timer function
function countDown() {
    let timeInterval = setInterval(function () {
        timer--;
        displayTimer.innerHTML = timer;
        if (timer <= 0) {
            clearInterval(timeInterval);
            console.log('game over');
        } else {
            console.log('you still have time')
        }

    }, 1000);
}