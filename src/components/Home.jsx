import React, { useEffect, useState } from 'react'
import Pokemon from './Pokemon'
import PokeDetails from './PokeDetails'
import axios from 'axios'

const Home = () => {

    const [data, setData] = useState([])
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [next, setNext] = useState()
    const [previous, setPrevious] = useState()
    const [pokeData, setPokeData] = useState()

    const fetchData = async () => {
        const response = await axios.get(url);
        // console.log(response.data.results);
        setNext(response.data.next)
        setPrevious(response.data.previous)
        getPokeData(response.data.results)
        // console.log(data);
    }

    const getPokeData = async (result) => {
        result.map(async (item) => {
            const result = await axios.get(item.url)
            // console.log(result.data);

            setData(state => {
                state = [...state, result.data]
                return state;
            })
        })
    }

    useEffect(() => {
        fetchData()
    }, [url])

    return (
        <div className='container'>
            <h1 className='header'>Pokemon world</h1>
            <div className='left'>

                {data && <Pokemon data={data} pokeInfo={poke => setPokeData(poke)} />}

                <div className='btn'>
                    {next && <button onClick={() => { setUrl(next) }}>NEXT</button>}
                </div>
            </div>
            <div className='right'>
                <PokeDetails pokeData={pokeData} />
            </div>
        </div>
    )
}

export default Home