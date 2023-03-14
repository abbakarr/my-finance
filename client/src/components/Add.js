import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { IncomeExpenseContext } from '../context/IncomeExpensesContext';

const Add = () => {
  const { addTransaction } = useContext(IncomeExpenseContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [transactionType, setTransactionType] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: parseInt(amount),
      type: transactionType,
      category: category,
      date: date,
    };

    addTransaction(newTransaction);

    setText('');
    setAmount(0);
    setTransactionType('');
    setTransactionType('');
    setDate('');

    console.log(newTransaction)
  };
  return (
    <Form onSubmit={handleSubmit} style={{ minWidth: '300px' }}>
      <Form.Group controlId="formAmount">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formTransactionType">
        <Form.Label>Transaction type</Form.Label>
        <Form.Control
          as="select"
          value={transactionType}
          onChange={(e) => setTransactionType(e.target.value)}
        >
          <option disabled value=''>Select</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control
          as="select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
           <option disabled value=''>Select</option>
          <option value="Family">Family</option>
          <option value="Bills">Bills</option>
          <option value="Gifts">Gifts</option>
          <option value="Internet">Internet</option>
          <option value="Education">Education</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formText">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter description"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="p-3"
        />
      </Form.Group>
      <Form.Group controlId="formDate">
  <Form.Label>Date</Form.Label>
  <Form.Control
    type="date"
    placeholder="Enter date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
  />
</Form.Group>

      <Button variant="primary" type="submit" className="col-12 mt-3">
        Add Transaction
      </Button>
    </Form>
  );
};

export default Add;
