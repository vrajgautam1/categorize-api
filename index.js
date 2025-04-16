const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const db = require("./configs/dbconnection");
require("./middlewares/passportLocal"); // just run the file to configure passport

const app = express();

// Connect to DB
db();

// View Engine
app.set("view engine", "ejs");
app.set("views", "views");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(
  session({
    secret: "yourSecretKey",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
const mainRouter = require("./routers/index");
app.use(mainRouter);

// Start Server
app.listen(process.env.PORT || 3000, (err) => {
  if (!err) {
    console.log("Server is running");
    console.log("http://localhost:" + (process.env.PORT || 3000));
  }
});
