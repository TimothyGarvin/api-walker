import React from 'react';
import {useNavigate} from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();

    const returnHome = () => {
        navigate('/')
    }

    return (
    <div>
        <h1>These Aren't The Droids You're looking for...</h1>
        <img src={'https://media.tenor.com/TlfAvuz0tLMAAAAC/obi-wan-kenobi-these-are-not-the-droids.gif'} alt="Obi Wan Jedi Mind Tricks" />
        <div/>
        <button onClick={returnHome}>Return To Home Page</button>
    </div>
    )
}

export default Error