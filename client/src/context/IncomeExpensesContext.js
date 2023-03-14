// import React, { createContext, useReducer } from 'react';

// const initialState = {
//   transactions: [],
//   income: 0,
//   expense: 0,
// };

// export const IncomeExpenseContext = createContext(initialState);

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TRANSACTION':
//       const newTransaction = {
//         id: state.transactions.length + 1,
//         ...action.payload,
//       };
//       const transactions = [...state.transactions, newTransaction];
//       const income = action.payload.type === 'income' 
//         ? state.income + action.payload.amount 
//         : state.income;
//       const expense = action.payload.type === 'expense' 
//         ? state.expense + action.payload.amount 
//         : state.expense;
//       const balance = income - expense;
//       return {
//         ...state,
//         transactions,
//         income,
//         expense,
//         balance,
//       };
//     default:
//       return state;
//   }
// };

// export const IncomeExpenseProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const addTransaction = (transaction) => {
//     dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
//   };

//   return (
//     <IncomeExpenseContext.Provider value={{ ...state, addTransaction }}>
//       {children}
//     </IncomeExpenseContext.Provider>
//   );
// };


import React, { createContext, useReducer, useState, useEffect } from 'react';

const initialState = {
  transactions: [],
  income: 0,
  expense: 0,
  balance: 0,
};

export const IncomeExpenseContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      const newTransaction = {
        id: state.transactions.length + 1,
        ...action.payload,
      };
      const transactions = [...state.transactions, newTransaction];
      const income =
        action.payload.type === 'income'
          ? state.income + action.payload.amount
          : state.income;
      const expense =
        action.payload.type === 'expense'
          ? state.expense + action.payload.amount
          : state.expense;
      const balance = income - expense;
      return {
        ...state,
        transactions,
        income,
        expense,
        balance,
      };
    default:
      return state;
  }
};

export const IncomeExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    setFilteredTransactions(state.transactions);
  }, [state.transactions]);

  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  };

  const filterTransactions = (startDate, endDate, searchText) => {
    let filtered = state.transactions.filter((t) => {
      const date = new Date(t.date);
      return (
        date >= startDate &&
        date <= endDate &&
        t.text.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setFilteredTransactions(filtered);
  };

  return (
    <IncomeExpenseContext.Provider
      value={{ ...state, filteredTransactions, filterTransactions, addTransaction }}
    >
      {children}
    </IncomeExpenseContext.Provider>
  );
};
