const bookModel = require("../models/bookDirectoryModel");

// Create a new book
module.exports.createBook = async (req, res) => {
  try {
    console.log(req.body.isbn);
    // Check if a book with the same ISBN already exists
    const existingBook = await bookModel.findOne({ isbn: req.body.isbn });
    if (existingBook) {
      return res.status(400).json({
        success: false,
        message: "A book with the same ISBN already exists.",
      });
    }

    const book = await bookModel.create(req.body);
    res.status(201).json({
      success: true,
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all books
module.exports.getAllBooks = async (req, res) => {
  try {
    const books = await bookModel.find();
    res.status(200).json({
      success: true,
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get a single book by id
module.exports.getBookById = async (req, res) => {
  try {
    const book = await bookModel.findById(req.params.id);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found.",
      });
    }
    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update a single book by id
module.exports.updateBookById = async (req, res) => {
  try {
    const { id } = req.params;

    // console.log(id);
    const book = await bookModel.findByIdAndUpdate(id, {
      title: req.body.title,
      isbn: req.body.isbn,
      pageCount: req.body.pageCount,
      publishedDate: req.body.publishedDate,
      thumbnailUrl: req.body.thumbnailUrl,
      shortDescription: req.body.shortDescription,
      longDescription: req.body.longDescription,
      status: req.body.status,
      authors: req.body.authors,
      categories: req.body.categories,
    });

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete a single book by id
module.exports.deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookModel.findByIdAndDelete(id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
