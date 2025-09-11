const express=require('express')
const urlRoute=require('./routes/url.js')
const {connectToMongoDB}=require('./connect.js')
const app=express();
const PORT=process.env.PORT||8001;
connectToMongoDB('mongodb://127.0.0.1:27017/short-url')
.then(()=>{
    console.log("MongoDb connected");
});
app.use(express.json());
app.use('/url',urlRoute)
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})