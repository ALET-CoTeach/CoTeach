import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Collapse } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import MainTable from './addLessonComponents/Table/MainTable';
import AddLessonModal from './addLessonComponents/Modal/Modal';
import BookedTable from './addLessonComponents/Table/BookedTable';
import PendingTable from './addLessonComponents/Table/PendingTable';

const { Content, Footer, Sider } = Layout;

const { Panel } = Collapse;

function AddLesson() {
  return (
    <Layout>
      <Sider className="sidebar">
        <AddLessonModal />
      </Sider>
      <Layout className="site-layout">
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
}

export default AddLesson;