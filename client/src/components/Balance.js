import React, { useContext } from 'react';
import { IncomeExpenseContext } from '../context/IncomeExpensesContext';

const Balance = () => {
  const { transactions } = useContext(IncomeExpenseContext);

  const balance = transactions.reduce((acc, transaction) => {
    return transaction.type === 'income' ? acc + transaction.amount : acc - transaction.amount;
  }, 0);

  return (
    <div>
      <h3>Your Balance</h3>
      <h2>{`$${balance.toFixed(2)}`}</h2>
    </div>
  );
};

export default Balance;
