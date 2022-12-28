const Product = require('../models/Product');

exports.getProductService = async () => {
  const result = await Product.find({});
  return result;
};
exports.getProductByIdService = async (id) => {
  const result = await Product.find({ _id: id });
  return result;
};
exports.createProductService = async (data) => {
  const result = await Product.create(data);
  return result;
};
exports.updateProductByIdService = async (id, data) => {
  const result = await Product.updateOne({ _id: id }, data);
  return result;
};
