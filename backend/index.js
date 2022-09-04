const express = require("express");

const app = express();

console.log("desde index.js")

app.listen(4000, () => {
  console.log("Server corriendo en el port https://localhost:4000");
});
