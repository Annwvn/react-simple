const sqlconfig = require('./axios.js')
const mysql = require("mysql")

let connection=mysql.createPool(sqlconfig)
const query=(sql)=>{
return new Promise((resolve,reject)=>{
connection.getConnection((err,connect)=>{
    connect.query(sql,(sqlerr,rows,fields)=>{
    if(err){
        reject(err)
        return
    }
    resolve(rows)
//释放连接
    connect.release()
    })
})
})
}
module.exports= query