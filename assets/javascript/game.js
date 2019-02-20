//Pick a random word
//While the word has not been guessed {
 //Show the player their current progress
/*  Get a guess from the player
 If the player wants to quit the game {
 Quit the game
 }
 Else If the guess is not a single letter {
 Tell the player to pick a single letter
 }
 Else {
 If the guess is in the word {
 Update the player's progress with the guess
 }
 }
}
Congratulate the player on guessing the word
 */
var brandChocolate = ["toblerone", "godiva", "cadbury", "hershey", "nestle"];

var gameWord = brandChocolate[Math.floor(Math.random() * brandChocolate.length)];

var answerArray = StartGame();

function StartGame() {
  var answerArray = [];
  for (var i = 0; i < gameWord.length; i++) {
    answerArray[i] = "_ ";
  }
  return answerArray;
}
function StartGame() {
  document.getElementById('promptArray').innerHTML = "Start Game";
}
function Msg1(){
  document.getElementById('myText').innerHTML = 'Great! To begin, guess a letter.';
}
function Msg2(){
  document.getElementById('myText').innerHTML = 'OK. Goodbye.';
}


// var promptArray = [];
// for (var i = 0; i < gameWord.length; i++) {
//     document.getElementById("promptArray[i] = "_";
// }

// var remainingLetters = gameWord.length;

// while (remainingLetters > 0) {
//     // Game code goes here
//     alert(answerArray.join(" "));

//     var lettersGuessed = prompt("Guess a letter, or click Cancel to stop playing.");
//         if (lettersGuessed === null) {
//             break;
//         } else if (lettersGuessed.length !== 1) {
//             alert("Please enter a single letter.");
//         } else {
//             for (var j = 0; j < gameWord.length; j++) {
//                 if (gameWord[j] === lettersGuessed) {
//                 answerArray[j] = lettersGuessed;
//                 remainingLetters--;
//                  }
//                 }
// }
// }
// alert(answerArray.join(" "));
// alert("Good job! The answer was " + gameWord);


/* var clues = ["clueToblerone", "clueGodiva", "clueCadbury", "clueHershey", "clueNestle"];

var lettersGuessed = [];

var currentWord;

var currentClue;

var wrongGuessCount;


var confirmPlay = confirm("Would you like to play?");
if (confirmPlay === "no") {
    alert("Ok. Maybe next time");
  } else if (confirmPlay === "yes") {
    alert("Great! Let's get started");
    return diffChoice();
  } else {
    alert(badInput);
  }
 */



