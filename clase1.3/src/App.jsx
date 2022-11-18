import { useState } from 'react'
import './App.css'
import Counters from './components/Counters'

function App() {
  const [hide, sethide] = useState(false)

  function showHide() {
    if (hide) {
      sethide(false)
    } else {
      sethide(true)
    }
  }


  return (
    <div className="App">
      <button onClick={showHide}> show/hide IMG </button>
      {
        hide ?
          <Counters />
          : 
          <h2>Estoy Oculto!!</h2>
      }
    </div>
  )
}

export default App
