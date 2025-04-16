const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginControlller');
const passport = require('../middlewares/passportLocal');

router.get("/register", loginController.showRegister);
router.post("/register", loginController.registerAdmin);
router.get("/login", loginController.showLogin);
router.post("/login", loginController.loginAdmin);

module.exports = router;