/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved");
    }, n * 1000);
  });
}

wait(3)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

console.log("Hello");
module.exports = wait;
