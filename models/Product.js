const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const productSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
    maxLength: [120, 'Product name is too long'],
    minLength: [3, 'Product name is too long'],
    lowercase: true,
    trim: true,
  },
  price: {
    type: number,
    required: true,
    min: [0, "Price can't be negative"],
    trim: true,
  },
  description: {
    primaryDesc: {
      type: String,
      required: true,
      trim: true,
    },
    fullDesc: [
      {
        title: {
          type: String,
          required: true,
          trim: true,
        },
        desc: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
  },
  additionalInfo: [
    {
      title: String,
      feature: String,
    },
  ],
  availableColors: [
    {
      type: string,
      required: true,
    },
  ],
  productImages: [
    {
      type: string,
      required: true,
      validate: [validator.isURL, 'Please Provide a valid url'],
    },
  ],
  status: {
    type: String,
    default: 'available',
    enum: {
      values: ['available', 'out-of-stock', 'in-stock', 'unavailable'],
      message: "{VALUE} can't be a status ",
    },
  },
  size: {
    type: String,
    enum: {
      values: ['m', 'l', 'xl', 'xxl', 'xs'],
      message: "{VALUE} can't be a size ",
    },
  },
  category: {
    type: String,
    required: true,
    enum: {
      values: [
        'furniture',
        'sports',
        'electronic',
        'phone & accessories',
        'cloth',
        'shoe',
        'jewelry',
        'beauty',
        'scientific',
        'food',
      ],
      message: "{VALUE} can't be a category",
    },
  },
  reviews: [
    {
      type: ObjectId,
      ref: 'Review',
    },
  ],
});

const Product = mongoose.model('Product', productSchema);
export default Product;
