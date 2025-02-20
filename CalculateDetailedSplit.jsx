import React from "react";

const CalculateDetailedSplit = ({ totalAmount, splitResult }) => {
  if (Object.keys(splitResult).length === 0) {
    return null;
  }
  return (
    <div className="result">
      <h2>Split Results</h2>
      <p>Total Amount: ${totalAmount}</p>
      <ul>
        {Object.entries(splitResult).map(([participant, amount]) => (
          <li key={participant}>
            {participant}: ${amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalculateDetailedSplit;