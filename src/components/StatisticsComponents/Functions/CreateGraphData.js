//Coverts data into monthly formatted date which displays the month and the total duration of activity per month 
//Start and End date can be adjusted in the below function
export const createGraphData = (exercises, setGraphArr, year) => {

    //findDates
    const dat = [];
    const newDatArr = [...exercises.sort((a, b) => new Date(...b.date.split('-').reverse()) - new Date(...a.date.split('-').reverse()))];
    for (let i = 0; i < newDatArr.length; i++) {
        dat.push(newDatArr[i].date.substring(0, 10))
    }

    //find duration
    const dur = [];
    const newDurArr = [...exercises.sort((a, b) => new Date(...b.date.split('-').reverse()) - new Date(...a.date.split('-').reverse()))];
    for (let i = 0; i < newDurArr.length; i++) {
        dur.push(newDurArr[i].duration)
    }

    // Create an object to accumulate exercise durations by month
    const monthlyTotals = {};

    // Loop through the dates and accumulate durations by month
    for (let i = 0; i < dat.length; i++) {
        const date = new Date(dat[i]);
        const monthYear = date.toLocaleString('default', { month: 'long', year: 'numeric' });

        if (!monthlyTotals[monthYear]) {
            monthlyTotals[monthYear] = 0;
        }

        monthlyTotals[monthYear] += parseInt(dur[i]);
    }

    // Get the range of months to include in the output
    const startDate = new Date(`${year}-01-01`);
    const endDate = new Date(`${year}-12-31`);
    const allMonths = [];
    let currentMonth = new Date(startDate);

    while (currentMonth <= endDate) {
        allMonths.push(currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' }));
        currentMonth.setMonth(currentMonth.getMonth() + 1);
    }

    // Convert the accumulated totals into the desired structure
    const monthlyArr = allMonths.map(month => ({
        name: month.substring(0, 3),
        total: monthlyTotals[month] || 0
    }));

    setGraphArr(monthlyArr);
    console.log(monthlyArr)
}