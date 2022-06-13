const express=require("express")
const app=express()
app.use(express.json())
app.use("/",require("./login"))

app.listen(8000,()=>{
    console.log("Listening at port 8000");
})
