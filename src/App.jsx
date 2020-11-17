import React from 'react'
import { Redirect, BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Home from "./components/Home"
import New from "./components/New"
import OldHome from "./components/OldHome";

function App() {
  return (
    <>
      <Router>
        <nav>
          <Link to="/12?color=red&year=2014">
            Toyota Camry
          </Link>
          <Link to="/27?color=black&year=2015">
            Honda Accord
          </Link>
          <Link to="/27?color=yellow&year=2018">
            Nissan Juke
          </Link>
          <Link to="/pages/new">New</Link>
        </nav>
        <Switch>
          <Route exact path="/:id?" component={Home} />
          <Route exact path="/pages/old-home/:id?" component={OldHome} />
          <Route exact path="/pages/new" component={New} />
          <Redirect exact from="/pages/old" to="/pages/new"/>
          <Route children={() => <h1>404 page</h1>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
