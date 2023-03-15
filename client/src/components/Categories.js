import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Categories = () => {
  const { transactions } = useContext(GlobalContext);

  const expenseCategories = transactions
    .filter((transaction) => transaction.type === 'expense')
    .map((transaction) => transaction.category);

  const categoryTotals = expenseCategories.reduce((acc, category) => {
    if (!acc[category]) {
      acc[category] = 0;
    }
    const categoryTotal = transactions
      .filter((transaction) => transaction.category === category)
      .reduce((total, transaction) => total + transaction.amount, 0);
    acc[category] += categoryTotal;
    return acc;
  }, {});

  const categoryList = Object.keys(categoryTotals);
  const totalExpense = Object.values(categoryTotals).reduce((acc, cur) => acc + cur, 0);

  return (
    <div className="categories-container">
      <h3>Expense Analytics</h3>
      {categoryList.length > 0 ? (
        <ul>
          {categoryList.map((category) => {
            const categoryAmount = categoryTotals[category];
            const percentage = ((categoryAmount / totalExpense) * 100).toFixed(2);

            return (
              <li key={category}>
                <span className="category-name bold">{category}:</span>
                <span className="category-amount">${categoryAmount.toFixed(2)}</span>
                <span className="category-percentage">{percentage}%</span>
              </li>
            );
          })}
          <li>
            <span className="category-name">Grand Total:</span>
            <span className="category-amount">${totalExpense.toFixed(2)}</span>
            <span className="category-percentage">100%</span>
          </li>
        </ul>
      ) : (
        <p>No categories yet.</p>
      )}
    </div>
  );
};

export default Categories;
