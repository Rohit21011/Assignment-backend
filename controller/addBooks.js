const Books = require("../model/Books");

const addBooksController =async (req,res) => {
    const { title, author, genre } = req.body;
    try {
        const newBook = new Books({ title, author, genre });
        await newBook.save();
       return res.status(201).json({message:"new book is added successfully!"});
    } catch (error) {
        
       return res.status(400).json({ message: error.message });
    }
}
module.exports = {addBooksController}