const LocalStrategy = require("passport-local").Strategy;
const Admin = require("../models/adminModel");

const initialize = (passport) => {
    passport.use(
        new LocalStrategy({ usernameField: "username" }, async (username, password, done) => {
            try {
                const user = await Admin.findOne({ username });
                if (!user) return done(null, false, { message: "No user found" });

                if (user.password !== password) {
                    return done(null, false, { message: "Incorrect password" });
                }

                return done(null, user);
            } catch (err) {
                return done(err);
            }
        })
    );

    passport.serializeUser((user, done) => done(null, user.id));

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await Admin.findById(id);
            done(null, user);
        } catch (err) {
            done(err);
        }
    });
};

module.exports = initialize;
