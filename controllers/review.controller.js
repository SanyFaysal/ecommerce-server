const {
  getProductService,
  createProductService,
  getProductByIdService,
  updateProductByIdService,
} = require('../service/product.service');

exports.getProducts = async (req, res) => {
  try {
    const result = await getProductService();
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error: error.message,
    });
  }
};
exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getProductByIdService(id);
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error: error.message,
    });
  }
};
exports.createProduct = async (req, res) => {
  try {
    const data = req.body;
    const result = await createProductService(data);
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error: error.message,
    });
  }
};
exports.updateProductById = async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params;
    const result = await updateProductByIdService(id, data);
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error: error.message,
    });
  }
};
