import { useEffect, useState } from "react";
import { fetchPokemonDetail, fetchPokemonList } from "../services/api-pokemon/pokemonService";

export default function useFetchGet(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
        const results = await fetchPokemonList(url);
        const responseData = await Promise.all(
          results.map(async (pokemon) => {
            return await fetchPokemonDetail(pokemon.url);
          })
        )

        setData(responseData);
        console.log(data);
    } catch (error) {
        setError(error);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
}
