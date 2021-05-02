import { useState } from "react";
import AddProgressBar from "./AddProgressBar";
import "./App.css";

function App() {
  const [state, setState] = useState([]);
  const handleClick = () => {
    setState([...state, <AddProgressBar />]);
  };
  return (
    <div className="App">
      <div className="progress-container">
        {state.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>

      <button onClick={handleClick}>Add ProgressBar</button>
    </div>
  );
}

export default App;
