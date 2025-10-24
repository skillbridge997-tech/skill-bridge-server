// Very 1st script of node js
console.log('');
console.log("******* FYP Project Server Side *******");
console.log('');

// Internal Packages
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

// External Routes
const authRouter = require('./routes/auth.js');

// INIT
const app = express();
const PORT = process.env.PORT || 9000;
const DB = process.env.MONGO_URI;

// Middleware
app.use(express.json());
app.use(authRouter);

// Connections
mongoose.connect(DB)
  .then(() => {
    console.log('✅ Mongoose connection successful');
  })
  .catch((e) => {
    console.error('❌ MongoDB connection failed:', e.message);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server connected at port ${PORT}`);
});
