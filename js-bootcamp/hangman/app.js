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

getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((err) => {
    console.log(err)
})

getLocation().then((location) => {
    return getCountry(location.country)
}).then((country) => {
    console.log(`Country: ${country.name}`)
}).catch((err) => {
    console.log(err)
})