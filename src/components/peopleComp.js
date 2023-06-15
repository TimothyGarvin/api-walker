import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {useParams} from 'react-router'
import { useNavigate } from 'react-router-dom';


const People = (props) => {
    const [person, setPerson] = useState('')
    const {id} =  useParams();
    const navigate = useNavigate();

    const returnHome = () => {
        navigate('/')
    }

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`).then(response=>{
                // console.log(response);
                setPerson(response.data)
            }).catch (err => navigate('/error'))
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
            <button onClick={returnHome}>Return To Home Page</button>
        </div>


    )
}

export default People