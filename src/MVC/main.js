import Controller from './controller'
import view from './view'
import Model from './model'

let m = new Model({
  todos:
    [{ text: 'first', id: '1', done: false },
      { text: 'second', id: '2', done: false },
      { text: 'third', id: '3', done: false }]
})
let c = new Controller(m, view)
c.render()