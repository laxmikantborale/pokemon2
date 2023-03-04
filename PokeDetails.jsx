import React from 'react'

const PokeDetails = ({ pokeData }) => {
    console.log(pokeData);

    return (
        <>
            {pokeData && <div className='poke-details'>
                <div className='details-continer'>
                    <h1>{pokeData.name}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeData.id}.png`} alt='' />
                </div>
                <div className='abilities'>
                    {
                        pokeData.abilities.map(poke => {
                            return (
                                <div className='group'>
                                    <div className='groups'>
                                        <h2>{poke.ability.name}</h2>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className='stats'>
                    
                    <div>
                        {
                            pokeData.stats.map(data => {
                                return (
                                    <div className='poke-data'>
                                        <h3>{data.stat.name} : {data.base_stat}</h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>}
        </>

    )
}

export default PokeDetails