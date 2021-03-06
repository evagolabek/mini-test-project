// FROM https://medium.com/@stephenfluin/adding-a-node-typescript-backend-to-your-angular-app-29b0e9925ff

// console.log('hello !!!!!!!!!!!! there');

// import * as express from 'express';
const express = require("express");

const app = express();

app.use((req, res,next) => {
 res.header('Access-Control-Allow-Origin', '*');
 res.header('Access-Control-Allow-Headers', 'Origin X-Requested-With Content-Type Accept');
 res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');

 if ('OPTIONS' === req.method) {
   res.sendStatus(200);
 } else {
   console.log(`${req.ip} ${req.method} ${req.url}`);
   next();
 }
});

app.get('/', (req, res) => {
  res.send([{message: 'hello world'}]);
})

app.listen(4201, '127.0.0.1', function(){
  console.log('server is NOW listening on 4201');
})