import { Model } from './mvc/index'
export default class TodoModel extends Model {
  constructor(initialTodos) {
    super(initialTodos || { todos: [] })
  }

  get todos() {
    return this.data.todos
  }

  set todos(newTodos) {
    this.data.todos = newTodos
    this.publish(newTodos)
  }
}