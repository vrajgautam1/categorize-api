const clientController = require('../controllers/clientController');
const express = require('express');
const router = express.Router();

router.get("/", clientController.openHomePage);
router.get("/singlePage/:id", clientController.getSinglePage);

module.exports = router;