const express = require("express");
const router = express.Router();
const categoryController = require("./categoryController");
const upload = require("../middlewares/multerMiddleware");

router.get("/viewCategories", categoryController.viewCategories);
router.post("/addCategory", upload, categoryController.addCategory);
router.delete("/deleteCategory/:id", categoryController.deleteCategory);
router.patch("/updateCategory/:id", upload, categoryController.updateCategory);

module.exports = router;    