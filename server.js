const express = require("express");

const app = express();
const PORT = 4000;

app.use(express.static("./"));

app.get("/", (request, response) => {
  response.sendFile("index.html");
});

app.get("/en", (request, response) => {
  response.sendFile("en/index.html");
});

app.listen(PORT);
