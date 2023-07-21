const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//Allows env variables in .env file
require("dotenv").config();

//Creates express server + the port the server will run on
const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());

//Allows use of JSON
app.use(express.json());

//Retrieve uri from MongoDB dashboard
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
})

//Requiring route files
const exerciseRouter = require("./routes/exercises");
const userRouter = require("./routes/users");
const activityRouter = require("./routes/activity");

//Use route files
app.use("/exercises", exerciseRouter);
app.use("/users", userRouter);
app.use("/activity", activityRouter);

//Listener
app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
});