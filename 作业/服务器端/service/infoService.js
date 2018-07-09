var query = require('../common/mysql');
var _ = exports;
_.getInfoAll = function () {
    var _sql = "select * from my_info";
    return query(_sql, []);
}