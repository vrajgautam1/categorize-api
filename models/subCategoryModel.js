const mongoose = require("mongoose");

const subCategorySchema = mongoose.Schema({
    name: String,
    image: String,
    categoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }
});

const SubCategory = mongoose.model("SubCategory", subCategorySchema); 
module.exports = SubCategory;

