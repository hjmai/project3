import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import EventDetail from './pages/EventDetail/EventDetail';
import CreateEvent from './pages/createEvent/createEvent';
import Categories from "./Components/Categories/Categories";
import { ListedEvents } from "./pages/ListedEvents/ListedEvents";

class App extends Component {

  render() {
    return (
      <div>
          <Router>
            <div>
              <Switch>
                <Route exact path = "/" exact component = {LandingPage} />
                <Route exact path = "/listedevents" component = {ListedEvents} />
                <Route exact path = "/eventdetail" component = {EventDetail} />
                <Route exact path = "/categories" component = {Categories} />
                <Route exact path = "/create" component = {CreateEvent} />
              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
