import React, { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  return (
    <>
      <div>
        <span>{num}!</span>
        <span>🤪</span>
      </div>
      <button onClick={onClickCountUp}>Count UP!</button>
      <button>On/Off</button>
    </>
  );
}

export default App;
