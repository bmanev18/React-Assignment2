import CardPageActions from "../utils/CardPageActions";
import PokemonCard from "./PokemonCard";
import "./CardGrid.css";

const CardGrid = ({ onSelect }) => {
// Context can be implemented
  const {
    pokemonData,
    handleNextPage,
    handlePreviousPage,
    nextPageData,
    previousPageData,
    pageNumber,
  } = CardPageActions();

  return (
    <>
      <div className="page-container">
        {previousPageData && (
          <div className="side-bar" onClick={() => handlePreviousPage()}>
            {"<"}
          </div>
        )}
        {/* <div className="side-bar" onClick={() => handlePreviousPage()}>
          {"<"}
        </div> */}
        <div
          className="cardGrid"
          style={previousPageData ? {} : { marginLeft: "80px" }}
        >
          {pokemonData.map((pokemon) => (
            <PokemonCard
              url={pokemon.url}
              key={pokemon.name}
              onSelect={onSelect}
            />
          ))}
        </div>
        {nextPageData && (
          <div className="side-bar" onClick={() => handleNextPage()}>
            {">"}
          </div>
        )}
        {/* <div className="gridControls">
          {pageNumber}
          <div className="pageButtonsContainer">
            {previousPageData && (
              <button onClick={onPreviousPage}>Previous</button>
            )}
            {nextPageData && <button onClick={onNextPage}>Next</button>}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default CardGrid;
