var mongoose = require('mongoose');

var CatagoryShema = new mongoose.Schema({
	name:String
});
mongoose.model('Catagory', CatagoryShema);