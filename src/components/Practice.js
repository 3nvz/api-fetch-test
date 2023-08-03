import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';




function Practice() {

    const [post, setPost] = useState([]);
    const [state, setState] = useState('');

    //Fetch data from API limit to 500 Pokemon and save them in 'post' state array
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=500&limit=500')
            .then(response => {
                setPost(response.data.results);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    const handleFilter = (e) => {
        setState(e.target.value);
    }

    //Filter 'post' array after the 'state' variable input
    const filteredData = post.filter((poke) =>
        poke.name.toLowerCase().includes(state.toLowerCase())
    );

    return (
        <div className='poke-and-search-container'>
            <div className='poke-searchbar'>
                <input type='text' value={state} onChange={handleFilter} placeholder='Search for your Pokemon' />
                {/* Put Buttons here */}
                <button>water</button>
            </div>

            {/* Display data in a 3 column grid, fetching data from the API using the Pokemon name */}
            <div className='grid-container'>
                {filteredData.map((pokemon, index) => (
                    <Pokemon key={index} pokemon={pokemon.name} className='grid-item' />
                ))}

            </div>
        </div>
    );

} export default Practice;




