const express = require ("express");
const bodyParser = require ("body-parser");

const app = express()

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"))

app.get("/", function (req,res){
    res.render("home");
});

app.get("/prestations", function (req,res){
    res.render("prestations")
});

app.get("/contact", function (req,res){
    res.render("contact")
});

app.listen(3000, function (){
    console.log("Server Started on port 3000");
});