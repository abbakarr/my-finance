const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: 'true',
        required: [true, 'please add some text']
    },
    amount: {
        type: Number,
        reuired: [true, 'please add a number']
    },
     createdAt: {
        date: Date,
        default: Date
     },}
)
module.exports = mongoose.model('Transaction', transactionSchema)