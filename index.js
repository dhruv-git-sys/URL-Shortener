const express=require('express')
const urlRoute=require('./routes/url.js')
const {connectToMongoDB}=require('./connect.js')
const mongoose=require('mongoose');
const app=express();

const PORT=process.env.PORT||8001;
app.use('/url',urlRoute)
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})