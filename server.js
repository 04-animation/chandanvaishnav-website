// server.js

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (name && email && message) {
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    res.status(200).send("Thank you for your message! We will get back to you soon.");
  } else {
    res.status(400).send("Please fill out all fields.");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
