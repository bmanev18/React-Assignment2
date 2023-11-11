import "../../components-style/Popup.css";

const Popup = (props) => {
  const pokemon = props.content;
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <div className="pokemon-card-container">
          <div className="pokemon-card-left">
            <h1 className="name">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
            <div className="statistics">
              <p>Height: {pokemon.height}</p>
              <p>Weight: {pokemon.weight}</p>
              <p>Type: {pokemon.types[0].type.name}</p>
            </div>
          </div>
          <div className="pokemon-card-right">
            <img className="pokemon-image"
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
