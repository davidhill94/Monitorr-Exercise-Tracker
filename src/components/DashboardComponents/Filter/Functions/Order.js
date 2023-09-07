//Orders exercise array by largest duration
export const durationHighToLow = (e, exercises, setExercises) => {
    if(e.target.value === "Longest") {
      const newArr = [...exercises.sort((a, b) => (a.duration - b.duration))];
        setExercises(newArr)
      }
  }

  //Orders exercise array by shortest duration
  export const durationLowToHigh = (e, exercises, setExercises) => {
    if(e.target.value === "Shortest") {
      const newArr = [...exercises.sort((a, b) => (b.duration - a.duration))];
        setExercises(newArr)
      }
  }

  //Orders exercise array by Oldest date first
  export const oldestDate = (e, exercises, setExercises) => {
    if(e.target.value === "Oldest") {
    const newArr = [...exercises.sort((a, b) => new Date(...b.date.split('/').reverse()) - new Date(...a.date.split('/').reverse()))];
      setExercises(newArr)
    }
  }

  //Orders exercises array by Newest date first
  export const newestDate = (e, exercises, setExercises) => {
    if(e.target.value === "Newest") {
    const newArr = [...exercises.sort((a, b) => new Date(...a.date.split('/').reverse()) - new Date(...b.date.split('/').reverse()))];
      setExercises(newArr)
    }
  }