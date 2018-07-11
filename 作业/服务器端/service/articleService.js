var query = require('../common/mysql');
var _ = exports;
_.getArticleAll = function () {
    var _sql = "select * from hm_article";
    return query(_sql, []);
}
