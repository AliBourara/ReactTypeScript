import { useReducer } from "react";

interface CounterStateType {
  count: number;
}
interface UpdateAction {
  type: "increment" | "decrement";
  payload: number;
}

interface ResetAction {
  type: "reset";
}

type CounterActionType = UpdateAction | ResetAction;

const initialstate = { count: 0 };

function reducer(state: CounterStateType, action: CounterActionType) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialstate;
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
      count : {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;
