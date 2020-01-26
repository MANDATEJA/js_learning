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

const filterTodo = {
    searchText: ''
}

const renderTodos = function (todos, filterTodo) {
    const incompleteTodos = todos.filter(function (todo) {
        return !todo.completed
    })

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

renderTodos(todos, filterTodo)

document.querySelector('#search-todo').addEventListener('input', function (e) {
    filterTodo.searchText = e.target.value
    renderTodos(todos, filterTodo)
})

document.querySelector('#add-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(e.target.elements.todoText.value)
    todos.push({
        text: e.target.elements.todoText.value,
        completed: false
    })
    console.log(todos)
    e.target.elements.todoText.vaule = ''
    renderTodos(todos, filterTodo)
})