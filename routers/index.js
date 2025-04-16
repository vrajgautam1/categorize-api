const express = require("express");
const router = express.Router();

// const categoryRouter = require("../archives/categoryRouter");
// router.use("/category", categoryRouter);

// const subCategoryRouter = require("../archives/subCategoryRouter");   
// router.use("/subcategory", subCategoryRouter);

// const extraCategoryRouter = require("./extraCategoryRouter");
// router.use("/extracategory", extraCategoryRouter);

const adminRouter = require("./adminRouter");
router.use("/admin", adminRouter);

const clientRouter = require("./clientRouter");
router.use(clientRouter);

module.exports = router;