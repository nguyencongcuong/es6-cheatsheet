## Destructuring nested object

```javascript
const Person = {
  name: "John Snow",
  age: 29,
  sex: "male",
  materialStatus: "single",
  address: {
    country: "Westeros",
    state: "The Crownlands",
    city: "Kings Landing",
    pinCode: "500014",
  },
};

const { address : { state, pinCode }, name } = Person;

console.log(name, state, pinCode) // John Snow The Crownlands 500014
console.log(city) // ReferenceError
```