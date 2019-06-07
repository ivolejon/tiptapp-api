const mongoose = require('./../utils/db');

const eventModel = mongoose.Schema({
  type: {type: String},
  description: {type: String},
  task: {type: String}
}, {
  timestamps: true
});

module.exports = mongoose.model('Event', eventModel);