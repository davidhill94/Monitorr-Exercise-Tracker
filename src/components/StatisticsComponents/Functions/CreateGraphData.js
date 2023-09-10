//Coverts data into monthly formatted date which displays the month and the total duration of activity per month 
//Start and End date can be adjusted in the below function
export const createGraphData = (datesArr, durationArr, setGraphArr) => {

    // Create an object to accumulate exercise durations by month
    const monthlyTotals = {};

    // Loop through the dates and accumulate durations by month
    for (let i = 0; i < datesArr.length; i++) {
        const date = new Date(datesArr[i]);
        const monthYear = date.toLocaleString('default', { month: 'long', year: 'numeric' });

        if (!monthlyTotals[monthYear]) {
            monthlyTotals[monthYear] = 0;
        }

        monthlyTotals[monthYear] += parseInt(durationArr[i]);
    }

    // Get the range of months to include in the output
    const startDate = new Date('2023-01-01');
    const endDate = new Date('2023-12-31');
    const allMonths = [];
    let currentMonth = new Date(startDate);

    while (currentMonth <= endDate) {
        allMonths.push(currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' }));
        currentMonth.setMonth(currentMonth.getMonth() + 1);
    }

    // Convert the accumulated totals into the desired structure
    const monthlyArr = allMonths.map(month => ({
        name: month,
        total: monthlyTotals[month] || 0
    }));

    setGraphArr(monthlyArr);
}