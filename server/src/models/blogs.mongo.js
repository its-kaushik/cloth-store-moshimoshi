const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Blog', blogsSchema);