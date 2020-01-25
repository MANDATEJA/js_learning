const todos = [{
    text: 'Get pants back',
    completed: true
}, {
    text: 'Buy clogs',
    completed: true
}, {
    text: 'Return loan',
    completed: true
}, {
    text: 'Study',
    completed: false
}, {
    text: 'Save money',
    completed: false
}]


const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})