import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [user, setUser] = useState()
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    axios.get('https://randomuser.me/api/')
      .then(res => setUser(res.data.results[0]))
      .catch(err => setUser(err))
  }, [counter])

  //const name = `${user?.name} ${user?.last}`

  const changeUser = () => {
    setCounter(counter + 1)
  }

  return (
    <div className="App">
      <h1>Clase2.2</h1>
      <img src={user?.picture.large} alt="photo user" />
      <p><b>Nombre: </b> {user?.name.first} {user?.name.last} </p>
      <p><b>Email: </b> {user?.email} </p>
      <p><b>Gender: </b> {user?.gender} </p>
      <button onClick={changeUser}> Change User</button>
    </div>
  )
}

export default App
