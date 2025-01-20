const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const dotenv=require('dotenv');
const connectDB = require('./config/db');
const path=require("path")

const app=express();
dotenv.config();
connectDB();

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routes
app.use('/api/v1/users',require('./routes/userRoutes'))
app.use('/api/v1/transections',require('./routes/transectionRoutes'))

//static files
app.use(static(path.join(__dirname,'./client/build')))
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
})

//port
const PORT=8080 || process.env.PORT

//listen server
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})