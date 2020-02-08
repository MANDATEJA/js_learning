const puzzleElement = document.querySelector('#puzzle')
const attemptsElement = document.querySelector('#guesses')

const game1 = new Hangman('cat', 2)
puzzleElement.textContent = game1.getPuzzle()
attemptsElement.textContent = game1.attempts
console.log(game1.status)

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleElement.textContent = game1.getPuzzle()
    attemptsElement.textContent = game1.attempts
    console.log(game1.status)
})