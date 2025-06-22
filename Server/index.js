const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log('new request received');
  //   console.log(req);
  const log = `${Date.now()}: ${req.url} New Req Received\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        res.end("I am Anurag Darji");
        break;
      default:
        res.end("404 Not Found");
        break;
    }
  });

  //   res.end("Hello from the server!");
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
