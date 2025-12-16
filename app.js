import express from "express";

const app = express();
const PORT = 3000;


app.get("/home", (req, res) => {
  res.status(200).type("text/html").send(<h1 style='color: green;'>Welcome to the Home Page</h1>);
});


app.get("/about", (req, res) => {
  res.send("This is the about page.");
});


app.get("/students/:studentId", (req, res) => {
  const studentId = req.params.studentId;
  const department = req.query.department;

  res.json({
    studentId: studentId,
    department: department
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});