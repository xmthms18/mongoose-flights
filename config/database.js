// config/database.js
const mongoose = require('mongoose');

const dbURI = process.env.DATABASE_URL;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to the database'))
  .catch((err) => console.error('Error connecting to the database:', err));

module.exports = mongoose;
