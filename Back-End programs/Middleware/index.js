const express=require("express")
const app=express()
const port=3000;
const ExpressError=require("./ExpressError")

const checkToken =(req,res,next)=>
{
    let {token}=req.query
    if(token==="giveaccess")
    {
        next()
    }
    throw new ExpressError(401,"Access Denied")
}
app.use((req, res, next) => {
    res.time = Date.now(); // Store the current time in res.time
    console.log(req.method, req.path, res.time, req.hostname); // Log the correct properties
    next(); // Call the next middleware
});
app.get("/", checkToken,(req,res,)=>{
    res.send("Iam root")
}
)
app.get("/random",(req,res)=>
{
    res.send("random route")
})
app.get("/err",(req,res)=>
{
    abcd=abcd
})
app.use((err,req,res,next)=> 
    {
        let{status=500,message="some error"}=err
        res.status(status).send(message)
    })

app.listen(port,()=>{
    console.log("server listening")
})
