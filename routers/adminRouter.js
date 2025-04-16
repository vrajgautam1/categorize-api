const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const upload = require("../middlewares/multerMiddleware");
const { authenticateAdmin } = require("../middlewares/passportLocal");

router.get("/dashboard", authenticateAdmin, adminController.openDashBoardPage);
router.get("/addProduct", authenticateAdmin, adminController.openAddProductPage);

router.post("/addCategory", authenticateAdmin, upload, adminController.addCategory);
router.post("/addSubCategory", authenticateAdmin, upload, adminController.addSubCategory);
router.post("/addExtraCategory", authenticateAdmin, upload, adminController.addExtraCategory);

// DELETE routes
router.get("/deleteCategory/:id", authenticateAdmin, adminController.deleteCategory);
router.get("/deleteSubCategory/:id", authenticateAdmin, adminController.deleteSubCategory);
router.get("/deleteExtraCategory/:id", authenticateAdmin, adminController.deleteExtraCategory);

module.exports = router;
