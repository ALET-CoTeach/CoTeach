import React, { useState } from 'react';
import '../../index.css';
import 'antd/dist/antd.css';
import { Menu, Badge, Switch } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import {
  HomeOutlined, BookOutlined, SettingOutlined, BellOutlined,
} from '@ant-design/icons';
import Toolbar from './Toolbar/Toolbar';

const { SubMenu } = Menu;

const Navigation = () => {
  const [current, setCurrent] = useState('home');

  const handleClick = (e) => {
    console.log('click', e);
    setCurrent(e.key);
  };

  return (
    <>
      <Menu className="navbar" onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="LandingPage">
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="addLesson" icon={<BookOutlined />}>
          <Link to="AddLesson">
            Add Lesson
          </Link>
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Work In Progress">
          <Menu.ItemGroup title="Dashboards">
            <Menu.Item key="setting:1"><Link to="statistics">Lesson Statistics</Link></Menu.Item>
            <Menu.Item key="setting:2"><Link to="/">Social Media Statistics</Link></Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Accounts">
            <Menu.Item key="setting:3"><Link to="register">Register</Link></Menu.Item>
            <Menu.Item key="setting:4"><Link to="signin">Sign In</Link></Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Profiles">
            <Menu.Item key="setting:5"><Link to="UTCProfiles2">Coordinator Contact</Link></Menu.Item>
            <Menu.Item key="setting:6"><Link to="LandingPage">Landing Page</Link></Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Table Dashboards">
            <Menu.Item key="setting:7"><Link to="LessonBooking">Lesson Booking (employer)</Link></Menu.Item>
            <Menu.Item key="setting:8"><Link to="CoordinatorEntries">Coordinator Entries</Link></Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Post Creation / Verification">
            <Menu.Item key="setting:9"><Link to="TeacherPostCreationPage">Teacher Post Creation</Link></Menu.Item>
            <Menu.Item key="setting:10"><Link to="CoordinatorPostVerification">Post Review Page</Link></Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Dashboards">
            <Menu.Item key="setting:11"><Link to="TeacherDashboard">Teacher Dashboard</Link></Menu.Item>
            <Menu.Item key="setting:12"><Link to="employerdashboard">Employer Dashboard</Link></Menu.Item>
            <Menu.Item key="setting:13"><Link to="coordinatordashboard">Coordinator Dashboard</Link></Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="notifications">
          <Badge count={5}>
            <Toolbar />
          </Badge>
          {/* <span style={{ paddingLeft: '10px' }}>Notifications</span> */}
        </Menu.Item>
      </Menu>
    </>
  );
};

export default withRouter(Navigation);
