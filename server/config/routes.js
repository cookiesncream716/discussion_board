var topics = require('./../controllers/topics.js');
var answers = require('./../controllers/answers.js');
var comments = require('./../controllers/comments.js');
var categories = require('./../controllers/categories.js');

module.exports = function(app){ 
	app.get('/categories', function(req, res){
		categories.index(req, res);
	});
	app.get('/topics', function(req, res){
		topics.index(req, res);
	});
	app.post('/topics', function(req, res){
		topics.create(req, res);
	});
	app.post('/topics/:id', function(req, res){
		topics.show(req, res);
	});
	app.post('/answers', function(req, res){
		answers.create(req, res);
	})
}