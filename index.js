import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './Database/dbConfig.js';


dotenv.config();
//initialize express
const app = express()
//default middleware
app.use(express.json())
app.use(cors())
//connectDB Using mongoose
connectDB()
//default routing for backend home page
app.get("/",(req,res)=>{
    res.status(200).send({message:"Welcom To Backend"})
})
//customize Routes

//declare port from dotenv
const port = process.env.PORT 

//start the server
app.listen(port,()=>{
    console.log("Server Started Successfully");
    
})