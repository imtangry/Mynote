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

module.exports = router;
