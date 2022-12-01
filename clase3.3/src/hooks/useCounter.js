import { useState } from "react"

const useCounter = (min = 0, max = 15, reset = 0) => {
    const [counter, setCounter] = useState(0)

    const handlePlus = () => {
        if (counter < max)
            setCounter(counter + 1)
    }
    const handleLess = () => {
        if (counter > min)
            setCounter(counter - 1)
    }
    const handleReset = () => { setCounter(reset) }

    return { counter, handlePlus, handleLess, handleReset }
}

export default useCounter