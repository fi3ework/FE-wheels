## 浅拷贝
### 方法1
```javascript
function shallowCopy(src){
  if (Object.prototype.toString(src) === '[object Null]' ||
  Object.prototype.toString(src) === '[object Undefined]'|| 
  typeof src !== 'object') {
    return src
  }
  
  let dst = Array.isArray(src) ? [] : {}
  for(let prop in src) {
    if(src.hasOwnProperty(prop)){
      dst[prop] = src[prop]
    }
  }
  return dst
}
```
顾名思义，浅在只能实现 "一层" 代码的拷贝，如果有一个需要拷贝的对象为
```javascript
let obj = {
	name: 'Ronaldo',
	friend: {
		Bale: 'Gareth Bale'
	}
}
```
拷贝过后修改 `name` 不会修改原对象，但是对引用对象 `friend` 的修改会修改原对象。

## 深拷贝

### 方法１ 

```javascript
function jsonClone(src) {
    return JSON.parse(JSON.stringify(src));
}
```

简单粗暴有效的方法，但是只能处理能够 JSON 序列化的对象，如果原对象中有个一个函数属性，那么拷贝出来的对象将**直接丢失**这个属性

### 方法2
递归调用浅拷贝

```javascript
function deepClone(src){
  if (Object.prototype.toString(src) === '[object Null]' ||
  Object.prototype.toString(src) === '[object Undefined]'|| 
  typeof src !== 'object') {
    return src
  }
  
  let dst = Array.isArray(src) ? [] : {}
  for(let prop in src) {
    if(src.hasOwnProperty(prop)){
      dst[prop] = typeof src[prop] === 'object' ? deepClone(src[prop]) : src[prop]
    }
  }
  return dst
}
```