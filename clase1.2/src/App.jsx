
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const plusOne = () => {
    setCount(count + 1)
  }

  const lessOne = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={plusOne}> +1 </button>

      <button onClick={lessOne}> -1 </button>

      <button onClick={reset}> Reset </button>
    </div>
  )
}

export default App
