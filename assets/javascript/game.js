var lettersUsed;
var guessesLeft;
var wins =0;
var losses =0;
var dashes;
var pokeName;
var pokeImg;
var gameStart=false;

//spans that will change
var lettersUsedSpan = document.getElementById("used");
var guessesLeftSpan = document.getElementById("attempts");
var winSpan = document.getElementById("wins");
var lossSpan = document.getElementById("losses");
var dashSpan = document.getElementById("dashes");
var imgDisplayed = document.getElementById("pokeMonster");

var pokemon = [
    {
        name: "eevee",
        pic: "assets/images/242x299Eevee.png"
    },
    {
        name: "kangaskhan",
        pic: "assets/images/250px-115Kangaskhan.png"
    },
    {
        name: "mewtwo",
        pic: "assets/images/250px-150Mewtwo.png"
    },
    {
        name: "pichu",
        pic: "assets/images/250x250Pichu.png"
    },
    {
        name: "snorlax",
        pic: "assets/images/268x266Snorlax.jpg"
    },
    {
        name: "mew",
        pic: "assets/images/295x300Mew.jpg"
    },
    {
        name: "sylveon",
        pic: "assets/images/300x300Sylveon.png"
    },
    {
        name: "scizor",
        pic: "assets/images/330x472scizor.png"
    },
    {
        name: "pikachu",
        pic: "assets/images/350x323Pikachu.png"
    },
    {
        name: "gardevoir",
        pic: "assets/images/350x344Gardevoir.png"
    },
    {
        name: "aerodactyl",
        pic: "assets/images/475x475Aerodactyl.png"
    },
    {
        name: "kyogre",
        pic: "assets/images/480x480kyogre.png"
    }
];
winSpan.textContent = wins;
lossSpan.textContent = losses;

reset();

//starting the game
document.onkeyup = function (event){
    var userInput = event.key.toLowerCase();
    var letters = "abcdefghijklmnopqrstuvwxyz";

    if(letters.includes(userInput)){

        for(var i = 0; i < pokeName.length; i++){
            //if userInput is in random word, replace blank with letter
            if(pokeName[i].toLowerCase() === userInput){
                dashes[i] = pokeName[i];
                dashSpan.textContent = dashes.join("\xa0");
                //"\xa0" is a non breakable space

                //check win condition
                if(!dashes.includes("_")){
                    wins++;
                    winSpan.textContent = wins;

                    alert("WINNER!");
                    //reset game
                    reset();
                }

            }else{
                //if userInput wrong
                if(!pokeName.toLowerCase().includes(userInput) && !lettersUsed.includes(userInput)){
                    //attempts decrement and letter added to used letters
                    guessesLeft--;
                    lettersUsed.push(userInput);
                    guessesLeftSpan.textContent = guessesLeft;
                    lettersUsedSpan.textContent = lettersUsed;
    
                    //check if lost
                    if(guessesLeft === 0){
                        losses++;
                        lossSpan.textContent = losses;
    
                        alert("YOU LOSE!");
                        reset();
                    }
                }
            }
        }
    }
}

function reset(){
    //reset counters and letters
    lettersUsed = [];
    guessesLeft = 6;
    lettersUsedSpan.textContent = lettersUsed;
    guessesLeftSpan.textContent = guessesLeft;

    //get a random # from 0 to n-1
    var randNum = Math.floor(Math.random() * pokemon.length);
    //use same randNum to get the objects in the array pokemon
    pokeName = pokemon[randNum].name;
    pokeImg = pokemon[randNum].pic;
    imgDisplayed.src = pokeImg; //img reflects name given
    console.log(pokeName);

    dashes=[];
    //create underscores in place of word
    for(var i = 0; i < pokeName.length; i++){
        if(pokeName[i] === " "){
            dashes.push(" ");
        }else{
            dashes.push("_");
        }
    }
    dashSpan.textContent = dashes.join("\xa0");

    gameStart = true;
}