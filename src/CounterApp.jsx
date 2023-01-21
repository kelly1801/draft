import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types'

export const CounterApp = ({value}) => {
  const [count, setCount] = useState(value);
  const handleClick = (val) => {
    
    setCount((prev) => Math.max(prev + val, 0));
  };
  const resetCount = () => {
    setCount(value)
  }
  return (
    <>
      <h1>CounterApp</h1>
      <h2> {count} </h2>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(-1)}>-1</button>
      <button aria-label="btn-reset" onClick={resetCount}>reset</button>
    </>
  );
};


CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}