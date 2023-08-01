import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';




function Practice() {

    const [post, setPost] = useState([]);
    const [state, setState] = useState('');
    // const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=500&limit=500')
            .then(response => {
                setPost(response.data.results);
                // console.log(response.data.results);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    const handleFilter = (e) => {
        setState(e.target.value);
    }

    const filteredData = post.filter((po) =>
        po.name.toLowerCase().includes(state.toLowerCase())
    );

    return (
        <div className='poke-and-search-container'>
            <div className='poke-searchbar'>
                <input type='text' value={state} onChange={handleFilter} placeholder='Search for your Pokemon' />
                {/* <div className='water-checkbox'>
                    <input type='checkbox' id='water' />
                    <label for='water'>Water</label>
                </div> */}
            </div>

            <div className='grid-container'>
                {filteredData.map((pokemon, index) => (
                    <Pokemon key={index} pokemon={pokemon.name} className='grid-item' />
                ))}

            </div>
        </div>
    );

} export default Practice;




