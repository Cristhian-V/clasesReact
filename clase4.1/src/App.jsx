import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CarInfo from './components/CarInfo'
import FromNewCar from './components/FromNewCar'

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


  console.log(cars)

  return (
    <div className="App">
      <div className='form-container'>
        <FromNewCar 
        createNewCars={createNewCars}
        />
      </div>
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
