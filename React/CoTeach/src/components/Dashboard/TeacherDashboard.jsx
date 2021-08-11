import React from 'react';
import '../../index.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

const { Content, Footer, Sider } = Layout;

function TeacherDashboard() {
    return (
        <Layout>
        <Sider className="sidebar" style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        }}>
        </Sider>
        <Layout className="site-layout">
          <Content className="addLesson-content">
            <div className="site-layout-background">

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>ALET CoTeach 2021</Footer>
        </Layout>
      </Layout>
    )
}

export default TeacherDashboard;