// link all the questions/answers to html 
    // answers are button elements
    const questionElement = document.getElementById('questions');
    const questionTitle = document.getElementById('question-title');
    const answersElement = document.getElementById('choices');

    const correctAnswerNot = document.getElementById('correct-answer');
    const wrongAnswerNot = document.getElementById('wrong-answer');

    const startScreen = document.getElementById('start-screen');
    const endScreen = document.getElementById('end-screen');
    const finalScore = document.getElementById('final-score');
    

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
    // displayAnswer();
    // console.log('current question ' + currentQuestionIndex);
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
    // show and hide correct ans wrong display
    // const displayCorrect = document.createElement('h3');
    // displayCorrect.innerHTML = 'Correct!';
    // const displayWrong = document.createElement('h3');
    // displayWrong.innerHTML = 'Wrong!';
    // questionElement.appendChild(displayCorrect);
    // questionElement.appendChild(displayWrong);
    // displayCorrect.className = 'hide';
    // displayWrong.className = 'hide';

        // console.log('answer elements: ' + answersElement.innerHTML);
        // add eventlistener to buttons to get the correct and wrong answers
        // using dataset to get correct boolean element.dataset['keyname'] trigger onclick
        
        if (answer.correct) {
            // const displayCorrect = document.createElement('h3');
            // displayCorrect.innerHTML = 'Correct!';
            // questionElement.appendChild(displayCorrect);
            // displayAnswer()
            // correctAnswer();

            answerBtns.dataset.correct = answer.correct;
            score = timer;
            console.log('actual score ' + score);
            answerBtns.addEventListener('click', nextQuestion);
        } else {
            answerBtns.addEventListener('click', wrongAnswer);
            // const displayCorrect = document.createElement('h3');
            // displayCorrect.innerHTML = 'Wrong!';
            // questionElement.appendChild(displayCorrect);

        }
        // answerBtns.addEventListener('click', selectAnswer);
    })
}

// next question function with stop timer if questios end
function nextQuestion() {
    console.log('correct button is pressed');
    // displayAnswer();
    // correctNotification();
    if (currentQuestionIndex >= 5) {
        console.log('wtf')
        stopTimer();
    } else {
        showQuestion(currentQuestionIndex);
        console.log(currentQuestionIndex);
    }
        

    
    
}
// ---------------------------
// add click eventlistener to start button to show the first question OK OK OK OK 
startBtn.addEventListener('click', startQuiz);
// -----------------------------------


// add eventlistener to answer buttons
answersElement.forEach(function(click) {
    click.addEventListener('click', selectAnswer(e));
    console.log('buttons work')
})

// display if answer is wrong or correct
function displayAnswer(checkAnswer) {
    const displayAnswerWrongOrCorrect = document.createElement('h3')
    displayAnswerWrongOrCorrect = checkAnswer;
    questionElement.appendChild(displayAnswerWrongOrCorrect);
    console.log('dipslay answer works');

}
// hide wrong and correct element from display
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
function wrongAnswer() {
    console.log('wrong works');
    wrongAnswerNot.className = 'block';
    correctAnswerNot.className = 'hide';
    // displayWrong.innerHTML = 'Wrong!';
    // questionElement.appendChild(displayWrong);
    timer = timer - 15;
    score = timer;
    console.log('score after wrong answer ' + score);
}
function correctAnswer() {
    console.log('correct works');
    correctAnswerNot.className = 'block';
    wrongAnswerNot.className = 'hide;'
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
}

// press submit --> store final score and initials


