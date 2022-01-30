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
app.engine('.html', require('ejs').__express);      //Register ejs as .html. If we did not call this, we would need to name our views foo.ejs instead of foo.html. The __express method is simply a function that engines use to hook into the Express view system by default, so if we want to change "foo.ejs" to "foo.html" we simply pass _any_ function, in this case `ejs.__express`.
app.set('views', path.join(__dirname, "front", "public"))   // since express defaults to CWD/views
app.use(express.static(path.join(__dirname, 'front', 'src')));  // Path to our public directory
app.set('view engine', 'html')  // Without this you would need to supply the extension to res.render() ex: res.render('users.html').
app.use( bodyParser.urlencoded({ extended : true }) );

//----------------------- ----------------------- -----------------------

app.get("/", (req, res) => DB.getList().then( (result) => res.json(result)) );

app.get('/menu/deletion', (req, res) => DB.deleteItem( req.query.delID ).then( () => res.redirect('/')) );

app.post("/", (req, res) => DB.addItem( { name: req.body.Item , price: req.body.Price } ).then( () => res.redirect('/')) );

app.listen(3001, err => { err ? console.log("ERROR : " + err) : null });
