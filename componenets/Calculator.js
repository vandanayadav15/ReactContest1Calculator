import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [total, setTotal] = useState();
  const [validationMessage, setValidationMessage] = useState("");
  const [sucessMessage, setSucessMessage] = useState("");


  const add = (e) => {
    e.preventDefault();
    setTotal(parseInt(num1) + parseInt(num2));
    if (!num1 || !num2) {
      setValidationMessage("Error :  Num1 cannot be empty");
    } else if (isNaN(num1 || num2)) {
      setValidationMessage("Please enter a valid number");
    } else {
      setSucessMessage(`Success : Your result is shown above!`);
    }
  };
  const sub = (e) => {
    e.preventDefault();
    setTotal(parseInt(num1) - parseInt(num2));
    if (!num1 || !num2) {
      setValidationMessage("Error :  Num1 cannot be empty");
    } else if (isNaN(num1 || num2)) {
      setValidationMessage("Please enter a valid number");
    } else {
      setSucessMessage(`Success : Your result is shown above!`);
    }
  };
  const mul = (e) => {
    e.preventdefault();
    setTotal(parseInt(num1) * parseInt(num2));
    if (!num1 || !num2) {
      setValidationMessage("Error :  Num1 cannot be empty");
    } else if (isNaN(num1 || num2)) {
      setValidationMessage("Please enter a valid number");
    } else {
      setSucessMessage(`Success : Your result is shown above!`);
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    setTotal(parseInt(num1) / parseInt(num2));
    if (!num1 || !num2) {
      setValidationMessage("Error :  Num1 cannot be empty");
    } else if (isNaN(num1 || num2)) {
      setValidationMessage("Please enter a valid number");
    } else {
      setSucessMessage(`Success : Your result is shown above! `);
    }
  };
  return (
    <div className="container">
      <h1>React Calculator</h1>
      <div>
        <input
          type="text"
          name="Num1"
          className="input"
          placeholder="Num1"
          value={num1}
          onChange={(event) => {
            setNum1(event.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          name="Num2"
          className="input"
          placeholder="Num2"
          value={num2}
          onChange={(event) => {
            setNum2(event.target.value);
          }}
        />
      </div>
      <button className="btn" onClick={add}>
        +
      </button>
      <button className="btn" onClick={sub}>
        -
      </button>
      <button className="btn" onClick={mul}>
        *
      </button>
      <button className="btn" onClick={handleClick}>
        /
      </button>
      <div>
        <input
          type="text"
          name="Total"
          placeholder="Result ="
          className="inputf"
          value={total}
        />
      </div>
      <p style={{ color: "red" }}>{validationMessage}</p>
      <h4 style={{ color: "green" }}>{sucessMessage}</h4>
    </div>
  );
};
export default Calculator;
