const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { booksRoutes } = require('./routes/routes');
const mongodbConnection = require('./db/connection');
app.use(cors());
app.use(bodyParser.json());

app.use("/books",booksRoutes)
const PORT = `${process.env.PORT}` || 8001;
app.listen(PORT, async () => {
    try {
      await mongodbConnection;
      console.log("MongoDB connected");
      console.log(`Server is running on port ${PORT}`);
    } catch (error) {
      console.error("Error connecting to MongoDB:", error.message);
      process.exit(1); // Exit the process if MongoDB connection fails
    }
  });