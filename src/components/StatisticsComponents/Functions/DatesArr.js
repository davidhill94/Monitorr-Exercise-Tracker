//Filters all exercises relevant to the selected athlete and sets dateArr state
export const findDates = (exercises, setDatesArr) => {
    const act = [];
        const newActArr = [...exercises.sort((a, b) => new Date(...b.date.split('-').reverse()) - new Date(...a.date.split('-').reverse()))];
        for (let i = 0; i < newActArr.length; i++) {
            act.push(newActArr[i].date.substring(0, 10))
        }
        setDatesArr(act)
}