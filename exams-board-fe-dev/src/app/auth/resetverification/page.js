"use client";

import React, { useState } from "react";
import classes from "./page.module.css";

const ResetCodeForm = () => {
  const [code, setCode] = useState(new Array(4).fill(""));
  const [error, setError] = useState("");

  const handleChange = (element, index) => {
    if (isNaN(Number(element.value)) || element.value === "") return;

    const newCode = [...code];
    newCode[index] = element.value;
    setCode(newCode);

    if (element.value !== "" && element.nextElementSibling) {
      element.nextElementSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    const inputElement = e.target;

    if (e.key === "ArrowRight") {
      const nextInput = inputElement.nextElementSibling;
      if (nextInput) {
        nextInput.focus();
      }
    } else if (e.key === "ArrowLeft") {
      const prevInput = inputElement.previousElementSibling;
      if (prevInput) {
        prevInput.focus();
      }
    } else if (e.key === "Backspace") {
      const newCode = [...code];
      newCode[index] = "";
      setCode(newCode);
    } else if (e.key === "Delete") {
      const newCode = [...code];
      newCode[index] = "";
      setCode(newCode);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (code.some((digit) => digit === "")) {
      setError("Please enter all four digits.");
      return;
    }

    setError("");
    alert("Entered Code: " + code.join(""));
  };

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h1 className={classes.title}>Reset Verification</h1>
        <p className={classes.instruction}>
          Enter the four digit verification code
        </p>
        <div className={classes.inputContainer}>
          {code.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={value}
              className={classes.input}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>
        {error && <p className={classes.error}>{error}</p>}
        <button type="submit" className={classes.button}>
          Verify
        </button>
      </form>
    </div>
  );
};

export default ResetCodeForm;
