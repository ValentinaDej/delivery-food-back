const { Schema, model } = require("mongoose");

const handleSchemaErrors = require("../middlewares/handleSchemaErrors");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const shopSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  adress: {
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
  photoURL: {
    type: String,
  },
  web: {
    type: String,
  },
});

shopSchema.post("save", handleSchemaErrors);

const Shop = model("shop", shopSchema);

module.exports = Shop;
