import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../../index.css';
import { Layout, Collapse } from 'antd';

import { InfoCircleOutlined } from '@ant-design/icons';

import MainTable from './Table/MainTable';
import AddLessonModal from './Modal/Modal';
import BookedTable from './Table/BookedTable';
import PendingTable from './Table/PendingTable';

const { Content, Footer, Sider } = Layout;

const { Panel } = Collapse;

class AddLesson extends Component {
  render() {
    return (
      <Layout style={{ paddingTop: 45 }}>
        <Sider className="sidebar" style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}>
          <AddLessonModal />
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Content className="addLesson-content">
            <div className="site-layout-background">
              <Collapse bordered={false} defaultActiveKey={['1', '2', '3']} ghost>
                <Panel className="addLesson-table-title" header="Pending Lessons" key="1">
                  <PendingTable />
                </Panel>
                <Panel className="addLesson-table-title" header="Booked Lessons" key="2">
                  <BookedTable />
                </Panel>
                <Panel className="addLesson-table-title" header="All Lessons" key="3">
                  <MainTable />
                </Panel>
              </Collapse>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>ALET CoTeach 2021</Footer>
        </Layout>
      </Layout>
    )
  };
}

export default AddLesson;