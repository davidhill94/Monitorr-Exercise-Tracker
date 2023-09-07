//Handles onClick event when selecting filter value
export const handleFilterOption = (e, oldestDate, newestDate, durationHighToLow, durationLowToHigh, exercises, setExercises) => {
    oldestDate(e, exercises, setExercises);
    newestDate(e, exercises, setExercises);
    durationHighToLow(e, exercises, setExercises);
    durationLowToHigh(e, exercises, setExercises);
}