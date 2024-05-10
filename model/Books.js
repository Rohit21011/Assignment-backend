const { default: mongoose } = require("mongoose");

const BookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    genre:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model("Book", BookSchema);