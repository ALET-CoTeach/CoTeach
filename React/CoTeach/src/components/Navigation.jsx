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
      <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  );
}

export default withRouter(Navigation);