const mysql=require("mysql")
const connection=mysql.createConnection({
    password:"Sudha@123",
    user:"root",
    host:"localhost",
    database:"demo"
})
connection.connect((err)=>{
    if(!err){
        console.log("database is connected");
    }
})
module.exports=connection
