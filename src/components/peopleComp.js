import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {useParams} from 'react-router'


const People = (props) => {
    const [person, setPerson] = useState('')
    const {id} =  useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`).then(response=>{
                // console.log(response);
                setPerson(response.data)
            })
    })

    return (
        <div>
            <h1>Name: {person.name}</h1>
            <h2>Date of Birth: {person.birth_year}</h2>
            <h2>Physical Appearance: </h2>
            <h3>{person.hair_color} hair</h3>
            <h3>{person.skin_color} skin</h3>
            <h3>{person.eye_color} eye(s)</h3>
            <h3>{person.height} inches tall</h3>
        </div>
    )
}

export default People