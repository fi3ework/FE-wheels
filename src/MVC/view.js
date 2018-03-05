export default ({ todos }) => {
  const todoList = todos.map(todo => {
    return (`
    <li>
      <span class="${todo.done ? 'finish' : 'unfinish'}">${todo.text}</span>
      <button data-id="${todo.id}" class="btn-finish">
        Finish
      </button>
      <button data-id="${todo.id}" class="btn-unfinish">
        undo
      </button>
      <button data-id="${todo.id}" class="btn-update">
        update
      </button>
      <button data-id="${todo.id}" class="btn-delete">
        Delete
      </button>
    </li>
    `)
  })

  return (`
  <input class='input-add' />
  <button class='btn-add'>add</button>
  <ul>
    ${todoList.join('')}
  </ul>
  `)
}