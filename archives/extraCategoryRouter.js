const express = require("express");
const router = express.Router();
const extraCategoryController = require("../archives/extraCategoryController");
const upload = require("../middlewares/multerMiddleware");

router.get("/viewCategories", extraCategoryController.viewExtraCategories);
router.post("/addCategory", upload, extraCategoryController.addExtraCategory);
// router.delete("/deleteCategory/:id", subCategoryController.deleteCategory);
// router.patch("/updateCategory/:id", upload, subCategoryController.updateCategory);

module.exports = router;    