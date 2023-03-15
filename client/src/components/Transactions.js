import React, { useEffect, useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalState';

const Transactions = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  }, []);

  const transactionItems = transactions.sort().reverse().slice(0, 10).map((transaction) => (
    <ListGroup.Item
      key={transaction._id}
      className={transaction.type === 'income' ? 'text-success' : 'text-danger'}
    >
      {transaction.description}{' '}
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
