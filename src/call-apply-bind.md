## call
```javascript
Function.prototype.call2 = function(context) {
  context = this  || window
  let params = []
  for(let i = 1; i < arguments.length; i++){
    params.push(arguments[i])
  }

  context.fn = this
  context.fn(...params)
  delete context.fn

}
```

## apply

```js
Function.prototype.apply2 = function(context, args) {
  context = context  || window
  context.fn = this
  if (!args) {
    return context.fn()
  }
  
  let params = [...args]
  context.fn(...params)
  delete context.fn
  
}
```

## bind

```js
Function.prototype.bind2 = function(context) {
  context = context || window
  let self = this
  let [context2, ...params] = [...arguments]
  return function(...args) {
    self.apply(context, [...params, ...args])
  }
}
```

