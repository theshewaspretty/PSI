import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartt = () => {
  const data = [
    {
      name: '2022.11',
      Chemical: 4000,
      Bio: 2400,
      uv: 2400,
      APAC: 2000
      
    },
    {
      name: '2022.12',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '2023.01',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },

  ];

  return (
    <div>
    <BarChart
      width={400}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Chemical" stackId="a" fill="#8884d8" />
      <Bar dataKey="Bio" stackId="a" fill="#82ca9d" />
      <Bar dataKey="uv" stackId="a" fill="#0DE3B2 " />
      <Bar dataKey="APAC" stackId="a" fill="#FE48DD" />


    </BarChart>
    </div>
  )
}

export default BarChartt