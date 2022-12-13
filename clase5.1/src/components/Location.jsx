import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Location = () => {

    const [location, setLocation] = useState()

    const { id } = useParams()

    useEffect(() => {
        const URL = `https://rickandmortyapi.com/api/location/${id}/`
        axios.get(URL)
            .then(res => setLocation(res.data))
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            <h1>{location?.name}  #{location?.id}</h1>
        </div>
    )
}

export default Location