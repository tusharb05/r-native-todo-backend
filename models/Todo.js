const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  authorID: {
    type: String,
    required: true,
  },
  starred: {
    type: Boolean,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
