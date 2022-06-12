var express = require('express');
var router = express.Router();

// load .env file to get secret_key
require('dotenv').config();

const fs = require('fs');
const pathPemFile = 'secret/nic.pem'


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Jibres Nic Broker' });
  
  if(process.env.SECRET_KEY)
  {
    try {
      const pemFile = fs.readFileSync(pathPemFile, 'utf8')
      // console.log(pemFile);
      res.json({test: "MrAdib"});
    } catch (err) {
      // console.error(err);
      res.status(501).send("Pem file not eixst! Please complete installation...").end();
    }
  }
  else
  {
    res.status(501).send("Secret key is not defined! Please complete installation...").end();
  }
});

router.post('/', function(req, res, next) {
  // res.json({test: "MrAdib"});
});

module.exports = router;
