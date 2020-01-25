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

document.querySelector('#create-note').addEventListener('click', function (event) {
    event.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function (e) {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()
    })
})

// -- single --
// p
// #replace
// .item

// -- multiple --
// p#order
// button.inventory
// h1#title.application
// h1.application#title