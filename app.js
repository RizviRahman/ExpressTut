const express = require('express');

const mongoose = require ('mongoose');

const adminRouter = require('./routeHandler/adminRouter');

const publicRouter = require('./routeHandler/publicRouter');

const todoHandler = require('./routeHandler/todoHandler');

env={
    port:3000
}



const app = express();

app.use(express.json());

mongoose
    .connect("mongodb+srv://Omee:RizviRahman@learnmongodb.0pijh.mongodb.net/toDos?retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>console.log("Connection successfull"))
    .catch((err)=>console.log(err));







app.use('/admin',adminRouter);
app.use('/',publicRouter);
app.use('/todo',todoHandler);


function errorHandler(err, req, res, next){
    if(res.headersSent){
        return next(err);
    }
    res.status(500).json({ error: err});
}

app.listen(env.port,()=>{
    console.log(`Application is running in http://localhost:${env.port}`);
})