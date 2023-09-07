export const findDuration = (exercises, setDurationArr) => {
    const dur = [];
    const newActArr = [...exercises.sort((a, b) => new Date(...b.date.split('-').reverse()) - new Date(...a.date.split('-').reverse()))];
    for(let i = 0; i < newActArr.length; i++) {
        dur.push(newActArr[i].duration)
        setDurationArr(dur);
    }
}