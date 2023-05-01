import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './ViewPokemon.scss'

function ViewPokemon() {
    const { state } = useLocation();
    const { pokemon } = state;
    const navigate = useNavigate()

    const goBack = () => {
        navigate('/')
    }
    useEffect(() => {
        console.log(pokemon)
    }, [])

    const toCapitaise = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    const getColor = (str) => {
        if (str === 'poison') return 'bg-danger'
        if (str === 'grass') return 'bg-success'
        if (str === 'fire') return 'bg-warning'
        return 'bg-primary'
    }
    const getStatColor = (stat) => {
        if (parseInt(stat) >= 75) return 'bg-success'
        if (parseInt(stat) >= 50) return 'bg-primary'
        if (parseInt(stat) >= 25) return 'bg-warning'
        return 'bg-danger'
    }
    return (
        <div className='row'>
            <div className='container view-pokemon-container mt-3 col-md-4'>
                <button type="button" className="btn btn-outline-secondary" onClick={() => goBack()}>Back</button>
                <div className='d-flex mt-3 justify-content-center'>
                    <div className='card align-items-center w-100'>
                        <img src={pokemon.sprites.front_default} width={300} />
                        <div className='card-body w-100'>
                            <center>
                                <h4 className="card-title mb-3">{toCapitaise(pokemon.name)}</h4>
                            </center>
                            <div className='row my-3'>
                                <div className='col-md-6'>
                                    <div className='card attribute-card align-items-center py-3'>
                                        <h6>Height</h6>
                                        {pokemon.height} M
                                    </div>
                                </div>
                                <div className='col-md-6 '>
                                    <div className='card attribute-card align-items-center py-3'>
                                        <h6>Weight</h6>
                                        {pokemon.weight} Kg
                                    </div>
                                </div>
                            </div>
                            <div className='attribute-section-container'>
                                <p className='attribute-header'>Abilities</p>
                                <div>
                                    {pokemon.types.map(type => {
                                        return (
                                            <span class={`badge attribute-values ${getColor(type.type.name)}`}>{toCapitaise(type.type.name)}</span>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='attribute-section-container'>
                                <p className='attribute-header'>Types</p>
                                <div>
                                    {pokemon.abilities.map(ability => {
                                        return (
                                            <span class="badge attribute-values text-bg-secondary">{toCapitaise(ability.ability.name)}</span>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='mt-3'>
                                <p className='attribute-header'><center>Base Stats</center></p>
                                {pokemon.stats.map(stat => {
                                    return (
                                        <div className='row mt-3'>
                                            <div className='col-md-4'>
                                                <span>{toCapitaise(stat.stat.name)}</span>
                                            </div>
                                            <div className='col-md-8'>
                                                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                                    <div class={'progress-bar ' + getStatColor(stat.base_stat)} style={{ width: stat.base_stat + '%' }}>{stat.base_stat + '%'}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </div >

    )
}

export default ViewPokemon