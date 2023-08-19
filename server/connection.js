const MongoClient = require('mongodb').MongoClient;
// Replace with your connection URI
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connectDB = (uri) => {
    
    client.connect();
    database = client.db("Election_Data");
       
    
    collection = database.collection("Candidate_Data");
    return collection; 
}


module.exports = connectDB;
