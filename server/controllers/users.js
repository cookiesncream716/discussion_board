var mongoose = require('mongoose');
var User = mongoose.model('User');
var Topic = mongoose.model('Topic');
var Answer = mongoose.model('Answer');
var Comment = mongoose.model('Comment');

module.exports = (function(){
	return{
		create: function(req, res){
			User.findOne({name: req.body.name}, function(err, result){
				// console.log(result)
				if(result == null){
					var user = User({name:req.body.name});
					user.save(function(err, results){
						if(err){
							console.log(err)
						} else{
							res.json(results)
						}
					})
				} else{
					res.json(result)
				}
			})
		},
		show: function(req, res){
			// console.log(req.params.name)
			User.findOne({name: req.params.name}, function(err, results){
				if(err){
					console.log(err);
				} else{
					res.json(results);
				}
			})

		}
	}
})();