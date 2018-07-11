var express = require('express');
var router = express.Router();
var blogService = require('../service/blogService');


/* GET article */

// 模糊需要放在一下面

router.get('/all', function(req, res, next) {
    console.log("A");
    res.header("Access-Control-Allow-Origin","*");
    blogService.getArticles().then(function (data) {
        res.json(data);
    });
});
router.get('/:tab', function(req, res, next) {
    console.log("B");
    res.header("Access-Control-Allow-Origin","*");
    var tab = req.params.tab;
    blogService.getArticleByTab(tab).then(function (data) {
        res.json(data);
    });
});

/* GET the article with reply  */
router.get('/id/:id', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    var id = req.params.id;
    console.log(id);
    var state = {
      article: {},
      reply: []
    }
    blogService.getArticleWithUser(id).then(function (data) {
    //   console.log(data);
      state.article = data[0];
      blogService.getReplyForArticle(id).then(function (data) {
        state.reply = data;
        res.json(state);
      })
    })
  });
  module.exports = router;

module.exports = router;
