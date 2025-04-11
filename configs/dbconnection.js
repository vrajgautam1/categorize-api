const mongoose = require("mongoose");

require("dotenv").config() //.config is a function. 

const db_url = process.env.DB_URL

const db = async()=>{
    try{
        await mongoose.connect(db_url);
        console.log("database connected successfully")
    }catch(err){
        console.log(err.message);
    }
}

module.exports = db;

