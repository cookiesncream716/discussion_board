var mongoose = require('mongoose');

var TopicShema = new mongoose.Schema({
	name: String,
	topic: String,
	answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
	count: Number,
	created_at: {type: Date, default: new Date}
});

mongoose.model('Topic', TopicShema);