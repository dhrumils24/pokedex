import React, { useState, useEffect } from 'react'
import PokemonCard from '../components/PokemonCard';

function Home() {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsloading] = useState(false)
    useEffect(() => {
        setIsloading(true)
        const fetchData = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');
            const jsonData = await response.json();
            jsonData.results.forEach(pokemon => {
                getEachPokemonData(pokemon.url)
            });
        };
        fetchData();
    }, [])

    useEffect(() => {
        if (pokemons.length > 150) setIsloading(false)
    }, [pokemons])

    const getEachPokemonData = async (url) => {
        const response = await fetch(url);
        const jsonData = await response.json();
        setPokemons((prevState) => ([...prevState, jsonData]))
    }

    return (
        <div className='container'>
            {isLoading ? (
                <center>
                    <div class="spinner-border mt-3" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </center>
            ) : (
                <div className='row mt-4'>
                    <h2 className='mb-3'>Pokemons [{pokemons.length}]</h2>
                    {pokemons.length > 0 && pokemons.map((pokemon) => {
                        return (
                            <PokemonCard pokemon={pokemon} key={pokemon.id} />
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Home