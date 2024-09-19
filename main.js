const http=require("http");
const fs=require("fs");
const url=require("url");
const express=require("express")

const app=express();

app.get("/",(req,res)=>{
    res.send("Hello Homepage")
});
app.get("/about",(req,res)=>{
    res.send("Hello Aboutpage" + " " + req.query.name + " " + req.query.id)
})

app.listen(8000,()=> console.log("Server is start listening at 8000......"));