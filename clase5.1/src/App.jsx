import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Location from './components/Location.jsx'
import MainLayout from './components/MainLayout'

function App() {

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li> <Link to='/'>Home</Link> </li>
            <li> <Link to='/about'>About</Link> </li>
            <li> <Link to='/contact'>Contact</Link> </li>
            <li> <Link to='/location/1'>Location</Link> </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<h1>Soy el Home</h1>} />
        <Route path='/about' element={<h1>Soy el about</h1>} />
        <Route path='/contact' element={<h1>Soy el contact</h1>} />
        <Route path='/location/:id' element={<Location />} />

        {/* RUTAS ANIDADAS */}
        <Route element={<MainLayout />}>

        </Route>
      </Routes>
    </div>
  )
}

export default App
