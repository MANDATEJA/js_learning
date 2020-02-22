const puzzleElement = document.querySelector('#puzzle')
const gameStatusElement = document.querySelector('#game-status')
let game1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleElement.textContent = game1.puzzle
    gameStatusElement.textContent = game1.gameStatus
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame) // Here we are referencing startGame function which gets called at line 22

startGame()

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(err)
// })

// getCurrentCountry().then((country) => {
//     console.log(`Country: ${country}`)
// }).catch((err) => {
//     console.log(err)
// })