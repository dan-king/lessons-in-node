var express = require('express')
var router = express.Router()

// Hello World
router.get('/', function(req, res){
	res.render('home')
});

module.exports = router
