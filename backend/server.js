const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./router/contact.js");

const app = express();

// middleware (communication frontend and backend)
app.use(express.json());
app.use(cors());
dotenv.config();
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const Port = process.env.PORT || 3000;

// router
app.use("/api/", userRouter);

app.listen(Port, () => {
  console.log(`server is running at ${Port}`);
});
