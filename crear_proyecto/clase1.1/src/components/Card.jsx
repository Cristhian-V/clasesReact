import React from 'react'
const Card = ({ title, list, bgColor }) => {

    const obtStyle = {
        backgroundColor: bgColor
    }

    return (
        <div className='card' style={obtStyle}>
            <h1>{title}</h1>
            <ul>
                <li>{list[0]}</li>
                <li>{list[1]}</li>
                <li>{list[2]}</li>
                <li>{list[3]}</li>
            </ul>
        </div>
    )
}

export default Card