import { useState, useEffect } from "react";
import "../components-style/PokemonCard.css";
import { colorVariantConverter } from "../utils/code/Extra";
import Popup from "../utils/code/PopUpComponenet";

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [url]);

  const colorVariant =
    pokemon && colorVariantConverter(pokemon.types[0].type.name);

  const togglePopup = () => {
    console.log("togglePopup");
    setSelectedPokemon(selectedPokemon ? null : pokemon);
  };

  return (
    <>
      {pokemon && (
        <div
          className="card"
          onClick={() => {
            togglePopup();
          }}
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
      {selectedPokemon && renderPopUp({ pokemon, togglePopup })}
    </>
  );
};

const renderPopUp = ({ pokemon, togglePopup }) => {
  return (
    <>
      <Popup
        content={
          <div className="pokemon-card">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Type: {pokemon.types[0].type.name}</p>
          </div>
        }
        handleClose={togglePopup}
      />
    </>
  );
};

export default PokemonCard;
