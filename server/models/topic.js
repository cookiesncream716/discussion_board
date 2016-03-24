var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicShema = new mongoose.Schema({
	name: String,
	topic: String,
	description: String,
	answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
	count: Number,
	category: String,
	created_at: {type: Date, default: new Date}
});

mongoose.model('Topic', TopicShema);