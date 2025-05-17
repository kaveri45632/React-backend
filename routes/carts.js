const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart')

// Get all items
router.get('/', async (req, res) => {
  try {
    const cart = await Cart.find();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items' });
  }
});
 
// Get a single item
router.get('/:id', async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    if (!cart) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart items' });
  }
});

// Create a new item
router.post('/', async (req, res) => {
  try {
    const { dish_name,restaurant, Quantity, description, order_status,price, category } = req.body;
    const cart= new Cart({
      dish_name,
      restaurant,
      description,
      order_status,
      price,
      category,
      Quantity,
    });
    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    res.status(400).json({ message: 'Error creating cart item' });
  }
});

// Update an item
router.put('/:id', async (req, res) => {
  try {
    const { dish_name,restaurant, Quantity, description, order_status,price, category } = req.body;
    const cart = await cart.findByIdAndUpdate(
      req.params.id,
      { dish_name,restaurant, Quantity, description, order_status,price, category },
      { new: true }
    );
    if (!cart) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(cart);
  } catch (error) {
    res.status(400).json({ message: error });
  }
  });

router.patch('/:id', async (req, res) => {
  try {
    const { dish_name,restaurant, Quantity, description, order_status,price, category } = req.body;
    const cart = await Cart.findByIdAndUpdate(
      req.params.id,
      { dish_name,restaurant, Quantity, description, order_status,price, category },
      { new: true }
    );
    if (!cart) {
      return res.status(404).json({ message: ' cart Item not found' });
    }
    res.json(cart);
  } catch (error) {
    res.status(400).json({ message: 'Error updating item' });
  }
});

// Delete an item
router.delete('/:id', async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);
    if (!cart) {
      return res.status(404).json({ message: 'cart Item not found' });
    }
    res.json({ message: 'cart Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting cart item' });
  }
});




module.exports = router; 