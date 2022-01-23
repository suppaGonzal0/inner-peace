import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import BMI from './pages/BMI/BMI'
import Home from './pages/Home/Home'
import Meditation from './pages/meditationPage/Meditation' 
import GuidedMeditation from './pages/guidedMeditation/GuidedMeditation';
import UnguidedMeditation from './pages/unguidedMeditation/UnguidedMeditation';
import Diet from './pages/Diet/Diet';

function App() {
  return (
    <div className="App">
      <UnguidedMeditation/>
    </div>
  );
}

export default App;
