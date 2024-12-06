const express=require("express")
const app=express()
const port=3000
/*const path=require("path")
app.set("views",path.join(__c/EJS,"/views"))*/
app.use(express.static("public"))
app.set("viewengine","ejs")

app.listen(port,()=>
{
    console.log(`server listening on port ${port}`)
})

app.get("/",(req,res)=>
{
    res.render("home.ejs")
})
app.get("/ig/:username",(req,res)=>{
    let {username}=req.params
    const instadata=require("./data.json")
    let data=instadata[username];
    if(data){
        res.render("instagram.ejs",{data})
    }
    else{
        res.render("error.ejs")
    }
    
})

app.get("/rolldice", (req, res) => {
    let dice = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { num: dice });
});
