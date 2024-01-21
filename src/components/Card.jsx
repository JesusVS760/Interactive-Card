import React from "react";
import BackCard from "../images/bg-card-back.png";
import FrontCard from "../images/bg-card-front.png";
import Background from "../images/bg-main-desktop.png";
import "./Card.css";

const Card = () => {
  return (
    <div className="body">
      <img src={Background} />
      <div className="container">
        <div className="card-container">
          <div className="cards">
            <img src={FrontCard} alt="front" />
            <img src={BackCard} alt="back" />
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
            <button>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
