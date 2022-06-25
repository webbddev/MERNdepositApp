const Deposit = require('../models/depositModel');
const mongoose = require('mongoose');

// get all deposits
const getDeposits = async (req, res) => {
  const deposits = await Deposit.find({}).sort({ createdAt: -1 });
  res.status(200).json(deposits);
};

// get a single deposit
const getSingleDeposit = async (req, res) => {
  const { id } = req.params;

  // Mongoose id validation
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such deposit.' });
  }

  const singleDeposit = await Deposit.findById(id);

  if (!singleDeposit) {
    return res.status(404).json({ error: 'No such deposit' });
  }

  res.status(200).json(singleDeposit);
};

// create new deposit
const createDeposit = async (req, res) => {
  const { title, load, reps } = req.body;

  // add doc to db
  try {
    const newDeposit = await Deposit.create({ title, load, reps });
    res.status(200).json(newDeposit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// delete a deposit

// update a deposit

module.exports = {
  getDeposits,
  getSingleDeposit,
  createDeposit,
};
