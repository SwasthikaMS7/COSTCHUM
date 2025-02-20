import React, { useState, useEffect } from "react";
import CalculateDetailedSplit from "./CalculateDetailedSplit";
import AddExpense from "./AddExpense";

const ExpenseSplitter = () => {
  const [participants, setParticipants] = useState([]);
  const [participantName, setParticipantName] = useState("");
  const [expenseName, setExpenseName] = useState("");
  const [expense, setExpense] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [splitResult, setSplitResult] = useState({});
  const [pastExpenses, setPastExpenses] = useState([]); 

  
  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setPastExpenses(storedExpenses);
  }, []);

  const handleAddParticipant = () => {
    if (participantName.trim() === "") {
      alert("Participant name cannot be empty.");
      return;
    }
    if (participants.includes(participantName.trim())) {
      alert("Participant name must be unique.");
      return;
    }
    setParticipants([...participants, participantName.trim()]);
    setParticipantName("");
  };

  const handleRemoveParticipant = (index) => {
    setParticipants(participants.filter((_, i) => i !== index));
  };

  const handleExpenseChange = (e) => {
    setExpense(e.target.value);
  };

  const handleExpenseName = () => {
    if (expenseName.trim() === "") {
      alert("Add your Expense Name for a better experience!");
      return;
    }
    setExpenseName(expenseName.trim());
  };

  const handleCalculate = () => {
    const amount = parseFloat(expense);
    if (isNaN(amount) || amount <= 0 || participants.length === 0) {
      alert("Please enter a valid expense and add participants.");
      return;
    }

    const splitAmount = (amount / participants.length).toFixed(2);
    const result = participants.reduce((acc, participant) => {
      acc[participant] = parseFloat(splitAmount);
      return acc;
    }, {});

    
    const newExpense = {
      date: new Date().toLocaleString(),
      name: expenseName,
      total: amount,
      splits: result,
    };

  
    const updatedExpenses = [...pastExpenses, newExpense];
    setPastExpenses(updatedExpenses);

  
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));

    setTotalAmount(amount);
    setSplitResult(result);
  };

  const handleReset = () => {
    setParticipants([]);
    setExpense("");
    setExpenseName("");
    setTotalAmount(0);
    setSplitResult({});
    setParticipantName("");
  };

  return (
    <div className="app-container">
     



      <div className="container">
        <h1>COSTCHUM</h1>
        <div className="participants">
          <h2>Participants</h2>
          <input
            type="text"
            placeholder="Enter participant name"
            value={participantName}
            onChange={(e) => setParticipantName(e.target.value)}
          />
          <button onClick={handleAddParticipant}>Add Participant</button>
          {participants.map((participant, index) => (
            <div key={index} className="participant">
              <span>{participant}</span>
              <button onClick={() => handleRemoveParticipant(index)}>Remove</button>
            </div>
          ))}
        </div>
        <div className="expense-name">
          <h2>What's your expense?</h2>
          <input
            type="text"
            placeholder="For example: Restaurant bill"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
          />
          <button onClick={handleExpenseName}>Proceed</button>
        </div>
        <AddExpense
          expense={expense}
          handleExpenseChange={handleExpenseChange}
          handleCalculate={handleCalculate}
        />
        {Object.keys(splitResult).length > 0 && (
          <CalculateDetailedSplit totalAmount={totalAmount} splitResult={splitResult} />
        )}
        <button onClick={handleReset} style={{ backgroundColor: "red" }}>RESET</button>
      </div>
  
      
      <div className="past-expenses">
        <h2>Past Expenses</h2>
        <ul>
          {pastExpenses.map((exp, index) => (
            <li key={index}>
              <strong>Date:</strong> {exp.date} | 
              <strong> Name:</strong> {exp.name} | 
              <strong> Total:</strong> ${exp.total} | 
              <strong> Splits:</strong> {JSON.stringify(exp.splits)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseSplitter;
