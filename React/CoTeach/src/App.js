import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, AddLesson, LoginPage, StatisticsPage, RegisterPage } from "./components";

// FAQ

// About

// User Profiles for Coordinators

// Search by Teacher

// Search by Employer

// Upload Resources

// Profile for schools

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/addLesson" exact component={() => <AddLesson />} />
            <Route path="/login" exact component={() => <LoginPage />} />
            <Route path="/register" exact component={() => <RegisterPage />} />
            <Route path="/statistics" exact component={() => <StatisticsPage />} />
          </Switch>
        </Router>
      </div>
    );
  };
};

export default App;