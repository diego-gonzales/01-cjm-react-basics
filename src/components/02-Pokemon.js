import React from "react";

const Pokemon = ({ avatar, name }) => {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
};

export default Pokemon;
