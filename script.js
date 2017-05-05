var puzzleArea = document.getElementsByClassName("puzzle")[0];
var guessButton = document.getElementsByClassName("guess-button")[0];
var guessedLetter = document.getElementById("guessed-letter");
var puzzleLetter = document.getElementsByClassName("puzzle-letter");
var howManyPlayers = document.getElementsByClassName("new-button-container")[0];
var sorry = document.getElementsByClassName("sorry")[0]
var solveButton = document.getElementsByClassName("solve-button")[0]
var solveAnswer = document.getElementById("guess-solve")
var playersNumber = document.getElementById("players-number")
var players = document.getElementsByClassName("players")[0]

var playerButton = document.getElementsByClassName("players-button")[0]
var playerNumberButton = document.getElementsByClassName("player-number-button")[0]
var formContainer = document.getElementsByClassName("form-container")


var playersNames = []

function submitNames(){

var inputNames = document.getElementsByClassName("player-name")
	for (var i = 0; i < inputNames.length; i++) {
		var player = new Player(inputNames[i].value)
		playersNames.push(player)
}
	players.innerHTML = ""
	playerButton.style.display = "none"
	makePuzzle()
	for (var i = 0; i < formContainer.length; i++) {
		formContainer[i].style.display = "inline-block"
	}


}

var wof = new Puzzle;
var wordArray = [];
var currentPlayer = 0



playerNumberButton.addEventListener("mouseover", function (){
	event.target.style.cursor = "pointer";
})

playerNumberButton.addEventListener("click", playerSelect);

playerButton.addEventListener("mouseover", function (){
	event.target.style.cursor = "pointer";
})

playerButton.addEventListener("click", submitNames);

// newButton.addEventListener("mouseover", function (){
// 	event.target.style.cursor = "pointer";
// })

// newButton.addEventListener("click", makePuzzle);

guessButton.addEventListener("mouseover", function (){
	event.target.style.cursor = "pointer";
})

guessButton.addEventListener("click",guessLetter);

solveButton.addEventListener("mouseover", function (){
	event.target.style.cursor = "pointer";
})

solveButton.addEventListener("click", solvePuzzle);

wof.loadWord("encyclopedia");
wof.loadWord("rattlesnake");
wof.loadWord("farmer");
wof.loadWord("skyscraper");
wof.loadWord("subway");
wof.loadWord("institution");
wof.loadWord("creature");
wof.loadWord("goat");
wof.loadWord("applesauce");
wof.loadWord("computer");

function makePuzzle () {
	wordArray = [];
	puzzleArea.innerHTML = "";
	sorry.innerHTML = playersNames[currentPlayer].name + "'s Turn " + playersNames[currentPlayer].score +" Points";
	var randomWord = Math.floor((Math.random() * wof.wordBank.length) + 0);
	word = wof.wordBank[randomWord];
	for (var i = 0; i < word.length; i++) {
	    wordArray.push(word.charAt(i))
	    console.log(wordArray)
		}
		wordArray.forEach(function(letter){
			puzzleArea.innerHTML += "<div class = 'puzzle-letter-box'> <div class = 'puzzle-letter'>" + letter + "</div> </div>"
		})

}

function nextPlayer() {
	currentPlayer +=1
	if (currentPlayer === playersNames.length) {
		currentPlayer =0
	}
	sorry.innerHTML = playersNames[currentPlayer].name + "'s Turn " + playersNames[currentPlayer].score +" Points";
}


function guessLetter () {
	for (var i = 0; i < wordArray.length; i++) {
		if (guessedLetter.value === wordArray[i]) {	
			var guessedLetterTrue = true
			puzzleLetter[i].style.display = "block"
			}
		}	
			if (guessedLetterTrue != true) {
			sorry.innerHTML = "Sorry, there are no " + guessedLetter.value + "'s <div class = 'next-player'>Next Player</div>"
			var nextButton = document.getElementsByClassName("next-player")[0]
			nextButton.addEventListener("mouseover", function (){
			event.target.style.cursor = "pointer";
				})

			nextButton.addEventListener("click", nextPlayer);

			}
				guessedLetter.value = ""
}

function solvePuzzle () {
	if (solveAnswer.value === word){
		sorry.innerHTML = "Congratulations!"
		alert("YOU WIN!")
	}
	else {
		sorry.innerHTML = "YOU GUESSED WRONG!"
	}
	solveAnswer.value = ""		
}


function Player (name) {
	this.name = name
	this.score = 0
}


function playerSelect() {
	howManyPlayers.style.visibility = "hidden"
    var playerNum = parseInt(playersNumber.value);
    for (var i = 1; i <= playerNum; i++) {
        players.innerHTML += "<div class = 'player'>Player " + i + "- Enter Name <input type='input' class='player-name'></div>"
    }
    playerButton.style.display = "inline-block"
}

function Word(word) {

}


function Puzzle() {
this.wordBank = [];
this.loadWord = loadWord;
this.makePuzzle = makePuzzle;



	function loadWord (word) {
	this.wordBank.push(word)
	}
}