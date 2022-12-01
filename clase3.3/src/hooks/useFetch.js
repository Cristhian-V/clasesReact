import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (pokeName = 'pikachu') => {
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [])
    return pokemon
}

export default useFetch