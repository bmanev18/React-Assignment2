import { useEffect, useState } from "react";
import{ getPokemonData} from "./FetchData";

const CardPageActions = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const[previousPageData, setPreviousPageData] = useState(null);
    const[nextPageData, setNextPageData] = useState(null);
    const[pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        getPokemonData(`https://pokeapi.co/api/v2/pokemon?limit=20`).then((data)=> {
            setNextPageData(data.next);
            setPreviousPageData(data.previous);
            setPokemonData(data.results);
        }).catch((error)=>{console.log("Error fetching data", error)});
    }, []);


    const handleNextPage = () => {
        getPokemonData(nextPageData).then((data)=> {   
            setPokemonData(data.results);
            setNextPageData(data.next);
            setPageNumber(pageNumber + 1);
            setPreviousPageData(data.previous);
        }
        ).catch((error)=>{console.log("Error fetching next page", error)});
    };

    const handlePreviousPage = () => {
        getPokemonData(previousPageData).then((data)=> {   
            setPokemonData(data.results);
            setNextPageData(data.next);
            setPageNumber(pageNumber - 1);
            setPreviousPageData(data.previous);
        }
        ).catch((error)=>{console.log("Error fetching previous page",error)});
    }

    return {
        pokemonData,
        handleNextPage,
        handlePreviousPage,
        nextPageData,
        previousPageData,
        pageNumber,
    };
};
export default CardPageActions;

