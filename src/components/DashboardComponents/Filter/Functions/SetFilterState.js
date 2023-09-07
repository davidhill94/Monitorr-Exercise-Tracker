//Sets activityFilter state to value of selected option
export const filterExerciseByActivity = (e, setActivityFilter) => {
  setActivityFilter(e.target.value)
}

//Sets userFilter state to value of selected option
export const filterExerciseByAthlete = (e, setUserFilter) => {
  setUserFilter(e.target.value)
}