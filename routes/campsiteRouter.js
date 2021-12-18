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
    });
    
    campsiteRouter.route('/:campsiteId')
    .all((req,res,next)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        next();
    })
    .get((req,res)=>{
        res.end(`Will send campsite with id ${req.params.campsiteId}  to you!`);
    })
    .post((req,res)=>{
        res.statusCode = 403;
        res.end(`This operation for adding campsite with id ${req.params.campsiteId} is not supported`)
    })
    .put((req,res)=>{
        res.end(`Will update the campsites : ${req.body.name} and description as ${req.body.description} for id ${req.params.campsiteId}`);
    })
    .delete((req,res)=>{
        res.end(`Deleting campsite with id ${req.params.campsiteId}`);
    });

module.exports = campsiteRouter;