 //Finds largest duration number in array and sets it to the maxDuration and upper state for durationSlider
 export const findLargestDuration = (exercises, setMaxDuration, setUpper) => {
    const newArr = []
    for (let i = 0; i < exercises.length; i++) {
      newArr.push(exercises[i].duration)
      const max = Math.max(...newArr);
      setMaxDuration(max);
      setUpper(max);
    };
  };