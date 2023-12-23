const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
 
 let todos = [];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) {
    res.status(404).send("Todo not found");
  } else {
    res.json(todo);
  }
});

app.post("/todos", (req, res) => {
  const newTodo = {
    id: Math.floor(Math.random() * 1000),
    title: req.body.title,
    des: req.body.des,
  };
  todos.push(newTodo);
  console.log(todos);
  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const index = todos.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) {
    res.status(404).send("TODO not found");
  } else {
    todos[index].title = req.body.title;
    todos[index].des = req.body.des;
    res.json(todos[index]);
  }
});

app.delete("/todos/:id", (req, res) => {
  const index = todos.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) {
    res.status(404).send("TODO not found");
  } else {
    todos.splice(index, 1);

    res.status(200).send("deleted!");
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
