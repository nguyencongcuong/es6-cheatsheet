## Object.entries()

```javascript
const obj = {
  firstName: 'Vipul',
  lastName: 'Rawat',
  age: 22,
  country: 'India',
};

const entries = Object.entries(obj);  
/* returns an array of [key, value] 
   pairs of the object passed
*/

console.log(entries);  
/* prints
   [
     ['firstName', 'Vipul'], 
     ['lastName', 'Rawat'], 
     ['age', 22], 
     ['country', 'India']
   ];
*/
```
