var express = require('express');
var router = express.Router();
var articleService = require('../service/articleService');
/* GET article for index */
router.get('/', function (req, res, next) {
  console.log('AAA');
  res.header("Access-Control-Allow-Origin", "*");
  articleService.getArticleAll().then(function (data) {
    res.json(data);
  })
});

