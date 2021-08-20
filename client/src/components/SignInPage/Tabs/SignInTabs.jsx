import React from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';

import TeacherForm from './Forms/TeacherForm';
import SLTForm from './Forms/SLTForm';
import EmployerForm from './Forms/EmployerForm';

const { TabPane } = Tabs;

const LoginTabs = ({ changeAuthLevel }) => {
  const handleChange = (key) => {
    if (key === '1') {
      changeAuthLevel('teacher');
    } else if (key === '2') {
      changeAuthLevel('slt');
    } else if (key === '3') {
      changeAuthLevel('employer');
    }
  };

  return (
    <>
      <br />
      <Tabs
        defaultActiveKey="1"
        centered
        size="50%"
        onChange={handleChange}
      >
        <TabPane tab="Teacher" key="1">
          <TeacherForm />
        </TabPane>
        <TabPane tab="Coordinator" key="2">
          <SLTForm />
        </TabPane>
        <TabPane tab="Employer" key="3">
          <EmployerForm />
        </TabPane>
      </Tabs>
    </>
  );
};

export default LoginTabs;
