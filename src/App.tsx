import { useReducer, useState } from "react";
import "./index.css";

interface CalcState {
  current: string;
  previous: string | null;
  operation: string | null;
}

const initialState: CalcState = {
  current: "",
  previous: null,
  operation: null,
};

type Action =
  | { type: "ADD_DIGIT"; payload: string }
  | { type: "CHOOSE_OPERATION"; payload: string }
  | { type: "CLEAR" }
  | { type: "INCREMENT"; payload: string }
  | { type: "DECREMENT"; payload: string };

function reducer(state: CalcState, action: Action): CalcState {
  const { type } = action;
  switch (type) {
    case "ADD_DIGIT":
      if (action.payload === "." || action.payload === ",") {
        if (state.current.includes(".")) return state;
        if (state.current === "") {
          return { ...state, current: "0." };
        }
        return { ...state, current: state.current + "." };
      }
      return { ...state, current: state.current + action.payload };
    case "CHOOSE_OPERATION":
      if (state.current === "" && action.payload !== "=") return state;
      if (state.previous === null && action.payload === "=") {
        return state;
      }

      const prev = Number(state.previous);
      const curr = Number(state.current || state.previous);
      let result = prev;
      switch (state.operation) {
        case "+":
          result = prev + curr;
          break;
        case "-":
          result = prev - curr;
          break;
        case "*":
          result = prev * curr;
          break;
        case "/":
          result = curr === 0 ? prev : prev / curr;
          break;
      }

      if (action.payload === "=") {
        return {
          ...state,
          current: String(result),
          previous: null,
          operation: null,
        };
      }

      return {
        ...state,
        previous: String(result),
        operation: action.payload,
        current: "",
      };
    case "INCREMENT":
      return {
        ...state,
        current: String(Number(state.current) + Number(action.payload)),
      };
    case "DECREMENT":
      return {
        ...state,
        current: String(Number(state.current) - Number(action.payload)),
      };
    case "CLEAR":
      return { ...state, current: "", previous: null, operation: null };
    default:
      return state;
  }
}

function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">UseState Calculator</h1>
      <div className="calculator">
        <div className="display">{state.current}</div>
        <div className="increment-buttons">
          <button
            className="increment"
            onClick={() => dispatch({ type: "INCREMENT", payload: "1" })}
          >
            +1
          </button>
          <button
            className="decrement"
            onClick={() => dispatch({ type: "DECREMENT", payload: "1" })}
          >
            -1
          </button>
        </div>
        <div className="buttons">
          <button onClick={() => dispatch({ type: "ADD_DIGIT", payload: "1" })}>
            1
          </button>
          <button onClick={() => dispatch({ type: "ADD_DIGIT", payload: "2" })}>
            2
          </button>
          <button onClick={() => dispatch({ type: "ADD_DIGIT", payload: "3" })}>
            3
          </button>

          <button
            className="operator"
            onClick={() => dispatch({ type: "CHOOSE_OPERATION", payload: "+" })}
          >
            +
          </button>

          <button onClick={() => dispatch({ type: "ADD_DIGIT", payload: "4" })}>
            4
          </button>
          <button onClick={() => dispatch({ type: "ADD_DIGIT", payload: "5" })}>
            5
          </button>
          <button onClick={() => dispatch({ type: "ADD_DIGIT", payload: "6" })}>
            6
          </button>

          <button
            className="operator"
            onClick={() => dispatch({ type: "CHOOSE_OPERATION", payload: "-" })}
          >
            -
          </button>

          <button onClick={() => dispatch({ type: "ADD_DIGIT", payload: "7" })}>
            7
          </button>
          <button onClick={() => dispatch({ type: "ADD_DIGIT", payload: "8" })}>
            8
          </button>
          <button onClick={() => dispatch({ type: "ADD_DIGIT", payload: "9" })}>
            9
          </button>

          <button
            className="operator"
            onClick={() => dispatch({ type: "CHOOSE_OPERATION", payload: "*" })}
          >
            ×
          </button>

          <button onClick={() => dispatch({ type: "ADD_DIGIT", payload: "0" })}>
            0
          </button>

          <button onClick={() => dispatch({ type: "ADD_DIGIT", payload: "." })}>
            ,
          </button>

          <button
            className="equals"
            onClick={() => dispatch({ type: "CHOOSE_OPERATION", payload: "=" })}
          >
            =
          </button>

          <button
            className="operator"
            onClick={() => dispatch({ type: "CHOOSE_OPERATION", payload: "/" })}
          >
            ÷
          </button>

          <button className="clear" onClick={() => dispatch({ type: "CLEAR" })}>
            C
          </button>
        </div>
      </div>
      <div className="technologies-used">
        <p>
          <strong>Technologies used:</strong> React, TSX, CSS Modules,
          JavaScript (useState, events handling)
        </p>
      </div>
    </div>
  );
}

export default Calculator;
