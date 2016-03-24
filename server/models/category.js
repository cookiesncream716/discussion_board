var mongoose = require('mongoose');

var CatagoryShema = new mongoose.Schema({
	// catagory: String
	name:String
});
mongoose.model('Catagory', CatagoryShema);