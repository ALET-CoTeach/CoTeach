import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, Users, About, AddLesson, LoginPage, StatisticsPage, RegisterPage, UTCProfiles, UTCProfilesTwo, LessonBooking, LandingPage } from "./components";

// User Profiles for Coordinators

// Search by Teacher

// Search by Employer

// Upload Resources

// Profile for schools

var isLoggedIn = true;

function App() {
  if (isLoggedIn){
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/users" exact component={() => <Users />} />
            <Route path="/about" exact component={() => <About />} />
            <Route path="/addLesson" exact component={() => <AddLesson />} />
            <Route path="/login" exact component={() => <LoginPage />} />
            <Route path="/register" exact component={() => <RegisterPage />} />
            <Route path="/statistics" exact component={() => <StatisticsPage />} />
            <Route path="/utcprofiles" exact component={() => <UTCProfiles /> } />
            <Route path="/lessonbooking" exact component={() => <LessonBooking /> } />
            <Route path="/LandingPage" exact component={() => <LandingPage />}  />
            <Route path="/UTCProfilesTwo" exact component={() => <UTCProfilesTwo />}  />
          </Switch>
        </Router>
      </div>
    );
  }
  return <LoginPage />;
};

export default App;