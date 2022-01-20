const express = require('express');

const publicRouter = express.Router();

publicRouter.get('/',(req,res)=>{
    res.send('public Dashboard');
});

publicRouter.get('/developer',(req,res)=>{
    res.json({
        msg: "Root directoory",
        Author: "Rizvi Rahman Omee",
        Purpose: "Learning Nodejs",
        keywords: ['Nodejs','Express','Mongodb']
    });
    res.end();
});



module.exports = publicRouter;