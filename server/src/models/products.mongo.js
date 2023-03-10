const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mrp: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    quantity: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    dateAdded: {
        type: Date,
        required: true
    }

});

module.exports = mongoose.model('Product', productsSchema);