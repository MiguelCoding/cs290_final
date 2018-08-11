var db = require('mysql2');

const config = require('../config/dbcredentials.json');

var conPool = db.createPool(config);

function retrieveMenuData(id,callback) {
  conPool.query("select * from final_items where STORE_ID=?",[id],(err,results)=>{
    callback(err,results);
  });
};

function insertItem(data,callback) {
  conPool.query("insert into final_items(STORE_ID,TYPE,ITEM_COST) values (?,?,?)",[data.STORE_ID,data.TYPE,data.COST],(err,results) => {
    callback(err,results);
  })
};

function updateItem(data,callback) {
  conPool.query("update final_items set TYPE=?,ITEM_COST=? where ID=?",[data.TYPE,data.COST,data.ID],(err,results) =>{
    callback(err,results);
  });
};

function deleteItem(id,callback) {
  conPool.execute("DELETE from final_items where ID=?",[id],(err,results) => {
    callback(err,results);
  });
};

module.exports = {
  retrieveMenuData: retrieveMenuData,
  insertItem: insertItem,
  updateItem: updateItem,
  deleteItem: deleteItem
}
