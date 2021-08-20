import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  SchoolProfile,
  Navigation,
  Dashboard,
  //Users,
  About,
  AddLesson,
  SignInPage,
  StatisticsPage,
  RegisterPage,
  UTCProfiles,
  UTCProfilesTwo,
  LessonBooking,
  LandingPage,
  CoordinatorEntries,
  TeacherPostCreationPage,
  CoordinatorPostVerificationPage,
  TeacherDashboard,
} from './components';

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
            {/*  <Route path="/users" exact component={() => <Users />} />  */}
            <Route path="/about" exact component={() => <About />} />
            <Route path="/addlesson" exact component={() => <AddLesson />} />
            <Route path="/signin" exact component={() => <SignInPage />} />
            <Route path="/register" exact component={() => <RegisterPage />} />
            <Route path="/statistics" exact component={() => <StatisticsPage />} />
            <Route path="/profiles/school" exact component={() => <SchoolProfile />} />
            <Route path="/utcprofiles" exact component={() => <UTCProfiles />} />
            <Route path="/lessonbooking" exact component={() => <LessonBooking />} />
            <Route path="/landingpage" exact component={() => <LandingPage />} />
            <Route path="/utcprofiles2" exact component={() => <UTCProfilesTwo />} />
            <Route path="/coordinatorentries" exact component={() => <CoordinatorEntries />} />
            <Route path="/teacherpostcreationpage" exact component={() => <TeacherPostCreationPage />} />
            <Route path="/coordinatorpostverification" exact component={() => <CoordinatorPostVerificationPage />} />
            <Route path="/teacherdashboard" exact component={() => <TeacherDashboard />} />
          </Switch>
        </Router>
      </div>
    );
  }

  return <SignInPage />;
};

export default App;
