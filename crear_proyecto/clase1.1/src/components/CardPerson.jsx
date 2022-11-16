import React from 'react'

const CardPerson = () => {
    const me = {
        name: 'Benjamín',
        age: 30,
        favoriteMovie: 'Forest Gump',
        favrotieMusic: 'funk'
    }
    return (
        <div className='card'>
            <ul className="list">
                <li className="list__item">
                    <b className="list__bold">Nombre:</b> {me.name}
                </li>
                <li className="list__item">
                    <b className="list__bold">Edad:</b> {me.age} años.
                </li>
                <li className="list__item">
                    <b className="list__bold">Película Favorita:</b> {me.favoriteMovie}
                </li>
                <li className="list__item">
                    <b className="list__bold">Música Favorita:</b> {me.favrotieMusic}
                </li>
            </ul>

        </div>
    )
}

export default CardPerson