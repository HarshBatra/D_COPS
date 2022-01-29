// npm run dev
// node app.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static("public"));
// app.use(express.static('/Applications/Sandali/Dcops/client/public'))
// app.use(express.static('/Applications/Sandali/Dcops/client/src'))

const NewDishItemsList = []



app.set('view engine', 'ejs');
app.use( bodyParser.urlencoded({ extended : true }) );


app.get('/', function(req, res){
  res.render(__dirname+"/client/public/index", {NewDishItemsList : NewDishItemsList});
});

app.post("/", function(req, res){
  const NewDishName = req.body.DishItem;
  const NewDishPrice = req.body.DishPrice;

  NewDishItemsList.push({
    DishName : NewDishName,
    DishPrice : NewDishPrice
  });

  res.redirect('/');
});

app.listen(3000, function(){
    console.log("Server started at port 3000");
})