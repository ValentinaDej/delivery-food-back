const { ctrlWrapper } = require("../../helpers");

const getOrders = require("./getOrders");
const addOrder = require("./addOrder");

module.exports = {
  getOrders: ctrlWrapper(getOrders),
  addOrder: ctrlWrapper(addOrder),
};
