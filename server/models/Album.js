"use strict";
var mongoose = require("mongoose");
var AlbumSchema = new mongoose.Schema({
	title: {type: String, required: true, minlength: 1},
	artist: {type: String, required: true, minlength: 1},
	url: {type: String, required: true, minlength: 1},
	image: {type: String, required: true, minlength: 1},
	thumbnail: {type: String, required: true, minlength: 1}
},{timestamps: true});
mongoose.model("Album",AlbumSchema);