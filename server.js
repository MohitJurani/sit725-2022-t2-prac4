var express = require("express")
var app = express();
var port = process.env.port || 3000;
app.use(express.static('public'));  

app.use(express.static("public"))

app.listen(port, ()=>{
     console.log(" app listening at" + port)});