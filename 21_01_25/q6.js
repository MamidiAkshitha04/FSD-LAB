const promise1 = Promise.resolve(5);
const promise2 = Promise.resolve(10);
const promise3 = Promise.resolve(15);

promise1
  .then((value1) => {
    console.log(`First value: ${value1}`);
    return promise2.then((value2) => {
      console.log(`Second value: ${value2}`);
      return value1 + value2;
    });
  })
  .then((partialSum) => {
    return promise3.then((value3) => {
      console.log(`Third value: ${value3}`);
      return partialSum + value3;
    });
  })
  .then((totalSum) => {
    console.log(`Total sum: ${totalSum}`);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
