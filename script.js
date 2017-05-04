var puzzleArea = document.getElementsByClassName("puzzle")[0]
var guessButton = document.getElementsByClassName("guess-button")[0]
var guessedLetter = document.getElementById("guessed-letter")
var puzzleLetter = document.getElementsByClassName("puzzle-letter")

guessButton.addEventListener("mouseover", function (){
	event.target.style.cursor = "pointer"
})

guessButton.addEventListener("click",guessLetter)


function guessLetter () {
	for (var i = 0; i < wordArray.length; i++) {
		if (guessedLetter.value === wordArray[i]) {	
			puzzleLetter[i].style.display = "block"
			}
		else {
		console.log("you fail")
			}
	}	
}



wordArray = []

function makePuzzle (word) {
	for (var i = 0; i < word.length; i++) {
    wordArray.push(word.charAt(i))
    console.log(wordArray)
	}
	wordArray.forEach(function(letter){
		puzzleArea.innerHTML += "<div class = 'puzzle-letter-box'> <div class = 'puzzle-letter'>" + letter + "</div> </div>"
	})

}

