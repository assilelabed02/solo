const mysql = require("mysql2");
const mysqlConfig = require("./config")
const connection = mysql.createConnection(mysqlConfig)
    connection.connect((err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("db connected");
        }
    })
    module.exports = connection