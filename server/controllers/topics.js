var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');

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
					res.json(results);
				}
			})
		}
	}
})();