import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, AddLesson, Login } from "./components";
import LoginPage from "./components/LoginPage";
function App() {
  return (
    <div className="App">
      <Router>
      <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/addLesson" exact component={() => <AddLesson />} />
          <Route path="/login" exact component={() => <LoginPage />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;