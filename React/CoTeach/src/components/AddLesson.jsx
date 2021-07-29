import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Menu } from 'antd';
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

import AddLessonModal from './addLessonComponents/Modal/Modal';
import TableComponent from './addLessonComponents/Table/Table';
import MainTable from './addLessonComponents/Table/MainTable';
import BookedTable from './addLessonComponents/Table/BookedTable';
import PendingTable from './addLessonComponents/Table/PendingTable';
import Navigation from './Navigation';

const { Header, Content, Footer, Sider } = Layout;

function AddLesson() {
  return (
    <Layout>
      <Sider className="sidebar">
        <AddLessonModal />
      </Sider>
      <Layout className="site-layout">
        <Content className="addLesson-content">
          <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
            <span className="addLesson-table-title">Pending Lessons</span>
            <PendingTable />
            <span className="addLesson-table-title">Booked Lessons</span>
            <BookedTable />
            <span className="addLesson-table-title">All Lessons</span>
            <MainTable />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>ALET CoTeach 2021</Footer>
      </Layout>
    </Layout>
  )
}

export default AddLesson;