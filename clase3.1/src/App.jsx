import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardUser from './components/CardUser'

function App() {
  const [users, setUsers] = useState()
  const [limit, setLimit] = useState()
  
  const getUsers= ()=>{
    setUsers([])
    if (limit){
    axios.get(`https://randomuser.me/api/?results=${limit}`)
      .then(res => setUsers(res.data.results))
      .catch(err => console.log(err))
  }}    

  useEffect(()=>{
    getUsers()
  },[])
  
  const handleChange = e=>{
    setLimit(e.target.value)
  }

  return (
    <div className="App">
      <input type="text" onChange={handleChange}/>
      <button onClick={getUsers}> Get Users </button>
      {
        users?.map(user =>(
          <CardUser 
          key={user.id.value} 
          user={user} 
          />
        ))
      }
    </div>
  )
}

export default App
