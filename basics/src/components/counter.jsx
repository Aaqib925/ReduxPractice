import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/index";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
    </div>
  );
};

export default Counter;
