const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema( {
    name:String,
    contact: Number,
    email: String,
    address: String,
    category:String,

     user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;