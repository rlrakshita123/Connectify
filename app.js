const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const listing = require("./models/listing.js");
const ejsMate = require("ejs-mate");
const methodOverride = require('method-override');
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema } = require("./schema.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const session = require("express-session");
const flash = require("connect-flash");

const listingRouter = require("./routes/listing.js");
const userRouter = require("./routes/user.js");

app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,"/public")));
app.use(methodOverride('_method'));

const MONGO_URL ='mongodb://127.0.0.1:27017/connectify';
async function main() {
    await mongoose.connect(MONGO_URL)
}

main()
.then(() => {
    console.log("Connected to db");
})
.catch((err) => {
    console.log(err);
});

const sessionOptions = {
    secret: "ishu@2005",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly : true
    },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
     res.locals.currUser = req.user;
    next();
});

app.use("/listings",listingRouter);
app.use("/",userRouter);

app.use((err, req, res, next) => {
    let {statusCode=500, message="Something went wrong"} = err;
    res.status(statusCode).render("error.ejs", {message});
});

//root route
app.get("/", (req,res) => {
    res.send("Hi, I am root!");
});

app.listen(3000,() => {
    console.log("Server is listening to the port 3000");
})