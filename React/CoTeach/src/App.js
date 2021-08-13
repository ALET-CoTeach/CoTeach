import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SchoolProfile, 
  Navigation, 
  Dashboard, 
  Users, 
  About, 
  AddLesson, 
  LoginPage, 
  StatisticsPage, 
  RegisterPage, 
  UTCProfiles, 
  UTCProfilesTwo, 
  LessonBooking, 
  LandingPage, 
  CoordinatorEntries,
  TeacherPostCreationPage,
  CoordinatorPostVerificationPage,  
} from "./components";

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
            <Route path="/" exact component={() => <Dashboard />} />
            <Route path="/users" exact component={() => <Users />} />
            <Route path="/about" exact component={() => <About />} />
            <Route path="/addLesson" exact component={() => <AddLesson />} />
            <Route path="/login" exact component={() => <LoginPage />} />
            <Route path="/register" exact component={() => <RegisterPage />} />
            <Route path="/statistics" exact component={() => <StatisticsPage />} />
            <Route path="/profiles/school" exact component={() => <SchoolProfile />} />
            <Route path="/utcprofiles" exact component={() => <UTCProfiles /> } />
            <Route path="/lessonbooking" exact component={() => <LessonBooking /> } />
            <Route path="/LandingPage" exact component={() => <LandingPage />}  />
            <Route path="/UTCProfilesTwo" exact component={() => <UTCProfilesTwo />}  />
            <Route path="/CoordinatorEntries" exact component={() => <CoordinatorEntries />}  />
            <Route path="/TeacherPostCreationPage" exact component={() => <TeacherPostCreationPage />}  />
            <Route path="/CoordinatorPostVerificationPage" exact component={() => <CoordinatorPostVerificationPage />}  />
          </Switch>
        </Router>
      </div>
    );
  }
  return <LoginPage />;
};

export default App;