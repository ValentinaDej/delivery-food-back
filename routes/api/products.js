const express = require("express");
const { getProducts } = require("../../controllers");
const ctrlWrapper = require("../../helpers/ctrlWrapper");

const router = express.Router();

router.get("/:ownerId", ctrlWrapper(getProducts));

module.exports = router;
