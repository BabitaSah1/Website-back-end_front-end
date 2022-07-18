const expres=require("express")
const router=expres.Router()

const Student=require('../models/Student')

// get ticket by id
router.get('/user/:id',async(req,res)=>{
    var id = req.params.id
    console.log(id)
    try{
        const user = await Student.findById(id);
        res.status(200).json(user)
    }catch(err){
        console.error(err.message)
        res.json({error:err})
    }

});

// for creating data
router.post("/",async(req,res)=>{
    const {name,email,Study} = req.body
    try {user= new Student({
        name,
        email,
        Study
    });

    await user.save();

    res.send("student registered")
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Sever Error')
    }
})
module.exports=router