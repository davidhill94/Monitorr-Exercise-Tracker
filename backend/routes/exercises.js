//Creates route
const router = require("express").Router();
const Exercise = require("../models/exercise.model");

//Retrieves mongoose model
let exercise = require("../models/exercise.model");

//First route endpoint eg. /exercises/
router.route("/").get((req, res) => {
    Exercise.find() // finds all exercises from database
    .then(exercises => res.json(exercises)) //converts exercises to json
    .catch(err => res.status(400).json("Error: " + err)) //displays error message
});

//Router post request - eg. /exercises/add
router.route("/add").post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save() //saves new exercise to database
    .then(() => res.json("Exercise Added!"))
    .catch(err => res.status(400).json("Error: " + err))
});

//Finds exercises by id
router.route("/:id").get((req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json("Error: " + err));
});

//Deletes an exercise based on id
router.route("/:id").delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(exercise => res.json("Exercise Deleted!"))
    .catch(err => res.status(400).json("Error: " + err));
});

//Finds an exercise by id and then allows you to update it
router.route("/update/:id").post((req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);

        exercise.save()
        .then(() => res.json("Exercise updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;