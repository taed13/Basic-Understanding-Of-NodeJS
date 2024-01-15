const {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
} = require("../controllers/bookDirectoryController");

const router = require("express").Router();

// POST /books - create a new book
router.post("/books", createBook);

// GET /books - get all books
router.get("/books", getAllBooks);

// GET /books/:id - get a single book by id
router.get("/books/:id", getBookById);

// PUT /books/:id - update a single book by id
router.put("/books/:id", updateBookById);

// DELETE /books/:id - delete a single book by id
router.delete("/books/:id", deleteBookById);

module.exports = router;
