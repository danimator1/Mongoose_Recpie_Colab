const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Direction = new Schema(
  {
    directions: { type: String, require: true }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('directions', Direction)