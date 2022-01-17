const express = require('express');

const adminRouter = require('./router/adminRouter');

const publicRouter = require('./router/publicRouter');

env={
    port:3000
}



const app = express();

app.use(express.json());









app.use('/admin',adminRouter);
app.use('/',publicRouter);

app.listen(env.port,()=>{
    console.log(`Application is running in http://localhost:${env.port}`);
})