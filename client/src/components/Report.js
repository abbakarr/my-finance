import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Report = () => {
  const { transactions } = useContext(GlobalContext);
  const [dateFilter, setDateFilter] = useState('');
  const [textFilter, setTextFilter] = useState('');
  const [amountFilter, setAmountFilter] = useState('');

  const handleFilter = (e) => {
    e.preventDefault();
    // Filter transactions based on date, text, and amount
    const filteredTransactions = transactions.filter((transaction) => {
      let matchesFilter = true;
      if (dateFilter && transaction.date !== dateFilter) {
        matchesFilter = false;
      }
      if (textFilter && !transaction.text.includes(textFilter)) {
        matchesFilter = false;
      }
      if (amountFilter && transaction.amount !== amountFilter) {
        matchesFilter = false;
      }
      return matchesFilter;
    });
    console.log(filteredTransactions);
  };

  return (
    <div>
      <h3>Report</h3>
      <form onSubmit={handleFilter}>
        <div className="form-group">
          <label htmlFor="dateFilter">Date:</label>
          <input
            type="date"
            id="dateFilter"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="textFilter">Text:</label>
          <input
            type="text"
            id="textFilter"
            value={textFilter}
            onChange={(e) => setTextFilter(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amountFilter">Amount:</label>
          <input
            type="number"
            id="amountFilter"
            value={amountFilter}
            onChange={(e) => setAmountFilter(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Filter
        </button>
      </form>
    </div>
  );
};

export default Report;
