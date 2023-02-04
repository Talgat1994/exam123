import { useReducer, useState } from "react";
import "./Reducer.css";

const Reducer = () => {
  const [count, setCount] = useState({
    num1: 0,
    num2: 0,
  });
  const [result, dispatch] = useReducer((defaultState, action) => {
    switch (action.operation) {
      case "Plus":
        return (defaultState = action.payload.num1 + action.payload.num2);

      case "Min":
        return (defaultState = action.payload.num1 - action.payload.num2);

      case "Mul":
        return (defaultState = action.payload.num1 * action.payload.num2);

      case "Del":
        return (defaultState = action.payload.num1 / action.payload.num2);

      default:
        break;
    }
  }, "");

  return (
    <div className="content">
      <input
        onChange={(e) => setCount({ ...count, num1: parseInt(e.target.value) })}
      />

      <input
        onChange={(e) => setCount({ ...count, num2: parseInt(e.target.value) })}
      />
      <select
        defaultValue=""
        onChange={(e) =>
          dispatch({
            operation: e.target.value,
            payload: { num1: count.num1, num2: count.num2 },
          })
        }
      >
        <option />
        <option value="Plus">+</option>
        <option value="Min">-</option>
        <option value="Mul">*</option>
        <option value="Del">/</option>
      </select>
      <span className="Result"> = {result}</span>
    </div>
  );
};

export default Reducer;
