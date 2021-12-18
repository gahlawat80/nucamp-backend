const express = require('express');

const hostname='localhost';
const port = 3000;

const app = express();

app.use((req,res)=>{
    res.status=200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>Welcome from Express!</h1></body></html>');
})

app.listen(port,hostname,()=>{
    console.log(`Server is pointing to http://${hostname}:${port}`);
});