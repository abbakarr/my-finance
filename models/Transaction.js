const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    
    amount: {
        type: Number,
        reuired: [true, 'please add a number']
    },
    type: {
        type: String,
        trim: 'true',
        required: [true, 'please add some text']
    },
    category: {
        type: String,
        trim: 'true',
        required: [true, 'please add some text']
    },
    description: {
        type: String,
        trim: 'true',
        required: [true, 'please add some text']
    },
     createdAt: {
        date: Date,
        default: Date
     },}
)
module.exports = mongoose.model('Transaction', transactionSchema)