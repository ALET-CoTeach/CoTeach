import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  About,
  Activity,
  ActivityBookings,
  AdminSignIn,
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
          <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/signin" exact element={<SignIn />} />
            <Route path="/admin" exact element={<AdminSignIn />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/statistics" exact element={<Statistics />} />
            <Route path="/schools" exact element={<Profile type="schools" />} />
            <Route path="/organisations" exact element={<Profile type="orgs" />} />
            <Route path="/activitybookings" exact element={<ActivityBookings />} />
            <Route path="/activity/:id" exact element={<Activity />} />
            <Route path="/createpost" exact element={<CreatePost />} />
            <Route path="/reviewpost" exact element={<ReviewPost />} />
            <Route path="/control" exact element={<Control />} />
          </Routes>
        </Router>
      </div>
    );
  }

  return <SignIn />;
};

export default App;
