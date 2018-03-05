import Event from './Event'

class EventEmitter {
  constructor() {
    this._events = {}
    this._eventsCount = 0
  }

  addListener(eventName, listener, option) {
    let e = new Event(listener, option.once)
    if (!this._events[eventName]) {
      this._events[eventName] = [e]
    } else {
      if (this._events[eventName].indexOf(listener) < 0) {
        this._events[eventName].push(e)
      }
    }
  }

  on(eventName, listener) {
    this.addListener(eventName, listener, { once: false })
  }

  once(eventName, listener) {
    this.addListener(eventName, listener, { once: true })
  }

  removeListener(eventName, listener) {
    if (!this._events[eventName]) {
      return
    }

    let index = -1
    for (let i = 0; i < this._events[eventName].length; i++) {
      if (listener === this._events[eventName][i].fn) {
        index = i
      }
    }

    if (index >= 0) {
      this._events[eventName].splice(index, 1)
    }
  }

  removeAllListeners() {
    this._events = {}
  }

  emit(eventName) {
    let listener = this._events[eventName]
    if (!listener) {
      return
    }

    for (let i = 0; i < listener.length; i++) {
      if (listener[i].once) {
        listener[i].fn()
        this.removeListener(eventName, listener[i].fn)
      } else {
        listener[i].fn()
      }
    }

  }
}

export default EventEmitter
