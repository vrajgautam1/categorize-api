const path = require("path");
const bodyParser = require("body-parser");
const db = require("./configs/dbconnection")
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine", "ejs");
app.set("views", "views")
app.use(express.static(path.join(__dirname, "public")))
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


const mainRouter = require("./routers/index")
app.use(mainRouter)

app.listen(process.env.PORT || 3000, (err)=>{
    if(!err){
        db()
        console.log("server is running");
        console.log("http://localhost:"+3000)
    }
})
