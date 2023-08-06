import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';





function Practice() {

    const [post, setPost] = useState([]);
    const [state, setState] = useState('');
    const scrollToRef = useRef(null);

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

    //Scroll up to the input field onclick
    const handleScrollClick = () => {
        if (scrollToRef.current) {
            scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (

        <div className='poke-and-search-container' ref={scrollToRef}>
            <div className='poke-searchbar'>
                <label>Search for a Pokemon</label>
                <input type='text' value={state} onChange={handleFilter} placeholder='Search for your Pokemon' />
                <button className='scrollUp-btn' onClick={handleScrollClick}>Scroll to the top</button>
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




