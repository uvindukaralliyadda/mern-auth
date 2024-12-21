import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.Mongo).then( ()=>{
    console.log("Connected to mongoDb");
})
.catch((err)=>{
    console.log(err);
});

const app=express();

app.listen(3000,()=>{
    console.log('server listening on port!');
});

