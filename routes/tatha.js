var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('tatha', {title:'this is tatha pug template.'});
});

module.exports = router;
