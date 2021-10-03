import React, { useState } from 'react';

import { auth } from '@actions';
import { useDispatch } from 'react-redux';

import { Menu, Badge, Switch } from 'antd';
import { NavLink, withRouter } from 'react-router-dom';

import {
  HomeOutlined, BookOutlined, SettingOutlined, BellOutlined,
} from '@ant-design/icons';

import Toolbar from './Toolbar/Toolbar';

const { SubMenu } = Menu;

const Navigation = () => {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState('home');

  const handleClick = (e) => {
    console.log('click', e);
    setCurrent(e.key);
  };

  return (
    <>
      <Menu className="navbar" onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <NavLink to="/">
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item key="activitybookings" icon={<BookOutlined />}>
          <NavLink to="/activitybookings">
            Activity Bookings
          </NavLink>
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Work In Progress">
          <Menu.ItemGroup title="Dashboards">
            <Menu.Item key="setting:1"><NavLink to="/statistics">Lesson Statistics</NavLink></Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Accounts">
            <Menu.Item key="setting:3"><NavLink to="/register">Register</NavLink></Menu.Item>
            <Menu.Item key="setting:4"><NavLink to="/signin">Sign In</NavLink></Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Profiles">
            <Menu.Item key="setting:5"><NavLink to="/schools">Coordinator Contact</NavLink></Menu.Item>
            <Menu.Item key="setting:6"><NavLink to="/control">Admin Control Tables</NavLink></Menu.Item>
            <Menu.Item key="setting:7"><NavLink to="/">Landing Page</NavLink></Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Table Dashboards">
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Post Creation / Verification">
            <Menu.Item key="setting:10"><NavLink to="/createpost">Create Post</NavLink></Menu.Item>
            <Menu.Item key="setting:11"><NavLink to="/reviewpost">Review Post</NavLink></Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Dashboards">
            <Menu.Item key="setting:12"><NavLink to="/dashboard">Dashboard</NavLink></Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="signout">
          <NavLink to="/" onClick={() => dispatch(auth.signOut())}>Sign Out</NavLink>
          </Menu.Item>
        {/* <Menu.Item key="notifications">
          <Badge count={5}>
            <Toolbar />
          </Badge>
        </Menu.Item> */}
      </Menu>
    </>
  );
};

export default withRouter(Navigation);
