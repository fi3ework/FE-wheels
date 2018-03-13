先放上一个需要被curryfy的函数

```javascript
function add(a, b, c, d, e) {
  return a + b + c + d + e
}
```

## 一次性的curryfy

局限性很大，只能curryfy一次，curryfy后调用的参数比如满足原函数的参数个数

```js
function simpleCurry(fn, ...args) {
  return function(...newArgs) {

    return fn.call(null, ...args, ...newArgs)
  }
}

let b1 = simpleCurry(add, 1)
let b2 = b1(2, 3, 4, 5)
console.log(b2)
```

## 可持续发展的curryfy

```js
function curry(fn) {
  if (fn.length == 0) {
    return fn
  }

  // 返回一个可以吃参数的函数，这个函数有两种返回值
  // 如果吃饱了参数，那么就执行fn（闭包）
  // 如果没吃饱，就返回一个还可以吃参数的函数，但是这个新返回的吃参数的函数肚子里已经有了之前吃进去的参数
  function _curried(depth, ...args) {
    return function(...newArgs) {
      if (depth - newArgs.length === 0) {
        return fn(...args, ...newArgs)
      } else {
        return _curried(depth - newArgs.length, ...args, ...newArgs)
      }
    }
  }

  return _curried(fn.length)
}

let c1 = curry(add)
let c2 = c1(1)
let c3 = c2(2)
let c4 = c3(3, 4)
let c5 = c4(5)
console.log(c5) //15
```