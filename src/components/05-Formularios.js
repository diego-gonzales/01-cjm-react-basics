import React, { useState } from "react";

const Formularios = () => {
  const [name, setName] = useState("");
  const [flavor, setFlavor] = useState("vanilla");
  const [language, setLanguage] = useState("");
  const [terms, setTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form has been send");
  };
  return (
    <>
      <h2>Forms</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <p>Choose your favorite JS flavor</p>
            <div>
              <input
                type="radio"
                id="vanilla"
                name="flavor"
                value="vanilla"
                onChange={(e) => setFlavor(e.target.value)}
                defaultChecked
              />
              <label htmlFor="vanilla">Vanilla</label>

              <input
                type="radio"
                id="angular"
                name="flavor"
                value="angular"
                onChange={(e) => setFlavor(e.target.value)}
              />
              <label htmlFor="angular">Angular</label>

              <input
                type="radio"
                id="react"
                name="flavor"
                value="react"
                onChange={(e) => setFlavor(e.target.value)}
              />
              <label htmlFor="react">React</label>

              <input
                type="radio"
                id="vue"
                name="flavor"
                value="vue"
                onChange={(e) => setFlavor(e.target.value)}
              />
              <label htmlFor="vue">Vue</label>
            </div>
          </div>

          <div>
            <p>Select your favorite language</p>
            <select
              name="language"
              onChange={(e) => setLanguage(e.target.value)}
              defaultValue=""
            >
              <option value="" disabled>
                --Select a laguage--
              </option>
              <option value="js">JS</option>
              <option value="python">Python</option>
              <option value="csharp">CSharp</option>
              <option value="php">PHP</option>
            </select>
          </div>

          <div>
            <label htmlFor="termns">Accept terms and conditions</label>
            <input
              type="checkbox"
              name="termns"
              id="termns"
              onChange={(e) => setTerms(e.target.checked)}
            />
          </div>

          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Formularios;
