## Object.assign()

```javascript
const obj1 = { a: 1 }
const obj2 = { b: 2 }

const obj3 = Object.assign({}, obj1, obj2)

console.log(obj3) // { a: 1, b: 2 }
```