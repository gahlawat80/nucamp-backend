const express = require('express');
const campsiteRouter = express.Router();

campsiteRouter.route('/')
    .all((req,res,next)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        next();
    })
    .get((req,res)=>{
        res.end('Will send all the campsites to you!');
    })
    .post((req,res)=>{
        res.end(`Will add the campsites : ${req.body.name} and description as ${req.body.description}`)
    })
    .put((req,res)=>{
        res.statusCode = 403;
        res.end(`PUT method NOT supported on /campsites`);
    })
    .delete((req,res)=>{
        res.end('Deleting all campsites');
    })

module.exports = campsiteRouter;