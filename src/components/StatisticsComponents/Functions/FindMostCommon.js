//Filters through exercises array to find the most common activity and sets it to mostCommon state
export const findMostCommonWord = (exercises, setMostCommon) => {
    const newArr = [];
    for (let i = 0; i < exercises.length; i++) {
        newArr.push(exercises[i].activity);
    }
    const wordCount = {};

    newArr.forEach((word) => {
        const normalizedWord = word.toLowerCase();
        wordCount[normalizedWord] = (wordCount[normalizedWord] || 0) + 1;
    });
    let mostCommonWord = '';
    let maxCount = 0;

    for (const word in wordCount) {
        if (wordCount[word] > maxCount) {
            mostCommonWord = word;
            maxCount = wordCount[word];
            setMostCommon(mostCommonWord);
        }
    }
}