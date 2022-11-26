import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [countries, setCountries] = useState()
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/name/bolivia')
      .then(res => setCountries(res.data[0]))
      .catch(err => setCountries(err))
  }, [])

  console.log(countries)

  return (
    <div className="App">
      <img src={countries?.flags.png} alt="" />
      <p><b>Name:</b> {countries?.name.common}</p>
      <p><b>Population:</b> {countries?.population}</p>
      <p><b>Capital:</b> {countries?.capital[0]}</p>

    </div>
  )
}

export default App