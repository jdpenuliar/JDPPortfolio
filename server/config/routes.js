module.exports = function(app){
	app.get("/albums/api/haha",function(req,res){
		var haha = [];
		var data = {};
		data.title = "Purple Lamborghini [Explicit]";
		data.artist = "Skrillex";
		data.url = "https://www.amazon.com/Purple-Lamborghini-Explicit/dp/B01IQ0H1DY/ref=sr_1_3?ie=UTF8&qid=1476948109&sr=8-3&keywords=skrillex+purple+lamborghini";
		data.image = "https://images-na.ssl-images-amazon.com/images/I/61QHnD41%2BOL._SS500.jpg";
		data.thumbnail = "https://images-na.ssl-images-amazon.com/images/I/61QHnD41%2BOL._SS500.jpg";
		haha.push(data);
		data = {};
		console.log("hahadata\n",haha);
		res.json(haha);
	});
	app.get("/haha",function(req,res){
		res.send("haha");
	});
	app.get("/qwer",function(req,res){
		res.send("qwer");
	});
};
