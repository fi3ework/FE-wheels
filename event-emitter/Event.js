function Event(fn, once) {
  this.fn = fn
  this.once = once || false
}

export default Event