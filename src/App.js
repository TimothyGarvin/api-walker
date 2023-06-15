import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './components/home';
import People from './components/peopleComp';
import Planet from './components/planetComponent';


function App() {
  return (
    <div className="App">
      <h1>API Skywalker</h1>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/people/:id" element={<People></People>} />
        <Route path="/planets/:id" element={<Planet></Planet>} />
      </Routes>
    </div>
  );
}

export default App;
