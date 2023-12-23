const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:ew74m46SJk7W8TC1@cluster0.tqk2hhe.mongodb.net/"
);

const user = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async (req, res) => {
  const User = await new user({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  User.save().then(() => console.log("saved"));
});

app.listen(3000);
