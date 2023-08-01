import { useState, useEffect } from 'react';
import axios from 'axios';


function Pokemon({ pokemon }) {

    const [specificPokemon, setSpecificPokemon] = useState({});
    // const [state, setState] = useState('');

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(response => {
                setSpecificPokemon({
                    name: response.data.species.name,
                    img: response.data.sprites.front_default,
                    hp: response.data.stats[0].base_stat,
                    attack: response.data.stats[1].base_stat,
                    defense: response.data.stats[2].base_stat,
                    type: response.data.types[0].type.name
                });
            })
            .catch(error => {
                console.log(error);
            })
    })

    return (



        <div className='poke'>
            <div className='poke-descr'>
                <h1>{specificPokemon.name}</h1>
                <p>HP: {specificPokemon.hp}</p>
                <p>Attack: {specificPokemon.attack}</p>
                <p>Defense: {specificPokemon.defense}</p>
                <p>Type: {specificPokemon.type}</p>
            </div>
            <div className='poke-img'>
                <img src={specificPokemon.img} alt='pokemon' />
            </div>

        </div>
    );

} export default Pokemon;