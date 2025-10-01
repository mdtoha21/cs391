import { useEffect, useState } from "react";
import Pokemon, { type PokemonType } from "./components/Pokemon";

import "./App.css";

export default function App() {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const rawdata = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=3"
      );
      const result = await rawdata.json();

      const details: PokemonType[] = await Promise.all(
        result.results.map(async (poke: any) => {
          const resDetail = await fetch(poke.url);
          const single_pokemon = await resDetail.json();
          return {
            id: single_pokemon.id,
            name: single_pokemon.name,
            image: single_pokemon.sprites.front_default || "",
          };
        })
      );

      setPokemons(details);
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Pokemon</h1>
      <Pokemon items={pokemons} />
    </div>
  );
}
