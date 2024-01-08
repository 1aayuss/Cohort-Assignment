const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "mongodb+srv://admin:ew74m46SJk7W8TC1@cluster0.tqk2hhe.mongodb.net/test"
);

const app = express();
app.use(express.json());
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const User = mongoose.model("User", userSchema);

async function userExists(email) {
  return await User.findOne({ email: email });
}

app.post("/signin", async function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  if (await userExists(email)) {
    return res.status(403).json({
      msg: "User exist!",
    });
  }

  const u = new User({
    name: name,
    email: email,
    password: password,
  });
  u.save().then(() => console.log("saved"));

  var token = jwt.sign({ email: email }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", async function (req, res) {
  try {
    const token = req.headers.authorization;

    const decoded = jwt.verify(token, jwtPassword);
    const email = decoded.email;
    // console.log("1");
    const users = await User.find();
    // console.log("2");

    return res.status(200).json(users);
    // console.log("3");
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }

  // res.send("hello");
});

app.listen(3000);
