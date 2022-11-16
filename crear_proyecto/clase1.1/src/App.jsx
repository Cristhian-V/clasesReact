import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CardPerson from './components/CardPerson'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <CardPerson />
      <Card text='Hola' color='white' backcolor='blue' />
    </div>
  )
}

export default App
