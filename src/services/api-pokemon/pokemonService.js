import axios from "axios";

export const fetchPokemonList = async (url) => {
    const response = await axios.get(url);
    return response.data.results; 
}

export const fetchPokemonDetail = async (url) => {
    const response = await axios.get(url);
    return response.data;
}
