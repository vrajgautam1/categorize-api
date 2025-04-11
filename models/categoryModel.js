const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({ //this is schema
    name: String,
    image: String
})

const Category = mongoose.model("Category", categorySchema) //this is model. which is wrapped around the schema
module.exports = Category;