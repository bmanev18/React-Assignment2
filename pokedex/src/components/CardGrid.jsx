import CardPageActions from "../utils/code/CardPageActions";
import PokemonCard from "./PokemonCard";
import "../components-style/CardGrid.css";
import { useState } from "react";
import Popup from "../utils/code/PopUpComponenet";

const CardGrid = () => {
  // Context can be implemented
  const {
    pokemonData,
    handleNextPage,
    handlePreviousPage,
    nextPageData,
    previousPageData,
  } = CardPageActions();

  return (
    <>
      <div className="page-container">
        {previousPageData && (
          <div className="side-bar" onClick={() => handlePreviousPage()}>
            {"<"}
          </div>
        )}
        <div
          className="cardGrid"
          style={previousPageData ? {} : { marginLeft: "80px" }}
        >
          {pokemonData.map((pokemon) => (
            <PokemonCard
              url={pokemon.url}
              key={pokemon.name}
            />
          ))}
        </div>
        {nextPageData && (
          <div className="side-bar" onClick={() => handleNextPage()}>
            {">"}
          </div>
        )}
      </div>
    </>
  );
};



export default CardGrid;
