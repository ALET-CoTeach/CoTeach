import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Layout, Collapse, Tabs } from 'antd';

import AdminTables from './Tables/AdminTables';
import SLTTable from './Tables/SLTTable';

const { Content, Footer, Sider } = Layout;

const { Panel } = Collapse;

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

const AdminControlTables = () => (
    <Layout style={{ paddingTop: 45 }}>
        <Sider
            className="sidebar"
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
            }}
        >

        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Content className="addLesson-content">
                <div className="site-layout-background">
                    <h1 className="centerText HeadingGrey" style={{ paddingTop: "1%" }}>Admin Control Tables</h1>
                    <Tabs defaultActiveKey="1" onChange={callback} centered size="large">
                        <TabPane tab="Admins" key="1">
                            <AdminTables />
                        </TabPane>
                        <TabPane tab="SLT" key="2">
                            <SLTTable />
                        </TabPane>
                        <TabPane tab="Teachers" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                        <TabPane tab="Employers" key="4">
                            Content of Tab Pane 4
                        </TabPane>
                        <TabPane tab="Schools" key="5">
                            Content of Tab Pane 5
                        </TabPane>
                        <TabPane tab="Companies" key="6">
                            Content of Tab Pane 6
                        </TabPane>
                        <TabPane tab="Addresses" key="7">
                            Content of Tab Pane 7
                        </TabPane>
                    </Tabs>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>ALET CoTeach 2021</Footer>
        </Layout>
    </Layout>
);

export default AdminControlTables;