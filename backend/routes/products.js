const router = require('express').Router();
const Product = require('../models/product.model');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Add new product (admin only)
router.post('/', auth, admin, async (req, res) => {
  const { name, description, price, image, category, stock } = req.body;

  try {
    const newProduct = new Product({
      name,
      description,
      price,
      image,
      category,
      stock
    });

    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Update product (admin only)
router.put('/:id', auth, admin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Delete product (admin only)
router.delete('/:id', auth, admin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json('Product deleted.');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

module.exports = router; 