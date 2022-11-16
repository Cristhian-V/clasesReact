import React from 'react'
const Card = ({ text, color, backcolor }) => {

    const objStyle = {
        color,
        background: backcolor,

    }

    return (
        <div style={objStyle}>
            <h1 >{text}</h1>
            <p>
                texto
            </p>
        </div>
    )
}

export default Card