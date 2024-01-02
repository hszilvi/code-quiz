// link all the questions/answers to html 
const questionElement = document.getElementById('questions');
const questionTitle = document.getElementById('question-title');
const answersElement = document.getElementById('choices');
const showHighScoresBtn = document.querySelector('.scores');
const whatAnswer = document.getElementById('what-answer');

const startScreen = document.getElementById('start-screen');
const endScreen = document.getElementById('end-screen');
const finalScore = document.getElementById('final-score');
const submitBtn = document.getElementById('submit');

// const highScoreDiv = document.getElementById('highscores');
// const clearBtn = document.getElementById('clear');
    
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
let timeInterval;
// -----------------------------------
// function that start the quiz by clicking start button OK OK OK OK
function startQuiz() {
    // hide start button if quiz is started
    startBtn.className = 'hide';
    // show first question
    showQuestion(currentQuestionIndex);
    // display timer, set to the value of timer
    displayTimer.innerHTML = timer;
    score = timer;
    // start timer
    countDown();
}
// ------------------------------------------
// function to make the questions + answers appear - answers should be buttons 
function showQuestion(n) {
    // clear questions
    answersElement.innerHTML = '';
    // show question
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.className = 'appear';
    questionTitle.innerHTML = currentQuestion.question;
    // show answers as buttons
    currentQuestion.answers.forEach(answer => {
        let answerBtns = document.createElement('button');
        answerBtns.innerHTML = answer.content;
        answersElement.appendChild(answerBtns);
        currentQuestionIndex = n;
        currentQuestionIndex++;
        // empty whatAnswer if next question is shown up
        whatAnswer.innerHTML = '';
        // using dataset to get correct boolean element.dataset['keyname'] trigger onclick      
        if (answer.correct) {
            // displayAnswer()
            answerBtns.dataset.correct = answer.correct;
            score = timer;
            answerBtns.addEventListener('click', nextQuestion);
            // correctAnswer();
        } else {
            answerBtns.addEventListener('click', wrongAnswer);
        }
    })
}
// next question function with stop timer if questios end
function nextQuestion() {
    if (currentQuestionIndex >= 5) {
        whatAnswer.innerHTML = 'Correct!';
        stopTimer();
    } else {
        showQuestion(currentQuestionIndex);
    } 
}

// add click eventlistener to start button to show the first question 
startBtn.addEventListener('click', startQuiz);

// if answer is wrong this function is called / it displays wrong and decrease timer 
function wrongAnswer() {
    whatAnswer.innerHTML = 'Wrong!';
    timer = timer - 10;
    score = timer;
}

// create timer function
function countDown() {
    timeInterval = setInterval(function () {
        timer--;
        displayTimer.innerHTML = timer;
        if (timer <= 0) {
            clearInterval(timeInterval);
            stopTimer();
            finalScore.innerHTML = '0';
            displayTimer.innerHTML = '0';
            score = 0;
        } else {
            score = timer;
        }
    }, 1000);
}
// end quiz, stop timer and display final score
function stopTimer() {
    clearInterval(timeInterval);
    startScreen.className = 'hide';
    endScreen.className = 'block';
    questionElement.className = 'hide';
    finalScore.innerHTML = score;
}

// if end of quiz submit button is pressed store the scores and initials in local storage
let inputIni = document.getElementById('initials');
submitBtn.addEventListener('click', function() {
    saveScore();
});

// get the data from loca storage
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// function to save data to object from local storage and open highscores html
function saveScore() {
    let scoreList = {
        name: inputIni.value,
        score: score
    };
    if (!inputIni.value) {
        alert('Type your initials!');
        scoreList = {};
    } else {
        highScores.push(scoreList);
        localStorage.setItem('highScores', JSON.stringify(highScores));
        window.location.href = 'highscores.html';
    }
};