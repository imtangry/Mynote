var query = require('../common/mysql');
exports.getUserInfo = function (id) {
    var _sql = `SELECT r1.*,r2.* FROM r_info r1 JOIN r_user r2 ON r1.uid=r2.id and r2.id=${id};`;
    return query(_sql, []);
};

exports.getUser = function (id) {
    var _sql = "select * from r_user";
    return query(_sql, []);
}
exports.getUserArticles = function (id) {
    var _sql = `SELECT r2.avatar_url,r2.loginname,r1.title,r1.createdate as date FROM r_info r1 INNER JOIN r_user r2 ON r1.uid = r2.id AND r2.id = ${id};`
    return query(_sql, []);
}
exports.getReply = function (id) {
    var _sql = `SELECT
r0.replydate as date,
r0.reply_content as title,
r2.loginname,
r1.id
FROM
r_reply r0
INNER JOIN r_info r1 ON r0.r_id = r1.id
INNER JOIN r_user r2 ON r2.id = r1.uid
WHERE
r0.ruid = ${id};`
    return query(_sql, []);
}

// 注册和登录功能
exports.login=function(username,password){
    var _sql = "select * from t_user where username = ? and password = ?";
    return query(_sql,[username,password]);
}
// 注册和登录功能
exports.getUserByUsername=function(username){
    var _sql = "select * from t_user where username = ?";
    return query(_sql,[username]);
}
exports.register=function(username,password,nickname){
    var _sql = "insert into t_user values(null,?,?,?)";
    return query(_sql,[username,password,nickname]);
}
