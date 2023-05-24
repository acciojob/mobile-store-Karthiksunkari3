import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MobileDetails from "./MobileDetails";
import AdminPage from "./AdminPage";
import MobileList from "./MobileList";
import './../styles/App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <MobileList />
          </Route>
          <Route path="/products/:id">
            <MobileDetails />
          </Route>
          <Route path="/admin">
            <AdminPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

