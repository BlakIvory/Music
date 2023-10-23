
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const cors = require("cors");

const config = require("./config");

const MongoDB = require("./monggoodb.js");

require("dotenv").config();
const port = process.env.PORT || 8888;

// console.log(process.env.PORT)
// Page Home
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// ZingMp3Router
const ZingMp3Router = require("./routers/api/ZingRouter");
app.use("/api", cors({ origin: process.env.URL_CLIENT }), ZingMp3Router);

// Page Error
app.get("*", (req, res) => {
  res.send("Nhập Sai Đường Dẫn! Vui Lòng Nhập Lại >.<");
});

// app.listen(port, () => {
//   console.log(`Start server listen at http://localhost:${port}`)
// });

async function startServer() {
  try {
    await MongoDB.connect(config.db.uri);

    console.log("Connected to the MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log("Can't connect to MongoDB", error);
    process.exit();
  }
}
startServer();
