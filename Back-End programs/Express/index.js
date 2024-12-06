const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is ready and started listening for requests on http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.send("hi");
});

app.get("/:username/:id", (req, res) => {
    const username = req.params.username;
    console.log(req.params);
    res.send(`Hello, ${username}!`);
});

app.get("/search",(req, res) => {
   
    let {q}=req.query
    res.send(`you searched for ${q}`);
});

















/*app.get("/apple",(req,res)=>
    {
        res.send("you are on apple route")
    })
app.get("/orange",(req,res)=>
        {
            res.send("you are on orange route")
        })
app.get("/orange",(req,res)=>
        {
            res.send("you are on orange route")
        })
app.get("*",(req,res)=>
         {
            res.send("route not found")
         })
        
/*app.use((req,res)=>
{
    console.log("request received !")
    res.send("This is a basic response")
   /* res.send({
        name:apple,
        color:red
    }) this object responds as a json format
})     
    


 here res and req both are objects that are created by express itself as parameters in that use method*/