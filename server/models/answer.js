var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema({
	_topic: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
	name: String,
	answers: String,
	up: Number,
	down: Number,
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
	created_at: {type: Date, default: new Date}
});

mongoose.model('Answer', AnswerSchema);