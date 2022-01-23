import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import BMI from './pages/BMI/BMI'
import Home from './pages/Home/Home'
import Meditation from './pages/meditationPage/Meditation'
import GuidedMeditation from './pages/guidedMeditation/GuidedMeditation';
import UnguidedMeditation from './pages/unguidedMeditation/UnguidedMeditation';
import Diet from './pages/Diet/Diet';
import Exercise from './pages/Exercises/Exercise';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bmi" component={BMI} />
          <Route exact path="/meditation" component={Meditation} />
          <Route exact path="/guidedMeditation" component={GuidedMeditation} />
          <Route exact path="/unguidedMeditation" component={UnguidedMeditation} />
          <Route exact path="/exercises" component={Exercise} />
          <Route exact path="/diet" component={Diet} />
          <Route exact path="*" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
