import './App.css'
import PokeCard from './components/PokeCard'
import useCounter from './hooks/useCounter'
import useFetch from './hooks/useFetch'

function App() {
  /*const charmander = useFetch('charmander')
  const ditto = useFetch('ditto')
  const pikachu = useFetch()*/
  const { counter, handlePlus, handleReset, handleLess } = useCounter(-5, 2, -1)
  return (
    <div className="App">
      <h1>Clase 3.3</h1>
      {/*<PokeCard pokemon={charmander} />
      <PokeCard pokemon={ditto} />
      <PokeCard pokemon={pikachu} />*/}
      <h2>{counter}</h2>
      <button onClick={handleLess}>-</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handlePlus}>+</button>
    </div>
  )
}

export default App
