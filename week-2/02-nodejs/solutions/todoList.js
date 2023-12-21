const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
app.use(bodyParser.json());
// Hello
app.get("/todos", (req, res) => {
  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

app.post("/todos", (req, res) => {
  const newTodo = {
    id: Math.floor(Math.random() * 1000000),
    title: req.body.title,
    des: req.body.des,
  };

  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    todos.push(newTodo);
    fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
      if (err) throw err;
      res.status(201).json(newTodo);
    });
  });
});
app.listen(3000);
