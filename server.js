const http = require('http');
const port =3000
const bodyParser = require("body-parser");
const morgan = require('morgan');
const express =require('express');
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://FData:santy@007@cluster0-zmnyc.mongodb.net/test?retryWrites=true&w=majority",
{
    useNewUrlParser: true 
}

);

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const formData = require("../Server/FormData/data");


app.use(morgan('dev'));
app.use('/fData',formData);
//app.use()


 

 app.use("/",(req,res,next)=>{
     res.status(200).json({
         message : "Santy2323"
     });
 });

const server = http.createServer(app)
server.listen(port);