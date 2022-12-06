import axios from 'axios'
import React from 'react'

const CarInfo = ({ car, getAllcars }) => {
    const id = car.id
    const deleteCar = () => {
        axios.delete(`http://cars-crud.academlo.tech/cars/${id}/`)
            .then(res => getAllcars())
            .catch(err => console.log(err))

    }

    const patchCar = () => {
        const data = { price: '1000' }
        const URL = `http://cars-crud.academlo.tech/cars/${id}/`
        console.log(URL)
        axios.patch(URL, data)
            .then(res => getAllcars())
            .catch(err => console.log(err))
    }
    return (
        <div>
            <ul>
                <li><b>Brand: </b>{car.brand}</li>
                <li><b>Color: </b>{car.color}</li>
                <li><b>Model: </b>{car.model}</li>
                <li><b>Price: </b>{car.price}</li>
                <li><b>Year: </b>{car.year}</li>
            </ul>
            <button onClick={deleteCar}>Eliminar</button>
            <button onClick={patchCar}>Actualizar</button>
        </div>
    )
}

export default CarInfo