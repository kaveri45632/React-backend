
const express = require('express'); 
const router = express.Router();
const Login = require('../models/Login'); // Correct model import


// Get all items
router.get('/', async (req, res) => {
  try {
    const Logins = await Login.find();
    res.json(Logins);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items' });
  }
});

// Get a single item
router.get('/:id', async (req, res) => {
  try {
    const Login = await Login.findById(req.params.id);
    if (!Login) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(Login);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching item' });
  }
});

// Create a new item
router.post('/', async (req, res) => {
  try {
    const { name, phonenumber, address, email, location, state } = req.body;
    const login = new Login({
      name,
      phonenumber,
      address,
      email,
      location,
      state
    });
    await login.save();
    res.status(201).json(Login);
  } catch (error) {
    res.status(400).json({ message: 'Error creating item', error: error.message });
  }
});

// Update an item completely (PUT)
router.put('/:id', async (req, res) => {
  try {
    const { name, phonenumber, address, email, location, state  } = req.body;
    const cart = await Cart.findByIdAndUpdate(
      req.params.id,
      {  name, phonenumber, address, email, location, state },
      { new: true, runValidators: true }
    );
    if (!Login) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(Login);
  } catch (error) {
    res.status(400).json({ message: 'Error updating item', error: error.message });
  }
});
// Partially update an item (PATCH)
router.patch('/:id', async (req, res) => {
  try {
    const Login = await Login.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!Login) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(Login);
  } catch (error) {
    res.status(400).json({ message: 'Error updating item', error: error.message });
  }
});

// Delete an item
router.delete('/:id', async (req, res) => {
  try {
    const Login = await Cart.findByIdAndDelete(req.params.id);
    if (!Login) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item' });
  }
});

module.exports = router;