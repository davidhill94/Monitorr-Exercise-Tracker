//Finds the average duration of exercises array
export const findAverageDuration = (exercises, setAverageDuration) => {
    const newArr = [];
    for (let i = 0; i < exercises.length; i++) {
        newArr.push(exercises[i].duration);
    }
    const average = newArr.reduce((a, b) => a + b, 0) / newArr.length;
    setAverageDuration(average);
}