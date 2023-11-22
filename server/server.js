const express = require("express");
const path = require("path");

const https = require("https");
const PORT = 7000;
const cors = require("cors");
const bodyparser = require("body-parser");
const multer = require("multer");

const mongoose = require("mongoose");

const productRoute = require("./routes/product");

const app = express();
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
    console.log(file);
  },
  filename: (req, file, cb) => {
    console.log(file);
    console.log(req.body);
    cb(null, Date.now() + file.originalname);
  },
});

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
    optionsSuccessStatus: 200,
    allowedHeaders: ["Content-Type", "Authorization", "x-access-token"],
  })
);

app.use(multer({ storage: storage }).single("file"));
// console.log("Hello");

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(productRoute);

mongoose.connect(
    "mongodb+srv://godlytone:Bafoo2019@privacy.xmbjbrh.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((user) => {
    app.listen(PORT);
    console.log(user.connection.host);
  })
  .catch((err) => {
    console.log(err);
  });
