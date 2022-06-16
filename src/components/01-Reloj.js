import React, { useEffect, useState } from "react";

const Reloj = () => {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());

  // useEffect(() => {
  //   console.log("la hora cambio");
  // }, [hour]);

  useEffect(() => {
    console.log("Fase de inicialización");

    let temporizador = setInterval(() => {
      setHour(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      console.log("Did Unmounted!!!");
      clearInterval(temporizador);
    };
  }, []);

  return <h3>{hour}</h3>;
};

export default Reloj;
