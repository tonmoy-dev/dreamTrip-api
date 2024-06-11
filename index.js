const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;

const app = express();

// connect database -> server -> route -> controller

// connect to Database with Mongoose
mongoose.set("strictQuery", false);
const mongoDB = process.env.MONGO_URI;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/destinations", require("./routes/destinationRoutes"));
app.use("/api/blogs", require("./routes/blogRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.get("/", (req, res) => {
  res.send("Welcome to DreamTrip Server!");
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
