const express = require('express');
const router = express.Router();
const Product = require('../models/product')

// Get all items
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});
 
// Get a single item
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product' });
  }
});

// Create a new item
router.post('/', async (req, res) => {
  try {
    const { productname, description, price, category ,Ratings,Quality,salesAt} = req.body;
    const product = new Product({
      productname,
      description,
      price,
      category,
      Ratings,
      Quality,
      salesAt
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: 'Error creating product' });
  }
});

// Update an item
router.put('/:id', async (req, res) => {
  try {
    const {  productname, description, price, category ,Ratings,Quality,salesAt } = req.body;
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {  productname, description, price, category ,Ratings,Quality,salesAt },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: 'Error updating product' });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const {  productname, description, price, category ,Ratings,Quality,salesAt } = req.body;
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {  productname, description, price, category ,Ratings,Quality,salesAt },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: 'Error updating product' });
  }
});

// Delete an item
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product' });
  }
});




module.exports = router; 