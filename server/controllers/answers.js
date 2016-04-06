var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');

module.exports = (function(){
	return{
		create: function(req, res){
			// console.log('answer' + req.body.topic_id + req.body.name)
			Topic.findOne({_id: req.body.topic_id}, function(err, topic){
				var answer = new Answer(req.body);
				answer._topic = topic._id;
				topic.answers.push(answer);
				topic.count +=1;
				answer.save(function(err){
					topic.save(function(err, results){
						if(err){
							console.log('error saving answer')
						} else{
							console.log('saved answer')
							User.update({name: req.body.name}, {$inc: {answer: 1}}, function(err, results){
								if(err){
									console.log(err);
								} else{
									res.json(results);
								}
							})
						}
					})
				})
			})
		},
		updateUp: function(req, res){
			// console.log("backend updateUp" + req.body.id)
			Answer.update({_id: req.body.id},{$inc: {up: 1}}, function(err, results){
				if(err){
					console.log('failed to add up');
				} else{
					console.log('voted up');
					res.json(results);
				}
			})
		},
		updateDown: function(req, res){
			Answer.update({_id: req.body.id}, {$inc: {down: 1}}, function(err, results){
				if(err){
					console.log('failed to vote down');
				} else{
					console.log('voted down');
					res.json(results);
				}
			})
		}
	}
})();