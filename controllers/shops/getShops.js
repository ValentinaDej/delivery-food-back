const { Shop } = require("../../models");

const getShops = async (req, res) => {
  const result = await Shop.find({});
  res.status(200).json({
    result,
  });
};

module.exports = getShops;
