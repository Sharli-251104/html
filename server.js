const express = require("express");
const app = express();

app.get("/first",(req,res)=>
{
    res.send("hello");
})

app.listen(4321,()=>
{
    console.log("server is running");
})