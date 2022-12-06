import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CarInfo from './components/CarInfo'

function App() {

  const [cars, setCars] = useState()

  const getAllcars = () => {
    axios.get('http://cars-crud.academlo.tech/cars/')
      .then(res => setCars(res.data))
      .catch(err => console.log(err))
  }

  const createNewCars = data => {
    axios.post('http://cars-crud.academlo.tech/cars/', data)
      .then(res => getAllcars())
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllcars()
  }, [])

  const handleClick = () => {
    const data = {
      brand: "nissan",
      model: "f478",
      color: "yellow",
      year: 2023,
      price: "25000"
    }

    createNewCars(data)
  }

  console.log(cars)

  return (
    <div className="App">
      <button onClick={handleClick}>
        Crear nuevo CAR
      </button>
      <div className='car'>
        {
          cars?.map(car => (
            <CarInfo key={car.id}
              car={car}
              getAllcars={getAllcars}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
