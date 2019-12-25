/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;
var gamePLaying = true; 

init();
//command to select the dice class and edit CSS attributes
//we are setting it not to show anything until the event handler.
document.querySelector('.dice').style.display = 'none';

//we are using the getElementById to edit the Ids directly
// we are setting the score for player 1-2 to 0 by editing the textcontent
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


//we are setting up an eventListener. Nothing will happen till the event gets triggered
// in this case it's when the we click on the btn-roll
document.querySelector('.btn-roll').addEventListener('click', function () {

        if(gamePLaying) {
        //this is how you can set up a random number generator using
        //the math function

        //1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //we can set up a varaible to shorten the process of selecting
        // classes and such. Always look for oppurtunities to simplify code.

        //2. Display the result
        var diceDOM = document.querySelector('.dice');

        //when the eventHandler is triggered we are making the dice appear
        //on the screen and also linking pics with the random number generated.
        //we are doing this by having the dice random funtion add on to the strings to select a picture in the files
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';


        //3. Update the round score IF the rolled number was Not a 1
        if (dice !== 1) {
            //add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {

            roundScore = 0;
            //next player
            nextPlayer()
        }
        }
    });



if (gamePLaying) {
    document.querySelector('.btn-hold').addEventListener('click', function () {
        //Add Current score to GLOBAL score
        scores[activePlayer] += roundScore;



        //update the UI 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];




        //check if the player won the game

        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
            gamePLaying = false;
        } else {
            nextPlayer();
        }




    });
}
function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

//New game button
document.querySelector('.btn-new').addEventListener('click', init);





function init() {

    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePLaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'player 1';
    document.querySelector('#name-1').textContent = 'player 2';
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')

    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')

}


    //dice = Math.floor(Math.random() * 6) + 1;


//document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '<em>'

//var x = document.querySelector('#score-0').textContent;

// document.querySelector('.dice').style.display = 'none';