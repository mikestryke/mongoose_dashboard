var animals = require('../controllers/animals.js');
module.exports = function(app){
	app.get('/', function(req, res){
		animals.show_all(req, res)
	})
	app.post('/animals', function(req, res){
		console.log("New animal added", req.body.name, req.body.color, req.body.age)
		animals.create(req, res)
	})

	app.get('/animals/new', function(req, res){
		res.render('new')
	})
	app.post('/animals/:id/destroy', function(req, res){
		console.log("Animal Destroyed")
		animals.destroy(req, res)
	})
	app.get('/animals/:id', function(req, res){
		animals.show_animal(req, res)
	})
	app.get('/animals/:id/edit', function(req, res){
		animals.edit_animal(req, res)
	})
	app.post('/animals/:id/update', function(req, res){
		console.log("Updating Animal breh!")
		animals.update_animal(req, res)
	})
}