const { Schema, model } = require("mongoose");

const handleSchemaErrors = require("../middlewares/handleSchemaErrors");

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ingredients: {
    type: [String],
  },
  photoURL: {
    type: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "shop",
    required: true,
  },
});

productSchema.post("save", handleSchemaErrors);

const Product = model("product", productSchema);

module.exports = Product;
