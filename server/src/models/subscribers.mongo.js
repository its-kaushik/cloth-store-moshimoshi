const mongoose = require('mongoose');

const subsribersSchema = mongoose.Schema({
    email:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Subscriber', subsribersSchema);