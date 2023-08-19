import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import RePieChart from './RePieChart';
import ReBarChart  from './ReBarChart';
import Typography from '@mui/material/Typography';
import StackedBarChart from './StackedBarChart';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


 function DynamicCard(props) {
   const headerText = {
    "raceDivision": "Participation in Election by Race (Top Races)",
    "genderDivison": "Participation By Gender",
    "genderDivisonByState": "Participation By Gender in Election in Top States",
    "votesByRace": "Votes secured by different Races",
    "votesByGender": "Votes Partition By Gender",
    "votesByState": "Voting in each state (Top Voter States)",
    "genderVotesByState": "Voting to gender State Wise",
   }
    const components = {
        "raceDivision": ReBarChart,
        "genderDivison": RePieChart,
        "genderDivisonByState": StackedBarChart,
        "votesByRace": ReBarChart,
        "votesByGender": RePieChart,
        "votesByState": ReBarChart,
        "genderVotesByState": StackedBarChart,
    };
   
   
     const Chart = components[props.name]
    return(<Card sx={{ minWidth: 275 }}>
        <CardContent style={{textAlign: "center"}}>
        <Typography variant="body2" color="text.secondary">
           {headerText[props.name]}
          </Typography>
            < Chart name={props.name} />
         </CardContent>
      </Card>)

    


}
export default DynamicCard