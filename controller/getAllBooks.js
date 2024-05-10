const Books = require("../model/Books");

const getAllBooksController = async(req,res) => {
    try {
        const books = await Books.find();
       return res.json(books);
    } catch (error) {
       return res.status(500).json({ message: error.message });
    }
}
module.exports = {getAllBooksController}