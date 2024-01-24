import React from "react";
import Tick from "../images/icon-complete.svg";
import "./Confirmed.css";

const Confirmed = () => {
  return (
    <div>
      <img src={Tick} alt="Confirmed" />
      <h1>Thank You!</h1>
      <p>We've added your card details</p>
      <button>Contine</button>
    </div>
  );
};

export default Confirmed;
