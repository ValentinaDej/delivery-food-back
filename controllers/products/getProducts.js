const { Product } = require("../../models");

const getProducts = async (req, res) => {
  const ownerId = req.params.ownerId;
  const { page = 1, limit = 40 } = req.query;
  const skip = (page - 1) * limit;
  const data = await Product.find({ owner: ownerId }, "-createdAt -updatedAt", {
    skip,
    limit,
  });
  if (!data) {
    throw HttpError(404, "This shop is empty");
  }
  res.status(200).json(data);
};

module.exports = getProducts;
