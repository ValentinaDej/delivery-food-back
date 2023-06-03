const { Order } = require("../../models");
const { HttpError } = require("../../helpers");

const addOrder = async (req, res) => {
  const {
    name,
    email,
    phone,
    address,
    orderDetail,
    shop,
    cupon,
  } = req.body;

  const data = await Order.create({
    name,
    email,
    phone,
    address,
    orderDetail,
    shop,
    cupon,
  });
  if (!data) {
    throw HttpError(400);
  }
  res.status(201).json(email);
};

module.exports = addOrder;
