import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  reset,
} from "../services/actions/counterActions";
import "./Counter.scss";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  console.log(count);
  const handleIncrement = () => {
    dispatch(incrementCounter());
  };
  const handleDecrement = () => {
    dispatch(decrementCounter());
  };
  const handleReset = () => {
    dispatch(reset());
  };

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div className="text-center flex-center">
      <div className="card">
        <h1>Counter APP</h1>
        <small>using react-redux and localStorage </small>
        <h3>
          Count : <big>{count}</big>{" "}
        </h3>
        <button className="mx-5" onClick={handleIncrement}>
          Increment
        </button>
        <button className="mx-5" onClick={handleDecrement}>
          Decrement
        </button>
        <button className="mx-5" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
