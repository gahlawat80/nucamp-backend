const express = require('express');
const partnerRouter = express.Router();

partnerRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res)=>{
    res.end('Will send all the partners to you!');
})
.post((req,res)=>{
    res.end(`Will add the partner : ${req.body.name} and description as ${req.body.description}`)
})
.put((req,res)=>{
    res.statusCode = 403;
    res.end(`PUT method NOT supported on /partners`);
})
.delete((req,res)=>{
    res.end('Deleting all partners');
});

partnerRouter.route('/:partnerId')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res)=>{
    res.end(`Will send partner with id ${req.params.partnerId}  to you!`);
})
.post((req,res)=>{
    res.statusCode = 403;
    res.end(`This operation for adding partner with id ${req.params.partnerId} is not supported`)
})
.put((req,res)=>{
    res.end(`Will update the partner : ${req.body.name} and description as ${req.body.description} for id ${req.params.partnerId}`);
})
.delete((req,res)=>{
    res.end(`Deleting partner with id ${req.params.partnerId}`);
});

module.exports = partnerRouter;