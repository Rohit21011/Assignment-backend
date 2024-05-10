
const Books = require("../model/Books");

const searchBooks = async (req, res) => {
  try {
    const { query } = req.query;

    const searchResults = await Books.find({
      $or: [
        { title: { $regex: query, $options: 'i' } }, 
        { author: { $regex: query, $options: 'i' } },
        { genre: { $regex: query, $options: 'i' } } 
      ]
    });
    res.json(searchResults);
  } catch (error) {
    console.error('Error searching books:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { searchBooks };
