var mongoose = require('mongoose');
const { json } = require('body-parser');

mongoose.connect("mongodb://localhost:27017/FoodListDB", { useNewUrlParser: true});
const foodlists = mongoose.model("foodlists", new mongoose.Schema({ name: String, price: Number}));

module.exports.getList = async () => {
    return await foodlists.find({}, (err, data) => json.toString(data)).clone().catch(function(err){ console.log(err)});
}

module.exports.deleteItem = async (delID) => {
    await foodlists.deleteOne( { _id : delID} );
}

module.exports.addItem = async (newDish) => {
    await (new foodlists(newDish)).save();
}





