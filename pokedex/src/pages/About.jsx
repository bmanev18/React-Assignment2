import React, { useState } from "react";
import Popup from "../utils/code/PopUpComponenet";
import PokemonCard from "../components/PokemonCard";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <h1>About</h1>
        <p>This is the About page</p>
      </div>

      <PokemonCard
        url={"https://pokeapi.co/api/v2/pokemon/ditto"}
        key={"ditto"}
        onSelect={()=>togglePopup()}
      />
      {isOpen && (
        <Popup content={<b>Design your Popup</b>} handleClose={togglePopup} />
      )}
    </>
  );
};
export default About;
