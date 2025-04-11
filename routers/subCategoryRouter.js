const express = require("express");
const router = express.Router();
const subCategoryController = require("../controllers/subCategoryController");
const upload = require("../middlewares/multerMiddleware");

router.get("/viewCategories", subCategoryController.viewSubCategories);
router.post("/addCategory", upload, subCategoryController.addSubCategory);
// router.delete("/deleteCategory/:id", subCategoryController.deleteCategory);
// router.patch("/updateCategory/:id", upload, subCategoryController.updateCategory);

module.exports = router;    