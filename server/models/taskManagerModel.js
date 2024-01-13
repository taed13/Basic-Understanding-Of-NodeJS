const mongoose = require("mongoose");

const taskManagerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this task."],
      trim: true,
      maxlength: [20, "Name cannot be more than 20 characters."],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TaskManagers", taskManagerSchema);
