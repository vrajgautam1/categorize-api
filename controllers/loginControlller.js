const Admin = require("../models/adminModel");
const passport = require("../middlewares/passportLocal").passport;

// GET - Show registration form
module.exports.showRegister = (req, res) => {
    return res.render("login/register"); // views/register.ejs
};

// POST - Handle registration form submit
module.exports.registerAdmin = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const newAdmin = { username, email, password };
        await Admin.create(newAdmin); // Save new admin to the database

        res.redirect("/login"); // redirect to login after successful registration
    } catch (err) {
        console.error("Registration error:", err);
        res.status(500).send("Something went wrong during registration.");
    }
};

// GET - Show login form
module.exports.showLogin = (req, res) => {
    res.render("login/login.ejs"); // views/login.ejs
};



exports.loginAdmin = passport.authenticate("local", {
  successRedirect: "/admin/dashboard",
  failureRedirect: "/login",
});
