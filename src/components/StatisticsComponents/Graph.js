//GRAPHS:
//User duration graph- can be filtered per activity - done per month
//Activities per week/month
//Type of activity graph - doughnut

//array to store number of activities 
//array to store duration of exercises - DONE
//array to store dates - DONE

//Add data from same months 


import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,  //x axis
    LinearScale, //y axis
    PointElement,
    Legend,
    Tooltip,
    Filler
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip,
    Filler
)

export const Graph = ({ durationArr, datesArr, graphArr }) => {

    const [labelArr, setLabelArr] = useState([]);
    const [dataArr, setDataArr] = useState([]);

    //Sets Graph Labels - Loops through the graphArr Array and pushes name objects into a new array which is then set to the labelArr State
    const graphLabels = () => {
        const newArr = [];
        for(let i = 0; i < graphArr.length; i++){
            newArr.push(graphArr[i].name);
        }
        setLabelArr(newArr);
    }

    //Sets Graph Data - Loops through the graphArr Array and pushes data objects into a new array which is then set to the dataArr State
    const graphData = () => {
        const newArr = [];
        for(let i = 0; i < graphArr.length; i++){
            newArr.push(graphArr[i].total);
        }
        setDataArr(newArr);
    }

    //Runs graphLabels func to set graph labels on initial render
    useEffect(() => {
         graphLabels()
     }, [])
 
     //Runs graphData func to set graph data on initial render
     useEffect(() => {
         graphData()
     }, [])

    const data = {
        labels: labelArr,
        datasets: [
            {
                label: 'My Line Chart',
                data: dataArr,
                fill: true, // Set to false to display a line without filling the area beneath it
                borderColor: "red",
                backgroundColor: "blue",
                pointBorderColor: "grey",
                tension: 0.1, // Controls the curvature of the line
            },
        ],
    };

    const options = {
        plugins: {
            legend: true
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'pink',
                    font: {
                        size: 14,
                    }
                }
            },
            x: {
                ticks: {
                    color: 'orange',
                    font: {
                        size: 14,
                    }
                }
            }
        },
    };

    return (
        <div className='w-full h-full bg-white flex items-center justify-center'>
            <Line
                className='p-4'
                data={data} options={options} />
        </div>
    )
}
