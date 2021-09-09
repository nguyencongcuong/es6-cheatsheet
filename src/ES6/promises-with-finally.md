## Promises with finally

```javascript
promise
  .then((result) => { ··· })
  .catch((error) => { ··· })
  .finally(() => { // logic independent of success/error })

// The handler is called when the promise is fulfilled or rejected.
```