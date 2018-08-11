var db = require('mysql2');

const config = require('../config/dbcredentials.json');

var conPool = db.createPool(config);

function retrieveStores(data,callback) {
  conPool.query("select * from final_stores",[cid],(err,results)=>{
    callback(err,results);
  });
};

function registerStore(data,callback) {
    conPool.query("insert into final_stores(USER_ID,NAME_STORE,ADDRESS_STREET,ADDRESS_CITY,ADDRESS_STATE,ADDRESS_ZIP,DELIVERY_FEE,COST_PER_MILE,PHONE_1,PHONE_2) values (?,?,?,?,?,?,?,?,?,?)",[data.USER_ID,data.NAME_STORE,data.ADDRESS_STREET,data.ADDRESS_CITY,data.ADDRESS_STATE,data.ADDRESS_ZIP,data.DELIVERY_FEE,data.COST_PER_MILE,data.PHONE_1,data.PHONE_2],(err,results) => {
        callback(err,results);
    })
};

function updateStore(data,callback) {
    conPool.query("update final_stores set USER_ID=?,NAME_STORE=?,ADDRESS_STREET=?,ADDRESS_CITY=?,ADDRESS_STATE=?,ADDRESS_ZIP=?,DELIVERY_FEE=?,COST_PER_MILE=?,PHONE_1=?,PHONE_2=? where ID=?",[data.USER_ID,data.NAME_STORE,data.ADDRESS_STREET,data.ADDRESS_CITY,data.ADDRESS_STATE,data.ADDRESS_ZIP,data.DELIVERY_FEE,data.COST_PER_MILE,data.PHONE_1,data.PHONE_2],(err,results) =>{
        callback(err,results);
    });
};

function deleteStore(id,callback) {
    conPool.execute("DELETE from final_stores where ID=?",[id],(err,results) => {
        callback(err,results);
    });
};

module.exports = {
    retrieveStores: retrieveStores,
    registerStore: registerStore,
    updateStore: updateStore,
    deleteStore: deleteStore
}
