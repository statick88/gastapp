// src/components/TransactionList.jsx

import PropTypes from 'prop-types';

function TransactionList({ transactions }) {
  return (
    <div>
      <h2>Transaction List</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            <span>Amount: {transaction.amount}</span>
            <span>Category: {transaction.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

TransactionList.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default TransactionList;
