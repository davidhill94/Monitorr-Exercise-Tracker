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

    const [labelArr, setLableArr] = useState([]);
    const [dataArr, setDataArr] = useState([]);

    console.log(graphArr)

    const graphLabels = () => {
        const newArr = [];
        for(let i = 0; i < graphArr.length; i++){
            newArr.push(graphArr[i].name);
        }
        setLableArr(newArr);
    }

    const graphData = () => {
        const newArr = [];
        for(let i = 0; i < graphArr.length; i++){
            newArr.push(graphArr[i].total);
        }
        setDataArr(newArr);
        console.log(newArr)
    }

    useEffect(() => {
        graphLabels()
    }, [])

    useEffect(() => {
        graphData()
    }, [])

    const data = {
        labels: graphLabels,
        datasets: [
            {
                label: 'My Line Chart',
                data: graphData,
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
