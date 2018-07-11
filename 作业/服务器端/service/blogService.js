var query = require('../common/mysql');


exports.getArticleByTab=function (tab) {
    var _sql=`SELECT r1.*,r2.loginname FROM r_info r1 JOIN r_user r2 ON r1.uid=r2.id and tab="${tab}";`;
    return query(_sql,[]);
};
exports.getArticles=function () {
    var _sql='SELECT r1.*,r2.loginname FROM r_info r1 JOIN r_user r2 ON r1.uid=r2.id and tab="top" UNION SELECT r1.*,r2.loginname FROM r_info r1 JOIN r_user r2 ON r1.uid=r2.id';
    return query(_sql,[]);
};

// 根据id获得具体一篇文章并且带上作者信息
exports.getArticleWithUser = function (id) {
    var _sql = `SELECT r1.*,r2.* FROM r_info r1 JOIN r_user r2 ON r1.uid=r2.id and r1.id=${id};`;
    return query(_sql, []);
}
// 根据文章id获得它的回复
exports.getReplyForArticle = function (id){
    // var _sql = `select * from r_reply where r_id=${id};`;
    var _sql = `select r_reply.*,r_user.loginname from r_reply JOIN r_user ON r_reply.ruid = r_user.id AND r_reply.r_id=${id};`;
    return query(_sql, []);
}