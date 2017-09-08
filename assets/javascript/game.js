var gameTitle = ["sonic the hedgehog", "super mario world", "mortal kombat", "the legend of zelda", "final fantasy vii", "metal gear solid", "street fighter", "megaman x", "tekken", "pokemon"];
var remainingGuesses;
var wins = 0;
var guessedLetter;
var correctAnswer;
var question;
var selected_array;
var themeSong = [ "https://www.youtube.com/embed/z0XiGtIYrCI?ecver=1&rel=0&autoplay=1&amp;controls=0&amp;showinfo=0",
                  "https://www.youtube.com/embed/VH8mQRXemuo?ecver=1&rel=0&autoplay=1&amp;controls=0&amp;showinfo=0",
                  "https://www.youtube.com/embed/KUjx8UtcKQ4?ecver=1&rel=0&autoplay=1&amp;controls=0&amp;showinfo=0",
                  "https://www.youtube.com/embed/cGufy1PAeTU?ecver=1&rel=0&autoplay=1&amp;controls=0&amp;showinfo=0",
                  "https://www.youtube.com/embed/Gbvc_3iOeoU?ecver=1&rel=0&autoplay=1&amp;controls=0&amp;showinfo=0",
                  "https://www.youtube.com/embed/yd3zMu707XU?ecver=1&rel=0&autoplay=1&amp;controls=0&amp;showinfo=0",
                  "https://www.youtube.com/embed/LQw-a8sApLQ?ecver=1&rel=0&autoplay=1&amp;controls=0&amp;showinfo=0",
                  "https://www.youtube.com/embed/YROV9Gj7e2g?ecver=1&rel=0&autoplay=1&amp;controls=0&amp;showinfo=0",
                  "https://www.youtube.com/embed/9NUu8OMVuhY?ecver=1&rel=0&autoplay=1&amp;controls=0&amp;showinfo=0",
                  "https://www.youtube.com/embed/rg6CiPI6h2g?ecver=1&rel=0&autoplay=1&amp;controls=0&amp;showinfo=0",];

var titleDisplay = document.getElementById("currentWord");
var remainingGuessesDisplay = document.getElementById("guessesRemaining");
var guessedLetterDisplay = document.getElementById("guessedLetter");
var score = document.getElementById("wins");
var answer = document.getElementById("titleAnswer");


function gameStart()
{
  selected_array = Math.floor(Math.random() * gameTitle.length);
  question = gameTitle[selected_array];
  remainingGuesses = 13;
  guessedLetter = [];
  correctAnswer = [];

  for (var i = 0; i < question.length; i++)
  {
    if(question.charAt(i)===" ")
    {
        correctAnswer.push("&nbsp;");
    }
    else
    {
        correctAnswer.push("_");
    }
  }

  titleDisplay.innerHTML = correctAnswer.join(" ");
  remainingGuessesDisplay.innerHTML = remainingGuesses;
}

function userInput (letter) 
{
  if (question.indexOf(letter) === -1) 
  {
    remainingGuesses--;
    remainingGuessesDisplay.innerHTML = remainingGuesses;
    guessedLetter.push(letter);
    guessedLetterDisplay.innerHTML = guessedLetter.join (", ");

  } 
  else 
  {
    for (var i = 0; i < question.length; i++) 
    {
      if (question[i] === letter) 
      {
        correctAnswer[i] = letter;
      }
    }

    titleDisplay.innerHTML = correctAnswer.join(" ");
  }
}

function newGame ()
{
  if (remainingGuesses === 0) 
  {
    guessedLetterDisplay.innerHTML = "";
    gameStart ();

  }
  else if(correctAnswer.indexOf("_") === -1)
  {
    wins++;
    score.innerHTML = wins;
    guessedLetterDisplay.innerHTML = "";
    title = question;
    answer.innerHTML = title;

    document.getElementById("myVideo").src = themeSong[selected_array];

    gameStart();

  }
}

document.onkeyup = function (event) 
{
  if (event.keyCode === 32) {
        // prevent default behaviour
        event.userInput();
        return false;
    } 
  else {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  userInput(userGuess);
  newGame();
  }
  
};

gameStart();

