var db = require('mysql2');

const config = require('../config/dbcredentials.json');

var conPool = db.createPool(config);

function registerStore(data,callback) {
    conPool.query("insert into users(USER_ID,NAME_STORE,ADDRESS_STREET,ADDRESS_CITY,ADDRESS_STATE,ADDRESS_ZIP,DELIVERY_FEE,COST_PER_MILE,PHONE_1,PHONE_2) values (?,?,?,?,?,?,?,?,?,?)",[data.USER_ID,data.NAME_STORE,data.ADDRESS_STREET,data.ADDRESS_CITY,data.ADDRESS_STATE,data.ADDRESS_ZIP,data.DELIVERY_FEE,data.COST_PER_MILE,data.PHONE_1,data.PHONE_2],(err,results) => {
        callback(err,results);
    })
};

module.exports = {
    registerStore: registerStore
}
