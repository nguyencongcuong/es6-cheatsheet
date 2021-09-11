## Spread operator object

```javascript
const a = {
    firstName: "Barry",
    lastName: "Manilow",
}

const b = {
    ...a,
    lastName: "White",
    canSing: true,	
}

console.log(a) // {firstName: "Barry", lastName: "Manilow"}

console.log(b) // {firstName: "Barry", lastName: "White", canSing: true}

// great for modifying objects without side effects/affecting the original
```