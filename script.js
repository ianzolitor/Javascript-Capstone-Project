var puzzleArea = document.getElementsByClassName("puzzle")[0]






function makePuzzle (word) {
	wordArray = []
	for (var i = 0; i < word.length; i++) {
    wordArray.push(word.charAt(i))
    console.log(wordArray)
	}
	wordArray.forEach(function(letter){
		puzzleArea.innerHTML += "<div class = 'puzzle-letter'>" + letter + "</div>"
	})

}

