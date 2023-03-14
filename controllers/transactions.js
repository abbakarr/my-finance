const Transaction = require("../models/Transaction")


exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find()

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions,
        })
    } catch (error) {
        return res.send(500).json({
            success: false,
            error: 'server-error'
        })
    }
}
exports.addTransactions = async (req, res, next) => {
 try {
    const { text, amount } = req.body;
    const transaction = await Transaction.create(req.body)

    return res.status(201).json({
        success: true,
        data: transaction,
    })
 } catch (error) {
    return res.send(501).json({
        success: false,
    })
 }
}
exports.deleteTransactions = async (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
}