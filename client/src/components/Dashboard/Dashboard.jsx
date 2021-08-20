import React from 'react';
import { Redirect } from 'react-router-dom';

// import TeacherDashboard from './TeacherDashboard';
// import EmployerDashboard from './EmployerDashboard';
// import CoordinatorDashboard from './CoordinatorDashboard';

const loggedInUserType = 'Teacher';

const Dashboard = () => {
  if (loggedInUserType == 'Teacher') {
    return (
      <div>
        {/* <TeacherDashboard /> */}
      </div>
    );
  }

  if (loggedInUserType == 'Employer') {
    return (
      <div>
        {/* <EmployerDashboard /> */}
      </div>
    );
  }

  if (loggedInUserType == 'Coordinator') {
    return (
      <div>
        {/* <CoordinatorDashboard /> */}
      </div>
    );
  }

  return (
    <div>
      {/* <Redirect to='/LandingPage' /> */}
    </div>
  );
};

export default Dashboard;
