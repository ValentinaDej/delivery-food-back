const { Schema, model } = require("mongoose");

const handleSchemaErrors = require("../middlewares/handleSchemaErrors");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      match: emailRegexp,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    orderDetail: {
      products: [
        {
          name: {
            type: Schema.Types.ObjectId,
            ref: "product",
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
          },
        },
      ],
    },
    shop: {
      type: Schema.Types.ObjectId,
      ref: "shop",
      required: true,
    },
  },
  { versionKey: false }
);

orderSchema.post("save", handleSchemaErrors);

const Order = model("order", orderSchema);

module.exports = Order;
