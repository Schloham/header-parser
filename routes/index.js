var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var ip = req.headers['x-forwarded-for'];
  var language = req.headers["accept-language"].split(',')[0];
  var r = require('ua-parser').parse(req.headers['user-agent']);
  var software = r.os.toString();
  var data = { ipadress: ip, language: language, software: software };
  res.json(data);
});

module.exports = router;
