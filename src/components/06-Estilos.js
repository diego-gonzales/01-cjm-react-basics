import React from "react";
import "./06-Estilos.css";
import moduleStyles from "./06-Estilos.module.css";
import "./06-Estilos.scss";

const Estilos = () => {
  let myStyles = {
    borderRadius: ".5rem",
    margin: "2rem auto",
    maxWidth: "50%",
  };

  return (
    <>
      <h2>CSS styles in React</h2>

      <section className="estilos">
        <h3 className="bg-react">CSS external</h3>
        <h3
          className="bg-react"
          style={{ borderRadius: ".25rem", margin: "1rem" }}
        >
          CSS inline first way
        </h3>
        <h3 className="bg-react" style={myStyles}>
          CSS inline second way
        </h3>
        <h3 className="bg-react">
          Adding Normalize with <br />
          <code>@import-normalize; </code>
          in index.css
        </h3>
        <h3 className={moduleStyles.error}>CSS styles with Modules</h3>
        <h3 className={moduleStyles.success}>CSS styles with Modules</h3>
        <h3 className="bg-sass">CSS styles with SASS</h3>
      </section>
    </>
  );
};

export default Estilos;
