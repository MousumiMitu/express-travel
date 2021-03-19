import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Rides from "./Components/Rides/Rides";
import NoMatch from "./Components/NoMatch/NoMatch";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Rides />
          </Route>
          <Route exact path="/">
            <Rides />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
