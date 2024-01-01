// function to select answers
    // if answer is wrong display 'wrong' and decrease timer by 15
    // if answer is correct display 'correct' and show next question
    function selectAnswer(e) {
        console.log('selectanswer function works')
        // target property return the element on which the event occured
        // const selectedBtn = e.target;
        // const isCorrect = selectedBtn.dataset.correct;
        // const displayCorrect = document.createElement('h3');
        // correct condition
        // if (isCorrect === 'true') {
            // console.log('correct answer')
            // displayCorrect.innerHTML = 'Correct!';
            // add scores + timer
            // add click eventlistener to correct answer to show next question
            // selectedBtn.addEventListener('click', showQuestion);
            // to check how it worked with to do list
            // hideQuestion();
            // showQuestion();
        // } else {
            // console.log('wrong answer');
            // displayCorrect.innerHTML = 'Wrong!';
            // timer = timer - 15;
            // displayTimer.innerHTML = timer;
    
            // questionElement.appendChild(displayCorrect);
        // }
        // questionElement.appendChild(displayCorrect);
    }

    
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

// add eventlistener to answer buttons EZT SEHOL NEM HASZNALOM
answersElement.forEach(function(click) {
    click.addEventListener('click', selectAnswer(e));
    console.log('buttons work')
})
