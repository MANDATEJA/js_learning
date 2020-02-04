// Return existing todo from locall storage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    return todosJSON !== null ? JSON.parse(todosJSON) : []
}

// Save todos to local storage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove todo from todo array
const removeToDo = (id) => {
    const todoIndex = todos.findIndex((todo) =>todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    document.querySelector('#todos').innerHTML = ''
    const summary = generateSummaryDOM(incompleteTodos)
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach((todo) => {
        const p = generateTodoDOM(todo)
        document.querySelector('#todos').appendChild(p)
    })
}

// Get DOM elements for an individual item
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const button = document.createElement('button')

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change', (e) => {
        todo.completed = e.target.checked
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    
    // Setup todo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    // Setup the remove button
    button.textContent = 'X'
    todoEl.appendChild(button)

    button.addEventListener('click', () => {
        removeToDo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

// Get DOM element for list summary
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}