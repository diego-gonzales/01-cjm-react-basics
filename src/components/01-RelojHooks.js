import React, { useState, useEffect } from "react";
import Reloj from "./01-Reloj";

const RelojHooks = () => {
  const [visible, setVisible] = useState(false);

  // const tictac = (value) => setVisible(value);

  return (
    <>
      <h2>Reloj Hooks</h2>
      {visible && <Reloj />}
      <button onClick={() => setVisible(true)}>Start</button>
      <button onClick={() => setVisible(false)}>Stop</button>
    </>
  );
};

export default RelojHooks;
