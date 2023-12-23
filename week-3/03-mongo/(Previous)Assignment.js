const express = require("express");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const jwtPassword = "1234567";
const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:ew74m46SJk7W8TC1@cluster0.tqk2hhe.mongodb.net/"
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signin", async (req, res) => {
  const existinguser = await User.findOne({ email: req.body.email });
  if (existinguser) {
    return res.status(400).send("Username already exists!");
  }
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  user.save().then(() => console.log("saved"));
  var token = jwt.sign({ email: req.body.email }, jwtPassword);
  return res.json({
    token,
  });
});

app.listen(3000);
