import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  About,
  ActivityBookings,
  Control,
  CreatePost,
  Dashboard,
  LandingPage,
  Profile,
  Register,
  ReviewPost,
  SignIn,
  Statistics,
} from '@pages';

import { Navigation } from '@components';

// User Profiles for Coordinators

// Search by Teacher

// Search by Employer

// Upload Resources

// Profile for schools

const isLoggedIn = true;

const App = () => {
  if (isLoggedIn) {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <LandingPage />} />
            <Route path="/dashboard" exact component={() => <Dashboard />} />
            <Route path="/about" exact component={() => <About />} />
            <Route path="/signin" exact component={() => <SignIn />} />
            <Route path="/register" exact component={() => <Register />} />
            <Route path="/statistics" exact component={() => <Statistics />} />
            <Route path="/schools" exact component={() => <Profile type="schools" />} />
            <Route path="/organisations" exact component={() => <Profile type="orgs" />} />
            <Route path="/activitybookings" exact component={() => <ActivityBookings />} />
            <Route path="/landingpage" exact component={() => <LandingPage />} />
            <Route path="/createpost" exact component={() => <CreatePost />} />
            <Route path="/reviewpost" exact component={() => <ReviewPost />} />
            <Route path="/control" exact component={() => <Control />} />
          </Switch>
        </Router>
      </div>
    );
  }

  return <SignIn />;
};

export default App;
