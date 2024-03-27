import logo from "./logo.svg";
import "./App.css";
import { useReducer } from "react";
import AppContext from "./components/AppContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1, showMessage: state.showMessage };
    case "SHOW":
      return { counter: state.counter, showMessage: !state.showMessage };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
    showMessage: false,
  });

  return (
    <div className="center">
      <h1>Practice</h1>
      {/* <div>
        <p>{state.counter}</p>
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
            dispatch({ type: "SHOW" });
          }}
        >
          Click
        </button>
        {state.showMessage && <p>I love JS</p>}
      </div> */}
      <AppContext />
    </div>
  );
}

export default App;
