import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const port = process.env.PORT || 3002;

app.get("/", async (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
