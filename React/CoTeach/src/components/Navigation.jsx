import '../index.css';
import 'antd/dist/antd.css';
import React from 'react';
import { Menu } from 'antd';
import { Link, withRouter } from "react-router-dom";
import { HomeOutlined, BookOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

function Navigation(props) {
  state = {
    current: 'home',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  const { current } = this.state;
  return (
    <Menu className="navbar" onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">
          Home
        </Link>
      </Menu.Item>
      <Menu.Item key="addLesson" icon={<BookOutlined />}>
        <Link to="/addLesson">
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
            <Menu.Item key="setting:4"><Link to="login">Login</Link></Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Profiles">
            <Menu.Item key="setting:5"><Link to="UTCProfiles">UTC Profiles</Link></Menu.Item>
            <Menu.Item key="setting:6"><Link to="UTCProfilesTwo">UTC Profiles 2</Link></Menu.Item>
            <Menu.Item key="setting:7"><Link to="LandingPage">Landing Page</Link></Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Table Dashboards">
            <Menu.Item key="setting:8"><Link to="LessonBooking">Lesson Booking (employer)</Link></Menu.Item>
          </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  );
}

export default withRouter(Navigation);