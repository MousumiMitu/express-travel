import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NoMatch from "./Components/NoMatch/NoMatch";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import RidingDetails from "./Components/RidingDetails/RidingDetails";
import Login from "./Components/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        {/* <p>name: {loggedInUser.name}</p> */}
        <Router>
          <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/ride/:rideId">
              <RidingDetails />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
