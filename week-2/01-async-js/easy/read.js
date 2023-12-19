const { log } = require("console");
const fs = require("fs");

fs.readFile("text.txt", (err, data) => {
  if (err) {
    return console.error(err);
  }
  console.log(data.toString());
  for (let i = 0; i < 100000000000; i++) {}
});
