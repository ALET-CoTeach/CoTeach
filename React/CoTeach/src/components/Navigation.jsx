import '../index.css';
import 'antd/dist/antd.css';
import React from 'react';
import { Menu } from 'antd';
import { Link, withRouter } from "react-router-dom";
import { HomeOutlined, BookOutlined, SettingsOutlined } from '@ant-design/icons';

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
    <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <div class={`nav-item  ${props.location.pathname === "/" ? "active" : ""}`}>
          <Link class="nav-link" to="/">
            Home
            <span class="sr-only">(current)</span>
          </Link>
        </div>
      </Menu.Item>
      <Menu.Item key="addLesson" icon={<BookOutlined />}>
        <div class={`nav-item  ${props.location.pathname === "/addLesson" ? "active" : ""}`} >
          <Link class="nav-link" to="/addLesson">
            Add Lesson
          </Link>
        </div>
      </Menu.Item>
    </Menu>
  );
}

export default withRouter(Navigation);