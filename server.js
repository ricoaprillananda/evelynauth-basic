const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); 

const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Port
const PORT = process.env.PORT || 5000;

// DB Connection + Start Server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('🍃 MongoDB connected');
    app.listen(PORT, () => {
      console.log(`🪽 Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('🐦‍⬛ MongoDB connection error:', err.message);
  });
