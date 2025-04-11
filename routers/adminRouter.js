const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const upload = require("../middlewares/multerMiddleware");

router.get("/dashboard", adminController.openDashBoardPage);
router.get("/addProduct", adminController.openAddProductPage);
router.post("/addCategory",upload, adminController.addCategory);
router.post("/addSubCategory",upload, adminController.addSubCategory);
router.post("/addExtraCategory",upload, adminController.addExtraCategory);

// DELETE routes
router.get("/deleteCategory/:id", adminController.deleteCategory);
router.get("/deleteSubCategory/:id", adminController.deleteSubCategory);
router.get("/deleteExtraCategory/:id", adminController.deleteExtraCategory);

module.exports = router;