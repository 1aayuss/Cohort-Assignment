// const fs = require("fs");

// fs.writeFile("text.txt", "HELLO AYUSH!", "utf8", (err) => {
//   if (err) {
//     return console.error(err);
//   }
// });
const fs = require("fs");

const filePath = "text.txt"; // Replace with your desired file path
const contentToWrite = "Hello, this is the content to be written to the file.";

// Write content to a file asynchronously
fs.writeFile(filePath, contentToWrite, "utf8", (err) => {
  if (err) {
    console.error(`Error writing to file: ${err}`);
    return;
  }
  console.log("File has been written successfully.");
});
