import React, { useState } from "react";
import BackCard from "../images/bg-card-back.png";
import FrontCard from "../images/bg-card-front.png";
import Background from "../images/bg-main-desktop.png";
import CardLogo from "../images/card-logo.svg";
import "./Card.css";
import Confirmed from "./Confirmed";

const Card = () => {
  const [confirmed, setConfirmed] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [cvc, setCvc] = useState("");

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
                <h2 className="card-front-numbers">{number}</h2>
                <div className="card-front-content">
                  <p>{name}</p>
                  <p>{date}</p>
                </div>
              </div>
            </div>
            <div className="card-back">
              <img src={BackCard} className="desk-back-card" />
              <p className="card-back-text">{cvc}</p>
            </div>
          </div>
          {!confirmed && (
            <div className="card-inputs">
              <div className="card-information">
                <p>CARDHOLDER NAME</p>
                <input
                  type="text"
                  placeholder="e.g. Jane Appleseed"
                  maxLength={13}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <p>CARD NUMBER</p>
                <input
                  type="text"
                  placeholder="e.g. 1234 5678 9123 0000"
                  maxLength={19}
                  value={number
                    .replace(/\s/g, "")
                    .replace(/(\d{4})/g, "$1 ")
                    .trim()}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className="card-information-date">
                <div className="card-information-exp">
                  <p>EXP.DATE (MM/YY)</p>
                  <input
                    type="date"
                    placeholder="MM"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="card-information-cvc">
                  <p>CVC</p>
                  <input
                    type="text"
                    placeholder="e.g. 123"
                    maxLength={3}
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                  />
                </div>
              </div>
              <button onClick={() => setConfirmed(true)}>Confirm</button>
            </div>
          )}
        </div>
        {confirmed && <Confirmed setConfirmed={setConfirmed} />}
      </div>
    </div>
  );
};

export default Card;
