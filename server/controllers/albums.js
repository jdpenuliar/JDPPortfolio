"use strict";
var mongoose = require("mongoose");

var Album = mongoose.model("Album");

module.exports = (function(){
	return{
		index: function(req,res){
			Album.find({}, function(err, data) {
			    if (!err){ 
			        res.json(data);
			    } else {
			    	throw err;
			    }
			});
		},
		create: function(req,res){
			var newAlbum = new Album({
				title: "Purple Lamborghini [Explicit]",
				artist: "Skrillex",
				url: "https://www.amazon.com/Purple-Lamborghini-Explicit/dp/B01IQ0H1DY/ref=sr_1_3?ie=UTF8&qid=1476948109&sr=8-3&keywords=skrillex+purple+lamborghini",
				image: "https://images-na.ssl-images-amazon.com/images/I/61QHnD41%2BOL._SS500.jpg",
				thumbnail:  "https://images-na.ssl-images-amazon.com/images/I/61QHnD41%2BOL._SS500.jpg"
			});

			newAlbum.save(function(err,data){
				// if(err){
				// 	console.log("something went wrong",err.message);
				// 	res.json(err);
				// }else{
				// 	console.log('successfully added a hahha!\n',data);
				// 	res.json(data);
				// }
			});
			newAlbum = new Album({
				title: "First Of The Year (Equinox)",
				artist: "Skrillex",
				url: "https://www.amazon.com/First-Of-The-Year-Equinox/dp/B0055M9WDO/ref=sr_1_1?ie=UTF8&qid=1476991125&sr=8-1&keywords=first+of+the+year+equinox",
				image: "https://images-na.ssl-images-amazon.com/images/I/51mHgh%2B7l8L._SS500.jpg",
				thumbnail:  "https://images-na.ssl-images-amazon.com/images/I/51mHgh%2B7l8L._SS500.jpg"
			});

			newAlbum.save(function(err,data){
				// if(err){
				// 	console.log("something went wrong",err.message);
				// 	res.json(err);
				// }else{
				// 	console.log('successfully added a hahha!\n',data);
				// 	res.json(data);
				// }
			});

			newAlbum = new Album({
				title: "Bangarang (Feat. Sirah) [Explicit]",
				artist: "Skrillex",
				url: "https://www.amazon.com/Bangarang-Feat-Sirah-Explicit/dp/B006PAZN56/ref=sr_1_1?ie=UTF8&qid=1476994100&sr=8-1&keywords=bangarang",
				image: "https://images-na.ssl-images-amazon.com/images/I/61G8uLZ-rML._SS500.jpg",
				thumbnail:  "https://images-na.ssl-images-amazon.com/images/I/61G8uLZ-rML._SS500.jpg"
			});

			newAlbum.save(function(err,data){
				if(err){
					console.log("something went wrong",err.message);
					res.json(err);
				}else{
					console.log('successfully added a hahha!\n',data);
					res.json(data);
				}
			});
		}
	};
})();