import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardUser from './components/CardUser'

function App() {
  const [users, setUsers] = useState()
  

  useEffect(()=>{
    axios.get('https://randomuser.me/api/?results=10')
      .then(res => setUsers(res.data.results))
      .catch(err => console.log(err))
  },[])
  

  return (
    <div className="App">
      {
        users?.map(user =>(
          <CardUser user={user} key={user.id.value}/>
        ))
      }
    </div>
  )
}

export default App
