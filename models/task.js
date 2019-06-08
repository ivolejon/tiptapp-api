const mongoose = require('./../utils/db');

const taskModel = mongoose.Schema({
  name: { type: String },
  description: { type: String },
  status: { type: String },
  list: { type: String },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Task', taskModel);
