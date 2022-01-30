//----------------------- I M P O R T S -----------------------
const express = require("express");
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const DB = require('./DB');
var cors = require('cors');

var app = module.exports = express();

//----------------------- ----------------------- -----------------------
app.use(cors());
app.engine('.html', require('ejs').__express);      
app.set('views', path.join(__dirname, "front", "public"))   
app.use(express.static(path.join(__dirname, 'front', 'src')));  
app.set('view engine', 'html')  
app.use( bodyParser.urlencoded({ extended : true }) );

//----------------------- ----------------------- -----------------------

app.get("/", (req, res) => DB.getList().then( (result) => res.json(result)) );

app.get('/menu/deletion', (req, res) => DB.deleteItem( req.query.delID ).then( () => res.redirect('/')) );

app.post("/", (req, res) => DB.addItem( { name: req.body.Item , price: req.body.Price } ).then( () => res.redirect('/')) );

app.listen(3001, err => { err ? console.log("ERROR : " + err) : null });
