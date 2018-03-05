export default class Controller {
  constructor(conf) {
    this.view = conf.view
    this.model = conf.model
    this.render = this.render.bind(this)
    this.container = document.querySelector(conf.container)
    this.container.addEventListener('click', (e) => {
      e.stopPropagation()
      const rules = Object.keys(conf.onClick || {})
      rules.forEach((rule) => {
        if (e.path[0].matches(rule)) {
          conf.onClick[rule].call(this, e)
          console.log(this.model.data)
        }
      })
    })
  }

  getChild(selector) {
    return this.container.querySelector(selector)
  }

  getTargetAttr(e, attr) {
    return e.target.getAttribute(attr)
  }

  render() {
    this.container.innerHTML = this.view(this.model)
  }
}