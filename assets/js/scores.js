const highScoreDiv = document.getElementById('highscores');
const clearBtn = document.getElementById('clear');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
// display scores and initials from local storage
for (i = 0; i < highScores.length; i++ ) {
    let li = document.createElement('li');
    li.textContent = `${highScores[i].name}: ${highScores[i].score}`;
    highScoreDiv.appendChild(li);
    
}
// clear the store scores and reload the page
clearBtn.addEventListener('click', function() {
    highScoreDiv.innerHTML = '';
    localStorage.clear();
    location.reload();
})