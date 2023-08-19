import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Legend, Tooltip
} from 'recharts';
import { useState, useEffect } from 'react';
import { apiResponse, newColorFind } from '../utils';


const StackedBarChart = (props) => {
    
    const [data, setData] = useState([{
        "_id": "Virginia",
        "female": 4,
        "male": 5
    }]);
    useEffect(() => {



        fetch(apiResponse + props.name)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                let topData = ((json.sort((ele1, ele2) => ((ele1.male + ele1.female) - (ele2.male + ele2.female)))).reverse()).slice(0, 10)

                setData(topData)
            })
            .catch(error => console.error(error));

    }, []);


    return (
        
        <BarChart width={400} height={200} data={data} >
            <CartesianGrid />
            <XAxis  dataKey="_id"
        stroke="#000000" />
          
            <Tooltip />
            <Legend />
            <Bar dataKey="male" stackId="a" fill="lightblue" />
            <Bar dataKey="female" stackId="a" fill="pink" />
        </BarChart>
        
    );
}
export default StackedBarChart