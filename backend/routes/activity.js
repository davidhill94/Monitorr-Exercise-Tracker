//Creates Route
const router = require("express").Router();

//Requires mongoose model
let Activity = require("../models/activity.model");

//First Endpoint - /activity/
router.route("/").get((req, res) => {
    //collects users data from database and returns promise
    Activity.find()
    .then(activity => res.json(activity)) //returns users into JSON
    .catch(err => res.status(400).json("Error: " + err)); //Returns err message
});

//Handles POST request to create new activity
router.route("/add").post((req, res) => {
    const activity = req.body.activity;
    const newActivity = new Activity({activity});

    //Saves to database
    newActivity.save()
    .then(() => res.json("Activity Added!"))
    .catch(err => res.status(400).json("Error: " + err))
});

module.exports = router;