"use strict";
var albums = require("./../controllers/albums.js");
module.exports = function(app){
	app.get("/albums/api/showall",function(req,res){
		var haha = [];
		var data = {};
		// data.title = "Purple Lamborghini [Explicit]";
		// data.artist = "Skrillex";
		// data.url = "https://www.amazon.com/Purple-Lamborghini-Explicit/dp/B01IQ0H1DY/ref=sr_1_3?ie=UTF8&qid=1476948109&sr=8-3&keywords=skrillex+purple+lamborghini";
		// data.image = "https://images-na.ssl-images-amazon.com/images/I/61QHnD41%2BOL._SS500.jpg";
		// data.thumbnail = "https://images-na.ssl-images-amazon.com/images/I/61QHnD41%2BOL._SS500.jpg";
		// haha.push(data);
		// data = {};
		// data.title = "First Of The Year (Equinox)";
		// data.artist = "Skrillex";
		// data.url = "https://www.amazon.com/First-Of-The-Year-Equinox/dp/B0055M9WDO/ref=sr_1_1?ie=UTF8&qid=1476991125&sr=8-1&keywords=first+of+the+year+equinox";
		// data.image = "https://images-na.ssl-images-amazon.com/images/I/51mHgh%2B7l8L._SS500.jpg";
		// data.thumbnail = "https://images-na.ssl-images-amazon.com/images/I/51mHgh%2B7l8L._SS500.jpg";
		// haha.push(data);
		// data = {};
		albums.index(req,res);
	});
	app.get("/albums/api/createSample",function(req,res){
		albums.create(req,res);
	});
	app.get("/haha",function(req,res){
		res.send("haha");
	});
	app.get("/qwer",function(req,res){
		res.send("qwer");
	});
};
