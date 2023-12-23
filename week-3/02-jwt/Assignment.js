//  Returns a json web token with username encrypted
//  Returns an array of all users if user is signed in (token is correct) Returns 403 status code if not

const express = require("express");
const jwt = require("jsonwebtoken");
const { boolean } = require("zod");
const jwtPassword = "12345";
const app = express();
app.use(express.json());
const ALL_USERS = [
  { username: "ayush@gmail.com", password: "123", name: "Ayush Makwana" },
  { username: "meet@gmail.com", password: "123", name: "Meet Makwana" },
  { username: "neer@gmail.com", password: "123", name: "Neer Makwana" },
];

function userExists(username, password) {
  let temp = ALL_USERS.filter((user) => {
    user.username === username && user.password === password;
  });
  console.log(temp === 0);
  return temp;
}
app.post("/signin", (req, res) => {
  // const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User does not exist in our memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});
app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    const otherUsers = ALL_USERS.filter((user) => user.username != username);
    res.json(otherUsers);
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);
