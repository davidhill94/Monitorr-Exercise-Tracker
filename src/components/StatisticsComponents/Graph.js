//Allows rendering of the graph - the graph takes in data and labels from the graphArr state 

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

export const Graph = ({ graphArr }) => {

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
     }, [graphArr])
 
     //Runs graphData func to set graph data on initial render
     useEffect(() => {
         graphData()
     }, [graphArr])

    const data = {
        labels: labelArr,
        datasets: [
            {
                label: 'Total Activity Time per Month (minutes)',
                data: dataArr,
                fill: false, // Set to true to display a line with a filled area beneath it
                borderColor: "#545454",
                backgroundColor: "#bcfd4c",
                pointBorderColor: "#545454",
                tension: 0.2, // Controls the curvature of the line
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
                    color: '#545454',
                    font: {
                        size: 14,
                    }
                }
            },
            x: {
                ticks: {
                    color: '#545454',
                    font: {
                        size: 14,
                    }
                }
            }
        },
    };

    return (
        <div className='w-full h-64 bg-white/75 flex items-center justify-center sm:h-full'>
            <Line
                className='p-4'
                data={data} 
                options={options}
                />
        </div>
    )
}
