exports.getTransactions = (req, res, next) => {
    res.send('Getting transactions')
}
exports.addTransactions = (req, res, next) => {
    res.send('Adding new transactions')
}
exports.deleteTransactions = (req, res, next) => {
    res.send('Deleting transactions')
}