import React from "react";
import Tick from "../images/icon-complete.svg";
import "./Confirmed.css";
import "./Card.css";

const Confirmed = ({ setConfirmed }) => {
  return (
    <div className="confirmed-container">
      <img src={Tick} alt="Confirmed" />
      <h1>Thank You!</h1>
      <p>We've added your card details</p>
      <button onClick={() => setConfirmed(false)}>Continue</button>
    </div>
  );
};

export default Confirmed;
