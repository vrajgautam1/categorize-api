const category = require("../models/categoryModel");
const subcategory = require("../models/subCategoryModel");
const extraCategories = require("../models/extraCategoryModel");

module.exports.openHomePage = async (req, res) => {
  try {
    // Get all categories
    const categories = await category.find();// step - 1 get categories
    const subcategories = await subcategory.find()
    const extracategories = await extraCategories.find()// step - 1 get categories

    console.log("data sent to client");
    return res.render("client/index.ejs", {categories, subcategories, extracategories});// step - 2 render the index page with categories and subcategories

  } catch (err) {
    console.error(err);
    res.status(500).send("Error loading homepage data");
  }
}

exports.getSinglePage = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await extraCategories.findById(id);

    if (!product) {
      return res.status(404).send("Product not found");
    }

    res.render("singlePage", { product });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};