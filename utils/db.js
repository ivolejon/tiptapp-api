require('dotenv').config();

const database = require('mongoose');

database.connect(process.env.MONGODB_URI, { useNewUrlParser: true 
}, (err) => {
  if (err) throw err;
});

module.exports = database;