const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const listing = require("../models/listing.js");
const {isLoggedIn} = require("../middleware.js");

const validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body);
    if(error){
        throw new ExpressError(400, error);
    } else{
        next();
    }
}

// 
// router.get("/", wrapAsync(async(req,res) => {
//     let allListings = await listing.find({});
//     res.render("listings/index.ejs", {allListings});
// }));

//index route
router.get("/", isLoggedIn, wrapAsync(async (req, res) => {
    const userListings = await listing.find({ user: req.user._id });
    res.render("listings/index.ejs", { allListings: userListings });
}));

//new route
router.get("/new",isLoggedIn,wrapAsync(async(req,res) => {
    if(!req.isAuthenticated()){
        req.flash("error", "you must be logged in to create listing!");
        return res.redirect("/login");
    }
    res.render("listings/new.ejs")
}));

// create route
router.post("/",isLoggedIn, validateListing, wrapAsync(async(req,res) => {
    const newListing = new listing(req.body.listing);
    newListing.user = req.user._id;
    await newListing.save();
    req.flash("success", "New Listing Created");
    res.redirect("/listings");
}));

// // edit route
// router.get("/:id/edit", isLoggedIn, wrapAsync(async(req,res) => {
//     let {id} = req.params;
//     const Listing = await listing.findById(id);
//     if(!Listing) {
//         req.flash("error","Listing you requested for does not exist!");
//         return  res.redirect("/listings");
//     }
//     res.render("listings/edit.ejs", {Listing});
// }));


// edit route
router.get("/:id/edit", isLoggedIn, wrapAsync(async (req, res) => {
    let { id } = req.params;
    const Listing = await listing.findById(id);

    if (!Listing) {
        req.flash("error", "Listing you requested does not exist!");
        return res.redirect("/listings");
    }

    // 👇 Authorization check
    if (!Listing.user.equals(req.user._id)) {
        req.flash("error", "You are not authorized to edit this listing!");
        return res.redirect("/listings");
    }

    res.render("listings/edit.ejs", { Listing });
}));

// update route
router.put("/:id", isLoggedIn, validateListing, wrapAsync(async(req,res) => {
    let {id} = req.params;
    let theListing = await listing.findByIdAndUpdate(id, {...req.body.listing});
    await theListing.save();
    req.flash("success", "Listing Updated");
    res.redirect(`/listings/${id}`);
}));

//show route
router.get("/:id", wrapAsync(async(req,res) => {
    let {id} = req.params;
    const Listing = await listing.findById(id);
    if(!Listing) {
        req.flash("error","Listing you requested for does not exist!");
        return  res.redirect("/listings");
    }
    res.render("listings/show.ejs", {Listing});
}));

// //delete route
// router.delete("/:id",isLoggedIn, wrapAsync(async(req,res) => {
//     let {id} = req.params;
//     await listing.findByIdAndDelete(id);
//     req.flash("success", "Listing Deleted");
//     res.redirect("/listings");
// }));

// edit route
router.get("/:id/edit", isLoggedIn, wrapAsync(async (req, res) => {
    let { id } = req.params;
    const Listing = await listing.findById(id);

    if (!Listing) {
        req.flash("error", "Listing you requested does not exist!");
        return res.redirect("/listings");
    }

    // 👇 Authorization check
    if (!Listing.user.equals(req.user._id)) {
        req.flash("error", "You are not authorized to edit this listing!");
        return res.redirect("/listings");
    }

    res.render("listings/edit.ejs", { Listing });
}));


module.exports = router;