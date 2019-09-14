const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const apiRoute = require("./routes/apiIndex");
const indexRoute = require("./routes/index");

mongoose.connect(process.env.mongodb_key, { useNewUrlParser: true }, err => {
  err ? console.log(err) : console.log("connected to DB");
});

mongoose.set("useCreateIndex", true);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", apiRoute);
app.use("/", indexRoute);

app.use((req, res, next) => {
  res.status(404).json({ err: "page not found" });
});

app.use((err, req, res, next) => {
  res.json({ err });
});

const PORT = process.env.port || 3000;
app.listen(PORT, () => console.log(`Connected on ${PORT} port.`));
