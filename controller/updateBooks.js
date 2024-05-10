const Books = require("../model/Books");

const updateBooksController = async(req,res) => {
    try {
        const book = await Books.findById(req.params.id);
        if (book) {
            book.title = req.body.title || book.title;
            book.author = req.body.author || book.author;
            book.genre = req.body.genre || book.genre;
            const updatedBook = await book.save();
           return res.json(updatedBook);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
       return res.status(400).json({ message: error.message });
    }
}
module.exports = {updateBooksController}