var mongoose = require('mongoose');
var Animal = mongoose.model('Animal');
module.exports = {
	show_all: function(req, res){
		Animal.find({}, function(err, animals){
			res.render('index', {all_animals: animals});
		})
	},
	create: function(req, res){
		var animal = new Animal({name: req.body.name, color: req.body.color, age: req.body.age});
		animal.save(function(err){
			if(err){
				console.log("Something went wrong");
				res.render('new', {title: "you have errors!", errors: animal.errors})
			} else{
				res.redirect('/');
			}
		})
	},
	destroy: function(req, res){
		Animal.remove({_id: req.params.id}, function(err, animal){
			res.redirect('/');
		})
	},
	show_animal: function(req, res){
		Animal.findOne({_id: req.params.id}, function(err, animal){
			res.render('show', {animal: animal})
		})

	},
	edit_animal: function(req, res){
		Animal.findOne({_id: req.params.id}, function(err, animal){
			res.render('edit', {animal: animal})
		})
	},
	update_animal: function(req, res){
		var animal = Animal.update({_id: req.params.id}, {name: req.body.name, color: req.body.color, age: req.body.age}, function(err, animal){
			res.redirect('/');
		})
	}
}