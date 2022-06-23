import React, { useState } from "react";

const Formularios2 = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

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
              defaultValue={form.name}
              onChange={handleChange}
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
                onChange={handleChange}
                defaultChecked
              />
              <label htmlFor="vanilla">Vanilla</label>

              <input
                type="radio"
                id="angular"
                name="flavor"
                value="angular"
                onChange={handleChange}
              />
              <label htmlFor="angular">Angular</label>

              <input
                type="radio"
                id="react"
                name="flavor"
                value="react"
                onChange={handleChange}
              />
              <label htmlFor="react">React</label>

              <input
                type="radio"
                id="vue"
                name="flavor"
                value="vue"
                onChange={handleChange}
              />
              <label htmlFor="vue">Vue</label>
            </div>
          </div>

          <div>
            <p>Select your favorite language</p>
            <select
              name="language"
              onChange={handleChange}
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
              onChange={handleChecked}
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

export default Formularios2;
