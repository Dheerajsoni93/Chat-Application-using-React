const express = require("express");
const cors = require("cors"); //to connet with frontend
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");
const chatRoute = require("./Routes/chatRoute");
const messageRoute = require("./Routes/messageRoute");

const app = express();
require("dotenv").config(); //to access the environment variable

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

app.get("/", (req, res) => {
  res.send("Welcome to my Chat app APIs.....");
});

const port = 8080; //for testing
// const port = process.env.port;      //for deployment

app.listen(port, (req, res) => {
  console.log(`Server running on port....: ${port}`);
});

//connet to database
const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB: Successfully established connection");
  })
  .catch((error) => {
    console.log("MongoDB connection failed: ", error.message);
  });
