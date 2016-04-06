var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	name: String,
	topic: {type: Number, default: 0},
	answer: {type: Number, default: 0},
	comment: {type: Number, default: 0}
});

mongoose.model('User', UserSchema);