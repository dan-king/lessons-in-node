var express = require('express')
var router = express.Router()

// About
router.get('/', function(req, res){
	res.render('about')
});

module.exports = router
