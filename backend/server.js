require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const depositRoutes = require('./routes/deposits');

// express app
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/deposits', depositRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(port, () => {
      console.log(`Connected to db & listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
