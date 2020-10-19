require("dotenv").config();
const express = require("express");
const app = express();

// Configuration
const { port } = require("./config/");

// Middlewares
app.use(express.json());
app.use("/api/", require("./routes/"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
