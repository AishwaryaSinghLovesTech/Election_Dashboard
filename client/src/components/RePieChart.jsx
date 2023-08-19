import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { useState, useEffect } from 'react';
import { apiResponse, newColorFind } from '../utils';


function RePieChart(props) {
 
 
  

  const [data, setData] = useState([{_id:"handleCase",count:11}]);
  useEffect(() => {



    fetch(apiResponse + props.name)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setData(json)
      })
      .catch(error => console.error(error));

  }, []);
  let renderLabel = function(entry) {
    return entry._id;
}
  return (
    
    <PieChart width={400} height={200}>
      <Pie
        data={data}
        dataKey="count"
        cx="50%"
        cy="50%"
        label = {renderLabel}
        outerRadius={60}
        fill= {newColorFind(renderLabel)}
      >
        {
          	data.map((entry, index) => <Cell fill={newColorFind(index)}/>)
          }
     </Pie>
    </PieChart>
  

  );
}
export default RePieChart;