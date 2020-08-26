"use strict";
module.exports = function(app){
	app.get("/haha",function(req,res){
		res.send("haha");
	});
	app.get("/qwer",function(req,res){
		res.send("qwer");
	});
};
