var express = require('express');
var router = express.Router();

// load .env file to get secret_key
require('dotenv').config();

const fs = require('fs');
const curlSecret = 'secret/nic.pem'
const apiURL = 'https://epp.nic.ir/submit';
const curlAgent = 'Mozilla/5.0 (compatible; Jibres irnic/2.0; +https://jibres.com/bot)';

// prepare request to irnic server
const https = require('https');
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Jibres Nic Broker' });
  
  if(process.env.SECRET_KEY)
  {
    try {
      const pemFile = fs.readFileSync(curlSecret, 'utf8')

      const httpsAgent = new https.Agent({
        ca: pemFile
      });

      // send request to irnic
      const response = axios.get(apiURL, { httpsAgent });

      axios.post(apiURL, { httpsAgent })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


      // sample output
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
