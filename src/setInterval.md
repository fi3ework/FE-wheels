```javascript
let setInterval2 = (callback, interval) =>{
  let d = setTimeout(()=>{
    callback()
    setInterval2(callback, interval)
  }, interval)
  return d
}

let id = setInterval2(()=>{
  console.log('log')
}, 500)
console.log(id)

// TODO: 实际上不会成功暂停setInterval
setTimeout(()=> {clearTimeout(id)}, 400)
```
