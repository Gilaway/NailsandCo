const express = require ("express");
const bodyParser = require ("body-parser");

const app = express()

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"))

app.get("/", function (req,res){
    res.render("index");
});

app.get("/prestations", function (req,res){
    res.render("prestations")
});

app.get("/contact", function (req,res){
    res.render("contact")
});

const  port = process.env.PORT || 3000

app.listen(port, function (){
    console.log("Server Started on port " + port);
});