var express = require('express');
var router = express.Router();
var userService = require('../service/userService');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/:id', function(req, res, next) {
    console.log("C");
    res.header("Access-Control-Allow-Origin","*");
    var id = req.params.id;
    userService.getUserInfo(id).then(function (data) {
        res.json(data);
    });
});
module.exports = router;
