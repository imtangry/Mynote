var express = require('express');
var router = express.Router();
var userService = require('../service/userService');
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
router.get('/:id', function (req, res, next) {
    console.log("C");
    res.header("Access-Control-Allow-Origin", "*");
    var id = req.params.id;
    userService.getUserInfo(id).then(function (data) {
        res.json(data);
    });
});
router.get('/info/:id', function (req, res, next) {
    console.log("C");
    res.header("Access-Control-Allow-Origin", "*");
    var id = req.params.id;
    var state = {
        loginname: "",
        points: "",
        join_date: "",
        topic_with: [],
        reply: []
    }
    userService.getUser(id).then(function (data) {
        state.loginname = data[0].loginname;
        state.points = data[0].points;
        state.join_date = data[0].join_date;
        userService.getUserArticles(id).then(function (data) {
            state.topic_with = data;
            userService.getReply(id).then(function (data) {
                state.reply = data;
                res.json(state);
            })
        })
    })
});
router.post("/login", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;
    userService.login(username, password).then(function (data) {
        console.log(data);
        if (data.length > 0) {
            res.json({ "succ": 1 });
        } else {
            res.json({ "succ": 0 });
        }
    })
});

router.post("/register", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;
    var nickname = req.body.nickname;
    userService.getUserByUsername(username).then(function (data) {
        if (data.length > 0) {
            res.json({ "succ": 0 });
        }
        else {
            userService.register(username, password, nickname).then(function (data) {
                console.log("注册返回的数据：" + data.toString());
                res.json({ "succ": 1 });
            })
        }
    })
});
module.exports = router;
