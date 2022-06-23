import React from "react";
import { useFetch } from "../hooks/useFetch";

const CustomHooks = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const { data, isPending, error } = useFetch(url);

  return (
    <>
      <h2>Custom Hooks</h2>
      <div>
        <ul>
          <li>{JSON.stringify(isPending)}</li>
          <li>
            <mark>{JSON.stringify(error)}</mark>
          </li>
          <li>
            <pre style={{ whiteSpace: "pre-wrap" }}>
              <code>{JSON.stringify(data)}</code>
            </pre>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CustomHooks;
