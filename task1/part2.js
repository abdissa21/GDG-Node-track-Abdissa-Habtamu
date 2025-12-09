const http = require("http");

let students = [];
let id = 1;

const server = http.createServer((req, res) => {
  const url = req.url.split("/");

  if (req.method === "GET" && req.url === "/students") {
    res.end(JSON.stringify(students));
  } else if (req.method === "POST" && req.url === "/students") {
    let body = "";
    req.on("data", (c) => (body += c));
    req.on("end", () => {
      const data = JSON.parse(body);
      const student = { id: id++, name: data.name };
      students.push(student);
      res.end(JSON.stringify(student));
    });
  } else if (req.method === "PUT" && url[1] === "students") {
    let body = "";
    req.on("data", (c) => (body += c));
    req.on("end", () => {
      const data = JSON.parse(body);
      const s = students.find((x) => x.id == url[2]);
      if (!s) return res.end("Student not found");
      s.name = data.name;
      res.end(JSON.stringify(s));
    });
  } else if (req.method === "DELETE" && url[1] === "students") {
    const index = students.findIndex((x) => x.id == url[2]);
    if (index === -1) return res.end("Student not found");
    students.splice(index, 1);
    res.end("Student deleted");
  } else {
    res.end("Not Found");
  }
});

server.listen(4000);
