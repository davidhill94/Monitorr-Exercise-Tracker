import axios from "axios";
import { mockExerciseData } from "../../../Mock Data/MockExercises";

  //Function that filters the exercise list based on filter states
  export const filterExercise = async (setExercises, userFilter, activityFilter, durationFilterMin, durationFilterMax, setPageNumber, mockData) => {
    //Sets Exercise state to mock data on click when mock data state is set to true
    if(mockData === true){
      setExercises(mockExerciseData
        .filter(val => userFilter === "" || userFilter === "All" ? val.username : val.username === userFilter)
          .filter(val => activityFilter === "" || activityFilter === "All" ? val.activity : val.activity === activityFilter)
          .filter(val => val.duration > durationFilterMin || durationFilterMin === "" ? val.duration : val.duration === durationFilterMin)
          .filter(val => val.duration < durationFilterMax || durationFilterMax === "" ? val.duration : val.duration === durationFilterMax)
        )
        //Sets page to first
        setPageNumber(0);
    } else {
      //Sets Exercise state to data pulled from backend database when mockData is set to false
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
  }