import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import PokemonPage from "./PokemonPage";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/?limit=50",
        );
        setPokemonList(response.data.results);
      } catch (error) {
        setError(error);
      }
    };
    fetchPokemon();
  }, []);

  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Router>
      <div>
        <h1>Pokedex</h1>
        <input
          type="text"
          placeholder="Search Pokemon..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {filteredPokemon.map((pokemon) => (
                  <div key={pokemon.name}>
                    <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
                  </div>
                ))}
              </div>
            }
          />
          <Route path="/pokemon/:name" element={<PokemonPage />} />
        </Routes>
      </div>
      <div data-testid="error">{error && error.message}</div>
    </Router>
  );
};

export default App;
