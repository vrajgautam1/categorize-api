const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Admin = require("../models/adminModel");

// Configure local strategy
passport.use(
  new LocalStrategy(
    { usernameField: "email" }, // field to use as username
    async (email, password, done) => {
      try {
        const user = await Admin.findOne({ email });
        if (!user) {
          return done(null, false, { message: "Incorrect email" });
        }
        if (user.password !== password) {
          return done(null, false, { message: "Incorrect password" });
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

// Serialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user
passport.deserializeUser(async (id, done) => {
  try {
    const user = await Admin.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// Middleware to protect routes
module.exports.authenticateAdmin = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
};

module.exports = passport;

