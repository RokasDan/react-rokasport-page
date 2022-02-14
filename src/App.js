import './App.css';
import Navigator from './Components/Navigator'
import About from './Pages/About'
import Software from './Pages/Software'
import Audio from './Pages/Audio'
import Home from './Pages/Home'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">
            <Navigator />
            <div>
                <Routes>
                    <Route path="/" exact element={<Home />}/>

                    <Route path="/about" element={<About />}/>

                    <Route path="/software" element={<Software />}/>

                    <Route path="/audio" element={<Audio />}/>
                </Routes>
            </div>
        </div>
      </Router>
  );
}
export default App;
