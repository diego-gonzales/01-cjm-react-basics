import React, { useState, useEffect } from "react";
import Pokemon from "./02-Pokemon";

const AjaxHooks = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async (url) => {
      const resp = await fetch(url);
      const data = await resp.json();

      data.results.forEach(async (elem) => {
        const resp = await fetch(elem.url);
        const data = await resp.json();

        let pokemon = {
          id: data.id,
          name: data.name,
          avatar: data.sprites.front_default,
        };

        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    };

    getPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  return (
    <>
      <h2>Async requests in hooks</h2>
      {pokemons.length === 0 ? (
        <h3>Loading...</h3>
      ) : (
        pokemons.map((pokemon) => (
          <Pokemon
            key={pokemon.id}
            avatar={pokemon.avatar}
            name={pokemon.name}
          />
        ))
      )}
    </>
  );
};

export default AjaxHooks;
