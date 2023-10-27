import { useState, useEffect } from "react";
import "./PokemonCard.css";
import { colorVariantConverter } from "../utils/Extra";

const PokemonCard = ({ url, onSelect }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [url]);

  const colorVariant =
    pokemon && colorVariantConverter(pokemon.types[0].type.name);

  return (
    <>
      {pokemon && (
        <div
          className="card"
          onClick={() => onSelect(pokemon)}
          style={colorVariant ? { backgroundColor: colorVariant } : {}}
        >
          <div className="pokeInfo">
            <div className="idBox">#{pokemon.id}</div>
            <h1 className="nameBox">{pokemon.name}</h1>
          </div>
          <div className="pokeImageContainer">
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonCard;
