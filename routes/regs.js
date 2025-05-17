const express = require('express');
const router = express.Router();
const Reg = require('../models/Reg')

// Get all items
router.get('/', async (req, res) => {
  try {
    const reg = await Reg.find();
    res.json(reg);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reg' });
  }
});
 
// Get a single item
router.get('/:id', async (req, res) => {
  try {
    const reg = await Reg.findById(req.params.id);
    if (!reg) {
      return res.status(404).json({ message: 'Reg not found' });
    }
    res.json(reg);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reg' });
  }
});

// Create a new item
router.post('/', async (req, res) => {
  try {
    const { username,password,phoneno,pincode,gender } = req.body;
    const reg= new Reg({
      username,
      password,
      phoneno,
      pincode,
      gender
    });
    await reg.save();
    res.status(201).json(reg);
  } catch (error) {
    res.status(400).json({ message: 'Error creating reg' });
  }
});

// Update an item
router.put('/:id', async (req, res) => {
  try {
    const { username,password,phoneno,pincode,gender } = req.body;
    const reg = await Reg.findByIdAndUpdate(
      req.params.id,
      { username,password,phoneno,pincode,gender },
      { new: true }
    );
    if (!reg) {
      return res.status(404).json({ message: 'reg not found' });
    }
    res.json(reg);
  } catch (error) {
    res.status(400).json({ message: error });
  }
  });

router.patch('/:id', async (req, res) => {
  try {
    const { username,password,phoneno,pincode,gender } = req.body;
    const reg = await Reg.findByIdAndUpdate(
      req.params.id,
      { username,password,phoneno,pincode,gender },
      { new: true }
    );
    if (!reg) {
      return res.status(404).json({ message: ' reg not found' });
    }
    res.json(reg);
  } catch (error) {
    res.status(400).json({ message: 'Error updating reg' });
  }
});

// Delete an item
router.delete('/:id', async (req, res) => {
  try {
    const reg = await Reg.findByIdAndDelete(req.params.id);
    if (!reg) {
      return res.status(404).json({ message: 'reg not found' });
    }
    res.json({ message: 'reg deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting reg' });
  }
});




module.exports = router; 