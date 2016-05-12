var mongoose = require('mongoose');

var AnimalSchema = new mongoose.Schema({
	name: String,
	color: String,
	age: Number
})
AnimalSchema.path("name").required(true, "Name cannot be blank!")
AnimalSchema.path("color").required(true, "Color cannot be blank!")
AnimalSchema.path("age").required(true, "Age cannot be blank!")

var Animal = mongoose.model('Animal', AnimalSchema);