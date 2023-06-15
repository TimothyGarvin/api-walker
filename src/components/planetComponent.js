import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {useParams} from 'react-router'


const Planet = (props) => {
    const [planet, setPlanet] = useState('')
    const {id} =  useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`).then(response=>{
                // console.log(response);
                setPlanet(response.data)
            })
    })

    return (
        <div>
            <h1>Name: {planet.name}</h1>
            <h2>Gravity: {planet.gravity}</h2>
            <h2>Rotational Period: {planet.rotation_period}</h2>
            <h2>Geographical Details: </h2>
            <h3>Climate: {planet.climate}</h3>
            <h3>Terrain: {planet.terrain}</h3>
            <h3>Population: {planet.population}</h3>
        </div>
    )
}

export default Planet