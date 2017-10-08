var express = require('express')
var router = express.Router()

// Homepage
router.get('/', function(req, res){
	res.render('hello-world')
});

module.exports = router
