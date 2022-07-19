const user=require("../database/model/user")


module.exports={
    getSignup:(req,res,next)=>{
        res.render("register")//hbs
        // res.send("Welcom to req...")
    },
    postSignup:async(req,res,next)=>{
        var userData=req.body.data
        let email=req.body.email
        try{
            if(email){
                let emaildata=await user.findOne({email})
                console.log({emaildata});
                if(emaildata){
                    res.send("already registered")
                }
                else{
                    if(userData){
                        let data=await user.create(req.body.data)
                        console.log(data);
                        if(data){
                            res.status(200).send("successfully submitted")
                        }
                        else{
                            res.status(404).send("something went wrong")
                        }
                    }
                   else{
                    res.status(404).send("something went wrong")
                   }
                    
                }
            }
       
        }
        catch(err){
            console.log(err);
        }
      
        // res.send("Welocme to signup post")
        // res.send()
        // console.log(req.body.data);
    }
}