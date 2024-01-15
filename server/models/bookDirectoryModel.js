const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: String,
    isbn: String,
    pageCount: Number,
    publishedDate: Date,
    thumbnailUrl: String,
    shortDescription: String,
    longDescription: String,
    status: String,
    authors: [String],
    categories: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);
