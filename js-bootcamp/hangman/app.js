const puzzleElement = document.querySelector('#puzzle')
const gameStatusElement = document.querySelector('#game-status')

const game1 = new Hangman('cat', 2)
puzzleElement.textContent = game1.puzzle
gameStatusElement.textContent = game1.gameStatus

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleElement.textContent = game1.puzzle
    gameStatusElement.textContent = game1.gameStatus
})

getPuzzle('2', (error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
});

getCountry('US', (error, country) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(country)
    }
})