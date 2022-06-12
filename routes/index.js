var express = require('express');
var router = express.Router();

// load .env file to get secret_key
require('dotenv').config();


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Jibres Nic Broker' });
  res.json({test: "MrAdib"});
  console.log(process.env.SECRET_KEY)
});

router.post('/', function(req, res, next) {
  res.json({test: "MrAdib"});
});

module.exports = router;
