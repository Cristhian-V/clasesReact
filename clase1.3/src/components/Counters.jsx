import { useState } from 'react'
import React from 'react'

const Counters = () => {

    const [count, setCount] = useState(0)

    const plusOne = () => setCount(count + 1)
    const reset = () => setCount(0)
    const lessOne = () => setCount(count - 1)
    
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={plusOne}> +1 </button>
            <button onClick={reset}> Reset </button>
            <button onClick={lessOne}> -1 </button>
        </div>
    )
}

export default Counters