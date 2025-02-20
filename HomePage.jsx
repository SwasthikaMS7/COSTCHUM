import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HomePage.css";
import cart from "../components/assets/cart.png";
const HomePage = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login"); 
  };
  const isLoggedIn = localStorage.getItem("user");
  return (
    <div className="home-container">
      <h1><center>COSTCHUM</center></h1>
      <p>Introducing <b>CostChum</b>, your go-to app for effortlessly managing shared expenses. Whether you're <b>splitting bills with roommates, sharing costs on a trip with friends, or organizing group activities</b>, CostChum ensures everyone pays their fair share without any hassles.

CostChum simplifies expense tracking with a user-friendly interface. Start by creating a group for your expense-sharing needs, then add expenses as they occur. You can categorize expenses, specify who paid for what, and allocate shares among group members. The app automatically calculates each person's share, ensuring transparency and fairness.

No more awkward conversations about money—CostChum handles it all. The app provides clear summaries and detailed reports, so everyone knows exactly what they owe. Notifications keep you and your group members informed of new expenses and outstanding balances, making sure no one misses a payment.

CostChum also offers versatile payment options. Link your preferred payment methods and settle balances directly within the app. Whether you're using digital wallets, bank transfers, or traditional methods, CostChum makes it easy to pay and get paid.

Security is a top priority for CostChum. Your data is encrypted and stored securely, giving you peace of mind that your financial information is protected.

Say goodbye to the stress of splitting bills and managing shared expenses. With CostChum, you can focus on enjoying your time with friends and family, while we handle the numbers. Download CostChum today and experience hassle-free expense sharing like never before!</p>
      
      <center>
        <Link to="/expense-splitter">
          <button>Get Started</button>
        </Link>
        
        {!isLoggedIn ? (
          <Link to="/login">
            <button>Login</button>
          </Link>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </center>
      <img src={cart} alt="Expense Sharing" className="homepage-image" />
    </div>
  );
};

export default HomePage;
