import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Home = (props) => {

    const [source, setSource] = useState('people')
    const [id, setId] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        navigate(`/${source}/${id}`)
    }
    
    const handleSource = (e) => {
        setSource(e.target.value)
        
    }
    
    const handleId = (e) => {
        setId(e.target.value)
    }
    
    console.log(source, id)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Search: </label>
                <select onChange={handleSource}>
                    <option value='people'>People</option>
                    <option value='planets'>Planet</option>
                </select>
                <div/>
                <label value='ID'>ID: </label>
                <input type='number' onChange={handleId} />
                <div/>
                <input type='submit' value='Submit Search'/>
            </form>

        </div>
    )
}

export default Home