let counter = 0;

function callme() {
  counter++;
  console.log(counter);
  setTimeout(() => {
    callme();
  }, 1000);
}

callme();
