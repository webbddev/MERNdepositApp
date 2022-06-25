const express = require('express');
const {
  getDeposits,
  getSingleDeposit,
  createDeposit,
} = require('../controllers/depositController');

const router = express.Router();

// GET all deposits
router.get('/', getDeposits);

// GET a single deposit
router.get('/:id', getSingleDeposit);

// POST a new deposit
router.post('/', createDeposit);

// DELETE a deposit
router.delete('/:id', (req, res) => {
  res.json({ mssg: 'DELETE a deposit' });
});

// UPDATE a deposit
router.patch('/:id', (req, res) => {
  res.json({ mssg: 'UPDATE a deposit' });
});

module.exports = router;
