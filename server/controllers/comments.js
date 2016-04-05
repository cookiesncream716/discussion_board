var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Comment = mongoose.model('Comment');

module.exports = (function(){
	return{
		create: function(req, res){
			Answer.findOne({_id: req.body.answer_id}, function(err, answer){
				var comment = new Comment(req.body);
				comment._answer = answer._id;
				answer.comments.push(comment);
				comment.save(function(err){
					answer.save(function(err, results){
						if(err){
							console.log('error saving comment', err);
						} else{
							console.log('saved comment');
							res.json(results);
						}
					})
				})
			})
		}
	}
})();