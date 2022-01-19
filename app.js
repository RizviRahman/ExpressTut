const express = require('express');

const mongoose = require ('mongoose');

const adminRouter = require('./router/adminRouter');

const publicRouter = require('./router/publicRouter');

env={
    port:3000
}



const app = express();

app.use(express.json());

mongoose
    .connect("mongodb://localhost/todos",{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>console.log("Connection successfull"))
    .catch((err)=>console.log(err));







app.use('/admin',adminRouter);
app.use('/',publicRouter);


function errorHandler(err, req, res, next){
    if(res.headersSent){
        return next(err);
    }
    res.status(500).json({ error: err});
}

app.listen(env.port,()=>{
    console.log(`Application is running in http://localhost:${env.port}`);
})