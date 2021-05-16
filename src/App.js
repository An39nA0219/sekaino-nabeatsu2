import React, { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const [displayStatus, setDisplayStatus] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchStatus = () => {
    setDisplayStatus(!displayStatus);
  }
  if (num > 0) {
    if (num % 3 === 0) {
      displayStatus || setDisplayStatus(true);
    } else {
      displayStatus && setDisplayStatus(false);
    }
  }

  return (
    <>
      <div>
        <span>{num}!</span>
        {displayStatus && <span>🤪</span>}
      </div>
      <button onClick={onClickCountUp}>Count UP!</button>
      <button onClick={onClickSwitchStatus}>On/Off</button>
    </>
  );
}

export default App;
