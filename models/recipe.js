const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecipeSchema = new Schema({
    ingredient: { type: String, required: true },
    cuisine: { type: Schema.Types.ObjectId, ref: 'Cuisine', required: true }
});

module.exports = mongoose.model('Recipe', RecipeSchema);
//Commented out code to make the command line think I updated it