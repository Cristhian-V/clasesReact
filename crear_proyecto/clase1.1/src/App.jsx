import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CardPerson from './components/CardPerson'
import Card from './components/Card'

function App() {

  const hobbies = ['Musica', 'Ir a la playa', 'videojuegos', 'Peliculas']
  const favoriteFood = ['Porotos con riendas', 'Cazuela', 'Fideos con salsa', 'Majadito']
  const stackTech = ['HTML', 'CSS', 'SASS', 'REACT']

  return (
    <div className="App">
      <CardPerson />
      <Card title='Hobbies' list={hobbies} bgColor='blue' />
      <Card title='Mi comida favorita' list={favoriteFood} bgColor='red' />
      <Card title='Mi stack tech' list={stackTech} bgColor='green' />
    </div>
  )
}

export default App
