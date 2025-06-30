// const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("Hello from about page"+ " hey "+ req.query.name + " you are "+ req.query.age);
});


app.listen(3000, ()=>console.log("Server is listening on port 3000"))

// const server = http.createServer(app);

// server.listen(3000, () => {
//   console.log("Server is listening on port 3000");
// });
