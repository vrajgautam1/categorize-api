const ExtraCategory = require("../models/extraCategoryModel");
const fs = require("fs");
const path = require("path");


module.exports.viewExtraCategories = async (req, res) => {
    try {
        const extraCategories = await ExtraCategory.find().populate("categoryId").populate("subCategoryId");
        res.status(200).json(extraCategories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports.addExtraCategory = async (req, res) => {
    try{
        const extraCategoryData = {
            name: req.body.name,
            image: req.file.path,
            categoryId: req.body.categoryId,
            subCategoryId: req.body.subCategoryId
        }

        await ExtraCategory.create(extraCategoryData);
        res.status(201).json({request: req.body, message: "ExtraCategory added successfully"})
    }catch(err){
        res.status(500).json({ message: err.message });
    }
}