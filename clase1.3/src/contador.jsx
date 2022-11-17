import React, { useState } from 'react'

const contador = () => {
    const [count, setCount] = useState(0)

    const contadorfun = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={contadorfun}> +1 </button>
        </div>
    )
}

export default contador