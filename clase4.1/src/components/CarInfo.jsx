import axios from 'axios'
import React from 'react'

const CarInfo = ({ car, getAllcars, setDataUpd }) => {
    const id = car.id
    const deleteCar = () => {
        axios.delete(`http://cars-crud.academlo.tech/cars/${id}/`)
            .then(res => getAllcars())
            .catch(err => console.log(err))

    }

    const updateCapture = () => {
        setDataUpd(car)
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
            <button onClick={updateCapture}>Actualizar</button>
        </div>
    )
}

export default CarInfo