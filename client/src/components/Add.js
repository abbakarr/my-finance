import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalState';


const Add = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [amount, setAmount] = useState(null);
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [createdAt, setCreatedAt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      amount: parseInt(amount),
      type: type,
      category: category,
      description: description,
      createdAt: createdAt
    };

    addTransaction(newTransaction);

    setAmount(0);
    setType('');
    setCategory('');
    setDescription('');
    setCreatedAt('');
  };
  return (
    <Form onSubmit={handleSubmit} style={{ minWidth: '300px' }}>
      <Form.Group controlId="formAmount">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formTransactionType">
        <Form.Label>Transaction type</Form.Label>
        <Form.Control
          as="select"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-3"
        />
      </Form.Group>
      <Form.Group controlId="formDate">
  <Form.Label>Date</Form.Label>
  <Form.Control
    type="date"
    placeholder="Enter date"
    value={createdAt}
    onChange={(e) => setCreatedAt(e.target.value)}
  />
</Form.Group>

      <Button variant="primary" type="submit" className="col-12 mt-3">
        Add Transaction
      </Button>
    </Form>
  );
};

export default Add;
