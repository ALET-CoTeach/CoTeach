import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, AddLesson } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/addLesson" exact component={() => <AddLesson />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;