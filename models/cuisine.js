const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Cuisine = new Schema(
    {
        name: { type: String, required: true },
        origin_country: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('cuisines', Cuisine)