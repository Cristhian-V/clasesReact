import React from 'react'

const PokeCard = ({ pokemon }) => {

    console.log(pokemon)

    return (
        <article>
            <h2>Name: {pokemon?.name}</h2>
            <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </article>
    )
}

export default PokeCard