import React from 'react'
import { useNavigate } from 'react-router-dom'
import './PokemonCard.scss'

function PokemonCard({ pokemon }) {
    const navigate = useNavigate()
    const onClick = (id) => {
        navigate(`/${id}`, { state: { pokemon: pokemon } })
    }
    return (
        <div className='col-md-3 col-6 mb-3 pokemon-card-container' onClick={() => onClick(pokemon.id)}>
            <div className='card'>
                <img src={pokemon.sprites.front_default} class="card-img-top" alt="Pokemon Card" />
                <div class="card-body">
                    <h5 class="card-title text-center">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h5>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard