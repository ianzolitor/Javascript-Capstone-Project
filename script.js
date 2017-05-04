var puzzleArea = document.getElementsByClassName("puzzle")[0];
var guessButton = document.getElementsByClassName("guess-button")[0];
var guessedLetter = document.getElementById("guessed-letter");
var puzzleLetter = document.getElementsByClassName("puzzle-letter");
var newButton = document.getElementsByClassName("new-button")[0];
var sorry = document.getElementsByClassName("sorry")[0]

var wof = new Puzzle;
var wordArray = [];


newButton.addEventListener("mouseover", function (){
	event.target.style.cursor = "pointer"
})

newButton.addEventListener("click", makePuzzle)

guessButton.addEventListener("mouseover", function (){
	event.target.style.cursor = "pointer"
})

guessButton.addEventListener("click",guessLetter)


wof.loadWord("goat")
wof.loadWord("applesauce")
wof.loadWord("computer")

function makePuzzle () {
	var randomWord = Math.floor((Math.random() * wof.wordBank.length) + 0);
	word = wof.wordBank[randomWord]
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
			puzzleLetter[i].style.display = "block"
			sorry.innerHTML = ""
			}
		else {
		sorry.innerHTML = "Sorry, there are no " + guessedLetter.value + "'s"
			}
	}	
}

function clearPuzzle () {
	puzzleArea.innerHTML = ""

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