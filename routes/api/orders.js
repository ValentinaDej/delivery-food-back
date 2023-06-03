const express = require("express");
const router = express.Router();

const controllers = require("../../controllers");

router.get("/", controllers.getOrders);
router.post("/", controllers.addOrder);

module.exports = router;
