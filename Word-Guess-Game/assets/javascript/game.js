//CAPTAINS LOG: Tough assignment! I couldn't get my strings to change to underscores, I did not create my EVENTS as well. 
//After this program I would still like to work on this project and get the images to appear with the correct name in the array
//as well as place music in the background and get the game to start at the push of a button. 
//variables in html
var computerPickSpan = document.getElementById("computerPick");
var usedLettersSpan = document.getElementById("usedLetters");
var attemptsSpan = document.getElementById("attempts");
var winsSpan = document.getElementById("wins");
var lossesSpan = document.getElementById("losses");
var answersSpan = document.getElementById("answers");
var wins = 0;
var losses = 0;
var attempts = 0;
//names to choose for the game
var pokeNames = ["mewtwo", "pikachu", "pichu", "mew", "eevee", "kangaskhan", "snorlax", "scizor", "sylveon", "gardevoir", "aerodactyl", "kyogre"];


//GET GAME TO START WITH TOUCH OF A BUTTON!

//get game to generate random name
//how to get pc to choose random name
var randomIndex = Math.floor(Math.random() * pokeNames.length);
console.log("this is random index: " + randomIndex);
var computerPick = pokeNames[randomIndex];
console.log("this is computer choice: " + computerPick);
console.log("this is computerChoice's data type: " + typeof computerPick);
console.log("The length of pc choice is " + computerPick.length);
//making answer array
//the letters used by player replace underscores
var answerArray = [];

for (var i = 0; i < randomIndex.length; i++) {
    answerArray[i] = "_";
}
console.log("This is answerArray " + answerArray);
var lettersLeft = randomIndex.length;
console.log("Letters left " lettersLeft);

//the game
while (lettersLeft > 0) {
    if (guess)
}
//get pc replace letters with underscores


//when pc chooses name, a picture displays

//user then guesses a letter
document.onkeyup = function(event) {
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();
}
//user letters displayed on answers or letters used


//after each attempt, the attempt score goes down by one

//when attempt score reaches 0, end game

//when game ends, add a point to losses

//if player wins, add a point to wins

//ask player if they want to play again

//when player starts new game
//a new image will then display
//a new number of underscores display

computerChoiceSpan.textContent = computerPick;
usedLettersSpan.textContent = usedLetters;
attemptsSpan.textContent = attempts;
winsSpan.textContent = wins;
lossesSpan.textContent = losses;
// answersSpan.textContent = answers;
