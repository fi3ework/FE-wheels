export default class Model {
  constructor(data) {
    this.data = data
    this.listeners = []
  }

  publish(data) {
    this.listeners.forEach(listener => listener(data))
  }

}