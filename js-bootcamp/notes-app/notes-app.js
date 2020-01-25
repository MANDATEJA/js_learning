const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Excercise. Eating a bit better'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}]

// DOM - Document Object Model

// Query and remote
// const p = document.querySelector('p')
// p.remove()

// Query all and remove
const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    p.textContent = '****************'
    // console.log(p.textContent)
    // p.remove(0)
})

// Add a new element
const newParagreaph = document.createElement('p')
newParagreaph.textContent = 'This is a new element from JavaScript'
document.querySelector('body').appendChild(newParagreaph)