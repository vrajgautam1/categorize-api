const Admin = require("../models/adminModel");

// GET - Show registration form
exports.showRegister = (req, res) => {
    res.render("register"); // views/register.ejs
};

// POST - Handle registration form submit
exports.registerAdmin = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const newAdmin = new Admin({ username, email, password });
        await newAdmin.save();

        res.redirect("/login"); // redirect to login after successful registration
    } catch (err) {
        console.error("Registration error:", err);
        res.status(500).send("Something went wrong during registration.");
    }
};

// GET - Show login form
exports.showLogin = (req, res) => {
    res.render("login"); // views/login.ejs
};
