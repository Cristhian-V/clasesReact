import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import FormUser from './components/FormUser'

function App() {

  const { user } = useSelector(state => state)

  console.log(user)

  return (
    <div className="App">
      <FormUser />
      {
        user && <h2>{`Hola, soy ${user.firstName} ${user.lastName}, mi email es ${user.email}, tengo ${user.age} años y ${user.isMember ? 'soy' : 'no soy'} miembro.`}</h2>
      }

    </div>
  )
}

export default App
