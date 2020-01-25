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

const filterTodo = {
    searchText: ''
}

const renderTodos = function (incompleteTodos, filterTodo) {
    const renderTodos = incompleteTodos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filterTodo.searchText.toLowerCase())
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    renderTodos.forEach(function (todo) {
        const todoEl = document.createElement('p')
        todoEl.textContent = todo.text
        document.querySelector('#todos').appendChild(todoEl)
    })
}

document.querySelector('#add-todo').addEventListener('click', function (event) {
    console.log('Add a new todo')
})

document.querySelector('#new-todo').addEventListener('input', function (e) {
    console.log(e.target.value)
})

document.querySelector('#search-todo').addEventListener('input', function (e) {
    filterTodo.searchText = e.target.value
    renderTodos(incompleteTodos, filterTodo)
})