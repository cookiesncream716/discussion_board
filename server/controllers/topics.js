var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var Answer = mongoose.model('Answer');
var Comment = mongoose.model('Comment');
var User = mongoose.model('User');

module.exports = (function(){
	return{
		index: function(req, res){
			Topic.find({}, function(err, results){
				if(err){
					console.log('err getting topics' + err);
				} else{
					res.json(results);
				};
			});
		},
		create: function(req, res){
			var topic = new Topic({name: req.body.name, topic: req.body.topic, description: req.body.description, category: req.body.category, count: 0});
			topic.save(function(err, results){
				if(err){
					console.log("err saving topic" + err);
				} else{
					console.log(req.body.name);
					User.update({name: req.body.name}, {$inc: {topic: 1}}, function(err, results){
						if(err){
							console.log(err)
						} else{
							res.json(results)
						}
					})
				};
			});
		},
		show: function(req, res){
			// console.log('controller id' + req.params.id)
			Topic.findOne({_id: req.params.id})
				.populate({
					path: 'answers',
					model: 'Answer',
					populate: {
						path: 'comments',
						model: 'Comment'
					}
				})
				.exec(function(err, topic){
					if(err){
						console.log(err)
					} else{
						res.json(topic)
					}
				})

		}
	}
})();