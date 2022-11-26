import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Country = () => {
    const [countries, setCountries] = useState()

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/name/peru')
            .then(res => setCountries(res.data[0]))
            .catch(err => setCountries(err))
    }, [])

    console.log(countries)
    return (
        <div>
            <img src={countries?.flags.png} alt='Bandera del pais' />
            <h1>{countries?.name.common}</h1>
            <ul>
                <li><b>Capital: </b> {countries?.capital[0]} </li>
                <li><b>Population: </b> {countries?.population} </li>
            </ul>
        </div>
    )
}

export default Country