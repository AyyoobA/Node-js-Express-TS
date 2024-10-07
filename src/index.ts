import express from "express";
require("dotenv").config();

const app = express();

const date = new Date();
const UTC_date = Date.UTC(date.getUTCHours(),date.getUTCMinutes())

const random_number = Math.floor(Math.random() * 100);

app.get("/", (req, res) => {
  res.send(`${new Date(UTC_date)} - Random Number ( ${random_number} )`);
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on port ${process.env.PORT} : http://localhost:${process.env.PORT}`
  );
});
