const express=require("express")
const app=express()
const port=3000;
const{v4:uuid}=require("uuid")
const methodOverride = require("method-override")
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended :true}))
app.set("view engine","ejs")
app.use(express.static("public"))

app.listen(port,()=>
{
    console.log(`listening to port ${port}` )
})
let posts=[
    {
        id: uuid(),
        username: "",
        content:"I love Coding",
    },
    {
        id:uuid(),
        username:"",
        content:"Hard work is important to achieve something"

    },
    {
        id:uuid(),
        username:"",
        content:"I got selected for my first internship"
    }

]
app.get("/post", (req,res)=>//-index
{
    console.log("server working")
    res.render("index.ejs",{posts})
})
app.get("/post/new",(req,res)=>
{
    console.log("serving form")
    res.render("new.ejs")
})
app.post("/post",(req,res)=>// -post , create
{
    console.log(req.body)
    let {username, content}=req.body;
    let id=uuid()
    posts.push({id,username,content})
    res.redirect("/post")
})
app.get("/post/:id",(req,res)=>//- to show particular post
{
    let{id}=req.params
    let post = posts.find(p => id === p.id);
    res.render("show.ejs",{post})

})
app.get("/post/:id/edit",(req,res)=>
{
    let{id}=req.params
    let post = posts.find(p => id === p.id);
    res.render("edit.ejs",{post})
})
app.patch("/post/:id",(req,res)=>
{
    let{id}=req.params
    console.log(id)
    let newcontent=req.body.content
    let post = posts.find(p => id === p.id);
    post.content=newcontent
    console.log(post)
    res.redirect("/post")
})
app.delete("/post/:id",(req,res)=>
{
    let{id}=req.params
    posts=posts.filter(p => id != p.id);
    res.redirect("/post")
})