import React from "react";
import Card from "../../components/Card";
import useFetchGet from "../../hooks/useFetchGet";
import "./style/card.css";

const URL = import.meta.env.VITE_URL_RICKMORT;

export default function ShowCard() {
  const { data, loading, error } = useFetchGet(URL);
  console.log(data);
  return (
    <>
      <h1>Pokeapi</h1>
      <section className="sectionCard">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error</p>
        ) : (
          data.map((pokemon) => (
            <Card
              key={pokemon.id}
              img={pokemon.sprites.front_default}
              name={pokemon.name}
              weight={pokemon.weight}
              height={pokemon.height}
              abilities={pokemon.abilities}
            />
          ))
        )}
      </section>
    </>
  );
}
