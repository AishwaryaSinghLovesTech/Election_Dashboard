import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { useState, useEffect } from 'react';
import { apiResponse, newColorFind } from '../utils';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


function ReBarChart(props) {
 

  

  const [data, setData] = useState([{_id:"handleCase",count:11}]);
  useEffect(() => {



    fetch(apiResponse + props.name)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        let topData = ((json.sort((ele1,ele2)=> (ele1.count-ele2.count))).reverse()).slice(0,10)

        setData(topData)
      })
      .catch(error => console.error(error));

  }, []);
  

  return (
   
    <BarChart
        data={data}
        width={400} height={200}
       
     >
    <XAxis
        dataKey="_id"
        stroke="#000000"
    />
    <Tooltip
                    wrapperStyle={{ width: 100, backgroundColor: 'white' }}
                    formatter={function(total) {return `${total}`}}
                />
    <Bar
        dataKey="count"
        fill="#00a0fc"
        stroke="#000000"
        strokeWidth={1}
    >
        {
            data.map((entry, index) => (
                <Cell  fill={newColorFind(index)} />
            ))
        }
    </Bar>
    </BarChart>
    
  );
}
export default ReBarChart;