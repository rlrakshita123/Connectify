const Joi = require("joi");

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
         name:Joi.string().required(),
        contact: Joi.string().required(),
        email: Joi.string().required(),
        address: Joi.string().required(),
        category:Joi.string().required(),
    }).required()
});