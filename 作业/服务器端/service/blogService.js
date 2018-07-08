let {query} =require('../db/connect.js');


exports.getArticleByTab=function (tab) {
    var _sql=`SELECT r1.*,r2.loginname FROM r_info r1 JOIN r_user r2 ON r1.uid=r2.id and tab="${tab}";`;
    return query(_sql,[]);
};
exports.getArticles=function () {
    var _sql='SELECT r1.*,r2.loginname FROM r_info r1 JOIN r_user r2 ON r1.uid=r2.id and tab="top" UNION SELECT r1.*,r2.loginname FROM r_info r1 JOIN r_user r2 ON r1.uid=r2.id';
    return query(_sql,[]);
};
