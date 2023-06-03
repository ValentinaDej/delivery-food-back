const { HttpError } = require("../../helpers");
const { Order } = require("../../models");

const getOrders = async (req, res) => {
  const { email, phone } = req.query;
  const data = await Order.find({ email, phone });

  if (!data) {
    throw HttpError(404, "Your not have order");
  }

  res.status(200).json(data);
};

module.exports = getOrders;
