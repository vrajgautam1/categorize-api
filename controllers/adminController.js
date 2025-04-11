const Category = require("../models/categoryModel.js");
const SubCategory = require("../models/subCategoryModel.js");
const ExtraCategory = require("../models/extraCategoryModel.js");

//-1 open dashboard page
module.exports.openDashBoardPage = async (req, res) => {
    try {
      const categories = await Category.find();
      const subCategories = await SubCategory.find();
      const extraCategories = await ExtraCategory.find();
  
      return res.render("admin/dashboard.ejs", {
        categories,
        subCategories,
        extraCategories
      });
    } catch (err) {
      console.log("Error loading dashboard data:", err);
      res.status(500).send("Server Error");
    }
  };


//-2 open add category page
module.exports.openAddProductPage = async (req, res) => {
    try {
      const categories = await Category.find();
      const subCategories = await SubCategory.find();
  
      return res.render("admin/addProduct.ejs", {
        categories,
        subCategories
      });
    } catch (err) {
      console.log("Error fetching categories/subcategories:", err);
      res.status(500).send("Server Error");
    }
  };



//-3 controllers for 1 - adding cat, subcat, extra cat and 2 - deleting cat, subcat, extra cat
module.exports.addCategory = async (req, res) => {
  try {
    const category = {
      name: req.body.name,
      image: req.file ? req.file.filename : null
    };
    await Category.create(category);
    console.log("Category added successfully:", category);
    res.redirect("/admin/dashboard");
  } catch (err) {
    console.log("Error adding category:", err);
    res.status(500).send("Server Error");
  }
};


module.exports.addSubCategory = async (req, res) => {
  try {
    const subCategory = {
      name: req.body.name,
      image: req.file ? req.file.filename : null,
      categoryId: req.body.categoryId
    };
    
    await SubCategory.create(subCategory);
    console.log("Sub-category added successfully:", subCategory);
    res.redirect("/admin/dashboard");
  } catch (err) {
    console.log("Error adding sub-category:", err);
    res.status(500).send("Server Error");
  }
};


module.exports.addExtraCategory = async (req, res) => {
  try {
    const extraCategory = {
      name: req.body.name,
      image: req.file ? req.file.filename : null,
      categoryId: req.body.categoryId,
      subCategoryId: req.body.subCategoryId
    };
    await ExtraCategory.create(extraCategory);
    console.log("Extra-category added successfully:", extraCategory);
    res.redirect("/admin/dashboard");
  } catch (err) {
    console.log("Error adding extra-category:", err);
    res.status(500).send("Server Error");
  }
};


  // Delete ExtraCategory
  module.exports.deleteExtraCategory = async (req, res) => {
    try {
      await ExtraCategory.findByIdAndDelete(req.params.id);
      res.redirect("/admin/dashboard");
    } catch (err) {
      console.log("Error deleting extra category:", err);
      res.status(500).send("Server Error");
    }
  };
  
  // Delete SubCategory and its ExtraCategories
  module.exports.deleteSubCategory = async (req, res) => {
    try {
      const subCatId = req.params.id;
      await SubCategory.findByIdAndDelete(subCatId);
      await ExtraCategory.deleteMany({ subCategoryId: subCatId });
      res.redirect("/admin/dashboard");
    } catch (err) {
      console.log("Error deleting subcategory:", err);
      res.status(500).send("Server Error");
    }
  };
  
  // Delete Category, its SubCategories and ExtraCategories
  module.exports.deleteCategory = async (req, res) => {
    try {
      const catId = req.params.id;
      await Category.findByIdAndDelete(catId);
      const subCats = await SubCategory.find({ categoryId: catId });
      const subCatIds = subCats.map(s => s._id);
  
      await SubCategory.deleteMany({ categoryId: catId });
      await ExtraCategory.deleteMany({ 
        $or: [
          { categoryId: catId },
          { subCategoryId: { $in: subCatIds } }
        ]
      });
  
      res.redirect("/admin/dashboard");
    } catch (err) {
      console.log("Error deleting category:", err);
      res.status(500).send("Server Error");
    }
  };
