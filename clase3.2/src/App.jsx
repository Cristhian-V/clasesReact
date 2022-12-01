import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  //https://restcountries.com/v3.1/lang/spa

  const [countries, setCountries] = useState()

  useEffect(()=>{
    axios.get('https://restcountries.com/v3.1/lang/spa')
      .then(res => setCountries(res.data))
      .catch(err => console.log(err))
  },[])

  console.log(countries)
  return (
    <div className="App">
      <h1>Clase3.2</h1>
    </div>
  )
}

export default App
