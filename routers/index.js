const express = require("express");
const router = express.Router();

const categoryRouter = require("./categoryRouter");
router.use("/category", categoryRouter);

const subCategoryRouter = require("./subCategoryRouter");   
router.use("/subcategory", subCategoryRouter);

const extraCategoryRouter = require("./extraCategoryRouter");
router.use("/extracategory", extraCategoryRouter);

const adminRouter = require("./adminRouter");
router.use("/admin", adminRouter);

module.exports = router;