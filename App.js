import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ExpenseSplitter from "./components/ExpenseSplitter";
import Login from "./components/LoginPage"; 
import ExpenseHistory from "./components/ExpenseHistory";
import "./App.css"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/expense-splitter" element={<ExpenseSplitter />} />
        <Route path="/ExpenseHistory" element={<ExpenseHistory/>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
