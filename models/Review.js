const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const reviewSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  review: {
    type: String,
    required: true,
    min: [3, 'Your review is too short'],
  },
  ratings: {
    type: Number,
    required: true,
  },
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
