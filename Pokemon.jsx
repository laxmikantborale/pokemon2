import React from 'react'

const Pokemon = ({ data, pokeInfo }) => {
    // console.log(data);
    return (
        <>

            {
                data.map((item, index) => {
                    return (
                        <div className='card' key={item.id} onClick={()=> pokeInfo(item)}>
                            <h1>{index+1}</h1>
                            <img src={item.sprites.front_default} alt='' />
                            <h2>{item.name}</h2>
                        </div>
                    )
                })
            }

        </>
    )
}

export default Pokemon