const express = require("express");

const {
  addProduct,
  getProducts,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();


// ADD PRODUCT
router.post("/", addProduct);

// GET PRODUCTS
router.get("/", getProducts);

// DELETE PRODUCT
router.delete("/:id", deleteProduct);

module.exports = router;