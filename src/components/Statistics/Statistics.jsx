/* eslint-disable no-unused-vars */
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const data = [
        {
            name: 'Google',
            salary: 40000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Tesla',
            salary: 40000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Apple',
            salary: 90000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Samsung',
            salary: 27800,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Facebook',
            salary: 11890,
            pv: 4800,
            amt: 2181,
        }

    ];


    return (
        <div className='mt-40'>
            <h1 className='text-4xl font-bold flex justify-center items-center mb-10'>Company Salary Ranks </h1>
            <div>
                <ResponsiveContainer width="100%" height={500}>
                    <BarChart data={data}>
                        <Bar dataKey="salary" fill="#82ca9d" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;