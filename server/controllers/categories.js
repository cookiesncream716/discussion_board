var mongoose = require('mongoose');
var Category = mongoose.model('Catagory');

module.exports = (function(){
	return{
		index: function(req, res){
			Category.find({}, function(err, results){
				if(err){
					console.log('err' + err)
				}else{
					res.json(results)
				};
			});
		}
	}
})();