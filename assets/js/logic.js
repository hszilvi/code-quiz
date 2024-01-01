// link all the questions/answers to html 
const questionElement = document.getElementById('questions');
const questionTitle = document.getElementById('question-title');
const answersElement = document.getElementById('choices');

// const correctAnswerNot = document.getElementById('correct-answer');
// const wrongAnswerNot = document.getElementById('wrong-answer');
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
    console.log('correct button is pressed');
    // displayAnswer();
    // correctNotification();
    if (currentQuestionIndex >= 5) {
        // console.log('wtf')
        whatAnswer.innerHTML = 'Correct!';
        stopTimer();
    } else {
        showQuestion(currentQuestionIndex);
        // console.log(currentQuestionIndex);
    } 
}
// ---------------------------
// add click eventlistener to start button to show the first question OK OK OK OK 
startBtn.addEventListener('click', startQuiz);
// -----------------------------------

// add eventlistener to answer buttons EZT SEHOL NEM HASZNALOM
answersElement.forEach(function(click) {
    click.addEventListener('click', selectAnswer(e));
    console.log('buttons work')
})

// display if answer is wrong or correct NEM HASZNALT FUGGVENYBEN HIVATKOZOM CSAK
function displayAnswer(checkAnswer) {
    const displayAnswerWrongOrCorrect = document.createElement('h3')
    displayAnswerWrongOrCorrect = checkAnswer;
    questionElement.appendChild(displayAnswerWrongOrCorrect);
    console.log('dipslay answer works');
}
// hide wrong and correct element from display SEHOL NEM HASZNALOM
function correctNotification() {
    console.log('hideq works');
    displayAnswer(displayCorrect);
    displayCorrect.innerHTML = 'Correct!';
    questionElement.appendChild(displayCorrect);
    checkAnswer.innerHTML = 'Correct';
    // console.log(answerBtns.firstChild);
    //     answerBtns.removeChild(answerBtns.firstChild);
    // showQuestion();
}
// if answer is wrong this function is called OK OK OK OK
function wrongAnswer() {
    console.log('wrong works');
    whatAnswer.innerHTML = 'Wrong!';
    timer = timer - 15;
    score = timer;
}
// EZT SEHOL SEM HASZNALOM
function correctAnswer() {
    console.log('correct works');
    whatAnswer.innerHTML = 'Correct';
}
// function displayWrong() {
//     console.log('display wrong works');
//     const displayWrong = document.createElement('h3');
//     questionElement.appendChild(displayWrong);

//     if (answersElement.firstChild.innerHTML !== 'Wrong!') {    
//         displayWrong.innerHTML = 'Wrong';

//     } else {
//         questionElement.removeChild(questionElement.firstChild);
//         console.log('wtf')
//     }  
    
// }



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
    submitBtn.addEventListener('click', function() {
        console.log('submit works');
        let inputIni = document.getElementById('initials').value;
        let initials = inputIni;
        if (initials === null) {
            alert('Type your initials!');
        } else {
            let totalScores = localStorage.getItem('finalScore');
            totalScores = JSON.parse(finalScore);
        }

    })
}

