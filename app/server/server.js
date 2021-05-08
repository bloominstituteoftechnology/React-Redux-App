const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const port = process.env.PORT || 5000;
const app = express();
const data = require("./data");
const token = "ahuBHejkJJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA07i73Gebhu98";

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

// A user session is a period of time in which a user's auth (entering username and pw) is allowed to persist. Commonly a user session will last a week or more, after which time the token needs to be refreshed by re-entering your username and pw. Generally in a SQL database, we'll have a users table and a sessions table.

function authenticator(req, res, next) {
  // simulating an auth verification, which would check against a sessions db
  const { authorization } = req.headers; // Step 3 from the diagram
  // above line is equivalent to: 
  // const authorization = req.headers.authorization;
  if (authorization === token) {
    next(); // return the data
  } else {
    res.status(403).json({ error: "User must be logged in to do that." });
  }
}

// Diagram step 1
// post because we are *creating* a user session, in the sessions table.
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  // Simulating an actual login flow, which would check against a user db:
  if (username === "Whale Lover" && password === "i<3Whales") {
    req.loggedIn = true;
    res.status(200).json({
      payload: token // Diagram step 2 is sending this token back to the client
    });
  } else {
    res
      .status(403)
      .json({ error: "Username or Password incorrect. Please see Readme" });
  }
});

app.post("/api/logout", (req, res) => {
  //remove token from database
  res.status(200).json({
    payload: token
  });
});

// Step 4
app.get("/api/data", authenticator, (req, res) => {
  setTimeout(() => {
    res.send(data);
  }, 1000);
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
