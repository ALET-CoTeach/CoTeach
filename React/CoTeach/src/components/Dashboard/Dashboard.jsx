import React from 'react';
import  { Redirect } from 'react-router-dom';


// import TeacherDashboard from './TeacherDashboard';
// import EmployerDashboard from './EmployerDashboard';
// import CoordinatorDashboard from './CoordinatorDashboard';

var loggedInUserType = 'Teacher';

function Dashboard() {
    if (loggedInUserType == 'Teacher'){
        return (
            <div>
                {/* <TeacherDashboard /> */}
            </div>
        );
    }

    else if (loggedInUserType == 'Employer'){
        return (
            <div>
                {/* <EmployerDashboard /> */}
            </div>
        );
    }

    else if (loggedInUserType == 'Coordinator'){
        return (
            <div>
                {/* <CoordinatorDashboard /> */}
            </div>
        );
    }

    else {
        return (
            <div>
                {/* <Redirect to='/LandingPage' /> */}
            </div>
        )
    }
};

export default Dashboard;