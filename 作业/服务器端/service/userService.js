let {query} =require('../db/connect.js');
exports.getUserInfo=function (id) {
    var _sql=`SELECT r1.*,r2.* FROM r_info r1 JOIN r_user r2 ON r1.uid=r2.id and r2.id=${id};`;
    return query(_sql,[]);
};
