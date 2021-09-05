import React, { useState } from 'react';

import { Layout, Collapse, Tabs } from 'antd';

// tables
import {
  AddAdminModal,
  AddCompanyModal,
  AddEmployerModal,
  AddSchoolModal,
  AddSLTModal,
  AddTeacherModal,

  AdminTable,
  CompanyTable,
  EmployerTable,
  SchoolTable,
  SLTTable,
  TeacherTable,
} from '@components';

const { Content, Footer } = Layout;

const { TabPane } = Tabs;

const Control = () => {
  const callback = (key) => {
    console.log(key);
  };

  return (
    <Layout style={{ paddingTop: 45 }}>
      <Layout className="site-layout">
        <Content className="addLesson-content">
          <div className="site-layout-background">
            <h1 className="centerText HeadingGrey" style={{ paddingTop: '1%' }}>Admin Control Tables</h1>
            <Tabs defaultActiveKey="1" onChange={callback} centered size="large">
              <TabPane tab="Admins" key="1">
                <div style={{ margin: "1%" }}>
                  <AdminTable />
                </div>
              </TabPane>
              <TabPane tab="SLT" key="2">
                <div style={{ margin: "1%" }}>
                  <AddSLTModal />
                  <SLTTable />
                </div>
              </TabPane>
              <TabPane tab="Teachers" key="3">
                <div style={{ margin: "1%" }}>
                  <AddTeacherModal />
                  <TeacherTable />
                </div>
              </TabPane>
              <TabPane tab="Employers" key="4">
                <div style={{ margin: "1%" }}>
                  <AddEmployerModal />
                  <EmployerTable />
                </div>
              </TabPane>
              <TabPane tab="Schools" key="5">
                <div style={{ margin: "1%" }}>
                  <AddSchoolModal />
                  <SchoolTable />
                </div>
              </TabPane>
              <TabPane tab="Companies" key="6">
                <div style={{ margin: "1%" }}>
                  <AddCompanyModal />
                  <CompanyTable />
                </div>
              </TabPane>
            </Tabs>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>ALET CoTeach 2021</Footer>
      </Layout>
    </Layout>
  );
};

export default Control;
