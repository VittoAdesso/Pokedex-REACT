import './App.css';
import {useState} from "react";
//una vez instalado npm install axios, lo importo 
import Axios from "axios";

function App() {

  // creo variables y les digo que serán un estado de acuerdo a lo ue traigan
  const [pokemonName, setPokemonName] = useState(""); 

  //definir que información necesitamos del JSON y seterala en una variable
  const [pokemonChosen, setPokemonChosen] = useState(false);

  const [pokemon, setPokemon] = useState({

    name: "",
    number: "",
    species: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    type: "",
  });
  
  //plantilla, para que me muestre justo lo que yo le pido 
  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(
      (res) => {
        setPokemon({
          name: pokemonName,
          number: res.data.id,
          species: res.data.species.name,
          image: res.data.sprites.front_default,
          hp: res.data.stats[0].base_stat,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          speed: res.data.stats[5].base_stat,
          type: res.data.types[0].type.name,
        });
        setPokemonChosen(true);
      }
    );
  };

  return (

    <div className="App">

      <div className="TitleSection">

          <h1>Pokédex</h1>
          {/* configuro evento en el input */}
          <input type="text" onChange={(event) => setPokemonName(event.target.value)   }
          // que me convierta en lower case, para que me lea api
          value={pokemonName.toLowerCase()}
          />

          {/* doy funcionalidad al bontón */}
          <div>
                {pokemonName && <button onClick={searchPokemon}>Search Pokémon</button>}
          </div>

      </div>

      <div className="DisplaySection">

          {/* ternario en el return del componente */}
          {!pokemonChosen ? (
            <h1> Please choose a Pokémon </h1>
          ) : (
            <>

            <div className='datos'>
              <h1>{pokemon.name.toUpperCase()}</h1>
              <img src={pokemon.image} alt={pokemon.name} />
              <h3>Number: #{pokemon.number}</h3>
              <h3>Species: {pokemon.species}</h3>
              <h3>Type: {pokemon.type}</h3>
              <h4>Hp: {pokemon.hp}</h4>
              <h4>Attack: {pokemon.attack}</h4>
              <h4>Defense: {pokemon.defense}</h4>
              <h4>Speed: {pokemon.speed}</h4>
              </div>
              
            </>

          )}


        </div>



    </div>
  );
}; 

export default App;
