const router = require('express').Router();
const Order = require('../models/order.model');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

// Create new order
router.post('/', auth, async (req, res) => {
  const { items, totalAmount, shippingAddress } = req.body;

  try {
    const newOrder = new Order({
      user: req.user.id,
      items,
      totalAmount,
      shippingAddress
    });

    const savedOrder = await newOrder.save();
    res.json(savedOrder);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Get user's orders
router.get('/my-orders', auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id })
      .populate('items.product')
      .sort('-createdAt');
    res.json(orders);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Update order status (admin only)
router.put('/:id/status', auth, admin, async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(order);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

module.exports = router; 