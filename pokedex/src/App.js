import './App.css';
import {useState} from "react";
//una vez instalado npm install axios, lo importo 
import Axios from "axios";

function App() {

  // creo variables y les digo que serán un estado de acuerdo a lo ue traigan
  const [pokemonName, setPokemonName] = useState(""); 

  // plantilla para llamar axios, estilo fecth 
  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(
            (res) => {
        console.log(res.data);
      }
    );
  };

  return (
    <div className="App">
      <div className="TitleSection">
        <h1>Pokédex</h1>
        {/* configuro evento en el input */}
        <input type="text" onChange={(event) => setPokemonName(event.target.value)} />

        {/* doy funcionalidad al bontón */}
        <button onClick={searchPokemon}>Search Pokémon</button>
      </div>
    </div>
  );
}

export default App;
