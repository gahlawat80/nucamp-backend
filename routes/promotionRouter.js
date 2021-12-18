const express = require('express');
const promotionRouter = express.Router();

promotionRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res)=>{
    res.end('Will send all the promotions to you!');
})
.post((req,res)=>{
    res.end(`Will add the promotion : ${req.body.name} and description as ${req.body.description}`)
})
.put((req,res)=>{
    res.statusCode = 403;
    res.end(`PUT method NOT supported on /promotions`);
})
.delete((req,res)=>{
    res.end('Deleting all promotions');
});

promotionRouter.route('/:promotionId')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res)=>{
    res.end(`Will send promotion with id ${req.params.promotionId}  to you!`);
})
.post((req,res)=>{
    res.statusCode = 403;
    res.end(`This operation for adding promotion with id ${req.params.promotionId} is not supported`)
})
.put((req,res)=>{
    res.end(`Will update the promotion : ${req.body.name} and description as ${req.body.description} for id ${req.params.promotionId}`);
})
.delete((req,res)=>{
    res.end(`Deleting promotion with id ${req.params.promotionId}`);
});

module.exports = promotionRouter;