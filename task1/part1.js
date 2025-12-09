const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.end("Welcome to the Home Page");
  } else if (req.method === "GET" && req.url === "/info") {
    res.end("This is the information page");
  } else if (req.method === "POST" && req.url === "/submit") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => res.end(body));
  }
});

server.listen(3000);
