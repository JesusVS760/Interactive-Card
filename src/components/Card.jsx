import React, { useState } from "react";
import BackCard from "../images/bg-card-back.png";
import FrontCard from "../images/bg-card-front.png";
import Background from "../images/bg-main-desktop.png";
import CardLogo from "../images/card-logo.svg";
import "./Card.css";
import Confirmed from "./Confirmed";

const Card = () => {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="body">
      <img src={Background} />
      <div className="container">
        <div className="card-container">
          <div className="cards">
            <div className="card-front">
              <img src={FrontCard} alt="front" className="desk-front-card" />
              <div className="card-front-text">
                <img src={CardLogo} />
                <h2 className="card-front-numbers">0000 0000 0000 0000</h2>
                <div className="card-front-content">
                  <p>JAKE APPLESEED</p>
                  <p>00/00</p>
                </div>
              </div>
            </div>
            <div className="card-back">
              <img src={BackCard} className="desk-back-card" />
              <p className="card-back-text">000</p>
            </div>
          </div>
          <div className="card-inputs">
            <div className="card-information">
              <p>CARDHOLDER NAME</p>
              <input type="text" placeholder="e.g. Jane Appleseed" />
              <p>CARD NUMBER</p>
              <input type="text" placeholder="e.g. 1234 5678 9123 0000" />
            </div>
            <div className="card-information-date">
              <div className="card-information-exp">
                <p>EXP.DATE (MM/YY)</p>
                <input type="text" placeholder="MM" />
                <input type="text" placeholder="YY" />
              </div>
              <div className="card-information-cvc">
                <p>CVC</p>
                <input type="text" placeholder="e.g. 123" />
              </div>
            </div>
            <button onClick={() => setConfirmed(true)}>Confirm</button>
          </div>
        </div>
        {confirmed && <Confirmed setConfirmed={setConfirmed} />}
      </div>
    </div>
  );
};

export default Card;
