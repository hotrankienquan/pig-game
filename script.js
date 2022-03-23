'use strict';
const btnNewElement = document.querySelector('.btn--new');
const player0Element = document.querySelector('.player--0')
const player1Element = document.querySelector('.player--1')

const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const diceImgElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
score0Element.textContent = 0
score1Element.textContent = 0
diceImgElement.classList.add('hidden')

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
function switchPlayer() {
     document.querySelector(`#current--${activePlayer}`).textContent = 0;

        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0Element.classList.toggle('player--active')
        player1Element.classList.toggle('player--active')
}
btnNewElement.addEventListener('click', function () {
    scores[0] = 0;
    scores[1] = 0;
    // activePlayer = 0;
    score0Element.textContent = 0;
    score1Element.textContent = 0;
    current0Element.textContent = 0;
    current1Element.textContent = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
    player0Element.classList.add('player--active')
    diceImgElement.classList.add('hidden')
    playing = true;

})
btnRoll.addEventListener('click', function () {
    if (playing) {
        
    
    // 1. generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. display dice
    diceImgElement.classList.remove('hidden')
    diceImgElement.src = `dice-${dice}.png`;

    // 3 if rolled 1, switch next player
    if (dice !== 1) {
        // add dice to current score
        currentScore = currentScore + dice;
        // current0Element.textContent = currentScore; 
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore

    }
    else {
        // switch to next player
       switchPlayer()
        }
    } else {
     alert("please play again")  
    }
})
btnHold.onclick = function () {
    if (playing) {
        // 1. add current score to active player's score
        scores[activePlayer] += currentScore;
        // score0Element.textContent = scores[activePlayer];
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

        // 2. check if total score >100 => wwin
        if (scores[activePlayer] >= 100) {
            // finish the game
            playing = false;
            diceImgElement.classList.add('hidden')

            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        } else {
        
            // switch
            switchPlayer();
        }
    }
}