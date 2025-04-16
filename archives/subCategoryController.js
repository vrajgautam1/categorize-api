const SubCategory = require("../models/subCategoryModel");
const fs = require("fs");
const path = require("path");


module.exports.viewSubCategories = async (req, res) => {
    try {
        const subCategories = await SubCategory.find().populate("categoryId");
        res.status(200).json(subCategories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports.addSubCategory = async (req, res) => {
    const { name, categoryId } = req.body;
    await SubCategory.create({
        name, categoryId, image: req.file.path
    })
    res.status(201).json({ request: {
        requestBody: req.body,
        image: req.file.path
    }, message: "SubCategory added successfully" })
}