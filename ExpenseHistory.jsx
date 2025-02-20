import React, { useEffect, useState } from "react";

const ExpenseHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("expenseHistory")) || [];
    setHistory(storedHistory);
  }, []);

  return (
    <div className="container">
      <h1>Expense History</h1>
      {history.length === 0 ? (
        <p>No past expenses recorded.</p>
      ) : (
        history.map((entry, index) => (
          <div key={index} className="history-item">
            <h3>{entry.expenseName}</h3>
            <p>Date: {new Date(entry.date).toLocaleDateString()}</p>
            <p>Total Amount: ${entry.totalAmount}</p>
            <h4>Split Details:</h4>
            <ul>
              {Object.entries(entry.splitResult).map(([participant, amount]) => (
                <li key={participant}>{participant}: ${amount}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default ExpenseHistory;
