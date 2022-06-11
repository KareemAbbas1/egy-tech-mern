/*Start Imports*/

import express from "express";
import mongoose from "mongoose";

import dotenv from 'dotenv';
// Set up dotenv to be able to access the local enviornment variables 
dotenv.config();

/* End Imports */



// Initialize the server
const app = express();
// Define the port
const port = process.env.PORT || 5000;


// Body parser middleware(Allow the server to accept JSON for data transfer over the web through HTTP requests)
app.use(express.json());


// Database configuration
const db = process.env.MONGO_URI;
// Connect to mongoDB
mongoose
.connect(db)
.then(() => console.log('Database is connected'))
.catch(error => console.log(error));



// Start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));