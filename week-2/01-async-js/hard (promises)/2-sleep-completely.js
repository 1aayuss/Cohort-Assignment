/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

// function sleep(milliseconds) {
//     return new Promise((resolve)=>{

//     });
// }

function busyWait(milliseconds) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Busy wait completed after ${milliseconds} milliseconds`);
      }, milliseconds);
    });
  }
  
  // Example usage:
  busyWait(3000)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
    });
  
  console.log("Hello");
  

// module.exports = sleep;
