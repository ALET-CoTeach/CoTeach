import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Layout, Collapse, Tabs } from 'antd';

// tables
import AdminTables from './Tables/AdminTables';
import SLTTable from './Tables/SLTTable';
import TeachersTable from './Tables/TeachersTable';
import EmployersTables from './Tables/EmployerTable';
import SchoolTable from './Tables/SchoolTable';
import CompanyTable from './Tables/CompanyTable';
import AddressTable from './Tables/AddressTable';

// modals
import AddAdminModal from './Modals/AddAdminModal';
import AddSLTModal from './Modals/AddSLTModal';
import AddTeacherModal from './Modals/AddTeacherModal';

const { Content, Footer, Sider } = Layout;

const { Panel } = Collapse;

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

const AdminControlTables = () => (
    <Layout style={{ paddingTop: 45 }}>
        <Layout className="site-layout">
            <Content className="addLesson-content">
                <div className="site-layout-background">
                    <h1 className="centerText HeadingGrey" style={{ paddingTop: "1%" }}>Admin Control Tables</h1>
                    <Tabs defaultActiveKey="1" onChange={callback} centered size="large">
                        <TabPane tab="Admins" key="1">
                            <AddAdminModal />
                            <AdminTables />
                        </TabPane>
                        <TabPane tab="SLT" key="2">
                            <AddSLTModal />
                            <SLTTable />
                        </TabPane>
                        <TabPane tab="Teachers" key="3">
                            <AddTeacherModal />
                            <TeachersTable />
                        </TabPane>
                        <TabPane tab="Employers" key="4">
                            <EmployersTables />
                        </TabPane>
                        <TabPane tab="Schools" key="5">
                            <SchoolTable />
                        </TabPane>
                        <TabPane tab="Companies" key="6">
                            <CompanyTable />
                        </TabPane>
                        <TabPane tab="Addresses" key="7">
                            <AddressTable />
                        </TabPane>
                    </Tabs>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>ALET CoTeach 2021</Footer>
        </Layout>
    </Layout>
);

export default AdminControlTables;