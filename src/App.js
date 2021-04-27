import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Homepage from "./components/Homepage";
import GamePage from "./components/GamePage";
import Scorelist from "./components/Scorelist";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Homepage />
          </Route>
          <Route path="/gameboard">
            <GamePage />
          </Route>
          <Route path="/scorelist">
            <Scorelist />
          </Route>

          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
