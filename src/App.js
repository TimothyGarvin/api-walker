import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './components/home';
import People from './components/peopleComp';
import Planet from './components/planetComponent';
import Error from './components/errorComp';


function App() {
  return (
    <div className="App">
      <h1>API Skywalker</h1>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/people/:id" element={<People/>} />
        <Route path="/planets/:id" element={<Planet/>} />
        <Route path="/error" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
