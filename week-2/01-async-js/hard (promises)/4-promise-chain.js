/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("First");
      resolve("1st Completed");
    }, 1000 * t);
  });
}

function wait2(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Second");
      resolve("2nd Completed");
    }, 1000 * t);
  });
}

function wait3(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Third");
      resolve("3rd Completed");
    }, 1000 * t);
  });
}

async function calculateTime(t1, t2, t3) {
  console.log(await wait1(t1));
  console.log(await wait2(t2));
  console.log(await wait3(t3));

  console.log("Done!");
}

calculateTime(1, 2, 3);
module.exports = calculateTime;
