//Opens and Closes the filters tab
export const toggleFilter = (setFiltered, filtered, findLargestDuration, exercises, setMaxDuration, setUpper) => {
  setFiltered(!filtered);
  findLargestDuration(exercises, setMaxDuration, setUpper);
}