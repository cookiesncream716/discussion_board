var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
	_answer: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
	name: String,
	created_at: {type: Date, default: new Date}
});

mongoose.model('Comment', CommentSchema);