//Creates Route
const router = require("express").Router();

//Requires mongoose model
let User = require("../models/user.model");

//First Endpoint - /users/
router.route("/").get((req, res) => {
    //collects users data from database and returns promise
    User.find()
    .then(users => res.json(users)) //returns users into JSON
    .catch(err => res.status(400).json("Error: " + err)); //Returns err message
});

//Handles POST request to create new user
router.route("/add").post((req, res) => {
    const username = req.body.username;
    const newUser = new User({username});

    //Saves to database
    newUser.save()
    .then(() => res.json("User Added!"))
    .catch(err => res.status(400).json("Error: " + err))
});

module.exports = router;