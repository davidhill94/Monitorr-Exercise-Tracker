//Loops through exercise array to find length
export const findLength = (exercises, setTotal) => {
    const newArr = [];
    for(let i = 0; i < exercises.length; i++){
        newArr.push(exercises[i]);
    }
    setTotal(newArr.length)
}