const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();

  // console.log('new request received');
  //   console.log(req);
  const log = `${Date.now()}: ${req.url} New Req Received\n`;
  const myURL = url.parse(req.url, true);
  console.log(myURL);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myURL.pathname) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        const username = myURL.query.name || "Guest";
        res.end(`I am ${username}`);
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
