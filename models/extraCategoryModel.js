const mongoose = require("mongoose");

const extraCategorySchema = mongoose.Schema({
    name: String,
    image: String,
    categoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    subCategoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory"
    }
});

const ExtraCategory = mongoose.model("ExtraCategory", extraCategorySchema); 
module.exports = ExtraCategory;

