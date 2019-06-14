

var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0 ;
var losses = 0 ;
var guess = 10 ;
var winstxt = document.getElementById("winstxt");
var lossestxt = document.getElementById("lossestxt");
var guesstxt = document.getElementById("guesstxt");
var guesssofartxt = document.getElementById("guesssofartxt");
var guessesleft = [];

document.onkeyup = function (event)
   {
       var player = event.key;
       var ranLetter = computerChoice[Math.floor(Math.random() * computerChoice.length)];


       console.log(`Player: ${player}`);
       console.log(`AI: ${ranLetter}`);

       if (computerChoice.indexOf(player) > -1)
       {
           if (player === ranLetter)
           {
               wins++;
               guess = 10;
               guessesleft = [];
           }
           if (player != ranLetter)
           {
               guess --;
               guessesleft.push(player.toString());
           }
           if (guess === 0)
           {
               guess = 10;
               losses ++;
               guessesleft = [];
           }
       }

       guesssofartxt.textContent = "You chose: " + player;
       guesstxt.textContent = "Guesses Left: " + guess;
       guesssofartxt.textContent = "Your Guesses so Far: " + guessesleft;
       winstxt.textContent = "wins: " + wins;
       lossestxt.textContent = "losses: " + losses;

};
     
