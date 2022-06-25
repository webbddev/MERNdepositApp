const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const depositSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Deposit', depositSchema);

// const depositSchema = new Schema(
//   {
//     ownersName: {
//       type: String,
//       required: [true, 'must provide name'],
//     },
//     bankName: {
//       type: String,
//       required: [true, 'must provide banks\' name'],
//     },
//     depositAmount: {
//       type: Number,
//       required: true,
//     },
//     interestRate: {
//       type: Number,
//       required: true,
//     },
//     expiryDate: {
//       type: Date,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );
