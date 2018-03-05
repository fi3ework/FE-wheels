import { Controller } from './mvc/index'

export default class TodoController extends Controller {
  constructor(model, view) {
    super({
      model,
      view,
      container: '.todo-container',
      onClick: {
        '.btn-add'() {
          const text = this.addText
          this.model.todos = this.model.todos.concat([{
            text,
            id: new Date().getTime().toString()
          }])
        },
        '.btn-delete'(e) {
          const id = this.getTargetAttr(e, 'data-id')
          this.model.todos = this.model.todos.filter(
            todo => todo.id !== id
          )
        },
        '.btn-unfinish'(e) {
          const id = this.getTargetAttr(e, 'data-id')
          this.model.todos = this.model.todos.map(
            todo => ({
              id: todo.id,
              done: todo.id === id ? false : todo.done,
              text: todo.text
            })
          )
        },
        '.btn-finish'(e) {
          const id = this.getTargetAttr(e, 'data-id')
          this.model.todos = this.model.todos.map(
            todo => ({
              id: todo.id,
              done: todo.id === id ? true : todo.done,
              text: todo.text
            })
          )
        },
        '.btn-update'(e) {
          const id = this.getTargetAttr(e, 'data-id')
          const text = this.addText
          this.model.todos = this.model.todos.map(
            todo => (
              {
                id: todo.id,
                done: todo.done,
                text: todo.id === id ? text : todo.text
              })
          )
        }
      }
    })

    this.model.listeners.push(this.render)
  }

  get addText() {
    return super.getChild('.input-add').value
  }
}

