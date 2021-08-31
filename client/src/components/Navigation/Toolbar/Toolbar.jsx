import React from 'react';

import { Menu, Dropdown, message } from 'antd';
import { BellOutlined } from '@ant-design/icons';

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const Toolbar = () => (
  <Dropdown overlay={menu}>
    <a onClick={(e) => e.preventDefault()}>
      <BellOutlined style={{ fontSize: '20px' }} />
    </a>
  </Dropdown>
);

export default Toolbar;
