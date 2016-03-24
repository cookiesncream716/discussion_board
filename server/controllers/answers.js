var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Topic = mongoose.model('Topic')

module.exports = (function(){
	return{
		create: function(req, res){
			console.log('answer' + req.body.topic_id + req.body.name)
			Topic.findOne({_id: req.body.topic_id}, function(err, topic){
				var answer = new Answer(req.body);
				answer._topic = topic._id;
				topic.answers.push(answer);
				answer.save(function(err){
					topic.save(function(err, results){
						if(err){
							console.log('error saving answer')
						} else{
							console.log('saved answer')
							// console.log(results)
							res.json(results);
						}
					})
				})
			})
			// var answer = new Answer({})
		}
	}
})();