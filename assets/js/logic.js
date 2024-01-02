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
    // stopTimer();
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
            console.log('actual score ' + score);
            answerBtns.addEventListener('click', nextQuestion);
            // correctAnswer();
        } else {
            answerBtns.addEventListener('click', wrongAnswer);
        }
    })
}

// next question function with stop timer if questios end
function nextQuestion() {
    // displayAnswer();
    // correctNotification();
    if (currentQuestionIndex >= 5) {
        whatAnswer.innerHTML = 'Correct!';
        stopTimer();
    } else {
        showQuestion(currentQuestionIndex);
    } 
}
// ---------------------------
// add click eventlistener to start button to show the first question OK OK OK OK 
startBtn.addEventListener('click', startQuiz);
// -----------------------------------

// if answer is wrong this function is called OK OK OK OK
function wrongAnswer() {
    whatAnswer.innerHTML = 'Wrong!';
    timer = timer - 10;
    score = timer;
}
// EZT SEHOL SEM HASZNALOM
function correctAnswer() {
    // console.log('correct works');
    whatAnswer.innerHTML = 'Correct';
}
// ---------------------------------------
// create timer function OK OK OK OK 
function countDown() {
    timeInterval = setInterval(function () {
        timer--;
        displayTimer.innerHTML = timer;
        if (timer <= 0) {
            clearInterval(timeInterval);
            stopTimer();
            finalScore.innerHTML = '0';
            displayTimer.innerHTML = '0';
            console.log('game over');
        } else {
            console.log('you still have time')
            score = timer;
            console.log('score: ' + score);
        }
    }, 1000);
}
// end quiz OK OK OK OK
function stopTimer() {
    console.log('stop timer works');
    clearInterval(timeInterval);
    startScreen.className = 'hide';
    endScreen.className = 'block';
    questionElement.className = 'hide';
    finalScore.innerHTML = score;
// press submit --> store final score and initials 
    // submitScores();
    
}
// if end of quiz submit button is pressed store the scores and initials in local storage
// function submitScores() {

let inputIni = document.getElementById('initials');
submitBtn.addEventListener('click', function() {
    saveScore();
});

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
// console.log(highScores);  

function saveScore() {
    let scoreList = {
        name: inputIni.value,
        score: score
    };
    console.log('saved clicked');
    console.log(inputIni.value);
    if (!inputIni.value) {
        alert('Type your initials!');
        scoreList = [];
    } else {
        // console.log(highScores);
        highScores.push(scoreList);
        localStorage.setItem('highScores', JSON.stringify(highScores));
        displayHighScores();
    }
};
const highScoreDiv = document.getElementById('highscores');
console.log(highScoreDiv);
function displayHighScores() {
    // console.log('display called');
    // console.log(highScores.length);
    highScoreDiv.innerHTML = '';
    highScores.forEach((score) => {
        let li = document.createElement('li');
        li.textContent = `${score.name}: ${score.score}`;
        console.log(li.textContent);
        highScoreDiv.appendChild(li);
    });
    console.log(highScoreDiv);
}

showHighScoresBtn.addEventListener('click', function() {
    console.log('clicked');
    displayHighScores();
})

console.log('it works');
// const highScoreDiv = document.getElementById('highscores');
const clearBtn = document.getElementById('clear');
console.log(clearBtn);
highScoreDiv.innerHTML = 'hello';
// clear local storage and highscores + reload the page
clearBtn.addEventListener('click', function() {
    console.log('highscore clr')
    highScoreDiv.innerHTML = '';
    localStorage.clear();
    location.reload();
})