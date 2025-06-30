const http = require("http");
const fs = require("fs");
const url = require("url");

function myHeandler(req, res){
  if (req.url === "/favicon.ico") return res.end();
  // console.log('new request received');
  //   console.log(req);
  const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
  const myURL = url.parse(req.url, true);
  // console.log(myURL);

  fs.appendFile("log.txt", log, (err, data) => {
    switch (myURL.pathname) {
      case "/":
        if (req.method === "GET") res.end("Home Page");
        break;
      case "/about":
        const username = myURL.query.name || "Guest";
        res.end(`I am ${username}`);
        break;
      case "/search":
        const search = myURL.query.search_query;
        res.end("Here are your results for " + search);
        break;
      case "/signup":
        if (req.method === "GET") res.end("This is a signup form");
        else if (req.method === "POST") {
          // DB query
          res.end("Success");
        }
        break;
      default:
        res.end("404 Not Found");
        break;
    }
  });

  //   res.end("Hello from the server!");
}

const server = http.createServer(myHeandler);

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
