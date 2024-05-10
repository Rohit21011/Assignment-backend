const Books = require("../model/Books");

const deleteBooksController = async (req,res) => {
    const bookId = req.params.id;

try {
    
    const result = await Books.deleteOne({ _id: bookId });
    if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'Book not found' });
    }
 
    return res.json({ message: 'Book deleted successfully' });
} catch (error) {
    return res.status(500).json({ message: error.message });
}
}
module.exports = {deleteBooksController}