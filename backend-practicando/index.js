const express = require('express');
const bodyParse = require('body-parser');
const apiRouter = require('./routes/api');
var cors = require('cors');

const app = express();


require('./Data/db');

//Middlewares
app.use(cors());
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true}));
app.use('/api',apiRouter);




app.listen(3090,()=>{
    console.log("Se pudo levantar el servidor")
});



