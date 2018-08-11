var db = require('mysql2');

const config = require('../config/dbcredentials.json');

var conPool = db.createPool(config);

function retrieveUsers(data,callback) {
  conPool.query("select * from final_users",(err,results)=>{
    callback(err,results);
  });
};

function retrieveUser(id,callback) {
  conPool.query("select * from final_users where ID=?",[id],(err,results)=>{
    callback(err,results);
  });
};

function registerUser(data,callback) {
  conPool.query("insert into final_users(USER,PASSWORD,NAME_FIRST,NAME_MIDDLE,NAME_LAST,ADDRESS_STREET,ADDRESS_CITY,ADDRESS_STATE,ADDRESS_ZIP,PHONE_HOME,PHONE_WORK,PHONE_MOBILE) values (?,?,?,?,?,?,?,?,?,?,?,?)",[data.USER,data.PASSWORD,data.NAME_FIRST,data.NAME_MIDDLE,data.NAME_LAST,data.ADDRESS_STREET,data.ADDRESS_CITY,data.ADDRESS_STATE,data.ADDRESS_ZIP,data.PHONE_HOME,data.PHONE_MOBILE,data.PHONE_WORK],(err,results) => {
    callback(err,results);
  })
};

function updateUser(data,callback) {
  conPool.query("update final_users set PASSWORD=?,NAME_FIRST=?,NAME_MIDDLE=?,NAME_LAST=?,ADDRESS_STREET=?,ADDRESS_CITY=?,ADDRESS_STATE=?,ADDRESS_ZIP=?,PHONE_HOME=?,PHONE_MOBILE=?,PHONE_WORK=? where ID=?",[data.PASSWORD,data.NAME_FIRST,data.NAME_MIDDLE,data.NAME_LAST,data.ADDRESS_STREET,data.ADDRESS_CITY,data.ADDRESS_STATE,data.ADDRESS_ZIP,data.PHONE_HOME,data.PHONE_MOBILE,data.PHONE_WORK],(err,results) =>{
    callback(err,results);
  });
};

function deleteUser(id,callback) {
  conPool.execute("DELETE from final_users where ID=?",[id],(err,results) => {
    callback(err,results);
  });
};

module.exports = {
  retrieveUsers: retrieveUsers,
  retrieveUser: retrieveUser,
  registerUser: registerUser,
  updateUser: updateUser,
  deleteUser: deleteUser
}
