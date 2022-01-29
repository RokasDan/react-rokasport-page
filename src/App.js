import './App.css';
import Navigator from './Components/Navigator'
import About from './Components/About'
import Software from './Components/Software'
import Audio from './Components/Audio'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">
            <Navigator />
            <div>
                <Routes>
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
