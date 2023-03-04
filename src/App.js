import './App.css';
import Navigator from './Components/Navigator'
import About from './Pages/About'
import Software from './Pages/Software'
import Audio from './Pages/Audio'
import Home from './Pages/Home'

import Nottcraft from './Pages/softwareProjects/Nottcraft'

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="app-content">
          <Navigator/>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/software" element={<Software/>}/>
            <Route path="/audio" element={<Audio/>}/>
            <Route path="/Nottcraft" element={<Nottcraft/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
