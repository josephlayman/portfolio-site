
var MainController = function () {

	this.index = function (req, res, next) {

		res.render('index');
	
	}

};

exports.MainController = MainController;