var express = require('express');
var router = express.Router();
var infoService = require('../service/infoService');
/* GET info. */
router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*");
  infoService.getInfoAll().then(function (data) {
    res.json(data);
  })
});

module.exports = router;
