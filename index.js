const express = require("express");
const app = express();

const path = require("path");

app.set("view engine","ejs");

app.set("views",path.join(__dirname,"view"));

const products = [
    {
        id:1,
        title:"product1",
    },
    {
        id:2,
        title:"product2",
    },
    {
        id:3,
        title:"product3",
    },
    {
        id:4,
        title:"product4",
    },
]
app.get("/",(req,res)=>{
    res.render("home",{
        title:"home page",
        products:products
    })
});
app.get("/about",(req,res)=>{
    res.render("about",{
        title:"about page",
    })
});

const PORT=3000;

app.listen(PORT,()=> {
    console.log(`server is running on port and ${PORT}`);

});

