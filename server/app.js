const express = require('express');
var cors = require('cors');
const connectDB = require("./connection");
const app = express();
app.use(cors());



// Middleware to parse JSON request bodies
app.use(express.json());

let  collection;



// Define your API routes
app.get(['/api/raceDivision','/api/genderDivison','/api/genderDivisonByState','/api/votesByRace',
'/api/votesByGender','/api/votesByState', '/api/genderVotesByState'

], async (req, res) => {
  
    
    
  try{
    switch(req.originalUrl){
    case '/api/raceDivision':{
        const query = [
          { $group: { _id: "$Race 1", count: { $count: {} } } }
        ]; 
        const documents = await collection.aggregate(query).toArray();

        res.json(documents);
   
      }
      break;
case '/api/genderDivison' :{
 

      const query = [
        { $group: { _id: "$Gender", count: { $count: {} } } }
      ]; 
      const documents = await collection.aggregate(query).toArray();

      res.json(documents);
  
    }
    break;
case '/api/genderDivisonByState':{
  
      const query = [
        {
        $group: {
          _id: "$State",
          female: {$sum : {$cond: { if: { $eq: [ "$Gender", "Female" ] }, then: 1, else: 0 }}},
          male: {$sum : {$cond: { if: { $eq: [ "$Gender", "Male" ] }, then: 1, else: 0 }}},
      }
    }
    ]
    const documents = await collection.aggregate(query).toArray();

    res.json(documents);
};
break;
case '/api/votesByRace':  {
 
      const query = [
        {
        $group: {
          _id: "$Race 1",
          count:{$sum:'$Primary Votes'}
         
      }
    }
    ]; 
    const documents = await collection.aggregate(query).toArray();

    res.json(documents);
  
}break;

case '/api/votesByGender' : {
 
      const query = [
        {
        $group: {
          _id: "$Gender",
          count:{$sum:'$Primary Votes'}
         
      }
    }
    ]; 
    const documents = await collection.aggregate(query).toArray();

    res.json(documents); 
  
}
break;
case '/api/votesByState': {
  

      const query = [
        {
        $group: {
          _id: "$State",
          count:{$sum:'$Primary Votes'}
         
      }
    }
    ]; 
      const documents = await collection.aggregate(query).toArray();

      res.json(documents);
  
};
break;
case '/api/genderVotesByState':  {
  
      const query = [
        {
        $group: {
          _id: "$State",
          female: {$sum : {$cond: { if: { $eq: [ "$Gender", "Female" ] }, then: {$sum:'$Primary Votes'}, else: 0 }}},
          male: {$sum : {$cond: { if: { $eq: [ "$Gender", "Male" ] }, then: {$sum:'$Primary Votes'}, else: 0 }}},
      }
    }
  ]
  const documents = await collection.aggregate(query).toArray();

  res.json(documents);
   
};
break;
}
}
catch(error){
  res.sendStatus(500);
   
}

}



)
// Start the server
 
const PORT = 3000;
const start = async () => {
  try {
    
      collection = await connectDB();
       
     const server =  app.listen(PORT, () => {
          console.log(`Server is running on port ${PORT}.`);
      });
    
  } catch (error) {
      console.log(error);
      console.log("Failed to connect to the database");
  }
};

start();