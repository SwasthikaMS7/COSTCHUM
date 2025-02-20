import React from "react";

const AddExpense = ({ expense, handleExpenseChange, handleCalculate }) => {
  return (
    <div className="expense">
      <h2>Enter Expense</h2>
      <input
        type="number"
        placeholder="Enter total expense"
        value={expense}
        onChange={handleExpenseChange}
      />
      <button onClick={handleCalculate}>Calculate Split</button>
    </div>
  );
};

export default AddExpense;