/*

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Express serveris veikia!");
});

app.listen(5000, () => {
  console.log("Serveris veikia http://localhost:5000");
});

*/

/*
const express = require("express");

const app = express();

const PORT = 5000;

// GET /
app.get("/", (req, res) => {
  res.json({
    message: "Pagrindinis puslapis"
  });
});

// GET /about
app.get("/about", (req, res) => {
  res.json({
    message: "Apie mus"
  });
});

// GET /contact
app.get("/contact", (req, res) => {
  res.json({
    message: "Kontaktai"
  });
});

app.listen(PORT, () => {
  console.log(`Serveris veikia: http://localhost:${PORT}`);
});
*/


/*
const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.json({
    message: "Pagrindinis puslapis"
  });
});

app.get("/about", (req, res) => {
  res.json({
    message: "Apie mus"
  });
});

app.get("/contact", (req, res) => {
  res.json({
    message: "Kontaktai"
  });
});

app.listen(PORT, () => {
  console.log(`Serveris veikia: http://localhost:${PORT}`);
});

*/

/*

const express = require("express");

const app = express();

const PORT = 5000;

// Studentų masyvas
const students = [
  {
    id: 1,
    name: "Jonas",
    age: 20
  },
  {
    id: 2,
    name: "Petras",
    age: 22
  },
  {
    id: 3,
    name: "Ona",
    age: 21
  }
];

// GET /students
app.get("/students", (req, res) => {
  res.json(students);
});

// GET /students/:id
app.get("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = students.find(student => student.id === id);

  if (!student) {
    return res.status(404).json({
      message: "Studentas nerastas"
    });
  }

  res.json(student);
});

app.listen(PORT, () => {
  console.log(`Serveris veikia: http://localhost:${PORT}`);
});

*/


const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/Student");

require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8"]);

const app = express();

const PORT = 5000;

app.use(express.json());

app.post("/students", async (req, res) => {
  try {
    const student = new Student(req.body);

    await student.save();

    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("Serveris veikia!");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB prisijungta!");
  })
  .catch((error) => {
    console.log("MongoDB klaida:", error.message);
  });

app.listen(PORT, () => {
  console.log(`Serveris veikia: http://localhost:${PORT}`);
});