import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Hola Mundo')
  }, [count])

  const contador = () => setCount(count + 1)

  return (
    <div className="App">
      <h1>Clase 2.1</h1>
      <h2>{count}</h2>
      <button onClick={contador}> Contador </button>
    </div>
  )
}

export default App
