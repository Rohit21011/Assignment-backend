const { Router } = require("express");
const { addBooksController } = require("../controller/addBooks");
const { getAllBooksController } = require("../controller/getAllBooks");
const { updateBooksController } = require("../controller/updateBooks");
const { deleteBooksController } = require("../controller/deleteBooks");
const { searchBooks } = require("../controller/searchBook");

const booksRoutes = Router();
booksRoutes.post("/addBooks",addBooksController);
booksRoutes.get("/getBooks",getAllBooksController);
booksRoutes.put("/update/:id",updateBooksController);
booksRoutes.delete("/delete/:id",deleteBooksController)
booksRoutes.get("/searchBook",searchBooks);

module.exports = {booksRoutes}