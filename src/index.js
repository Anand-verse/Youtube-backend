// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

// import mongoose, { connect } from "mongoose";
// import {DB_NAME} from "./constants";



dotenv.config();

connectDB()







/*
//first Approach

import express from "express"
const app = express()


;( async () => {
    try {
       await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error" , (error)=> {
        console.log("ERROr: " , error);
        throw error
       })

     app.listen(process.env.PORT , ()=>{
        console.log(`App is listening on port ${
            process.env.PORT}`);
     })


    } catch (error) {
        console.error("ERROR: " ,error)
        throw err
    }
})()
    */