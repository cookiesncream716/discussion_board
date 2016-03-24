var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	name: String,
	topic: Number,
	answer: Number,
	comment: Number
});

mongoose.model('User', UserSchema);