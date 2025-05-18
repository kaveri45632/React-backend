
const express = require('express'); 
const router = express.Router();
const Review = require('../models/Review'); // Correct model import


// Get all items
router.get('/', async (req, res) => {
  try {
    const Reviews = await Review.find();
    res.json(Reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items' });
  }
});

// Get a single item
router.get('/:id', async (req, res) => {
  try {
    const Review = await Review.findById(req.params.id);
    if (!Review) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(Review);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching item' });
  }
});

// Create a new item
router.post('/', async (req, res) => {
  try {
    const { productname, productid, description, Ratings, createdAt } = req.body;
    const review = new Review({
    productname,
    productid,
    description,
    Ratings,
    createdAt 
    });
    await review.save();
    res.status(201).json(Review);
  } catch (error) {
    res.status(400).json({ message: 'Error creating item', error: error.message });
  }
});

// Update an item completely (PUT)
router.put('/:id', async (req, res) => {
  try {
    const { productname, productid, description, Ratings, createdAt  } = req.body;
    const cart = await Cart.findByIdAndUpdate(
      req.params.id,
      { productname, productid, description, Ratings, createdAt  },
      { new: true, runValidators: true }
    );
    if (!Review) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(Review);
  } catch (error) {
    res.status(400).json({ message: 'Error updating item', error: error.message });
  }
});
// Partially update an item (PATCH)
router.patch('/:id', async (req, res) => {
  try {
    const Review = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!Review) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(Review);
  } catch (error) {
    res.status(400).json({ message: 'Error updating item', error: error.message });
  }
});

// Delete an item
router.delete('/:id', async (req, res) => {
  try {
    const Review = await Cart.findByIdAndDelete(req.params.id);
    if (!Review) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item' });
  }
});

module.exports = router;