const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, maxLength: 255 },
  description: { type: String },
  image: { type: String },
  createdAt: { type: Date, defaultValue: Date.now() },
  updatedAt: { type: Date, defaultValue: Date.now() },
});

module.exports = mongoose.model('Course', Course);