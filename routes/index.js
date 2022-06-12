var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Jibres Nic Broker' });
  res.json({test: "MrAdib"});
});

router.post('/', function(req, res, next) {
  res.json({test: "MrAdib"});
});

module.exports = router;
