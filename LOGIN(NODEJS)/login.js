const express=require("express")
const router=express.Router()
const sql=require("./database")

// router.get("/",(req,res)=>{

// })

router.post("/login",(req,res)=>{
    var email=req.body.email
    var password=req.body.password
    if(email && password){
        sql.query(`select * from students where email='${email}'`,(err,data)=>{
             console.log(data[0]);

            if(data[0]){
                if(data[0].password==password){
                    res.send("successfully login")
                }
                else{
                    res.send("your password is wrong")
                }
            }
            else{
                res.send("your email is wrong")
            }
        })

    }
    else{
        res.send("email and password is require")
    }

})
module.exports=router
