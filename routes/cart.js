const express = require("express");
const router = express.Router();
const { addToCart, removeFromCart, getCart } = require("../controllers/cartController");

router.get("/", getCart);
router.post("/add", addToCart);
router.delete("/remove/:id", removeFromCart);

module.exports = router;
