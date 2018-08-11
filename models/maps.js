var db = require('mysql2');

const config = require('../config/dbcredentials.json');

var conPool = db.createPool(config);

function registerUser(data,callback) {
    conPool.query("insert into users(USER,PASSWORD,NAME_FIRST,NAME_MIDDLE,NAME_LAST,ADDRESS_STREET,ADDRESS_CITY,ADDRESS_STATE,ADDRESS_ZIP,PHONE_HOME,PHONE_WORK,PHONE_MOBILE) values (?,?,?,?,?,?,?,?,?,?,?,?)",[data.USER,data.PASSWORD,data.NAME_FIRST,data.NAME_MIDDLE,data.NAME_LAST,data.ADDRESS_STREET,data.ADDRESS_CITY,data.ADDRESS_STATE,data.ADDRESS_ZIP,data.PHONE_HOME,data.PHONE_MOBILE,data.PHONE_WORK],(err,results) => {
        callback(err,results);
    })
};

module.exports = {
    registerUser: registerUser
}
