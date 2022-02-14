import React from 'react';

import { Layout, Tabs } from 'antd';

import apiHooks from '@services/hooks';

// tables
import {
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
  const { data: teacherData } = apiHooks.useGetTeachersQuery();
  const { data: employerData } = apiHooks.useGetEmployersQuery();
  const { data: sltData } = apiHooks.useGetSltsQuery();
  const { data: schoolData } = apiHooks.useGetSchoolsQuery();
  const { data: companyData } = apiHooks.useGetCompaniesQuery();
  console.log(companyData)

  return (
    <Layout className="pt-5">
      <Layout className="site-layout">
        <Content className="addLesson-content">
          <div className="site-layout-background">
            <h1 className="text-center HeadingGrey mt-10" >Admin Control Tables</h1>
            <Tabs defaultActiveKey="1" centered size="large">
              <TabPane tab="Admins" key="1">
                <div style={{ margin: "1%" }}>
                  <AdminTable />
                </div>
              </TabPane>
              <TabPane tab="SLT" key="2">
                <div style={{ margin: "1%" }}>
                  <SLTTable data={sltData} />
                </div>
              </TabPane>
              <TabPane tab="Teachers" key="3">
                <div style={{ margin: "1%" }}>
                  <TeacherTable data={teacherData} />
                </div>
              </TabPane>
              <TabPane tab="Employers" key="4">
                <div style={{ margin: "1%" }}>
                  <EmployerTable data={employerData} />
                </div>
              </TabPane>
              <TabPane tab="Schools" key="5">
                <div style={{ margin: "1%" }}>
                  <SchoolTable data={schoolData} />
                </div>
              </TabPane>
              <TabPane tab="Companies" key="6">
                <div style={{ margin: "1%" }}>
                  <CompanyTable data={companyData} />
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
