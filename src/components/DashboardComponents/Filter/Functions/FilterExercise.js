import axios from "axios";

  //Function that filters the exercise list based on filter states
  export const filterExercise = async (setExercises, userFilter, activityFilter, durationFilterMin, durationFilterMax, setPageNumber) => {
    await axios.get("http://localhost:5000/exercises/")
      .then(res => {
        setExercises(res.data
          .filter(val => userFilter === "" || userFilter === "All" ? val.username : val.username === userFilter)
          .filter(val => activityFilter === "" || activityFilter === "All" ? val.activity : val.activity === activityFilter)
          .filter(val => val.duration > durationFilterMin || durationFilterMin === "" ? val.duration : val.duration === durationFilterMin)
          .filter(val => val.duration < durationFilterMax || durationFilterMax === "" ? val.duration : val.duration === durationFilterMax)
        )
        //Sets page to first
        setPageNumber(0);

      })
      .catch((err) => console.log(err));
  }