import React from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

import "./Chart.css"

const Chart = () => {
    const data = [
       
            {
                "month": "Mar",
                "investment": 100000,
                "sell": 241,
                "revenue": 10401
            },
            {
                "month": "Apr",
                "investment": 200000,
                "sell": 423,
                "revenue": 24500
            },
            {
                "month": "May",
                "investment": 500000,
                "sell": 726,
                "revenue": 67010
            },
            {
                "month": "Jun",
                "investment": 500000,
                "sell": 529,
                "revenue": 40405
            },
            {
                "month": "Jul",
                "investment": 600000,
                "sell": 601,
                "revenue": 50900
            },
            {
                "month": "Aug",
                "investment": 700000,
                "sell": 670,
                "revenue": 61000
            }
        
        
    ];
    return (
        
        <div>
            <h1 className='App'>Welcome to Chart</h1>
            <div className='flex'>
            <ComposedChart width={800} height={500} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey={"investment"} barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey={"revenue"} stroke="#ff7300" />
            </ComposedChart>
            <LineChart width={800} height={500} data={data}>
                <Line dataKey={'investment'}></Line>
                <Line dataKey={'revenue'}></Line>
                <XAxis dataKey="name"></XAxis>
                <Tooltip />
                <YAxis></YAxis>

            </LineChart>
            </div>
            
        </div>
    );
};

export default Chart;