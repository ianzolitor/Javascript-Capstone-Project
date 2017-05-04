var puzzleArea = document.getElementsByClassName("puzzle")[0];
var guessButton = document.getElementsByClassName("guess-button")[0];
var guessedLetter = document.getElementById("guessed-letter");
var puzzleLetter = document.getElementsByClassName("puzzle-letter");
var newButton = document.getElementsByClassName("new-button")[0];
var sorry = document.getElementsByClassName("sorry")[0]
var solveButton = document.getElementsByClassName("solve-button")[0]
var solveAnswer = document.getElementById("guess-solve")
var playersNumber = document.getElementById("players-number")
var players = document.getElementsByClassName("players")[0]


var wof = new Puzzle;
var wordArray = [];


newButton.addEventListener("mouseover", function (){
	event.target.style.cursor = "pointer";
})

newButton.addEventListener("click", makePuzzle);

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
	sorry.innerHTML = "";
	playerSelect()
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

function guessLetter () {
	for (var i = 0; i < wordArray.length; i++) {
		if (guessedLetter.value === wordArray[i]) {	
			var guessedLetterTrue = true
			puzzleLetter[i].style.display = "block"
			}
		}	
			if (guessedLetterTrue != true) {
			sorry.innerHTML = "Sorry, there are no " + guessedLetter.value + "'s"
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

function playerSelect() {
	players.innerHTML = ""
	if (playersNumber.value === "1"){
		players.innerHTML += "<div class = 'player'>Player 1</div>"
			}
	if (playersNumber.value === "2"){
		players.innerHTML += "<div class = 'player'>Player 1</div><div class = 'player'>Player 2</div>"
	}
	if (playersNumber.value === "3"){
		players.innerHTML += "<div class = 'player'>Player 1</div><div class = 'player'>Player 2</div><div class = 'player'>Player 3</div>"

	}
	if (playersNumber.value === "4"){
		players.innerHTML += "<div class = 'player'>Player 1</div><div class = 'player'>Player 2</div><div class = 'player'>Player 3</div><div class = 'player'>Player 4</div>"

	}			
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