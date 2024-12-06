const express=require("express")
const app=express()
const session=require("express-session")
const flash=require("connect-flash")
const path=require("path")
const port=3000
app.set("view engine","ejs")
app.use(flash())
app.use(session({secret:"",
                resave:false,
                saveUninitialized:true
                }))

app.use((req,res,next)=>
{
    res.locals.successMsg= req.flash("success")
    res.locals.errorMsg=req.flash("error")
    next()
})
app.get("/register",(req,res)=>
{
    let{name="anonymous"}=req.query
    req.session.name=name
    if(name==="anonymous"){
        req.flash("error","User not registered")
    }
    else{
        req.flash("success","user has registered successfully !")
    }
    res.redirect("/hello")
})
app.get("/hello",(req,res)=>
{
    res.render("page.ejs",{name:req.session.name})
})

app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})
/*app.get("/reqcount",(req,res)=>
{
    if(req.session.count){
        req.session.count++
    }
    else{
        req.session.count=1
    }
    res.send(`You sent a request ${req.session.count} times`)
})
/*app.get("/test",(req,res)=>{
    res.send("test successfull")
}
)*/