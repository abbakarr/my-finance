import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { IncomeExpenseContext } from '../context/IncomeExpensesContext';

const Transactions = () => {
  const { transactions } = useContext(IncomeExpenseContext);

  const transactionItems = transactions.map((transaction) => (
    <ListGroup.Item
      key={transaction.id}
      className={transaction.type === 'income' ? 'text-success' : 'text-danger'}
    >
      {transaction.text}{' '}
      <span className="float-right transactionList">
        {transaction.type === 'income' ? '+' : '-'}${Math.abs(transaction.amount)}
      </span>
    </ListGroup.Item>
  ));

  return (
    <>
      <h4 className="mb-4">Transactions</h4>
      <ListGroup>{transactionItems}</ListGroup>
    </>
  );
};

export default Transactions;
