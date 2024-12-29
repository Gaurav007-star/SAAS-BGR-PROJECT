import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import UserRouter from "./routes/user.routes.js";
import DatabaseConnection from "./config/db.js";

let corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  methods: ["GET", "PUT", "POST", "DELETE", "HEAD", "METHOD", "UPDATE"]
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use("/api/user", UserRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(process.env.PORT, () => {
  console.log("SErver runnig");
  DatabaseConnection()
});
