const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const db = require("./configs/dbconnection");
const initializePassport = require("./middlewares/passportLocal");

const app = express();

// DB Connect
db();

// View Engine
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: true }));
// Static Files
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));




// Middlewares
app.use(
    session({
        secret: "yourSecretKey",
        resave: false,
        saveUninitialized: false,
    })
);

app.use(passport.initialize());
app.use(passport.session());
initializePassport(passport);


const mainRouter = require("./routers/index");
app.use(mainRouter);


app.listen(process.env.PORT || 3000, (err) => {
    if (!err) {
        console.log("Server is running");
        console.log("http://localhost:" + (process.env.PORT || 3000));
    }
});
